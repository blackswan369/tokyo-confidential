import Image from "next/image";
import { featuredCompanions, type Companion } from "@/data/companions";
import { FeaturedCompanionsMarquee } from "@/components/FeaturedCompanionsMarquee";

function CompanionCard({ companion }: { companion: Companion }) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-2xl bg-[#0B0B0B] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={companion.image}
          alt={`${companion.name} portrait`}
          fill
          sizes="(max-width: 768px) 48vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 py-6 md:px-6 md:py-7">
        <h3 className="font-body text-lg font-medium leading-[140%] text-white">
          {companion.name}
        </h3>
        <p className="mt-1 font-body text-base leading-[140%] text-[#D6D6D6]">
          {companion.age}
        </p>
        <div className="mt-4 font-body text-sm leading-[160%] text-[#D6D6D6] md:text-base">
          <p>{companion.introduction[0]}</p>
          <p className="mt-1">{companion.introduction[1]}</p>
        </div>
        {companion.available && (
          <span className="mt-5 inline-flex w-fit rounded-full border border-[#22C55E] px-3 py-1 font-body text-xs font-medium uppercase tracking-wide text-[#22C55E]">
            AVAILABLE TODAY
          </span>
        )}
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="mt-6 inline-flex h-[60px] w-full cursor-not-allowed items-center justify-center rounded-[999px] bg-[#D4AF37] px-8 font-body text-base font-medium text-[#0B0B0B] opacity-60"
        >
          MEET THIS COMPANION
        </button>
      </div>
    </article>
  );
}

function DesktopCompanionSlide({
  companion,
  isClone,
}: {
  companion: Companion;
  isClone: boolean;
}) {
  return (
    <div
      aria-hidden={isClone || undefined}
      inert={isClone || undefined}
      className={`w-[calc((100cqw-2rem)/3)] shrink-0${
        isClone ? " pointer-events-none" : ""
      }`}
    >
      <CompanionCard companion={companion} />
    </div>
  );
}

function MobileCompanionSlide({
  companion,
  isClone,
}: {
  companion: Companion;
  isClone: boolean;
}) {
  return (
    <div
      aria-hidden={isClone || undefined}
      inert={isClone || undefined}
      className={`w-[calc((100cqw-1rem)/2.15)] shrink-0${
        isClone ? " pointer-events-none" : ""
      }`}
    >
      <CompanionCard companion={companion} />
    </div>
  );
}

export function FeaturedCompanions() {
  const loopedCompanions = [...featuredCompanions, ...featuredCompanions];

  const staticSlides = featuredCompanions.map((companion) => (
    <DesktopCompanionSlide
      key={companion.id}
      companion={companion}
      isClone={false}
    />
  ));

  const loopSlides = loopedCompanions.map((companion, index) => (
    <DesktopCompanionSlide
      key={`${companion.id}-${index}`}
      companion={companion}
      isClone={index >= featuredCompanions.length}
    />
  ));

  const mobileStaticSlides = featuredCompanions.map((companion) => (
    <MobileCompanionSlide
      key={companion.id}
      companion={companion}
      isClone={false}
    />
  ));

  const mobileLoopSlides = loopedCompanions.map((companion, index) => (
    <MobileCompanionSlide
      key={`${companion.id}-${index}`}
      companion={companion}
      isClone={index >= featuredCompanions.length}
    />
  ));

  return (
    <section id="companions" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          FEATURED COMPANIONS
        </h2>

        <div className="md:mx-auto md:w-[85%]">
          <FeaturedCompanionsMarquee
            loopSlides={loopSlides}
            staticSlides={staticSlides}
            mobileLoopSlides={mobileLoopSlides}
            mobileStaticSlides={mobileStaticSlides}
          />
        </div>
      </div>
    </section>
  );
}
