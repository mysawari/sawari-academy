# MySawari Masterclass — Landing Page

A Next.js 14 (App Router) landing page for the "Self-Drive Car Rental
Business" live masterclass, built with JavaScript (`.jsx`) and Tailwind CSS.

## Design concept

The visual identity is built from the subject matter itself: India's
commercial/rental vehicle number plates (black-on-yellow) and road-lane
markings, rather than a generic SaaS template.

- **Colors** — asphalt near-black, warm concrete grey, signal-yellow (plate),
  and a plate-green accent for the "right fit" callouts.
- **Type** — Barlow Condensed for display/signage-style headings, Inter for
  body copy.
- **Structure** — a dashed lane-line spine runs through the curriculum
  section (a genuine sequence of 7 modules); the customer-journey section is
  rendered as an actual flow diagram, since the source content is a literal
  step-by-step process.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.jsx      Root layout, font loading, metadata
  page.jsx         Assembles all sections
  globals.css      Tailwind base + custom tokens (plate badge, lane lines)
components/
  Header.jsx        Sticky nav
  Hero.jsx           Hero + dashboard-style stat readout
  QuestionsLedger.jsx  "Can this business make money?" checklist
  Curriculum.jsx       7-module curriculum, route-marker layout
  JourneyFlow.jsx      Lead → Repeat customer journey diagram
  Audience.jsx         Who it's for / not for
  Host.jsx             Founder bio
  PricingCTA.jsx        Final pricing block + takeaways
  Footer.jsx            Disclaimer
```

## Customizing content

All copy lives directly in the components as plain JS arrays/strings — no
CMS wiring, so edits are just text changes in the relevant `components/*.jsx`
file. Swap the `MR` initials placeholder in `Host.jsx` for a real photo by
replacing that `div` with a Next.js `<Image />`.

## Build

```bash
npm run build
npm run start
```
