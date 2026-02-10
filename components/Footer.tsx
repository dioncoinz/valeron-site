import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/valeron-logo.svg" // change to .png if needed
              alt="Valeron"
              width={220}
              height={60}
              className="h-24 w-auto"
            />
          </Link>

          {/* FOOTER NAV */}
          <nav className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
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
            <Link href="/contact" className="hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} Valeron Pty Ltd -All rights reserved.
        </div>
      </div>
    </footer>
  );
}
