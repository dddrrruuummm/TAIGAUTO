import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Capabilities", description: "Explore TAIGAUTO capabilities for automotive component programs and trade coordination." };

const details = [
  ["Application framing", "Vehicle segment, use case, fitment context, target market, and channel requirements."],
  ["Supplier conversation", "Program fit, production expectations, samples, documentation, and commercial feasibility."],
  ["Program preparation", "Packaging direction, quantities, timing, labeling, and shipment planning."],
  ["Cross-border coordination", "Practical communication for buyers, distributors, suppliers, and commercial partners."],
];

export default function ServicesPage() {
  return (
    <main className="bg-pearl">
      <section className="border-b-8 border-wine bg-ink py-16 text-white"><div className="container-page"><p className="eyebrow text-wine">Capabilities / Technical Flow</p><h1 className="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.9] sm:text-7xl">The work behind<br />a parts program.</h1></div></section>
      <section className="tech-grid py-20"><div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr]"><div><p className="eyebrow text-wine">Sequence</p><p className="mt-4 max-w-sm text-xl font-bold leading-8">Each engagement starts with a defined requirement and advances through the details that determine program fit.</p><Button href="/contact" className="mt-7">Start a brief <ArrowRight size={17} /></Button></div><div className="border-t-2 border-ink">{services.map((service, index) => <article key={service.number} className="grid gap-4 border-b border-ink/25 py-7 sm:grid-cols-[70px_160px_1fr]"><span className="text-4xl font-black text-wine">{service.number}</span><h2 className="text-xl font-black uppercase">{service.title}</h2><p className="leading-6 text-ink/60">{details[index][1]}</p></article>)}</div></div></section>
      <section className="bg-brass py-14"><div className="container-page grid gap-5 md:grid-cols-2">{["Automotive component sourcing discussions","Supplier and program fit evaluation","Product brief and specification coordination","Packaging, MOQ, and shipment planning","Buyer, distributor, and supplier introductions","Cross-border automotive trade inquiries"].map((item) => <div key={item} className="flex items-center gap-3 border-b border-ink/30 pb-4 font-black uppercase"><Check size={18} />{item}</div>)}</div></section>
    </main>
  );
}
