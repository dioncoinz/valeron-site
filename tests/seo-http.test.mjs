import assert from "node:assert/strict";
import { test } from "node:test";

// Opt in against a locally running production build. All requests are read-only.
const base = process.env.SEO_BASE_URL;
const domain = "https://valeron.com.au";
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
function attributes(tag) { return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)])); }
function meta(html, key) { return [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag)).filter(a => a.property === key || a.name === key).map(a => a.content); }
function canonicals(html) { return [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag)).filter(a => a.rel === "canonical").map(a => a.href); }
const pages = [
  { path: "/solutions/mining-workforce-management", title: "Mining Workforce Management Software | Shunter | Valeron", h1: "Mining workforce management software", description: "Coordinate mining workforce records, availability, qualifications, mobilisation and assignments with Shunter, Valeron’s operational management platform.", types: ["Organization", "Service", "BreadcrumbList"], interest: "mining-workforce-management" },
  { path: "/metricz", title: "SAP Maintenance Analytics | Metricz | Valeron", h1: "SAP maintenance analytics from Excel and CSV exports", description: "Explore Metricz for maintenance data exported from SAP. Upload Excel/CSV files, investigate material returns and trace findings to source rows.", types: ["Organization", "WebPage", "SoftwareApplication", "BreadcrumbList"], interest: "sap-maintenance-analytics" },
];

test("production HTTP: SEO metadata, sitemap, links, schema and redirects", { skip: !base }, async t => {
  assert.ok(["127.0.0.1", "localhost"].includes(new URL(base).hostname), "Run against local production build only");
  const get = path => fetch(new URL(path, base), { redirect: "manual" });
  const rendered = new Map();
  for (const page of pages) await t.test(page.path, async () => {
    const response = await get(page.path); assert.equal(response.status, 200);
    const html = await response.text(); rendered.set(page.path, html);
    assert.equal(decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? ""), page.title);
    assert.deepEqual([...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)].map(m => decode(m[1])), [page.h1]);
    assert.deepEqual(canonicals(html), [domain + page.path]);
    assert.deepEqual(meta(html, "description"), [page.description]);
    assert.deepEqual(meta(html, "og:url"), [domain + page.path]);
    assert.deepEqual(meta(html, "og:title"), [page.title]);
    assert.deepEqual(meta(html, "og:description"), [page.description]);
    assert.ok(meta(html, "og:image").every(url => url.startsWith(domain + "/")) && meta(html, "og:image").length);
    assert.deepEqual(meta(html, "twitter:title"), [page.title]);
    assert.doesNotMatch(html, /www\.valeron\.com\.au|noindex/);
    const schema = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap(m => JSON.parse(m[1]));
    assert.deepEqual(schema.map(s => s["@type"]).sort(), [...page.types].sort());
    for (const item of schema) assert.ok(!item.offers && !item.aggregateRating && !item.review && !item.operatingSystem);
    const breadcrumb = schema.find(s => s["@type"] === "BreadcrumbList");
    assert.equal(breadcrumb.itemListElement.at(-1).item, domain + page.path);
    if (page.path === "/metricz") assert.equal(schema.find(s => s["@type"] === "SoftwareApplication").name, "Metricz");
    assert.ok(html.includes(`/book-demo?interest=${page.interest}`));
    assert.doesNotMatch(html, /type="file"/);
    const hrefs = new Set([...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m => decode(m[1])));
    for (const href of hrefs) {
      if (href.startsWith("#")) assert.ok(html.includes(`id="${href.slice(1)}"`), `Missing anchor ${href}`);
      else if (href.startsWith("/")) assert.equal((await get(href)).status, 200, `Broken internal link ${href}`);
    }
  });
  await t.test("discovery links and canonical sitemap", async () => {
    for (const path of ["/", "/solutions", "/industries", "/shunter", "/solutions/mining-shutdown-management", "/solutions/contractor-mobilisation"]) {
      const response = await get(path); assert.equal(response.status, 200);
      const html = await response.text();
      assert.ok(html.includes('href="/solutions/mining-workforce-management"'), `Missing workforce discovery on ${path}`);
      assert.ok(html.includes('href="/metricz"'), `Missing Metricz discovery on ${path}`);
    }
    const response = await get("/sitemap.xml"); assert.equal(response.status, 200);
    const xml = await response.text();
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    assert.equal(new Set(urls).size, urls.length);
    for (const page of pages) assert.equal(urls.filter(url => url === domain + page.path).length, 1);
    for (const url of urls) {
      assert.ok(url.startsWith(domain + "/") || url === domain);
      const response = await get(new URL(url).pathname); assert.equal(response.status, 200, url);
      assert.deepEqual(canonicals(await response.text()), [url === domain ? domain : url]);
    }
    assert.ok(!urls.some(url => url.includes("/solutions/sap-maintenance-analytics")));
    assert.equal((await get("/solutions/sap-maintenance-analytics")).status, 404);
    const robots = await (await get("/robots.txt")).text();
    assert.ok(robots.includes(`Sitemap: ${domain}/sitemap.xml`));
    assert.doesNotMatch(robots, /www\.valeron/);
  });
  await t.test("legacy redirect terminates without a loop and favicon remains available", async () => {
    const seen = new Set(); let path = "/shutdown-suite";
    for (let hop = 0; hop < 5; hop++) {
      assert.ok(!seen.has(path), "Redirect loop"); seen.add(path);
      const response = await get(path);
      if (response.status === 200) { assert.equal(path, "/solutions/mining-shutdown-management"); break; }
      assert.equal(response.status, 308); const location = response.headers.get("location"); assert.ok(location);
      path = new URL(location, base).pathname;
      assert.ok(hop < 4, "Redirect chain too long");
    }
    const html = rendered.get("/metricz");
    const icon = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag)).find(a => a.rel === "icon");
    assert.ok(icon?.href.startsWith("/icon.png"));
    const response = await get(icon.href); assert.equal(response.status, 200); assert.match(response.headers.get("content-type"), /image\/png/);
  });
});
