"use client";

import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function AlchemistOwl({ variant = "hero" }: { variant?: "hero" | "sleeping" }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 14, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 14, mass: 0.6 });
  const { scrollYProgress } = useScroll();
  const rawScale = useTransform(scrollYProgress, [0, 0.8], [0.7, 1]);
  const glow = useTransform(scrollYProgress, [0, 0.8], [0.2, 1]);

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const py = (event.clientY - rect.top - rect.height / 2) / rect.height;
    x.set(px * 12);
    y.set(py * 8);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (variant === "sleeping") {
    return (
      <motion.svg
        ref={ref}
        viewBox="0 0 480 420"
        className="w-full max-w-[300px]"
        role="img"
        aria-label="Sleeping alchemist owl mascot"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <g transform="translate(60 54)">
          <ellipse cx="170" cy="260" rx="110" ry="26" fill="#D9DDE3" opacity="0.55" />
          <g transform="translate(40 12)">
            <path d="M118 180c-28 0-52 22-52 48 0 29 22 42 52 42h130c30 0 54-13 54-42 0-26-24-48-54-48H118Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
            <path d="M150 165c16-15 35-21 53-21 18 0 37 6 53 21" fill="none" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M152 176c15 6 26 9 39 9 15 0 26-3 39-9" fill="none" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="175" cy="142" r="18" fill="#F5F6F7" stroke="#1C1C1E" strokeWidth="2.2" />
            <circle cx="242" cy="142" r="18" fill="#F5F6F7" stroke="#1C1C1E" strokeWidth="2.2" />
            <circle cx="178" cy="146" r="4" fill="#1C1C1E" />
            <circle cx="239" cy="146" r="4" fill="#1C1C1E" />
            <path d="M199 158c8 9 22 9 30 0" fill="none" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M125 92 92 57l40 9" fill="#E0E4E8" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M288 93l34-36-41 8" fill="#E0E4E8" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M162 80c18-28 40-32 57-32 16 0 38 4 57 32l-23 16h-68l-23-16Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
            <g transform="translate(117 184)">
              <path d="M37 76c-21 0-38 14-38 32 0 18 17 30 38 30h45c21 0 38-12 38-30 0-18-17-32-38-32H37Z" fill="#D6D8DD" stroke="#1C1C1E" strokeWidth="2.2" />
              <path d="M24 44c0-18 12-28 28-28 16 0 28 10 28 28v8H24v-8Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
              <path d="M4 98c18 10 37 13 62 13s44-3 62-13" fill="none" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            </g>
            <g opacity="0.9">
              <circle cx="113" cy="46" r="11" fill="#DDE4EA" opacity="0.8" />
              <circle cx="323" cy="48" r="9" fill="#DDE4EA" opacity="0.8" />
              <circle cx="92" cy="84" r="7" fill="#DDE4EA" opacity="0.6" />
            </g>
            <g>
              <path d="M20 144c-30 0-46 14-46 32 0 18 16 28 46 28h22l-6-60H20Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
              <path d="M301 144c32 0 48 14 48 32 0 18-16 28-48 28h-20l6-60h14Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
            </g>
          </g>
        </g>
      </motion.svg>
    );
  }

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 480 420"
      className="w-full max-w-[420px]"
      role="img"
      aria-label="Alchemist owl mascot transforming raw data into analytical charts"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      animate={isInView ? { scale: 1 } : { scale: 1 }}
    >
      <motion.g style={{ scale: rawScale }}>
        <ellipse cx="175" cy="330" rx="124" ry="32" fill="#DDE1E7" opacity="0.7" />
        <g transform="translate(0 4)">
          <rect x="25" y="120" width="36" height="18" rx="4" fill="#E3E7EB" stroke="#1C1C1E" strokeWidth="2" />
          <rect x="55" y="150" width="28" height="18" rx="4" fill="#E3E7EB" stroke="#1C1C1E" strokeWidth="2" />
          <rect x="80" y="138" width="30" height="18" rx="4" fill="#E3E7EB" stroke="#1C1C1E" strokeWidth="2" />
          <rect x="87" y="102" width="18" height="18" rx="4" fill="#E3E7EB" stroke="#1C1C1E" strokeWidth="2" />
          <path d="M100 220 260 192" stroke="#D4D9DF" strokeWidth="18" strokeLinecap="round" opacity="0.7" />
        </g>
        <g transform="translate(110 15)">
          <motion.g animate={{ scale: [1, 1.014, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <path d="M64 91c-8-19-11-38-11-53 0-21 18-42 40-42 14 0 28 7 36 21l11 20 10-20c9-13 22-21 35-21 22 0 40 21 40 42 0 17-3 34-13 53l-8 16H72l-8-16Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
            <path d="M101 64 95 33 123 52l-3 45-16 5-3-38Z" fill="#F0F2F5" stroke="#1C1C1E" strokeWidth="2.1" />
            <path d="M185 64 194 33 169 52l3 45 16 5 3-38Z" fill="#F0F2F5" stroke="#1C1C1E" strokeWidth="2.1" />
            <ellipse cx="111" cy="140" rx="72" ry="76" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
            <ellipse cx="154" cy="140" rx="72" ry="76" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
            <ellipse cx="133" cy="140" rx="97" ry="88" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.2" />
            <ellipse cx="133" cy="155" rx="66" ry="62" fill="#F2F4F7" stroke="#1C1C1E" strokeWidth="2.2" />
            <ellipse cx="97" cy="156" rx="20" ry="27" fill="#FFFEFF" stroke="#1C1C1E" strokeWidth="2" />
            <ellipse cx="168" cy="156" rx="20" ry="27" fill="#FFFEFF" stroke="#1C1C1E" strokeWidth="2" />
            <circle cx="100" cy="159" r="6" fill="#1C1C1E" />
            <circle cx="165" cy="159" r="6" fill="#1C1C1E" />
            <circle cx="103" cy="155" r="2" fill="#fff" />
            <circle cx="168" cy="155" r="2" fill="#fff" />
            <path d="M118 183c12 8 25 12 40 12s28-4 40-12" fill="none" stroke="#1C1C1E" strokeWidth="2.1" strokeLinecap="round" />
            <path d="M133 177c0 16 12 31 30 31 18 0 30-15 30-31" fill="none" stroke="#1C1C1E" strokeWidth="2.1" strokeLinecap="round" />
            <path d="M130 195 104 214" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M135 195 161 214" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <motion.g animate={{ rotate: [0, 3, -2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ originX: "0.5", originY: "0.5" }}>
              <path d="M50 211c15-18 32-34 57-46l-10 52H48l2-6Z" fill="#BFD7EA" stroke="#1C1C1E" strokeWidth="2.1" />
              <path d="M214 211c-15-18-30-34-56-46l10 52h53l-7-6Z" fill="#BFD7EA" stroke="#1C1C1E" strokeWidth="2.1" />
            </motion.g>
            <path d="M34 170h18l18 44H59l-25-44Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.1" />
            <path d="M228 170h24l24 44h-21l-27-44Z" fill="#E9E9EC" stroke="#1C1C1E" strokeWidth="2.1" />
            <path d="M88 213h92l-10 18H96l-8-18Z" fill="#D6D8DD" stroke="#1C1C1E" strokeWidth="2.1" />
          </motion.g>
          <g transform="translate(70 212)">
            <path d="M20 18c46-30 118-21 150 9 17 15 22 36 17 54l-10 38H39L14 85c-9-19-3-40 6-52Z" fill="#F2F2F4" stroke="#1C1C1E" strokeWidth="2.2" />
            <path d="M85 36c20 17 54 19 80 4" fill="none" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M32 86c12 0 31 12 19 39" fill="none" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M158 86c-12 0-31 12-19 39" fill="none" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M34 126h150" stroke="#1C1C1E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M58 34h110l9 29H49l9-29Z" fill="#C9D6E0" opacity="0.7" />
            <motion.path d="M54 94c17-10 28-17 39-29 15 18 28 26 39 29 16 5 28 0 38-10 8 18 20 26 33 31" fill="none" stroke="#6B9BC3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: glow }} />
            <path d="M93 91v26m16-19v19m16-28v36m17-24v24" stroke="#F2C879" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <circle cx="116" cy="64" r="14" fill="#EAE7E1" stroke="#1C1C1E" strokeWidth="2" />
            <path d="M116 52v24M104 64h24" stroke="#1C1C1E" strokeWidth="2" />
          </g>
        </g>
      </motion.g>
    </motion.svg>
  );
}
