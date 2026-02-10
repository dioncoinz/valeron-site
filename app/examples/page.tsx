import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Examples of Valeron work management tools — timesheets, break-in work approvals, readiness dashboards, and reporting outputs.",
};

const examples = [
  {
    title: "Timesheet App",
    desc: "Fast entry for crews and contractors with clean exports and reporting-ready data.",
    tags: ["Labour capture", "Excel exports", "Simple UI"],
    // Add image later like: image: "/brand/example-timesheet.png"
  },
  {
    title: "Break-in Work App",
    desc: "Structured requests, role-based approvals, comments, and a full audit trail.",
    tags: ["Approvals", "Governance", "Audit trail"],
    // image: "/brand/example-breakin.png"
  },
  {
    title: "Readiness Dashboard",
    desc: "Real-time visibility of planning progress, at-risk items, and readiness KPIs.",
    tags: ["KPIs", "Visibility", "Readiness"],
    // image: "/brand/example-readiness.png"
  },
];

const whatMakesItDifferent = [
  {
    title: "Built for real workflows",
    desc: "We map how work actually happens on site — then build around that reality.",
  },
  {
    title: "Data integrity by design",
    desc: "Structured inputs and clear ownership so reporting stays accurate and trusted.",
  },
  {
    title: "Easy adoption",
    desc: "Clean interfaces that teams can use immediately without heavy training overhead.",
  },
];

export default function ExamplesPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Section className="pt-16 pb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          EXAMPLES
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight leading-tight">
          Real work management tools, built for real operations.
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Below are examples of Valeron applications used to reduce admin,
          improve visibility, and generate reporting-ready outputs. Each can be
          configured to your site — or used as a starting point for a custom build.
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

      {/* EXAMPLE CARDS */}
      <Section className="pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {examples.map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Placeholder (no Image until you add screenshots) */}
              <div className="mb-5 h-44 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center">
                <div className="text-sm text-gray-500">Screenshot placeholder</div>
              </div>

              <h2 className="text-xl font-semibold">{x.title}</h2>
              <p className="mt-3 text-gray-600">{x.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {x.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/book-demo"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  See a walkthrough →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT MAKES IT DIFFERENT */}
      <Section className="pb-14">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 md:p-12">
          <h2 className="text-3xl font-bold">What makes these tools different</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            Most software fails because it doesn’t match the real workflow. Valeron tools are built
            from operational experience — structured, robust, and simple to use.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whatMakesItDifferent.map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="font-semibold text-gray-900">{x.title}</div>
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
            Want to see examples matched to your workflow?
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            Book a demo and we’ll walk through the most relevant examples and outline
            how we’d configure a solution for your site.
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
