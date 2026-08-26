// src/app/projects/epra-fuel-intelligence/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaRegArrowAltCircleRight,
  FaChartBar,
} from "react-icons/fa";
import {
  SiApacheairflow,
  SiPostgresql,
  SiGooglebigquery,
  SiDbt,
} from "react-icons/si";

/* -------------------------------------------------------------
   Simple fade‑in animation
------------------------------------------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 },
  }),
};

/* -------------------------------------------------------------
   Helper component for architecture diagram nodes
------------------------------------------------------------- */
type ArchNodeProps = {
  icon: React.ReactNode;
  label: string;
};

function ArchNode({ icon, label }: ArchNodeProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
      <span className="mt-2 text-sm font-medium text-primary">{label}</span>
    </div>
  );
}

/* -------------------------------------------------------------
   Main case‑study component
------------------------------------------------------------- */
export default function EpraCaseStudy() {
  return (
    <section className="bg-faint dark:bg-gray-800 px-6 md:px-12 py-12 scroll-mt-24 min-h-screen">
      <motion.article
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        custom={1}
        className="max-w-6xl mx-auto"
      >
        {/* ───── CASE‑STUDY HERO ───── */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">
            DATA ENGINEERING CASE STUDY
          </h1>
          <h2 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-200">
            EPRA Fuel Intelligence
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            An automated pipeline that transforms Kenya’s EPRA monthly petroleum
            price publications into structured, validated, analysis‑ready fuel
            intelligence.
          </p>

          <p className="mt-4 text-sm font-medium text-primary">
            Python • PostgreSQL • Docker • Airflow • BigQuery • dbt • Power BI
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/#projects"
              className="px-5 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
            >
              ← Back to Projects
            </Link>

            <a
              href="https://github.com/shawnmacharia/epra-fuel-data-pipeline"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primary/90 transition"
            >
              View on GitHub
            </a>
          </div>
        </header>

        {/* ───── PROJECT OVERVIEW ───── */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            Project Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
            <div>
              <strong className="block text-gray-700 dark:text-gray-300">
                Project Type
              </strong>
              Data Engineering / Analytics Engineering
            </div>
            <div>
              <strong className="block text-gray-700 dark:text-gray-300">
                Domain
              </strong>
              Energy / Petroleum Analytics
            </div>
            <div>
              <strong className="block text-gray-700 dark:text-gray-300">
                Data Source
              </strong>
              EPRA monthly petroleum‑pump price publications (PDF/CSV)
            </div>
            <div>
              <strong className="block text-gray-700 dark:text-gray-300">
                Primary Goal
              </strong>
              Turn recurring source data into reliable analytical data and a
              consumable Power BI dashboard.
            </div>
          </div>
        </section>

        {/* ───── THE PROBLEM ───── */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">Problem</h3>
          <p className="text-gray-600 dark:text-gray-300">
            EPRA releases a monthly publication containing fuel‑price data for
            dozens of towns across Kenya. The data arrives in a semi‑structured
            format, with occasional layout changes, duplicate rows, and missing
            fields. Manual downloads and ad‑hoc spreadsheets were error‑prone
            and time‑consuming, preventing timely analysis of price trends.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-semibold">
            The challenge was to build a repeatable, automated pipeline that
            could:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-300 mt-2 space-y-1">
            <li>Fetch the new publication automatically each month.</li>
            <li>Extract tabular data reliably from the source file.</li>
            <li>Clean, normalise, and validate the records.</li>
            <li>Store the cleaned data in a relational staging database.</li>
            <li>Orchestrate the whole workflow on a schedule.</li>
            <li>Provide downstream modeling for a Power BI dashboard.</li>
          </ul>
        </section>

        {/* ───── ARCHITECTURE ───── */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">Architecture</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
            <ArchNode
              icon={
                <FaRegArrowAltCircleRight className="text-primary" size={28} />
              }
              label="EPRA PDFs"
            />
            <ArchNode
              icon={<FaPython className="text-primary" size={28} />}
              label="Python Extraction"
            />
            <ArchNode
              icon={<FaDatabase className="text-primary" size={28} />}
              label="Pandas Cleaning"
            />
            <ArchNode
              icon={<SiPostgresql className="text-primary" size={28} />}
              label="PostgreSQL Staging"
            />
            <ArchNode
              icon={<SiApacheairflow className="text-primary" size={28} />}
              label="Airflow DAGs"
            />
            <ArchNode
              icon={<SiGooglebigquery className="text-primary" size={28} />}
              label="BigQuery Warehouse"
            />
            <ArchNode
              icon={<SiDbt className="text-primary" size={28} />}
              label="dbt Modeling"
            />
            <ArchNode
              icon={<FaChartBar className="text-primary" size={28} />}
              label="Power BI Visuals"
            />
          </div>
        </section>

        {/* ───── DATA PIPELINE ───── */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">Data Pipeline</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Source:</strong> EPRA releases monthly pump‑price data
              publications.
            </li>
            <li>
              <strong>Extract:</strong> Python scripts fetch the document and
              extract raw table data.
            </li>
            <li>
              <strong>Transform (clean):</strong> Pandas normalises column
              names, converts data types, and removes duplicates.
            </li>
            <li>
              <strong>Stage:</strong> Cleaned rows are written into a PostgreSQL
              staging schema.
            </li>
            <li>
              <strong>Orchestrate:</strong> Apache Airflow triggers and monitors
              execution steps sequentially.
            </li>
            <li>
              <strong>Warehouse:</strong> Staged data loads into Google BigQuery
              for scalable analytics.
            </li>
            <li>
              <strong>Model:</strong> dbt transforms staging entities into star
              schema analytical datasets.
            </li>
            <li>
              <strong>Consume:</strong> Power BI connects to production models
              to render interactive trends.
            </li>
          </ol>
        </section>

        {/* ───── ENGINEERING DETAILS ───── */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            Data Engineering Details
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-1">
                Data Extraction
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Python scripts use{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                  requests
                </code>{" "}
                and{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                  BeautifulSoup
                </code>{" "}
                to locate release links and extract tabular data into structured
                dicts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-1">Data Cleaning</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Pandas handles snake_case column standardisation, ISO date
                conversions, numeric type coercion (`float`), and missing row
                handling.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-1">
                Data Validation
              </h4>
              <div className="text-gray-600 dark:text-gray-300">
                Integrity checks executed post‑cleaning:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>
                    Composite key constraint verification on (town_id,
                    effective_date).
                  </li>
                  <li>
                    Price boundaries checked against historical range
                    thresholds.
                  </li>
                  <li>Row-count assertions (expected &gt; 0 records).</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-1">
                Database &amp; Orchestration
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Containerised via Docker Compose. PostgreSQL serves as the
                staging relational store, while scheduled Apache Airflow DAGs
                control pipeline flow control.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-1">
                Warehouse &amp; Transformation
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Data is ingested into BigQuery and modeled using dbt, isolating
                dimensional entities and pre‑calculating price movements.
              </p>
            </div>
          </div>
        </section>

        {/* ───── DATA MODELLING ───── */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            Data Modelling
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The dbt layer materialises a star schema optimized for analytical
            query execution:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow text-center">
              <strong className="block text-primary mb-2">dim_town</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Town ID, town name, region, and geographic coordinates.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow text-center">
              <strong className="block text-primary mb-2">
                fact_fuel_price
              </strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Super Petrol, Diesel, and Kerosene prices per litre with
                effective date keys.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow text-center">
              <strong className="block text-primary mb-2">dim_date</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Calendar dimension mapping month, quarter, year, and price
                cycles.
              </p>
            </div>
          </div>
        </section>

        {/* ───── FOOTER NAV ───── */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <Link
            href="/#projects"
            className="text-sm text-primary hover:underline font-medium"
          >
            ← Back to All Projects
          </Link>
          <a
            href="https://github.com/shawnmacharia/epra-fuel-data-pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            Explore Code Repository →
          </a>
        </footer>
      </motion.article>
    </section>
  );
}
