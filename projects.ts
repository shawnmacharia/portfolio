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
    image: "/images/projects/telecom-crm.png",
    repo: "https://github.com/shawnmacharia/telecom-crm",
  },
  {
    title: "Supermarket Sales Dashboard",
    description:
      "A comprehensive retail performance dashboard that transforms raw transaction data into actionable business intelligence. Monitor revenue health, customer behavior, and inventory efficiency in real-time.",
    tags: ["Power BI", "Data Analysis", "Retail Analytics"],
    image: "/images/projects/supermarket-dashboard.png",
    repo: "https://github.com/shawnmacharia/supermarket-sales-dashboard",
  },
  {
    title: "Portfolio V2",
    description:
      "A modern responsive portfolio built with Next.js, Tailwind, and Framer Motion.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/images/projects/portfolio.png",
    url: "https://yourusername.vercel.app",
    repo: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Realtime Chat App",
    description:
      "A real‑time chat application using Socket.io, Express, and React.",
    tags: ["Node.js", "Socket.io", "React"],
    image: "/images/projects/chatapp.png",
    url: "https://chatapp-demo.com",
    repo: "https://github.com/yourusername/chat-app",
  },
  // Add as many as you like …
];
