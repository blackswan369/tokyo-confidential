import Link from "next/link";
import type { CompanionProfile } from "@/data/companions";
import type { Locale } from "@/i18n-config";
import type { CompanionProfileDictionary } from "@/types/dictionary";
import { CompanionGallery } from "@/components/CompanionGallery";

type CompanionProfileViewProps = {
  companion: CompanionProfile;
  dict: CompanionProfileDictionary;
  lang: Locale;
};

type DetailRow = {
  label: string;
  value: string;
};

function CallNowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
      />
    </svg>
  );
}

export function CompanionProfileView({
  companion,
  dict,
  lang,
}: CompanionProfileViewProps) {
  const detailRows: DetailRow[] = [
    companion.height ? { label: dict.height, value: companion.height } : null,
    companion.languages
      ? { label: dict.languages, value: companion.languages }
      : null,
    companion.interests
      ? { label: dict.interests, value: companion.interests }
      : null,
    companion.personality
      ? { label: dict.personality, value: companion.personality }
      : null,
    companion.services
      ? { label: dict.services, value: companion.services }
      : null,
  ].filter((row): row is DetailRow => row !== null);

  return (
    <main className="bg-[#0B0B0B] px-8 pb-20 pt-28 md:px-10 md:pb-24 md:pt-36 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <Link
          href={`/${lang}#companions`}
          className="inline-flex items-center gap-2 font-body text-sm tracking-widest text-[#D6D6D6] transition-colors hover:text-[#D4AF37]"
        >
          <span aria-hidden="true">←</span>
          {dict.back_to_companions}
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16 xl:gap-20">
          <CompanionGallery
            mainImage={companion.image}
            gallery={companion.gallery}
            name={companion.name}
            portraitAltSuffix={dict.portrait_alt_suffix}
            galleryAriaLabel={dict.gallery_aria_label}
          />

          <div className="flex flex-col">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                {dict.profile_label}
              </p>
              <h1 className="mt-3 font-heading text-[40px] font-bold leading-[110%] text-white md:text-[52px]">
                {companion.name}
                <span className="ml-3 font-body text-2xl font-normal text-[#D6D6D6] md:text-3xl">
                  {companion.age}
                </span>
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-xs uppercase tracking-widest">
                {companion.available && (
                  <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1.5 text-[#E8B936]">
                    {dict.available_today}
                  </span>
                )}
                <span className="text-[#D6D6D6]">{companion.area}</span>
              </div>
            </div>

            {companion.introduction && (
              <div className="mt-10 rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] p-6 md:p-8">
                <h2 className="font-body text-xs font-medium uppercase tracking-[0.18em] text-[#D4AF37]">
                  {dict.introduction}
                </h2>
                <p className="mt-4 font-body text-base leading-[170%] text-[#D6D6D6]">
                  {companion.introduction}
                </p>
              </div>
            )}

            {detailRows.length > 0 && (
              <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] p-6 md:p-8">
                <h2 className="font-body text-xs font-medium uppercase tracking-[0.18em] text-[#D4AF37]">
                  {dict.details_heading}
                </h2>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {detailRows.map((row) => (
                    <div key={row.label}>
                      <dt className="font-body text-[10px] uppercase tracking-widest text-gray-500">
                        {row.label}
                      </dt>
                      <dd className="mt-1.5 font-body text-sm leading-[160%] text-white">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-10 rounded-2xl border border-[#2A2A2A] bg-gradient-to-br from-[#141414] to-[#0A0A0A] p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                {dict.cta_heading}
              </h2>
              <p className="mt-3 max-w-xl font-body text-sm leading-[170%] text-[#D6D6D6] md:text-base">
                {dict.cta_description}
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:0362659181"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-8 font-body text-sm font-medium text-[#0B0B0B] transition-opacity hover:opacity-90"
                >
                  <CallNowIcon />
                  {dict.book_companion}
                </a>
                <Link
                  href={`/${lang}#find-your-match`}
                  className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#D4AF37] px-8 font-body text-sm font-medium text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10"
                >
                  {dict.contact_concierge}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
