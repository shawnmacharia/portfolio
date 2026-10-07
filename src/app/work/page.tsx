import { ProjectGrid } from "@/components/work/ProjectGrid";
import { siteConfig } from "@/config/site";
import { AlchemistOwl } from "@/components/mascot/AlchemistOwl";

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-20 pt-6 sm:pt-8 lg:pt-10">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-12">
        <div className="max-w-[620px] text-left">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#687785]">{siteConfig.heroLead}</p>
          <h1 className="mt-2 text-[clamp(3rem,7vw,5rem)] font-light leading-[0.95] tracking-[-0.07em] text-[#111111]">
            {siteConfig.heroName}
          </h1>
          <p className="mt-3 max-w-[760px] text-[clamp(1.2rem,1.7vw,1.7rem)] leading-[1.35] text-[#1C1C1E]">
            <span className="font-medium">an </span>
            <span className="font-medium">{siteConfig.heroRole}</span>
            {" "}
            {siteConfig.heroLine}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#687785]">
            {siteConfig.heroMeta}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[520px]" aria-live="polite">
            <div className="relative aspect-[480/420] w-full overflow-hidden rounded-[24px]">
              <AlchemistOwl />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <ProjectGrid />
      </div>
    </section>
  );
}
