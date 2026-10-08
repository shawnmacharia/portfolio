"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const clickLines = ["one more chart?", "forecast says: coffee", "dreaming in dashboards"];

export function FooterOwl() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const inView = useInView(svgRef, { once: true, margin: "-5%" });
  const reduceMotion = useReducedMotion();
  const [awake, setAwake] = useState(false);
  const [near, setNear] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const wakeTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (wakeTimer.current !== null) window.clearTimeout(wakeTimer.current);
  }, []);

  const wake = () => {
    setNear(true);
    if (wakeTimer.current !== null) window.clearTimeout(wakeTimer.current);
    wakeTimer.current = window.setTimeout(() => {
      setAwake(true);
      wakeTimer.current = null;
    }, 240);
  };
  const sleep = () => {
    if (wakeTimer.current !== null) window.clearTimeout(wakeTimer.current);
    wakeTimer.current = null;
    setAwake(false);
    setNear(false);
    setClicked(false);
  };
  const handleClick = () => {
    setClickCount((count) => count + 1);
    setClicked(true);
    setAwake(true);
  };
  const handleKeyDown = (event: React.KeyboardEvent<SVGSVGElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.svg
      ref={svgRef}
      viewBox="0 0 480 330"
      className="w-full max-w-[360px] cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      role="button"
      tabIndex={0}
      aria-label="Wake the sleeping alchemist owl"
      onPointerEnter={wake}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 480;
        const y = ((event.clientY - bounds.top) / bounds.height) * 330;
        const approaching = Math.abs(x - 245) < 150 && y < 205;
        setNear(approaching && !awake);
        if (approaching && !awake && wakeTimer.current === null) {
          wakeTimer.current = window.setTimeout(() => {
            setAwake(true);
            wakeTimer.current = null;
          }, 240);
        } else if (!approaching && wakeTimer.current !== null) {
          window.clearTimeout(wakeTimer.current);
          wakeTimer.current = null;
        }
      }}
      onPointerLeave={sleep}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={inView || reduceMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
    >
      <rect x="12" y="12" width="456" height="306" rx="28" fill="var(--owl-scene)" />
      <g className="owl-day">
        <path d="M38 105c18-24 54-22 70 0 16-16 45-12 54 8H31c0-3 3-6 7-8Zm297 1c18-25 52-22 69 0 16-16 43-11 52 8H326c1-3 4-6 9-8Z" fill="var(--owl-cloud)" />
        <circle cx="392" cy="72" r="20" fill="var(--owl-sun)" />
      </g>
      <g className="owl-night">
        <path d="M386 50a22 22 0 1 0 25 29 20 20 0 0 1-25-29Z" fill="var(--owl-moon)" />
        <path d="m86 65 4 11 11 4-11 4-4 11-4-11-11-4 11-4 4-11Zm295 89 3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8ZM118 144l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" fill="var(--owl-star)" />
        <circle cx="339" cy="74" r="2.5" fill="var(--owl-star)" />
        <circle cx="71" cy="163" r="2" fill="var(--owl-star)" />
      </g>

      <ellipse cx="238" cy="275" rx="170" ry="20" fill="var(--owl-shadow)" />
      <rect x="48" y="253" width="384" height="13" rx="6" fill="var(--owl-desk)" />
      <path d="M78 266h12v39H78zm310 0h12v39h-12z" fill="var(--owl-desk-leg)" />

      <g aria-hidden="true">
        <path d="M77 247v-69m0 0-27-40m27 40 32-39" fill="none" stroke="var(--owl-ink)" strokeWidth="5" strokeLinecap="round" />
        <path d="M46 139q31-26 62 0l-14 21H60z" fill="var(--owl-lamp)" stroke="var(--owl-ink)" strokeWidth="3" strokeLinejoin="round" />
        <path d="m72 164 12 23" stroke="var(--owl-lamp-glow)" strokeWidth="18" strokeLinecap="round" opacity=".45" />
        <path d="M379 231h36a15 15 0 0 1 15 15v7h-66v-7a15 15 0 0 1 15-15Z" fill="var(--owl-mug)" stroke="var(--owl-ink)" strokeWidth="3" />
        <path d="M430 237q20 0 17 12t-17 9" fill="none" stroke="var(--owl-ink)" strokeWidth="3" />
        <path d="M390 224c-8-10 8-10 0-20m12 20c-8-10 8-10 0-20" fill="none" stroke="var(--owl-steam)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M151 245v-48h100v48" fill="var(--owl-laptop)" stroke="var(--owl-ink)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M162 207h78v29h-78z" fill="var(--owl-screen)" />
        <path d="m169 230 14-11 12 6 15-13 21 5" fill="none" stroke="var(--owl-chart)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M145 246h113l-10 8h-93z" fill="var(--owl-laptop)" stroke="var(--owl-ink)" strokeWidth="2" strokeLinejoin="round" />
      </g>

      <motion.g
        animate={reduceMotion ? undefined : awake ? { y: [0, -8, 0] } : { y: 0 }}
        transition={awake && !reduceMotion ? { duration: 0.45, repeat: 1, ease: "easeOut" } : { duration: 0 }}
      >
        <path d="M195 220c-8-27 0-73 19-91 11-11 22-15 35-15s25 4 36 15c20 20 27 64 19 91H195Z" fill="var(--owl-base)" stroke="var(--owl-ink)" strokeWidth="3" />
        <path d="m207 132-8-32 30 17m65 15 10-32-30 17" fill="var(--owl-base)" stroke="var(--owl-ink)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M223 145c10-11 21-15 26-15s16 4 26 15l-8 7h-36z" fill="var(--owl-cap)" stroke="var(--owl-ink)" strokeWidth="2.5" />
        <path d="M242 132c12-19 29-24 47-22l-7 17-15 9" fill="var(--owl-cap)" stroke="var(--owl-ink)" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="285" cy="109" r="5" fill="var(--owl-star)" />
        <ellipse cx="225" cy="168" rx="17" ry="20" fill="var(--owl-face)" stroke="var(--owl-ink)" strokeWidth="2.5" />
        <ellipse cx="273" cy="168" rx="17" ry="20" fill="var(--owl-face)" stroke="var(--owl-ink)" strokeWidth="2.5" />
        {awake || near ? (
          <>
            <circle cx="226" cy="170" r="5" fill="var(--owl-ink)" />
            {awake ? <circle cx="274" cy="170" r="5" fill="var(--owl-ink)" /> : <path d="M261 168q12 8 24 0" fill="none" stroke="var(--owl-ink)" strokeWidth="3" strokeLinecap="round" />}
          </>
        ) : (
          <>
            <path d="M214 168q11 10 22 0m24 0q11 10 22 0" fill="none" stroke="var(--owl-ink)" strokeWidth="3" strokeLinecap="round" />
            <text x="305" y="124" fill="var(--owl-muted)" fontSize="16" fontFamily="sans-serif">z</text>
            <text x="318" y="109" fill="var(--owl-muted)" fontSize="12" fontFamily="sans-serif">z</text>
          </>
        )}
        <path d="m243 180 8 8 8-8-8-5z" fill="var(--owl-beak)" stroke="var(--owl-ink)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M224 199q25 13 50 0" fill="none" stroke="var(--owl-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M199 186q-20 18-11 34 12 8 24-5m82-29q20 18 11 34-12 8-24-5" fill="var(--owl-wing)" stroke="var(--owl-ink)" strokeWidth="2.5" />
        <path d="M226 216v11m26-11v11" stroke="var(--owl-beak)" strokeWidth="4" strokeLinecap="round" />
      </motion.g>

      <motion.path
        d="M177 211q63 25 126 0v39H177z"
        fill="var(--owl-blanket)"
        stroke="var(--owl-ink)"
        strokeWidth="2.5"
        initial={reduceMotion ? false : { y: 28 }}
        animate={inView || reduceMotion ? { y: 0 } : undefined}
        transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
      />
      <path d="M178 225q15 8 30 0m74 0q10 6 21 0" fill="none" stroke="var(--owl-blanket-stitch)" strokeWidth="2" strokeLinecap="round" />

      {awake || clicked ? (
        <g>
          <path d="M110 47h151q12 0 12 12v30q0 12-12 12h-86l-20 14 5-14h-50q-12 0-12-12V59q0-12 12-12Z" fill="var(--owl-bubble)" stroke="var(--owl-ink)" strokeWidth="2" />
          <text x="186" y="77" textAnchor="middle" fill="var(--owl-bubble-text)" fontSize="13" fontFamily="sans-serif">
            {clicked ? clickLines[clickCount % clickLines.length] : "good evening!"}
          </text>
        </g>
      ) : null}
    </motion.svg>
  );
}
