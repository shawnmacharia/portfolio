import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shawn Macharia – Data Analyst & BI Specialist",
  description:
    "Portfolio of Shawn Macharia, specializing in advanced data visualization, BI dashboards, and financial modeling.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Shawn Macharia – Data & BI Portfolio",
    description:
      "Specialist in turning complex data into actionable insights through visual storytelling.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shawn Macharia Portfolio OG Image",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawn Macharia – Data & BI Portfolio",
    description: "Specialist in turning complex data into actionable insights.",
    creator: "",
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
      <body>{children}</body>
    </html>
  );
}
