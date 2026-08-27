import Image from "next/image";
import { featuredCompanions, type Companion } from "@/data/companions";
import { FeaturedCompanionsMarquee } from "@/components/FeaturedCompanionsMarquee";

function CompanionCard({ companion }: { companion: Companion }) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={companion.image}
          alt={`${companion.name} portrait`}
          fill
          sizes="(max-width: 768px) 48vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col rounded-b-2xl border border-gray-800 bg-[#0A0A0A] px-4 py-4 md:px-5 md:py-5">
        <h3 className="font-body text-lg font-medium leading-[140%] text-white">
          {companion.name},{" "}
          <span className="font-normal text-[#D6D6D6]">{companion.age}</span>
        </h3>

        <p className="mt-2 font-body text-[10px] uppercase tracking-widest">
          {companion.available && (
            <>
              <span className="text-[#E8B936]">AVAILABLE TODAY</span>
              <span className="text-gray-500"> • </span>
            </>
          )}
          <span className="text-gray-400">{companion.area}</span>
        </p>

        <button
          type="button"
          disabled
          aria-disabled="true"
          className="mt-4 inline-flex cursor-not-allowed items-center gap-2 self-start font-body text-sm tracking-widest text-[#E8B936] opacity-60 transition-opacity hover:opacity-70"
        >
          VIEW PROFILE
          <span aria-hidden="true">→</span>
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
