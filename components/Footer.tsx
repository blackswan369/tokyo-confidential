import Link from "next/link";
import { TokyoTowerAccent } from "./TokyoTowerAccent";

const linkClassName =
  "inline-flex font-body text-base leading-[140%] text-[#D6D6D6] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]";

const staticClassName = "font-body text-base leading-[140%] text-[#D6D6D6]";

const headingClassName =
  "font-body text-xs font-medium uppercase tracking-wide text-[#D4AF37] md:text-sm";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0B0B0B] px-8 pt-16 pb-10 md:px-10 md:pt-20 md:pb-12 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <p className={headingClassName}>COMPANY</p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <span className="inline-flex shrink-0 translate-y-px items-center">
                <TokyoTowerAccent />
              </span>
              <span className="whitespace-nowrap font-body text-lg leading-none tracking-wide text-[#D4AF37]">
                HENTAI PARADISE TOKYO
              </span>
            </Link>
          </div>

          <div>
            <p className={headingClassName}>ABOUT</p>
            <div className="mt-4 flex flex-col items-start gap-3">
              <span className={staticClassName}>ABOUT</span>
              <Link href="#faq" className={linkClassName}>
                FAQ
              </Link>
              <Link href="#companions" className={linkClassName}>
                COMPANIONS
              </Link>
            </div>
          </div>

          <div>
            <p className={headingClassName}>CONTACT</p>
            <div className="mt-4">
              <Link href="#find-your-match" className={linkClassName}>
                CONTACT
              </Link>
            </div>
          </div>

          <div>
            <p className={headingClassName}>LEGAL</p>
            <div className="mt-4">
              <span className={staticClassName}>LEGAL</span>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-[#2A2A2A] pt-8 text-center font-body text-sm leading-[140%] text-[#D6D6D6] md:mt-16">
          © HENTAI PARADISE TOKYO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
