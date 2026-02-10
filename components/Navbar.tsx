import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        {/* Navbar height stays fixed */}
        <div className="flex h-22 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div className="relative flex items-center">
              <Image
                src="/brand/valeron-logo.svg" // swap to .png if needed
                alt="Valeron"
                width={400}
                height={335}
                priority
                className="h-24 w-auto -mt-2"
              />
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            <Link href="/solutions" className="hover:text-gray-900 transition">
              Solutions
            </Link>
            <Link href="/shutdown-suite" className="hover:text-gray-900 transition">
              Shutdown Suite
            </Link>
            <Link href="/examples" className="hover:text-gray-900 transition">
              Examples
            </Link>
            <Link href="/about" className="hover:text-gray-900 transition">
              About
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
