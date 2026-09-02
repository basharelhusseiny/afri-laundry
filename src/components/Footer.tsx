import Link from "next/link";
import { BUSINESS, NAV_LINKS, waLink } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Subtle photographic background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: "url('/photo-4.jpg')" }}
      />

      {/* Ambient glowing radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(228,0,43,0.1) 0%, transparent 45%), radial-gradient(circle at 90% 90%, rgba(228,0,43,0.06) 0%, transparent 40%)",
        }}
      />

      {/* Top brand accent border */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand to-transparent"
        aria-hidden="true"
      />

      {/* Pre-Footer Action Banner */}
      <div className="relative border-b border-white/10">
        <div className="container-x py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Doorstep Pickup &amp; Delivery
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
                Ready for fresh, crisp laundry?
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Book in 2 minutes — we confirm time and pricing on WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waLink(BUSINESS.whatsappPrimary)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary h-11 px-6 text-xs shadow-lg shadow-brand/25"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Pickup</span>
              </a>
              <Link
                href="/contact"
                className="btn btn-ghost h-11 border-white/20 bg-transparent px-6 text-xs text-white hover:border-brand hover:text-brand"
              >
                Online Booking Form
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-x relative z-10 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <img
                src="/assets/afri-logo.png"
                alt="AFRI General logo"
                width={130}
                height={102}
                loading="lazy"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              <strong className="text-white">LG Pick &amp; Drop Laundry</strong> — operated by{" "}
              <span className="text-white/80">{BUSINESS.operator}</span>, the sole distributor of
              LG Electronics in Juba. Professional commercial laundry and garment care.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{BUSINESS.hours}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors duration-200 hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Garment Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {BUSINESS.services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Visit &amp; Contact
            </h4>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-brand"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href={BUSINESS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 leading-relaxed transition-colors hover:text-white hover:underline"
                >
                  {BUSINESS.address}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-brand"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="space-y-1">
                  {BUSINESS.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block text-white/80 transition-colors hover:text-white"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={waLink(BUSINESS.whatsappPrimary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:underline"
                >
                  <span>Chat directly on WhatsApp</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="relative border-t border-white/10 bg-black/40 py-6 text-xs text-white/80">
        <div className="container-x flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p>
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-white/80">
            {BUSINESS.tagline} &bull; Juba, South Sudan
          </p>
        </div>
      </div>
    </footer>
  );
}