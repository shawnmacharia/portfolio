// data/projects.ts
export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string; // path relative to /public
  url?: string; // live demo link (optional)
  repo?: string; // source code link (optional)
};

export const projects = [
  {
    title: "Telecom CRM",
    description:
      "A telecom company Power BI dashboard analysis providing comprehensive insights into business performance and customer data.",
    tags: ["Power BI", "Data Analysis", "Business Intelligence"],
    image: "/images/crm-screenshot.png",
    repo: "https://github.com/shawnmacharia/telecom-crm",
  },
  {
    title: "Supermarket Sales Dashboard",
    description:
      "A comprehensive retail performance dashboard that transforms raw transaction data into actionable business intelligence. Monitor revenue health, customer behavior, and inventory efficiency in real-time.",
    tags: ["Power BI", "Data Analysis", "Retail Analytics"],
    image: "/images/supermarket-dashboard.png",
    repo: "https://github.com/shawnmacharia/supermarket-sales-dashboard",
  },

  // Add as many as you like …
];
