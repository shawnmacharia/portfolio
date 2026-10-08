"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useSyncExternalStore } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function updateThemeMeta(theme: string) {
  const root = document.documentElement;
  const nextTheme = theme === "dark" ? "dark" : "light";
  root.setAttribute("data-theme", nextTheme);
  root.style.colorScheme = nextTheme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", nextTheme === "dark" ? "#0F0F11" : "#FAFAFA");
}

const subscribeToHydration = () => () => {};
const getHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(subscribeToHydration, getHydrationSnapshot, getServerHydrationSnapshot);

  useEffect(() => {
    if (resolvedTheme) {
      updateThemeMeta(resolvedTheme);
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 260);
    setTheme(nextTheme);
    updateThemeMeta(nextTheme);
  };

  const checkedTheme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <button
      type="button"
      aria-label={checkedTheme === "dark" ? "switch to light mode" : "switch to dark mode"}
      aria-pressed={checkedTheme === "dark"}
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[0_1px_2px_rgba(15,15,17,0.06)] outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      suppressHydrationWarning
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={checkedTheme}
          initial={reducedMotion ? false : { scale: 0.7, rotate: -30, opacity: 0.4 }}
          animate={reducedMotion ? { opacity: 1 } : { scale: 1, rotate: 0, opacity: 1 }}
          exit={reducedMotion ? undefined : { scale: 0.7, rotate: 30, opacity: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          className="flex items-center justify-center"
        >
          {checkedTheme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
