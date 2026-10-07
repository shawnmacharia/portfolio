"use client";

import { useShortcuts } from "@/components/ShortcutsProvider";

export function ShortcutsModalTrigger() {
  const { open } = useShortcuts();
  return (
    <button
      type="button"
      onClick={open}
      className="text-left text-[11px] uppercase tracking-[0.15em] text-[#667685] underline decoration-[#D7E3ED] underline-offset-4 transition hover:text-[#1F2730]"
    >
      press ? for shortcuts
    </button>
  );
}
