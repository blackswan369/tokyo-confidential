"use client";

import { useId, useState } from "react";

const AMBER = "#FF9D00";

export type AdditionalOptionItem = {
  id: string;
  name: string;
  price: string;
};

type AdditionalOptionsProps = {
  title: string;
  viewAllLabel: string;
  hideLabel: string;
  disclaimer: string;
  consentNote: string;
  items: AdditionalOptionItem[];
};

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={AMBER}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AdditionalOptions({
  title,
  viewAllLabel,
  hideLabel,
  disclaimer,
  consentNote,
  items,
}: AdditionalOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  return (
    <div>
      <h3 className="text-center font-body text-sm font-medium uppercase tracking-widest text-[#D6D6D6]">
        {title}
      </h3>

      <div className="mt-5 flex justify-center md:mt-8">
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex min-h-[48px] w-full max-w-[320px] items-center justify-center gap-2 rounded-full border border-[#FF9D00] bg-transparent px-6 font-body text-sm font-medium uppercase tracking-widest text-[#FF9D00] transition-colors duration-300 hover:bg-[#FF9D00]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9D00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] motion-reduce:transition-none sm:w-auto"
        >
          {isOpen ? hideLabel : viewAllLabel}
          <ChevronIcon
            className={`shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-5 md:pt-8">
            <ul className="rounded-sm border border-white/10 bg-[#0A0A0A] p-4 md:p-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b border-white/5 py-3 last:border-0"
                >
                  <span className="min-w-0 font-body text-sm leading-snug text-white md:text-base">
                    {item.name}
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-body text-sm font-medium text-[#E8B936] md:text-base">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-5 max-w-[720px] text-center font-body text-sm leading-[160%] text-[#A0A0A0] md:mt-8 md:text-base">
              {disclaimer}
            </p>
            <p className="mx-auto mt-3 max-w-[720px] text-center font-body text-sm leading-[160%] text-[#A0A0A0] md:text-base">
              {consentNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
