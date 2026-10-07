"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const ShortcutsContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
} | null>(null);

export function useShortcuts() {
  const context = useContext(ShortcutsContext);
  if (!context) {
    throw new Error("useShortcuts must be used within ShortcutsProvider");
  }
  return context;
}

export function ShortcutsProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const ignored =
        target &&
        (target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement ||
          target.isContentEditable);

      if (ignored || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      if (event.key === "?" || (event.shiftKey && event.key === "/")) {
        event.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key.toLowerCase() === "w") {
        router.push("/work");
        setIsOpen(false);
      }
      if (event.key.toLowerCase() === "c") {
        router.push("/craft");
        setIsOpen(false);
      }
      if (event.key.toLowerCase() === "a") {
        router.push("/about");
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = Array.from(document.querySelectorAll<HTMLElement>("button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])"));
    const first = focusable[0];
    if (first) first.focus();
    return () => {
      if (previouslyFocused) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <ShortcutsContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/10 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Keyboard shortcuts"
              className="w-full max-w-md rounded-[24px] border border-white/70 bg-white/70 p-6 shadow-[0_24px_80px_rgba(17,17,17,0.12)] backdrop-blur-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#667585]">keyboard shortcuts</p>
              <div className="space-y-3">
                {[
                  ["W", "work"],
                  ["C", "craft"],
                  ["A", "about"],
                  ["?", "toggle this panel"],
                  ["esc", "close"],
                ].map(([key, label]) => (
                  <div key={label} className="flex items-center justify-between rounded-full border border-[#E9EEF4] bg-white/60 px-3 py-2 text-sm text-[#1F2730]">
                    <kbd className="inline-flex min-w-[42px] justify-center rounded-full border border-[#D7DFEB] bg-[#F6F9FB] px-2 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#44515F]">
                      {key}
                    </kbd>
                    <span className="text-sm text-[#4D5865]">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ShortcutsContext.Provider>
  );
}
