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
    id: "fare-recon",
    title: "Fare reconciliation engine",
    description: "A concept for reconciling transportation flows across channels and cash sources with clean exception logic.",
    kind: "github",
    category: "data engineering",
    href: "",
    accent: "#BFD7EA",
    note: "link coming soon",
  },
  {
    id: "job-scraper",
    title: "Multi-site job scraper",
    description: "An ingestion pipeline that normalizes role descriptions and salary signals into a structured talent dataset.",
    kind: "github",
    category: "data engineering",
    href: "",
    accent: "#D6E8F0",
    note: "link coming soon",
  },
  {
    id: "ai-bi-autoprofile",
    title: "AI-powered BI auto profiling",
    description: "A concept for scanning warehouse metadata and generating a first-pass analytical narrative for downstream users.",
    kind: "github",
    category: "data engineering",
    href: "",
    accent: "#E6F1F6",
    note: "link coming soon",
  },
  {
    id: "powerbi-theme-pack",
    title: "Power BI theme JSON pack",
    description: "A reusable theme set for executive reporting, preserving contrast and a mild editorial palette.",
    kind: "onedrive",
    category: "bi & .pbix",
    href: "",
    accent: "#C4DBF5",
    note: "link coming soon",
  },
  {
    id: "dax-patterns",
    title: "DAX patterns notebook",
    description: "A collection of reusable patterns for filters, time intelligence, and cleaner business logic.",
    kind: "github",
    category: "bi & .pbix",
    href: "",
    accent: "#D9E9F4",
    note: "link coming soon",
  },
  {
    id: "excel-makeover",
    title: "Excel to Power BI makeover",
    description: "A transformation exercise showing how raw spreadsheet logic becomes a more resilient decision layer.",
    kind: "onedrive",
    category: "bi & .pbix",
    href: "",
    accent: "#C9DCE8",
    note: "link coming soon",
  },
  {
    id: "article-1",
    title: "On measuring clarity in analytics",
    description: "A writing draft on why the most useful dashboards feel simple long before they look minimal.",
    kind: "medium",
    category: "articles",
    href: "",
    accent: "#E9EAF2",
    note: "link coming soon",
  },
  {
    id: "article-2",
    title: "The case for readable data contracts",
    description: "Working notes on why contract clarity is the first step toward trustworthy operational data.",
    kind: "blogspot",
    category: "articles",
    href: "",
    accent: "#EEF2F3",
    note: "link coming soon",
  },
  {
    id: "article-3",
    title: "A modest playbook for BI design",
    description: "A rough guide to naming, layout, and trust building in analytics products.",
    kind: "medium",
    category: "articles",
    href: "",
    accent: "#F0F3F7",
    note: "link coming soon",
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
