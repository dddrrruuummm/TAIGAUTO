import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TAIGAUTO | Automotive Components & Trade",
    template: "%s | TAIGAUTO"
  },
  description: "TAIGAUTO CO., LTD. is an Ontario company positioned for automotive component sourcing, supplier coordination, and cross-border trade conversations.",
  keywords: ["automotive components Canada", "auto parts sourcing", "Ontario automotive trade", "automotive supplier coordination", "cross-border auto parts", "TAIGAUTO"],
  openGraph: {
    title: "TAIGAUTO | Automotive Components & Trade",
    description: "A clear starting point for automotive component sourcing, supplier coordination, and trade conversations.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/automotive-supply-hero.png", width: 1536, height: 1024, alt: "TAIGAUTO automotive component supply workspace" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TAIGAUTO | Automotive Components & Trade",
    description: "A clear starting point for automotive component sourcing, supplier coordination, and trade conversations.",
    images: ["/images/automotive-supply-hero.png"]
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    description: "Ontario company positioned for automotive component sourcing, supplier coordination, and cross-border trade conversations.",
    areaServed: ["Canada", "United States"]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
