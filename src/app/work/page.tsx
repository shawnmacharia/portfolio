import { ProjectGrid } from "@/components/work/ProjectGrid";

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-20 pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#687785]">selected work</p>
        <h1 className="mt-4 text-[clamp(2.8rem,6vw,5rem)] font-light tracking-[-0.07em] text-[#111111]">
          Data products with a calmer point of view.
        </h1>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-[#4B5865]">
          I design and build analytics experiences that help teams move from fragmented numbers to clear decisions.
        </p>
      </div>

      <div className="mt-12">
        <ProjectGrid />
      </div>
    </section>
  );
}
