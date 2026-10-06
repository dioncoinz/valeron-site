import Link from "next/link";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import ProductScreenshot from "@/components/ProductScreenshot";
import { miningShutdown as data, shutdownExample, shutdownFaqs } from "@/app/solutions/shutdown-data";
import { shunterScreenshots } from "@/lib/site-data";
import { shutdownDemo } from "@/lib/demo-interest";

const maintenanceScreenshot = {
  ...shunterScreenshots.find((screenshot) => screenshot.id === "maintenance")!,
  description: "Shunter’s maintenance overview shows open work orders, scheduled repairs and asset status. It gives planners a starting point for reviewing the work and maintenance information behind shutdown readiness.",
};
const schedulingScreenshot = {
  ...shunterScreenshots.find((screenshot) => screenshot.id === "scheduling")!,
  description: "Shunter’s asset scheduler shows operational bookings, asset allocation and work waiting to be placed. This is an operational coordination view, rather than a critical-path shutdown programme.",
};
const lifecycleIds = ["planning-readiness", "scope-control", "workforce", "scheduling", "execution", "reporting"];
const linkClass = "font-semibold text-[#b94d21] underline decoration-[#b94d21]/30 underline-offset-4 hover:decoration-[#b94d21]";

export default function MiningShutdownPage() {
  return <main>
    <Section className="pb-16 pt-10 md:pt-14">
      <nav aria-label="Breadcrumb" className="text-sm text-[#66635b]">
        <ol className="flex flex-wrap gap-2"><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/solutions">Solutions</Link></li><li aria-hidden="true">/</li><li aria-current="page">Mining shutdown management</li></ol>
      </nav>
      <p className="eyebrow mt-10 text-[#b94d21]">{data.product}</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{data.h1}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b5952]">{data.introduction}</p>
      <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href={shutdownDemo.href}>{data.finalButton}</ButtonLink><ButtonLink href="#capabilities" secondary>Explore the shutdown workflow</ButtonLink></div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-[#66635b]">For maintenance and shutdown managers, superintendents, planners, schedulers, reliability teams and mining contractors who need a shared operational view.</p>
      <p className="mt-6 text-sm"><Link href="/shunter" className={linkClass}>Explore the Shunter operational platform</Link></p>
      <div className="mt-12"><ProductScreenshot screenshot={maintenanceScreenshot} priority /><a href={maintenanceScreenshot.image} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block text-sm ${linkClass}`}>View maintenance screenshot at full size<span className="sr-only"> (opens in a new tab)</span></a></div>
    </Section>

    <section className="bg-[#171714] py-16 text-white lg:py-20">
      <Section><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{data.problemTitle}</h2><p className="text-lg leading-8 text-white/70">{data.problem}</p></div></Section>
    </section>

    <Section id="capabilities" className="scroll-mt-28 py-16 lg:py-20">
      <p className="eyebrow text-[#b94d21]">THE SHUTDOWN WORKFLOW</p>
      <nav aria-label="Shutdown lifecycle" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {data.sections.map((section, index) => <a key={section.title} href={`#${lifecycleIds[index]}`} className={linkClass}>{section.title}</a>)}
      </nav>
      <div className="mt-12 space-y-14">
        {data.sections.map((section, index) => <section key={section.title} id={lifecycleIds[index]} className="scroll-mt-28 border-t border-black/15 pt-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div><p className="font-mono text-xs text-[#b94d21]">0{index + 1}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">{section.title}</h2></div>
            <div><p className="leading-7 text-[#5b5952]">{section.intro}</p>
              <ul className="mt-5 space-y-3">{section.items?.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dd622d]" />{item}</li>)}</ul>
              {section.note && <p className="mt-6 border-l-2 border-[#dd622d]/50 pl-4 text-sm leading-7 text-[#66635b]">{section.note}</p>}
              {index === 2 && <p className="mt-6 text-sm leading-7 text-[#66635b]">For personnel records, availability and assignments, explore <Link className={linkClass} href="/solutions/mining-workforce-management">mining workforce management with Shunter</Link>. For supplier-facing coordination, explore <Link className={linkClass} href="/solutions/contractor-mobilisation">contractor mobilisation with Requestz</Link>. It is a separate Valeron product; the right fit is discussed with your team.</p>}
              {index === 5 && <p className="mt-6 text-sm leading-7 text-[#66635b]">If labour capture is your immediate requirement, see <Link className={linkClass} href="/solutions/mining-timesheet-labour-capture">mining timesheet and labour capture with Timesheetz</Link>, a focused Valeron product.</p>}
            </div>
          </div>
          {index === 3 && <div className="mt-9"><ProductScreenshot screenshot={schedulingScreenshot} /><a href={schedulingScreenshot.image} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block text-sm ${linkClass}`}>View scheduling screenshot at full size<span className="sr-only"> (opens in a new tab)</span></a></div>}
        </section>)}
      </div>
    </Section>

    <section className="border-y border-black/10 bg-white/45 py-16 lg:py-20">
      <Section><p className="eyebrow text-[#b94d21]">ILLUSTRATIVE WORKFLOW</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">A late repair request before the shutdown.</h2><p className="mt-5 max-w-3xl leading-7 text-[#66635b]">An example of a configured workflow, not a customer case study. The approval roles and required information are agreed for the operation.</p>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">{shutdownExample.map((step, index) => <li key={step.title} className="surface-card p-7"><p className="font-mono text-xs text-[#b94d21]">0{index + 1}</p><h3 className="mt-4 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#66635b]">{step.description}</p></li>)}</ol>
      </Section>
    </section>

    <Section className="py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div><p className="eyebrow text-[#b94d21]">IMPLEMENTATION & SYSTEMS FIT</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Start with your shutdown process.</h2><p className="mt-5 leading-7 text-[#66635b]">Valeron begins with the work, users and decisions. We map responsibilities and information flows, agree configuration, pilot with real users and support adoption. Operational feedback shapes the next iteration.</p><p className="mt-4 leading-7 text-[#66635b]">Shunter sits alongside the wider enterprise environment. Role-based access, organisational boundaries and integration requirements are confirmed for each implementation. Approved REST APIs and structured data exchange can be considered during solution design; specific system connections are scoped before they are promised.</p><p className="mt-5 text-sm"><Link className={linkClass} href="/custom-solutions">How Valeron approaches a site-specific workflow</Link></p></div>
        <div className="surface-card p-7 sm:p-9"><p className="eyebrow text-[#b94d21]">BUILT FROM OPERATIONS</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Mining and maintenance experience behind the software.</h2><p className="mt-5 leading-7 text-[#66635b]">Valeron was founded in Western Australia. Founder Dion Georgel brings more than 20 years of operational and industrial experience, including approximately eight years at Planning Superintendent level within Tier 1 mining operations.</p><p className="mt-4 leading-7 text-[#66635b]">That background spans maintenance planning, shutdowns, fixed plant, contractors, workforce coordination and operational reporting. It informs the questions we ask about how your work is planned and delivered.</p><p className="mt-5 text-sm"><Link className={linkClass} href="/about">Read about Valeron’s operational background</Link></p></div>
      </div>
    </Section>

    <Section className="pb-16 lg:pb-20">
      <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Questions about Shunter for mining shutdowns</h2>
      <div className="mt-8 divide-y divide-black/15 border-y border-black/15">{shutdownFaqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer text-lg font-semibold leading-7">{faq.question}</summary><p className="mt-4 max-w-4xl leading-7 text-[#66635b]">{faq.answer}</p></details>)}</div>
    </Section>

    <Section className="pb-20 lg:pb-24"><div className="rounded-[2rem] bg-[#171714] p-8 text-white sm:p-12 lg:p-16"><p className="eyebrow text-[#f1a27d]">SEE THE WORKFLOW</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{data.finalHeading}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">Bring your scope, readiness or coordination challenge. We’ll walk through the relevant Shunter capabilities and discuss what needs to be configured for your operation.</p><div className="mt-8 flex flex-wrap gap-4"><ButtonLink href={shutdownDemo.href}>{data.finalButton}</ButtonLink><Link href="/shunter" className="inline-flex items-center px-2 py-3 text-sm font-semibold underline underline-offset-4">Explore Shunter</Link></div></div></Section>
  </main>;
}
