# Diamond Manufacturing Industry — Website

Single-page site for Diamond Manufacturing Industry's PVC pipe unit in
Sidco, Bari Brahmana, Jammu. Built with Next.js 16 (App Router), Tailwind
CSS v4, Framer Motion, Lucide icons.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

Space Grotesk is self-hosted from `app/fonts/` via `next/font/local` — no
external network call at build time.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo, accept the default
   Next.js settings, deploy. No environment variables needed.

## Content sourcing — please read before editing

- **Photos** (`public/images/`) are the three real product photos you
  provided (pipe stack, packaged cartons, coiled rope). They're used as-is.
- **The logo** is an original SVG built in `app/components/LogoMark.tsx`,
  not derived from the watermarked Design.com template image. If you have
  a real, licensed logo for the business, replace `LogoMark.tsx` with an
  `<Image>` reference to that file instead.
- **Reviews** in `Reviews.tsx` are verbatim (lightly punctuation-cleaned)
  quotes from real named Google reviewers. Don't edit the wording attached
  to a name — if you want different review content, pull the exact text
  from Google rather than paraphrasing under an existing name.
- **Hours** in `ContactLocation.tsx` (7 AM–10 PM Mon–Fri, 8–9:30 PM Sat,
  closed Sunday) and the **4.9★ / 18 reviews** figure in `TrustBar.tsx`
  came from the live Google Business listing at the time this was built.
  Both drift over time — check the current listing periodically and
  update these two files if they change.
- The Google Maps embed in `ContactLocation.tsx` points at the Plus Code
  `JWQ8+86 Jammu`. Update the query string there if the unit relocates.

## Editing content

| File | Section |
|---|---|
| `Navbar.tsx` | Sticky header, phone CTA |
| `Hero.tsx` | Headline over pipe-stack photo |
| `TrustBar.tsx` | Real rating/hours strip |
| `Products.tsx` | Product range, grounded in review language |
| `WhyUs.tsx` | Three value props sourced from review text |
| `Reviews.tsx` | Real hardcoded Google reviews |
| `CTABanner.tsx` | Mid-page phone-call banner |
| `ContactLocation.tsx` | Address, real hours, embedded map |
| `Footer.tsx` | Links, contact, copyright |
