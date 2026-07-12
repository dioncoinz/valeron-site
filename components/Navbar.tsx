import Image from "next/image";
import Link from "next/link";

const solutionLinks = [
  ["Shutdown management", "/solutions/mining-shutdown-management"],
  ["Pre-starts & fleet", "/solutions/digital-prestart-fleet-management"],
  ["Contractor mobilisation", "/solutions/contractor-mobilisation"],
  ["Timesheets & labour", "/solutions/mining-timesheet-labour-capture"],
  ["Tool & equipment tracking", "/solutions/tool-equipment-tracking"],
  ["Custom mining software", "/solutions/custom-mining-software"],
];

export default function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
    <div className="mx-auto max-w-6xl px-6"><div className="flex h-22 items-center justify-between">
      <Link href="/" className="flex items-center" aria-label="Valeron home"><Image src="/brand/valeron-logo.svg" alt="Valeron" width={400} height={335} priority className="-mt-2 h-24 w-auto" /></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
        <div className="group relative"><Link href="/solutions" className="inline-flex items-center gap-1 py-8 transition hover:text-gray-900" aria-haspopup="true">Solutions <span aria-hidden="true">⌄</span></Link><div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"><Link href="/solutions" className="block rounded-xl px-4 py-3 font-semibold hover:bg-gray-50">View all solutions</Link>{solutionLinks.map(([label, href]) => <Link key={href} href={href} className="block rounded-xl px-4 py-2.5 font-normal text-gray-600 hover:bg-gray-50 hover:text-gray-900">{label}</Link>)}</div></div>
        <Link href="/shutdown-suite" className="transition hover:text-gray-900">Shutdown Suite</Link><Link href="/examples" className="transition hover:text-gray-900">Examples</Link><Link href="/about" className="transition hover:text-gray-900">About</Link>
      </nav>
      <Link href="/book-demo" className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 sm:px-5">Book a demo</Link>
    </div>
    <details className="group border-t border-gray-100 py-3 md:hidden"><summary className="cursor-pointer list-none text-sm font-medium text-gray-700">Menu <span className="float-right group-open:rotate-180">⌄</span></summary><nav aria-label="Mobile navigation" className="mt-3 grid gap-1 pb-2"><Link href="/solutions" className="rounded-lg py-2 font-medium">All solutions</Link>{solutionLinks.map(([label, href]) => <Link key={href} href={href} className="rounded-lg py-2 pl-3 text-sm text-gray-600">{label}</Link>)}<Link href="/shutdown-suite" className="rounded-lg py-2 font-medium">Shutdown Suite</Link><Link href="/examples" className="rounded-lg py-2 font-medium">Examples</Link><Link href="/about" className="rounded-lg py-2 font-medium">About</Link></nav></details>
    </div>
  </header>;
}
