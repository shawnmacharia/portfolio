export type Project = {
  slug: string;
  title: string;
  status: string;
  year: number;
  tags: string[];
  summary: string;
  problem: string;
  beforeAfter: string;
  usability: string;
  modeling: string;
  outcome: string;
  code: string;
};

export const projects: Project[] = [
  {
    slug: "financial-command-center",
    title: "Financial Command Center",
    status: "shipped",
    year: 2026,
    tags: ["power bi", "financial reporting"],
    summary:
      "A ledger and financial reporting dashboard for a Kenyan educational publisher, turning fragmented account data into a clear operating view for sales, margins, and title performance.",
    problem:
      "The client was juggling multiple spreadsheets and inconsistent KPI definitions, which made it difficult to reconcile sales performance against profit and editorial mix in time for decision-making.",
    beforeAfter:
      "The experience shifted from static reporting snapshots to a single decision layer where business users could scan trends, compare series performance, and isolate exceptions without manually stitching data together.",
    usability: "The design emphasizes low-friction exploration: a clean executive narrative, consistent date logic, and drill paths that help non-technical users move from broad trend analysis to operational detail.",
    modeling: "The model was structured around a single source-of-truth sales ledger and a product hierarchy so calculations stay interpretable and the finance team can trust the KPI definitions.",
    outcome: "The dashboard gave the business a consistent view of performance across product lines and periods so leaders could react faster to margin pressure and commercial opportunity.",
    code: "CALCULATE(\n  SUM(FactSales[NetRevenue]),\n  FILTER(ALL('Date'[Date]), 'Date'[Date] >= DATE(2025,1,1))\n)",
  },
  {
    slug: "spotify-youtube-analytics",
    title: "Spotify + YouTube Analytics",
    status: "shipped",
    year: 2026,
    tags: ["power bi", "dax", "data modeling"],
    summary:
      "A dark-mode BI experience over a ~65k-track music dataset, combining streaming and video performance into a trusted analytical story.",
    problem:
      "The dataset was large, noisy, and spread across multiple levels of artist, track, region, and platform behavior, making it hard to compare engagement signals without losing analytical rigour.",
    beforeAfter:
      "The redesigned dashboard moved from fragmented exploration to a layered storytelling flow, showing platform mix, momentum, and audience patterns across one consistent star schema.",
    usability: "The report gets users from a high-level signal to a precise drill path: top performers, emerging trends, and context-rich detail aligned to how marketing and editorial teams think.",
    modeling: "I built the model around a star schema with fact tables for stream and view events, plus dimension tables for artists, tracks, and time, so DAX stays readable and performance remains reliable.",
    outcome: "The result was a dashboard that feels immersive without becoming opaque: the user can spot trends quickly and move into the details without losing the story.",
    code: "-- simplified for illustration\nSELECT artist, SUM(streams) AS streams\nFROM fact_streams\nGROUP BY artist\nORDER BY streams DESC;",
  },
  {
    slug: "lego-rebrickable-storytelling",
    title: "LEGO Storytelling Dashboard",
    status: "shipped",
    year: 2026,
    tags: ["power bi", "data storytelling"],
    summary:
      "A competition-ready Power BI storytelling dashboard analyzing the Rebrickable LEGO dataset with emphasis on composition, narrative, and visual clarity.",
    problem:
      "The challenge was not just data coverage but communicating the story clearly: themes, parts, and set characteristics had to feel intuitive rather than like a dense spreadsheet export.",
    beforeAfter:
      "The final experience transformed raw inventory structure into a guided narrative, making patterns like set trends and recurring part relationships easy to understand at a glance.",
    usability: "Every view is designed around a visual read sequence, with proportion, timing, and annotation working together so the audience follows the insight without friction.",
    modeling: "The data model emphasized metadata clarity—part families, sets, themes, and time relationships—so the storytelling layer could stay elegant while still letting the user drill into composition details.",
    outcome: "The piece delivered a strong narrative arc and an approachable analytical experience that suited a visualization competition without sacrificing analytical depth.",
    code: "let topThemes =\n  Table.SelectColumns(themeFacts, {\"Theme\", \"SetCount\"})\n  |> Table.Sort({\"SetCount\", Order.Descending});",
  },
  {
    slug: "bank-marketing-intelligence",
    title: "Bank Marketing Intelligence",
    status: "shipped",
    year: 2025,
    tags: ["data engineering", "analytics engineering"],
    summary:
      "An end-to-end modern data stack for bank marketing analytics, supporting operational reporting and cohort-level decisioning from raw campaign activity to curated marts.",
    problem:
      "Campaign performance data was fragmented by source and inconsistent in structure, so teams struggled to compare outcomes across acquisition funnels and customer segments.",
    beforeAfter:
      "The solution replaced ad hoc spreadsheets with a repeatable pipeline and a trusted layer of reporting logic that could be reused across teams and campaigns.",
    usability: "The design focuses on reliability and speed: analysts get consistent definitions, and stakeholders receive a cleaner story around campaign reach, conversion, and value.",
    modeling: "The stack was designed around modular transformations and clear lineage so the analytics team could evolve metrics without breaking downstream reporting logic.",
    outcome: "This created a cleaner operating rhythm for campaign analysis and gave teams more confidence in using the data for strategic decisions.",
    code: "with revenue_by_segment as (\n  select segment, sum(revenue) as revenue\n  from mart_campaign_summary\n  group by segment\n)\nselect * from revenue_by_segment;",
  },
  {
    slug: "epra-fuel-price-pipeline",
    title: "EPRA Fuel Price Pipeline",
    status: "shipped",
    year: 2026,
    tags: ["python", "airflow", "bigquery"],
    summary:
      "A five-phase pipeline that sources Kenyan fuel pump prices from the EPRA website, stages them in Postgres, orchestrates tasks with Airflow, and lands them in BigQuery for analysis.",
    problem:
      "Public pricing data was spread across a website and updated in a way that made automated ingestion and historical consistency difficult without a repeatable workflow.",
    beforeAfter:
      "The project turned a brittle manual collection process into a scheduled, auditable pipeline with a dependable path from source website to warehouse analytics.",
    usability: "The workflow keeps the process observable and recoverable, reducing operational risk while making the data easier to trust for downstream BI use.",
    modeling: "The architecture emphasizes staging, validation, and warehouse structure so analysts can treat the pipeline as a stable source rather than a collection of one-off scripts.",
    outcome: "The result is a dependable data foundation for exploring fuel market changes over time without redoing the collection work by hand.",
    code: "def extract_prices():\n    soup = fetch_epra_page()\n    rows = parse_prices(soup)\n    return rows\n",
  },
];

export const projectMap = new Map(projects.map((project) => [project.slug, project]));
