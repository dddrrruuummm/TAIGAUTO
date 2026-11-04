"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/lib/gallery";
import { products } from "@/lib/site";
import { inquiryHref, tuningBrands, tuningItems } from "@/lib/tuning";

type CollectionItem = {
  id: string;
  brand: string;
  title: string;
  group: string;
  image: string;
  description: string;
  alt: string;
  application?: string;
  productReference?: string;
  imageFit?: "contain" | "cover";
};

const allItems: CollectionItem[] = [
  ...tuningItems.map((item) => ({ ...item, group: item.category })),
  ...tuningBrands.map((brand) => ({ id: `${brand.name.toLowerCase()}-overview`, brand: brand.name as string, title: brand.name === "BRABUS" ? "BRABUS WIDESTAR" : "MANSORY Venatus", group: "Exterior & carbon", image: brand.image, description: brand.text, alt: brand.alt })),
  ...products.map((product) => ({ id: product.code, brand: "Components", title: product.name, group: product.category, image: product.image, description: product.description, alt: product.name })),
  ...gallery.map((item) => ({ ...item, brand: "Components" })),
];
const brands = ["All", "BRABUS", "MANSORY", "Components"];

export function CollectionExplorer() {
  const params = useSearchParams();
  const requestedBrand = params.get("brand") || "All";
  return <Explorer key={params.toString()} initialQuery={params.get("q") || ""} initialBrand={brands.includes(requestedBrand) ? requestedBrand : "All"} initialCategory={params.get("category") || "All"} />;
}

function Explorer({ initialQuery, initialBrand, initialCategory }: { initialQuery: string; initialBrand: string; initialCategory: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [brand, setBrand] = useState(initialBrand);
  const availableItems = allItems.filter((item) => brand === "All" || item.brand === brand);
  const groups = ["All", ...new Set(availableItems.map((item) => item.group))];
  const [category, setCategory] = useState(groups.includes(initialCategory) ? initialCategory : "All");
  const items = availableItems.filter((item) => (category === "All" || item.group === category) && `${item.brand} ${item.title} ${item.group} ${item.description} ${item.application || ""} ${item.productReference || ""}`.toLowerCase().includes(query.trim().toLowerCase()));

  return <div className="collection-explorer tuning-explorer">
    <aside className="collection-controls">
      <label className="collection-search">Search products &amp; parts<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Brand, part, or application" /></label>
      <div className="collection-filters" role="group" aria-label="Filter by brand">{brands.map((name) => <button type="button" aria-pressed={brand === name} key={name} onClick={() => { setBrand(name); setCategory("All"); }}>{name === "All" ? "All products" : name === "Components" ? "Other components" : name}</button>)}</div>
      <label className="collection-category">Part family<select value={category} onChange={(event) => setCategory(event.target.value)}>{groups.map((group) => <option key={group} value={group}>{group === "All" ? "All part families" : group}</option>)}</select></label>
      <p className="collection-fitment-note">Parts are reviewed for your vehicle. Fitment, finish, availability, and timing are confirmed for each inquiry.</p>
    </aside>
    <div className="collection-results">
      <p className="collection-count" aria-live="polite">{items.length} {items.length === 1 ? "item" : "items"}{brand !== "All" ? ` · ${brand === "Components" ? "Other components" : brand}` : ""}</p>
      {items.length ? <div className="collection-grid">{items.map((item) => <article className="collection-entry" id={item.id} key={item.id}>
        <div className={`collection-photo${item.group === "Wheels" || item.imageFit === "contain" ? " tuning-product-shot" : ""}`}><Image src={item.image} alt={item.alt} fill sizes="(max-width:600px) 100vw,(max-width:1000px) 40vw,30vw" /></div>
        <div className="collection-entry-copy"><p>{item.brand === "Components" ? item.group : `${item.brand} · ${item.group}`}</p><h2>{item.title}</h2>{item.application && <p className="collection-application">{item.application}</p>}{item.productReference && <p className="collection-reference">Part reference: {item.productReference}</p>}<p>{item.description}</p><Link href={inquiryHref(item.brand === "Components" ? "Automotive components" : item.brand, [item.title, item.productReference].filter(Boolean).join(" · "))}>Inquire about these parts</Link></div>
      </article>)}</div> : <div className="collection-empty"><h2>No matching parts</h2><p>Try another search or reset the filters to see the full range.</p><button className="action" type="button" onClick={() => { setBrand("All"); setCategory("All"); setQuery(""); }}>Show all products</button></div>}
    </div>
  </div>;
}
