import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { projectMap, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap.get(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === slug);

  return <CaseStudyLayout project={project} index={index} total={projects.length} />;
}
