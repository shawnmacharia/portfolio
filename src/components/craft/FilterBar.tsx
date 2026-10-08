"use client";

import { motion } from "framer-motion";
import { craftCategories, getCraftCounts } from "@/content/craft";

export function FilterBar({
  active,
  onChange,
  counts,
}: {
  active: string;
  onChange: (value: string) => void;
  counts: ReturnType<typeof getCraftCounts>;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {craftCategories.map((category) => {
        const activeItem = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`relative rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.14em] ${activeItem ? "text-[#163D57]" : "text-[#5A6B7B]"}`}
          >
            {activeItem ? (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full border border-[#D7E5F1] bg-[#EAF4FB]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}
            <span className="relative inline-flex items-center gap-2">
              <span>{category}</span>
              <span className="text-[#6B7B8A]">{counts[category]}</span>
            </span>
          </button>
        );
      })}
      <button type="button" onClick={() => onChange("rearrange")} className="ml-auto inline-flex items-center gap-2 rounded-full border border-[#E3E9F2] bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-[#51606B]">
        rearrange <span>↻</span>
      </button>
    </div>
  );
}
