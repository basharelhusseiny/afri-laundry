"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import HeroScrub from "@/components/HeroScrub";
import StoryBand from "@/components/StoryBand";
import { BUSINESS, waLink } from "@/lib/site";

const SERVICES = [
  {
    num: "01",
    title: "Professional Washing",
    tag: "LG Commercial Cycle",
    copy: "Every load washed on commercial LG machines with the right programme, water temperature and fabric-care balance.",
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
    title: "Stain Treatment",
    tag: "Targeted Spot Care",
    copy: "Individual fabric inspection and targeted pre-treatment on collars, cuffs and stubborn stains before the main wash.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Gentle Drying",
    tag: "Fiber-Safe Warmth",
    copy: "Commercial LG dryers with sensor drying that protects delicate fibres, prevents shrinking and preserves garment fit.",
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
    title: "Steam Ironing",
    tag: "High-Pressure Steam",
    copy: "Professional steam pressing and ironing equipment for shirts, suits, uniforms and dresses with a clean, crisp finish.",
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
    title: "Neat Folding or Hanging",
    tag: "Wardrobe-Ready",
    copy: "Finished on commercial pressing machines, then delivered neatly folded or hung on sturdy hangers — your preference.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7a4 4 0 0 0-8 0c0 1.5 1 2.5 2 3l-7 4.5A2 2 0 0 0 4 18h16a2 2 0 0 0 1-3.5L14 10c1-.5 2-1.5 2-3z" />
        <circle cx="12" cy="5" r="2" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Protective Packaging",
    tag: "Dust-Proof Sealed",
    copy: "Every completed order is packed in clean protective covers, sealed and ready for doorstep delivery or quick pickup.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    n: "01",
    tag: "Takes < 2 Minutes",
    title: "Request a Pickup",
    text: "Fill our quick website form or send a message on WhatsApp with your location in Juba.",
    bullets: [
      "Instant WhatsApp pre-filled message",
      "No upfront payment required",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 7h6" />
        <path d="M9 11h4" />
      </svg>
    ),
  },
  {
    n: "02",
    tag: "Doorstep Collection",
    title: "We Collect & Care",
    text: "We confirm your exact pickup time and price. Our team collects your items and handles them on genuine LG machines.",
    bullets: [
      "Dedicated LG commercial washing & drying",
      "Pre-wash spot and stain treatment",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    n: "03",
    tag: "Wardrobe-Ready Delivery",
    title: "Delivered Clean & Crisp",
    text: "Your garments return steam pressed, folded or hung, sealed in protective covers and delivered right to your door.",
    bullets: [
      "Professional steam iron finish",
      "Hygienic dust-proof protective packaging",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3c0 .8.3 1.5.8 2L2 12a2 2 0 0 0 1 3.5l1.5.5V21a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5l1.5-.5A2 2 0 0 0 21 12l-7.8-5c.5-.5.8-1.2.8-2a3 3 0 0 0-3-3z" />
        <path d="M12 12v6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    ),
  },
];

function HeroVideo() {
  return <HeroScrub />;
}

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      {/* Cinematic wave transition — dark hero ➜ white body */}
      <div
        aria-hidden="true"
        className="relative -mt-1 overflow-hidden leading-none"
        style={{ background: "black" }}
      >
        <div className="h-10 w-full bg-gradient-to-b from-black via-black/60 to-transparent" />
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(48px, 8vw, 90px)", display: "block" }}
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000000" stopOpacity="1" />
              <stop offset="45%" stopColor="#0a0a0a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="90" fill="url(#waveGrad)" />
          <path
            d="M0,30 C180,70 360,10 540,45 C720,80 900,15 1080,50 C1260,85 1350,40 1440,55 L1440,90 L0,90 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32" aria-labelledby="servicesH">
        {/* Subtle decorative background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 10%, rgba(228,0,43,0.03) 0%, transparent 40%), radial-gradient(circle at 10% 90%, rgba(228,0,43,0.025) 0%, transparent 35%)",
          }}
        />

        <div className="container-x relative z-10">
          {/* Header with Title + Trust Badges */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="label">Services &amp; Capabilities</p>
              <h2 id="servicesH" className="h-section text-ink">
                What we do
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Full-care laundry from pickup to delivery — every step handled on
                genuine LG commercial equipment with tailored programs.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-neutral-50 px-3.5 py-1.5 text-xs font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  100% LG Commercial Line
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-neutral-50 px-3.5 py-1.5 text-xs font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Eco-Friendly Detergents
                </span>
              </div>
            </Reveal>
          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) * 100}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden border border-black/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5">
                  {/* Top animated accent bar */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Top Row: Icon + Service Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/8 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-md group-hover:shadow-brand/20">
                        {s.icon}
                      </div>
                      <span className="font-display text-2xl font-bold tracking-wider text-black/15 transition-colors duration-300 group-hover:text-brand/30">
                        {s.num}
                      </span>
                    </div>

                    {/* Title & Tag */}
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

                  {/* Bottom subtle indicator */}
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5 text-xs font-semibold text-muted group-hover:text-ink transition-colors">
                    <span>LG Standard Process</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-brand">
                      &rarr;
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom Interactive Bar */}
          <Reveal delay={200}>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-sm border border-black/8 bg-neutral-50/70 p-6 sm:flex-row sm:px-8">
              <div>
                <h4 className="text-sm font-bold text-ink">
                  Looking for special care items (Suits, Gowns, Beddings &amp; Curtains)?
                </h4>
                <p className="mt-1 text-xs text-muted">
                  We offer dedicated high-capacity sanitization and custom fabric handling.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="btn btn-ghost text-xs h-10 px-5 border-black/15 hover:border-brand"
                >
                  Explore All Services
                </Link>
                <Link
                  href="/pricing"
                  className="btn btn-primary text-xs h-10 px-5 shadow-sm"
                >
                  View Price List
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The People (StoryBand) ────────────────────────────── */}
      <StoryBand
        imageDesktop="/assets/staff-pressing-desktop.webp"
        imageMobile="/assets/staff-pressing-mobile.webp"
        alt="Staff steam pressing garments at LG Pick and Drop Laundry in Juba"
        label="The People &amp; Heritage"
        title={
          <>
            Operated on genuine
            <br />
            <span className="text-white">LG commercial machines</span>
          </>
        }
        align="left"
      >
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            Operated by{" "}
            <strong className="font-semibold text-white">{BUSINESS.operator}</strong>{" "}
            — the sole authorized distributor of LG Electronics in Juba — our experienced team runs the real commercial machines, every single day.
          </p>

          {/* Key Stat Cards / Trust Badges (2 balanced cards) */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3.5 rounded-sm border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:bg-white/15">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md shadow-brand/30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-lg uppercase tracking-wide text-white">Sole Distributor</p>
                <p className="text-xs text-white/75">Official LG Electronics in Juba</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-sm border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:bg-white/15">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18h18l-3-7H6l-3 7z" />
                  <path d="M6 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
                </svg>
              </div>
              <div>
                <p className="font-display text-lg uppercase tracking-wide text-white">Commercial Care</p>
                <p className="text-xs text-white/75">Industrial Steam Press &amp; Dry</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/contact"
              className="btn btn-primary text-xs h-11 px-6 shadow-xl shadow-brand/35 transition-transform hover:scale-105"
            >
              Book Pickup Now
            </Link>
            <a
              href={BUSINESS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost text-xs h-11 px-5 border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-brand hover:text-brand"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </StoryBand>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-50/70 py-24 md:py-32 border-y border-black/5" aria-labelledby="howH">
        {/* Ambient radial gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(228,0,43,0.035) 0%, transparent 40%), radial-gradient(circle at 85% 80%, rgba(228,0,43,0.03) 0%, transparent 35%)",
          }}
        />

        <div className="container-x relative z-10">
          {/* Header with Title + Process Speed Badge */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="label">Simple &amp; Frictionless</p>
              <h2 id="howH" className="h-section text-ink">
                Three simple steps
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                From your initial request to doorstep delivery — we make laundry in Juba
                completely effortless for you.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-xs">
                <span className="h-2 w-2 rounded-full bg-brand animate-ping" />
                <span>Fast 24–48h Turnaround Across Juba</span>
              </div>
            </Reveal>
          </div>

          {/* Steps grid with connecting line */}
          <div className="relative mt-16">
            {/* Horizontal connector — visible on md+ */}
            <div
              className="absolute left-0 right-0 hidden md:block"
              style={{ top: "3.25rem" }}
              aria-hidden="true"
            >
              <div className="mx-auto flex max-w-5xl items-center px-8">
                <div className="ml-[12%] mr-[12%] h-[2px] flex-1 bg-gradient-to-r from-brand/20 via-brand/40 to-brand/20" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 130}>
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden border border-black/8 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-2xl hover:shadow-black/5 md:p-9">
                    {/* Top animated accent bar */}
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div>
                      {/* Step Header: Number badge with pulse ring + Icon */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className="relative inline-flex">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg text-white shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-105">
                            {s.n}
                          </span>
                          <span
                            className="pointer-events-none absolute inset-0 rounded-full border-2 border-brand/25 transition-transform duration-500 group-hover:scale-130"
                            style={{ transform: "scale(1.35)" }}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-neutral-100/80 text-ink transition-all duration-300 group-hover:bg-brand/10 group-hover:text-brand">
                          {s.icon}
                        </div>
                      </div>

                      {/* Tag & Title */}
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand">
                        {s.tag}
                      </span>
                      <h3 className="mt-1 font-display text-xl uppercase tracking-wide text-ink transition-colors duration-300 group-hover:text-brand">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {s.text}
                      </p>
                    </div>

                    {/* Checkpoints Bullets */}
                    <div className="mt-6 border-t border-black/5 pt-5">
                      <ul className="space-y-2 text-xs font-medium text-ink/80">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
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
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bottom Interactive CTA Bar */}
          <Reveal delay={200}>
            <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-sm border border-black/8 bg-white p-6 shadow-xs sm:flex-row sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">
                    Ready to schedule your first laundry load?
                  </h4>
                  <p className="text-xs text-muted">
                    Takes less than 2 minutes — no upfront payment required.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary text-xs h-10 px-6 shadow-md shadow-brand/20"
                >
                  Book Pickup Now
                </Link>
                <a
                  href={waLink(BUSINESS.whatsappPrimary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs h-10 px-5 border-black/15 hover:border-brand"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The Machines (StoryBand) ─────────────────────────── */}
      <StoryBand
        imageDesktop="/assets/machines-wall-desktop.webp"
        imageMobile="/assets/machines-wall-mobile.webp"
        alt="Wall of stacked LG commercial washers and dryers at LG Pick and Drop Laundry"
        label="Infrastructure &amp; Capacity"
        title={
          <>
            Built on genuine
            <br />
            <span className="text-white">LG commercial equipment</span>
          </>
        }
        align="right"
      >
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            Every garment is cared for using industrial-grade LG commercial units engineered for fabric longevity, deep sanitization, and crisp finishing.
          </p>

          {/* Machine Spec Cards */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-sm border border-white/15 bg-white/10 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:bg-white/15 text-left md:text-right">
              <span className="inline-block font-display text-2xl font-bold text-brand">5 Units</span>
              <p className="mt-0.5 text-xs font-semibold text-white">LG Washers</p>
              <p className="mt-1 text-[11px] leading-tight text-white/70">Inverter Direct Drive</p>
            </div>

            <div className="rounded-sm border border-white/15 bg-white/10 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:bg-white/15 text-left md:text-right">
              <span className="inline-block font-display text-2xl font-bold text-white">5 Units</span>
              <p className="mt-0.5 text-xs font-semibold text-white">LG Dryers</p>
              <p className="mt-1 text-[11px] leading-tight text-white/70">Sensor Controlled Heat</p>
            </div>

            <div className="rounded-sm border border-white/15 bg-white/10 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:bg-white/15 text-left md:text-right">
              <span className="inline-block font-display text-2xl font-bold text-emerald-400">Steam</span>
              <p className="mt-0.5 text-xs font-semibold text-white">Press Stations</p>
              <p className="mt-1 text-[11px] leading-tight text-white/70">High-Pressure Finishing</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1 md:justify-end">
            <Link
              href="/equipment"
              className="btn btn-ghost text-xs h-11 px-5 border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-brand hover:text-brand"
            >
              <span>Explore Commercial Sales</span>
              <span>&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary text-xs h-11 px-6 shadow-xl shadow-brand/35 transition-transform hover:scale-105"
            >
              Book Pickup Now
            </Link>
          </div>
        </div>
      </StoryBand>

      {/* ── Book a pickup ─────────────────────────────────────── */}
      <section
        id="book"
        className="relative overflow-hidden bg-white py-20 md:py-32"
        aria-labelledby="bookH"
      >
        {/* Photographic background with soft white overlay & texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] mix-blend-luminosity"
          style={{ backgroundImage: "url('/photo-1.jpg')" }}
        />

        {/* Ambient radial gradients for depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(228,0,43,0.05) 0%, transparent 45%), radial-gradient(circle at 90% 80%, rgba(228,0,43,0.04) 0%, transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(250,250,250,0.95) 100%)",
          }}
        />

        {/* Top accent border */}
        <div
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-80"
          aria-hidden="true"
        />

        <div className="container-x relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Trust points & Direct contacts */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label">Book a pickup</p>
                <h2 id="bookH" className="h-section text-ink">
                  Ready when you are
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Tell us where you are and what you&apos;re sending — we confirm
                  the pickup time and price on WhatsApp within minutes.
                </p>
              </Reveal>

              {/* Service Highlights */}
              <Reveal delay={100}>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-sm border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur-xs">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ink">
                        Fast WhatsApp Dispatch
                      </h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        Instant message pre-fill for fast scheduling and clear pricing before pickup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-sm border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur-xs">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ink">
                        Doorstep Delivery in Juba
                      </h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        We collect from your home or office and deliver back fresh, clean &amp; pressed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-sm border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur-xs">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ink">
                        Genuine LG Commercial Care
                      </h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        Handled on dedicated LG commercial washers, dryers and steam pressing systems.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct Action Hub */}
              <Reveal delay={160}>
                <div className="mt-8 border-t border-black/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Prefer direct contact?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <a
                      className="btn btn-ghost text-xs py-2 h-10 border-black/15 hover:border-brand"
                      href={`tel:${BUSINESS.phones[0].tel}`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {BUSINESS.phones[0].display}
                    </a>
                    <a
                      className="btn btn-ghost text-xs py-2 h-10 border-black/15 hover:border-brand"
                      href={BUSINESS.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Elevated Form Card */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="relative overflow-hidden border border-black/10 bg-white p-6 sm:p-9 shadow-2xl shadow-black/5 md:p-10">
                  {/* Subtle top brand line */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand to-brand/40"
                    aria-hidden="true"
                  />

                  {/* Header inside the card */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/8 pb-5">
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-wide text-ink">
                        Schedule a Pickup
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        Fill in your details — we will reach out directly on WhatsApp.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Open Mon–Sat (8am–6pm)
                    </span>
                  </div>

                  <BookingForm />

                  {/* Bottom Assurance */}
                  <div className="mt-6 border-t border-black/8 pt-5 text-center sm:flex sm:items-center sm:justify-between">
                    <p className="text-xs text-muted">
                      📍 {BUSINESS.areaNote}
                    </p>
                    <a
                      href={waLink(BUSINESS.whatsappPrimary)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-semibold text-brand hover:underline sm:mt-0"
                    >
                      Direct WhatsApp Helpline &rarr;
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
