import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company",
  alternates: { canonical: "/about" },
  description: "Meet TAIGAUTO CO., LTD., a Hamilton, Ontario company focused on BRABUS and MANSORY modification parts, automotive component sourcing, and trade coordination."
};

export default function AboutPage() {
  return (
    <section className="inner-page">
      <div className="container-page">
        <h1>Automotive, made personal.</h1>
        <div className="business-about">
          <div>
            <p className="lead">TAIGAUTO CO., LTD. is based in Hamilton, Ontario, Canada. Our business includes BRABUS and MANSORY modification parts, automotive component sourcing, and trade coordination.</p>
            <p>From carbon-fiber exterior details to wheels and interior finishes, a good parts inquiry starts with the vehicle and the intended result. We help organize the requirement around model compatibility, part references, finish, quantity, and timing.</p>
            <p>We also continue to support general automotive component inquiries, bringing the same attention to specification, documentation, packaging, and destination.</p>
            <Link className="action" href="/contact">Discuss your requirements ↗</Link>
          </div>
          <div className="editorial-image">
            <Image src="/brands/mansory-venatus-exterior.webp" alt="MANSORY Venatus exterior with sculpted bodywork and forged wheels" fill sizes="(max-width:700px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
