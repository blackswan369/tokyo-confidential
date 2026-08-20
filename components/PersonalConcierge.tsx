const GOLD = "#D4AF37";

type ContactMethod = {
  label: "WHATSAPP" | "LINE" | "PHONE";
  icon: React.ReactNode;
};

function WhatsAppIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 6C11.03 6 7 10.03 7 15C7 16.55 7.38 18 8.05 19.28L7 24L11.85 22.98C13.08 23.59 14.49 24 16 24C20.97 24 25 19.97 25 15C25 10.03 20.97 6 16 6Z"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 13.5H19.5M12.5 16.5H17.5"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg
      width="32"
      height="32"
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
        rx="4"
        stroke={GOLD}
        strokeWidth="1.5"
      />
      <path
        d="M12 17H20M12 14H18"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.5 8H14L15.5 13.5L12.75 15.25C14.05 18.35 16.65 20.95 19.75 22.25L21.5 19.5L27 21V24.5C27 25.33 26.33 26 25.5 26C14.83 26 6 17.17 6 6.5C6 5.67 6.67 5 7.5 5H10.5V8Z"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contactMethods: ContactMethod[] = [
  {
    label: "WHATSAPP",
    icon: <WhatsAppIcon />,
  },
  {
    label: "LINE",
    icon: <LineIcon />,
  },
  {
    label: "PHONE",
    icon: <PhoneIcon />,
  },
];

function ContactCard({ method }: { method: ContactMethod }) {
  return (
    <article className="flex h-full w-full flex-col items-center rounded-2xl bg-[#0B0B0B] p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.35)] md:p-7">
      <div className="mb-5 inline-flex shrink-0">{method.icon}</div>
      <h3 className="font-body text-lg font-medium leading-[140%] text-white">
        {method.label}
      </h3>
      <div className="flex-1" />
      <button
        type="button"
        className="mt-6 inline-flex h-[60px] w-full items-center justify-center rounded-[999px] bg-[#D4AF37] px-8 font-body text-base font-medium text-[#0B0B0B] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
      >
        {method.label}
      </button>
    </article>
  );
}

export function PersonalConcierge() {
  return (
    <section
      id="find-your-match"
      className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          YOUR PERSONAL CONCIERGE
        </h2>
        <p className="mt-6 text-center font-heading text-[24px] font-bold leading-[110%] text-white md:mt-8 md:text-[28px]">
          READY TO FIND YOUR PERFECT COMPANION?
        </p>
        <p className="mx-auto mt-4 max-w-[640px] text-center font-body text-sm leading-[160%] text-[#D6D6D6] md:mt-5 md:text-base">
          OUR CONCIERGE TEAM IS AVAILABLE TO ANSWER YOUR QUESTIONS, RECOMMEND
          COMPANIONS, AND ASSIST WITH YOUR BOOKING FROM START TO FINISH.
        </p>

        <div className="md:mx-auto md:w-[85%]">
          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-8">
            {contactMethods.map((method) => (
              <ContactCard key={method.label} method={method} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
