import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);

function loadModule(path, dependencies, env = {}) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const testModule = { exports: {} };
  const evaluate = runInNewContext(`(function(require, module, exports, process) { ${outputText}\n })`);
  evaluate((name) => dependencies[name] ?? require(name), testModule, testModule.exports, { env });
  return testModule.exports;
}

const interests = loadModule("../lib/demo-interest.ts", {});

function routeFixture({ configured = true, sendError = null } = {}) {
  const sent = [];
  class Resend {
    emails = {
      send: async (payload) => {
        sent.push(payload);
        return { error: sendError };
      },
    };
  }
  const route = loadModule("../app/api/contact/route.ts", {
    "resend": { Resend },
    "@/lib/demo-interest": interests,
  }, configured ? {
    RESEND_API_KEY: "test-only-not-a-real-key",
    CONTACT_TO_EMAIL: "sales@example.test",
    CONTACT_FROM_EMAIL: "website@example.test",
  } : {});
  const post = (body) => route.POST(new Request("http://localhost/api/contact", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
  }));
  return { post, sent };
}

const identity = { name: "Test Planner", email: "planner@example.test" };

test("only known demo interests resolve to enquiry context", () => {
  assert.equal(interests.resolveDemoInterest("mining-shutdown-management").label, "Mining shutdown management with Shunter");
  assert.equal(interests.resolveDemoInterest("mining-workforce-management").sourcePath, "/solutions/mining-workforce-management");
  assert.equal(interests.resolveDemoInterest("sap-maintenance-analytics").sourcePath, "/metricz");
  for (const value of [undefined, null, "", "other", "<script>alert(1)</script>", ["mining-shutdown-management"], {}]) {
    assert.equal(interests.resolveDemoInterest(value), undefined);
  }
});

for (const [key, label, sourcePath] of [
  ["mining-workforce-management", "Mining workforce management with Shunter", "/solutions/mining-workforce-management"],
  ["sap-maintenance-analytics", "SAP maintenance analytics with Metricz", "/metricz"],
]) {
  test(`${key}: optional message, trusted email context and retained visitor details`, async () => {
    const { post, sent } = routeFixture();
    assert.equal((await post({ ...identity, interest: key, sourcePath: "/untrusted" })).status, 200);
    assert.ok(sent[0].text.includes(`Solution interest: ${label}`));
    assert.ok(sent[0].text.includes(`Source page: ${sourcePath}`));
    assert.ok(sent[0].text.includes(`${label} requested; no additional details provided.`));
    assert.doesNotMatch(sent[0].text, /Shutdown demo|untrusted/);
    assert.equal((await post({ ...identity, interest: key, message: "A specific workflow question.", company: "Synthetic company" })).status, 200);
    assert.match(sent[1].text, /A specific workflow question\./);
    assert.match(sent[1].text, /Company: Synthetic company/);
    assert.equal(sent[1].replyTo, identity.email);
  });
  test(`${key}: identity validation, honeypot and delivery errors`, async () => {
    const { post, sent } = routeFixture();
    for (const fields of [{ email: identity.email }, { name: identity.name }, { ...identity, email: "invalid" }]) {
      assert.equal((await post({ ...fields, interest: key })).status, 400);
    }
    assert.equal((await post({ ...identity, interest: key, website: "bot" })).status, 200);
    assert.equal(sent.length, 0);
    assert.equal((await routeFixture({ configured: false }).post({ ...identity, interest: key })).status, 500);
    assert.equal((await routeFixture({ sendError: { message: "Mock failure" } }).post({ ...identity, interest: key })).status, 500);
  });
}

test("shutdown demo needs no extra message and includes the solution and source in email", async () => {
  const { post, sent } = routeFixture();
  const response = await post({ ...identity, interest: "mining-shutdown-management" });
  assert.equal(response.status, 200);
  assert.equal(sent.length, 1);
  assert.match(sent[0].text, /Solution interest: Mining shutdown management with Shunter/);
  assert.match(sent[0].text, /Source page: \/solutions\/mining-shutdown-management/);
  assert.match(sent[0].text, /no additional details provided/);
  assert.equal(sent[0].replyTo, identity.email);
});

test("shutdown demo preserves the visitor's additional message and optional company", async () => {
  const { post, sent } = routeFixture();
  const response = await post({ ...identity, company: "Example maintenance", interest: "mining-shutdown-management", message: "Focus on workforce readiness." });
  assert.equal(response.status, 200);
  assert.match(sent[0].text, /Focus on workforce readiness\./);
  assert.match(sent[0].text, /Company: Example maintenance/);
});

test("general enquiries still require a message", async () => {
  const { post, sent } = routeFixture();
  assert.equal((await post(identity)).status, 400);
  assert.equal(sent.length, 0);
});

test("unknown interest cannot bypass message validation or enter the email", async () => {
  const { post, sent } = routeFixture();
  assert.equal((await post({ ...identity, interest: "untrusted-interest" })).status, 400);
  assert.equal((await post({ ...identity, interest: "untrusted-interest", message: "General question." })).status, 200);
  assert.equal(sent.length, 1);
  assert.doesNotMatch(sent[0].text, /untrusted-interest|Solution interest:|Source page:/);
});

test("name and valid email remain mandatory for a shutdown demo", async () => {
  const { post, sent } = routeFixture();
  for (const fields of [{ email: identity.email }, { name: identity.name }, { ...identity, email: "invalid" }]) {
    assert.equal((await post({ ...fields, interest: "mining-shutdown-management" })).status, 400);
  }
  assert.equal(sent.length, 0);
});

test("general enquiry delivery remains unchanged", async () => {
  const { post, sent } = routeFixture();
  assert.equal((await post({ ...identity, message: "General operational enquiry." })).status, 200);
  assert.match(sent[0].text, /General operational enquiry\./);
  assert.doesNotMatch(sent[0].text, /Solution interest:|Source page:/);
});

test("honeypot requests never send an email", async () => {
  const { post, sent } = routeFixture();
  assert.equal((await post({ ...identity, interest: "mining-shutdown-management", website: "bot.example" })).status, 200);
  assert.equal(sent.length, 0);
});

test("missing configuration and email failure return errors", async () => {
  const unconfigured = routeFixture({ configured: false });
  assert.equal((await unconfigured.post({ ...identity, interest: "mining-shutdown-management" })).status, 500);
  assert.equal(unconfigured.sent.length, 0);
  const failing = routeFixture({ sendError: { message: "Test delivery failure" } });
  const response = await failing.post({ ...identity, interest: "mining-shutdown-management" });
  assert.equal(response.status, 500);
  assert.equal((await response.json()).ok, false);
});
