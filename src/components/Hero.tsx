"use client";

import Link from "next/link";
import Image from "next/image";
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
    <section className="bg-faint px-6 pb-16 pt-36 dark:bg-gray-900 md:px-12 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.7fr)] md:gap-16">
          <motion.div
            className="flex justify-center md:justify-start"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Image
              src="/my-bitmoji.png"
              alt="Shawn Macharia avatar"
              width={280}
              height={280}
              priority
              className="h-52 w-52 rounded-full border-4 border-primary/60 object-cover shadow-lg shadow-primary/10 md:h-64 md:w-64"
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.p
              className="mb-4 text-lg font-semibold text-primary"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Data Analytics Engineer & BI Specialist
            </motion.p>

            <motion.p
              className="max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200 md:text-2xl"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              I&apos;m Shawn Macharia, a Data Analytics Engineer & BI Specialist
              building reliable systems that make complex information easier to
              act on. My work spans Python and SQL, from an{" "}
              <Link
                href="#projects"
                className="underline decoration-primary underline-offset-4 hover:text-primary"
              >
                EPRA pipeline
              </Link>{" "}
              to decision-ready reporting. I use{" "}
              <Link
                href="#tech"
                className="underline decoration-primary underline-offset-4 hover:text-primary"
              >
                dbt & BigQuery
              </Link>{" "}
              and Power BI to turn operational data into clear, useful insight.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Link
                href="#projects"
                className="w-full rounded-md bg-primary px-6 py-3 text-center font-medium text-white shadow-sm transition hover:bg-primary/90 sm:w-auto"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="w-full rounded-md border border-primary px-6 py-3 text-center font-medium text-primary transition hover:bg-primary hover:text-white sm:w-auto"
              >
                Get in Touch
              </Link>
              <a
                href="/Shawn-Mugambi-Resume.pdf"
                className="w-full rounded-md border border-primary px-6 py-3 text-center font-medium text-primary transition hover:bg-primary hover:text-white sm:w-auto"
                download
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-300 dark:border-gray-700" />
      </div>
    </section>
  );
}
