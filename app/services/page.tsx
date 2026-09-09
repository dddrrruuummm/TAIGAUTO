import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TAIGAUTO capabilities for automotive component sourcing, supplier coordination, and cross-border trade."
};

export default function ServicesPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <p className="eyebrow text-wine">Capabilities</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">Automotive trade capabilities organized around how parts programs move forward.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-ink/10 bg-pearl p-6">
              <Check className="text-wine" />
              <h2 className="mt-4 text-xl font-bold">{service}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                A component-oriented framework for moving from initial interest to a clear, qualified conversation about requirements, specifications, and program fit.
              </p>
            </div>
          ))}
        </div>
        <Button href="/contact" className="mt-9">Start a Component Inquiry</Button>
      </div>
    </section>
  );
}
