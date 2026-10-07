"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { craftItems, craftCategories, type CraftCategory, type CraftItem } from "@/content/craft";
import { CraftCard } from "@/components/craft/CraftCard";
import { FilterBar } from "@/components/craft/FilterBar";

function shuffleArray<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function CraftGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [items, setItems] = useState<CraftItem[]>(craftItems);

  const category = useMemo<CraftCategory>(() => {
    const filter = searchParams.get("filter");
    return filter && craftCategories.includes(filter as CraftCategory) ? (filter as CraftCategory) : "all";
  }, [searchParams]);

  const filteredItems = useMemo(() => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  }, [category, items]);

  const handleFilter = (value: string) => {
    if (value === "rearrange") {
      setItems((prev) => shuffleArray(prev));
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("filter");
    } else {
      params.set("filter", value);
    }

    const next = params.toString();
    router.replace(next ? `?${next}` : "/craft", { scroll: false });
  };

  return (
    <div className="w-full max-w-[1080px]">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-light tracking-[-0.06em] text-[#111111]">craft</h1>
        <div className="flex-1 lg:max-w-[760px]">
          <FilterBar active={category} onChange={handleFilter} />
        </div>
      </div>
      <div className="mb-6 text-left text-[11px] uppercase tracking-[0.14em] text-[#63717D] lg:text-right">i like building things with data :)</div>
      <motion.div layout className="mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <CraftCard key={item.id} item={item} active={true} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
