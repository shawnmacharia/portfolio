"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function Hero() {
  return (
    <section className="py-24 px-6 md:px-12 bg-faint dark:bg-gray-900 text-center min-h-[85vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-primary font-semibold text-lg mb-2"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Shawn Macharia Mugambi
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Data Analytics Engineer & BI Specialist
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 leading-relaxed"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          I build production-grade data pipelines, automated financial
          reconciliation systems, and decision-ready analytical solutions across
          Python, SQL, dbt, BigQuery, and Power BI.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <Link
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition shadow-sm"
          >
            View My Work
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition"
          >
            Get in Touch
          </Link>

          <a
            href="/Shawn-Mugambi-Resume.pdf"
            className="w-full sm:w-auto px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition"
            download
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
