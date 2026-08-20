"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const MARQUEE_LOOP_DURATION_MS = 150_000;

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

type FeaturedCompanionsMarqueeProps = {
  loopSlides: ReactNode;
  staticSlides: ReactNode;
  mobileLoopSlides: ReactNode;
  mobileStaticSlides: ReactNode;
};

function MobileCompanionMarquee({
  loopSlides,
  staticSlides,
}: {
  loopSlides: ReactNode;
  staticSlides: ReactNode;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const accumulatedScrollRef = useRef(0);

  const applyAutoTransform = useCallback((position: number) => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) {
      return;
    }

    container.scrollLeft = 0;
    track.style.transform = `translate3d(-${position}px, 0, 0)`;
    track.style.willChange = "transform";
  }, []);

  const handleInteractionStart = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) {
      return;
    }

    isInteractingRef.current = true;
    track.style.transform = "none";
    track.style.willChange = "";
    container.classList.remove("overflow-hidden");
    container.classList.add("overflow-x-auto");
    container.scrollLeft = accumulatedScrollRef.current;
  }, []);

  const handleInteractionEnd = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) {
      return;
    }

    const halfWidth = track.scrollWidth / 2;
    let position = container.scrollLeft;

    if (halfWidth > 0) {
      while (position >= halfWidth) {
        position -= halfWidth;
      }
    }

    accumulatedScrollRef.current = position;
    isInteractingRef.current = false;
    lastTimeRef.current = null;

    container.classList.remove("overflow-x-auto");
    container.classList.add("overflow-hidden");
    applyAutoTransform(position);
  }, [applyAutoTransform]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const resetTiming = () => {
      lastTimeRef.current = null;

      if (isInteractingRef.current) {
        accumulatedScrollRef.current = container.scrollLeft;
        return;
      }

      applyAutoTransform(accumulatedScrollRef.current);
    };

    container.classList.add("overflow-hidden");
    container.classList.remove("overflow-x-auto");
    accumulatedScrollRef.current = 0;
    applyAutoTransform(0);

    const tick = (now: number) => {
      if (mobileQuery.matches) {
        const lastTime = lastTimeRef.current ?? now;
        lastTimeRef.current = now;
        const delta = now - lastTime;

        if (!isInteractingRef.current) {
          const halfWidth = track.scrollWidth / 2;
          if (halfWidth > 0) {
            accumulatedScrollRef.current +=
              (halfWidth / MARQUEE_LOOP_DURATION_MS) * delta;

            if (accumulatedScrollRef.current >= halfWidth) {
              accumulatedScrollRef.current -= halfWidth;
            }

            applyAutoTransform(accumulatedScrollRef.current);
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(resetTiming);
    resizeObserver.observe(track);

    mobileQuery.addEventListener("change", resetTiming);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      mobileQuery.removeEventListener("change", resetTiming);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      lastTimeRef.current = null;
      accumulatedScrollRef.current = 0;
      track.style.transform = "";
      track.style.willChange = "";
    };
  }, [applyAutoTransform, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={
        prefersReducedMotion
          ? "overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden"
          : "overflow-hidden [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden"
      }
      role="group"
      aria-label="Featured companions mobile showcase"
      onPointerDown={handleInteractionStart}
      onPointerUp={handleInteractionEnd}
      onPointerCancel={handleInteractionEnd}
      onPointerLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchCancel={handleInteractionEnd}
    >
      <div ref={trackRef} className="flex w-max gap-4">
        {prefersReducedMotion ? staticSlides : loopSlides}
      </div>
    </div>
  );
}

export function FeaturedCompanionsMarquee({
  loopSlides,
  staticSlides,
  mobileLoopSlides,
  mobileStaticSlides,
}: FeaturedCompanionsMarqueeProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <style>{`
        @keyframes companion-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% + 0.5rem));
          }
        }

        .companion-marquee-track {
          animation: companion-marquee 150s linear infinite;
          will-change: transform;
        }

        .companion-showcase:hover .companion-marquee-track,
        .companion-showcase:focus-within .companion-marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .companion-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="companion-showcase-mobile @container relative left-1/2 mt-12 w-screen max-w-[100vw] -translate-x-1/2 md:hidden"
        role="region"
        aria-label="Featured companions showcase"
      >
        <MobileCompanionMarquee
          loopSlides={mobileLoopSlides}
          staticSlides={mobileStaticSlides}
        />
      </div>

      <div
        className="companion-showcase @container mt-16 hidden w-full overflow-hidden md:block"
        role="region"
        aria-label="Featured companions showcase"
      >
        <div
          className={`flex w-max gap-4 ${
            prefersReducedMotion
              ? "overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : "companion-marquee-track"
          }`}
        >
          {prefersReducedMotion ? staticSlides : loopSlides}
        </div>
      </div>
    </>
  );
}
