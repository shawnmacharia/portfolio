"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { DashboardImageEntry } from "@/lib/dashboardImages";

type DashboardCarouselProps = {
  images: DashboardImageEntry[];
  title: string;
};

export function DashboardCarousel({ images, title }: DashboardCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const swiped = useRef(false);
  const activeIndex = useRef(0);
  const requestId = useRef(0);
  const preloadPromises = useRef(new Map<string, Promise<void>>());

  const total = images.length;
  const currentImage = images[index] ?? images[0];
  const slideTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" as const };

  const preloadImage = useCallback((src: string) => {
    const pending = preloadPromises.current.get(src);
    if (pending) return pending;

    const promise = new Promise<void>((resolve, reject) => {
      const image = new window.Image();
      image.decoding = "async";
      image.onload = () => {
        if (image.naturalWidth > 0) resolve();
        else reject(new Error(`Dashboard image has no decoded pixels: ${src}`));
      };
      image.onerror = () => reject(new Error(`Unable to load dashboard image: ${src}`));
      image.src = src;
      if (image.complete) {
        if (image.naturalWidth > 0) resolve();
        else reject(new Error(`Unable to load dashboard image: ${src}`));
      }
    }).then(async () => {
      const image = new window.Image();
      image.src = src;
      if (typeof image.decode === "function") await image.decode();
    });

    preloadPromises.current.set(src, promise);
    return promise;
  }, []);

  useEffect(() => {
    const adjacentIndexes = new Set([
      index,
      (index - 1 + total) % total,
      (index + 1) % total,
    ]);
    for (const adjacentIndex of adjacentIndexes) {
      const image = images[adjacentIndex];
      if (!image) continue;
      void preloadImage(image.src).catch((error: unknown) => {
        console.error(error);
        setImageError(error instanceof Error ? error.message : String(error));
      });
    }
  }, [images, index, preloadImage, total]);

  const transitionTo = useCallback(
    (nextIndex: number, direction: number) => {
      if (!total) return;
      const normalizedIndex = (nextIndex + total) % total;
      const target = images[normalizedIndex];
      if (!target || normalizedIndex === activeIndex.current) return;

      const request = ++requestId.current;
      setImageError(null);
      void preloadImage(target.src)
        .then(() => {
          if (request !== requestId.current) return;
          activeIndex.current = normalizedIndex;
          setIndex(normalizedIndex);
          document.documentElement.style.setProperty("--carousel-direction", String(direction));
        })
        .catch((error: unknown) => {
          console.error(error);
          if (request === requestId.current) {
            setImageError(error instanceof Error ? error.message : String(error));
          }
        });
    },
    [images, preloadImage, total],
  );

  const moveBy = useCallback(
    (delta: number) => transitionTo(activeIndex.current + delta, delta > 0 ? 1 : -1),
    [transitionTo],
  );

  useEffect(() => {
    if (!total) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isInput =
        target &&
        (target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement ||
          target.isContentEditable);
      const shortcutsOpen = document.body.dataset.shortcutsOpen === "true";
      if (event.altKey || event.ctrlKey || event.metaKey || isInput || shortcutsOpen) return;

      if (event.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
        return;
      }
      if (lightboxOpen && event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveBy(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveBy(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, moveBy, total]);

  const aspectRatio = useMemo(() => {
    if (!currentImage || currentImage.height === 0) return 1263 / 725;
    return Math.max(currentImage.width / currentImage.height, 1.1);
  }, [currentImage]);

  if (!total || !currentImage) return null;

  const slide = (
    <motion.div
      key={currentImage.src}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      transition={slideTransition}
      className="absolute inset-0"
    >
      <Image
        src={currentImage.src}
        alt={`${title} dashboard, page ${index + 1} of ${total}`}
        fill
        loading="eager"
        unoptimized
        sizes="(min-width: 1024px) 1080px, 100vw"
        className="object-contain"
      />
    </motion.div>
  );

  return (
    <div className="relative">
      <div
        className="relative isolate overflow-hidden rounded-[16px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
        style={{ aspectRatio }}
      >
        <button
          type="button"
          onClick={() => {
            if (swiped.current) {
              swiped.current = false;
              return;
            }
            setLightboxOpen(true);
          }}
          className="absolute inset-0 z-0 block h-full w-full cursor-zoom-in bg-[var(--surface)] text-left"
          aria-label={`Open ${title} dashboard image`}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            swiped.current = false;
          }}
          onTouchEnd={(event) => {
            const endX = event.changedTouches[0]?.clientX ?? null;
            if (touchStartX.current == null || endX == null) return;
            const diff = endX - touchStartX.current;
            if (Math.abs(diff) > 60) {
              swiped.current = true;
              moveBy(diff > 0 ? -1 : 1);
            }
            touchStartX.current = null;
          }}
        >
          <AnimatePresence initial={false} mode="sync">
            {slide}
          </AnimatePresence>
        </button>

        {total > 1 ? (
          <>
            <button
              type="button"
              aria-label="previous page"
              onClick={() => moveBy(-1)}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.68)] text-xl text-[var(--text)] shadow-lg backdrop-blur-md transition hover:scale-105 hover:shadow-xl dark:bg-[rgba(23,23,26,0.7)]"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="next page"
              onClick={() => moveBy(1)}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.68)] text-xl text-[var(--text)] shadow-lg backdrop-blur-md transition hover:scale-105 hover:shadow-xl dark:bg-[rgba(23,23,26,0.7)]"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {imageError ? (
        <p role="status" className="mt-2 text-sm text-red-700 dark:text-red-300">
          Could not load this dashboard image. The current slide remains visible.
        </p>
      ) : null}

      {total > 1 ? (
        <div className="mt-4 flex flex-col items-center gap-3">
          <div aria-live="polite" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {index + 1} / {total}
          </div>
          <div className="flex items-center gap-2">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to page ${imageIndex + 1}`}
                aria-current={imageIndex === index ? "true" : undefined}
                onClick={() => transitionTo(imageIndex, imageIndex > index ? 1 : -1)}
                className={`h-2.5 w-2.5 rounded-full transition ${imageIndex === index ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`}
              />
            ))}
          </div>
          <div className="hidden w-full items-center gap-2 overflow-x-auto pb-1 sm:flex">
            {images.map((image, imageIndex) => (
              <button
                key={`${image.src}-thumb`}
                type="button"
                onClick={() => transitionTo(imageIndex, imageIndex > index ? 1 : -1)}
                aria-label={`Show page ${imageIndex + 1}`}
                className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border ${imageIndex === index ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/40" : "border-[var(--border)]"}`}
              >
                <Image src={image.src} alt={`Thumbnail ${imageIndex + 1}`} fill loading="eager" className="object-cover" sizes="100px" />
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} dashboard gallery`}
          >
            <div className="relative w-full max-w-[1200px]" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                aria-label="Close dashboard image"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                close
              </button>
              <div className="relative isolate overflow-hidden rounded-[18px] border border-white/20 bg-[var(--surface)]" style={{ aspectRatio }}>
                <AnimatePresence initial={false} mode="sync">
                  {slide}
                </AnimatePresence>
              </div>
              {total > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="previous page"
                    onClick={() => moveBy(-1)}
                    className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur-md"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="next page"
                    onClick={() => moveBy(1)}
                    className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur-md"
                  >
                    ›
                  </button>
                </>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
