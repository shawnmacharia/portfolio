"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CoverArt } from "@/components/work/ProjectCard";
import type { Project } from "@/content/projects";

export function DashboardImage({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 240, damping: 28 };

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!project.cover) {
    return (
      <div className="relative aspect-[1263/725] overflow-hidden rounded-[14px] border border-[#E7E9EF] bg-[var(--surface)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]">
        <CoverArt index={index} />
      </div>
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="group relative block aspect-[1263/725] w-full overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] text-left shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
        onClick={() => setIsOpen(true)}
        aria-label={`Expand ${project.title} dashboard image`}
        data-cursor-label="expand"
      >
        <motion.div layoutId={`dashboard-image-${project.slug}`} className="absolute inset-0" transition={transition}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111820]/70 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => {
              setIsOpen(false);
              window.requestAnimationFrame(() => triggerRef.current?.focus());
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} dashboard image`}
          >
            <div className="relative w-full max-w-[1440px]" onClick={(event) => event.stopPropagation()}>
              <button
                ref={closeRef}
                type="button"
                className="absolute -top-12 right-0 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white outline-none hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => {
                  setIsOpen(false);
                  window.requestAnimationFrame(() => triggerRef.current?.focus());
                }}
                aria-label="Close dashboard image"
              >
                close
              </button>
              <motion.div
                layoutId={`dashboard-image-${project.slug}`}
                className="relative aspect-[1263/725] w-full overflow-hidden rounded-[14px] border border-white/25 bg-[var(--surface)] shadow-2xl"
                transition={transition}
              >
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
