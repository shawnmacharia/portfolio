import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/chrome/Navbar";
import { Footer } from "@/components/chrome/Footer";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { siteConfig } from "@/config/site";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Analytics Engineer`,
  description: "Shawn Macharia Mugambi: analytics engineer, BI specialist, and data storyteller based in Nairobi.",
  metadataBase: new URL("https://www.example.com"),
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${jetBrainsMono.variable}`}>
      <body className="bg-[#FAFAFA] text-[#1C1C1E] antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[#1C1C1E] focus:px-3 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <SiteChrome>
          <Navbar />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </SiteChrome>
      </body>
    </html>
  );
}
