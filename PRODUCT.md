# TAIGAUTO CO., LTD.

## Platform and stack
Web. Existing Next.js / TypeScript / React / Tailwind project; GitHub and Vercel workflow retained.

## Standing client requirements
English company showcase; seven core routes; distinct identity; restrained motion; real photography where available; SEO. No checkout, accounts, database, or automatic deployment.

## Existing company facts
TAIGAUTO CO., LTD. is presented as a Hamilton, Ontario automotive component sourcing and trade coordination company. The legal name, canonical URL `https://taigauto.org`, email `info@taigauto.org`, and Hamilton, ON, Canada address remain centralized in `lib/site.ts`.

These contact and location details are preserved source-site facts, not independently reverified company records. The existing automotive component families and supplier/trade coordination scope are retained.

## Confirmed user direction — 2026-11-04
The user requested an update emphasizing the company's BRABUS and MANSORY modification-parts business and asked for images from both manufacturers' official websites. The user's spelling “Barbus” is interpreted as BRABUS in this automotive context.

This confirms the two brands as the requested business focus. It does not establish authorized-dealer status, direct manufacturer affiliation, inventory, installation capability, warranty coverage, or guaranteed delivery. None of those claims are introduced.

The user subsequently requested more products and pictures. The expansion adds six specific parts and six distinct official photographs: BRABUS carbon rear spoiler (`465-450-99`), carbon roof lights (`465-360-99`), and Monoblock Y wheel (`Y12-463A-PE`); MANSORY FD.15 forged wheel, LED floating wheel cap, and carbon license plate frame.

## Audience and goal (design inference)
Vehicle owners, buyers, and trade partners should understand the modification-parts focus, browse exterior/carbon, wheel, and interior directions, then send a vehicle-specific inquiry. General automotive component sourcing remains available through the same product index.

## Scope of the update
- Homepage prioritizes BRABUS and MANSORY with official manufacturer product photography.
- The product index combines brand, part-family, and text filters with the existing component archive.
- Each brand now has six part entries and one manufacturer vehicle overview. The full index contains 32 entries: 12 modification-part entries, two manufacturer vehicle overviews, and 18 existing component/application entries.
- Company, sourcing-support, contact, navigation, footer, and SEO copy reflect the expanded focus.
- Brand and part links carry context into the contact form; available product references can be searched, displayed in the catalogue, and carried into the inquiry. Company identity and contact details remain intact.
- `lib/tuning.ts` centralizes manufacturer display content, categories, image paths, and inquiry-link construction. Optional `application`, `productReference`, and `imageFit` fields support precise part context and suitable product-image presentation. `lib/site.ts` retains company facts and general products/services.

## Photography and commercial reuse
Fourteen distinct manufacturer images are saved locally in `public/brands/`, seven for each brand. The initial update introduced eight images; the subsequent product expansion adds six. Their official source pages, original image URLs, rights pages, dimensions, and usage status are recorded in `docs/brand-photo-sources.json`.

These photographs depict BRABUS and MANSORY products. They are not represented as TAIGAUTO-owned vehicles, completed projects, facilities, stock, or staff. Official publication does not establish an open commercial reuse license. Permission for public commercial use has not been established and must be confirmed before publishing these assets.

Existing category/application photographs and part renders remain in the component archive. Their earlier source records remain in `docs/photo-sources.json`.

## Open verification
Exact model compatibility, available finishes, stock, supplier capacity, certification, lead time, and commercial terms require inquiry-specific confirmation. No testimonials, client counts, manufacturer authorization, certifications, or service guarantees are invented.

## Contact behavior
The form validates locally and prepares a `mailto:` draft containing the visitor's fields. A selected brand/part and available product reference can prefill the inquiry topic. The visitor reviews and sends the draft in their own email application. No server-side submission, delivery, or storage is added.

## Delivery boundary
This update is local-only. No production deployment is performed. Existing Next.js and Vercel deployment compatibility is retained; public image permission remains an open item.

## Previous user direction — 2026-10-16
The user requested more industry-relevant product/application photography and distinct industry-reference structures. Preserve company facts and functionality. Category and application imagery does not establish company inventory, team, certifications, or completed work.
