import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Company", description: "Meet TAIGAUTO CO., LTD., an Ontario automotive component and trade company." };

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-14 text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div><p className="eyebrow text-wine">Company File / 01</p><h1 className="mt-5 text-6xl font-black uppercase leading-[0.88] sm:text-7xl">Built around<br />the part.</h1><p className="mt-7 max-w-lg leading-7 text-white/60">TAIGAUTO CO., LTD. is an Ontario company positioned for focused automotive component, sourcing, and trade conversations across Canada and the United States.</p></div>
          <div className="relative aspect-[4/3] overflow-hidden border-l-8 border-wine"><Image src="/images/chassis-components.png" alt="Automotive chassis components" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="tech-grid bg-pearl py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="border-t-2 border-ink pt-5"><p className="eyebrow text-wine">Corporate Coordinates</p><dl className="mt-7 grid gap-6 text-sm"><div><dt className="text-xs uppercase text-ink/45">Legal entity</dt><dd className="mt-1 font-black">TAIGAUTO CO., LTD.</dd></div><div><dt className="text-xs uppercase text-ink/45">Base</dt><dd className="mt-1 font-black">Hamilton, Ontario</dd></div><div><dt className="text-xs uppercase text-ink/45">Market direction</dt><dd className="mt-1 font-black">Canada + United States</dd></div></dl></aside>
          <div><p className="text-3xl font-black uppercase leading-tight sm:text-4xl">A disciplined starting point for buyers, distributors, suppliers, and commercial partners.</p><div className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-3">{[["01","Clear scope","Start with application, category, and market."],["02","Useful detail","Build around specifications and constraints."],["03","Commercial focus","Prepare the facts needed for a qualified discussion."]].map(([n,t,d]) => <div key={n} className="bg-white p-6"><span className="text-3xl font-black text-wine">{n}</span><h2 className="mt-8 font-black uppercase">{t}</h2><p className="mt-2 text-sm leading-6 text-ink/60">{d}</p></div>)}</div><Button href="/contact" className="mt-8">Discuss a program <ArrowRight size={17} /></Button></div>
        </div>
      </section>
    </>
  );
}
