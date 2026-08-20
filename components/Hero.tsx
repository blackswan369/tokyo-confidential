import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[92vh] md:h-[100vh]">
      <Image
        src="/images/hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[108%_center]"
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,11,11,0.78)] via-[rgba(11,11,11,0.48)] to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-8 md:px-10 lg:px-12">
        <div className="max-w-[560px] translate-y-4 md:translate-y-6">
          <h1 className="max-w-[520px] font-heading text-[56px] font-bold leading-[110%] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] md:text-[56px]">
          Experience Tokyo Like Never Before
          </h1>

          <p className="mt-7 max-w-[480px] font-body text-[18px] leading-[160%] text-[#D6D6D6] drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)] md:mt-8 md:text-[20px]">
            Discover the real Tokyo with trusted local companions
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5 md:mt-12">
            <a
              href="#find-your-match"
              className="inline-flex h-[60px] min-w-[180px] items-center justify-center rounded-[999px] bg-[#D4AF37] px-8 font-body text-base font-medium text-[#0B0B0B]"
            >
              Find Your Match
            </a>

            <a
              href="#how-it-works"
              className="inline-flex h-[60px] min-w-[180px] items-center justify-center rounded-[999px] border border-white px-8 font-body text-base font-medium text-white"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
