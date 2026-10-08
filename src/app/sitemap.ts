import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/content/projects";

const siteUrl = "https://shawnmacharia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/craft`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    ...getPublishedProjects().map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
