import Image from "next/image";

type HeroProps = {
  heroTitleLead: string;
  heroTitleAccent: string;
};

export function Hero({ heroTitleLead, heroTitleAccent }: HeroProps) {
  return (
    <section className="relative h-[92vh] max-md:overflow-hidden md:h-[100vh]">
      <Image
        src="/images/hero-background-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover max-md:object-[50%_52%] [filter:contrast(1.15)_saturate(1.28)_brightness(1.04)] md:hidden"
      />
      <Image
        src="/images/hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[108%_center] [filter:contrast(1.15)_saturate(1.28)_brightness(1.04)] md:block"
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] max-md:bg-[rgba(0,0,0,0.22)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,11,11,0.78)] via-[rgba(11,11,11,0.48)] to-transparent max-md:from-[rgba(11,11,11,0.55)] max-md:via-[rgba(11,11,11,0.30)]" />

      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-start px-8 max-md:items-start max-md:pt-[84px] md:px-10 lg:px-12">
        <div className="w-full max-w-[320px] text-left sm:max-w-[420px] md:max-w-[560px] md:translate-y-6">
          <h1 className="hero-headline max-w-[320px] font-heading text-[42px] font-bold leading-[110%] text-white sm:max-w-[380px] md:max-w-[520px] md:text-[56px]">
            <span className="drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
              {heroTitleLead}
            </span>
            <span className="hero-gold-gradient">{heroTitleAccent}</span>
          </h1>

          <div className="my-4 h-[2px] w-16 bg-[#D4AF37]" />

          <p className="max-w-[280px] text-left font-body text-[18px] leading-[160%] text-[#D6D6D6] drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)] sm:max-w-[360px] md:max-w-[480px] md:text-[20px]">
            Discover the real Tokyo with trusted local companions
          </p>

          <div className="mt-5 flex w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 md:mt-12">
            <a
              href="#companions"
              className="inline-flex h-[52px] w-[240px] shrink-0 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-5 font-body text-base font-medium text-[#0B0B0B] box-border md:h-[60px] md:w-auto md:min-w-[180px] md:px-8"
            >
              Find Your Match
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex h-[52px] w-[240px] shrink-0 items-center justify-center gap-2 rounded-full border border-[#D4AF37] bg-transparent px-5 font-body text-base font-medium text-[#D4AF37] box-border md:h-[60px] md:w-auto md:min-w-[180px] md:px-8"
            >
              How It Works
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
