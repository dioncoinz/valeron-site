import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPage from "@/components/SolutionPage";
import { solutionMetadata, solutions } from "../solution-data";

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = solutionMetadata[slug];
  if (!meta) return {};
  const canonical = `/solutions/${slug}`;
  return { title: meta.title, description: meta.description, alternates: { canonical }, openGraph: { title: meta.title, description: meta.description, url: canonical, type: "website" } };
}

export default async function DetailedSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = solutions[slug];
  if (!data) notFound();
  const meta = solutionMetadata[slug];
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: meta.title, description: meta.description, provider: { "@type": "Organization", name: "Valeron", url: "https://valeron.com.au" }, url: `https://valeron.com.au/solutions/${slug}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://valeron.com.au" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://valeron.com.au/solutions" }, { "@type": "ListItem", position: 3, name: meta.title, item: `https://valeron.com.au/solutions/${slug}` }] },
  ];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><SolutionPage data={data} /></>;
}
