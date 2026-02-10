import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a demo to see how Valeron’s work management tools support real operational workflows and shutdown readiness.",
};

export default function BookDemoPage() {
  return (
    <main className="bg-white text-gray-900">
      <Section className="pt-16 pb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          BOOK A DEMO
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight leading-tight">
          See how Valeron works in real operations.
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Book a short walkthrough and we’ll show you how Valeron tools can be configured to match
          your workflows — whether that’s a single approval process or a full shutdown readiness setup.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Book via contact form
          </a>

          <a
            href="mailto:solutions@valeron.com.au?subject=Book%20a%20Valeron%20Demo"
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:border-gray-400 transition"
          >
            Email solutions@valeron.com.au
          </a>
        </div>
      </Section>

      <Section className="pb-14">
        <h2 className="text-3xl font-bold">What we’ll cover</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Real examples",
              desc: "Walkthroughs of Timesheets, Break-in Work, Readiness Dashboards, and reporting outputs.",
            },
            {
              title: "Your workflow",
              desc: "We’ll map how work currently flows at your site and where spreadsheets/emails create friction.",
            },
            {
              title: "Configuration",
              desc: "What’s configurable, what’s standard, and how rollout works for your teams.",
            },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-gray-900">{x.title}</div>
              <p className="mt-2 text-sm text-gray-600">{x.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 md:p-12">
          <h2 className="text-3xl font-bold">What to prepare</h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            Nothing formal required — but having these in mind helps us make the demo more relevant:
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li>• What type of work you’re managing (shutdown, maintenance, project)</li>
            <li>• Current tools (spreadsheets, SAP, email approvals, etc.)</li>
            <li>• Approval stages and key roles</li>
            <li>• Reporting or visibility gaps you’re trying to solve</li>
          </ul>
        </div>
      </Section>
    </main>
  );
}
