import Image from "next/image";
import Link from "next/link";
import type { Companion } from "@/data/companions";
import type { Locale } from "@/i18n-config";
import type { FeaturedCompanionsDictionary } from "@/types/dictionary";

type CompanionCardProps = {
  companion: Companion;
  dict: FeaturedCompanionsDictionary;
  lang: Locale;
};

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
  dict,
}: {
  companion: Companion;
  isComingSoon: boolean;
  dict: FeaturedCompanionsDictionary;
}) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl">
      <Image
        src={companion.image}
        alt={
          isComingSoon
            ? dict.coming_soon_alt
            : `${companion.name} ${dict.portrait_alt_suffix}`
        }
        fill
        sizes="(max-width: 768px) 40vw, 280px"
        className="object-cover"
      />
    </div>
  );
}

function TeaserCompanionDetails({
  dict,
}: {
  dict: FeaturedCompanionsDictionary;
}) {
  return (
    <div className="flex flex-grow flex-col justify-between rounded-b-2xl border border-gray-800 bg-[#0A0A0A] px-4 py-4 md:px-5 md:py-5">
      <h3 className="font-body text-lg font-medium leading-[140%] text-white">
        <span className="uppercase tracking-widest text-[#E8B936]">
          {dict.coming_soon}
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

function RegularCompanionDetails({
  companion,
  dict,
  lang,
}: {
  companion: Companion;
  dict: FeaturedCompanionsDictionary;
  lang: Locale;
}) {
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
              <span className="text-[#E8B936]">{dict.available_today}</span>
              <span className="text-gray-500"> • </span>
            </>
          )}
          <span className="text-gray-400">{companion.area}</span>
        </p>
      </div>

      <Link
        href={`/${lang}/companions/${companion.id}`}
        className="mt-4 inline-flex items-center gap-2 self-start font-body text-sm tracking-widest text-[#E8B936] transition-opacity hover:opacity-80"
      >
        {dict.view_profile}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export function CompanionCard({ companion, dict, lang }: CompanionCardProps) {
  const isComingSoon = isComingSoonCompanion(companion);

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <CompanionImage
        companion={companion}
        isComingSoon={isComingSoon}
        dict={dict}
      />
      {isComingSoon ? (
        <TeaserCompanionDetails dict={dict} />
      ) : (
        <RegularCompanionDetails companion={companion} dict={dict} lang={lang} />
      )}
    </article>
  );
}
