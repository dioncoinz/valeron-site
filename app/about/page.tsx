import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About Valeron",
  description:
    "Valeron is a custom business solutions company built from operational experience, specialising in modern work management systems.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <Section className="pt-16 pb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          ABOUT VALERON
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight leading-tight">
          Built from operational experience.
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Valeron is a custom business solutions company built by people who come from
          operational environments — with decades of experience preparing, planning,
          and executing complex work.
        </p>
      </Section>

      <Section className="pb-14">
        <div className="max-w-4xl space-y-8 text-gray-700">
          <p>
            For years, the way work has been managed on major projects and shutdowns has relied
            heavily on spreadsheets, emails, and manual tracking. While this approach can function,
            it has clear limitations. Information becomes fragmented, spreadsheets drift out of sync,
            and data is quickly corrupted.
          </p>

          <p>
            The result is poor visibility, unreliable reporting, and decisions being made on incomplete
            or outdated information — costing projects both time and money.
          </p>

          <p>
            At Valeron, we specialise in modern work management built on best-practice principles.
            Just as importantly, we understand how these systems are actually used in the field.
            Our solutions are designed to be robust, simple to interpret, and difficult to break.
          </p>

          <p>
            They enforce structure, remove ambiguity, and provide a single source of truth — in real time.
          </p>

          <p>
            We believe good decisions start with solid data. When teams trust the information in front of them,
            they move faster, plan better, and reduce risk. That’s why Valeron platforms are designed to capture
            clean data at the source and turn it into reporting that leadership can rely on.
          </p>

          <p>
            Our applications are intentionally user-friendly. We recognise that the people running major maintenance
            activities, shutdowns, and projects are experts in their field — not necessarily technology specialists.
            Valeron tools are built to support those teams, not slow them down.
          </p>
        </div>
      </Section>

      <Section className="pb-14">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 md:p-12">
          <h2 className="text-3xl font-bold">Our approach is simple</h2>

          <p className="mt-6 max-w-3xl text-lg text-gray-700">
            Build systems that reflect how work actually happens, protect data integrity, and give teams
            confidence in every decision they make.
          </p>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold">
            Want to see how Valeron could support your operation?
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Book a call and we’ll talk through your current workflows, pain points, and how a custom solution
            could simplify the way work is managed.
          </p>

          <a
            href="/book-demo"
            className="inline-block mt-8 rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Book a demo
          </a>
        </div>
      </Section>
    </main>
  );
}
