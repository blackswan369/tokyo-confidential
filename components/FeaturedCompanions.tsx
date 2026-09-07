import Link from "next/link";
import { CompanionCard } from "@/components/CompanionCard";
import { getFeaturedCompanions } from "@/lib/companions";
import type { Locale } from "@/i18n-config";
import type { FeaturedCompanionsDictionary } from "@/types/dictionary";

type FeaturedCompanionsProps = {
  dict: FeaturedCompanionsDictionary;
  lang: Locale;
};

export async function FeaturedCompanions({ dict, lang }: FeaturedCompanionsProps) {
  const companions = await getFeaturedCompanions();

  const displayedCompanions = companions
    .filter((c) => c.name.toLowerCase() !== "keiko")
    .slice(0, 8);

  return (
    <section id="companions" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          {dict.title}
        </h2>

        <div className="md:mx-auto md:w-[85%]">
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {displayedCompanions.map((companion) => (
              <div key={companion.id} className="min-w-0 col-span-1 w-full">
                <CompanionCard companion={companion} dict={dict} lang={lang} />
              </div>
            ))}
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
