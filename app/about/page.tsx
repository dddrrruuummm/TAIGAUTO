import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about TAIGAUTO CO., LTD., an Ontario company positioned for automotive component sourcing and trade coordination."
};

export default function AboutPage() {
  return (
    <section className="bg-pearl py-16">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-wine">About TAIGAUTO</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight">A focused corporate base for automotive component collaboration.</h1>
          <p className="mt-6 leading-8 text-ink/70">TAIGAUTO CO., LTD. is an Ontario company. Its formation documents establish the corporate entity but do not define a specific product category. This website therefore uses the automotive direction suggested by the company name as a focused framework for trade and sourcing conversations.</p>
          <p className="mt-4 leading-8 text-ink/70">Our website presents a professional starting point for prospective buyers, suppliers, distributors, and partners to begin a qualified automotive component discussion.</p>
          <Button href="/contact" className="mt-7">Contact the Company</Button>
        </div>
        <div className="grid gap-4 rounded-md border border-ink/10 bg-white p-7 shadow-soft"><p className="eyebrow text-wine">Operating Focus</p><p className="text-3xl font-bold leading-tight">Automotive components. Sourcing coordination. Practical programs.</p><div className="grid gap-4 border-t border-ink/10 pt-6 text-sm leading-6 text-ink/65"><p>Built for buyer, distributor, supplier, and commercial partnership conversations.</p><p>Initial discussions can be tailored around the vehicle segment, component brief, sourcing needs, and operational context.</p></div></div>
      </div>
    </section>
  );
}
