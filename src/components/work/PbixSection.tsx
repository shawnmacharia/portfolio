import { siteConfig } from "@/config/site";
import type { Project } from "@/content/projects";

export function PbixSection({ project }: { project?: Pick<Project, "pbixUrl"> }) {
  const href = project?.pbixUrl ?? siteConfig.pbixFolderUrl;
  const newTabLabel = "Opens Power BI files in OneDrive in a new tab";

  return (
    <section id="pbix" className="scroll-mt-[100px]">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#6F7E8A]">the .pbix</p>
      <div className="mt-4 rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] sm:p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D9E6F2] bg-[#EEF3F7] text-[#526575]" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path d="M7 3.75h7l4.25 4.5v12H7a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M14 4v4.5h4M8.5 13h7M8.5 16.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-4 text-[1.25rem] font-medium tracking-[-0.03em] text-[#1C1C1E]">{siteConfig.pbixHeadline}</h2>
        <p className="mt-2 max-w-2xl text-[0.98rem] leading-7 text-[#5C6873]">{siteConfig.pbixDescription}</p>
        <p className="mt-4 font-mono text-[11px] tracking-[0.04em] text-[#6F7E8A]">{siteConfig.pbixPath}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={newTabLabel}
          data-cursor-label="open .pbix"
          className="mt-5 inline-flex rounded-full bg-[#20252B] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white outline-none transition hover:bg-[#39434D] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
        >
          {siteConfig.pbixButtonLabel}
        </a>
      </div>
    </section>
  );
}
