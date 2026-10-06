import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import BuyerFaqs from "@/components/BuyerFaqs";
import ProductEvidence from "@/components/ProductEvidence";
import { metriczDemo } from "@/lib/demo-interest";
import { metriczEvidence } from "@/lib/product-evidence";
import { defaultOpenGraph } from "@/lib/seo";

const title = "SAP Maintenance Analytics | Metricz";
const description = "Explore Metricz for maintenance data exported from SAP. Upload Excel/CSV files, investigate material returns and trace findings to source rows.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/metricz" },
  openGraph: { ...defaultOpenGraph, title: `${title} | Valeron`, description, url: "/metricz" },
  twitter: { card: "summary_large_image", title: `${title} | Valeron`, description, images: ["/opengraph-image"] },
};

const faqs = [
  { question: "Does Metricz connect directly to SAP?", answer: "No. Metricz analyses uploaded Excel or CSV exports. It does not provide a direct SAP connection, OData, SAP APIs, SAP authentication or SAP write-back. Manual upload is a deliberate, permanent core workflow." },
  { question: "Which source data do I need?", answer: "The current material audit uses maintenance orders and material movements for the same population and period. Supply explicit identifiers, dates, quantities, units and movement meanings. Export structure, relationships and interpretation must be validated for your dataset; universal SAP export compatibility is not assumed." },
  { question: "Can mappings be reused?", answer: "Yes. Save reviewed mappings for exports with the same ordered headers. Changed structures require explicit review. Column suggestions do not infer SAP movement semantics; issue/reversal codes, signs and date interpretation must be configured and checked." },
  { question: "How are return percentages and rolling trends calculated?", answer: "Return percentage is reversed quantity divided by issued quantity, multiplied by 100. Whole-period rates use summed quantities, not an average of annual percentages. A zero denominator is unavailable. Twelve-month trailing analysis requires complete window coverage and a sufficient sample; ineligible windows show gaps and reasons." },
  { question: "Does a high reversal value represent savings?", answer: "No. Reversals are transaction classifications, not proof of unused physical parts or waste. Net quantities are accounting quantities. Reversal values describe supplied transaction values, not verified savings. Findings need investigation of posting, timing and maintenance context." },
  { question: "Can I trace a finding to the original export?", answer: "Yes. Findings link to contributing orders and movements, with file, sheet and source-row references. Review decisions, selected evidence and actions can be retained alongside the finding and included in an Excel review pack." },
  { question: "Does Metricz analyse task-list effectiveness or planned versus actual work orders?", answer: "Not currently. The implemented scope is maintenance material analysis and audit workflows. Task-list comparisons, work-order plan-versus-actual analysis, BOM recommendations and comprehensive SAP maintenance master-data auditing are outside the current scope." },
  { question: "Is Metricz available as a hosted enterprise service?", answer: "The current application is a single-machine local review workspace. It does not offer multi-tenant production SaaS, SSO or authenticated enterprise approvals. We discuss intended users, data handling and deployment requirements during a guided walkthrough." },
] as const;

const workflow = [
  ["SAP export", "Prepare orders and material movements for the same population."],
  ["Excel/CSV upload", "Load values-only XLSX or supported UTF-8 CSV files."],
  ["Sheet/header inspection", "Select the dataset and inspect its columns and rows."],
  ["Mapping", "Map fields and explicitly define movement and date interpretation."],
  ["Validation", "Review errors, exceptions and record reconciliation."],
  ["Normalised data", "Use consistent order and movement records with source references."],
  ["Analysis", "Calculate quantities, rates and eligible historical trends."],
  ["Findings", "Identify explainable material patterns worth reviewing."],
  ["Investigation", "Follow contributing transactions back to their source."],
  ["Review/action", "Record the decision, evidence, owner and next action."],
  ["Report", "Export the scoped findings and review evidence to Excel."],
];

export default function MetriczPage() {
  const url = "https://valeron.com.au/metricz";
  const schema = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: `${title} | Valeron`, description, mainEntity: { "@id": `${url}#software` } },
    { "@context": "https://schema.org", "@type": "SoftwareApplication", "@id": `${url}#software`, name: "Metricz", url, applicationCategory: "BusinessApplication", description: "Upload-first maintenance material analysis with source-row evidence, local review actions and Excel reporting.", publisher: { "@type": "Organization", name: "Valeron Pty Ltd", url: "https://valeron.com.au" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://valeron.com.au" }, { "@type": "ListItem", position: 2, name: "Metricz", item: url }] },
  ];
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <Section className="pb-16 pt-10 md:pt-14">
      <nav aria-label="Breadcrumb" className="text-sm text-[#66635b]"><ol className="flex gap-2"><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Metricz</li></ol></nav>
      <p className="eyebrow mt-10 text-[#b94d21]">METRICZ / BY VALERON</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">SAP maintenance analytics from Excel and CSV exports</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b5952]">Investigate maintenance material issues, reversals and recurring return patterns. Metricz takes uploaded exports through validation and analysis to findings you can trace, review and report.</p>
      <p className="mt-5 max-w-3xl leading-7 text-[#66635b]">Start with your exported data. The export structure, movement meanings and source coverage must be configured and validated for your dataset. Metricz’s current focus is material analysis and audit workflows.</p>
      <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href={metriczDemo.href}>Book a Metricz walkthrough</ButtonLink><ButtonLink href="#analysis-workflow" secondary>See the analysis workflow</ButtonLink></div>
      <div className="mt-12"><ProductEvidence screenshot={metriczEvidence.analysis} product="Metricz" priority /></div>
    </Section>
    <section className="bg-[#171714] py-16 text-white"><Section><p className="eyebrow text-[#f1a27d]">START WITH A MAINTENANCE QUESTION</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Which material patterns deserve a closer look?</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{[
      ["Repeated reversals", "Does the same material show high returns across several adequately sampled years?"],
      ["Changing usage", "Are issue and reversal quantities changing, or is one unusual period driving the result?"],
      ["Evidence to investigate", "Which orders and movements explain the pattern, and what needs to be checked before acting?"],
    ].map(([heading, text]) => <div key={heading} className="border-t border-white/25 pt-5"><h3 className="text-xl font-semibold">{heading}</h3><p className="mt-3 leading-7 text-white/75">{text}</p></div>)}</div></Section></section>
    <Section id="analysis-workflow" className="scroll-mt-28 py-16 lg:py-20"><p className="eyebrow text-[#b94d21]">UPLOAD FIRST</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">From an export to a reviewable finding.</h2><p className="mt-5 max-w-3xl leading-7 text-[#66635b]">Manual Excel/CSV upload is a permanent core capability. Keep control of the source files, interpretation and analysis period without connecting Metricz to SAP.</p><ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{workflow.map(([heading, text], i) => <li key={heading} className="surface-card p-6"><p className="font-mono text-xs text-[#b94d21]">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-3 text-lg font-semibold">{heading}</h3><p className="mt-2 text-sm leading-6 text-[#66635b]">{text}</p></li>)}</ol><div className="mt-10"><ProductEvidence screenshot={metriczEvidence.mapping} product="Metricz" /></div><p className="mt-6 max-w-3xl text-sm leading-7 text-[#66635b]">Save reviewed mappings for recurring export structures. Changes to ordered headers require review. Suggestions match column names; they do not automatically interpret SAP semantics.</p></Section>
    <section className="border-y border-black/10 bg-white/45 py-16"><Section><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow text-[#b94d21]">MATERIAL BEHAVIOUR</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Read the quantities in context.</h2><p className="mt-5 leading-7 text-[#66635b]">Compare issued, reversed and net quantities, annual return percentages and eligible twelve-month trailing rates. Findings retain sample context and reasons, so sparse history and incomplete periods remain visible.</p><p className="mt-4 leading-7 text-[#66635b]">The period return rate uses total reversed quantity divided by total issued quantity. A missing denominator or ineligible rolling window is shown as unavailable.</p></div><div className="surface-card p-7 sm:p-9"><h3 className="text-xl font-semibold">A review opportunity needs interpretation.</h3><ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-[#66635b]"><li>Net quantities are accounting quantities, not proof of physical consumption.</li><li>Reversals do not automatically mean unused parts or physical waste.</li><li>Associated reversal value is not verified savings.</li><li>Check posting corrections, date boundaries and maintenance context before recommending a change.</li></ul></div></div></Section></section>
    <Section className="py-16 lg:py-20"><p className="eyebrow text-[#b94d21]">INVESTIGATION & EVIDENCE</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Follow the finding back to its source.</h2><p className="mt-5 max-w-3xl leading-7 text-[#66635b]">Inspect the orders and material movements contributing to a finding. File, sheet and row references keep the calculation connected to the uploaded source, while the finding explains its pattern, thresholds and limitations.</p><div className="mt-9"><ProductEvidence screenshot={metriczEvidence.evidence} product="Metricz" /></div><div className="mt-12 grid gap-10 lg:grid-cols-2"><div><h2 className="text-3xl font-semibold tracking-[-0.035em]">Record decisions and next actions.</h2><p className="mt-5 leading-7 text-[#66635b]">Retain review notes, supporting evidence, a disposition and follow-up actions with owners and dates. Closure requires the review details and completion of outstanding actions.</p><p className="mt-4 text-sm leading-7 text-[#66635b]">Reviews persist in the local workspace. Reviewer and owner names are recorded labels; they are not authenticated enterprise approvals or authority to change SAP data.</p></div><div><h2 className="text-3xl font-semibold tracking-[-0.035em]">Bring an Excel review pack to the discussion.</h2><p className="mt-5 leading-7 text-[#66635b]">Export the selected findings, review register, actions, historical and trailing analysis, order and movement evidence, data quality and methodology. Reports use the saved analytical results and current review scope.</p></div></div><div className="mt-9"><ProductEvidence screenshot={metriczEvidence.reporting} product="Metricz" /></div></Section>
    <section className="border-y border-black/10 bg-white/45 py-16"><Section><p className="eyebrow text-[#b94d21]">PREPARING SOURCE DATA</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Agree the meaning before trusting the result.</h2><div className="mt-8 grid gap-6 md:grid-cols-2">{[
      ["Orders and movements", "Provide exports for the same population: order and execution identifiers, completion dates, material movements, posting dates, quantities and units. Optional grouping and values need their own agreed meaning."],
      ["Explicit interpretation", "Confirm issue and reversal codes, quantity signs, date formats, join keys and source coverage. SAP movement semantics must be configured and validated against representative examples."],
      ["Validation and reconciliation", "Inspect missing, duplicate, invalid and unmatched records. Blocking errors prevent analysis; excluded records and warnings remain explained and traceable."],
      ["Practical file scope", "Use values-only XLSX or supported UTF-8 CSV. Current limits are 10 MB and 100,000 data rows per file, with up to 20 sheets. Processing is bounded; formats and real data volumes are reviewed during setup."],
    ].map(([heading, text]) => <article key={heading} className="surface-card p-7"><h3 className="text-xl font-semibold">{heading}</h3><p className="mt-3 leading-7 text-[#66635b]">{text}</p></article>)}</div><div className="mt-9"><ProductEvidence screenshot={metriczEvidence.validation} product="Metricz" /></div></Section></section>
    <Section className="py-16"><p className="eyebrow text-[#b94d21]">CURRENT SCOPE & DEPLOYMENT</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">A guided material-audit workflow.</h2><div className="mt-5 grid gap-8 lg:grid-cols-2"><p className="leading-7 text-[#66635b]">Metricz currently runs as a single-machine local review workspace. Real SAP export mappings and transaction interpretation require validation. A walkthrough establishes the maintenance question, available data and intended review process.</p><p className="leading-7 text-[#66635b]">It does not connect to or write back to SAP, and is not offered here as a hosted enterprise service. Task-list effectiveness, planned-versus-actual work-order analysis and comprehensive SAP master-data auditing are outside the current scope.</p></div><p className="mt-5 text-sm leading-7"><Link href="/about" className="font-semibold text-[#b94d21] underline underline-offset-4">Meet the company behind Metricz</Link> or <Link href="/solutions" className="font-semibold text-[#b94d21] underline underline-offset-4">explore Valeron’s operational solutions</Link>.</p></Section>
    <Section className="pb-16"><BuyerFaqs title="Questions about Metricz and SAP exports" items={faqs} /></Section>
    <Section className="pb-20"><div className="rounded-[2rem] bg-[#171714] p-8 text-white sm:p-12"><p className="eyebrow text-[#f1a27d]">GUIDED WALKTHROUGH</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Bring the maintenance question. Follow the evidence.</h2><p className="mt-5 max-w-2xl leading-8 text-white/75">See the workflow with synthetic example data and discuss which exports and interpretation your review would require. Any sample-data review is arranged separately.</p><div className="mt-8 flex flex-wrap gap-4"><ButtonLink href={metriczDemo.href}>Book a Metricz walkthrough</ButtonLink><Link href="/contact" className="inline-flex items-center py-3 text-sm font-semibold underline underline-offset-4">Discuss your requirements</Link></div></div></Section>
  </main>;
}
