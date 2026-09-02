"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS, NAV_LINKS, waLink } from "@/lib/site";

function Logo({ black }: { black?: boolean }) {
  return (
    <img
      src={black ? "/assets/afri-logo-black.png" : "/assets/afri-logo.png"}
      alt="LG Pick & Drop Laundry — AFRI General logo"
      width={80}
      height={62}
      className="h-12 w-auto transition-transform duration-200 hover:scale-105 sm:h-13 md:h-14"
      loading="eager"
    />
  );
}

export default function Nav({ solid }: { solid?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const alwaysSolid = solid === true;

  useEffect(() => {
    const onScroll = () => {
      if (pathname === "/") {
        // Home: the hero is pinned for ~3 viewport heights (scroll scrub).
        // Stay transparent (white logo) over the video; only go solid once
        // the pinned hero has finished.
        const threshold = Math.max(window.innerHeight * 2, 800);
        setScrolled(window.scrollY > threshold);
      } else {
        setScrolled(window.scrollY > 24);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const dark = alwaysSolid || scrolled || open;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          dark
            ? "border-b border-black/8 bg-white/95 backdrop-blur-md shadow-xs"
            : "bg-gradient-to-b from-black/60 via-black/25 to-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="container-x flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="LG Pick & Drop Laundry — Home" className="relative z-50 flex items-center">
            <Logo black={dark} />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((l) => {
                const active = isActive(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`group relative py-1 text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${
                        active
                          ? "text-brand"
                          : dark
                            ? "text-ink/80 hover:text-brand"
                            : "text-white/90 hover:text-white"
                      }`}
                    >
                      {l.label}
                      {/* Active indicator dot/line */}
                      {active && (
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-brand rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn btn-primary h-11 px-6 text-xs shadow-md shadow-brand/20 hover:shadow-brand/35 transition-all"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>Book Pickup</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-sm border transition-colors lg:hidden ${
              dark
                ? "border-black/10 text-ink bg-neutral-100/60"
                : "border-white/20 text-white bg-black/20"
            }`}
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-white transition-all duration-300 lg:hidden ${
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ paddingTop: "5.5rem" }}
      >
        <div className="container-x flex flex-1 flex-col justify-between overflow-y-auto pb-8 pt-4">
          {/* Navigation Links with Numbering */}
          <nav aria-label="Mobile Navigation" className="space-y-2 pt-2">
            {NAV_LINKS.map((l, index) => {
              const active = isActive(l.href);
              const num = `0${index + 1}`;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-black/8 py-5 sm:py-6 transition-colors ${
                    active ? "text-brand" : "text-ink hover:text-brand"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="font-display text-sm text-brand/70 font-semibold">{num}</span>
                    <span className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
                      {l.label}
                    </span>
                  </div>
                  {active ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                  ) : (
                    <span className="text-muted/40 transition-transform group-hover:translate-x-1">&rarr;</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions & Info */}
          <div className="mt-8 space-y-5 border-t border-black/10 pt-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center text-xs h-12 shadow-md shadow-brand/25"
              >
                Book a Pickup Online
              </Link>
              <a
                href={waLink(BUSINESS.whatsappPrimary)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full justify-center text-xs h-12 border-black/15 hover:border-brand"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-brand"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
              <span>{BUSINESS.hours}</span>
              <a href={`tel:${BUSINESS.phones[0].tel}`} className="font-semibold text-ink hover:text-brand">
                📞 {BUSINESS.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}