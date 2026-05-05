"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="fixed bottom-4 right-4 z-20 p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
      suppressHydrationWarning
    >
      <span suppressHydrationWarning>
        {resolvedTheme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </span>
    </button>
  );
}
