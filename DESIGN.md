# TAIGAUTO — BRABUS & MANSORY business update

## Current direction — 2026-11-04
A targeted expansion of the existing technical parts catalogue. The homepage uses dark photographic brand chapters for BRABUS and MANSORY, while navigation, the searchable product index, company information, sourcing support, and contact retain the light technical catalogue language.

The selected Taste direction is **dark-room chapters**, seed **1590453520**. It was adapted to the existing TAIGAUTO identity without a random redraw. The user-requested official BRABUS and MANSORY photography replaces the dealt generic photo set. Existing self-hosted type, red actions, company logo, contact facts, and Next.js/Vercel workflow remain.

The user's follow-up request for more products and pictures expands the same brand chapters rather than initiating a new layout direction. Each homepage chapter now presents six part entries. The two full-vehicle photographs remain the BRABUS G-Class opening and the MANSORY Venatus chapter image.

## Idea and page argument
On this page, TAIGAUTO's two requested modification brands become photographic parts dossiers that lead into a vehicle-specific sourcing brief.

- The opening identifies BRABUS and MANSORY as the business focus and shows a BRABUS G-Class exterior.
- A brand and part-family finder lets visitors narrow the range before making an inquiry.
- Separate marque chapters show six part entries per brand across exterior/carbon, wheel, and interior directions using real manufacturer images. Specific products and available reference numbers make the sourcing brief more concrete.
- The vehicle brief explains the information needed to discuss fitment, finish, quantity, destination, and timing.
- A compact component index keeps the established general automotive sourcing scope accessible.

The working interaction is the brand/part-family finder, supported by searchable catalogue filters, application/product-reference context, and part details carried into the contact form. No shopping or configuration flow is added.

## Composition and typography
The dark homepage uses a wide opening photograph, oversized marque names, readable supporting text, and square image crops. BRABUS exterior photography anchors the opening; MANSORY has its own wide exterior image further down the page. Smaller part photographs support specific product directions.

Desktop uses deliberate image-and-copy groupings. Mobile recomposes the marque introductions and gives each detail image a compact adjacent text area. The product archive uses filters and a readable list of image-led entries rather than a purchase catalogue.

Self-hosted DM Sans (`Trade Sans`) remains the active interface and display family. The project retains its existing font assets and licenses. Plain color fields, an established red action color, and restrained hover feedback carry the identity. Motion respects `prefers-reduced-motion`; no video, new animation engine, telemetry, automatic hooks, or production skill dependency is introduced.

## Photography
Fourteen distinct official manufacturer images are stored in `public/brands/`, seven for each brand. The initial eight are BRABUS WIDESTAR exterior, carbon mirror detail, Monoblock ZV wheel product image, and Masterpiece interior; MANSORY Venatus exterior, carbon bodywork, YN.5 wheel product image, and interior.

The follow-up expansion adds six specific product photographs: BRABUS carbon rear spoiler (`465-450-99`), carbon roof lights (`465-360-99`), and Monoblock Y wheel (`Y12-463A-PE`); MANSORY FD.15 forged wheel, LED floating wheel cap, and carbon license plate frame. Product photographs use a suitable contain/cover treatment so standalone wheel and accessory forms can remain legible, while the vehicle photographs retain their established editorial crops.

Manufacturer model and product names are descriptive context, not evidence that TAIGAUTO owns the depicted vehicles or has delivered those builds. No power output, price, inventory, dealer authorization, installation guarantee, or certification is inferred from a photograph.

Exact source and rights records are in `docs/brand-photo-sources.json`. Commercial reuse permission has not been established. This is a local update pending confirmation of public-use rights. Earlier component/application images and their records in `docs/photo-sources.json` remain available in the component archive.

## Content and architecture
`lib/tuning.ts` owns the manufacturer data, categories, image paths, inquiry URLs, and optional `application`, `productReference`, and `imageFit` fields. Product references are available to catalogue/search/inquiry presentation where supplied. The archive contains 12 modification-part entries, two manufacturer vehicle overviews, and 18 retained component/application entries, for 32 total entries; each brand contributes seven.

`lib/site.ts` continues to own company identity, general component families, services, and shared navigation data. Homepage, archive, company, service, contact, metadata, and footer copy reflect the brand focus without replacing confirmed company facts.

All seven core routes remain: Home, About, Services, Showcase, Contact, Privacy Policy, and Terms. The form continues to prepare an email draft for visitor review rather than sending or storing it.

## Design guidance and references
Taste Skill informed the client-specific photographic direction; Impeccable informed hierarchy, copy, responsive composition, focus, and refinement. The workspace's standing requirements take precedence over skill prescriptions for generated imagery, animation, engines, and browser tooling.

The current update retains the existing technical catalogue logic and uses local BMW M and Ferrari reference analysis for automotive image scale, restrained navigation, and model-led hierarchy. It does not copy those companies' logos, wording, assets, or commercial claims. Official BRABUS and MANSORY imagery is included because the user specifically requested it.

No Impeccable binary loader, skill browser automation, telemetry, or hooks are run. Visual verification and production-check results belong in `docs/QA.md`; this design record does not assert checks that were not performed.

## Previous direction — 2026-10-16
The earlier site used Bosch Auto Parts and MAHLE as information-architecture references for a component finder, family catalogue, application photographs, and sourcing contact path. The official pages recorded for that pass were:

- https://www.boschautoparts.com/
- https://www.mahle-aftermarket.com/eu/en/products/

The new brand emphasis expands that catalogue structure rather than replacing the company with a standalone manufacturer storefront. The independent TAIGAUTO logo and broader component business remain.
