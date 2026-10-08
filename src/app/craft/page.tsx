import { Suspense } from "react";
import { CraftGrid } from "@/components/craft/CraftGrid";
import { getArticleCraftItems } from "@/lib/articles";

export const revalidate = 1800;

export default async function CraftPage() {
  const articles = await getArticleCraftItems();

  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-20 pt-12 sm:pt-16">
      <div className="mt-12">
        <Suspense fallback={null}>
          <CraftGrid articles={articles} />
        </Suspense>
      </div>
    </section>
  );
}
