"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@vercel/analytics";

type CompanionCardSource = "home" | "listing";

type TrackedCompanionLinkProps = {
  href: string;
  companionId: string;
  source: CompanionCardSource;
  className?: string;
  children: ReactNode;
};

export function TrackedCompanionLink({
  href,
  companionId,
  source,
  className,
  children,
}: TrackedCompanionLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        track("companion_card_click", {
          companion_id: companionId,
          source,
        });
      }}
    >
      {children}
    </Link>
  );
}
