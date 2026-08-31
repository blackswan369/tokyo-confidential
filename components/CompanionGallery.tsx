"use client";

import Image from "next/image";
import { useState } from "react";

type CompanionGalleryProps = {
  mainImage: string | { url: string };
  gallery: Array<string | { url: string }>;
  name: string;
  portraitAltSuffix: string;
  galleryAriaLabel: string;
};

const getUrl = (img: string | { url: string } | null | undefined): string | undefined => {
  if (!img) {
    return undefined;
  }

  return typeof img === "string" ? img : img?.url;
};

export function CompanionGallery({
  mainImage,
  gallery,
  name,
  portraitAltSuffix,
  galleryAriaLabel,
}: CompanionGalleryProps) {
  const allImages = Array.from(
    new Set([getUrl(mainImage), ...gallery.map(getUrl)].filter(Boolean)),
  ) as string[];

  const [activeImage, setActiveImage] = useState(allImages[0]);

  return (
    <div
      aria-label={galleryAriaLabel}
      className="mx-auto flex w-full max-w-md flex-col"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
        <Image
          src={activeImage}
          alt={`${name} ${portraitAltSuffix}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 448px"
          className="object-cover"
        />
      </div>

      {allImages.length > 1 && (
        <div className="mt-4 flex w-full flex-row gap-3 overflow-x-auto pb-2">
          {allImages.map((url) => (
            <button
              key={url}
              type="button"
              onClick={() => setActiveImage(url)}
              aria-label={`${name} ${portraitAltSuffix}`}
              aria-current={url === activeImage ? "true" : undefined}
              className={`relative h-24 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                url === activeImage
                  ? "border-[#D4AF37]"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={url} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
