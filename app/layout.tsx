import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Valeron | Custom Business Solutions",
    template: "%s | Valeron",
  },
  description:
    "Valeron designs and builds custom business solutions and work management applications for operations, maintenance, and shutdown teams.",
  keywords: [
    "custom business solutions",
    "work management software",
    "shutdown management",
    "maintenance software",
    "operations dashboards",
    "custom web applications",
  ],
  authors: [{ name: "Valeron" }],
  creator: "Valeron",
  metadataBase: new URL("https://valeron.com.au"),
  icons: {
    icon: "/brand/favicon-32.png",
    apple: "/brand/favicon-512.png",
  },
  openGraph: {
    type: "website",
    url: "https://valeron.com.au",
    title: "Valeron | Custom Business Solutions",
    description:
      "Custom-built work management apps for real operations — approvals, compliance, readiness, and reporting.",
    siteName: "Valeron",
    images: [
      {
        url: "/brand/og-valeron-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Valeron – Custom Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valeron | Custom Business Solutions",
    description: "Custom-built work management apps for real operations.",
    images: ["/brand/og-valeron-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
