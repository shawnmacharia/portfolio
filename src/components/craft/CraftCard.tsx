"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { CraftItem } from "@/content/craft";

const kindLabelMap = {
  github: "github",
  onedrive: "onedrive",
  medium: "medium",
  blogspot: "blogspot",
  none: "link coming soon",
} as const;

function CardVisual({ accent }: { accent: string }) {
  return (
    <div className="relative h-32 overflow-hidden rounded-[12px] border border-[#E9EEF3] bg-white">
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}, #F8FAFC)` }} />
      <div className="absolute inset-x-4 bottom-4 top-4 rounded-[10px] border border-white/60 bg-white/35 backdrop-blur-sm" />
      <div className="absolute left-6 top-6 h-12 w-12 rounded-full bg-white/50" />
      <div className="absolute right-8 top-7 h-16 w-16 rounded-md bg-[#F5F8FB]" />
      <div className="absolute bottom-8 left-8 h-12 w-24 rounded-full border border-[#1C1C1E]/20" />
      <div className="absolute bottom-8 left-36 h-10 w-10 rounded-full bg-[#DDEAF5]" />
    </div>
  );
}

export const CraftCard = forwardRef<HTMLDivElement, { item: CraftItem; active: boolean }>(({ item, active }, ref) => {
  const content = (
    <div className="group flex h-full flex-col rounded-[16px] border border-[#E3E9EF] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
      <CardVisual accent={item.accent} />
      <div className="mt-4 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-[#687785]">
        <span>{kindLabelMap[item.kind]}</span>
        <span>{item.category}</span>
      </div>
      <h3 className="mt-3 text-[1.25rem] font-light tracking-[-0.04em] text-[#1C1C1E]">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#5B6775]">{item.description}</p>
      <div className="mt-auto pt-4 text-[10px] uppercase tracking-[0.16em] text-[#5E6D7A]">
        {item.href ? (
          <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline decoration-[#D9E4ED] underline-offset-4 hover:text-[#1C1C1E]">
            {item.note}
          </a>
        ) : (
          <span className="text-[#7C8894]">{item.note}</span>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 380, damping: 34 }}
      className={active ? "block" : "hidden"}
    >
      {content}
    </motion.div>
  );
});

CraftCard.displayName = "CraftCard";
