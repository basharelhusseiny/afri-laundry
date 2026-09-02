# LG Pick & Drop Laundry — Website (Next.js)

Marketing website for LG Pick & Drop Laundry, operated by Afri General Trading
Ltd, Juba, South Sudan. This is the Next.js rebuild of the previous static HTML
multi-page site. Same design system, same content, same assets; framework is
now Next.js 15 + Tailwind CSS per the client handover requirement.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Fonts | Anton (display), Inter (body) via Google Fonts |
| Motion | Native CSS reveals (IntersectionObserver), no external animation libs |

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export → out/
npm start         # serve the production build
```

Deploy: pre-configured for static export (`output: "export"`). Push to Vercel
or any static host.

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home — dark cinematic hero, The People, Services, The Machines, How It Works, Book a Pickup |
| `/services` | Full service list + special items (suits, blankets, curtains) |
| `/pricing` | Complete price list (USD), all categories + Bed Package |
| `/equipment` | B2B — start your own laundry, LG commercial equipment offer |
| `/contact` | Visit / call / WhatsApp details + booking form |

## Structure

```
app/
  layout.tsx       # Root layout, fonts, JSON-LD LocalBusiness schema
  page.tsx         # Home
  services/  pricing/  equipment/  contact/
src/
  components/      # Nav, Footer, PageHero, Reveal, BookingForm, HomePage
  lib/site.ts      # All business info, phones, WhatsApp links, nav
public/assets/     # hero videos, images, logos
```

## Key Files for Common Edits

| What to edit | File(s) |
|---|---|
| Business info, phones, address | `src/lib/site.ts` |
| Pricing table | `app/pricing/page.tsx` |
| Home sections | `src/components/HomePage.tsx` |
| Booking form / WhatsApp prefill | `src/components/BookingForm.tsx` |
| Colors / fonts | `tailwind.config.js`, `src/globals.css` |

## Behaviour Notes

- Home hero: muted autoplay video (desktop 1080 / mobile 720), poster and
  last-frame fallback, plays inline on mobile. Gradient fades into the white
  body below per client feedback.
- Booking form opens WhatsApp with a pre-filled message: name, pickup
  location, service, notes. No backend required.
- All phone numbers are clickable `tel:` links; both WhatsApp numbers are
  `wa.me` links; address links to Google Maps.
- Reveal animations are lightweight CSS + IntersectionObserver — no GSAP or
  Lenis dependencies in this build.

## Content Source

All pricing and business details were extracted exactly from the client PDF
(LAUNDRY MAGAZINE) via the previous build's brief; do not improvise prices or
service copy without client approval.