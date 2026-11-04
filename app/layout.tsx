import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TAIGAUTO | BRABUS & MANSORY Parts",
    template: "%s | TAIGAUTO"
  },
  description: "BRABUS and MANSORY modification parts, automotive component sourcing, and trade coordination from TAIGAUTO CO., LTD. in Hamilton, Ontario, Canada.",
  keywords: ["BRABUS parts", "MANSORY parts", "modification parts Canada", "carbon fiber body parts", "forged wheels", "automotive component sourcing", "TAIGAUTO"],
  openGraph: {
    title: "TAIGAUTO | BRABUS & MANSORY Parts",
    description: "Explore BRABUS and MANSORY modification parts and discuss your vehicle requirements with TAIGAUTO.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/brands/brabus-widestar-exterior.webp", width: 1387, height: 780, alt: "BRABUS WIDESTAR exterior styling and wheels" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TAIGAUTO | BRABUS & MANSORY Parts",
    description: "Explore BRABUS and MANSORY modification parts and discuss your vehicle requirements with TAIGAUTO.",
    images: ["/brands/brabus-widestar-exterior.webp"]
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
    description: "BRABUS and MANSORY modification parts, automotive component sourcing, and trade coordination from Hamilton, Ontario, Canada.",
    areaServed: ["Canada", "United States"]
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
