# Soumak — 3D Product Visualization Studio

Personal freelance website for Soumak, built with **Next.js 15** and **Tailwind CSS v4**.

## Tech Stack

- **Next.js 15** — App Router, server components, static generation
- **Tailwind CSS v4** — CSS-first configuration via `@theme` in `globals.css`
- **TypeScript**
- **next/font** — Zero-layout-shift Google Fonts (Cormorant Garamond + Syne)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── globals.css          # Tailwind v4 @theme config + global styles
├── layout.tsx           # Root layout, font setup, metadata
├── page.tsx             # Home page
└── case-study/
    ├── page.tsx          # Case study listing
    └── [slug]/
        └── page.tsx      # Case study detail (statically generated)

components/
├── Nav.tsx              # Sticky nav with scroll-active links
├── Hero.tsx             # Full-viewport hero
├── Work.tsx             # Asymmetric project grid
├── Services.tsx         # Numbered services list
├── Testimonials.tsx     # Staggered testimonial cards
├── Contact.tsx          # Contact form with success state
├── Footer.tsx           # 4-col footer
└── ScrollReveal.tsx     # IntersectionObserver reveal wrapper

lib/
└── cases.ts             # Case study data & types
```

## Customisation

### Colors & Theme
Edit `app/globals.css` inside the `@theme {}` block:
```css
@theme {
  --color-gold: #b8975a;   /* accent */
  --color-ink:  #080808;   /* bg dark */
  /* ... */
}
```

### Adding a Case Study
Add a new entry to the `caseStudies` array in `lib/cases.ts` following the `CaseStudy` interface.

### Replacing Placeholder Images
Swap all `images.unsplash.com` URLs with your own hosted assets. For local images, add them to `/public` and reference them as `/your-image.jpg`.

## Tailwind v4 Notes

- No `tailwind.config.js` — configuration lives in `app/globals.css`
- Uses `@import "tailwindcss"` (single import)
- Custom tokens defined in `@theme {}` auto-generate utility classes
- PostCSS plugin: `@tailwindcss/postcss`
