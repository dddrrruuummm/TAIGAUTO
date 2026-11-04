import type { Metadata } from "next";
import { Suspense } from "react";
import { CollectionExplorer } from "@/components/collection-explorer";

export const metadata: Metadata = {
  title: "BRABUS & MANSORY Modification Parts",
  alternates: { canonical: "/showcase" },
  description: "Explore BRABUS and MANSORY carbon bodywork, wheel designs, and interior details, alongside TAIGAUTO's automotive component sourcing range.",
};

export default function Page() {
  return <section className="collection-route"><div className="container-page"><h1>Parts &amp; components</h1><p>BRABUS and MANSORY modification parts, plus our automotive component range.</p><Suspense fallback={<p>Loading products and parts…</p>}><CollectionExplorer /></Suspense></div></section>;
}
