"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const articles = [
  {
    title: "Building Reliable Data Pipelines",
    description:
      "Placeholder: notes on designing observable, maintainable ingestion workflows with Python and SQL.",
    label: "PIPELINES",
  },
  {
    title: "A Practical Guide to dbt Models",
    description:
      "Placeholder: a short walkthrough of clean transformations, testing, and documentation in dbt.",
    label: "ANALYTICS ENGINEERING",
  },
  {
    title: "From BigQuery to Power BI",
    description:
      "Placeholder: how a governed warehouse layer becomes useful, decision-ready reporting.",
    label: "BUSINESS INTELLIGENCE",
  },
  {
    title: "Metrics That Teams Can Trust",
    description:
      "Placeholder: lessons on defining, validating, and communicating metrics across an organisation.",
    label: "DATA PRACTICE",
  },
];

export default function Articles() {
  return (
    <section
      id="articles"
      className="bg-faint px-6 py-20 dark:bg-gray-800 md:px-12 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-gray-300 pb-4 dark:border-gray-700">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">
              FIELD NOTES
            </p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Articles
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-gray-600 dark:text-gray-300 sm:block">
            Ideas and working notes on data engineering and BI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              className="flex flex-col border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex aspect-[4/3] items-end bg-gradient-to-br from-primary/20 via-gray-800 to-gray-950 p-5">
                <span className="text-xs font-semibold tracking-[0.18em] text-primary">
                  {article.label}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {article.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Read more <FaArrowRight size={12} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
