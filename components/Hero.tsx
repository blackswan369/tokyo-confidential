import Image from "next/image";

export function Hero() {
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

      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-8 max-md:items-start max-md:pt-[72px] md:px-10 lg:px-12">
        <div className="max-w-[560px] max-md:translate-y-0 md:translate-y-6">
          <h1 className="max-w-[520px] font-heading text-[48px] font-bold leading-[110%] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] md:text-[56px]">
          Experience Tokyo Like Never Before
          </h1>

          <p className="mt-7 max-w-[480px] font-body text-[18px] leading-[160%] text-[#D6D6D6] drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)] md:mt-8 md:text-[20px]">
            Discover the real Tokyo with trusted local companions
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 max-md:flex-nowrap md:mt-12 md:gap-5">
            <a
              href="#companions"
              className="inline-flex h-[52px] items-center justify-center rounded-[999px] bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-5 font-body text-base font-medium text-[#0B0B0B] md:h-[60px] md:min-w-[180px] md:px-8"
            >
              Find Your Match
            </a>

            <a
              href="#how-it-works"
              className="inline-flex h-[52px] items-center justify-center rounded-[999px] border border-white px-5 font-body text-base font-medium text-white md:h-[60px] md:min-w-[180px] md:px-8"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
