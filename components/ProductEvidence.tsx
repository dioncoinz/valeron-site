import ProductScreenshot from "@/components/ProductScreenshot";
import type { ScreenshotConfig } from "@/lib/site-data";

export default function ProductEvidence({ screenshot, product = "Shunter", priority = false }: { screenshot: ScreenshotConfig; product?: "Shunter" | "Metricz"; priority?: boolean }) {
  return <div><ProductScreenshot screenshot={screenshot} product={product} priority={priority} /><a href={screenshot.image} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#b94d21] underline underline-offset-4">View {screenshot.label.toLowerCase()} at full size<span className="sr-only"> (opens in a new tab)</span></a></div>;
}
