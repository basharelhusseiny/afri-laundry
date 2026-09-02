import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BUSINESS, waLink } from "@/lib/site";

const PROCESS = [
  {
    num: "01",
    tag: "Fabric-Optimized Cycle",
    title: "Professional Washing",
    copy: "Every load is washed in commercial LG washers with temperature control, balanced spin speeds, and fabric-matched detergents.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <path d="M12 10a3 3 0 0 0-3 3" />
        <line x1="7" y1="6" x2="7.01" y2="6" strokeWidth="2.5" />
        <line x1="10" y1="6" x2="10.01" y2="6" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "Targeted Spot Care",
    title: "Stain Pre-Treatment",
    copy: "Individual manual inspection where collars, cuffs, oil and stubborn food marks are treated before the main wash cycle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "Sensor-Guided Warmth",
    title: "Gentle Drying",
    copy: "Commercial LG sensor dryers deliver moisture-regulated drying that preserves delicate fibers, prevents shrinking, and keeps garments soft.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <path d="M10 12c1-1 3-1 4 0s-1 3-2 3" />
        <line x1="17" y1="6" x2="17.01" y2="6" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "Industrial Steam Heat",
    title: "Steam Ironing & Pressing",
    copy: "High-pressure boiler steam stations produce crisp collars, flat plackets, and razor-sharp trouser pleats with fiber sanitization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18l-3-7H6l-3 7z" />
        <path d="M6 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
        <path d="M7 21v1M12 21v1M17 21v1" />
      </svg>
    ),
  },
  {
    num: "05",
    tag: "Custom Finish",
    title: "Neat Folding or Hanging",
    copy: "Delivered according to garment needs — neatly folded and stacked in clean bundles or hung on sturdy contoured hangers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7a4 4 0 0 0-8 0c0 1.5 1 2.5 2 3l-7 4.5A2 2 0 0 0 4 18h16a2 2 0 0 0 1-3.5L14 10c1-.5 2-1.5 2-3z" />
        <circle cx="12" cy="5" r="2" />
      </svg>
    ),
  },
  {
    num: "06",
    tag: "Sealed Dust Protection",
    title: "Protective Packaging",
    copy: "Every completed order is individually sealed in hygienic protective garment bags, ready for immediate wear or clean storage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
];

const SPECIAL = [
  {
    title: "Suits & Formal Gowns",
    badge: "Executive & Occasion Wear",
    desc: "Delicate dry-touch and precision steam pressing designed to maintain structure, lapels, and fabric sheen.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="m10 10 2 2 2-2" />
      </svg>
    ),
    items: [
      "Targeted gentle wash & spot extraction",
      "Industrial high-pressure steam pressing",
      "Sturdy suit hanger & hanging finish",
      "Dust-proof protective garment cover",
    ],
  },
  {
    title: "Blankets & Comforters",
    badge: "High-Capacity Sanitization",
    desc: "Large drum commercial washing for deep fiber penetration, full allergen removal, and thorough warm drying.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4" />
        <path d="M2 8h20" />
        <path d="M6 4v4" />
        <path d="M10 4v4" />
        <path d="M14 4v4" />
        <path d="M18 4v4" />
      </svg>
    ),
    items: [
      "High-capacity commercial LG wash drum",
      "Deep sanitizing & refreshing fragrance",
      "Even temperature moisture removal",
      "Neatly folded & zipped storage pack",
    ],
  },
  {
    title: "Curtains & Drapes",
    badge: "Heavy Linens & Window Dressings",
    desc: "Specialized care for heavy drapery, sheer panels, and blackout curtains to eliminate dust and restore freshness.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    items: [
      "Deep dust & pollutant removal cycle",
      "Low-wrinkle gentle drying cycle",
      "Steam ironing for straight drape lines",
      "Folded or hung ready for immediate installation",
    ],
  },
];

const GUARANTEES = [
  {
    title: "100% LG Commercial Line",
    text: "Operated by the sole distributor of LG Electronics in Juba. We use genuine commercial washers and dryers.",
  },
  {
    title: "Fabric-Safe Chemistry",
    text: "Eco-friendly, fiber-safe detergents and softeners that protect colors without harsh chemical wear.",
  },
  {
    title: "Transparent WhatsApp Pricing",
    text: "Clear pricing confirmed before pickup. No surprises or hidden fees.",
  },
  {
    title: "Doorstep Pickup & Delivery",
    text: "Fast collection and return across Hai Tijaria, Hai Jerusalem and all major areas in Juba.",
  },
];

export const metadata: Metadata = {
  title: "Services — Professional Laundry & Dry Care",
  description:
    "Professional washing, stain treatment, gentle drying, steam ironing, neat folding and protective packaging — plus specialist care for suits, gowns, blankets, comforters and curtains in Juba.",
};

export default function Page() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-white md:pt-40 md:pb-28">
        {/* Subtle photo wash overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{ backgroundImage: "url('/photo-5.jpg')" }}
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
              <p className="label text-brand">Our Services &amp; Standards</p>
              <h1 className="h-display mt-3 text-white">
                Every garment, properly cared for.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                From daily wardrobe essentials to executive suits and heavy home linens — each order follows a rigorous 6-step care process powered by genuine LG commercial equipment.
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
                <Link
                  href="/pricing"
                  className="btn btn-ghost h-12 border-white/25 bg-white/10 px-7 text-xs text-white backdrop-blur-sm hover:border-brand hover:text-brand"
                >
                  View Price List &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The 6-Step Standard Process ──────────────────────── */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32" aria-labelledby="coreH">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(228,0,43,0.035) 0%, transparent 40%), radial-gradient(circle at 15% 85%, rgba(228,0,43,0.025) 0%, transparent 35%)",
          }}
        />

        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="label">The Standard Process</p>
              <h2 id="coreH" className="h-section text-ink">
                What every order gets
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                No shortcuts. Every single load processed at LG Pick &amp; Drop Laundry receives our full 6-step treatment.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-neutral-50 px-4 py-2 text-xs font-semibold text-ink">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span>Standard Turnaround: 24–48 Hours</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) * 100}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden border border-black/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/8 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-md group-hover:shadow-brand/20">
                        {s.icon}
                      </div>
                      <span className="font-display text-2xl font-bold tracking-wider text-black/15 transition-colors duration-300 group-hover:text-brand/30">
                        {s.num}
                      </span>
                    </div>

                    {/* Tag & Title */}
                    <div className="mt-6">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand">
                        {s.tag}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-ink transition-colors duration-300 group-hover:text-brand">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {s.copy}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5 text-xs font-semibold text-muted group-hover:text-ink transition-colors">
                    <span>LG Standard Protocol</span>
                    <span className="text-brand">&check;</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialist Care ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-50/80 py-24 md:py-32 border-y border-black/5" aria-labelledby="specialH">
        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <p className="label justify-center">Tailored Handling</p>
              <h2 id="specialH" className="h-section text-ink">
                Specialist care items
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Certain fabrics require customized temperature control, dedicated high-capacity drums, and specialized garment finishing.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {SPECIAL.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden border border-black/8 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-2xl hover:shadow-black/5">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-neutral-100 text-ink transition-colors duration-300 group-hover:bg-brand/10 group-hover:text-brand">
                        {s.icon}
                      </div>
                      <span className="rounded-full bg-brand/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                        Specialist
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-ink transition-colors duration-300 group-hover:text-brand">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {s.desc}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 border-t border-black/5 pt-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink mb-3">
                        Included Care:
                      </p>
                      <ul className="space-y-2.5 text-xs font-medium text-ink/80">
                        {s.items.map((it) => (
                          <li key={it} className="flex items-start gap-2.5">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mt-0.5 shrink-0 text-brand"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-black/5">
                    <a
                      href={waLink(BUSINESS.whatsappPrimary, `Hello, I would like to inquire about ${s.title} service.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost w-full justify-center text-xs h-10 border-black/15 hover:border-brand"
                    >
                      Inquire on WhatsApp &rarr;
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Guarantees ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-label="Quality Standards">
        <div className="container-x">
          <Reveal>
            <p className="label">The AFRI Standard</p>
            <h2 className="h-section text-ink">Built on commercial excellence</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GUARANTEES.map((g, idx) => (
              <Reveal key={g.title} delay={idx * 80}>
                <div className="rounded-sm border border-black/8 bg-neutral-50/60 p-6 transition-all duration-200 hover:border-brand/30 hover:bg-white hover:shadow-lg hover:shadow-black/5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-ink">{g.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28" aria-labelledby="ctaH">
        {/* Subtle photo wash overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: "url('/photo-3.jpg')" }}
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
              Transparent Pricing &bull; No Hidden Fees
            </span>
            <h2 id="ctaH" className="h-section mt-4 text-white">
              See our full pricing breakdown
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Every garment and household item is clearly priced. Fast 24–48h turnaround with doorstep pickup &amp; delivery across Juba.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/pricing" className="btn btn-primary h-12 px-8 text-xs shadow-xl shadow-brand/35">
                View Price List
              </Link>
              <Link
                href="/contact"
                className="btn btn-ghost h-12 border-white/25 bg-white/10 px-8 text-xs text-white backdrop-blur-sm hover:border-brand hover:text-brand"
              >
                Book a Pickup
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}