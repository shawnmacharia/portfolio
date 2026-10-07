"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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
  const [category, setCategory] = useState<CraftCategory>("all");
  const [items, setItems] = useState<CraftItem[]>(craftItems);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const filter = searchParams.get("filter");
    if (filter && craftCategories.includes(filter as CraftCategory)) {
      setCategory(filter as CraftCategory);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!mounted) return;
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("filter");
    } else {
      params.set("filter", category);
    }
    router.replace(`?/filter=${category === "all" ? "" : category}`, { scroll: false });
  }, [category, mounted, router, searchParams]);

  const filteredItems = useMemo(() => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  }, [category, items]);

  const handleFilter = (value: string) => {
    if (value === "rearrange") {
      setItems((prev) => shuffleArray(prev));
      return;
    }
    setCategory(value as CraftCategory);
  };

  return (
    <div className="mx-auto max-w-[1080px] px-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <FilterBar active={category} onChange={handleFilter} />
      </div>
      <div className="mt-4 text-right text-[11px] uppercase tracking-[0.18em] text-[#63717D]">i like to make things :)</div>
      <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <CraftCard key={item.id} item={item} active={true} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
