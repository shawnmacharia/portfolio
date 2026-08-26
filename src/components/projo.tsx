// src/components/projo.tsx
"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./projectcards";

export default function Projects() {
  // Separate projects by their category
  const engineeringProjects = projects.filter(
    (p) => p.category === "engineering",
  );
  const analyticsProjects = projects.filter((p) => p.category === "analytics");

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* ---------- DATA ENGINEERING SECTION ---------- */}
        {engineeringProjects.length > 0 && (
          <div className="mb-16">
            <h2
              id="engineering"
              className="text-3xl font-bold text-center text-primary mb-8 scroll-mt-24"
            >
              Data Engineering Projects
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Building reliable pipelines and analytical data systems.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {engineeringProjects.map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={idx}
                />
              ))}
            </div>
          </div>
        )}

        {/* ---------- ANALYTICS & BI SECTION ---------- */}
        {analyticsProjects.length > 0 && (
          <div>
            <h2
              id="analytics"
              className="text-3xl font-bold text-center text-primary mb-8 scroll-mt-24"
            >
              Analytics & Business Intelligence
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Turning structured data into decision‑ready insights.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsProjects.map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  // offset index so the staggered animation continues nicely
                  index={engineeringProjects.length + idx}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
