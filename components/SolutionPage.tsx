import Link from "next/link";
import Section from "@/components/Section";
import SolutionIcon, { type SolutionIconName } from "@/components/SolutionIcon";
import ArrowUpRight from "@/components/ArrowUpRight";

export type ContentSection = {
  title: string;
  intro?: string;
  items?: string[];
  note?: string;
};

export type SolutionData = {
  slug: string;
  product: string;
  icon: SolutionIconName;
  h1: string;
  introduction: string;
  secondary?: { label: string; href: string };
  problemTitle: string;
  problem: string;
  sections: ContentSection[];
  finalHeading: string;
  finalButton: string;
  related: string[];
  variant: number;
};

const labels: Record<string, string> = {
  "mining-shutdown-management": "Mining shutdown management",
  "digital-prestart-fleet-management": "Digital pre-start and fleet management",
  "contractor-mobilisation": "Contractor mobilisation",
  "mining-timesheet-labour-capture": "Mining timesheet and labour capture",
  "tool-equipment-tracking": "Tool and equipment tracking",
  "custom-mining-software": "Custom mining software",
};

function CapabilityGrid({ section }: { section: ContentSection }) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
      {section.intro && <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">{section.intro}</p>}
      {section.items && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
              <span className="text-sm leading-6 text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      )}
      {section.note && <p className="mt-6 max-w-3xl text-gray-600">{section.note}</p>}
    </div>
  );
}

function DashboardPanel({ section, product }: { section: ContentSection; product: string }) {
  return (
    <div className="grid gap-8 rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold tracking-widest text-gray-500">OPERATIONAL VISIBILITY</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">{section.title}</h2>
        {section.intro && <p className="mt-4 leading-7 text-gray-600">{section.intro}</p>}
        {section.note && <p className="mt-4 text-sm leading-6 text-gray-600">{section.note}</p>}
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" aria-label={`${product} operational capability summary`}>
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="text-sm font-semibold">Operational capability</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">Configured per operation</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {section.items?.map((item, index) => (
            <div key={item} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${index % 3 === 0 ? "bg-gray-900" : "bg-gray-400"}`} />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">Capability summary—not a representation of the product interface.</p>
      </div>
    </div>
  );
}

export default function SolutionPage({ data }: { data: SolutionData }) {
  const dashboardIndex = Math.min(2, data.sections.length - 1);
  return (
    <main className="text-gray-900">
      <Section className="pt-10 pb-14 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="hover:text-gray-900">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/solutions" className="hover:text-gray-900">Solutions</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-gray-700">{labels[data.slug]}</li></ol>
        </nav>
        <div className={`mt-10 grid gap-10 lg:grid-cols-2 lg:items-center ${data.variant % 2 === 0 ? "" : "lg:grid-cols-[1.15fr_0.85fr]"}`}>
          <div>
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wide text-gray-500"><SolutionIcon name={data.icon} className="h-5 w-5" />{data.product}</div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{data.h1}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">{data.introduction}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/book-demo" className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Book a demo</Link>
              {data.secondary && <Link href={data.secondary.href} className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">{data.secondary.label}</Link>}
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-semibold tracking-widest text-gray-500">BUILT FOR OPERATIONS</p>
            <div className="mt-5 space-y-4">{data.sections[0].items?.slice(0, 5).map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-900 text-xs text-white">✓</span>{item}</div>)}</div>
          </div>
        </div>
      </Section>

      <Section className="pb-16"><div className="rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white md:p-12"><div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]"><h2 className="text-3xl font-bold tracking-tight">{data.problemTitle}</h2><p className="text-lg leading-8 text-gray-300">{data.problem}</p></div></div></Section>

      {data.sections.map((section, index) => index === dashboardIndex ? (
        <Section key={section.title} className="pb-16"><DashboardPanel section={section} product={data.product} /></Section>
      ) : (
        <Section key={section.title} className={`pb-16 ${data.variant === 2 && index % 2 ? "lg:pl-24" : data.variant === 3 && index % 2 === 0 ? "lg:pr-24" : ""}`}><CapabilityGrid section={section} /></Section>
      ))}

      <Section className="pb-16"><div className="border-t border-gray-200 pt-10"><h2 className="text-2xl font-bold">Related Valeron solutions</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{data.related.map((slug) => <Link key={slug} href={`/solutions/${slug}`} className="group rounded-2xl border border-gray-200 p-5 transition hover:border-gray-400 hover:shadow-sm"><span className="font-semibold">{labels[slug]}</span><span className="mt-2 inline-flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-900">Explore this solution <ArrowUpRight /></span></Link>)}</div></div></Section>

      <Section className="pb-24"><div className="rounded-3xl border border-gray-200 bg-gray-50 p-9 md:p-12"><h2 className="text-3xl font-bold tracking-tight">{data.finalHeading}</h2><p className="mt-4 max-w-2xl text-gray-600">Talk through your current process with Valeron and see how a practical, configured workflow could support your team.</p><Link href="/book-demo" className="mt-8 inline-block rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800">{data.finalButton}</Link></div></Section>
    </main>
  );
}
