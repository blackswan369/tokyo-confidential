const GOLD = "#D4AF37";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ContactIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 4H17.5C18.3 4 19 4.7 19 5.5V18.5C19 19.3 18.3 20 17.5 20H6.5C5.7 20 5 19.3 5 18.5V5.5C5 4.7 5.7 4 6.5 4Z"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 8H15M9 12H15M9 16H12"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CompanionIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3" stroke={GOLD} strokeWidth="1.5" />
      <path
        d="M5 19C5.8 16.2 8.6 14.5 12 14.5C15.4 14.5 18.2 16.2 19 19"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="6"
        width="14"
        height="13"
        rx="1.5"
        stroke={GOLD}
        strokeWidth="1.5"
      />
      <path
        d="M8 4V7M16 4V7M5 10H19"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.5 14.5L11 16L14.5 12.5"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 5L13.8 9.8L19 10.6L15.2 14.1L16.1 19.2L12 16.8L7.9 19.2L8.8 14.1L5 10.6L10.2 9.8L12 5Z"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const steps: Step[] = [
  {
    number: "01",
    title: "CONTACT US",
    description: "REACH OUT VIA WHATSAPP, LINE, OR PHONE.",
    icon: <ContactIcon />,
  },
  {
    number: "02",
    title: "CHOOSE YOUR COMPANION",
    description:
      "SELECT YOUR PREFERRED COMPANION WITH ASSISTANCE FROM OUR CONCIERGE.",
    icon: <CompanionIcon />,
  },
  {
    number: "03",
    title: "CONFIRM YOUR BOOKING",
    description: "FINALIzE THE SCHEDULE AND BOOKING DETAILS.",
    icon: <BookingIcon />,
  },
  {
    number: "04",
    title: "ENJOY YOUR EXPERIENCE",
    description: "MEET YOUR COMPANION AND ENJOY YOUR TOKYO EXPERIENCE.",
    icon: <ExperienceIcon />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0B0B0B] px-8 pt-12 pb-20 md:px-10 md:pt-14 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          HOW IT WORKS
        </h2>

        <div className="md:mx-auto md:w-[85%]">
          <div className="relative mt-12 md:mt-16">
            <div
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#D4AF37] md:block"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-[#D4AF37] md:hidden"
              aria-hidden="true"
            />

            <ol className="relative flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between md:gap-8">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="relative z-10 flex w-full max-w-[320px] flex-col items-center text-center md:max-w-none md:flex-1"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37] bg-[#0B0B0B]">
                    {step.icon}
                  </div>
                  <div className="relative z-10 w-full bg-[#0B0B0B] md:bg-transparent">
                    <span className="mt-4 block font-body text-sm font-medium leading-[140%] text-[#D4AF37]">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-body text-base font-medium leading-[140%] text-[#D4AF37]">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[280px] font-body text-sm leading-[160%] text-[#D6D6D6] md:max-w-none md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
