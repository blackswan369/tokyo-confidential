import Image from "next/image";
import type { Companion } from "@/data/companions";

function isComingSoonCompanion(companion: Companion): boolean {
  return (
    String(companion.name).toUpperCase().includes("COMING") ||
    String(companion.age) === "99" ||
    companion.age == 99
  );
}

function CompanionImage({
  companion,
  isComingSoon,
}: {
  companion: Companion;
  isComingSoon: boolean;
}) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl">
      <Image
        src={companion.image}
        alt={
          isComingSoon ? "Coming soon profile" : `${companion.name} portrait`
        }
        fill
        sizes="(max-width: 768px) 40vw, 280px"
        className="object-cover"
      />
    </div>
  );
}

function TeaserCompanionDetails() {
  return (
    <div className="flex flex-grow flex-col justify-between rounded-b-2xl border border-gray-800 bg-[#0A0A0A] px-4 py-4 md:px-5 md:py-5">
      <h3 className="font-body text-lg font-medium leading-[140%] text-white">
        <span className="uppercase tracking-widest text-[#E8B936]">
          COMING SOON
        </span>
      </h3>
      <p className="mt-2 pointer-events-none select-none text-transparent">
        STATUS DUMMY
      </p>
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="mt-4 border-transparent pointer-events-none select-none text-transparent"
      >
        BUTTON DUMMY
      </button>
    </div>
  );
}

function RegularCompanionDetails({ companion }: { companion: Companion }) {
  return (
    <div className="flex flex-grow flex-col justify-between rounded-b-2xl border border-gray-800 bg-[#0A0A0A] px-4 py-4 md:px-5 md:py-5">
      <div>
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
      </div>

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
  );
}

export function CompanionCard({ companion }: { companion: Companion }) {
  const isComingSoon = isComingSoonCompanion(companion);

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <CompanionImage companion={companion} isComingSoon={isComingSoon} />
      {isComingSoon ? (
        <TeaserCompanionDetails />
      ) : (
        <RegularCompanionDetails companion={companion} />
      )}
    </article>
  );
}
