// src/components/FeaturedProject.tsx
"use client";

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

/* -----------------------------------------------------------------
   Simple fade‑in with slight upward motion – reuse the pattern used
   in Hero / ProjectCard.
----------------------------------------------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

/* -----------------------------------------------------------------
   Architecture node – small helper component to keep the markup tidy.
----------------------------------------------------------------- */
type NodeProps = {
  icon: React.ReactNode;
  label: string;
};

function ArchNode({ icon, label }: NodeProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
      <span className="mt-2 text-sm font-medium text-primary">{label}</span>
    </div>
  );
}

/* -----------------------------------------------------------------
   Main component
----------------------------------------------------------------- */
export default function FeaturedProject() {
  return (
    <section
      id="featured"
      className="py-20 bg-faint dark:bg-gray-800 px-6 md:px-12 scroll-mt-24"
    >
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="max-w-6xl mx-auto"
      >
        {/* ----- Header ----- */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Featured Data Engineering Project
        </h2>

        {/* ----- Title & short description ----- */}
        <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-4">
          EPRA Fuel Intelligence
        </h3>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
          An automated pipeline that extracts Kenya’s EPRA monthly petroleum
          price releases, cleans and validates the data, stores it in
          PostgreSQL, orchestrates the workflow with Airflow, loads it into
          BigQuery, transforms it with dbt, and finally visualises fuel‑price
          insights in Power BI.
        </p>

        {/* ----- Architecture diagram (responsive) ----- */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            gap-6
            md:gap-8
            mb-12
          "
        >
          {/* Source */}
          <ArchNode
            icon={
              <FaRegArrowAltCircleRight className="text-primary" size={28} />
            }
            label="EPRA (monthly fuel price PDFs)"
          />

          {/* Extraction */}
          <ArchNode
            icon={<FaPython className="text-primary" size={28} />}
            label="Python + BeautifulSoup"
          />

          {/* Processing */}
          <ArchNode
            icon={<FaDatabase className="text-primary" size={28} />}
            label="Pandas (cleaning & validation)"
          />

          {/* Staging */}
          <ArchNode
            icon={<SiPostgresql className="text-primary" size={28} />}
            label="PostgreSQL (staging)"
          />

          {/* Orchestration */}
          <ArchNode
            icon={<SiApacheairflow className="text-primary" size={28} />}
            label="Airflow (scheduling)"
          />

          {/* Warehouse */}
          <ArchNode
            icon={<SiGooglebigquery className="text-primary" size={28} />}
            label="BigQuery (warehouse)"
          />

          {/* Transformation */}
          <ArchNode
            icon={<SiDbt className="text-primary" size={28} />}
            label="dbt (modeling)"
          />

          {/* Visualisation */}
          <ArchNode
            icon={<FaChartBar className="text-primary" size={28} />}
            label="Power BI (dashboard)"
          />
        </div>

        {/* ----- Technical metadata (grid) ----- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-8">
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Data Source</strong>
            EPRA monthly petroleum price publications
          </div>
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Ingestion</strong>
            Python + BeautifulSoup
          </div>
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Processing</strong>
            Pandas (clean/validate)
          </div>
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Storage</strong>
            PostgreSQL (staging)
          </div>
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Orchestration</strong>
            Apache Airflow (Dockerised)
          </div>
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Warehouse</strong>
            Google BigQuery
          </div>
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Transformation</strong>
            dbt (analytical models)
          </div>
          <div className="p-3 bg-white dark:bg-gray-900 rounded">
            <strong className="block text-primary">Visualization</strong>
            Power BI dashboard
          </div>
        </div>

        {/* ----- Engineering Highlights ----- */}
        <h4 className="text-xl font-semibold text-primary mb-4">
          Engineering Highlights
        </h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li>Automated extraction of EPRA fuel‑price PDFs each month.</li>
          <li>Validated, schema‑driven staging in PostgreSQL.</li>
          <li>Containerised Airflow & PostgreSQL environments via Docker.</li>
          <li>Scheduled, repeatable pipelines orchestrated with Airflow.</li>
          <li>Analytical transformations and modelling with dbt.</li>
          <li>Business‑ready dashboards delivered through Power BI.</li>
        </ul>

        {/* ----- Stack (quick‑scan) ----- */}
        <h4 className="text-xl font-semibold text-primary mb-4">Stack</h4>
        <div className="flex flex-wrap gap-2 mb-8 text-sm">
          {[
            "Python",
            "SQL",
            "PostgreSQL",
            "Docker",
            "Airflow",
            "BigQuery",
            "dbt",
            "Power BI",
          ].map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-primary/10 text-primary rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ----- CTA Buttons ----- */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* GitHub – placeholder if URL not known */}
          <a
            href="#"
            className="px-5 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primary/90 transition disabled:opacity-50"
            aria-disabled="true"
            title="GitHub URL not yet provided"
          >
            View on GitHub (coming soon)
          </a>

          {/* Dashboard – placeholder if URL not known */}
          <a
            href="#"
            className="px-5 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition disabled:opacity-50"
            aria-disabled="true"
            title="Dashboard URL not yet provided"
          >
            View Dashboard (coming soon)
          </a>
        </div>
      </motion.div>
    </section>
  );
}
