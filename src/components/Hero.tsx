// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-primary/5 via-faint to-primary/5 dark:from-primary/10 dark:via-faint dark:to-primary/10 px-6"
    >
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <Image
          src="/Untitled design.png"
          alt="Shawn Macharia Mugambi"
          width={160}
          height={160}
          className="rounded-full border-4 border-primary shadow-xl"
        />
      </motion.div>

      <motion.h1
        className="mt-8 text-4xl md:text-5xl font-bold text-center"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Hi, <span className="text-primary">Shawn Macharia</span>
      </motion.h1>

      <motion.p
        className="mt-4 max-w-xl text-center text-lg md:text-xl text-gray-600 dark:text-gray-300"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        A Data Engineer & Analyst who turns raw data into meaningful insights
        and scalable pipelines. Welcome to my personal showcase.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <Link
          href="#projects"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
        >
          See My Work
        </Link>
        <Link
          href="#contact"
          className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
