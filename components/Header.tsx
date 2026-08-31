"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navItems = ["Companions", "Pricing", "How It Works", "Reviews", "FAQ"] as const;

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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`absolute top-0 right-0 left-0 z-50 h-[58px] transition-colors duration-300 xl:h-[96px] ${
        scrolled
          ? "bg-[#0B0B0B]"
          : "bg-transparent max-xl:bg-gradient-to-b max-xl:from-[rgba(11,11,11,0.55)] max-xl:via-[rgba(11,11,11,0.2)] max-xl:to-transparent"
      }`}
    >
      <div className="mx-auto h-full max-w-[1440px] xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center xl:gap-0 xl:px-12 xl:py-3">
        <div className="flex h-[58px] w-full items-center justify-between px-4 xl:hidden">
          {/* 左側: ロゴ */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="HENTAI PARADISE TOKYO home"
          >
            <Image
              src="/images/hentai-paradise-tokyo-logo.png"
              alt="HENTAI PARADISE TOKYO"
              width={1693}
              height={313}
              priority
              className="h-[40px] w-auto max-w-[200px] object-contain sm:max-w-[240px]"
            />
          </Link>

          {/* 右側: アクショングループ (Call Now + ハンバーガー) */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="tel:0362659181"
              className={`${callNowClassName} relative z-10 h-[34px] shrink-0 whitespace-nowrap px-3 text-xs leading-none`}
              aria-label="Call Now"
            >
              <CallNowPhoneIcon size={15} />
              Call Now
            </a>

            <button
              type="button"
              className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center text-[#D4AF37]"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        <div className="hidden min-w-0 items-center xl:flex xl:pr-4">
          <Link
            href="/"
            className="inline-flex min-h-0 min-w-0 shrink items-center"
            aria-label="HENTAI PARADISE TOKYO home"
          >
            <Image
              src="/images/hentai-paradise-tokyo-logo.png"
              alt="HENTAI PARADISE TOKYO"
              width={1693}
              height={313}
              priority
              className="h-auto max-h-[56px] w-auto max-w-[400px] object-contain object-left"
            />
          </Link>
        </div>

        <nav className="hidden w-full min-w-0 flex-nowrap items-center justify-center gap-4 pr-4 xl:flex xl:gap-10 xl:pr-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex flex-none font-body text-base font-medium text-white"
            >
              <span className="whitespace-nowrap">{item}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 xl:flex xl:gap-6">
          <LanguageSwitcher />
          <a
            href="tel:0362659181"
            className={`${callNowClassName} px-5 py-2.5 text-sm`}
            aria-label="Call Now"
          >
            <CallNowPhoneIcon />
            Call Now
          </a>
          <a
            href="#companions"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-6 py-2.5 font-body text-sm font-medium text-[#0B0B0B]"
          >
            <SearchIcon size={17} />
            Find Your Match
          </a>
        </div>

      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 top-[58px] z-40 xl:hidden"
          aria-label="Close menu"
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
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex font-body text-base font-medium text-white"
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="mt-6 border-t border-white/10 pt-6">
          <LanguageSwitcher onNavigate={closeMenu} />
        </div>
        <a
          href="#companions"
          className="mt-6 inline-flex h-[60px] w-full items-center justify-center gap-2 rounded-[999px] bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-8 font-body text-base font-medium text-[#0B0B0B]"
          onClick={closeMenu}
        >
          <SearchIcon size={15} />
          Find Your Match
        </a>
      </div>
    </header>
  );
}
