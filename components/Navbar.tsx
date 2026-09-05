"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site-data";
import ArrowUpRight from "@/components/ArrowUpRight";

function MenuIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5"><path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

export default function Navbar() {
  const pathname = usePathname();

  return <header className="sticky top-0 z-50 border-b border-black/15 bg-[#f7f3eb]/[0.97] backdrop-blur-xl">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="flex h-[84px] items-center">
        <div className="flex min-w-0 items-center">
          <Link href="/" aria-label="Valeron home" className="block shrink-0 overflow-hidden focus-visible:rounded-sm">
            <Image src="/brand/valeron-logo.svg" alt="Valeron" width={800} height={300} priority className="h-[68px] w-auto mix-blend-multiply" />
          </Link>
          <div className="ml-5 hidden border-l border-black/15 pl-5 xl:block">
            <p className="font-mono text-[9px] uppercase leading-[1.55] tracking-[0.17em] text-[#6c6961]">Operational software<br />Australia</p>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="ml-auto hidden h-full items-stretch lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`group relative flex items-center px-5 text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-[#b94d21] ${active ? "text-[#b94d21]" : "text-[#2f2e2a]"}`}>
              {item.label}
              <span className={`absolute inset-x-5 bottom-0 h-px origin-left bg-[#dd622d] transition-transform ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} aria-hidden="true" />
            </Link>;
          })}
        </nav>

        <div className="ml-5 hidden border-l border-black/15 pl-5 sm:block">
          <Link href="/book-demo" className="group inline-flex h-11 items-center overflow-hidden rounded-[0.55rem] bg-[#171714] text-sm font-semibold text-white transition-colors hover:bg-[#2a2925]">
            <span className="px-5">Book a demo</span>
            <span className="grid h-full w-11 place-items-center bg-[#dd622d] transition-colors group-hover:bg-[#c75225]"><ArrowUpRight /></span>
          </Link>
        </div>

        <details className="group relative ml-auto lg:hidden">
          <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-[0.55rem] border border-black/20 px-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:border-black/45" aria-label="Open navigation">
            <span className="hidden sm:inline">Menu</span><MenuIcon />
          </summary>
          <div className="absolute right-0 top-[58px] w-[min(24rem,calc(100vw-2.5rem))] border border-black/15 bg-[#f7f3eb] shadow-[0_28px_70px_-32px_rgba(23,23,20,0.65)]">
            <div className="border-b border-black/10 px-5 py-4"><p className="font-mono text-[9px] uppercase tracking-[0.17em] text-[#77736b]">Valeron / Operational software</p></div>
            <nav aria-label="Mobile navigation" className="px-5 py-2">
              {navigation.map((item, index) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`flex items-center justify-between border-b border-black/10 py-4 text-base font-medium transition-colors hover:text-[#b94d21] ${active ? "text-[#b94d21]" : ""}`}><span>{item.label}</span><span className={`font-mono text-[9px] ${active ? "text-[#b94d21]" : "text-[#8a867e]"}`}>0{index + 1}</span></Link>;
              })}
            </nav>
            <div className="p-5 sm:hidden"><Link href="/book-demo" className="group flex h-12 w-full items-center justify-between bg-[#171714] pl-5 text-sm font-semibold text-white"><span>Book a demo</span><span className="grid h-12 w-12 place-items-center bg-[#dd622d]"><ArrowUpRight /></span></Link></div>
          </div>
        </details>
      </div>
    </div>
  </header>;
}
