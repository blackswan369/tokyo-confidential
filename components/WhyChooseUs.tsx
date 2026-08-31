import type { WhyChooseUsDictionary } from "@/types/dictionary";

type FeatureAccent = "green" | "gold";

function ShieldCheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 4L26 8V15C26 21 21.5 26.5 16 28C10.5 26.5 6 21 6 15V8L16 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16L14.5 19L21 12.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeCheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="9"
        width="18"
        height="14"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle cx="16" cy="15" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M12 23V25C12 26.1 12.9 27 14 27H18C19.1 27 20 26.1 20 25V23"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5 19L14 21.5L20.5 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon({ color }: { color: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 14V8H14L24 18L18 24L8 14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.5" fill={color} />
    </svg>
  );
}

function ReceiptIcon({ color }: { color: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 6H22V26L19 24L16 26L13 24L10 26V6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 12H20M14 16H20M14 20H17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScaleIcon({ color }: { color: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 6V26M10 8H22M8 12L12 20H20L24 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H24"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const GOLD = "#D4AF37";
const GREEN = "#22C55E";

const FEATURE_ICONS = [
  <ShieldCheckIcon key="shield" color={GREEN} />,
  <BadgeCheckIcon key="badge" color={GREEN} />,
  <TagIcon key="tag" color={GOLD} />,
  <ReceiptIcon key="receipt" color={GOLD} />,
  <ScaleIcon key="scale" color={GOLD} />,
];

const FEATURE_ACCENTS: FeatureAccent[] = [
  "green",
  "green",
  "gold",
  "gold",
  "gold",
];

type WhyChooseUsProps = {
  dict: WhyChooseUsDictionary;
};

export function WhyChooseUs({ dict }: WhyChooseUsProps) {
  return (
    <section className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          {dict.title}
        </h2>

        <div className="md:mx-auto md:w-[85%]">
          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-5 md:gap-8">
            {dict.features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div
                  className={`mb-4 inline-flex shrink-0 ${
                    FEATURE_ACCENTS[index] === "green"
                      ? "[filter:drop-shadow(0_0_5px_rgba(34,197,94,0.60))_drop-shadow(0_0_12px_rgba(34,197,94,0.32))]"
                      : "[filter:drop-shadow(0_0_5px_rgba(212,175,55,0.60))_drop-shadow(0_0_12px_rgba(212,175,55,0.32))]"
                  }`}
                >
                  {FEATURE_ICONS[index]}
                </div>
                <h3 className="font-body text-base font-medium leading-[140%] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-[160%] text-[#D6D6D6] md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
