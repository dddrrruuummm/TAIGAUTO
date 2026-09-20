import { ContactSection, Hero, ProductGrid, ServicesSection, TrustBand } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <ProductGrid limit={6} />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
