// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name – Portfolio",
  description: "Full‑stack developer, designer, nerd‑enthusiast",
  openGraph: {
    title: "Your Name – Portfolio",
    description: "Full‑stack developer, designer, nerd‑enthusiast",
    images: [
      {
        url: "/og-image.png", // you can create a custom OG image later
        width: 1200,
        height: 630,
        alt: "Portfolio OG Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        {/* ThemeProvider adds a `class` to <html> that toggles dark mode */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
