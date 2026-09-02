"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS, waLink } from "@/lib/site";

/** WhatsApp booking form: opens wa.me with prefilled message. No backend. */
export default function BookingForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState(BUSINESS.servicesShort[0]);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{ name?: boolean; location?: boolean }>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: { name?: boolean; location?: boolean } = {};
    if (!name.trim()) errs.name = true;
    if (!location.trim()) errs.location = true;
    setErrors(errs);
    if (errs.name || errs.location) return;

    const text = [
      "Hello LG Pick & Drop Laundry, I'd like to book a pickup.",
      `Name: ${name.trim()}`,
      `Location: ${location.trim()}`,
      `Service: ${service}`,
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(BUSINESS.whatsappPrimary, text), "_blank", "noopener");
  };

  const fieldClasses =
    "w-full border border-black/15 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-muted/60 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/10";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="name" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink">
          <span>Your Name</span>
          <span className="text-[10px] font-normal text-brand uppercase tracking-normal">Required</span>
        </label>
        <div className="relative">
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
            }}
            autoComplete="name"
            placeholder="e.g. John Deng"
            className={`${fieldClasses} ${errors.name ? "border-brand ring-2 ring-brand/15" : ""}`}
          />
        </div>
        {errors.name && (
          <p className="flex items-center gap-1 text-xs font-medium text-brand">
            <span>⚠</span> Please enter your name.
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="location" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink">
          <span>Pickup Location</span>
          <span className="text-[10px] font-normal text-brand uppercase tracking-normal">Required</span>
        </label>
        <div className="relative">
          <input
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              if (errors.location) setErrors((prev) => ({ ...prev, location: false }));
            }}
            autoComplete="street-address"
            placeholder="e.g. Hai Jerusalem, near Freedom Hospital"
            className={`${fieldClasses} ${errors.location ? "border-brand ring-2 ring-brand/15" : ""}`}
          />
        </div>
        {errors.location && (
          <p className="flex items-center gap-1 text-xs font-medium text-brand">
            <span>⚠</span> Please enter your pickup location in Juba.
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-ink">
          Service Type
        </label>
        <div className="relative">
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${fieldClasses} appearance-none pr-10 cursor-pointer`}
          >
            {BUSINESS.servicesShort.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 4l4 4 4-4H2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="notes" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink">
          <span>Order Notes / Instructions</span>
          <span className="text-[10px] font-normal text-muted uppercase tracking-normal">Optional</span>
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="e.g. 5 shirts, 2 trousers, delicate fabrics or urgent timing..."
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-2 w-full shadow-lg shadow-brand/20 hover:shadow-brand/35 transition-all"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="flex-shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span>Book via WhatsApp</span>
      </button>

      <p className="text-center text-[11px] text-muted">
        ⚡ Instant WhatsApp pre-fill • Free pickup confirmation
      </p>
    </form>
  );
}