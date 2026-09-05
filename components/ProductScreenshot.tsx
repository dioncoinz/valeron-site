import Image from "next/image";
import type { ScreenshotConfig } from "@/lib/site-data";

export default function ProductScreenshot({ screenshot, priority = false, className = "" }: { screenshot: ScreenshotConfig; priority?: boolean; className?: string }) {
  const isMobile = screenshot.kind === "mobile";
  const usesPhoneFrame = isMobile;
  return <figure className={`group ${className}`}>
    <div className={`screenshot-shell ${isMobile ? `mx-auto ${usesPhoneFrame ? "max-w-[310px] rounded-[2rem]" : "max-w-[540px] rounded-[1.4rem]"}` : "rounded-[1.4rem]"}`}>
      <div className="flex h-9 items-center gap-1.5 border-b border-black/10 px-4" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-[#dd622d]" /><span className="h-2 w-2 rounded-full bg-black/15" /><span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">Shunter</span>
      </div>
      <div className="relative overflow-hidden bg-[#ede9df]" style={{ aspectRatio: screenshot.aspectRatio ?? (isMobile ? "9 / 16" : "16 / 10") }}>
        {screenshot.image ? <Image src={screenshot.image} alt={`${screenshot.label} in Shunter`} fill sizes={isMobile ? "310px" : "(max-width: 768px) 100vw, 900px"} priority={priority} className="object-contain object-top transition duration-500 group-hover:scale-[1.005]" /> :
          <div className="absolute inset-0 grid place-items-center p-8 text-center" role="img" aria-label={`Development image slot for ${screenshot.label}`}>
            <div><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#dd622d]/30 bg-[#dd622d]/10 text-[#b94d21]">{screenshot.id.slice(0, 2).toUpperCase()}</div><p className="font-semibold text-[#24231f]">{screenshot.label}</p><p className="mt-2 text-sm text-[#747168]">Development media slot · {screenshot.filename}</p></div>
          </div>}
      </div>
    </div>
    <figcaption className="mt-3 text-sm text-[#747168]">{screenshot.description}</figcaption>
  </figure>;
}
