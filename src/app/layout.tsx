import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shawn Mugambi | Data Analytics Engineer",
  description:
    "Data Analytics Engineer with a focus on building reliable data pipelines, analytical systems, and decision-ready BI solutions using Python, SQL, dbt, Airflow, BigQuery, and Power BI.",
  keywords: [
    "Data Analytics Engineer",
    "Data Engineering",
    "Analytics Engineering",
    "Python",
    "SQL",
    "dbt",
    "Airflow",
    "BigQuery",
    "Power BI",
    "Finance Analytics",
    "Insurance Analytics",
  ],
  openGraph: {
    title: "Shawn Mugambi – Data Analytics Engineer",
    description:
      "Building reliable data pipelines, analytical systems, and decision-ready BI for finance and insurance domains.",
    url: "https://shawnmugambi.dev",
    siteName: "Shawn Mugambi Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shawn Mugambi – Data Analytics Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawn Mugambi – Data Analytics Engineer",
    description:
      "Building reliable data pipelines, analytical systems, and decision-ready BI for finance and insurance domains.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-primary text-white p-2 rounded shadow"
        >
          Skip to main content
        </a>
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
