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

const SCROLLBAR_HIDDEN =
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const GOLD_GRADIENT =
  "bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)]";

const courseTiers: CourseTier[] = [
  {
    label: "GOLD",
    subtitle: "Standard",
    underlineClass: GOLD_GRADIENT,
    priceClass: "text-[#E8B936]",
    rates: [
      { duration: "60MIN", price: "¥35,000" },
      { duration: "90MIN", price: "¥45,000" },
      { duration: "120MIN", price: "¥55,000" },
      { duration: "EXT (30m)", price: "¥20,000" },
    ],
  },
  {
    label: "DIAMOND",
    subtitle: "Premium",
    underlineClass: "bg-cyan-400",
    priceClass: "text-cyan-400",
    rates: [
      { duration: "60MIN", price: "¥40,000" },
      { duration: "90MIN", price: "¥50,000" },
      { duration: "120MIN", price: "¥60,000" },
      { duration: "EXT (30m)", price: "¥25,000" },
    ],
  },
  {
    label: "VIP",
    subtitle: "Exclusive",
    underlineClass: "bg-orange-400",
    priceClass: "text-orange-400",
    rates: [
      { duration: "60MIN", price: "ASK" },
      { duration: "90MIN", price: "ASK" },
      { duration: "120MIN", price: "ASK" },
      { duration: "EXT (30m)", price: "ASK" },
    ],
  },
];

const transportZones: TransportZone[] = [
  { fee: "¥2,000", areas: "Shinjuku" },
  {
    fee: "¥3,000",
    areas: "Shibuya, Bunkyo, Nakano, Toshima, Chiyoda",
  },
  { fee: "¥4,000", areas: "Meguro, Minato, Chuo, Taito (Ueno, Asakusa), Shinagawa" },
  { fee: "¥5,000", areas: "Kita, Suginami, Arakawa, Sumida" },
  {
    fee: "¥6,000",
    areas:
      "Ota (Haneda Airport), Setagaya, Koto (Odaiba), Nerima, Itabashi, Adachi, Katsushika, Edogawa",
  },
  {
    fee: "¥10,000",
    areas:
      "Yokohama, Kawasaki, Tachikawa, Machida, Makuhari, Maihama (Tokyo Disneyland)",
  },
  { fee: "ASK", areas: "Narita, Yokosuka, Omiya" },
];

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

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#0B0B0B] px-8 py-14 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          PRICING
        </h2>

        <div className="mx-auto mb-8 mt-6 max-w-[720px] text-center md:mt-8">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-[#E8B936]">
            EXPERIENCE PREMIUM AT EXCEPTIONAL VALUE
          </p>
          <p className="mt-3 font-body text-xs leading-relaxed text-gray-400 md:text-sm">
            Take advantage of the historic weak Yen. (e.g., ¥35,000 is
            approximately $230 USD / €215 EUR).
          </p>
        </div>

        <div className="md:mx-auto md:w-[85%]">
          {/* Section A: Course Rates */}
          <div className="mt-8 md:mt-16">
            <h3 className="text-center font-body text-sm font-medium uppercase tracking-widest text-[#D6D6D6]">
              COURSE RATES
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
              ← SWIPE TO EXPLORE TIERS →
            </p>
            <p className="mx-auto mt-5 max-w-[720px] text-center font-body text-sm leading-[160%] text-[#A0A0A0] md:mt-8 md:text-base">
              All companions start at Gold. Diamond status is earned through
              outstanding guest reviews...
            </p>
          </div>

          {/* Section B: Transportation Fee */}
          <div className="mt-10 md:mt-20">
            <h3 className="text-center font-body text-sm font-medium uppercase tracking-widest text-[#D6D6D6]">
              TRANSPORTATION FEE
            </h3>
            <p className="mt-2 text-center font-body text-xs uppercase tracking-wide text-[#666666] md:mt-3">
              Delivery to your location
            </p>
            <div className="mt-5 rounded-sm border border-white/10 bg-[#0A0A0A] p-4 md:mt-8 md:p-6">
              {transportZones.map((zone) => (
                <TransportRow key={zone.fee + zone.areas} zone={zone} />
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-[720px] text-center font-body text-sm leading-[160%] text-[#A0A0A0] md:mt-8 md:text-base">
              Fees reflect travel time, traffic conditions, and accessibility—not
              distance alone.
            </p>
          </div>

          {/* Section C: Additional Info */}
          <div className="mt-10 md:mt-20">
            <h3 className="text-center font-body text-sm font-medium uppercase tracking-widest text-[#D6D6D6]">
              ADDITIONAL INFO
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-8">
              <div className="rounded-sm border border-white/10 bg-[#0A0A0A] p-5 md:p-8">
                <p className="font-body text-xs font-medium uppercase tracking-widest text-[#D6D6D6]">
                  THE LOVE HOTEL EXPERIENCE
                </p>
                <p className="mt-3 font-body text-sm leading-[160%] text-[#A0A0A0] md:text-base">
                  Japanese love hotels offer ultimate privacy, spacious rooms,
                  and luxurious baths. They uniquely offer affordable &quot;Rest&quot;
                  (Short Stay) rates for just a few hours rather than a full
                  overnight stay, making them a highly recommended option for
                  your absolute comfort and discretion.
                </p>
              </div>
              <div className="rounded-sm border border-white/10 bg-[#0A0A0A] p-5 md:p-8">
                <p className="font-body text-xs font-medium uppercase tracking-widest text-[#D6D6D6]">
                  Payment Method
                </p>
                <p className="mt-2 font-body text-sm leading-[160%] text-white md:mt-3 md:text-base">
                  CASH ONLY (Japanese Yen).
                </p>
                <p className="mt-2 font-body text-sm leading-[160%] text-[#A0A0A0] md:text-base">
                  *Credit card payments will be accepted soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
