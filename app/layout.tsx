import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://valeron.com.au"),
  title: { default: "Valeron | Operational Software Australia", template: "%s | Valeron" },
  description: "Australian operational software connecting assets, people and work across complex industrial environments.",
  applicationName: "Valeron", authors: [{ name: "Valeron Pty Ltd" }], creator: "Valeron",
  keywords: ["operational software Australia", "asset management software", "workforce compliance software", "maintenance management software", "mining operational software", "shutdown management software", "field operations software"],
  alternates: { canonical: "/" }, icons: { icon: "/brand/favicon-32.png", apple: "/brand/favicon-512.png" },
  openGraph: { type: "website", url: "/", title: "Valeron | Operational Software Australia", description: "Modern operational software connecting assets, people and work.", siteName: "Valeron", locale: "en_AU", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Valeron — operational software built around real work" }] },
  twitter: { card: "summary_large_image", title: "Valeron | Operational Software Australia", description: "Modern operational software connecting assets, people and work.", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organisation = { "@context": "https://schema.org", "@type": "Organization", name: "Valeron Pty Ltd", url: "https://valeron.com.au", logo: "https://valeron.com.au/brand/valeron-logo.png", description: "An Australian operational software company building software for complex operational environments.", areaServed: "AU" };
  return <html lang="en-AU" className={`${geistSans.variable} ${geistMono.variable}`}><body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation).replace(/</g, "\\u003c") }} /><Navbar />{children}<Footer /></body></html>;
}
