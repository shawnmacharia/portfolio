import { Portrait } from "@/components/about/Portrait";
import { TagRow } from "@/components/about/TagRow";
import { Timeline } from "@/components/about/Timeline";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-20 pt-12 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#687785]">about</p>
          <h1 className="mt-4 text-[clamp(2.8rem,6vw,5rem)] font-light tracking-[-0.07em] text-[#111111]">
            I turn messy data into usable clarity.
          </h1>
          <p className="mt-5 max-w-[620px] text-[1.05rem] leading-8 text-[#4B5865]">
            I&apos;m Shawn Macharia Mugambi, an analytics engineer and BI specialist based in Nairobi, Kenya. My work sits at the intersection of data modeling, reporting design, and business storytelling.
          </p>
          <div className="mt-8">
            <TagRow />
          </div>
        </div>

        <Portrait />
      </div>

      <div className="mt-16 max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#687785]">timeline</p>
        <Timeline />
      </div>
    </section>
  );
}
