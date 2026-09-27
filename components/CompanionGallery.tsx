"use client";

import Image from "next/image";
import { useState } from "react";

type CompanionGalleryProps = {
  mainImage: string | { url: string };
  gallery: Array<string | { url: string }>;
  profileVideo?: string;
  videoThumbnail?: string;
  name: string;
  portraitAltSuffix: string;
  galleryAriaLabel: string;
  profileVideoLabel: string;
};

const getUrl = (img: string | { url: string } | null | undefined): string | undefined => {
  if (!img) {
    return undefined;
  }

  return typeof img === "string" ? img : img?.url;
};

const getPosterUrl = (url: string): string => {
  try {
    const poster = new URL(url);

    if (poster.hostname !== "images.microcms-assets.io") {
      return url;
    }

    poster.searchParams.set("w", "896");
    poster.searchParams.set("fm", "webp");
    poster.searchParams.set("q", "75");
    return poster.toString();
  } catch {
    return url;
  }
};

export function CompanionGallery({
  mainImage,
  gallery,
  profileVideo,
  videoThumbnail,
  name,
  portraitAltSuffix,
  galleryAriaLabel,
  profileVideoLabel,
}: CompanionGalleryProps) {
  const allImages = Array.from(
    new Set([getUrl(mainImage), ...gallery.map(getUrl)].filter(Boolean)),
  ) as string[];

  const [activeImage, setActiveImage] = useState(allImages[0]);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  const videoUrl = hasVideoError ? undefined : profileVideo;
  const showVideo = Boolean(videoUrl) && isVideoActive;
  const thumbnailCount = allImages.length + (videoUrl ? 1 : 0);

  const handleVideoError = () => {
    setHasVideoError(true);
    setIsVideoActive(false);
    setActiveImage(allImages[0]);
  };

  return (
    <div
      aria-label={galleryAriaLabel}
      className="mx-auto flex w-full max-w-md flex-col"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
        {showVideo ? (
          <video
            src={videoUrl}
            poster={getPosterUrl(videoThumbnail ?? allImages[0])}
            controls
            playsInline
            preload="none"
            onError={handleVideoError}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={activeImage}
            alt={`${name} ${portraitAltSuffix}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 448px"
            className="object-cover"
          />
        )}
      </div>

      {thumbnailCount > 1 && (
        <div className="mt-4 flex w-full flex-row gap-3 overflow-x-auto pb-2">
          {allImages.map((url) => {
            const isActive = !showVideo && url === activeImage;

            return (
              <button
                key={url}
                type="button"
                onClick={() => {
                  setActiveImage(url);
                  setIsVideoActive(false);
                }}
                aria-label={`${name} ${portraitAltSuffix}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative h-24 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                  isActive
                    ? "border-[#D4AF37]"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={url} alt="" fill sizes="80px" className="object-cover" />
              </button>
            );
          })}

          {videoUrl && (
            <button
              type="button"
              onClick={() => setIsVideoActive(true)}
              aria-label={`${name} ${profileVideoLabel}`}
              aria-current={showVideo ? "true" : undefined}
              className={`relative h-24 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                showVideo
                  ? "border-[#D4AF37]"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={videoThumbnail ?? allImages[0]}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3 1.5v9l7.5-4.5z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
