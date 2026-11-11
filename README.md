# AV Sports and Infrastructure — Website

A fast, premium, image- and animation-rich marketing site built with **Astro**, with a dark/light theme switcher, full SEO (meta, JSON-LD, sitemap), WhatsApp + Quotation CTAs, and a portfolio section ready for real projects.

Brand palette is locked from the logo — grass green `#44C01A`, deep forest `#013B1B`.

---

## Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the production build
```

Node 18.20+ / 20+ / 22+ recommended.

---

## Before you go live — fill in the placeholders

Everything in `[BRACKETS]` is a placeholder. Most live in **one file**:

### 1. `src/data/site.ts` (the control panel)
- `phone`, `phoneHref` — your phone number
- `whatsapp` — digits only, country code first (e.g. `919876543210`)
- `email`, `address`, `city`, `hours`, `serviceArea`
- `socials` — Facebook / Instagram / LinkedIn / YouTube URLs
- `stats` — replace `500+`, `40+`, `10+` with verified figures

### 2. `astro.config.mjs`
- `site:` — set your real domain (powers `sitemap.xml`, canonical URLs, Open Graph).

### 3. Contact form backend — `src/pages/contact.astro`
The form posts to a placeholder. Point `action="..."` at a form service such as
[Formspree](https://formspree.io), [Web3Forms](https://web3forms.com) or [Getform](https://getform.io),
or your own endpoint. No backend code needed.

### 4. Google Map — `src/pages/contact.astro`
Replace the `.map-slot` block with your Google Maps embed iframe.

---

## Images (the one thing still to add)

The site is built to be **image-rich**; image spots are marked with dashed “slot” placeholders:
- Home hero card, service page headers, About section, Projects grid.

Drop your photos into `src/assets/` and use Astro’s `<Image />` from `astro:assets` for automatic
WebP/AVIF conversion, lazy-loading and correct sizing (keeps it fast). For stock, Unsplash/Pexels
are good royalty-free sources — search e.g. “football turf”, “running track”, “tennis court construction”.

---

## Logo assets (`public/logos/`)

Extracted from your brand sheet, transparent-background, theme-aware:
- `horizontal-light-t.png` / `horizontal-dark-t.png` — header lockups (auto-swap by theme)
- `stacked-light-t.png` / `stacked-dark-t.png` — stacked lockups
- `monogram-light.png` / `monogram-dark.png` — the AV ring mark (512px)
- Favicons: `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`

> These are derived from the raster brand sheet. For perfectly crisp scaling, drop in a true **SVG**
> master of the logo when you have it (replace the header `<Logo>` source or add an `.svg`).

---

## Pages

Home · About · Services (hub + 10 service pages) · Solutions (hub + 5 sector pages) ·
Projects (portfolio, ready to populate) · Resources (blog/FAQ/guides plan) · Contact · 404 · Privacy.

Service and solution pages are **data-driven** from `src/data/site.ts` — add or edit an entry there and
the page, nav dropdown, footer link and sitemap all update automatically.

---

## SEO built in

- Unique `<title>` + meta description per page (`src/components/Seo.astro`)
- Open Graph + Twitter cards
- JSON-LD: LocalBusiness, Service, FAQPage, BreadcrumbList
- `sitemap-index.xml` (auto) + `robots.txt`
- Canonical URLs, semantic headings, descriptive alt text

After launch: verify in Google Search Console and submit the sitemap; create a Google Business Profile.

---

## Deploy — Cloudflare Workers

The site ships as static assets served by a Cloudflare Worker (config in `wrangler.jsonc`).

```bash
npm install
npm run deploy      # runs `astro build` then `wrangler deploy`
```

First time: `npx wrangler login` to authenticate. The Worker name is `avsportinfra`
(change it in `wrangler.jsonc`). To add your custom domain, set a route/custom domain in
the Cloudflare dashboard (Workers & Pages → your Worker → Settings → Domains & Routes),
then update `site:` in `astro.config.mjs` to that domain and redeploy so canonical URLs,
`sitemap.xml` and Open Graph links are correct.

> Pretty URLs (`/services/football-turf`) and the custom 404 are handled by the `assets`
> block in `wrangler.jsonc` — no Worker script needed.

**Other hosts** (optional): any static host works — upload `dist/` after `npm run build`,
or connect this repo to Cloudflare Pages / Netlify / Vercel with build `npm run build`,
output `dist`.

---

## Tech

Astro 5 (static, near-zero JS) · vanilla CSS design system with CSS custom properties ·
IntersectionObserver scroll reveals · no UI framework → very fast, small payload.
