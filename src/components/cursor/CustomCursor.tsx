"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });
  const scale = useSpring(1, { stiffness: 420, damping: 28 });
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setIsReducedMotion(motionQuery.matches);
      setMounted(true);
      if (media.matches) {
        setIsVisible(false);
      }
    };
    update();
    media.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setIsVisible(true);
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerDown = () => scale.set(0.85);
    const handlePointerUp = () => scale.set(1);

    const handleOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], summary, label, [data-cursor='hover']",
      );
      const textField = target?.closest("input, textarea, [data-cursor='text']");
      const labelTarget = target?.closest("[data-cursor-label]");

      if (interactive) {
        setIsActive(true);
        scale.set(2.6);
        setLabel(null);
      } else if (labelTarget) {
        setIsActive(true);
        scale.set(1);
        setLabel(labelTarget.getAttribute("data-cursor-label") || "view project");
      } else if (textField) {
        setIsActive(true);
        scale.set(0.5);
        setLabel(null);
      } else {
        setIsActive(false);
        scale.set(1);
        setLabel(null);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointerover", handleOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerover", handleOver);
      media.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, [x, y, scale]);

  if (!mounted || isReducedMotion) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY, scale, opacity: isVisible ? 1 : 0 }}
    >
      {label ? (
        <motion.div
          className="flex h-10 items-center justify-center rounded-full bg-[#2B2F36] px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white shadow-[0_18px_30px_rgba(18,18,18,0.22)]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {label}
        </motion.div>
      ) : (
        <motion.div
          className="flex h-[14px] w-[14px] items-center justify-center rounded-full border bg-[rgba(28,28,30,0.14)] backdrop-blur-[2px]"
          style={{ borderColor: "rgba(0,0,0,0)" }}
          animate={{
            width: isActive ? (label ? 134 : 42) : 14,
            height: isActive ? (label ? 40 : 42) : 14,
            borderColor: isActive ? "rgba(107,155,195,0.8)" : "rgba(0,0,0,0)",
            background: isActive ? "rgba(255,255,255,0.5)" : "rgba(28,28,30,0.14)",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      )}
    </motion.div>
  );
}
