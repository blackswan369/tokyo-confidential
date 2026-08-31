"use client";

import { useState } from "react";
import type { FaqDictionary } from "@/types/dictionary";

const GOLD = "#D4AF37";

type FAQProps = {
  dict: FaqDictionary;
};

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqAccordionItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className="border-b border-[#2A2A2A]">
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className={`font-body text-base font-medium leading-[140%] transition-colors duration-300 ${
            isOpen ? "text-[#D4AF37]" : "text-white"
          }`}
        >
          {question}
        </span>
        <ChevronIcon
          className={`shrink-0 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 pb-5 font-body text-sm leading-[160%] text-[#D6D6D6] md:pb-6 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const midpoint = Math.ceil(dict.items.length / 2);
  const leftFaqs = dict.items.slice(0, midpoint);
  const rightFaqs = dict.items.slice(midpoint);

  return (
    <section id="faq" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          {dict.title}
        </h2>

        <div className="md:mx-auto md:w-[85%]">
          <div className="mt-12 md:mt-16 md:grid md:grid-cols-2 md:gap-8">
            <div className="flex flex-col">
              {leftFaqs.map((faq, columnIndex) => (
                <FaqAccordionItem
                  key={faq.question}
                  index={columnIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === columnIndex}
                  onToggle={handleToggle}
                />
              ))}
            </div>
            <div className="flex flex-col">
              {rightFaqs.map((faq, columnIndex) => (
                <FaqAccordionItem
                  key={faq.question}
                  index={columnIndex + leftFaqs.length}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === columnIndex + leftFaqs.length}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
