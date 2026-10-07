import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { Chip } from "@/components/ui/Chip";
import { ScrollspySidebar } from "@/components/work/ScrollspySidebar";
import { CodeBlock } from "@/components/work/CodeBlock";
import { DashboardImage } from "@/components/work/DashboardImage";
import { PbixSection } from "@/components/work/PbixSection";
import { siteConfig } from "@/config/site";
import { getPublishedProjects, type Project, type ProjectBlock } from "@/content/projects";

function ContentBlocks({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="text-[1.05rem] leading-8 text-[#2C3641]">
              {block.lead ? <strong>{block.lead} </strong> : null}
              {block.text}
            </p>
          );
        }

        if (block.type === "bullets") {
          return (
            <ul key={index} className="list-disc space-y-3 pl-5 text-[1.05rem] leading-8 text-[#2C3641]">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.lead ? <strong>{item.lead} </strong> : null}
                  {item.text}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "code") {
          return <CodeBlock key={index} code={block.code} label={block.label} />;
        }

        return (
          <aside key={index} className="rounded-r-[14px] border-l-4 border-[var(--accent)] bg-[var(--chip-bg)] px-5 py-4 text-[1.02rem] leading-8 text-[#2C3641]">
            {block.text}
          </aside>
        );
      })}
    </>
  );
}

export function CaseStudyLayout({ project }: { project: Project }) {
  const projects = getPublishedProjects();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previousSlug = projects[(index - 1 + projects.length) % projects.length]?.slug ?? null;
  const nextSlug = projects[(index + 1) % projects.length]?.slug ?? null;

  return (
    <main className="mx-auto max-w-[1080px] px-6 pb-16 pt-10">
      <div className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#68757F]">
        <Link href="/work" className="inline-flex items-center gap-2 hover:text-[#111111]">
          <ArrowIcon className="h-3.5 w-3.5 rotate-180" /> work
        </Link>
      </div>
      <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.07em] text-[#111111]">{project.title}</h1>
      <p className="mt-3 text-[clamp(1.25rem,2vw,1.4rem)] leading-8 text-[#68757F]">{project.cardTitle}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Chip>power bi</Chip>
        <a
          href={project.pbixUrl ?? siteConfig.pbixFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Power BI project files in OneDrive in a new tab"
          data-cursor-label="open .pbix"
          className="inline-flex items-center rounded-full border border-[#D9E6F2] bg-[#EEF3F7] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#526575] outline-none transition hover:bg-[#E4EDF4] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
        >
          {siteConfig.pbixOpenLabel}
        </a>
      </div>
      <div className="mt-8">
        <DashboardImage project={project} index={index} />
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
        <ScrollspySidebar />
        <article className="max-w-[680px] space-y-10 text-[#2F3942]">
          <section id="overview" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">overview</p>
            <p className="mt-4 text-[1.08rem] leading-8 text-[#2C3641]">{project.overview}</p>
          </section>

          <section id="the-problem" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">the problem</p>
            <p className="mt-4 text-[1.05rem] leading-8 text-[#2C3641]">{project.problem}</p>
          </section>

          <section id="usability-ux" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">usability & ux</p>
            <div className="mt-4 space-y-4"><ContentBlocks blocks={project.usability} /></div>
          </section>

          <section id="dax-modeling" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">dax & modeling</p>
            <div className="mt-4 space-y-4"><ContentBlocks blocks={project.modeling} /></div>
          </section>

          <section id="outcome" className="scroll-mt-[100px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">outcome</p>
            <p className="mt-4 text-[1.05rem] leading-8 text-[#2C3641]">{project.outcome}</p>
          </section>

          <PbixSection project={project} />
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
