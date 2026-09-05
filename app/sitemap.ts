import type { MetadataRoute } from "next";
import { solutions } from "@/app/solutions/solution-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://valeron.com.au";
  const primary = ["", "/shunter", "/solutions", "/industries", "/custom-solutions", "/shutdown-suite", "/about", "/book-demo", "/contact"];
  return [...primary.map((path) => ({ url: `${base}${path}`, changeFrequency: path === "" || path === "/shunter" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : path === "/shunter" ? 0.9 : 0.7 })), ...Object.keys(solutions).map((slug) => ({ url: `${base}/solutions/${slug}`, changeFrequency: "monthly" as const, priority: 0.6 }))];
}
