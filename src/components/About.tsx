// components/About.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const aboutVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-faint dark:bg-gray-800 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text block */}
        <motion.div
          className="space-y-4"
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
        >
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A <strong>self-taught Data Engineer & Analyst</strong> who built my
            skills from the ground up — driven by curiosity and a love for
            making sense of complex data. What started as personal projects grew
            into a freelance career helping clients turn raw data into
            actionable insights and reliable pipelines.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Outside of data, you will find me at the chessboard — a game that
            sharpens the same strategic thinking I bring to every project. I am
            always learning, always iterating, and always up for a match.
          </p>
        </motion.div>

        {/* Image side */}
        <motion.div
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={2}
        >
          <Image
            src="/About picture.jpeg"
            alt="Shawn Macharia Mugambi"
            width={500}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
