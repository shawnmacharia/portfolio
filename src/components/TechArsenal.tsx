// src/components/TechArsenal.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaDocker,
  FaProjectDiagram,
  FaCalculator,
  FaCode,
  FaChartBar,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiApacheairflow,
  SiDbt,
  SiGooglebigquery,
} from "react-icons/si";

type Tech = {
  name: string;
  description: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
};

const dataEngineering: Tech[] = [
  {
    name: "Python",
    description: "Data extraction, transformation & automation",
    Icon: FaPython,
  },
  {
    name: "SQL",
    description: "Analytical querying & data manipulation",
    Icon: FaDatabase,
  },
  {
    name: "PostgreSQL",
    description: "Relational storage for structured data",
    Icon: SiPostgresql,
  },
  {
    name: "Docker",
    description: "Containerised environments & reproducibility",
    Icon: FaDocker,
  },
  {
    name: "Apache Airflow",
    description: "Pipeline orchestration & scheduling",
    Icon: SiApacheairflow,
  },
];

const analyticsEngineering: Tech[] = [
  {
    name: "dbt",
    description: "Analytics‑focused transformations & modelling",
    Icon: SiDbt,
  },
  {
    name: "BigQuery",
    description: "Fast, server‑less data warehouse",
    Icon: SiGooglebigquery,
  },
  {
    name: "Data Modelling",
    description: "Schema design & dimensional modelling",
    Icon: FaProjectDiagram,
  },
];

const businessIntelligence: Tech[] = [
  {
    name: "Power BI",
    description: "Interactive dashboards & reporting",
    Icon: FaChartBar,
  },
  {
    name: "DAX",
    description: "Data‑analysis expressions for calculations",
    Icon: FaCalculator,
  },
  {
    name: "Power Query",
    description: "ETL inside Power BI / Excel",
    Icon: FaCode,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

export default function TechArsenal() {
  return (
    <section
      id="tech"
      className="py-20 bg-faint dark:bg-gray-800 px-6 md:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          TECHNICAL ARSENAL
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Tools I use to build, transform and communicate data.
        </p>

        {/* ---- Data Engineering ---- */}
        <h3 className="text-xl font-semibold text-primary mb-4">
          Data Engineering
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {dataEngineering.map((tech, idx) => (
            <motion.article
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
            >
              <tech.Icon className="text-primary" size={36} />
              <h4 className="mt-3 text-lg font-medium text-primary">
                {tech.name}
              </h4>
              <p className="mt-1 text-sm text-center text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* ---- Analytics Engineering ---- */}
        <h3 className="text-xl font-semibold text-primary mb-4">
          Analytics Engineering
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {analyticsEngineering.map((tech, idx) => (
            <motion.article
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
            >
              <tech.Icon className="text-primary" size={36} />
              <h4 className="mt-3 text-lg font-medium text-primary">
                {tech.name}
              </h4>
              <p className="mt-1 text-sm text-center text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* ---- Business Intelligence ---- */}
        <h3 className="text-xl font-semibold text-primary mb-4">
          Business Intelligence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {businessIntelligence.map((tech, idx) => (
            <motion.article
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
            >
              <tech.Icon className="text-primary" size={36} />
              <h4 className="mt-3 text-lg font-medium text-primary">
                {tech.name}
              </h4>
              <p className="mt-1 text-sm text-center text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
