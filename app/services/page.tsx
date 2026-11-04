import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sourcing Support",
  alternates: { canonical: "/services" },
  description: "Discuss BRABUS and MANSORY modification parts with TAIGAUTO, from exterior and wheel requirements to model compatibility, documentation, and shipment coordination."
};

export default function ServicesPage() {
  return (
    <section className="inner-page">
      <div className="container-page">
        <div className="tuning-service-intro">
          <h1>Build your parts brief.</h1>
          <p className="lead">BRABUS and MANSORY modification parts begin with a specific vehicle and a clear direction. Tell us what you want to change; we will work through the sourcing details with you.</p>
        </div>
        <div className="tuning-scope">
          <h2>What to bring us</h2>
          <div><p>Exterior styling and carbon-fiber components. Forged-wheel requirements. Interior trim and finish requests. Share the brand, model, model year, and any part reference or product link you already have.</p>
          <p>General automotive component inquiries remain welcome, including braking, lighting, chassis, electrical, filtration, and cooling requirements.</p></div>
        </div>
        <div className="capability-list">
          {services.map(service => (
            <article key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        <p className="tuning-service-note">Compatibility, availability, finish options, lead time, and commercial terms are reviewed for each inquiry.</p>
        <Link className="action" href="/contact">Send your parts brief ↗</Link>
      </div>
    </section>
  );
}
