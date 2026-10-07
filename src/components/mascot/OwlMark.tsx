"use client";

import { motion } from "framer-motion";

export function OwlMark() {
  return (
    <motion.span
      whileHover={{ rotate: 6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D7DCE4] bg-[#F4F6F8] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      aria-label="Shawn Mugambi owl mark"
    >
      <svg viewBox="0 0 48 48" className="h-4.5 w-4.5" aria-hidden="true">
        <path d="M16 14 24 8l8 6" fill="none" stroke="#1C1C1E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 18.8c0-6.5 4.5-11.2 10-11.2s10 4.7 10 11.2v3.2H14v-3.2Z" fill="#F8FAFC" stroke="#1C1C1E" strokeWidth="2.1" />
        <ellipse cx="19.5" cy="23" rx="5.2" ry="6.3" fill="#FFF" stroke="#1C1C1E" strokeWidth="2" />
        <ellipse cx="28.5" cy="23" rx="5.2" ry="6.3" fill="#FFF" stroke="#1C1C1E" strokeWidth="2" />
        <circle cx="20.3" cy="23.3" r="2.1" fill="#1C1C1E" />
        <circle cx="27.7" cy="23.3" r="2.1" fill="#1C1C1E" />
        <circle cx="22.2" cy="21.8" r="1" fill="#FFF" />
        <circle cx="25.8" cy="21.8" r="1" fill="#FFF" />
        <path d="M22 31.8 24 34l2-2.2" fill="none" stroke="#1C1C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  );
}
