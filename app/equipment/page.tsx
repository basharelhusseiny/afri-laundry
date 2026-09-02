import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BUSINESS, waLink } from "@/lib/site";

const OFFERS = [
  {
    num: "01",
    tag: "Genuine Supply",
    title: "Original LG Commercial Units",
    copy: "Brand new LG commercial washing machines and heavy-duty dryers supplied directly by Afri General Trading Ltd — the sole authorized distributor of LG Electronics in Juba.",
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
    tag: "Turnkey Setup",
    title: "Professional On-Site Installation",
    copy: "Complete mechanical plumbing, electrical connection, machine leveling, and full cycle calibration to ensure your facility runs flawlessly from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "Workforce Training",
    title: "Free Operator & Staff Training",
    copy: "Comprehensive hands-on training for your laundry attendants — fabric sorting, detergent dosing, cycle programming, and machine maintenance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "After-Sales Care",
    title: "Technical Support & Spare Parts",
    copy: "Direct access to certified LG technicians in Juba with genuine OEM spare parts in stock, preventing downtime and protecting your investment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const METRICS = [
  { val: "100%", label: "Genuine LG Equipment", desc: "Direct from sole distributor" },
  { val: "Turnkey", label: "Full Installation", desc: "Plumbing, power & calibration" },
  { val: "FREE", label: "Staff Training", desc: "Hands-on operator training" },
  { val: "Local", label: "Spare Parts in Juba", desc: "Certified LG technician support" },
];

const MACHINES = [
  {
    category: "Commercial Washer",
    title: "LG Commercial Front-Load Washer",
    points: [
      "Inverter Direct Drive Motor with minimal vibration",
      "High spin speeds for reduced drying times and energy saving",
      "Custom programmable wash cycles for various fabric grades",
      "Heavy-duty stainless steel drum & rust-proof chassis",
    ],
  },
  {
    category: "Commercial Dryer",
    title: "LG Commercial Heavy-Duty Dryer",
    points: [
      "Dynamic sensor drying to avoid over-drying and fiber wear",
      "High-velocity airflow system for ultra-fast turnaround",
      "Extra-large door opening for quick loading & unloading",
      "Easy-clean front lint filter for simple daily maintenance",
    ],
  },
];

export const metadata: Metadata = {
  title: "Commercial Equipment — Start Your Own Laundry with LG",
  description:
    "Buy genuine LG commercial washing machines and dryers in Juba — competitive prices, professional installation, free operator training, and after-sales support from Afri General Trading Ltd.",
};

export default function Page() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-white md:pt-40 md:pb-28">
        {/* Photographic background wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{ backgroundImage: "url('/assets/machines-wall-desktop.webp')" }}
        />
        {/* Ambient brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(228,0,43,0.2) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(228,0,43,0.12) 0%, transparent 45%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  B2B &bull; Commercial Laundry Equipment
                </span>
              </div>
              <h1 className="h-display mt-3 text-white">
                Start &amp; scale your own laundry with LG.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                We supply genuine LG commercial washing machines and dryers — the exact heavy-duty units we operate daily. Complete with on-site setup, staff training, and genuine spare parts in Juba.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={waLink(BUSINESS.whatsappSecondary, "Hello Afri General Trading, I am interested in purchasing LG commercial laundry equipment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary h-12 px-7 text-xs shadow-xl shadow-brand/35"
                >
                  Request Equipment Quote (WhatsApp)
                </a>
                <a
                  href={`tel:${BUSINESS.phones[0].tel}`}
                  className="btn btn-ghost h-12 border-white/25 bg-white/10 px-7 text-xs text-white backdrop-blur-sm hover:border-brand hover:text-brand"
                >
                  Call B2B Hotline &rarr;
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Key Metrics Bar ───────────────────────────────────── */}
      <section className="border-y border-black/8 bg-white py-10" aria-label="Key Advantages">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {METRICS.map((m, idx) => (
              <Reveal key={m.label} delay={idx * 70}>
                <div className="border-l-2 border-brand pl-4">
                  <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{m.val}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink">{m.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Complete Business Package ─────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-50/70 py-24 md:py-32" aria-labelledby="offerH">
        {/* Subtle radial ambient gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(228,0,43,0.035) 0%, transparent 45%), radial-gradient(circle at 90% 80%, rgba(228,0,43,0.03) 0%, transparent 40%)",
          }}
        />

        <div className="container-x relative z-10">
          <div className="max-w-2xl">
            <Reveal>
              <p className="label">The Turnkey Package</p>
              <h2 id="offerH" className="h-section text-ink">
                Everything you need to launch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Starting a commercial laundry requires reliable equipment and expert technical backing. As the sole distributor of LG Electronics in Juba, we take care of the entire launch cycle.
              </p>
            </Reveal>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {OFFERS.map((o, i) => (
              <Reveal key={o.num} delay={(i % 2) * 100}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-black/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Header: Icon + Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/8 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-md group-hover:shadow-brand/20">
                        {o.icon}
                      </div>
                      <span className="font-display text-2xl font-bold tracking-wider text-black/15 transition-colors duration-300 group-hover:text-brand/30">
                        {o.num}
                      </span>
                    </div>

                    {/* Tag & Title */}
                    <div className="mt-6">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand">
                        {o.tag}
                      </span>
                      <h3 className="mt-1 font-display text-xl uppercase tracking-wide text-ink transition-colors duration-300 group-hover:text-brand">
                        {o.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {o.copy}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5 text-xs font-semibold text-muted group-hover:text-ink transition-colors">
                    <span>Guaranteed by Afri General</span>
                    <span className="text-brand">&check;</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment Specifications Showcase ─────────────────── */}
      <section className="bg-white py-24 md:py-32" aria-labelledby="machinesH">
        <div className="container-x">
          <Reveal>
            <p className="label">Machinery Specs</p>
            <h2 id="machinesH" className="h-section text-ink">
              Commercial grade reliability
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Built specifically for commercial coin, card, or manual on-premise operations with minimal downtime.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {MACHINES.map((m, idx) => (
              <Reveal key={m.title} delay={idx * 120}>
                <div className="rounded-sm border border-black/8 bg-neutral-50/70 p-8 md:p-10 transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-xl hover:shadow-black/5">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                    {m.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-ink">
                    {m.title}
                  </h3>

                  <ul className="mt-6 space-y-3.5 text-sm text-ink/80">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <svg
                          width="16"
                          height="16"
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
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-black/8 pt-6">
                    <a
                      href={waLink(BUSINESS.whatsappSecondary, `Hello, I would like to get technical specs and pricing for ${m.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost w-full justify-center text-xs h-11 border-black/15 hover:border-brand"
                    >
                      Inquire Specs on WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B Consultation CTA ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28" aria-labelledby="ctaH">
        {/* Photographic background wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{ backgroundImage: "url('/assets/machines-wall-desktop.webp')" }}
        />
        {/* Ambient brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(228,0,43,0.18) 0%, transparent 60%)",
          }}
        />

        <div className="container-x relative z-10 text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Afri General Trading Ltd &bull; Sole LG Distributor
            </span>
            <h2 id="ctaH" className="h-section mt-4 text-white">
              Get a customized quote for your laundry setup
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Tell us your planned capacity or location in Juba. We will configure the right machines, installation timeline, and staff training program.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink(BUSINESS.whatsappSecondary, "Hello, I would like a quote for starting my own laundry with LG commercial equipment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary h-12 px-8 text-xs shadow-xl shadow-brand/35"
              >
                Chat with Commercial Team
              </a>
              <a
                href={BUSINESS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost h-12 border-white/25 bg-white/10 px-8 text-xs text-white backdrop-blur-sm hover:border-brand hover:text-brand"
              >
                Visit Our Showroom &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}