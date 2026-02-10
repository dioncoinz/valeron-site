import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Valeron to discuss custom work management solutions, shutdown tools, or operational workflow improvements.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Section className="pt-16 pb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          CONTACT
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight leading-tight">
          Let’s talk about your workflow.
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Whether you’re managing a shutdown, a maintenance program, or a complex
          approval process, we’ll help you replace spreadsheets and emails with a
          system that gives you clarity and control.
        </p>
      </Section>

      {/* CONTACT OPTIONS */}
      <Section className="pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              Book a demo
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Best option if you want to see real examples and talk through how
              Valeron could fit your operation.
            </p>
            <a
              href="/book-demo"
              className="mt-4 inline-flex text-sm font-medium text-gray-900 hover:underline"
            >
              Go to Book a Demo →
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              Email
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Prefer email? Send a short brief and we’ll get back to you.
            </p>
            <a
              href="mailto:solutions@valeron.com.au"
              className="mt-4 inline-flex text-sm font-medium text-gray-900 hover:underline"
            >
              solutions@valeron.com.au →
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              What to include
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• What type of work you’re managing</li>
              <li>• Current tools (Excel, email, SAP, etc.)</li>
              <li>• Approval stages and key roles</li>
              <li>• Reporting or visibility gaps</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FORM */}
      <Section className="pb-24">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 md:p-12">
          <h2 className="text-3xl font-bold">Send an enquiry</h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Fill out the form below and we’ll come back with recommended next
            steps — whether that’s a Shutdown Suite module or a custom build.
          </p>

          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
