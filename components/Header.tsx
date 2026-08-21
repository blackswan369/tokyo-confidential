"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TokyoTowerAccent } from "./TokyoTowerAccent";

const navItems = ["Companions", "How It Works", "Reviews", "FAQ"] as const;

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
        fill="#FFFFFF"
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
      />
    </svg>
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
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const handleScroll = () => {
      const mobile = mobileQuery.matches;
      const threshold = mobile ? 40 : 0;
      setScrolled(window.scrollY > threshold);
    };

    const handleViewportChange = () => {
      setIsMobile(mobileQuery.matches);
      handleScroll();
    };

    handleViewportChange();
    window.addEventListener("scroll", handleScroll, { passive: true });
    mobileQuery.addEventListener("change", handleViewportChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const mobileOverlay = isMobile && !scrolled;

  return (
    <header
      className={`top-0 right-0 left-0 z-50 h-[58px] transition-colors duration-300 md:fixed md:h-[96px] ${
        mobileOverlay ? "absolute" : "fixed"
      } ${
        scrolled
          ? "bg-[#0B0B0B]"
          : "bg-transparent max-md:bg-gradient-to-b max-md:from-[rgba(11,11,11,0.55)] max-md:via-[rgba(11,11,11,0.2)] max-md:to-transparent"
      }`}
    >
      <div className="mx-auto grid h-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-4 py-1 md:grid-cols-[auto_1fr_auto] md:px-10 md:py-3 lg:px-12">
        <div className="flex min-w-0 items-center justify-start md:pr-10">
          <Link href="/" className="inline-flex min-w-0 shrink-0 items-center gap-2 md:gap-4">
            <span className="inline-flex shrink-0 translate-y-px items-center">
              <TokyoTowerAccent />
            </span>
            <span className="whitespace-nowrap font-body text-lg leading-none tracking-wide text-[#D4AF37]">
              Tokyo Confidential
            </span>
          </Link>
        </div>

        <nav className="hidden w-full min-w-0 flex-nowrap items-center justify-center gap-4 pr-4 md:flex lg:gap-7 lg:pr-6 xl:gap-10">
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

        <div className="hidden items-center justify-end gap-5 md:flex lg:gap-6">
          <span
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FF8A00_0%,#FF5A00_55%,#FF3D00_100%)] px-5 py-2.5 font-body text-sm font-medium text-white shadow-[0_0_8px_rgba(255,106,0,0.45),0_0_18px_rgba(255,90,0,0.22)]"
            aria-label="Call Now — phone number coming soon"
          >
            <CallNowPhoneIcon />
            Call Now
          </span>
          <a
            href="#companions"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-6 py-2.5 font-body text-sm font-medium text-[#0B0B0B]"
          >
            <SearchIcon size={17} />
            Find Your Match
          </a>
        </div>

        <div className="flex items-center justify-end gap-1.5 md:hidden">
          <span
            className="inline-flex h-[34px] shrink-0 items-center justify-center gap-1 rounded-full bg-[linear-gradient(135deg,#FF8A00_0%,#FF5A00_55%,#FF3D00_100%)] px-3 font-body text-xs font-medium leading-none text-white shadow-[0_0_8px_rgba(255,106,0,0.45),0_0_18px_rgba(255,90,0,0.22)]"
            aria-label="Call Now — phone number coming soon"
          >
            <CallNowPhoneIcon size={15} />
            Call Now
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={`absolute top-full right-0 left-0 bg-[#0B0B0B] px-8 py-6 md:hidden ${
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
