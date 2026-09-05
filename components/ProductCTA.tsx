import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";

export default function ProductCTA({ title = "Put your operation in one connected view.", description = "Talk to Valeron about the work, systems and teams you need to connect.", primary = "Book a demo", secondary = "Talk to Valeron" }: { title?: string; description?: string; primary?: string; secondary?: string }) {
  return <Section className="pb-24"><div className="relative overflow-hidden rounded-[2rem] bg-[#171714] p-8 text-white sm:p-12 lg:p-16">
    <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[48px] border-[#dd622d]/20" aria-hidden="true" />
    <div className="relative max-w-3xl"><p className="eyebrow text-[#f1a27d]">NEXT STEP</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">{description}</p><div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/book-demo">{primary}</ButtonLink><ButtonLink href="/contact" secondary>{secondary}</ButtonLink></div></div>
  </div></Section>;
}
