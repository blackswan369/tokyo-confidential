const WHATSAPP_GREEN = "#25D366";
const LINE_GREEN = "#06C755";
const TELEGRAM_BLUE = "#26A5E4";
const PHONE_NEON_BLUE = "#00BFFF";

type ContactMethod = {
  label: "WHATSAPP" | "LINE" | "PHONE" | "TELEGRAM";
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
};

function WhatsAppIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 175.216 175.552"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill={WHATSAPP_GREEN}
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="320" height="320" rx="72.14" fill={LINE_GREEN} />
      <path
        fill="#fff"
        d="M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z"
      />
      <path
        fill={LINE_GREEN}
        d="M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2,2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z"
      />
      <path
        fill={LINE_GREEN}
        d="M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2,2v46.53h0v0a2,2,0,0,0,2,2h30Z"
      />
      <rect
        x="128.73"
        y="121.85"
        width="11.64"
        height="50.64"
        rx="2.04"
        fill={LINE_GREEN}
      />
      <path
        fill={LINE_GREEN}
        d="M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill={PHONE_NEON_BLUE}
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="telegram-icon-gradient"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="99.258%"
        >
          <stop offset="0%" stopColor="#2AABEE" />
          <stop offset="100%" stopColor="#229ED9" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle
          cx="64"
          cy="64"
          r="64"
          fill="url(#telegram-icon-gradient)"
          fillRule="nonzero"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M28.9700376,63.3244248 C47.6273373,55.1957357 60.0684594,49.8368063 66.2934036,47.2476366 C84.0668845,39.855031 87.7600616,38.5708563 90.1672227,38.528 C90.6966555,38.5191258 91.8804274,38.6503351 92.6472251,39.2725385 C93.294694,39.7979149 93.4728387,40.5076237 93.5580865,41.0057381 C93.6433345,41.5038525 93.7494885,42.63857 93.6651041,43.5252052 C92.7019529,53.6451182 88.5344133,78.2034783 86.4142057,89.5379542 C85.5170662,94.3339958 83.750571,95.9420841 82.0403991,96.0994568 C78.3237996,96.4414641 75.5015827,93.6432685 71.9018743,91.2836143 C66.2690414,87.5912212 63.0868492,85.2926952 57.6192095,81.6896017 C51.3004058,77.5256038 55.3966232,75.2369981 58.9976911,71.4967761 C59.9401076,70.5179421 76.3155302,55.6232293 76.6324771,54.2720454 C76.6721165,54.1030573 76.7089039,53.4731496 76.3346867,53.1405352 C75.9604695,52.8079208 75.4081573,52.921662 75.0095933,53.0121213 C74.444641,53.1403447 65.4461175,59.0880351 48.0140228,70.8551922 C45.4598218,72.6091037 43.1463059,73.4636682 41.0734751,73.4188859 C38.7883453,73.3695169 34.3926725,72.1268388 31.1249416,71.0646282 C27.1169366,69.7617838 23.931454,69.0729605 24.208838,66.8603276 C24.3533167,65.7078514 25.9403832,64.5292172 28.9700376,63.3244248 Z"
        />
      </g>
    </svg>
  );
}

const contactMethods: ContactMethod[] = [
  {
    label: "WHATSAPP",
    icon: <WhatsAppIcon />,
    href: "#",
  },
  {
    label: "LINE",
    icon: <LineIcon />,
    href: "https://line.me/ti/p/DUj4HSqfK2",
    external: true,
  },
  {
    label: "PHONE",
    icon: <PhoneIcon />,
    href: "tel:0362659181",
  },
  {
    label: "TELEGRAM",
    icon: <TelegramIcon />,
    href: "https://t.me/HP_TokyoConcierge",
    external: true,
  },
];

const contactMethodClassName =
  "flex h-[68px] w-full items-center rounded-2xl border border-[#D4AF37]/40 bg-[#141414] pl-5 pr-5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]";

function ContactMethodButton({ method }: { method: ContactMethod }) {
  const content = (
    <>
      <span className="inline-flex w-7 shrink-0 items-center justify-start">
        {method.icon}
      </span>
      <span className="flex-1 text-center font-body text-base font-medium leading-none text-white">
        {method.label}
      </span>
      <span className="w-7 shrink-0" aria-hidden="true" />
    </>
  );

  if (method.href) {
    return (
      <a
        href={method.href}
        className={contactMethodClassName}
        {...(method.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={contactMethodClassName}>
      {content}
    </button>
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
          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
            {contactMethods.map((method) => (
              <ContactMethodButton key={method.label} method={method} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
