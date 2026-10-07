"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "overview" },
  { id: "the-problem", label: "the problem" },
  { id: "usability-ux", label: "usability & ux" },
  { id: "dax-modeling", label: "dax & modeling" },
  { id: "outcome", label: "outcome" },
  { id: "pbix", label: "the .pbix" },
] as const;

export function ScrollspySidebar() {
  const [active, setActive] = useState("overview");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateActive = () => {
      const marker = window.innerHeight * 0.32;
      const visibleSections = sections
        .map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);
      const current = visibleSections
        .filter((section) => section.getBoundingClientRect().top <= marker)
        .at(-1);
      setActive(current?.id ?? visibleSections[0]?.id ?? "overview");
    };
    const observer = new IntersectionObserver(
      () => {
        updateActive();
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.3, 0.6, 0.8] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  return (
    <div className="lg:sticky lg:top-24 lg:h-fit">
      <motion.div className="mb-5 h-1 w-full overflow-hidden rounded-full bg-[#EDF1F6] lg:w-[180px]">
        <motion.div
          className="h-full rounded-full bg-[#6B9BC3]"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
      </motion.div>
      <nav className="flex flex-wrap gap-2 lg:flex-col">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="relative flex items-center justify-between rounded-full border border-[#E3E9F2] px-3 py-2 text-left text-[10px] uppercase tracking-[0.12em] lg:w-full lg:text-[11px] lg:tracking-[0.15em]"
          >
            {active === section.id ? (
              <motion.span
                layoutId="spy-indicator"
                className="absolute inset-0 rounded-full bg-[#EEF4F9]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className={`relative z-10 ${active === section.id ? "text-[#111111]" : "text-[#64717D]"}`}>{section.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
