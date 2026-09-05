import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "About Valeron — Built from Industry Experience",
  description: "Valeron is a Western Australian operational software company shaped by 20+ years across mining, shutdowns, maintenance and complex industrial operations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Valeron | Built from Operations",
    description: "Operational software shaped by more than two decades inside complex industrial environments.",
    url: "/about",
  },
};

const founderPortrait: { src?: string; alt: string } = {
  src: "/images/about/dion-georgel.webp",
  alt: "Dion Georgel, Founder of Valeron",
};

const approach = [
  {
    number: "01",
    title: "Understand the work",
    description: "Start with the people, decisions, constraints and exceptions that define the real operational requirement.",
  },
  {
    number: "02",
    title: "Design the process",
    description: "Remove avoidable handoffs and duplication before translating the workflow into technology.",
  },
  {
    number: "03",
    title: "Build around reality",
    description: "Create software that supports operational teams and fits the wider systems environment around them.",
  },
] as const;

const evolution = [
  ["Operational experience", "Years spent inside planning, maintenance, shutdown and field environments."],
  ["A better way", "Recognition that too much valuable time was being spent moving and repairing information."],
  ["First applications", "Purpose-built software developed around specific operational problems."],
  ["Valeron", "Founded in Western Australia in 2025 to build software around real workflows."],
  ["Connected platforms", "Shunter extends that philosophy across assets, people and operational work."],
] as const;

const platformAreas = [
  "Assets",
  "Workforce",
  "Maintenance",
  "Compliance",
  "Scheduling",
  "Operational workflows",
  "Documentation",
  "Inventory",
  "Reporting",
] as const;

export default function AboutPage() {
  return <main>
    <Section className="pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.55fr] lg:items-end">
        <div>
          <p className="eyebrow text-[#b94d21]">ABOUT VALERON</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.35rem]">Built from operations.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b5952] sm:text-xl">Valeron combines more than two decades of experience inside complex operational environments with modern software capability. We understand the work first, then build technology around it.</p>
        </div>
        <div className="border-l-2 border-[#dd622d] pl-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#747168]">Founded</p>
          <p className="mt-3 text-xl font-semibold">Western Australia<br />2025</p>
        </div>
      </div>
    </Section>

    <section className="bg-[#171714] py-20 text-white lg:py-28">
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-[#f1a27d]">WHY VALERON EXISTS</p>
            <blockquote className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">The problem was not the spreadsheet. It was how much work was happening around it.</blockquote>
          </div>
          <div className="space-y-7 text-lg leading-8 text-white/65">
            <p>Across operational businesses, expensive time is often consumed simply administering work: entering the same information more than once, moving it between disconnected systems, chasing approvals through email and trying to establish which version is accurate.</p>
            <p>Spreadsheets frequently become operational systems because the formal software does not reflect how the work actually happens. Teams then create more handoffs and administration to bridge the gap.</p>
            <p>Valeron began with a straightforward insight: digitising a poor process is not enough. The opportunity is to understand the operational requirement, improve the process and make the information easier to trust and act on.</p>
          </div>
        </div>
      </Section>
    </section>

    <Section className="py-20 lg:py-28">
      <SectionHeading eyebrow="OUR APPROACH" title="Understand the work first. Build around it second." description="Software should not force an operation to adopt unnecessary workarounds just to suit the system. The process begins with operational reality." />
      <div className="mt-12 grid gap-px overflow-hidden rounded-[1.7rem] border border-[#dcd5c8] bg-[#dcd5c8] md:grid-cols-3">
        {approach.map((item) => <article key={item.number} className="bg-[#f7f3eb] p-7 sm:p-8 lg:min-h-72">
          <p className="font-mono text-xs text-[#b94d21]">{item.number}</p>
          <h2 className="mt-8 text-2xl font-semibold tracking-[-0.025em]">{item.title}</h2>
          <p className="mt-4 leading-7 text-[#66635b]">{item.description}</p>
        </article>)}
      </div>
    </Section>

    <section className="border-y border-black/10 bg-white/45 py-20 lg:py-28">
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#e8e2d6]">
              {founderPortrait.src ? <Image src={founderPortrait.src} alt={founderPortrait.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" /> : <div className="absolute inset-0 grid place-items-center p-8 text-center" role="img" aria-label="Development image slot for Dion Georgel's founder portrait">
                <div><div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#dd622d]/35 bg-[#dd622d]/10 font-mono text-xs text-[#b94d21]">DG</div><p className="mt-5 font-semibold">Founder portrait</p><p className="mt-2 text-sm leading-6 text-[#747168]">Development media slot<br />dion-georgel.webp</p></div>
              </div>}
            </div>
            <figcaption className="mt-4 text-sm text-[#747168]">Dion Georgel · Founder, Valeron</figcaption>
          </figure>

          <div>
            <p className="eyebrow text-[#b94d21]">FOUNDER</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Dion Georgel</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-[#747168]">Founder, Valeron</p>
            <div className="mt-8 space-y-6 text-lg leading-8 text-[#5b5952]">
              <p>Dion’s perspective was shaped by more than 20 years around complex operational businesses. Approximately 15 of those years were spent across crane and shutdown environments, progressing from operational roles into management and gaining direct exposure to the realities of field execution.</p>
              <p>His experience broadened across mining, oil and gas, labour hire, construction and related industrial settings. It includes around eight years operating at Planning Superintendent level within Tier 1 mining operations, working across maintenance planning, major maintenance, fixed plant, scheduling, work and asset management, contractors, mobilisation, workforce coordination, materials, SAP and operational reporting.</p>
              <p>That breadth matters because operational problems rarely remain inside one department. A planning decision can affect labour, materials, compliance, execution and reporting. Valeron was created with that connected view of the work.</p>
              <p className="text-base text-[#747168]">Dion is also undertaking postgraduate study toward an MBA, complementing his operational experience with continued development in business leadership.</p>
            </div>
            <div className="mt-9 inline-flex items-end gap-4 border-t border-black/15 pt-6"><span className="text-4xl font-semibold tracking-[-0.04em]">20+</span><span className="pb-1 text-sm leading-5 text-[#66635b]">years of operational<br />and industrial experience</span></div>
          </div>
        </div>
      </Section>
    </section>

    <Section className="py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FROM OPERATIONS INTO SOFTWARE" title="The first solutions started with problems already understood." />
        <div className="space-y-6 text-lg leading-8 text-[#5b5952]">
          <p>After seeing the same administrative friction consume time across different operating environments, Dion began studying coding and software development and personally built Valeron’s first applications around problems he knew from experience.</p>
          <p>The starting point was not a software concept searching for a market. It was operational knowledge looking for a better way to structure work, protect information and give teams clearer visibility.</p>
          <p>This combination remains central to Valeron: operational understanding defines the requirement, and software capability turns that understanding into practical systems.</p>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-[1.7rem] border border-[#dcd5c8] bg-[#dcd5c8] md:grid-cols-5">
        {evolution.map(([title, description], index) => <article key={title} className="bg-[#f7f3eb] p-6 md:min-h-64">
          <p className="font-mono text-[10px] tracking-[0.15em] text-[#b94d21]">0{index + 1}</p>
          <h3 className="mt-5 font-semibold">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#66635b]">{description}</p>
        </article>)}
      </div>
    </Section>

    <section className="bg-[#dd622d] py-20 text-white lg:py-24">
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-white/65">VALERON TODAY</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">From focused workflows to connected operational platforms.</h2>
            <p className="mt-6 text-lg leading-8 text-white/80">The same philosophy behind Valeron’s first applications now extends across broader operational systems. Shunter is the flagship expression of that direction, connecting the information behind assets, people and work.</p>
            <div className="mt-8"><ButtonLink href="/shunter" secondary>Explore Shunter</ButtonLink></div>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.4rem] border border-white/25 bg-white/25 sm:grid-cols-3">
            {platformAreas.map((area) => <div key={area} className="grid min-h-24 place-items-center bg-[#dd622d] p-4 text-center text-sm font-semibold">{area}</div>)}
          </div>
        </div>
      </Section>
    </section>

    <Section className="py-20 text-center lg:py-28">
      <p className="eyebrow text-[#b94d21]">OUR PURPOSE</p>
      <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">Less administration. Better information. More time for the work that matters.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5b5952]">Valeron exists to reduce unnecessary administration, improve accuracy and help operational teams act with clearer information.</p>
    </Section>

    <Section className="pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#171714] p-8 text-white sm:p-12 lg:p-16">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[48px] border-[#dd622d]/20" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <p className="eyebrow text-[#f1a27d]">START A CONVERSATION</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">Bring us the operational problem.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">Talk directly with Valeron about the process, systems and real-world constraints behind the work.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/contact">Talk to Valeron</ButtonLink><ButtonLink href="/shunter" secondary>Explore Shunter</ButtonLink></div>
        </div>
      </div>
    </Section>
  </main>;
}
