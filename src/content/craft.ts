import { getFirstDashboardImage } from "@/lib/dashboardImages";

export type CraftKind = "github" | "onedrive" | "medium" | "blogspot" | "power bi" | "none";
export type CraftCategory = "all" | "data engineering" | "bi & .pbix" | "articles";

export type CraftItem = {
  id: string;
  slug?: string;
  title: string;
  description: string;
  kind: CraftKind;
  category: Exclude<CraftCategory, "all">;
  href?: string;
  accent: string;
  note: string;
  cover?: string;
  publishedAt?: string;
};

export const craftItems: CraftItem[] = [
  {
    id: "EPRA",
    slug: "epra-fuel-price",
    title: "EPRA fuel price",
    description: "End-to-end EPRA fuel price data engineering pipeline",
    kind: "github",
    category: "data engineering",
    href: "https://github.com/shawnmacharia/epra-fuel-data-pipeline",
    accent: "#BFD7EA",
    note: "https://github.com/shawnmacharia/epra-fuel-data-pipeline",
    cover: getFirstDashboardImage("epra fuel pipeline")?.src,
  },
  {
    id: "job-scraper",
    slug: "job-scraper",
    title: "Multi-site job scraper",
    description: "An ingestion pipeline that normalizes role descriptions and salary signals into a structured talent dataset.",
    kind: "github",
    category: "data engineering",
    href: "https://github.com/shawnmacharia/ai-job-search",
    accent: "#D6E8F0",
    note: "https://github.com/shawnmacharia/ai-job-search",
  },
  {
    id: "hr-dashboard",
    slug: "hr-dashboard",
    title: "HR Dashboard",
    description: "Power BI dashboard · 4 pages",
    kind: "power bi",
    category: "bi & .pbix",
    href: "/craft/hr-dashboard",
    accent: "#DCECF3",
    note: "power bi",
    cover: "/images/hr-dashboard/hr-dashboard.png",
  },
  {
    id: "sales-analysis-dashboard",
    slug: "sales-analysis-dashboard",
    title: "Sales Analysis Dashboard",
    description: "Power BI dashboard · 1 page",
    kind: "power bi",
    category: "bi & .pbix",
    href: "/craft/sales-analysis-dashboard",
    accent: "#D9E7F0",
    note: "power bi",
    cover: "/images/sales-analysis-dashboard/sales-analysis-dashboard.png",
  },
  {
    id: "supermarket-dashboard",
    slug: "supermarket-dashboard",
    title: "Supermarket Dashboard",
    description: "Power BI dashboard · 1 page",
    kind: "power bi",
    category: "bi & .pbix",
    href: "/craft/supermarket-dashboard",
    accent: "#E4EEF9",
    note: "power bi",
    cover: "/images/supermarket-dashboard/supermarket-dashboard.png",
  },
];

export const craftCategories: CraftCategory[] = [
  "all",
  "data engineering",
  "bi & .pbix",
  "articles",
];

export function getCraftCounts(items: CraftItem[] = craftItems) {
  return craftCategories.reduce(
    (counts, category) => {
      counts[category] =
        category === "all"
          ? items.length
          : items.filter((item) => item.category === category).length;
      return counts;
    },
    {} as Record<CraftCategory, number>,
  );
}
