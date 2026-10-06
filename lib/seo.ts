import type { Metadata } from "next";

// Shared fields keep page-specific URL overrides from dropping OpenGraph defaults.
export const defaultOpenGraph = {
  type: "website",
  url: "/",
  title: "Valeron | Operational Software Australia",
  description: "Modern operational software connecting assets, people and work.",
  siteName: "Valeron",
  locale: "en_AU",
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Valeron — operational software built around real work" }],
} satisfies Metadata["openGraph"];
