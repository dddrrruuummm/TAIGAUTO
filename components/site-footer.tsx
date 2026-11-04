import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="ta-footer">
      <div className="container-page">
        <div>
          <Image src="/brand-mark.svg" width={42} height={42} alt="" />
          <h2>TAIGAUTO</h2>
          <p>Modification parts &amp; automotive sourcing<br />Hamilton, Ontario, Canada</p>
        </div>
        <div>
          <h3>Products &amp; support</h3>
          <Link href="/showcase?brand=BRABUS">BRABUS parts</Link>
          <Link href="/showcase?brand=MANSORY">MANSORY parts</Link>
          <Link href="/services">Sourcing support</Link>
          <Link href="/contact">Send your parts brief</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About TAIGAUTO</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container-page ta-footer-base">© {new Date().getFullYear()} {site.legalName}</div>
    </footer>
  );
}
