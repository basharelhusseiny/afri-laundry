"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-scrubbed hero video (home page).
 *
 * The hero wraps in a 300svh container; the video section is sticky inside it.
 * Scroll progress over that range drives the video playhead (lerped on rAF,
 * quantized to the 24fps frame grid) exactly like the original GSAP build —
 * but with zero external animation libraries.
 *
 * - Beat 1 "Wash Your Troubles Away" fades out after ~32% of the scrub.
 * - Beat 2 "Welcome to.." is driven by the video's own clock (2.6s–4.2s).
 * - At ~92% the headline fades in and the final frame holds.
 * - prefers-reduced-motion: paused poster + tap-to-play button instead.
 */
export default function HeroScrub() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const beatARef = useRef<HTMLDivElement>(null);
  const beatBRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const stillRef = useRef<HTMLImageElement>(null);
  const [reduced] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [showPlay, setShowPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    // Reduced motion: pause, show poster with a tap-to-play button.
    if (reduced) {
      video.pause();
      setShowPlay(true);
      return;
    }

    video.pause(); // playback is driven by scroll, never by time
    video.load();
    let videoReady = false;
    const onCanplay = () => {
      videoReady = true;
    };
    video.addEventListener("canplay", onCanplay);
    video.addEventListener("error", () => {
      videoReady = false;
    });

    let heroProgress = 0;
    let lastSeek = -1;
    let raf = 0;
    const FRAME = 1 / 24; // video is 24fps
    const BEAT_B_IN = 2.6;
    const BEAT_B_OUT = 4.2;

    const tick = () => {
      if (videoReady && video.duration && !isNaN(video.duration)) {
        const target = Math.min(heroProgress * video.duration, video.duration - 0.05);
        const gap = Math.abs(target - video.currentTime);
        // Adaptive lerp: long jumps catch up fast, fine movement stays cinematic.
        const k = gap > 1.2 ? 0.5 : gap > 0.4 ? 0.3 : 0.18;
        let t = video.currentTime + (target - video.currentTime) * k;
        t = Math.round(t / FRAME) * FRAME; // quantize to frame grid
        if (t !== lastSeek && Math.abs(t - video.currentTime) > 0.001) {
          video.currentTime = t;
          lastSeek = t;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      heroProgress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;

      const beatA = beatARef.current;
      const beatB = beatBRef.current;
      const overlay = overlayRef.current;
      const still = stillRef.current;

      if (beatA) beatA.classList.toggle("opacity-100", heroProgress < 0.32);
      if (heroProgress > 0.92) {
        if (still) still.classList.add("opacity-100");
        if (overlay) overlay.classList.add("opacity-100");
      } else {
        if (still) still.classList.remove("opacity-100");
        if (overlay) overlay.classList.remove("opacity-100");
      }
    };

    const onTime = () => {
      const ct = video.currentTime;
      const beatB = beatBRef.current;
      if (beatB) beatB.classList.toggle("opacity-100", ct >= BEAT_B_IN && ct < BEAT_B_OUT);
    };

    video.addEventListener("timeupdate", onTime);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("canplay", onCanplay);
      video.removeEventListener("error", () => {});
    };
  }, [reduced]);

  return (
    <div ref={wrapperRef} className="relative h-[300svh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-black">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
          aria-label="Cinematic sequence of an LG professional laundry machine"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/hero-720.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/assets/hero-1080.mp4" type="video/mp4" />
        </video>

        {/* Final frame, fades in at the end of the scrub */}
        <img
          ref={stillRef}
          src="/assets/hero-lastframe.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
        />

        {/* Dark gradient for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" aria-hidden="true" />

        {/* Beat 1: lands instantly with the page */}
        <div
          ref={beatARef}
          className="pointer-events-none absolute inset-x-0 bottom-28 flex justify-center px-6 text-center opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        >
          <p className="font-display text-2xl uppercase tracking-wide text-white/90 md:text-4xl">
            Wash Your Troubles Away
          </p>
        </div>

        {/* Beat 2: synced to the video clock ("Welcome to.." before the door shuts) */}
        <div
          ref={beatBRef}
          className="pointer-events-none absolute inset-x-0 bottom-28 flex justify-center px-6 text-center opacity-0 transition-opacity duration-300"
          aria-hidden="true"
        >
          <p className="font-display text-2xl uppercase tracking-wide text-white md:text-4xl">Welcome to..</p>
        </div>

        {/* Headline — reveals at the end of the scrub */}
        <div
          ref={overlayRef}
          className="absolute inset-x-0 bottom-0 top-20 flex items-end pb-14 opacity-0 transition-opacity duration-700"
        >
          <div className="container-x">
            <h1 className="h-display text-white">
              LG Pick &amp; Drop
              <br />
              Laundry
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-white/80 md:text-base">
              Experience Original Quality, Every Time
            </p>
          </div>
        </div>

        {/* Tap-to-play for reduced motion / blocked autoplay */}
        {showPlay && (
          <button
            type="button"
            onClick={() => {
              const v = videoRef.current;
              if (v) v.play();
              setShowPlay(false);
            }}
            className="absolute left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20"
            aria-label="Play intro video"
          >
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" aria-hidden="true">
              <path d="M1 2.5v25L24 15 1 2.5z" fill="#E4002B" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}