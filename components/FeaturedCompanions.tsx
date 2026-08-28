import { getFeaturedCompanions } from "@/lib/companions";
import { FeaturedCompanionsMarquee } from "@/components/FeaturedCompanionsMarquee";

export async function FeaturedCompanions() {
  const companions = await getFeaturedCompanions();

  return (
    <section id="companions" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          FEATURED COMPANIONS
        </h2>

        <div className="md:mx-auto md:w-[85%]">
          <FeaturedCompanionsMarquee companions={companions} />
        </div>
      </div>
    </section>
  );
}
