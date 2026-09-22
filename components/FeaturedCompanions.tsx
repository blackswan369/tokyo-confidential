import Link from "next/link";
import { CompanionCard } from "@/components/CompanionCard";
import { getFeaturedCompanions } from "@/lib/companions";
import type { Locale } from "@/i18n-config";
import type { FeaturedCompanionsDictionary } from "@/types/dictionary";

type FeaturedCompanionsProps = {
  dict: FeaturedCompanionsDictionary;
  lang: Locale;
};

const HOMEPAGE_COMPANION_COUNT = 12;

const PRIORITY_NAMES = [
  "NAMI",
  "SAKI",
  "SUZU",
  "NAOMI",
  "RISA",
  "MOE",
  "YUKA",
];

function priorityRank(name: string): number {
  const index = PRIORITY_NAMES.indexOf(name.toUpperCase());
  return index === -1 ? PRIORITY_NAMES.length : index;
}

export async function FeaturedCompanions({ dict, lang }: FeaturedCompanionsProps) {
  const companions = await getFeaturedCompanions();

  const displayedCompanions = [...companions]
    .sort((a, b) => priorityRank(a.name) - priorityRank(b.name))
    .slice(0, HOMEPAGE_COMPANION_COUNT);

  return (
    <section id="companions" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          {dict.title}
        </h2>

        <p className="mt-4 text-center font-body text-xs font-medium uppercase tracking-widest text-orange-400">
          {dict.coverage_note}
        </p>

        <div className="md:mx-auto md:w-[85%]">
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {displayedCompanions.map((companion, index) => {
              const centersFinalRow =
                displayedCompanions.length % 4 === 2 &&
                index === displayedCompanions.length - 2;

              return (
                <div
                  key={companion.id}
                  className={`min-w-0 col-span-1 w-full${centersFinalRow ? " lg:col-start-2" : ""}`}
                >
                  <CompanionCard companion={companion} dict={dict} lang={lang} />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/companions`}
              className="inline-block text-sm uppercase tracking-widest text-gray-400 transition-colors hover:text-white"
            >
              VIEW ALL COMPANIONS &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
