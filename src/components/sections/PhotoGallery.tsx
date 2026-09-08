"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  photos: string[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % photos.length,
    );
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Enlarge photo ${index + 1}`}
            className="border-sand bg-surface focus-visible:ring-rust relative block aspect-[3/2] border focus-visible:ring-2 focus-visible:outline-none"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="bg-ink/95 fixed inset-0 z-100 flex flex-col items-center justify-center gap-4 p-6"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="text-cream hover:text-rust focus-visible:text-rust focus-visible:ring-rust absolute top-6 right-6 font-mono text-sm tracking-wide uppercase focus-visible:ring-2 focus-visible:outline-none"
          >
            Close ✕
          </button>

          <div
            className="relative flex w-full max-w-5xl flex-1 items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous photo"
              className="text-cream hover:text-rust focus-visible:text-rust focus-visible:ring-rust absolute left-0 z-10 px-2 font-mono text-3xl focus-visible:ring-2 focus-visible:outline-none"
            >
              ←
            </button>
            <div className="relative h-[65vh] w-full">
              <Image
                src={photos[activeIndex]}
                alt=""
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="text-cream hover:text-rust focus-visible:text-rust focus-visible:ring-rust absolute right-0 z-10 px-2 font-mono text-3xl focus-visible:ring-2 focus-visible:outline-none"
            >
              →
            </button>
          </div>

          <div
            className="flex max-w-full gap-2 overflow-x-auto px-2 pb-2"
            onClick={(event) => event.stopPropagation()}
          >
            {photos.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View photo ${index + 1}`}
                aria-current={index === activeIndex}
                className={cn(
                  "focus-visible:ring-rust relative h-16 w-24 flex-shrink-0 border-2 focus-visible:ring-2 focus-visible:outline-none",
                  index === activeIndex ? "border-rust" : "border-transparent",
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
