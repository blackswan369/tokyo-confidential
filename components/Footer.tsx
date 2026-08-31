import Link from "next/link";
import { TokyoTowerAccent } from "./TokyoTowerAccent";
import type { Locale } from "@/i18n-config";
import type { FooterDictionary } from "@/types/dictionary";

const linkClassName =
  "inline-flex font-body text-base leading-[140%] text-[#D6D6D6] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]";

const staticClassName = "font-body text-base leading-[140%] text-[#D6D6D6]";

const headingClassName =
  "font-body text-xs font-medium uppercase tracking-wide text-[#D4AF37] md:text-sm";

type FooterProps = {
  dict: FooterDictionary;
  lang?: Locale;
};

function localizedHref(lang: Locale | undefined, hash: string): string {
  return lang ? `/${lang}${hash}` : hash;
}

export function Footer({ dict, lang }: FooterProps) {
  const homeHref = lang ? `/${lang}` : "/";

  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0B0B0B] px-8 pt-16 pb-10 md:px-10 md:pt-20 md:pb-12 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <p className={headingClassName}>{dict.company_heading}</p>
            <Link
              href={homeHref}
              className="mt-4 inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <span className="inline-flex shrink-0 translate-y-px items-center">
                <TokyoTowerAccent />
              </span>
              <span className="whitespace-nowrap font-body text-lg leading-none tracking-wide text-[#D4AF37]">
                {dict.brand_name}
              </span>
            </Link>
          </div>

          <div>
            <p className={headingClassName}>{dict.about_heading}</p>
            <div className="mt-4 flex flex-col items-start gap-3">
              <span className={staticClassName}>{dict.about_link}</span>
              <Link href={localizedHref(lang, "#faq")} className={linkClassName}>
                {dict.faq_link}
              </Link>
              <Link href={localizedHref(lang, "#companions")} className={linkClassName}>
                {dict.companions_link}
              </Link>
            </div>
          </div>

          <div>
            <p className={headingClassName}>{dict.contact_heading}</p>
            <div className="mt-4">
              <Link href={localizedHref(lang, "#find-your-match")} className={linkClassName}>
                {dict.contact_link}
              </Link>
            </div>
          </div>

          <div>
            <p className={headingClassName}>{dict.legal_heading}</p>
            <div className="mt-4">
              <span className={staticClassName}>{dict.legal_text}</span>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-[#2A2A2A] pt-8 text-center font-body text-sm leading-[140%] text-[#D6D6D6] md:mt-16">
          {dict.copyright}
        </p>
      </div>
    </footer>
  );
}
