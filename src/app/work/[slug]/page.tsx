import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { getPublishedProjects, projectMap } from "@/content/projects";

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap.get(slug);

  if (!project?.published) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
