import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BUSINESS, waLink } from "@/lib/site";

const CATS = [
  {
    title: "Everyday Wear",
    badge: "Daily Essentials",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
    rows: [
      ["T-Shirt", "$2"],
      ["Shirt (Standard / Heavy)", "$2 / $3"],
      ["Blouse", "$2.50"],
      ["Skirt", "$2"],
      ["Casual Dress", "$3"],
      ["Sweaters & Cardigans", "$3"],
      ["Trouser / Pants", "$4"],
      ["Shorts", "$2"],
      ["Vest", "$1"],
      ["Hats / Caps", "$2"],
      ["Tie", "$1"],
      ["Scarf", "$2"],
      ["Socks (Pair)", "$3"],
    ],
  },
  {
    title: "Formal & Traditional",
    badge: "Executive & Occasion",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="m10 10 2 2 2-2" />
      </svg>
    ),
    rows: [
      ["Full Business Suit (2-Piece)", "$7"],
      ["Blazer / Jacket", "$3"],
      ["Winter / Heavy Coat", "$4"],
      ["Event & Evening Dress", "$5"],
      ["Gowns", "$4"],
      ["Wedding Dress", "$10"],
      ["Kaunda Suit / African Attire", "$4.50"],
      ["Jalabiya", "$4.50"],
      ["Two Pieces Traditional", "$4"],
    ],
  },
  {
    title: "Home & Bedding",
    badge: "High-Capacity Care",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4" />
        <path d="M2 8h20" />
        <path d="M6 4v4" />
        <path d="M10 4v4" />
        <path d="M14 4v4" />
        <path d="M18 4v4" />
      </svg>
    ),
    rows: [
      ["Towel (Standard / Bath)", "$3"],
      ["Bed Sheet (Single / Double)", "$3"],
      ["Pillow Case", "$2"],
      ["Table Covers", "$4.50"],
      ["Sofa / Set Covers", "$4"],
      ["Window Curtains (Per Panel)", "$10"],
      ["Small Blanket", "$5"],
      ["Big / Heavy Blanket", "$7"],
      ["Small Comforter / Duvet", "$4"],
      ["Big / King Comforter", "$6"],
    ],
  },
  {
    title: "Uniforms & Workwear",
    badge: "Professional Press",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    rows: [
      ["Army & Security Uniforms", "$7"],
      ["Corporate / Staff Uniforms", "$3.50"],
      ["Hospitality & Chef Wear", "$3.50"],
    ],
  },
  {
    title: "Delicates & Undergarments",
    badge: "Hygienic Sanitization",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    rows: [
      ["Bra / Delicate Top", "$4"],
      ["Men's Underwear (Pack / Item)", "$5"],
      ["Delicate Silk / Lace Items", "$4.50"],
    ],
  },
];

const PRICING_PERKS = [
  {
    title: "All-Inclusive Care",
    desc: "Washing, drying, steam ironing, and protective garment covers are included in every item price.",
  },
  {
    title: "Pay On Delivery",
    desc: "Zero advance deposit required. Inspect your clean garments and pay on delivery or pickup.",
  },
  {
    title: "Doorstep Pickup & Return",
    desc: "Available across Juba — Hai Tijaria, Hai Jerusalem, and surrounding residential areas.",
  },
  {
    title: "Fast Turnaround",
    desc: "Standard orders returned fresh, crisp, and sealed within 24 to 48 hours.",
  },
];

export const metadata: Metadata = {
  title: "Pricing — Transparent Laundry & Dry Cleaning Rates",
  description:
    "Full price list for LG Pick & Drop Laundry in Juba — everyday wear, formal and traditional attire, uniforms, blankets, comforters and bedding. Transparent rates, commercial LG equipment.",
};

export default function Page() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-white md:pt-40 md:pb-28">
        {/* Photographic background with dark overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{ backgroundImage: "url('/photo-1.jpg')" }}
        />
        {/* Ambient brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(228,0,43,0.18) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(228,0,43,0.1) 0%, transparent 45%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Transparent Rates &bull; No Hidden Charges
                </span>
              </div>
              <h1 className="h-display mt-3 text-white">
                Clear pricing, genuine LG care.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Every price includes commercial LG washing, moisture-balanced drying, professional steam pressing, and protective sealed packaging.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary h-12 px-7 text-xs shadow-xl shadow-brand/35"
                >
                  Book a Pickup
                </Link>
                <a
                  href={waLink(BUSINESS.whatsappPrimary, "Hello, I would like to get a price quote for my laundry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost h-12 border-white/25 bg-white/10 px-7 text-xs text-white backdrop-blur-sm hover:border-brand hover:text-brand"
                >
                  Ask for Quote on WhatsApp &rarr;
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Main Price List Section ───────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-50/70 py-20 md:py-28" aria-label="Full price list">
        {/* Subtle radial ambient gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 15%, rgba(228,0,43,0.03) 0%, transparent 45%), radial-gradient(circle at 90% 85%, rgba(228,0,43,0.03) 0%, transparent 40%)",
          }}
        />

        <div className="container-x relative z-10">
          {/* Top Note Bar */}
          <div className="mb-10 flex flex-col justify-between gap-4 rounded-sm border border-black/8 bg-white p-5 shadow-xs sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-bold">
                $
              </span>
              <p className="text-xs text-muted leading-relaxed sm:text-sm">
                All prices are in <strong className="text-ink">USD</strong>. Final total is confirmed transparently on WhatsApp prior to washing.
              </p>
            </div>
            <span className="shrink-0 text-xs font-semibold text-brand">
              ⚡ Free Pickup &amp; WhatsApp Confirmation
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            {CATS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <div className="group relative overflow-hidden rounded-sm border border-black/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-black/8 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand/8 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-lg uppercase tracking-wide text-ink group-hover:text-brand transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-brand uppercase tracking-wider">
                          {c.badge}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted/60 font-semibold">{c.rows.length} items</span>
                  </div>

                  {/* Items Table */}
                  <table className="mt-4 w-full text-sm">
                    <tbody className="divide-y divide-black/5">
                      {c.rows.map(([item, price]) => (
                        <tr key={item} className="transition-colors hover:bg-neutral-50/80">
                          <td className="py-2.5 text-xs text-ink/90 font-medium sm:text-sm">
                            {item}
                          </td>
                          <td className="py-2.5 text-right font-display text-base font-bold text-brand tracking-wide">
                            {price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            ))}

            {/* Featured Bed Package Card */}
            <Reveal delay={160}>
              <div className="relative overflow-hidden rounded-sm border-2 border-brand bg-gradient-to-b from-white via-white to-neutral-50/70 p-7 shadow-xl shadow-brand/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                    🔥 Popular Package
                  </span>
                  <span className="text-xs font-semibold text-brand uppercase">Full Combo</span>
                </div>

                <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-ink">
                  Bed Set Package
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Complete bedding renewal: 2 pillows + 2 bed sheets — thoroughly washed, dried with fiber care, neatly pressed and sealed.
                </p>

                <div className="my-6 rounded-sm border border-brand/20 bg-brand/5 p-4 text-center">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">All-in Package Price</span>
                  <p className="font-display text-4xl font-bold text-brand mt-1">$6</p>
                  <span className="text-[11px] text-muted">Washed &bull; Steam Pressed &bull; Packaged</span>
                </div>

                <a
                  href={waLink(BUSINESS.whatsappPrimary, "Hello, I would like to book the Bed Set Package ($6).")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center text-xs h-11 shadow-md shadow-brand/25"
                >
                  Book This Package
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pricing Guarantees Strip ──────────────────────────── */}
      <section className="border-t border-black/5 bg-white py-16 md:py-24" aria-label="Pricing Guarantees">
        <div className="container-x">
          <Reveal>
            <p className="label">The LG Quality Guarantee</p>
            <h2 className="h-section text-ink">What is included in every price</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_PERKS.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 80}>
                <div className="rounded-sm border border-black/8 bg-neutral-50/50 p-6 transition-all duration-200 hover:border-brand/40 hover:bg-white hover:shadow-lg hover:shadow-black/5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-ink">{p.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Booking CTA ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28" aria-labelledby="ctaH">
        {/* Subtle photo wash overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: "url('/photo-2.jpg')" }}
        />
        {/* Ambient brand radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(228,0,43,0.16) 0%, transparent 60%)",
          }}
        />

        <div className="container-x relative z-10 text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Fast Dispatch &bull; Pay on Delivery
            </span>
            <h2 id="ctaH" className="h-section mt-4 text-white">
              Ready to book your pickup?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Send us a message with your location in Juba. We confirm pickup time and exact pricing immediately on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn btn-primary h-12 px-8 text-xs shadow-xl shadow-brand/35"
              >
                Book a Pickup Online
              </Link>
              <a
                href={waLink(BUSINESS.whatsappPrimary, "Hello LG Pick & Drop Laundry, I'd like to book a pickup.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost h-12 border-white/25 bg-white/10 px-8 text-xs text-white backdrop-blur-sm hover:border-brand hover:text-brand"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}