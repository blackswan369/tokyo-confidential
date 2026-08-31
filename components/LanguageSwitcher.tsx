"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  defaultLocale,
  isValidLocale,
  type Locale,
} from "@/i18n-config";

const languages: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "zh", label: "中文" },
  { locale: "es", label: "ES" },
];

function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}`;
}

type LanguageSwitcherProps = {
  className?: string;
  onNavigate?: () => void;
};

export function LanguageSwitcher({
  className = "",
  onNavigate,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const pathnameLocale = pathname.split("/")[1];
  const activeLocale = isValidLocale(pathnameLocale)
    ? pathnameLocale
    : defaultLocale;

  return (
    <nav
      aria-label="Language selector"
      className={`inline-flex items-center gap-2 font-body text-sm tracking-[0.08em] ${className}`}
    >
      {languages.map((language, index) => {
        const isActive = activeLocale === language.locale;

        return (
          <span key={language.locale} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-[#666666]">
                /
              </span>
            ) : null}
            {isActive ? (
              <span
                className="font-medium text-[#D4AF37]"
                aria-current="true"
              >
                {language.label}
              </span>
            ) : (
              <Link
                href={getLocalizedPath(pathname, language.locale)}
                onClick={onNavigate}
                className="text-[#D6D6D6] transition-colors hover:text-white"
              >
                {language.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
