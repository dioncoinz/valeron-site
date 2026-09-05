import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import ProductCTA from "@/components/ProductCTA";
import SectionHeading from "@/components/SectionHeading";
import { focusedSolutions } from "@/lib/site-data";
import ArrowUpRight from "@/components/ArrowUpRight";

export const metadata: Metadata = { title: "Operational Software Solutions", description: "Explore Shunter and focused Valeron software for shutdowns, fleet, mobilisation, labour capture, equipment tracking and complex operational workflows.", alternates: { canonical: "/solutions" } };

export default function SolutionsPage() {
  return <main><Section className="pb-16 pt-16 lg:pb-24 lg:pt-24"><p className="eyebrow text-[#b94d21]">VALERON SOLUTIONS</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">A connected platform when the operation needs one. Focused software when it does not.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b5952]">Valeron develops operational software at two levels: Shunter connects work across the operation, while focused products solve specific, well-defined workflow problems.</p></Section>
    <section className="bg-[#171714] py-16 text-white lg:py-20"><Section><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-[#f1a27d]">FLAGSHIP PLATFORM</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Shunter</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-white/65">One connected operational layer for assets, workforce, scheduling, maintenance, compliance, documents, inventory and intelligence.</p></div><ButtonLink href="/shunter">Explore Shunter</ButtonLink></div></Section></section>
    <Section className="py-20 lg:py-28"><SectionHeading eyebrow="FOCUSED PRODUCTS" title="Purpose-built around an operational problem." description="These products retain their own focus and can provide a practical starting point without competing with Shunter’s broader platform role." /><div className="mt-12 grid gap-5 md:grid-cols-2">{focusedSolutions.map((solution, index) => <Link key={solution.name} href={solution.href} className="group surface-card grid gap-6 p-7 transition hover:-translate-y-1 hover:border-[#dd622d]/50 sm:grid-cols-[auto_1fr]"><span className="font-mono text-xs text-[#b94d21]">0{index + 1}</span><div><p className="eyebrow text-[#747168]">{solution.category}</p><h2 className="mt-3 text-2xl font-semibold">{solution.name}</h2><p className="mt-3 leading-7 text-[#66635b]">{solution.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b94d21]">Explore <ArrowUpRight /></span></div></Link>)}</div></Section>
    <section className="border-y border-black/10 bg-white/45 py-20"><Section><div className="grid gap-10 lg:grid-cols-2"><SectionHeading eyebrow="CUSTOM SOLUTIONS" title="When the workflow is specific, the software can be too." description="Valeron maps operational problems, designs around real users, integrates where required and iterates from implementation experience." /><div className="flex items-end"><ButtonLink href="/custom-solutions" secondary>Explore custom solutions</ButtonLink></div></div></Section></section>
    <ProductCTA title="Find the right starting point for your operation." description="We’ll help you distinguish between a Shunter implementation, a focused Valeron product and a purpose-built operational workflow." />
  </main>;
}
