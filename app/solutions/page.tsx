import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Valeron’s work management solutions — Shutdown Suite modules and custom builds for approvals, compliance, readiness, and reporting.",
};

const solutions = [
  {
    title: "Approvals & Governance",
    desc: "Replace email chains with structured approvals that are visible, auditable, and consistent.",
    bullets: [
      "Role-based approval stages",
      "Comments, timestamps, and audit trail",
      "Clear ownership and status visibility",
      "Reduced rework and miscommunication",
    ],
  },
  {
    title: "Break-in Work Control",
    desc: "Manage break-in work with the right checks, the right sign-offs, and real-time visibility.",
    bullets: [
      "Request → review → approve workflows",
      "Coordinator / superintendent pathways",
      "Priority & risk capture",
      "Reporting-ready history of decisions",
    ],
  },
  {
    title: "Timesheets & Labour Capture",
    desc: "Fast entry for crews and contractors, with clean exports and reporting-ready data.",
    bullets: [
      "Simple daily entry",
      "Job / work order alignment",
      "Export packs to Excel",
      "Less admin, better visibility",
    ],
  },
  {
    title: "Readiness Dashboards",
    desc: "A single source of truth for planning progress, readiness KPIs, and at-risk visibility.",
    bullets: [
      "KPI snapshots for leadership",
      "At-risk items surfaced early",
      "Progress tracking against targets",
      "Configured to your readiness model",
    ],
  },
  {
    title: "Compliance & Reporting",
    desc: "Capture evidence once and produce consistent reporting packs without spreadsheet drift.",
    bullets: [
      "Standardised reporting outputs",
      "Evidence capture & audit-friendly records",
      "Exportable packs for meetings",
      "Clear, trusted data across teams",
    ],
  },
  {
    title: "Custom Builds",
    desc: "If you can describe the workflow, we can build the solution — tailored to your site, roles, and systems.",
    bullets: [
      "Built around how work happens on site",
      "Configured to your terminology and stages",
      "Fast iteration with real user feedback",
      "Designed for adoption (not complexity)",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Section className="pt-16 pb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          SOLUTIONS
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight leading-tight">
          Work management solutions that replace spreadsheets with a single source of truth.
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Valeron builds modern web applications for approvals, compliance, readiness tracking,
          and reporting — configured to your site, roles, and workflows. Start with a module from
          our Shutdown Suite, or commission a fully custom build.
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
      </Section>

      {/* SOLUTIONS GRID */}
      <Section className="pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-gray-600">{s.desc}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section className="pb-14">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 md:p-12">
          <h2 className="text-3xl font-bold">How we deliver</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            Our focus is simple: map the workflow, build the right structure, protect data integrity,
            and deliver a tool your team will actually adopt.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "We map your workflow, roles, approvals, and reporting needs." },
              { step: "02", title: "Build", desc: "We configure and build a solution around how work happens on site." },
              { step: "03", title: "Pilot", desc: "We run a pilot with real users, gather feedback, and refine quickly." },
              { step: "04", title: "Rollout", desc: "We scale across teams with support, training, and reporting outputs." },
            ].map((x) => (
              <div key={x.step} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-xs font-semibold tracking-wide text-gray-500">
                  STEP {x.step}
                </div>
                <div className="mt-2 font-semibold text-gray-900">{x.title}</div>
                <div className="mt-2 text-sm text-gray-600">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold">
            Tell us your workflow — we’ll build the solution.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Book a demo or send a brief and we’ll recommend a practical path — a module rollout,
            a suite deployment, or a custom build.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/book-demo"
              className="rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              Book a demo
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:border-gray-400 transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
