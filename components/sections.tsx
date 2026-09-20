import Image from "next/image";
import { ArrowRight, ArrowUpRight, CircleGauge, Crosshair, FileCheck2, Route, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products, services, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-ink text-white">
      <Image src="/images/automotive-supply-hero.png" alt="Automotive parts inspection workspace" fill priority sizes="100vw" className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/15 lg:block" />
      <div className="container-page relative grid min-h-[760px] items-end pb-14 pt-24 lg:grid-cols-[80px_1fr_360px] lg:gap-10 lg:pb-20">
        <div className="vertical-label mb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45 lg:mb-0">Hamilton / Ontario / CA</div>
        <div>
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-wine"><span className="h-px w-12 bg-wine" />Automotive component programs</div>
          <h1 className="mt-7 max-w-4xl text-6xl font-black uppercase leading-[0.88] sm:text-7xl lg:text-[108px]">Precision<br /><span className="text-wine">in motion.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/68 sm:text-lg">TAIGAUTO connects component requirements with a disciplined process for sourcing, qualification, program preparation, and cross-border coordination.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/showcase">View component index <ArrowRight size={17} /></Button><Button href="/contact" variant="secondary" className="border-white/35 text-white hover:border-white">Submit a brief</Button></div>
        </div>
        <div className="mt-12 border-t border-white/25 pt-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <p className="eyebrow text-white/45">System Readout</p>
          <div className="mt-5 grid grid-cols-2 gap-px bg-white/20">
            <div className="bg-black/65 p-5"><p className="text-4xl font-black text-wine">10</p><p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/55">Component families</p></div>
            <div className="bg-black/65 p-5"><p className="text-4xl font-black">02</p><p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/55">Markets / CA + US</p></div>
          </div>
          <div className="mt-px bg-wine p-5 text-ink"><p className="text-[10px] font-black uppercase tracking-[0.15em]">Status</p><p className="mt-2 flex items-center gap-2 text-sm font-black uppercase"><span className="size-2 bg-ink" />Open for program inquiries</p></div>
        </div>
      </div>
    </section>
  );
}

export function TrustBand() {
  const items = [
    { icon: Crosshair, title: "Application first", text: "Define the vehicle, market, and component requirement." },
    { icon: ScanLine, title: "Specification aware", text: "Align product direction with fit, function, and documentation." },
    { icon: Route, title: "Trade ready", text: "Coordinate commercial details across suppliers and buyers." },
  ];
  return <section className="border-y border-ink bg-brass"><div className="container-page grid md:grid-cols-3">{items.map((item, index) => <div key={item.title} className={`flex gap-4 py-7 md:px-7 ${index > 0 ? "border-t border-ink/25 md:border-l md:border-t-0" : ""}`}><item.icon size={24} className="shrink-0" /><div><h3 className="font-black uppercase">{item.title}</h3><p className="mt-1 text-sm leading-5 text-ink/65">{item.text}</p></div></div>)}</div></section>;
}

export function ProductGrid({ limit }: { limit?: number }) {
  const items = limit ? products.slice(0, limit) : products;
  return (
    <section className="tech-grid bg-pearl py-20">
      <div className="container-page">
        <div className="grid gap-7 border-b-2 border-ink pb-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div><p className="eyebrow text-wine">Component Index / Rev. 01</p><h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] sm:text-6xl">Parts grouped<br />by system.</h2></div>
          <div className="lg:justify-self-end"><p className="max-w-xl leading-7 text-ink/65">A structured starting point for distributors, buyers, and supply partners. Categories represent program directions and can be refined around vehicle application, channel, volume, and specification.</p><Button href="/showcase" variant="ghost" className="mt-4 px-0">Open full component index <ArrowUpRight size={17} /></Button></div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <ProductCard key={item.code} product={item} />)}</div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow text-wine">Program Sequence</p><h2 className="mt-4 text-5xl font-black uppercase leading-none sm:text-6xl">From requirement<br />to road-ready.</h2></div><CircleGauge className="hidden text-wine lg:block" size={96} strokeWidth={1} /></div>
        <div className="relative mt-12 grid gap-px bg-white/15 lg:grid-cols-4">
          {services.map((service) => <article key={service.number} className="relative bg-ink p-7"><span className="text-5xl font-black text-white/10">{service.number}</span><div className="mt-10 h-2 w-2 bg-wine" /><h3 className="mt-5 text-2xl font-black uppercase">{service.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{service.text}</p></article>)}
        </div>
        <Button href="/services" className="mt-8">Review capabilities <ArrowRight size={17} /></Button>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-wine py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="eyebrow text-ink">RFQ Intake / TA-01</p><h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] sm:text-6xl">Bring us the<br />component brief.</h2><p className="mt-6 max-w-md leading-7 text-white/75">Tell us the application, part family, target market, expected quantity, and timing. We will start with the facts that move a program forward.</p><div className="mt-8 border-t border-white/30 pt-5 text-sm"><p className="font-black uppercase">Direct contact</p><a href={`mailto:${site.email}`} className="mt-2 block text-xl font-bold hover:text-ink">{site.email}</a><p className="mt-2 text-white/70">{site.address.city}, {site.address.state}, {site.address.country}</p></div></div>
        <form className="cut-corner bg-ink p-6 text-white sm:p-8">
          <div className="mb-7 flex items-center justify-between border-b border-white/15 pb-4"><span className="eyebrow text-wine">Component request</span><FileCheck2 size={22} /></div>
          <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs font-bold uppercase tracking-[0.1em]">Name<input className="focus-ring min-h-12 border border-white/20 bg-white/5 px-4 text-base font-normal normal-case tracking-normal" placeholder="Your name" /></label><label className="grid gap-2 text-xs font-bold uppercase tracking-[0.1em]">Business email<input className="focus-ring min-h-12 border border-white/20 bg-white/5 px-4 text-base font-normal normal-case tracking-normal" placeholder="you@company.com" /></label></div>
          <label className="mt-5 grid gap-2 text-xs font-bold uppercase tracking-[0.1em]">Component family<input className="focus-ring min-h-12 border border-white/20 bg-white/5 px-4 text-base font-normal normal-case tracking-normal" placeholder="Braking, lighting, filtration..." /></label>
          <label className="mt-5 grid gap-2 text-xs font-bold uppercase tracking-[0.1em]">Application, volume and timing<textarea className="focus-ring min-h-32 border border-white/20 bg-white/5 p-4 text-base font-normal normal-case tracking-normal" placeholder="Share the known program details." /></label>
          <Button href={`mailto:${site.email}?subject=TAIGAUTO%20Component%20Brief`} className="mt-6 w-full">Send component brief <ArrowUpRight size={17} /></Button>
        </form>
      </div>
    </section>
  );
}
