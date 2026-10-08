import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Raleway } from "next/font/google";
import { ThemeProvider } from "next-themes";
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

const themeScript = `
  (function() {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    let storedTheme = null;
    try {
      storedTheme = localStorage.getItem('theme');
    } catch {
      storedTheme = null;
    }
    const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme;
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0F0F11' : '#FAFAFA');
  })();
`;

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
    <html lang="en" suppressHydrationWarning className={`${raleway.variable} ${jetBrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#FAFAFA" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[#1C1C1E] focus:px-3 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <ThemeProvider attribute="data-theme" defaultTheme={siteConfig.defaultTheme} enableSystem>
          <SiteChrome>
            <Navbar />
            <main id="main-content" className="min-h-screen">{children}</main>
            <Footer />
          </SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
