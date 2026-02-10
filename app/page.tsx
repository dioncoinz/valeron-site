import type { Metadata } from "next";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import ExampleCard from "@/components/ExampleCard";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Custom Business Solutions for Work Management",
  description:
    "Valeron designs and builds custom work management software for operations, maintenance, and shutdown teams.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Section className="pt-16 pb-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              VALERON • CUSTOM BUSINESS SOLUTIONS
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight leading-tight">
              Custom work management software, built to match how your operation runs.
            </h1>

            <p className="mt-6 text-xl text-gray-600">
              We design and build modern web apps for approvals, compliance, planning visibility,
              readiness tracking, and reporting — tailored to your workflows, teams, and systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/book-demo"
                className="rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
              >
                Book a demo
              </a>

              <a
                href="/shutdown-suite"
                className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:border-gray-400 transition"
              >
                Explore Shutdown Suite
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-bold">Faster</div>
                <div className="mt-1 text-sm text-gray-600">approvals & decisions</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Cleaner</div>
                <div className="mt-1 text-sm text-gray-600">reporting-ready data</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold">Configurable</div>
                <div className="mt-1 text-sm text-gray-600">per site & process</div>
              </div>
            </div>
          </div>

          {/* Right-side visual block (placeholder) */}
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8 shadow-sm">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">What we build</div>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {[
                  "Timesheets & labour capture",
                  "Break-in work requests & approvals",
                  "Readiness dashboards & KPIs",
                  "Compliance workflows & audit trail",
                  "Exports to Excel, reporting packs",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4">
                <div className="text-xs font-semibold tracking-wide text-gray-500">
                  FLAGSHIP
                </div>
                <div className="mt-1 font-semibold text-gray-900">Shutdown Suite</div>
                <div className="mt-1 text-sm text-gray-600">
                  Modular tools to plan, control, and track shutdown readiness end-to-end.
                </div>
                <a
                  href="/shutdown-suite"
                  className="mt-4 inline-flex text-sm font-medium text-gray-900 hover:underline"
                >
                  Explore Shutdown Suite →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PILLARS */}
      <Section className="pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Work Management Apps"
            description="Timesheets, break-in work, approvals, job tracking, readiness dashboards, and operational reporting."
          />
          <FeatureCard
            title="Shutdown Suite"
            description="A flagship modular suite designed to plan, control, and track shutdown readiness from initiation to execution."
          />
          <FeatureCard
            title="Custom Builds"
            description="No off-the-shelf constraints. If you can describe the workflow, we can design and build the solution."
          />
        </div>
      </Section>

      {/* PROOF */}
      <Section className="pb-14">
        <h2 className="text-3xl font-bold">Built and tested in real operations</h2>
        <p className="mt-4 max-w-2xl text-gray-600">
          These tools aren’t theory — they’re designed for real maintenance and operations teams
          to reduce admin, improve visibility, and speed up decisions.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ExampleCard
            title="Timesheet App"
            description="Fast entry, clean exports, and reporting-ready labour data."
          />
          <ExampleCard
            title="Break-in Work App"
            description="Structured requests, multi-level approvals, and a full audit trail."
          />
          <ExampleCard
            title="Readiness Dashboard"
            description="Live planning status, at-risk visibility, and KPI tracking."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <CTA />
      </Section>
    </main>
  );
}
