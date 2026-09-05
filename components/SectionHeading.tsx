export default function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className="max-w-3xl">
    <p className={`eyebrow ${light ? "text-[#f1a27d]" : "text-[#b94d21]"}`}>{eyebrow}</p>
    <h2 className={`mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#171714]"}`}>{title}</h2>
    {description && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/65" : "text-[#5b5952]"}`}>{description}</p>}
  </div>;
}
