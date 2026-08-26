// src/components/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

/* -------------------------------------------------------------
   Animation helpers – same pattern used elsewhere in the site
------------------------------------------------------------- */
const container = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 },
  }),
};

/* -------------------------------------------------------------
   Re‑usable badge component (small, subtle, tech‑oriented)
------------------------------------------------------------- */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------
   Main Experience component – vertical timeline
------------------------------------------------------------- */
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-faint dark:bg-gray-800 px-6 md:px-12 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Professional Experience
        </h2>

        {/* ---- Timeline container ---- */}
        <div className="relative border-l-2 border-primary/30 pl-8">
          {/* ───── DATA ANALYTICS ENGINEER – Data Cycle Analytics ───── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <FaClock className="text-primary mr-3" />
              <time className="text-sm text-gray-600 dark:text-gray-300">
                Sep 2025 – Aug 2026
              </time>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-1">
              Data Analyst / Analytics Engineer
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
              Data Cycle Analytics, Nairobi, Kenya
            </p>

            {/* ---- Highlight badges ---- */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge>Python</Badge>
              <Badge>SQL</Badge>
              <Badge>BigQuery</Badge>
              <Badge>dbt</Badge>
              <Badge>Airflow</Badge>
              <Badge>Docker</Badge>
              <Badge>Power BI</Badge>
              <Badge>+ SQL Server</Badge>
              <Badge>+ Redis</Badge>
              <Badge>+ DAX</Badge>
              <Badge>+ VBA</Badge>
            </div>

            {/* ---- High‑value portfolio statements ---- */}
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>FinOps Sentinel</strong> – architected a
                production‑grade containerised reconciliation micro‑service
                (Docker + Redis + SQL Server) that continuously matches internal
                transactions against bank &amp; payment‑gateway statements,
                eliminating multi‑hour manual checks and delivering always‑on
                monitoring.
              </li>
              <li>
                <strong>BigQuery + dbt + Medallion Architecture</strong> – built
                Bronze, Silver and Gold layers in Google BigQuery, turning
                disparate client datasets into tested analytical tables trusted
                by finance and operations.
              </li>
              <li>
                <strong>Python observability &amp; data‑quality alerts</strong>{" "}
                – added near‑real‑time detection of reconciliation exceptions
                and data‑quality anomalies, replacing end‑of‑day manual reviews.
              </li>
              <li>
                <strong>Power BI &amp; parameter‑driven DAX</strong> –
                redesigned core revenue models on SQL Server, introducing
                dynamic date tables and reusable DAX measures that remove
                hard‑coded cut‑offs.
              </li>
              <li>
                <strong>Automation</strong> – automated recurring reconciliation
                and reporting workflows with VBA and Python/Pandas, freeing
                analyst time for higher‑value work.
              </li>
            </ul>
          </motion.div>

          {/* ───── DATA & ANALYTICS INTERN – Minet Insurance ───── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <FaClock className="text-primary mr-3" />
              <time className="text-sm text-gray-600 dark:text-gray-300">
                Jun 2025 – Aug 2025
              </time>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-1">
              Data &amp; Analytics Intern — Life &amp; Medical
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
              Minet Insurance, Kampala, Uganda
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              <Badge>Power BI</Badge>
              <Badge>Excel</Badge>
              <Badge>Insurance Analytics</Badge>
            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Delivered recurring Power BI performance reports on life &amp;
                medical portfolios, giving management clear visibility into
                claims and utilization trends.
              </li>
              <li>
                Reconciled financial and operational data across multiple
                systems, ensuring actuarial‑ready accuracy for premium and claim
                records.
              </li>
              <li>
                Analyzed utilization and exception patterns to inform
                risk‑pricing discussions and maintain audit‑ready documentation.
              </li>
            </ul>
          </motion.div>

          {/* ───── CLAIM ANALYST INTERN – APA Insurance ───── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            <div className="flex items-center mb-4">
              <FaClock className="text-primary mr-3" />
              <time className="text-sm text-gray-600 dark:text-gray-300">
                May 2022 – Jul 2022
              </time>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-1">
              Claim Analyst Intern
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
              APA Insurance, Kampala, Uganda
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              <Badge>Excel</Badge>
              <Badge>Claims Analysis</Badge>
            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Validated policy and claims portfolios, catching data‑entry
                errors before they entered actuarial and financial reporting.
              </li>
              <li>
                Executed cross‑ledger reconciliations that protected the
                integrity of numbers used in reserving and pricing.
              </li>
              <li>
                Partnered with underwriting and claims teams to resolve
                case‑level discrepancies, laying the foundation for a
                data‑driven insurance career.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
