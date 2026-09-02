"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface StoryBandProps {
  imageDesktop: string;
  imageMobile: string;
  alt: string;
  label: string;
  title: ReactNode;
  align?: "left" | "right";
  children?: ReactNode;
}

/**
 * Full-bleed cinematic band: image covers the section edge to edge, dark
 * gradient for legibility, copy overlaid bottom — like the original site.
 * Subtle parallax on the image (hand-rolled, rAF, no libraries), disabled
 * under prefers-reduced-motion.
 */
export default function StoryBand({
  imageDesktop,
  imageMobile,
  alt,
  label,
  title,
  align = "left",
  children,
}: StoryBandProps) {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const el = ref.current;
    const img = imgRef.current;
    if (!el || !img || reduced) return;

    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the section sits just below the viewport, +1 just above it
      const p = (r.top + r.height / 2 - vh / 2) / (vh + r.height);
      // translate range: ~36px each way, image pre-scaled so edges never show
      img.style.transform = `translateY(${p * -36}px) scale(1.12)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <section
      ref={ref}
      className="relative min-h-[580px] md:min-h-[640px] md:h-[84vh] overflow-hidden"
      aria-labelledby={`story-${label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <picture>
        <source srcSet={imageMobile} media="(max-width: 639px)" />
        <img
          ref={imgRef}
          src={imageDesktop}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: "translateY(0) scale(1.12)" }}
        />
      </picture>

      {/* Enhanced darker cinematic overlay */}
      {/* 1. Base dark tint */}
      <div className="absolute inset-0 bg-black/1" aria-hidden="true" />

      {/* 2. Deep bottom-to-top gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/1 via-black/1 to-black/1"
        aria-hidden="true"
      />

      {/* 3. Ambient vignette and brand radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 85%, rgba(228,0,43,0.18) 0%, transparent 20%), radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[580px] md:min-h-[640px] md:h-full items-end">
        <div
          className={`container-x pb-14 pt-20 md:pb-20 ${align === "right" ? "md:flex md:justify-end" : ""}`}
        >
          <div
            className={`max-w-2xl ${align === "right" ? "md:text-right" : ""}`}
          >
            <p
              className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 ${align === "right" ? "md:justify-end" : ""}`}
            >
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              {label}
            </p>
            <h2
              id={`story-${label.replace(/\s+/g, "-").toLowerCase()}`}
              className="mt-4 font-display text-3xl uppercase leading-[1.05] text-white text-balance md:text-5xl"
            >
              {title}
            </h2>
            {children && (
              <div
                className={`mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg ${align === "right" ? "md:ml-auto" : ""}`}
              >
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
