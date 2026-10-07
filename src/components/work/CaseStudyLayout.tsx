import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { Chip } from "@/components/ui/Chip";
import { ScrollspySidebar } from "@/components/work/ScrollspySidebar";
import { BeforeAfter } from "@/components/work/BeforeAfter";
import { CodeBlock } from "@/components/work/CodeBlock";
import { getPublishedProjects, type Project } from "@/content/projects";

export function CaseStudyLayout({ project, index, total }: { project: Project; index: number; total: number }) {
  const projects = getPublishedProjects();
  const previousSlug = projects[(index - 1 + total) % total]?.slug ?? null;
  const nextSlug = projects[(index + 1) % total]?.slug ?? null;

  return (
    <main className="mx-auto max-w-[1080px] px-6 pb-16 pt-10">
      <div className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#68757F]">
        <Link href="/work" className="inline-flex items-center gap-2 hover:text-[#111111]">
          <ArrowIcon className="h-3.5 w-3.5 rotate-180" /> work
        </Link>
      </div>
      <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.07em] text-[#111111]">{project.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip>power bi</Chip>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
        <ScrollspySidebar />
        <article className="max-w-[680px] space-y-10 text-[#2F3942]">
          <section id="overview" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">overview</p>
            <p className="mt-4 text-[1.08rem] leading-8 text-[#2C3641]">{project.summary}</p>
          </section>

          <section id="the-problem" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">the problem</p>
            <p className="mt-4 text-[1.05rem] leading-8 text-[#2C3641]">{project.problem}</p>
          </section>

          <section id="before-after" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">before & after</p>
            <p className="mt-4 text-[1.05rem] leading-8 text-[#2C3641]">{project.beforeAfter}</p>
            <div className="mt-6"><BeforeAfter /></div>
          </section>

          <section id="usability" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">usability & ux</p>
            <p className="mt-4 text-[1.05rem] leading-8 text-[#2C3641]">{project.usability}</p>
          </section>

          <section id="modeling" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">dax & modeling</p>
            <p className="mt-4 text-[1.05rem] leading-8 text-[#2C3641]">{project.modeling}</p>
            <div className="mt-6"><CodeBlock code={project.code} /></div>
          </section>

          <section id="outcome" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">outcome</p>
            <p className="mt-4 text-[1.05rem] leading-8 text-[#2C3641]">{project.outcome}</p>
          </section>
        </article>
      </div>
      <div className="mt-12 flex items-center justify-between border-t border-[#E6EBF1] pt-7 text-[11px] uppercase tracking-[0.16em] text-[#667885]">
        <Link href={previousSlug ? `/work/${previousSlug}` : "/work"} className="inline-flex items-center gap-2 hover:text-[#111111]">
          <ArrowIcon className="h-3.5 w-3.5 rotate-180" /> previous
        </Link>
        <Link href={nextSlug ? `/work/${nextSlug}` : "/work"} className="inline-flex items-center gap-2 hover:text-[#111111]">
          next <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </main>
  );
}
