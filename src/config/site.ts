export const siteConfig = {
  name: "Shawn Macharia Mugambi",
  short: "shawn mugambi",
  role: "analytics engineer",
  location: "Nairobi, Kenya",
  email: "shawnmugambi1@gmail.com",
  github: "https://github.com/shawnmacharia",
  linkedin: "",
  x: "",
  defaultTheme: "system",
  showFeaturedInCraft: false,
  heroLead: "Hi! I'm",
  heroName: "Shawn Mugambi",
  heroRole: "analytics engineer",
  heroLine: "bringing delight to data, through code, not just numbers",
  heroMeta: "actuarial science + data engineering · bi developer @ data cycle analytics · prev minet insurance",
  pbixFolderUrl: "https://1drv.ms/f/c/40f2921e93ea0d94/IgBHuQD5SGzdQK4oOUgTXuvvAeG0shbgTkYsRrXpgY4A3nE?e=2AQKY6",
  pbixHeadline: "Explore the file",
  pbixDescription: "Want to look under the hood? The Power BI file is in my public OneDrive folder. Open it in Power BI Desktop to explore the data model, relationships, DAX measures and report pages.",
  pbixPath: "Projects Portfolio / Power Bi Projects",
  pbixButtonLabel: "open in onedrive ↗",
  pbixOpenLabel: "open .pbix ↗",
  articles: {
    revalidateSeconds: 1800,
    medium: {
      profileUrl: "https://medium.com/@shawnmacharia9",
      feedUrl: "https://medium.com/feed/@shawnmacharia9",
    },
    blogger: {
      blogId: "3410518966050500386",
      feedUrl: "https://www.blogger.com/feeds/3410518966050500386/posts/default?alt=json&max-results=50",
    },
  },
  // Alternate hero lines:
  // "an analytics engineer turning messy data into little moments of 'aha', with code, not just numbers"
  // "an analytics engineer who makes data feel a little more alive"
} as const;

export const navItems = [
  { label: "work", href: "/work" },
  { label: "craft", href: "/craft" },
  { label: "about", href: "/about" },
] as const;
