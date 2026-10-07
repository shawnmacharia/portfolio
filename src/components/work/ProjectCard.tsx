import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import type { Project } from "@/content/projects";

function CoverArt({ index }: { index: number }) {
  const colors = [
    ["#D9E9F4", "#C6DBF0", "#9CB9CF"],
    ["#E9E4F2", "#D4D8F1", "#B5BBD3"],
    ["#E8F0E8", "#CFDCCB", "#A7B9A8"],
    ["#E8E9EE", "#D2D8E7", "#B3BFD1"],
    ["#E9F1F3", "#D7E5EA", "#AFC9D3"],
  ];
  const palette = colors[index % colors.length];

  return (
    <svg viewBox="0 0 720 520" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="720" height="520" fill="#FAFAFB" />
      <rect x="32" y="48" width="656" height="420" rx="22" fill={palette[0]} opacity="0.85" />
      <g opacity="0.9">
        <rect x="96" y="280" width="120" height="120" rx="14" fill={palette[1]} />
        <rect x="238" y="220" width="118" height="180" rx="14" fill={palette[2]} />
        <rect x="382" y="170" width="136" height="230" rx="14" fill={palette[1]} />
        <rect x="540" y="120" width="90" height="280" rx="14" fill={palette[2]} opacity="0.8" />
      </g>
      <g fill="none" stroke="#1C1C1E" strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <path d="M120 255c30-54 74-83 118-93 52-12 94 4 136 31 31 20 65 41 109 38 35-2 79-22 117-66" />
        <path d="M110 330c38-21 64-38 94-58 44-28 95-34 146-15 30 11 60 28 92 31 29 3 59-9 88-28" />
      </g>
      <g fill="#1C1C1E" opacity="0.14">
        <circle cx="150" cy="176" r="7" />
        <circle cx="402" cy="136" r="6" />
        <circle cx="560" cy="195" r="8" />
      </g>
    </svg>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-[14px] outline-none transition focus-visible:ring-2 focus-visible:ring-[#6B9BC3] focus-visible:ring-offset-2"
      data-cursor-label="view project"
    >
      <div className="overflow-hidden rounded-[10px] border border-[#E7E9EF] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
        <div className="relative overflow-hidden">
          <div className="transition duration-500 group-hover:scale-[1.04] group-hover:opacity-80">
            <CoverArt index={index} />
          </div>
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-[#2B2F36] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white opacity-0 transition duration-300 group-hover:opacity-100">
            view project
          </span>
        </div>
        <div className="px-4 pb-5 pt-4">
          <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6E7781]">
            <span>{project.title}</span>
          </div>
          <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-light tracking-[-0.05em] text-[#1C1C1E]">{project.cardTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>power bi</Chip>
          </div>
        </div>
      </div>
    </Link>
  );
}
