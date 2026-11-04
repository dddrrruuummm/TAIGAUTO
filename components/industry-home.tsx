import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/site";
import { inquiryHref, tuningBrands, tuningItems } from "@/lib/tuning";

export function IndustryHome() {
  return (
    <div className="tuning-home">
      <section className="tuning-opening container-page">
        <div className="tuning-opening-copy">
          <h1>BRABUS &amp; MANSORY</h1>
          <div>
            <p>Modification parts, sourced around your vehicle.</p>
            <Link className="action" href="/showcase">Explore modification parts</Link>
          </div>
        </div>
        <div className="tuning-hero-photo gallery-image">
          <Image src="/brands/brabus-widestar-exterior.webp" alt="BRABUS WIDESTAR G-Class in a studio, showing its exterior design and wheels" fill priority sizes="(max-width: 1440px) 100vw, 1360px" />
        </div>
        <div className="tuning-image-caption"><p>BRABUS WIDESTAR · G-Class</p><p>Carbon bodywork. Wheels. Interior details.</p></div>
      </section>

      <section className="tuning-finder container-page" aria-labelledby="parts-finder-title">
        <div><h2 id="parts-finder-title">Find your direction</h2><p>Choose a brand and the part family you want to explore.</p></div>
        <form action="/showcase">
          <label>Brand<select name="brand" defaultValue="All"><option value="All">All products</option><option>BRABUS</option><option>MANSORY</option></select></label>
          <label>Part family<select name="category" defaultValue="All"><option value="All">All parts</option><option>Exterior &amp; carbon</option><option>Wheels</option><option>Interior</option></select></label>
          <button className="action" type="submit">Find parts</button>
        </form>
      </section>

      <section className="tuning-marques container-page" aria-label="Modification brands">
        {tuningBrands.map((brand) => (
          <article className={`tuning-marque tuning-marque-${brand.name.toLowerCase()}`} key={brand.name}>
            <div className="tuning-marque-intro">
              <h2>{brand.name}</h2>
              <div><h3>{brand.title}</h3><p>{brand.text}</p><Link href={`/showcase?brand=${brand.name}`}>Explore {brand.name} parts</Link></div>
            </div>
            {brand.name === "MANSORY" && <><div className="tuning-marque-photo gallery-image"><Image src={brand.image} alt={brand.alt} fill sizes="(max-width:1440px) 100vw,1360px" /></div><p className="tuning-model-caption">{brand.model}</p></>}
            <div className="tuning-detail-pair">
              {tuningItems.filter((item) => item.brand === brand.name).map((item) => (
                <Link className="tuning-detail" key={item.id} href={inquiryHref(item.brand, [item.title, item.productReference].filter(Boolean).join(" · "))}>
                  <div className={`gallery-image${item.category === "Wheels" || item.imageFit === "contain" ? " tuning-product-shot" : ""}`}><Image src={item.image} alt={item.alt} fill sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw" /></div>
                  <div><h3>{item.title}</h3><span>Discuss this direction</span></div>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="tuning-brief container-page">
        <div><h2>The vehicle comes first</h2><p>Tell us the make, model, year, and the parts you have in mind. A part number or reference photo helps us review the requirement.</p><Link className="action" href="/contact">Send your parts brief</Link></div>
        <dl><div><dt>Vehicle &amp; fitment</dt><dd>Model, year, trim, and relevant vehicle specifications.</dd></div><div><dt>Parts &amp; finish</dt><dd>Brand, part reference, material, size, and preferred finish.</dd></div><div><dt>Supply &amp; timing</dt><dd>Quantity, destination, and your intended schedule.</dd></div></dl>
      </section>

      <section className="tuning-components container-page">
        <div><h2>Other automotive components</h2><p>Our broader sourcing scope continues across braking, lighting, chassis, electrical, and service components.</p><Link href="/showcase?brand=Components">Browse the component index</Link></div>
        <div className="tuning-component-links">{products.map((product) => <Link key={product.code} href={`/showcase?brand=Components&q=${encodeURIComponent(product.name)}`}>{product.name}</Link>)}</div>
      </section>
    </div>
  );
}
