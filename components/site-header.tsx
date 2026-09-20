import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      <div className="container-page flex min-h-[72px] items-stretch justify-between">
        <Link href="/" className="flex items-center gap-3 pr-5" aria-label="TAIGAUTO home">
          <span className="grid size-10 place-items-center bg-wine text-sm font-black">TA</span>
          <span className="text-xl font-black tracking-[0.08em]">TAIGAUTO</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.12em] lg:flex">
          {navItems.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="text-white/65 transition hover:text-wine">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="flex min-w-28 items-center justify-center gap-2 border-l border-white/10 px-4 text-xs font-black uppercase tracking-[0.12em] transition hover:bg-wine sm:min-w-44">
          Start a brief <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
