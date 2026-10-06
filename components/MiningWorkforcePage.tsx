import Link from "next/link";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import BuyerFaqs from "@/components/BuyerFaqs";
import ProductEvidence from "@/components/ProductEvidence";
import { miningWorkforce as data, workforceFaqs } from "@/app/solutions/workforce-data";
import { workforceDemo } from "@/lib/demo-interest";
import { workforceEvidence } from "@/lib/product-evidence";

const linkClass = "font-semibold text-[#b94d21] underline underline-offset-4";
const ids = ["requirement", "matching", "responses", "mobilisation", "assignments", "resources", "reporting"];

export default function MiningWorkforcePage() {
  return <main>
    <Section className="pb-16 pt-10 md:pt-14">
      <nav aria-label="Breadcrumb" className="text-sm text-[#66635b]"><ol className="flex flex-wrap gap-2"><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/solutions">Solutions</Link></li><li aria-hidden="true">/</li><li aria-current="page">Mining workforce management</li></ol></nav>
      <p className="eyebrow mt-10 text-[#b94d21]">{data.product}</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{data.h1}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b5952]">{data.introduction}</p>
      <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href={workforceDemo.href}>{data.finalButton}</ButtonLink><ButtonLink href="#workflow" secondary>See the workforce workflow</ButtonLink></div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-[#66635b]">For operations, maintenance and workforce managers, mobilisation teams, mining contractors and labour-hire businesses coordinating people across sites and projects.</p>
      <p className="mt-5 text-sm"><Link className={linkClass} href="/shunter">Part of the Shunter operational platform</Link></p>
      <div className="mt-12"><ProductEvidence screenshot={workforceEvidence.request} priority /></div>
    </Section>
    <section className="bg-[#171714] py-16 text-white"><Section><div className="grid gap-8 lg:grid-cols-2"><h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{data.problemTitle}</h2><p className="text-lg leading-8 text-white/75">{data.problem}</p></div></Section></section>
    <Section id="workflow" className="scroll-mt-28 py-16 lg:py-20">
      <p className="eyebrow text-[#b94d21]">FROM REQUIREMENT TO ASSIGNMENT</p>
      <nav aria-label="Workforce workflow" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">{["Requirement", "Matching", "Responses", "Mobilisation", "Assignments", "Resources", "Reporting"].map((label, i) => <a key={label} href={`#${ids[i]}`} className={linkClass}>{label}</a>)}</nav>
      <div className="mt-12 space-y-12">{data.sections.map((section, i) => <section key={section.title} id={ids[i]} className="scroll-mt-28 border-t border-black/15 pt-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="font-mono text-xs text-[#b94d21]">0{i + 1}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">{section.title}</h2></div><div><p className="leading-7 text-[#5b5952]">{section.intro}</p>{section.items && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#66635b]">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}{section.note && <p className="mt-5 border-l-2 border-[#dd622d]/50 pl-4 text-sm leading-7 text-[#66635b]">{section.note}</p>}</div></div>
        {i === 4 && <div className="mx-auto mt-8 max-w-2xl"><ProductEvidence screenshot={workforceEvidence.schedule} /></div>}
      </section>)}</div>
    </Section>
    <section className="border-y border-black/10 bg-white/45 py-16"><Section><p className="eyebrow text-[#b94d21]">ILLUSTRATIVE LABOUR REQUEST</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">A maintenance contractor needs fitters for a shutdown.</h2><p className="mt-5 max-w-3xl leading-7 text-[#66635b]">An example workflow, not a customer case study. Dates, people and requirements are illustrative; the screenshots use synthetic test records.</p><ol className="mt-8 grid gap-5 md:grid-cols-2">{[
      ["Set the requirement", "A coordinator records the site, work dates, fitter roles and required qualifications against the client request."],
      ["Review and confirm people", "The team reviews suitable candidates and availability, shares response links, then authorises selected people."],
      ["Resolve readiness items", "The coordinator reviews required evidence and outstanding mobilisation items before progressing assignments."],
      ["Review the assignment period", "The workforce calendar shows who is assigned and when. Changes and conflicts are reviewed against the recorded requirement."],
    ].map(([title, text], i) => <li key={title} className="surface-card p-7"><p className="font-mono text-xs text-[#b94d21]">0{i + 1}</p><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#66635b]">{text}</p></li>)}</ol><p className="mt-7 text-sm leading-7">For the wider event, explore <Link className={linkClass} href="/solutions/mining-shutdown-management">mining shutdown planning and execution with Shunter</Link>.</p></Section></section>
    <Section className="py-16 lg:py-20"><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow text-[#b94d21]">IMPLEMENTATION</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Start with your people and requirements.</h2><p className="mt-5 leading-7 text-[#66635b]">Bring your personnel records, roles, qualification catalogue, availability process and mobilisation checklist. We agree who maintains evidence, who authorises assignments and how the workflow fits your sites.</p><p className="mt-4 leading-7 text-[#66635b]">Review the configured process with coordinators and representative users before operational rollout. Scope any system connections and reporting needs explicitly.</p></div><div className="surface-card p-7 sm:p-9"><h2 className="text-2xl font-semibold">Choose the workflow that fits.</h2><p className="mt-4 leading-7 text-[#66635b]">For vendor nominations and supplier-facing workforce requests, explore <Link className={linkClass} href="/solutions/contractor-mobilisation">Requestz contractor mobilisation</Link>. For recording hours against work orders, see <Link className={linkClass} href="/solutions/mining-timesheet-labour-capture">Timesheetz labour capture</Link>.</p><p className="mt-4 text-sm leading-7 text-[#66635b]">These are separate Valeron products. Shunter’s workforce use case covers operational personnel coordination; supplier commercial management and automatic connections between products are not assumed.</p></div></div></Section>
    <Section className="pb-16"><BuyerFaqs title="Questions about mining workforce management" items={workforceFaqs} /></Section>
    <Section className="pb-20"><div className="rounded-[2rem] bg-[#171714] p-8 text-white sm:p-12"><p className="eyebrow text-[#f1a27d]">SEE SHUNTER IN PRACTICE</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{data.finalHeading}</h2><p className="mt-5 max-w-2xl leading-8 text-white/75">Bring a workforce request, readiness challenge or allocation process. We’ll show the relevant capabilities and discuss the configuration your operation needs.</p><div className="mt-8"><ButtonLink href={workforceDemo.href}>{data.finalButton}</ButtonLink></div></div></Section>
  </main>;
}
