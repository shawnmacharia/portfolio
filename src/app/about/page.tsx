import { Portrait } from "@/components/about/Portrait";
import { TagRow } from "@/components/about/TagRow";
import { Timeline } from "@/components/about/Timeline";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-20 pt-12 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#687785]">about</p>
          <div className="mt-8">
            <TagRow />
          </div>

          <div className="mt-8 max-w-[700px] space-y-5 text-[1.05rem] leading-8 text-[#4B5865]">
            <p>
              I&apos;m Shawn Macharia Mugambi, an analytics engineer and BI specialist based in Nairobi, Kenya. My work sits at the intersection of data modeling, reporting design, and business storytelling.
            </p>
            <p>
              I have a background in Actuarial Science and currently work as a Data Analytics Engineer. I like learning how businesses operate under the hood, then engineering and modeling the data they need to make clear, actionable decisions.
            </p>
            <p>
              Most of what I build comes back to clarity and performance for other people: I love taking fragmented, complex datasets and turning them into intuitive, automated workflows—from optimizing a single DAX measure to architecting full-scale automated pipelines.
            </p>
            <p>
              In my free time, I am usually playing chess, jamming out to the Arctic Monkeys (give me music recs pls), or testing my emotional discipline by trading Gold and NAS100 markets.
            </p>
            <p>
              Say hi anytime: at shawnmugambi1@gmail.com or on LinkedIn :)
            </p>
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
