# TAIGAUTO Automotive

BRABUS and MANSORY modification parts, a searchable automotive component index, and vehicle-specific sourcing inquiries.

English company showcase built with Next.js 16, TypeScript, React, and Tailwind CSS. This is the source project for the existing GitHub/Vercel workflow. It includes locally stored manufacturer images, component photography/renders, SVG brand assets, self-hosted fonts, and their source or license records.

## Current update

The 2026-11-04 update prioritizes BRABUS and MANSORY exterior/carbon, wheel, and interior directions while retaining general automotive component sourcing. The follow-up expansion adds six specific products and six official photographs, bringing the manufacturer image collection to 14. Each brand has six part entries plus a vehicle overview; the complete archive contains 32 entries, including 18 retained component/application entries.

The added products are BRABUS carbon rear spoiler (`465-450-99`), carbon roof lights (`465-360-99`), and Monoblock Y wheel (`Y12-463A-PE`); MANSORY FD.15 forged wheel, LED floating wheel cap, and carbon license plate frame. Brand and part filters narrow the index. Available product references appear in the catalogue/search context and can prefill the contact inquiry topic with the selected part.

This update is local-only; no site is deployed. The official manufacturer images are copyrighted, and commercial public-use permission has not been established. Confirm permission before publishing these assets. Source and rights records are in `docs/brand-photo-sources.json`.

## Run locally

Use Node.js 22 LTS or a compatible version satisfying Next.js (20.9 or newer).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables, API keys, database, or paid services are required.

## Check a production build

```sh
npm run lint
npm run build -- --webpack
```

The standard `npm run build` command remains available for Vercel. See `docs/QA.md` for recorded verification results; these commands are instructions, not a claim that they have been run for this update.

## Upload to GitHub

For the batched package, unzip `TAIGAUTO-GitHub-Batched-Upload.zip` and follow `UPLOAD-GUIDE.txt`:

1. Open the target GitHub repository at its root and choose **Add file > Upload files**.
2. Upload the **contents inside `01-Code`** (42 files), then commit.
3. Return to the same repository root and choose **Add file > Upload files** again.
4. Upload the **`public` folder inside `02-Assets`** (52 files), then commit.
5. The final repository root must directly contain `package.json`, `package-lock.json`, `app/`, `components/`, `lib/`, and `public/`. The numbered folders are local selection wrappers.

For the standard single-folder package, open `TAIGAUTO-Automotive-GitHub-Upload` and upload its contents to the repository root. Include the hidden `.gitignore` file. Preserve intentional existing repository settings. ZIP files are download containers; extract them before selecting source files.

Both formats contain the same complete website source. Delivery excludes Git history, deployment credentials, build output, and installed dependencies. If Vercel is already connected, assess the deployment after both batches have been committed.

## Deploy with Vercel

Confirm public-use permission for the manufacturer images before deployment.

1. Import the GitHub repository into Vercel.
2. Select the Next.js framework preset.
3. Set Root Directory to `./` when the source is at the repository root. If using a monorepo, select this company's folder instead.
4. Use `npm ci` as the install command. Leave the build and output directory on the Next.js defaults. No environment variables are needed.
5. Deploy, then connect the company domain. Current canonical URL: https://taigauto.org.

Vercel builds from source. Exclude `node_modules/`, `.next/`, and local server files. The existing standalone output setting is retained; Vercel's Next.js integration handles its deployment.

## Content and maintenance

| Location | Purpose |
| --- | --- |
| `lib/site.ts` | Company identity, contact details, navigation, and core product/service data |
| `lib/tuning.ts` | BRABUS/MANSORY content, categories, optional application/product references and image fitting, and inquiry URLs |
| `lib/gallery.ts` | Existing component/application photo collection |
| `components/industry-home.tsx` | Homepage brand chapters and parts finder |
| `components/collection-explorer.tsx` | Brand, part-family, and text filters |
| `components/parts-inquiry.tsx`, `inquiry-form.tsx` | Inquiry context and email-draft preparation |
| `components/site-header.tsx`, `site-footer.tsx` | Navigation and footer |
| `app/globals.css` | Visual styles and responsive behavior |
| `public/brands/` | Fourteen distinct locally stored manufacturer images, seven per brand |
| `public/` | Component images, SVG logos, and fonts |
| `app/layout.tsx`, `sitemap.ts`, `robots.ts` | SEO metadata, structured data, and crawler files |
| `docs/brand-photo-sources.json` | Official manufacturer image sources and unresolved usage permission |
| `docs/photo-sources.json` | Earlier image sources and license links |
| `docs/QA.md` | Verification record |
| `PRODUCT.md`, `DESIGN.md` | Business context, assumptions, and visual direction |

Pages include Home, About, Services, Showcase, Contact, Privacy Policy, and Terms. Catalogue search, brand/category filters, mobile navigation, and inquiry preparation remain part of the company-showcase scope.

The inquiry form prepares a prefilled email draft in the visitor's email app. It does not send, store, or process submissions on a server. The visitor reviews and sends the email.

Business facts and open verification items are recorded in `PRODUCT.md`. Manufacturer photographs depict the named brands' products; component photographs illustrate categories and applications. They do not establish TAIGAUTO-owned inventory, completed projects, manufacturer authorization, or certification.

## Delivery contents

Exclude dependency folders, build caches, Git history, local environment files, macOS metadata, and development-skill tooling from delivery. Retain the internal image source records and font license files with the project. Design skills are development guidance, not production website dependencies.
