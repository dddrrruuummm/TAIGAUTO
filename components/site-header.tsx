import Image from "next/image";
import Link from "next/link";
import { site, navItems } from "@/lib/site";

function MobileMenu() {
  return (
    <details className="mobile-menu">
      <summary>Menu</summary>
      <nav id="mobile-navigation" aria-label="Mobile navigation">
        {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
    </details>
  );
}

function Brand() {
  return (
    <Link className="brand" href="/" aria-label={`${site.name} home`}>
      <Image src="/brand-mark.svg" alt="" width={40} height={40} priority />
      <span>{site.name}</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header ta-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container-page ta-header-top">
        <Brand />
        <div>
          <span>Modification parts · Hamilton, Ontario</span>
          <Link href="/contact">Contact TAIGAUTO ↗</Link>
        </div>
        <MobileMenu />
      </div>
      <div className="ta-navigation">
        <div className="container-page">
          <nav aria-label="Main navigation">
            <Link href="/showcase">Products &amp; parts</Link>
            <Link href="/services">Sourcing support</Link>
            <Link href="/about">Company</Link>
          </nav>
          <Link href="/contact">Send your parts brief ↗</Link>
        </div>
      </div>
    </header>
  );
}
