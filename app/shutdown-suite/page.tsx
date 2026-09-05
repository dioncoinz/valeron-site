import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Shutdown Suite",
  description:
    "A configurable suite of work management tools to plan, control, and track shutdown readiness with real-time visibility and reporting.",
  alternates: { canonical: "/shutdown-suite" },
};

const modules = [
  {
    title: "Break-in Work",
    desc: "Structured requests, role-based approvals, and an audit trail — so critical work is controlled and visible.",
    bullets: ["Request → approve workflow", "Role-based signoff", "Comments + audit trail", "Status visibility"],
  },
  {
    title: "Timesheets & Labour Capture",
    desc: "Fast entry for crews and contractors with clean exports leadership can actually use.",
    bullets: ["Simple daily entry", "Export-ready outputs", "Job/WO alignment", "Reporting-ready data"],
  },
  {
    title: "Readiness Dashboard",
    desc: "A single source of truth for planning progress, risk, and key readiness indicators leading into execution.",
    bullets: ["Readiness KPIs", "At-risk visibility", "Progress tracking", "Leadership view"],
  },
  {
    title: "Quality Control (QAQC)",
    desc: "Ensure the work is completed to an acceptable quality ensuring no rework.",
    bullets: ["Photo evidence", "QAQC dashboard including outstanding checks", "Completed in the feild.", "Export pack to upload into your prefered CMMS"],
  },
    {
    title: "Delay Tracking",
    desc: "Capture any delays to the schedule in real time, information can be visable to the shutdown team to allocate resources where required.",
    bullets: ["User freindly dashboard", "Can be recorded anywhere from any device", "Allows for informed descions to be made", "Audit-friendly records"],
  },
  {
    title: "Compliance & Reporting",
    desc: "Capture the right evidence and generate consistent reporting packs without chasing spreadsheets.",
    bullets: ["Standardised reporting", "Evidence capture", "Export packs", "Audit-friendly records"],
  },
];

export default function ShutdownSuitePage() {
  return (
    <main className="text-gray-900">
      {/* HERO */}
      <Section className="pt-16 pb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          VALERON • FOCUSED SOLUTION
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight leading-tight">
          Shutdown Suite
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          A configurable set of work management tools designed to plan, control, and track
          shutdown readiness — with clear approvals, real-time visibility, and reporting-ready outputs.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
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
            Request a quote
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { k: "Visibility", v: "A single source of truth for readiness + progress" },
            { k: "Control", v: "Role-based approvals with audit trail" },
            { k: "Outputs", v: "Excel exports and reporting-ready packs" },
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">{x.k}</div>
              <div className="mt-2 text-sm text-gray-600">{x.v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* MODULES */}
      <Section className="pb-24">
        <h2 className="text-3xl font-bold">Modules</h2>
        <p className="mt-4 max-w-2xl text-gray-600">
          Start with one module, or roll out the full suite. Each module can be configured per site.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {modules.map((m) => (
            <div key={m.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="mt-3 text-gray-600">{m.desc}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {m.bullets.map((b) => (
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
    </main>
  );
}
