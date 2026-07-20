# Nook — Landing Page (Next.js)

A premium, light-themed, skeuomorphic marketing landing page for **Nook**, a SaaS communication and collaboration platform. Built with Next.js 14 (App Router), TypeScript, and plain CSS.

## Getting started

npm install
npm run dev

Then open http://localhost:3000.

## Build for production

npm run build
npm run start

## Project structure

- app/layout.tsx — root layout, metadata, Google Fonts (Inter + IBM Plex Mono)
- app/globals.css — all design tokens and styles (colors, shadows, radii, type scale)
- app/page.tsx — assembles the page from section components
- components/ — one component per section (Header, Hero, Features, Workflow, Pricing, Compare, Testimonials, FAQ, CTA, Footer), plus Reveal.tsx (scroll-reveal wrapper) and Counter.tsx (animated stat counters)

## Notes

- All interactivity (scroll reveals, FAQ accordion, animated counters, hero parallax) is implemented with React hooks — no external animation libraries.
- Testimonial avatars are loaded via next/image from i.pravatar.cc; swap in your own team photos when ready.
- Colors, radii, and shadows all live in app/globals.css under :root — change them there to re-theme the whole page.
