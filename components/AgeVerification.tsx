"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ageVerified";
const EXIT_URL = "https://www.google.com";

export function AgeVerification() {
  const [needsVerification, setNeedsVerification] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    setNeedsVerification(localStorage.getItem(STORAGE_KEY) !== "true");
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setNeedsVerification(false);
  };

  const handleDecline = () => {
    window.location.href = EXIT_URL;
  };

  if (needsVerification !== true) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-verification-title"
    >
      <div className="w-full max-w-md rounded-sm border border-white/10 bg-[#0A0A0A] p-8 md:p-12">
        <p className="text-center font-body text-xs uppercase tracking-[0.2em] text-[#A0A0A0]">
          HENTAI PARADISE TOKYO
        </p>
        <p className="mt-6 text-center font-body text-[10px] uppercase tracking-widest text-[#E8B936]">
          RESTRICTED ACCESS
        </p>
        <h2
          id="age-verification-title"
          className="mt-3 text-center font-heading text-3xl leading-snug text-white md:text-4xl"
        >
          Welcome to an exclusive VIP experience.
        </h2>
        <p className="mt-4 text-center font-body text-sm text-[#A0A0A0]">
          Access to our private services is strictly reserved for guests 18
          years of age or older.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <button
            type="button"
            onClick={handleConfirm}
            className="inline-flex h-[52px] w-full items-center justify-center rounded-sm bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-6 font-body text-xs font-bold uppercase tracking-widest text-[#0B0B0B]"
          >
            I AM 18 OR OLDER
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="w-full font-body text-xs uppercase tracking-widest text-[#A0A0A0] transition-colors duration-300 hover:text-white"
          >
            EXIT THIS WEBSITE
          </button>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-[10px] leading-relaxed text-[#666666]">
          By proceeding, you acknowledge that you are of legal age and consent
          to viewing adult-oriented content.
        </p>
      </div>
    </div>
  );
}
