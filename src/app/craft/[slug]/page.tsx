import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardCarousel } from "@/components/work/DashboardCarousel";
import { PbixSection } from "@/components/work/PbixSection";
import { craftItems } from "@/content/craft";
import { getDashboardImages } from "@/lib/dashboardImages";

export function generateStaticParams() {
  return craftItems
    .filter((item) => item.slug && item.href?.startsWith("/craft/"))
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = craftItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return {
    title: `${item.title} | Craft | Shawn Mugambi`,
    description: item.description,
  };
}

export default async function CraftDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = craftItems.find((entry) => entry.slug === slug);

  if (!item || !item.slug || !item.href?.startsWith("/craft/")) {
    notFound();
  }

  const images = getDashboardImages(item.slug);

  return (
    <main className="mx-auto max-w-[1080px] px-6 pb-20 pt-12 sm:pt-16">
      <Link href="/craft" className="mb-8 inline-flex text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--text)]">
        ← craft
      </Link>
      <h1 className="text-[clamp(2.3rem,5vw,4rem)] font-light tracking-[-0.06em] text-[var(--text)]">{item.title}</h1>
      <p className="mt-3 max-w-2xl text-[1.08rem] leading-8 text-[var(--muted)]">{item.description}</p>

      <div className="mt-8">
        {images.length ? (
          <DashboardCarousel images={images} title={item.title} />
        ) : item.cover ? (
          <div className="relative aspect-[1263/725] overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)]">
            <Image src={item.cover} alt={item.title} fill sizes="(min-width: 1024px) 1080px, 100vw" className="object-contain" />
          </div>
        ) : null}
      </div>

      <div className="mt-10 max-w-[680px]">
        <PbixSection />
      </div>
    </main>
  );
}
