import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Explore TAIGAUTO's automotive component focus for braking, lighting, electrical, and chassis systems."
};

export default function ShowcasePage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <p className="eyebrow text-wine">Component Focus</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">Automotive component categories for buyers, suppliers, and trade partners.</h1>
        <p className="mt-5 max-w-2xl leading-7 text-ink/70">
          This showcase presents component directions rather than a live inventory catalog. Each image and description is intentionally modular, ready to be replaced with supplier-approved photography, part numbers, and final programs as they are developed.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
