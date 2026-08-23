"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const MARQUEE_LOOP_DURATION_MS = 150_000;
const INTERACTION_THRESHOLD_PX = 6;
const RESUME_DELAY_MS = 1500;
const WHEEL_IDLE_MS = 150;
const SCROLL_IDLE_MS = 150;

const SCROLLBAR_HIDDEN =
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

function MobileCompanionMarquee({ slides }: { slides: ReactNode }) {
  return (
    <div
      className={`overflow-x-auto ${SCROLLBAR_HIDDEN} [overscroll-behavior-x:contain]`}
      role="group"
      aria-label="Featured companions showcase"
    >
      <div className="flex w-max gap-4">{slides}</div>
    </div>
  );
}

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

function normalizePosition(position: number, halfWidth: number) {
  if (halfWidth <= 0) {
    return 0;
  }

  return ((position % halfWidth) + halfWidth) % halfWidth;
}

type InteractiveCompanionMarqueeProps = {
  loopSlides: ReactNode;
  staticSlides: ReactNode;
  pauseOnHover?: boolean;
};

function InteractiveCompanionMarquee({
  loopSlides,
  staticSlides,
  pauseOnHover = false,
}: InteractiveCompanionMarqueeProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const accumulatedScrollRef = useRef(0);
  const isInteractingRef = useRef(false);
  const isAutoplayPausedRef = useRef(false);
  const isHoverPausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const wheelIdleTimeoutRef = useRef<number | null>(null);
  const scrollIdleTimeoutRef = useRef<number | null>(null);
  const activePointerIdRef = useRef<number | null>(null);
  const pointerStartXRef = useRef(0);
  const pointerStartScrollRef = useRef(0);
  const pointerHasMovedRef = useRef(false);

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return 0;
    }

    return track.scrollWidth / 2;
  }, []);

  const clearResumeTimeout = useCallback(() => {
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
      isAutoplayPausedRef.current = false;
      lastTimeRef.current = null;
    }
  }, []);

  const clearWheelIdleTimeout = useCallback(() => {
    if (wheelIdleTimeoutRef.current !== null) {
      window.clearTimeout(wheelIdleTimeoutRef.current);
      wheelIdleTimeoutRef.current = null;
    }
  }, []);

  const clearScrollIdleTimeout = useCallback(() => {
    if (scrollIdleTimeoutRef.current !== null) {
      window.clearTimeout(scrollIdleTimeoutRef.current);
      scrollIdleTimeoutRef.current = null;
    }
  }, []);

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

  const enterInteractionMode = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || isInteractingRef.current) {
      return;
    }

    clearResumeTimeout();
    clearWheelIdleTimeout();
    clearScrollIdleTimeout();
    isAutoplayPausedRef.current = true;
    isInteractingRef.current = true;
    lastTimeRef.current = null;

    track.style.transform = "none";
    track.style.willChange = "";
    container.classList.remove("overflow-hidden");
    container.classList.add("overflow-x-auto");
    container.scrollLeft = accumulatedScrollRef.current;
  }, [clearResumeTimeout, clearScrollIdleTimeout, clearWheelIdleTimeout]);

  const finalizeInteraction = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) {
      return;
    }

    clearScrollIdleTimeout();
    clearWheelIdleTimeout();
    const halfWidth = getHalfWidth();
    const normalizedPosition = normalizePosition(container.scrollLeft, halfWidth);

    accumulatedScrollRef.current = normalizedPosition;
    isInteractingRef.current = false;
    lastTimeRef.current = null;

    container.classList.remove("overflow-x-auto");
    container.classList.add("overflow-hidden");
    applyAutoTransform(normalizedPosition);

    clearResumeTimeout();
    isAutoplayPausedRef.current = true;
    resumeTimeoutRef.current = window.setTimeout(() => {
      isAutoplayPausedRef.current = false;
      lastTimeRef.current = null;
      resumeTimeoutRef.current = null;
    }, RESUME_DELAY_MS);
  }, [applyAutoTransform, clearResumeTimeout, clearScrollIdleTimeout, clearWheelIdleTimeout, getHalfWidth]);

  const scheduleInteractionEnd = useCallback(() => {
    clearScrollIdleTimeout();
    scrollIdleTimeoutRef.current = window.setTimeout(() => {
      scrollIdleTimeoutRef.current = null;
      if (isInteractingRef.current) {
        finalizeInteraction();
      }
    }, SCROLL_IDLE_MS);
  }, [clearScrollIdleTimeout, finalizeInteraction]);

  const scheduleWheelInteractionEnd = useCallback(() => {
    clearWheelIdleTimeout();
    wheelIdleTimeoutRef.current = window.setTimeout(() => {
      wheelIdleTimeoutRef.current = null;
      if (isInteractingRef.current) {
        finalizeInteraction();
      }
    }, WHEEL_IDLE_MS);
  }, [clearWheelIdleTimeout, finalizeInteraction]);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || event.button !== 0) {
        return;
      }

      clearResumeTimeout();
      activePointerIdRef.current = event.pointerId;
      pointerStartXRef.current = event.clientX;
      pointerStartScrollRef.current = isInteractingRef.current
        ? (containerRef.current?.scrollLeft ?? accumulatedScrollRef.current)
        : accumulatedScrollRef.current;
      pointerHasMovedRef.current = false;
    },
    [clearResumeTimeout, prefersReducedMotion],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (
        prefersReducedMotion ||
        activePointerIdRef.current !== event.pointerId
      ) {
        return;
      }

      const deltaX = event.clientX - pointerStartXRef.current;

      if (!pointerHasMovedRef.current) {
        if (Math.abs(deltaX) < INTERACTION_THRESHOLD_PX) {
          return;
        }

        pointerHasMovedRef.current = true;
        enterInteractionMode();

        const container = containerRef.current;
        if (!container) {
          return;
        }

        pointerStartScrollRef.current = container.scrollLeft;
        pointerStartXRef.current = event.clientX;

        if (event.pointerType === "mouse") {
          container.setPointerCapture(event.pointerId);
        }

        return;
      }

      if (
        !isInteractingRef.current ||
        event.pointerType !== "mouse" ||
        !containerRef.current?.hasPointerCapture(event.pointerId)
      ) {
        return;
      }

      containerRef.current.scrollLeft =
        pointerStartScrollRef.current + (pointerStartXRef.current - event.clientX);
    },
    [enterInteractionMode, prefersReducedMotion],
  );

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (activePointerIdRef.current !== event.pointerId) {
        return;
      }

      const container = containerRef.current;
      if (container?.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }

      if (pointerHasMovedRef.current && isInteractingRef.current) {
        scheduleInteractionEnd();
      }

      activePointerIdRef.current = null;
      pointerHasMovedRef.current = false;
    },
    [scheduleInteractionEnd],
  );

  const handlePointerCancel = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (activePointerIdRef.current !== event.pointerId) {
        return;
      }

      const container = containerRef.current;
      if (container?.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }

      if (pointerHasMovedRef.current && isInteractingRef.current) {
        scheduleInteractionEnd();
      }

      activePointerIdRef.current = null;
      pointerHasMovedRef.current = false;
    },
    [scheduleInteractionEnd],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) {
      return;
    }

    const resetTiming = () => {
      lastTimeRef.current = null;

      if (isInteractingRef.current) {
        accumulatedScrollRef.current = normalizePosition(
          container.scrollLeft,
          getHalfWidth(),
        );
        return;
      }

      accumulatedScrollRef.current = normalizePosition(
        accumulatedScrollRef.current,
        getHalfWidth(),
      );
      applyAutoTransform(accumulatedScrollRef.current);
    };

    container.classList.add("overflow-hidden");
    container.classList.remove("overflow-x-auto");
    applyAutoTransform(accumulatedScrollRef.current);

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        return;
      }

      event.preventDefault();

      if (!isInteractingRef.current) {
        enterInteractionMode();
      }

      container.scrollLeft += event.deltaX;
      scheduleWheelInteractionEnd();
    };

    const handleScroll = () => {
      if (isInteractingRef.current) {
        scheduleInteractionEnd();
      }
    };

    const tick = (now: number) => {
      const lastTime = lastTimeRef.current ?? now;
      lastTimeRef.current = now;
      const delta = now - lastTime;

      if (
        !isInteractingRef.current &&
        !isAutoplayPausedRef.current &&
        !(pauseOnHover && isHoverPausedRef.current)
      ) {
        const halfWidth = getHalfWidth();
        if (halfWidth > 0) {
          accumulatedScrollRef.current += (halfWidth / MARQUEE_LOOP_DURATION_MS) * delta;

          if (accumulatedScrollRef.current >= halfWidth) {
            accumulatedScrollRef.current -= halfWidth;
          }

          applyAutoTransform(accumulatedScrollRef.current);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(resetTiming);
    resizeObserver.observe(track);
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
      clearResumeTimeout();
      clearWheelIdleTimeout();
      clearScrollIdleTimeout();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      lastTimeRef.current = null;
      track.style.transform = "";
      track.style.willChange = "";
    };
  }, [
    applyAutoTransform,
    clearResumeTimeout,
    clearScrollIdleTimeout,
    clearWheelIdleTimeout,
    enterInteractionMode,
    getHalfWidth,
    pauseOnHover,
    prefersReducedMotion,
    scheduleInteractionEnd,
    scheduleWheelInteractionEnd,
  ]);

  if (prefersReducedMotion) {
    return (
      <div
        className={`overflow-x-auto ${SCROLLBAR_HIDDEN} [touch-action:pan-x]`}
        role="group"
        aria-label="Featured companions showcase"
      >
        <div className="flex w-max gap-4">{staticSlides}</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${SCROLLBAR_HIDDEN} [touch-action:pan-x]`}
      role="group"
      aria-label="Featured companions showcase"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onMouseEnter={pauseOnHover ? () => { isHoverPausedRef.current = true; } : undefined}
      onMouseLeave={
        pauseOnHover
          ? () => {
              isHoverPausedRef.current = false;
              lastTimeRef.current = null;
            }
          : undefined
      }
    >
      <div ref={trackRef} className="flex w-max gap-4">
        {loopSlides}
      </div>
    </div>
  );
}

type FeaturedCompanionsMarqueeProps = {
  loopSlides: ReactNode;
  staticSlides: ReactNode;
  mobileLoopSlides: ReactNode;
  mobileStaticSlides: ReactNode;
};

export function FeaturedCompanionsMarquee({
  loopSlides,
  staticSlides,
  mobileStaticSlides,
}: FeaturedCompanionsMarqueeProps) {
  return (
    <>
      <div
        className="companion-showcase-mobile @container relative left-1/2 mt-12 w-screen max-w-[100vw] -translate-x-1/2 md:hidden"
        role="region"
        aria-label="Featured companions showcase"
      >
        <MobileCompanionMarquee slides={mobileStaticSlides} />
      </div>

      <div
        className="companion-showcase @container mt-16 hidden w-full md:block"
        role="region"
        aria-label="Featured companions showcase"
      >
        <InteractiveCompanionMarquee
          loopSlides={loopSlides}
          staticSlides={staticSlides}
          pauseOnHover
        />
      </div>
    </>
  );
}
