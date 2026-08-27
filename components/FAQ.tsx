"use client";

import { useState } from "react";

const GOLD = "#D4AF37";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "DO I NEED TO SPEAK JAPANESE?",
    answer: "NO. ENGLISH SUPPORT IS AVAILABLE THROUGHOUT THE BOOKING PROCESS.",
  },
  {
    question: "HOW DOES BOOKING WORK?",
    answer:
      "CONTACT US, CHOOSE YOUR COMPANION, CONFIRM YOUR BOOKING, AND ENJOY YOUR EXPERIENCE.",
  },
  {
    question: "HOW DO I PAY?",
    answer:
      "CASH CAN BE PAID ON THE DAY OF THE MEETING. CREDIT CARD PAYMENTS ARE AVAILABLE ONLINE BEFORE YOUR BOOKING.",
  },
  {
    question: "CAN I CHOOSE A SPECIFIC COMPANION?",
    answer: "YES. YOU MAY REQUEST A SPECIFIC COMPANION, SUBJECT TO AVAILABILITY.",
  },
  {
    question: "ARE ALL COMPANIONS JAPANESE?",
    answer: "YES. OUR COMPANIONS ARE JAPANESE UNLESS OTHERWISE STATED.",
  },
  {
    question: "IS THE SERVICE LEGALLY OPERATED?",
    answer:
      "YES. WE OPERATE PROFESSIONALLY AND IN ACCORDANCE WITH APPLICABLE REGULATIONS.",
  },
  {
    question: "WHAT IS YOUR CANCELLATION POLICY?",
    answer: "CANCELLATION TERMS ARE PROVIDED BEFORE BOOKING CONFIRMATION.",
  },
  {
    question: "WHERE DOES THE SERVICE TAKE PLACE?",
    answer:
      "WE ARE AN OUTCALL-ONLY SERVICE. OUR COMPANIONS WILL VISIT YOUR PRIVATE ACCOMMODATION, SUCH AS A HOTEL ROOM OR APARTMENT (AIRBNB) WITHIN OUR TOKYO SERVICE AREA. WE DO NOT HAVE A PHYSICAL PARLOR OR MASSAGE ROOM FOR YOU TO VISIT.",
  },
  {
    question: "ARE THERE ANY PROHIBITED ACTS?",
    answer:
      "YES. WE OPERATE STRICTLY UNDER JAPANESE LAW. FULL SEXUAL INTERCOURSE IS STRICTLY PROHIBITED. WE PRIORITIZE THE SAFETY OF OUR COMPANIONS. ANY VIOLATION OR INAPPROPRIATE BEHAVIOR WILL RESULT IN IMMEDIATE TERMINATION OF THE SERVICE WITHOUT A REFUND.",
  },
  {
    question: "CAN I USE ANY HOTEL?",
    answer:
      "MOST MAJOR HOTELS AND AIRBNBS ARE ACCEPTABLE. PLEASE ENSURE YOUR ACCOMMODATION ALLOWS GUESTS. YOU MUST BE CHECKED INTO YOUR ROOM BEFORE THE COMPANION ARRIVES, BUT YOU CAN ABSOLUTELY MAKE ADVANCE RESERVATIONS PRIOR TO YOUR CHECK-IN.",
  },
  {
    question: "WHEN DO I PAY FOR THE SERVICE?",
    answer:
      "PAYMENT IS MADE DIRECTLY TO YOUR COMPANION IN CASH (JPY) UPON HER ARRIVAL AT YOUR ROOM, STRICTLY BEFORE THE SERVICE BEGINS.",
  },
];

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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const midpoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midpoint);
  const rightFaqs = faqs.slice(midpoint);

  return (
    <section id="faq" className="bg-[#0B0B0B] px-8 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
          FREQUENTLY ASKED QUESTIONS
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
