import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = { title: "Component Index", description: "Review ten TAIGAUTO automotive component directions for sourcing and trade conversations." };

export default function ShowcasePage() {
  return (
    <main className="tech-grid bg-pearl pb-20">
      <section className="bg-wine py-14 text-white"><div className="container-page grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"><div><p className="eyebrow text-ink">Component Index / Revision 01</p><h1 className="mt-5 text-6xl font-black uppercase leading-[0.9] sm:text-7xl">Ten systems.<br />One clear view.</h1></div><p className="max-w-lg border-l border-white/40 pl-6 leading-7 text-white/75">This is a program index, not live inventory. Each category can be refined around application, specification, volume, packaging, and market requirements.</p></div></section>
      <section className="container-page pt-12"><div className="mb-8 flex items-center justify-between border-b-2 border-ink pb-4 text-xs font-black uppercase tracking-[0.13em]"><span>TAIGAUTO / Automotive Components</span><span>Records 01-10</span></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.code} product={product} />)}</div></section>
    </main>
  );
}
