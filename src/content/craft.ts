export type CraftKind = "github" | "onedrive" | "medium" | "blogspot" | "none";
export type CraftCategory = "all" | "data engineering" | "bi & .pbix" | "articles";

export type CraftItem = {
  id: string;
  title: string;
  description: string;
  kind: CraftKind;
  category: Exclude<CraftCategory, "all">;
  href?: string;
  accent: string;
  note: string;
};

export const craftItems: CraftItem[] = [
  {
    id: "EPRA",
    title: "EPRA fuel price",
    description: "End-to-end EPRA fuel price data engineering pipeline",
    kind: "github",
    category: "data engineering",
    href: "",
    accent: "#BFD7EA",
    note: "https://github.com/shawnmacharia/epra-fuel-data-pipeline",
  },
  {
    id: "job-scraper",
    title: "Multi-site job scraper",
    description: "An ingestion pipeline that normalizes role descriptions and salary signals into a structured talent dataset.",
    kind: "github",
    category: "data engineering",
    href: "",
    accent: "#D6E8F0",
    note: "https://github.com/shawnmacharia/ai-job-search",
  },


];

export const craftCategories: CraftCategory[] = [
  "all",
  "data engineering",
  "bi & .pbix",
  "articles",
];

export const craftCounts = craftCategories.reduce(
  (counts, category) => {
    counts[category] =
      category === "all"
        ? craftItems.length
        : craftItems.filter((item) => item.category === category).length;
    return counts;
  },
  {} as Record<CraftCategory, number>,
);
