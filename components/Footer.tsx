import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/site-data";

export default function Footer() {
  return <footer className="border-t border-black/10 bg-[#eee8dc]"><div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
    <div><Link href="/" aria-label="Valeron home"><Image src="/brand/valeron-logo.svg" alt="Valeron" width={800} height={300} className="h-20 w-auto mix-blend-multiply" /></Link><p className="mt-3 max-w-sm text-sm leading-6 text-[#66635b]">Australian operational software for complex industrial environments.</p></div>
    <div><p className="eyebrow text-[#747168]">EXPLORE</p><nav className="mt-4 grid gap-2 text-sm">{navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-[#b94d21]">{item.label}</Link>)}<Link href="/custom-solutions" className="hover:text-[#b94d21]">Custom solutions</Link></nav></div>
    <div><p className="eyebrow text-[#747168]">START A CONVERSATION</p><div className="mt-4 grid gap-2 text-sm"><Link href="/book-demo" className="hover:text-[#b94d21]">Book a demo</Link><Link href="/contact" className="hover:text-[#b94d21]">Contact</Link><a href="mailto:solutions@valeron.com.au" className="hover:text-[#b94d21]">solutions@valeron.com.au</a></div></div>
  </div><div className="mt-12 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-[#747168] sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Valeron Pty Ltd. All rights reserved.</p><p>Built in Australia for operational work.</p></div></div></footer>;
}
