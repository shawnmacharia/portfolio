export type ProjectBlock =
  | { type: "p"; text: string; lead?: string }
  | { type: "bullets"; items: { lead?: string; text: string }[] }
  | { type: "code"; label: string; code: string }
  | { type: "callout"; text: string };

export type Project = {
  slug: string;
  title: string;
  cardTitle: string;
  published: boolean;
  cover?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  overview: string;
  problem: string;
  usability: ProjectBlock[];
  modeling: ProjectBlock[];
  outcome: string;
  pbixUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "financial-command-center",
    title: "Financial Command Center",
    cardTitle: "Financial Command Center",
    published: false,
    overview:
      "A ledger and financial reporting dashboard for a Kenyan educational publisher, turning fragmented account data into a clear operating view for sales, margins, and title performance.",
    problem:
      "The client was juggling multiple spreadsheets and inconsistent KPI definitions, which made it difficult to reconcile sales performance against profit and editorial mix in time for decision-making.",
    usability: [
      {
        type: "p",
        text: "The design emphasizes low-friction exploration: a clean executive narrative, consistent date logic, and drill paths that help non-technical users move from broad trend analysis to operational detail.",
      },
    ],
    modeling: [
      {
        type: "p",
        text: "The model was structured around a single source-of-truth sales ledger and a product hierarchy so calculations stay interpretable and the finance team can trust the KPI definitions.",
      },
      {
        type: "code",
        label: "key measure",
        code: "CALCULATE(\n  SUM(FactSales[NetRevenue]),\n  FILTER(ALL('Date'[Date]), 'Date'[Date] >= DATE(2025,1,1))\n)",
      },
    ],
    outcome:
      "The dashboard gave the business a consistent view of performance across product lines and periods so leaders could react faster to margin pressure and commercial opportunity.",
  },
  {
    slug: "spotify-youtube-analytics",
    title: "Spotify + YouTube Analytics",
    cardTitle: "Spotify + YouTube Analytics",
    published: false,
    overview:
      "A dark-mode BI experience over a ~65k-track music dataset, combining streaming and video performance into a trusted analytical story.",
    problem:
      "The dataset was large, noisy, and spread across multiple levels of artist, track, region, and platform behavior, making it hard to compare engagement signals without losing analytical rigour.",
    usability: [
      {
        type: "p",
        text: "The report gets users from a high-level signal to a precise drill path: top performers, emerging trends, and context-rich detail aligned to how marketing and editorial teams think.",
      },
    ],
    modeling: [
      {
        type: "p",
        text: "I built the model around a star schema with fact tables for stream and view events, plus dimension tables for artists, tracks, and time, so DAX stays readable and performance remains reliable.",
      },
      {
        type: "code",
        label: "query",
        code: "-- simplified for illustration\nSELECT artist, SUM(streams) AS streams\nFROM fact_streams\nGROUP BY artist\nORDER BY streams DESC;",
      },
    ],
    outcome:
      "The result was a dashboard that feels immersive without becoming opaque: the user can spot trends quickly and move into the details without losing the story.",
  },
  {
    slug: "lego-rebrickable-storytelling",
    title: "LEGO Storytelling Dashboard",
    cardTitle: "LEGO Storytelling Dashboard",
    published: false,
    overview:
      "A competition-ready Power BI storytelling dashboard analyzing the Rebrickable LEGO dataset with emphasis on composition, narrative, and visual clarity.",
    problem:
      "The challenge was not just data coverage but communicating the story clearly: themes, parts, and set characteristics had to feel intuitive rather than like a dense spreadsheet export.",
    usability: [
      {
        type: "p",
        text: "Every view is designed around a visual read sequence, with proportion, timing, and annotation working together so the audience follows the insight without friction.",
      },
    ],
    modeling: [
      {
        type: "p",
        text: "The data model emphasized metadata clarity—part families, sets, themes, and time relationships—so the storytelling layer could stay elegant while still letting the user drill into composition details.",
      },
      {
        type: "code",
        label: "query",
        code: "let topThemes =\n  Table.SelectColumns(themeFacts, {\"Theme\", \"SetCount\"})\n  |> Table.Sort({\"SetCount\", Order.Descending});",
      },
    ],
    outcome:
      "The piece delivered a strong narrative arc and an approachable analytical experience that suited a visualization competition without sacrificing analytical depth.",
  },
  {
    slug: "bank-marketing-intelligence",
    title: "Bank Marketing Intelligence",
    cardTitle: "Bank Marketing Intelligence",
    published: false,
    overview:
      "An end-to-end modern data stack for bank marketing analytics, supporting operational reporting and cohort-level decisioning from raw campaign activity to curated marts.",
    problem:
      "Campaign performance data was fragmented by source and inconsistent in structure, so teams struggled to compare outcomes across acquisition funnels and customer segments.",
    usability: [
      {
        type: "p",
        text: "The design focuses on reliability and speed: analysts get consistent definitions, and stakeholders receive a cleaner story around campaign reach, conversion, and value.",
      },
    ],
    modeling: [
      {
        type: "p",
        text: "The stack was designed around modular transformations and clear lineage so the analytics team could evolve metrics without breaking downstream reporting logic.",
      },
      {
        type: "code",
        label: "query",
        code: "with revenue_by_segment as (\n  select segment, sum(revenue) as revenue\n  from mart_campaign_summary\n  group by segment\n)\nselect * from revenue_by_segment;",
      },
    ],
    outcome:
      "This created a cleaner operating rhythm for campaign analysis and gave teams more confidence in using the data for strategic decisions.",
  },
  {
    slug: "epra-fuel-price-pipeline",
    title: "EPRA Fuel Price Pipeline",
    cardTitle: "EPRA Fuel Price Pipeline",
    published: false,
    overview:
      "A five-phase pipeline that sources Kenyan fuel pump prices from the EPRA website, stages them in Postgres, orchestrates tasks with Airflow, and lands them in BigQuery for analysis.",
    problem:
      "Public pricing data was spread across a website and updated in a way that made automated ingestion and historical consistency difficult without a repeatable workflow.",
    usability: [
      {
        type: "p",
        text: "The workflow keeps the process observable and recoverable, reducing operational risk while making the data easier to trust for downstream BI use.",
      },
    ],
    modeling: [
      {
        type: "p",
        text: "The architecture emphasizes staging, validation, and warehouse structure so analysts can treat the pipeline as a stable source rather than a collection of one-off scripts.",
      },
      {
        type: "code",
        label: "query",
        code: "def extract_prices():\n    soup = fetch_epra_page()\n    rows = parse_prices(soup)\n    return rows\n",
      },
    ],
    outcome:
      "The result is a dependable data foundation for exploring fuel market changes over time without redoing the collection work by hand.",
  },
  {
    slug: "telecom-crm-dashboard",
    title: "Telecom CRM Dashboard",
    cardTitle: "Connecting the dots between customer churn, billing, and support SLAs.",
    published: true,
    cover: {
      src: "/images/crm-screenshot/crm-screenshot-1.png",
      width: 1263,
      height: 725,
      alt: "Telecom CRM dashboard overview showing customer sales and revenue KPIs, B2B and B2C revenue, invoice trends, and customer support details.",
    },
    overview:
      "A customer-centric view tracking revenue, sales, and active customers, designed to bridge the gap between commercial performance and operational support.",
    problem:
      "The business was suffering from a 22% churn rate. Stakeholders could see that customers were leaving, but couldn't answer why. Billing, usage, and support data lived in silos.",
    usability: [
      { type: "p", text: "I implemented a clear hierarchy: KPIs → Trends → Breakdown → Detail." },
      {
        type: "bullets",
        items: [
          { text: "The top row gives executives an instant pulse (Total Sales, Active Customers, Churn Rate)." },
          { text: "The middle section uses a donut chart for B2B/B2C revenue split and a line chart for daily invoice amounts to spot cash-flow trends." },
          { text: "The bottom table acts as the \"investigation zone,\" allowing users to drill down into specific segments (Enterprise vs. SME) and customer statuses." },
        ],
      },
    ],
    modeling: [
      { type: "p", text: "To make this work, I had to build a robust Star Schema connecting the Customer, Invoices, and Support tables." },
      {
        type: "code",
        label: "key measure",
        code: "Churn Rate =\n    DIVIDE(\n        COUNTROWS(FILTER(Customers, Customers[Status] = \"Churned\")),\n        COUNTROWS(Customers)\n    )",
      },
      {
        type: "callout",
        text: "The \"Aha!\" DAX: By relating Support Tickets to Customer Status, I surfaced a critical insight: Suspended B2B Enterprise accounts had an average resolution time of 62 hours—a massive operational red flag.",
      },
    ],
    outcome:
      "The dashboard transformed a reactive churn report into a proactive support tool. Management can now pinpoint exactly which customer segments are waiting too long for resolutions and bleeding revenue.",
  },
  {
    slug: "market-analysis-dashboard",
    title: "Market Analysis Dashboard",
    cardTitle: "Where is the money going, and who is actually bringing it in?",
    published: true,
    cover: {
      src: "/images/market-analysis-dashboard/market-analysis-screenshot-1.png",
      width: 1259,
      height: 731,
      alt: "Marketing analysis report overview with sales KPIs, channel breakdown, product rankings, and channel performance over time.",
    },
    overview:
      "A marketing ROI and channel performance dashboard designed to track sales across Online, Social Media, Stores, and Outlets.",
    problem:
      "Marketing spend was scattered, and leadership couldn't easily see which channels or regional managers were driving a positive return on investment.",
    usability: [
      {
        type: "bullets",
        items: [
          {
            lead: "Treemaps for Territory:",
            text: "Instead of a boring grid, I used a treemap to visualize sales by state and channel simultaneously, making geographic gaps instantly obvious.",
          },
          {
            lead: "Actionable Ranking:",
            text: "The bottom bar chart ranks managers by ROI (Poom UM-05 leading at an incredible 700%).",
          },
          {
            lead: "The \"Empty Map\" Trap:",
            text: "Notice the blank Azure map visual in the PDF. A key UX lesson: if your report relies on third-party visuals that require specific tenant sign-ins, always provide a fallback visual (like the treemap) so the page doesn't look broken to external stakeholders.",
          },
        ],
      },
    ],
    modeling: [
      { type: "p", text: "The core challenge here was calculating ROI dynamically based on filter context." },
      {
        type: "code",
        label: "key measure",
        code: "ROI =\n    DIVIDE(\n        SUM(Sales[Revenue]) - SUM(Marketing[Spend]),\n        SUM(Marketing[Spend]),\n        0\n    )",
      },
      {
        type: "p",
        lead: "Time Intelligence:",
        text: "I utilized SAMEPERIODLASTYEAR to calculate the YoY % change for Bad Hires (seen in the HR report) and ROI trends.",
      },
    ],
    outcome:
      "This dashboard exposed that while Online (45.84%) and Social Media (28.92%) are driving the bulk of sales, Outlets are severely underperforming at just 4.18%. Leadership can now reallocate budget away from low-ROI outlets and double down on top-performing managers.",
  },
  {
    slug: "employee-hiring-history",
    title: "Employee Hiring History",
    cardTitle: "It’s not just about how many people you hire, but how many of them actually stay and succeed.",
    published: true,
    cover: {
      src: "/images/employee-hiring-history/employee-hiring-history-screenshot-1.png",
      width: 1260,
      height: 722,
      alt: "Employee hiring history dashboard overview showing new hire trends, age-group and gender breakdowns, and employee detail.",
    },
    overview:
      "An HR analytics suite tracking hiring trends, demographic splits, and separation reasons (Voluntary vs. Involuntary).",
    problem:
      "The company was experiencing high turnover, but traditional HR reports only showed headcount. They needed to understand the quality of hires and the demographics driving turnover.",
    usability: [
      {
        type: "bullets",
        items: [
          {
            lead: "Demographic Deep-Dive:",
            text: "A stacked bar chart breaks down new hires by AgeGroup and Gender, instantly showing that the <30 age group dominates hiring.",
          },
          {
            lead: "The \"Bad Hire\" Narrative:",
            text: "I introduced a dedicated \"Bad Hire\" section. The bar chart BadHire% of Actives by AgeGroup immediately highlights that 30.9% of active employees under 30 are considered \"bad hires.\"",
          },
          {
            lead: "Trends & Reasons:",
            text: "The donut chart reveals that the vast majority of separations are voluntary, while the line charts track YoY changes in bad hires.",
          },
        ],
      },
    ],
    modeling: [
      { type: "p", text: "HR data is notorious for messy date tables and active/inactive employee statuses." },
      {
        type: "code",
        label: "key measure",
        code: "BadHire% of Actives =\n    DIVIDE(\n        COUNTROWS(FILTER(Employees, Employees[BadHireFlag] = TRUE)),\n        COUNTROWS(FILTER(Employees, Employees[Status] = \"Active\"))\n    )",
      },
      {
        type: "p",
        lead: "Modeling Note:",
        text: "I created a dedicated Date dimension table to accurately calculate the YoY % change for hires and separations, ensuring the SPLY (Same Period Last Year) metrics were accurate.",
      },
    ],
    outcome:
      "The dashboard shifted the HR conversation from volume to quality. By identifying that the <30 age group accounts for the highest percentage of bad hires, HR can now revamp the recruitment and onboarding process specifically for early-career talent, reducing costly turnover.",
  },
];

export const projectMap = new Map(projects.map((project) => [project.slug, project]));

export function getPublishedProjects() {
  return projects.filter((project) => project.published);
}
