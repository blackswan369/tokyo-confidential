import { getFeaturedCompanions } from "@/lib/companions";
import { FeaturedCompanionsMarquee } from "@/components/FeaturedCompanionsMarquee";
import type { Locale } from "@/i18n-config";
import type { FeaturedCompanionsDictionary } from "@/types/dictionary";

type FeaturedCompanionsProps = {
  dict: FeaturedCompanionsDictionary;
  lang: Locale;
};

export async function FeaturedCompanions({ dict, lang }: FeaturedCompanionsProps) {
  const companions = await getFeaturedCompanions();

  return (
    <section id="companions" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          {dict.title}
        </h2>

        <div className="md:mx-auto md:w-[85%]">
          <FeaturedCompanionsMarquee companions={companions} dict={dict} lang={lang} />
        </div>
      </div>
    </section>
  );
}
