import type { PricingDictionary } from "@/types/dictionary";

type CourseRate = {
  duration: string;
  price: string;
};

type CourseTier = {
  label: string;
  subtitle: string;
  rates: CourseRate[];
  underlineClass: string;
  priceClass: string;
};

type TransportZone = {
  fee: string;
  areas: string;
};

type PricingProps = {
  dict: PricingDictionary;
};

const SCROLLBAR_HIDDEN =
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const GOLD_GRADIENT =
  "bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)]";

const GOLD_PRICES = ["¥35,000", "¥45,000", "¥55,000", "¥20,000"] as const;
const DIAMOND_PRICES = ["¥40,000", "¥50,000", "¥60,000", "¥25,000"] as const;

function buildCourseTiers(dict: PricingDictionary): CourseTier[] {
  const durations = [
    dict.duration_60,
    dict.duration_90,
    dict.duration_120,
    dict.duration_ext,
  ];

  return [
    {
      label: "GOLD",
      subtitle: dict.tier_gold_subtitle,
      underlineClass: GOLD_GRADIENT,
      priceClass: "text-[#E8B936]",
      rates: durations.map((duration, index) => ({
        duration,
        price: GOLD_PRICES[index],
      })),
    },
    {
      label: "DIAMOND",
      subtitle: dict.tier_diamond_subtitle,
      underlineClass: "bg-cyan-400",
      priceClass: "text-cyan-400",
      rates: durations.map((duration, index) => ({
        duration,
        price: DIAMOND_PRICES[index],
      })),
    },
    {
      label: "VIP",
      subtitle: dict.tier_vip_subtitle,
      underlineClass: "bg-orange-400",
      priceClass: "text-orange-400",
      rates: durations.map((duration) => ({
        duration,
        price: dict.ask,
      })),
    },
  ];
}

function CourseRateCard({
  tier,
  className = "",
}: {
  tier: CourseTier;
  className?: string;
}) {
  return (
    <article
      className={`rounded-sm border border-white/10 bg-[#0A0A0A] p-5 md:p-8 ${className}`}
    >
      <div className="text-center">
        <p className="font-body text-xs font-medium uppercase tracking-widest text-[#A0A0A0]">
          {tier.subtitle}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-bold uppercase text-white md:text-3xl">
          {tier.label}
        </h3>
        <div
          className={`mx-auto mt-3 h-px w-12 ${tier.underlineClass}`}
          aria-hidden="true"
        />
      </div>
      <ul className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
        {tier.rates.map((rate) => (
          <li
            key={rate.duration}
            className="flex items-center justify-between border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0 md:pb-3"
          >
            <span className="font-body text-sm font-medium uppercase tracking-wide text-[#D6D6D6]">
              {rate.duration}
            </span>
            <span
              className={`font-body text-sm font-medium md:text-base ${tier.priceClass}`}
            >
              {rate.price}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TransportRow({ zone }: { zone: TransportZone }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 py-3 last:border-0">
      <span className="font-body text-sm leading-snug text-[#D6D6D6] md:text-base">
        {zone.areas}
      </span>
      <span className="shrink-0 font-body text-sm font-medium text-[#E8B936] md:text-base">
        {zone.fee}
      </span>
    </div>
  );
}

export function Pricing({ dict }: PricingProps) {
  const courseTiers = buildCourseTiers(dict);

  return (
    <section
      id="pricing"
      className="bg-[#0B0B0B] px-8 py-14 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          {dict.title}
        </h2>

        <div className="mx-auto mb-8 mt-6 max-w-[720px] text-center md:mt-8">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-[#E8B936]">
            {dict.tagline}
          </p>
          <p className="mt-3 font-body text-xs leading-relaxed text-gray-400 md:text-sm">
            {dict.yen_note}
          </p>
        </div>

        <div className="md:mx-auto md:w-[85%]">
          <div className="mt-8 md:mt-16">
            <h3 className="text-center font-body text-sm font-medium uppercase tracking-widest text-[#D6D6D6]">
              {dict.course_rates_title}
            </h3>
            <div
              className={`mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-8 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 ${SCROLLBAR_HIDDEN}`}
            >
              {courseTiers.map((tier) => (
                <CourseRateCard
                  key={tier.label}
                  tier={tier}
                  className="w-[85vw] shrink-0 snap-center md:w-auto md:shrink"
                />
              ))}
            </div>
            <p className="mt-3 text-center font-body text-[10px] uppercase tracking-widest text-gray-500 md:hidden">
              {dict.swipe_hint}
            </p>
            <p className="mx-auto mt-5 max-w-[720px] text-center font-body text-sm leading-[160%] text-[#A0A0A0] md:mt-8 md:text-base">
              {dict.tiers_note}
            </p>
          </div>

          <div className="mt-10 md:mt-20">
            <h3 className="text-center font-body text-sm font-medium uppercase tracking-widest text-[#D6D6D6]">
              {dict.transportation_title}
            </h3>
            <p className="mt-2 text-center font-body text-xs uppercase tracking-wide text-[#666666] md:mt-3">
              {dict.transportation_subtitle}
            </p>
            <div className="mt-5 rounded-sm border border-white/10 bg-[#0A0A0A] p-4 md:mt-8 md:p-6">
              {dict.transport_zones.map((zone) => (
                <TransportRow key={zone.fee + zone.areas} zone={zone} />
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-[720px] text-center font-body text-sm leading-[160%] text-[#A0A0A0] md:mt-8 md:text-base">
              {dict.transportation_note}
            </p>
          </div>

          <div className="mt-10 md:mt-20">
            <h3 className="text-center font-body text-sm font-medium uppercase tracking-widest text-[#D6D6D6]">
              {dict.additional_info_title}
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-8">
              <div className="rounded-sm border border-white/10 bg-[#0A0A0A] p-5 md:p-8">
                <p className="font-body text-xs font-medium uppercase tracking-widest text-[#D6D6D6]">
                  {dict.love_hotel_title}
                </p>
                <p className="mt-3 font-body text-sm leading-[160%] text-[#A0A0A0] md:text-base">
                  {dict.love_hotel_body}
                </p>
              </div>
              <div className="rounded-sm border border-white/10 bg-[#0A0A0A] p-5 md:p-8">
                <p className="font-body text-xs font-medium uppercase tracking-widest text-[#D6D6D6]">
                  {dict.payment_method_title}
                </p>
                <p className="mt-2 font-body text-sm leading-[160%] text-white md:mt-3 md:text-base">
                  {dict.payment_cash}
                </p>
                <p className="mt-2 font-body text-sm leading-[160%] text-[#A0A0A0] md:text-base">
                  {dict.payment_card_note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
