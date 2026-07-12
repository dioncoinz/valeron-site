import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import SolutionIcon, { type SolutionIconName } from "@/components/SolutionIcon";

export const metadata: Metadata = {
  title: "Mining and Operational Software Solutions",
  description: "Explore Valeron software for mining shutdowns, fleet pre-starts, contractor mobilisation, labour capture, tool tracking and custom workflows.",
  alternates: { canonical: "/solutions" },
  openGraph: { title: "Mining and Operational Software Solutions | Valeron", description: "Practical software for mining shutdowns, fleet management, workforce mobilisation, labour capture, tool tracking and custom workflows.", url: "/solutions" },
};

const solutions: { title: string; product: string; description: string; href: string; icon: SolutionIconName }[] = [
  { title: "Mining shutdown management", product: "Valeron Shutdown Suite", description: "Plan, control and report shutdown readiness, approvals and execution from one connected platform.", href: "/solutions/mining-shutdown-management", icon: "shutdown" },
  { title: "Digital pre-start and fleet management", product: "Inspectz by Valeron", description: "Digitise pre-starts, defect actions, compliance records and fleet visibility.", href: "/solutions/digital-prestart-fleet-management", icon: "fleet" },
  { title: "Contractor mobilisation", product: "Requestz by Valeron", description: "Coordinate workforce requests, vendor nominations, documentation, rates and mobilisation readiness.", href: "/solutions/contractor-mobilisation", icon: "workforce" },
  { title: "Mining timesheet and labour capture", product: "Timesheetz by Valeron", description: "Capture labour against controlled work data and prepare clean, SAP-ready exports.", href: "/solutions/mining-timesheet-labour-capture", icon: "timesheet" },
  { title: "Tool and equipment tracking", product: "Logz by Valeron", description: "Track tool ownership, location, condition, inspections and movement history.", href: "/solutions/tool-equipment-tracking", icon: "tools" },
  { title: "Custom mining software", product: "Valeron Custom Builds", description: "Turn site-specific approvals, maintenance and reporting workflows into practical operational software.", href: "/solutions/custom-mining-software", icon: "custom" },
];

export default function SolutionsPage() {
  return <main className="bg-white text-gray-900">
    <Section className="pt-16 pb-14">
      <p className="text-sm font-semibold tracking-wide text-gray-500">VALERON SOLUTIONS</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Work management solutions built for real operational workflows.</h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-600">Replace disconnected spreadsheets, email chains and manual trackers with structured systems that improve ownership, visibility and data integrity. Start with a focused Valeron product or build around a workflow unique to your operation.</p>
      <div className="mt-10 flex flex-wrap gap-4"><Link href="/book-demo" className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800">Book a demo</Link><Link href="/solutions/custom-mining-software" className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:border-gray-400">Discuss a custom workflow</Link></div>
    </Section>
    <Section className="pb-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{solutions.map((solution) => <article key={solution.href} className="flex flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white"><SolutionIcon name={solution.icon} /></div><p className="mt-6 text-xs font-semibold tracking-widest text-gray-500">{solution.product.toUpperCase()}</p><h2 className="mt-2 text-xl font-semibold">{solution.title}</h2><p className="mt-3 flex-1 leading-7 text-gray-600">{solution.description}</p><Link href={solution.href} className="mt-6 inline-flex font-medium text-gray-900 hover:underline" aria-label={`Explore ${solution.title}`}>Explore solution →</Link></article>)}</div>
    </Section>
    <Section className="pb-16"><div className="rounded-3xl border border-gray-200 bg-gray-50 p-9 md:p-12"><h2 className="text-3xl font-bold">How we deliver</h2><p className="mt-4 max-w-3xl text-gray-600">We map the workflow, build the right structure, protect data integrity and deliver a tool your team can use confidently.</p><div className="mt-8 grid gap-5 md:grid-cols-4">{[{ n: "01", t: "Discovery", d: "Map workflows, roles, approvals and reporting." }, { n: "02", t: "Build", d: "Configure the solution around site operations." }, { n: "03", t: "Pilot", d: "Test with real users and refine the process." }, { n: "04", t: "Rollout", d: "Deploy with onboarding and ongoing support." }].map((step) => <div key={step.n} className="rounded-2xl border border-gray-200 bg-white p-6"><p className="text-xs font-semibold tracking-widest text-gray-500">STEP {step.n}</p><h3 className="mt-2 font-semibold">{step.t}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{step.d}</p></div>)}</div></div></Section>
    <Section className="pb-24"><div className="rounded-3xl border border-gray-200 p-9 shadow-sm md:p-12"><h2 className="text-3xl font-bold">Find the right starting point for your operation.</h2><p className="mt-4 max-w-2xl text-gray-600">Talk through the workflow, data and visibility gaps with Valeron. We’ll recommend a practical product, module or custom-build path.</p><Link href="/book-demo" className="mt-8 inline-block rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800">Book a demo</Link></div></Section>
  </main>;
}
