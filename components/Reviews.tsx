"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReviewItem, ReviewsDictionary } from "@/types/dictionary";

const GOLD = "#D4AF37";

const REVIEW_FLAGS: Record<string, string> = {
  daniel: "🇺🇸",
  james: "🇬🇧",
  carlos: "🇪🇸",
  miguel: "🇲🇽",
  wei: "🇹🇼",
};

type ReviewsProps = {
  dict: ReviewsDictionary;
};

function GoldStars({ ariaLabel }: { ariaLabel: string }) {
  return (
    <div className="flex gap-1" role="img" aria-label={ariaLabel}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 1.5L9.8 5.9L14.5 6.3L11 9.1L12.1 13.7L8 11.4L3.9 13.7L5 9.1L1.5 6.3L6.2 5.9L8 1.5Z"
            fill={GOLD}
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  starsAriaLabel,
}: {
  review: ReviewItem;
  starsAriaLabel: string;
}) {
  return (
    <article className="flex h-full w-full flex-col rounded-2xl bg-[#0B0B0B] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] md:p-7">
      <h3 className="font-body text-lg font-medium leading-[140%] text-white">
        {review.name}
      </h3>
      <p className="mt-1 flex items-center gap-1.5 font-body text-sm leading-[140%] text-[#D6D6D6] md:text-base">
        <span className="text-[1em] leading-none" aria-hidden="true">
          {REVIEW_FLAGS[review.id]}
        </span>
        {review.country}
      </p>
      <div className="mt-4">
        <GoldStars ariaLabel={starsAriaLabel} />
      </div>
      <blockquote
        lang={review.lang}
        className="mt-5 font-body text-sm leading-[160%] text-[#D6D6D6] md:leading-[150%]"
      >
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
    </article>
  );
}

function CarouselArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={direction === "prev" ? "mr-0.5" : "ml-0.5"}
    >
      <path
        d={direction === "prev" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Reviews({ dict }: ReviewsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const container = trackRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollPrev(scrollLeft > 1);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const { deltaX, deltaY } = event;
      if (Math.abs(deltaX) <= Math.abs(deltaY)) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const atLeft = scrollLeft <= 0;
      const atRight = scrollLeft + clientWidth >= scrollWidth - 1;

      if (atLeft && event.deltaX < 0) {
        event.preventDefault();
      } else if (atRight && event.deltaX > 0) {
        event.preventDefault();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scrollToSlide = (direction: "prev" | "next") => {
    const container = trackRef.current;
    if (!container) return;

    const slides = Array.from(container.children) as HTMLElement[];
    const { scrollLeft } = container;

    let currentIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = index;
      }
    });

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const maxIndex = isDesktop
      ? dict.items.length - 3
      : dict.items.length - 1;
    const targetIndex =
      direction === "prev"
        ? Math.max(0, currentIndex - 1)
        : Math.min(maxIndex, currentIndex + 1);

    slides[targetIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <section id="reviews" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          {dict.title}
        </h2>

        <div className="md:mx-auto md:w-full">
          <div className="relative mt-12 md:mt-16">
            <div
              ref={trackRef}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory [overscroll-behavior-x:contain] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="region"
              aria-roledescription="carousel"
              aria-label={dict.aria_label}
            >
              {dict.items.map((review) => (
                <div
                  key={review.id}
                  className="w-full shrink-0 snap-start md:w-[calc((100%-4rem)/3)]"
                >
                  <ReviewCard
                    review={review}
                    starsAriaLabel={dict.stars_aria_label}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSlide("prev")}
                disabled={!canScrollPrev}
                aria-label={dict.prev_review}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37] transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              >
                <CarouselArrow direction="prev" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSlide("next")}
                disabled={!canScrollNext}
                aria-label={dict.next_review}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37] transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              >
                <CarouselArrow direction="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
