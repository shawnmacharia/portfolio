"use client";

import { useEffect, useRef, useState } from "react";

export function BeforeAfter() {
  const [split, setSplit] = useState(55);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setSplit((value) => Math.max(0, value - 3));
      if (event.key === "ArrowRight") setSplit((value) => Math.min(100, value + 3));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="rounded-[20px] border border-[#E5E9EE] bg-[#F8F9FB] p-3">
      <div
        ref={wrapperRef}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={split}
        tabIndex={0}
        className="relative h-[300px] overflow-hidden rounded-[16px] border border-[#E1E7ED] bg-white"
        onPointerDown={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const next = ((event.clientX - rect.left) / rect.width) * 100;
          setSplit(Math.max(0, Math.min(100, next)));
        }}
        onPointerMove={(event) => {
          if (event.buttons !== 1) return;
          const rect = event.currentTarget.getBoundingClientRect();
          const next = ((event.clientX - rect.left) / rect.width) * 100;
          setSplit(Math.max(0, Math.min(100, next)));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") setSplit((value) => Math.max(0, value - 3));
          if (event.key === "ArrowRight") setSplit((value) => Math.min(100, value + 3));
        }}
      >
        <div className="absolute inset-0">
          <svg viewBox="0 0 720 420" className="h-full w-full" aria-hidden="true">
            <rect width="720" height="420" fill="#EDF1F5" />
            <rect x="0" y="0" width="720" height="420" fill="#E7EEF7" />
            <path d="M40 310C130 260 200 210 260 205s120 9 182 67 123 58 232-19" fill="none" stroke="#9AB7CE" strokeWidth="6" strokeLinecap="round" />
            <path d="M80 275l118-75 78 43 154-82 112 41 103-26" fill="none" stroke="#7A90A8" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
            <rect x="100" y="88" width="150" height="120" rx="16" fill="#D6E5F2" opacity="0.8" />
            <rect x="418" y="122" width="175" height="132" rx="16" fill="#D6E5F2" opacity="0.7" />
          </svg>
        </div>
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${split}%` }}>
          <svg viewBox="0 0 720 420" className="h-full w-full" aria-hidden="true">
            <rect width="720" height="420" fill="#F5F7FA" />
            <path d="M40 310C130 260 200 210 260 205s120 9 182 67 123 58 232-19" fill="none" stroke="#6B9BC3" strokeWidth="6" strokeLinecap="round" />
            <path d="M80 275l118-75 78 43 154-82 112 41 103-26" fill="none" stroke="#2B3F55" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
            <rect x="100" y="88" width="150" height="120" rx="16" fill="#C9DFF0" opacity="0.9" />
            <rect x="418" y="122" width="175" height="132" rx="16" fill="#C9DFF0" opacity="0.9" />
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `calc(${split}% - 2px)` }}>
          <div className="h-full w-1 bg-[#1F2730]" />
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1F2730] bg-white text-lg text-[#1F2730] shadow-sm">↔</div>
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#485766]">before</div>
        <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#485766]">after</div>
      </div>
    </div>
  );
}
