import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site";

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group border-t-2 border-ink bg-white">
      <div className="flex items-center justify-between border-b border-ink/15 px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em]">
        <span>{product.code}</span><span className="text-wine">{product.category}</span>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image src={product.image} alt={`${product.name} automotive components`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
        <div className="absolute bottom-0 left-0 h-1 w-16 bg-wine transition-all group-hover:w-full" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black uppercase leading-tight">{product.name}</h3>
          <ArrowUpRight className="shrink-0 text-wine" size={19} />
        </div>
        <p className="mt-3 text-sm leading-6 text-ink/65">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-ink/15 pt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/55">
          {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
