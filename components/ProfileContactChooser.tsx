"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { CompanionProfileDictionary } from "@/types/dictionary";

const WHATSAPP_BASE = "https://wa.me/817055359235";
const TELEGRAM_HREF = "https://t.me/HP_TokyoConcierge";
const LINE_HREF = "https://line.me/ti/p/DUj4HSqfK2";
const PHONE_HREF = "tel:0362659181";

type ProfileContactChooserProps = {
  companionName: string;
  companionImage: string;
  dict: CompanionProfileDictionary;
};

function CallNowIcon() {
  return (
    <svg
      width="18"
      height="18"
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

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="currentColor"
        d="M12.04 2C6.5 2 2 6.36 2 11.74c0 1.72.46 3.4 1.34 4.88L2 22l5.54-1.45a10.3 10.3 0 004.5 1.03h.04c5.54 0 10.04-4.36 10.04-9.74C22.12 6.36 17.58 2 12.04 2zm0 17.76h-.03a8.55 8.55 0 01-4.36-1.2l-.31-.18-3.29.86.88-3.2-.2-.33a8.32 8.32 0 01-1.28-4.47c0-4.6 3.85-8.34 8.6-8.34 4.58 0 8.58 3.74 8.58 8.34 0 4.6-4 8.52-8.59 8.52zm4.72-6.24c-.26-.13-1.53-.76-1.77-.84-.24-.09-.41-.13-.59.13-.17.26-.68.84-.83 1.01-.15.17-.31.2-.57.07-.26-.13-1.1-.4-2.1-1.29-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.12-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.29.94 2.54 1.07 2.71.13.17 1.85 2.82 4.47 3.96 1.67.72 2.08.79 2.83.67.43-.07 1.53-.62 1.74-1.23.22-.6.22-1.12.15-1.23-.06-.11-.24-.17-.5-.3z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="currentColor"
        d="M21.5 3.2L2.7 10.45c-1.28.5-1.27 1.2-.23 1.52l4.82 1.5 1.87 5.74c.23.64.12.9.82.9.54 0 .78-.25 1.08-.54l2.6-2.52 5.4 3.98c.99.55 1.7.26 1.95-.92L23.2 4.4c.27-1.08-.41-1.57-1.7-1.2zM8.7 13.86l9.94-6.27c.5-.3.96-.14.58.2l-8.06 7.27-.32 3.36-2.14-4.56z"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="currentColor"
        d="M12 3C6.7 3 2.4 6.58 2.4 11c0 3.95 3.5 7.26 8.23 7.88.32.07.76.21.87.49.1.25.07.64.03.89 0 0-.12.7-.14.84-.04.25-.2.97.85.53 1.12-.46 6.07-3.57 8.28-6.11h.01C21.4 13.8 21.6 12.44 21.6 11 21.6 6.58 17.3 3 12 3zm5.05 9.8h-2.4a.2.2 0 01-.2-.2V8.3a.2.2 0 01.2-.2h.7a.2.2 0 01.2.2v3.5h1.5a.2.2 0 01.2.2v.6a.2.2 0 01-.2.2zm-4.05 0h-.7a.2.2 0 01-.2-.2V8.3a.2.2 0 01.2-.2h.7a.2.2 0 01.2.2v5.3a.2.2 0 01-.2.2zm-1.55 0h-.7a.2.2 0 01-.2-.2V8.3a.2.2 0 01.2-.2h.7a.2.2 0 01.2.2v5.3a.2.2 0 01-.2.2zM6.7 12.8h2.4a.2.2 0 00.2-.2v-.6a.2.2 0 00-.2-.2H7.6V8.3a.2.2 0 00-.2-.2h-.7a.2.2 0 00-.2.2v4.3a.2.2 0 00.2.2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
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

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProfileContactChooser({
  companionName,
  companionImage,
  dict,
}: ProfileContactChooserProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);
  const titleId = useId();

  const bookingTitle = dict.chooser_booking.replace("{name}", companionName);
  const whatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Hi, I'm interested in ${companionName}.`,
  )}`;

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
      }
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  const channels = [
    {
      label: "WhatsApp",
      href: whatsappHref,
      external: true,
      icon: <WhatsAppIcon />,
      iconClassName: "text-[#25D366]",
    },
    {
      label: "Telegram",
      href: TELEGRAM_HREF,
      external: true,
      icon: <TelegramIcon />,
      iconClassName: "text-[#2AABEE]",
    },
    {
      label: "LINE",
      href: LINE_HREF,
      external: true,
      icon: <LineIcon />,
      iconClassName: "text-[#06C755]",
    },
    {
      label: dict.chooser_call,
      href: PHONE_HREF,
      external: false,
      icon: <PhoneIcon />,
      iconClassName: "text-[#D4AF37]",
    },
  ];

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FFE58A_0%,#F6D365_45%,#E8B936_100%)] px-8 font-body text-sm font-medium text-[#0B0B0B] transition-opacity hover:opacity-90"
      >
        <CallNowIcon />
        {dict.book_companion}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center md:items-center md:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-label={dict.chooser_close}
            onClick={close}
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative z-10 w-full min-w-0 rounded-t-2xl border border-white/10 bg-[#0A0A0A] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 outline-none md:max-w-[720px] md:rounded-sm md:p-8"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center text-[#A0A0A0] transition-colors hover:text-white"
              aria-label={dict.chooser_close}
            >
              <CloseIcon />
            </button>

            <div className="md:flex md:items-start md:gap-8">
              <div className="hidden w-[210px] max-w-[210px] shrink-0 overflow-hidden md:block">
                <div className="relative h-[280px] w-[210px] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={companionImage}
                    alt={companionName}
                    width={210}
                    height={280}
                    sizes="210px"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <p className="pr-10 font-body text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  {dict.contact_concierge}
                </p>
                <div className="mt-3 flex items-start gap-3 md:mt-0 md:contents">
                  <div className="relative h-[96px] w-[72px] max-w-[72px] shrink-0 overflow-hidden rounded-xl border border-white/10 md:hidden">
                    <Image
                      src={companionImage}
                      alt={companionName}
                      width={72}
                      height={96}
                      sizes="72px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 md:contents">
                    <h2
                      id={titleId}
                      className="font-heading text-2xl font-bold leading-snug text-white md:mt-3 md:text-3xl"
                    >
                      {bookingTitle}
                    </h2>
                    <p className="mt-3 font-body text-sm leading-[170%] text-[#A0A0A0]">
                      {dict.chooser_helper}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  {channels.map((channel) => (
                    <a
                      key={channel.href}
                      href={channel.href}
                      className="flex min-h-[52px] w-full items-center gap-4 border-b border-[#2A2A2A] px-1 transition-colors last:border-b-0 hover:bg-white/5"
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span
                        className={`inline-flex w-7 shrink-0 items-center justify-center ${channel.iconClassName}`}
                      >
                        {channel.icon}
                      </span>
                      <span className="flex-1 font-body text-base font-medium text-white">
                        {channel.label}
                      </span>
                      <ChevronRightIcon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
