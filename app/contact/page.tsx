import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { BUSINESS, waLink } from "@/lib/site";

const COVERAGE_AREAS = [
  "Hai Tijaria",
  "Hai Jerusalem",
  "Hai Cinema",
  "Tongping",
  "Munuki",
  "Gudele",
  "Juba Nabari",
  "Airport Area",
];

const FAQS = [
  {
    q: "How fast do you confirm pickup requests?",
    a: "We usually respond within 2 to 5 minutes on WhatsApp during working hours (Mon–Sat, 8:00 AM – 6:00 PM) to confirm your exact pickup time and price.",
  },
  {
    q: "Do I need to pay in advance?",
    a: "No advance payment is needed. You inspect your clean, freshly pressed garments and pay upon delivery or when you collect your items.",
  },
  {
    q: "Can I drop off my laundry in person?",
    a: "Yes! You can drop off your items directly at our laundry in AFRI Shopping Centre, Hai Tijaria Road (near Freedom Hospital).",
  },
];

export const metadata: Metadata = {
  title: "Contact & Book Pickup — LG Pick & Drop Laundry Juba",
  description:
    "Contact LG Pick & Drop Laundry in Juba — AFRI Shopping Centre, Hai Tijaria Road. Call +211 922 723 289 or +211 926 605 084, or message us on WhatsApp. Open Mon–Sat 8:00 AM–6:00 PM.",
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
          style={{ backgroundImage: "url('/photo-5.jpg')" }}
        />
        {/* Ambient brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(228,0,43,0.18) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(228,0,43,0.12) 0%, transparent 45%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Instant Dispatch &bull; Direct Support
                </span>
              </div>
              <h1 className="h-display mt-3 text-white">
                Get in touch &amp; book your pickup.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Drop in to our facility at AFRI Shopping Centre, call our direct hotlines, or send a quick WhatsApp message — our team responds in minutes during opening hours.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Open Mon–Sat: 8:00 AM – 6:00 PM</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span>Hai Tijaria Road, Juba</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 Quick Contact Cards ─────────────────────────────── */}
      <section className="relative z-20 -mt-8" aria-label="Direct Channels">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone Card */}
            <Reveal delay={0}>
              <div className="group rounded-sm border border-black/8 bg-white p-7 shadow-xl shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-ink">Call Directly</h3>
                <p className="mt-1 text-xs text-muted">Direct dispatch and customer service line.</p>
                <div className="mt-4 space-y-2 border-t border-black/5 pt-4">
                  {BUSINESS.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="flex items-center justify-between text-sm font-semibold text-ink transition-colors hover:text-brand"
                    >
                      <span>{p.display}</span>
                      <span className="text-xs font-normal text-brand">Call &rarr;</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* WhatsApp Card */}
            <Reveal delay={80}>
              <div className="group rounded-sm border border-black/8 bg-white p-7 shadow-xl shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-ink">WhatsApp Chat</h3>
                <p className="mt-1 text-xs text-muted">Instant pre-filled order or inquiry message.</p>
                <div className="mt-4 space-y-2 border-t border-black/5 pt-4">
                  <a
                    href={waLink(BUSINESS.whatsappPrimary, "Hello, I want to book a pickup.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm font-semibold text-brand hover:underline"
                  >
                    <span>Primary Laundry Line</span>
                    <span className="text-xs">&rarr;</span>
                  </a>
                  <a
                    href={waLink(BUSINESS.whatsappSecondary, "Hello, I have an inquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm font-semibold text-brand hover:underline"
                  >
                    <span>Customer Inquiries</span>
                    <span className="text-xs">&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Visit Card */}
            <Reveal delay={160}>
              <div className="group rounded-sm border border-black/8 bg-white p-7 shadow-xl shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 sm:col-span-2 lg:col-span-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-ink">Visit Our Facility</h3>
                <p className="mt-1 text-xs text-muted">Drop off your clothes directly at our center.</p>
                <div className="mt-4 border-t border-black/5 pt-4">
                  <p className="text-xs font-semibold text-ink leading-relaxed">
                    {BUSINESS.address}
                  </p>
                  <a
                    href={BUSINESS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Main Booking & Location Grid ──────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-50/70 py-24 md:py-32" aria-label="Booking and Location">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(228,0,43,0.035) 0%, transparent 45%), radial-gradient(circle at 90% 80%, rgba(228,0,43,0.03) 0%, transparent 40%)",
          }}
        />

        <div className="container-x relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: Elevated Booking Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="relative overflow-hidden rounded-sm border border-black/10 bg-white p-7 shadow-2xl shadow-black/5 sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand to-brand/40" aria-hidden="true" />

                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/8 pb-5">
                    <div>
                      <h2 className="font-display text-2xl uppercase tracking-wide text-ink">
                        Schedule a Pickup
                      </h2>
                      <p className="mt-1 text-xs text-muted">
                        Enter your location in Juba — we confirm time and price on WhatsApp.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Ready to Dispatch
                    </span>
                  </div>

                  <BookingForm />
                </div>
              </Reveal>
            </div>

            {/* Right: Coverage, Location & Info */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={80}>
                <div className="rounded-sm border border-black/8 bg-white p-7 shadow-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                    Delivery &amp; Collection
                  </span>
                  <h3 className="mt-1 font-display text-xl uppercase tracking-wide text-ink">
                    Coverage Areas Across Juba
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Our pickup and delivery van covers major neighborhoods and business districts:
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {COVERAGE_AREAS.map((area) => (
                      <div key={area} className="flex items-center gap-2 text-xs font-semibold text-ink/80 rounded-sm bg-neutral-50 px-3 py-2 border border-black/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-black/5 pt-5 text-xs text-muted">
                    <p>
                      📍 Outside these areas? Message us on WhatsApp to confirm delivery options.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="rounded-sm border border-black/8 bg-neutral-900 p-7 text-white shadow-xs">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand">
                    Operator Information
                  </p>
                  <h4 className="mt-1 font-display text-lg uppercase text-white">
                    {BUSINESS.operator}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Sole distributor of LG Electronics in Juba, South Sudan. Commercial laundry operations and industrial equipment sales.
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between text-xs">
                    <span className="text-white/60">Shop Location:</span>
                    <span className="font-semibold text-white">Hai Tijaria Road</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="faqH">
        <div className="container-x max-w-4xl">
          <div className="text-center">
            <Reveal>
              <p className="label justify-center">Got Questions?</p>
              <h2 id="faqH" className="h-section text-ink">
                Frequently asked questions
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <div className="rounded-sm border border-black/8 bg-neutral-50/60 p-6 transition-colors hover:bg-white hover:border-brand/30">
                  <h4 className="text-sm font-bold text-ink sm:text-base">{f.q}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Direct Contact CTA ─────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28" aria-labelledby="ctaH">
        {/* Subtle photo wash overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: "url('/photo-2.jpg')" }}
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
              Direct WhatsApp &bull; Fast Response
            </span>
            <h2 id="ctaH" className="h-section mt-4 text-white">
              Prefer to talk right now?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Message us directly on WhatsApp or call our team in Juba for instant help with your laundry or business inquiry.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink(BUSINESS.whatsappPrimary, "Hello LG Pick & Drop Laundry, I would like to book a pickup.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary h-12 px-8 text-xs shadow-xl shadow-brand/35"
              >
                Chat on WhatsApp Now
              </a>
              <a
                href={`tel:${BUSINESS.phones[0].tel}`}
                className="btn btn-ghost h-12 border-white/25 bg-white/10 px-8 text-xs text-white backdrop-blur-sm hover:border-brand hover:text-brand"
              >
                Call Hotline: {BUSINESS.phones[0].display}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}