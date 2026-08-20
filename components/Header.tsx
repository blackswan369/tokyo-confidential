"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TokyoTowerAccent } from "./TokyoTowerAccent";

const navItems = ["Companions", "How It Works", "Reviews", "FAQ"] as const;

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[96px] transition-colors duration-300 ${
        scrolled ? "bg-[#0B0B0B]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-full max-w-[1440px] grid-cols-[1fr_auto] items-center px-8 py-3 md:grid-cols-[auto_1fr_auto] md:px-10 lg:px-12">
        <div className="flex shrink-0 items-center justify-start md:pr-10">
          <Link href="/" className="inline-flex shrink-0 items-center gap-4">
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

        <div className="hidden items-center justify-end md:flex">
          <a
            href="#find-your-match"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2.5 font-body text-sm font-medium text-[#0B0B0B]"
          >
            Find Your Match
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon />
        </button>
      </div>

      <div
        id="mobile-nav-menu"
        className={`fixed top-[96px] right-0 left-0 bg-[#0B0B0B] px-8 py-6 md:hidden ${
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
          href="#find-your-match"
          className="mt-6 inline-flex h-[60px] w-full items-center justify-center rounded-[999px] bg-[#D4AF37] px-8 font-body text-base font-medium text-[#0B0B0B]"
          onClick={closeMenu}
        >
          Find Your Match
        </a>
      </div>
    </header>
  );
}
