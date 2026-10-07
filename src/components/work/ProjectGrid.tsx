"use client";

import { motion } from "framer-motion";
import { getPublishedProjects } from "@/content/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectGrid() {
  const projects = getPublishedProjects();

  return (
    <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-8 px-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.08} className="block">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * index }}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
