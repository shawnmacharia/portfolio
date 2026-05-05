// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../../projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const { title, description, tags, image, url, repo } = project;

  return (
    <motion.article
      className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
