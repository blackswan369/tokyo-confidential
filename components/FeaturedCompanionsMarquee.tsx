"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import type { Companion } from "@/data/companions";
import { CompanionCard } from "@/components/CompanionCard";
import type { FeaturedCompanionsDictionary } from "@/types/dictionary";

const SLIDE_CLASS =
  "min-w-0 shrink-0 w-[40vw] max-w-[200px] pr-4 md:w-[250px] md:max-w-none lg:w-[280px]";

type FeaturedCompanionsMarqueeProps = {
  companions: Companion[];
  dict: FeaturedCompanionsDictionary;
};

function EmblaCompanionCarousel({
  companions,
  dict,
}: FeaturedCompanionsMarqueeProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [WheelGesturesPlugin()],
  );

  const loopData = [...companions, ...companions, ...companions];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {loopData.map((companion, index) => (
          <div key={`${companion.id}-${index}`} className={SLIDE_CLASS}>
            <CompanionCard companion={companion} dict={dict} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedCompanionsMarquee({
  companions,
  dict,
}: FeaturedCompanionsMarqueeProps) {
  return (
    <>
      <div
        className="relative left-1/2 mt-12 w-screen max-w-[100vw] -translate-x-1/2 md:hidden"
        role="region"
        aria-label={dict.aria_label}
      >
        <EmblaCompanionCarousel companions={companions} dict={dict} />
      </div>

      <div
        className="mt-16 hidden w-full md:block"
        role="region"
        aria-label={dict.aria_label}
      >
        <EmblaCompanionCarousel companions={companions} dict={dict} />
      </div>
    </>
  );
}
