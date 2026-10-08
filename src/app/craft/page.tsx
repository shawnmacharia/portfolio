import { Suspense } from "react";
import { CraftGrid } from "@/components/craft/CraftGrid";

export default function CraftPage() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-20 pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#687785]">
          craft
        </p>
        <p className="mt-2 max-w-xl text-[1.05rem] leading-8 text-[#4B5865]">
          I build side projects and learning artifacts that sharpen how I think
          about data quality, storytelling, and product design.
        </p>
      </div>

      <div className="mt-12">
        <Suspense fallback={null}>
          <CraftGrid />
        </Suspense>
      </div>
    </section>
  );
}
