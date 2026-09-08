"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { isValidLocale, type Locale } from "@/i18n-config";
import type { HeaderDictionary } from "@/types/dictionary";

type HeaderProps = {
  dict: HeaderDictionary;
  lang?: Locale;
  variant?: "overlay" | "solid";
};

function localizedHref(lang: Locale | undefined, hash: string): string {
  return lang ? `/${lang}${hash}` : hash;
}

type NavKey =
  | "nav_companions"
  | "nav_pricing"
  | "nav_how_it_works"
  | "nav_reviews"
  | "nav_faq";

const NAV_LINKS: ReadonlyArray<{ href: string; key: NavKey }> = [
  { href: "#companions", key: "nav_companions" },
  { href: "#pricing", key: "nav_pricing" },
  { href: "#how-it-works", key: "nav_how_it_works" },
  { href: "#reviews", key: "nav_reviews" },
  { href: "#faq", key: "nav_faq" },
];

function SearchIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="10.5" cy="10.5" r="6.5" stroke="#0B0B0B" strokeWidth="2" />
      <path
        d="M15.5 15.5L20 20"
        stroke="#0B0B0B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CallNowPhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

const callNowClassName =
  "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#D4AF37] bg-transparent font-body font-medium text-[#D4AF37]";

function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}`;
}

const LANGUAGE_OPTIONS: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: "en", label: "English" },
  { locale: "zh", label: "简体中文" },
  { locale: "zh-TW", label: "繁體中文" },
  { locale: "ko", label: "한국어" },
  { locale: "es", label: "Español" },
];

function GlobeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D6B45A"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function LanguageDropdownPanel({
  isOpen,
  onClose,
  pathname,
  variant = "mobile",
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  variant?: "mobile" | "desktop";
}) {
  const isDesktop = variant === "desktop";

  return (
    <div
      className={`absolute top-full z-50 flex flex-col rounded-md border border-white/10 shadow-2xl transition-all duration-300 ease-out ${
        isDesktop ? "left-1/2 mt-3 -translate-x-1/2" : "right-0 mt-2"
      } ${
        isDesktop
          ? "min-w-[180px] bg-[#0B0B0B]/95 p-3 backdrop-blur-md"
          : "min-w-[120px] bg-[#0B0B0B] p-2"
      } ${
        isOpen
          ? "visible pointer-events-auto opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      {LANGUAGE_OPTIONS.map(({ locale, label }) => (
        <Link
          key={locale}
          href={getLocalizedPath(pathname, locale)}
          onClick={onClose}
          className={`block w-full whitespace-nowrap text-left tracking-wide text-gray-400 ${
            isDesktop
              ? "rounded-sm px-6 py-2 text-base transition-all duration-300 hover:bg-white/5 hover:text-white"
              : "px-4 py-2 text-sm transition-colors hover:text-white"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header({
  dict,
  lang,
  variant = "overlay",
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(variant === "solid");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuMobileRef = useRef<HTMLDivElement>(null);
  const langMenuDesktopRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const homeHref = lang ? `/${lang}` : "/";

  useEffect(() => {
    if (variant === "solid") {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 1279px)");

    const handleScroll = () => {
      const mobile = mobileQuery.matches;
      const threshold = mobile ? 40 : 0;
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    mobileQuery.addEventListener("change", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileQuery.removeEventListener("change", handleScroll);
    };
  }, [variant]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const insideMobile = langMenuMobileRef.current?.contains(target);
      const insideDesktop = langMenuDesktopRef.current?.contains(target);

      if (!insideMobile && !insideDesktop) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navHref = (hash: string) => localizedHref(lang, hash);

  return (
    <header
      className={`${
        variant === "solid" ? "sticky" : "absolute"
      } top-0 right-0 left-0 z-50 h-[58px] transition-colors duration-300 xl:h-[96px] ${
        scrolled || variant === "solid"
          ? "bg-[#0B0B0B]"
          : "bg-transparent max-xl:bg-gradient-to-b max-xl:from-[rgba(11,11,11,0.55)] max-xl:via-[rgba(11,11,11,0.2)] max-xl:to-transparent"
      }`}
    >
      <div className="mx-auto h-full max-w-[1440px] xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center xl:gap-0 xl:px-12 xl:py-3">
        <div className="flex h-[58px] w-full items-center justify-between px-4 xl:hidden">
          {/* 左側: ロゴ */}
          <Link
            href={homeHref}
            className="flex shrink-0 items-center"
            aria-label={dict.home_aria_label}
          >
            <Image
              src="/images/hentai-paradise-tokyo-logo.png"
              alt={dict.logo_alt}
              width={1693}
              height={313}
              priority
              className="h-[40px] w-auto max-w-[200px] object-contain sm:max-w-[240px]"
            />
          </Link>

          {/* 右側: アクショングループ (Call Now + Globe + ハンバーガー) */}
          <div
            ref={langMenuMobileRef}
            className="relative z-10 flex shrink-0 items-center gap-3"
          >
            <a
              href="tel:0362659181"
              className={`${callNowClassName} relative h-[34px] shrink-0 whitespace-nowrap px-3 text-xs leading-none`}
              aria-label={dict.call_now}
            >
              <CallNowPhoneIcon size={15} />
              {dict.call_now}
            </a>

            <button
              type="button"
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setMenuOpen(false);
              }}
              className="flex items-center justify-center p-1.5 transition-opacity hover:opacity-80 active:opacity-60"
              aria-label="Change Language"
              aria-expanded={isLangOpen}
            >
              <GlobeIcon />
            </button>

            <button
              type="button"
              className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center text-[#D4AF37] -ml-2"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? dict.close_menu : dict.open_menu}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon />
            </button>

            {/* Language Dropdown — anchored to action group right edge */}
            <LanguageDropdownPanel
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              pathname={pathname}
            />
          </div>
        </div>

        <div className="hidden min-w-0 items-center xl:flex xl:pr-4">
          <Link
            href={homeHref}
            className="inline-flex min-h-0 min-w-0 shrink items-center"
            aria-label={dict.home_aria_label}
          >
            <Image
              src="/images/hentai-paradise-tokyo-logo.png"
              alt={dict.logo_alt}
              width={1693}
              height={313}
              priority
              className="h-auto max-h-[56px] w-auto max-w-[400px] object-contain object-left"
            />
          </Link>
        </div>

        <nav className="hidden w-full min-w-0 flex-nowrap items-center justify-center gap-4 pr-4 xl:flex xl:gap-10 xl:pr-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={navHref(item.href)}
              className="inline-flex flex-none font-body text-base font-medium text-white"
            >
              <span className="whitespace-nowrap">{dict[item.key]}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 xl:flex">
          <a
            href="tel:0362659181"
            className={`${callNowClassName} px-5 py-2.5 text-sm`}
            aria-label={dict.call_now}
          >
            <CallNowPhoneIcon />
            {dict.call_now}
          </a>
          <a
            href={navHref("#companions")}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-6 py-2.5 font-body text-sm font-medium text-[#0B0B0B]"
          >
            <SearchIcon size={17} />
            {dict.find_your_match}
          </a>
          <div ref={langMenuDesktopRef} className="inline-flex shrink-0">
            <div className="relative inline-flex">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="inline-flex items-center justify-center p-2 transition-opacity hover:opacity-80 active:opacity-60"
                aria-label="Change Language"
                aria-expanded={isLangOpen}
              >
                <GlobeIcon />
              </button>
              <LanguageDropdownPanel
                isOpen={isLangOpen}
                onClose={() => setIsLangOpen(false)}
                pathname={pathname}
                variant="desktop"
              />
            </div>
          </div>
        </div>

      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 top-[58px] z-40 xl:hidden"
          aria-label={dict.close_menu}
          onClick={closeMenu}
        />
      )}

      <div
        id="mobile-nav-menu"
        className={`absolute top-full right-0 left-0 z-50 bg-[#0B0B0B] px-8 py-6 xl:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-5">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={navHref(item.href)}
              className="inline-flex font-body text-base font-medium text-white"
              onClick={closeMenu}
            >
              {dict[item.key]}
            </a>
          ))}
        </nav>
        <div className="mt-6 border-t border-white/10 pt-6">
          <LanguageSwitcher onNavigate={closeMenu} />
        </div>
        <a
          href={navHref("#companions")}
          className="mt-6 inline-flex h-[60px] w-full items-center justify-center gap-2 rounded-[999px] bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-8 font-body text-base font-medium text-[#0B0B0B]"
          onClick={closeMenu}
        >
          <SearchIcon size={15} />
          {dict.find_your_match}
        </a>
      </div>
    </header>
  );
}
