import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="h-2 bg-wine" />
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-wine text-sm font-black">TA</span>
            <p className="text-2xl font-black tracking-[0.1em]">TAIGAUTO</p>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/55">Component programs and cross-border coordination for automotive buyers, distributors, and supply partners.</p>
        </div>
        <div>
          <p className="eyebrow text-wine">Index</p>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-wine">Dispatch</p>
          <a href={`mailto:${site.email}`} className="mt-4 flex items-center justify-between border-b border-white/20 pb-3 text-lg font-bold hover:text-wine">
            {site.email}<ArrowUpRight size={18} />
          </a>
          <p className="mt-4 text-sm text-white/55">{site.address.city}, {site.address.state}, {site.address.country}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-wrap justify-between gap-2 text-[11px] uppercase tracking-[0.12em] text-white/40">
          <span>© 2026 {site.legalName}</span><span>Automotive components / Ontario</span>
        </div>
      </div>
    </footer>
  );
}
