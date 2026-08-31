"use client";

import Image from "next/image";
import { useState } from "react";

type CompanionGalleryProps = {
  mainImage: string;
  gallery: string[];
  name: string;
  portraitAltSuffix: string;
  galleryAriaLabel: string;
};

export function CompanionGallery({
  mainImage,
  gallery,
  name,
  portraitAltSuffix,
  galleryAriaLabel,
}: CompanionGalleryProps) {
  const allImages = [mainImage, ...gallery.filter((url) => url !== mainImage)];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = allImages[activeIndex] ?? mainImage;

  return (
    <div aria-label={galleryAriaLabel}>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.45)] md:aspect-[4/5]">
        <Image
          key={activeImage}
          src={activeImage}
          alt={`${name} ${portraitAltSuffix}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover transition-opacity duration-300"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/40 via-transparent to-transparent" />
      </div>

      {allImages.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 md:mt-6 md:gap-4">
          {allImages.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${name} ${portraitAltSuffix} ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative aspect-[3/4] overflow-hidden rounded-xl border transition-all duration-200 ${
                  isActive
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30"
                    : "border-[#2A2A2A] opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
