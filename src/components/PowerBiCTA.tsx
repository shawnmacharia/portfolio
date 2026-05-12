// components/PowerBiCTA.tsx
"use client";

import { FaFileAlt } from "react-icons/fa";

interface VercelWindow extends Window {
  vercelAnalytics?: {
    track: (event: string) => void;
  };
}

export default function PowerBiCTA() {
  const powerBiLink =
    "https://1drv.ms/f/c/40f2921e93ea0d94/IgDhPu9Ej3cZRLNtBzfEFRPNAROMBjrjOSl8aMvmY60e_XU?e=G3v9vG";

  const handleClick = () => {
    if (
      typeof window !== "undefined" &&
      (window as VercelWindow).vercelAnalytics
    ) {
      (window as VercelWindow).vercelAnalytics?.track("powerbi_cta_click");
    }
  };

  return (
    <section className="py-12 bg-faint dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
          Want to explore my Power BI dashboards?
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I have compiled a small portfolio of interactive Power BI reports that
          showcase data visualisation, DAX calculations and storytelling. Click
          the button below to open the collection on OneDrive.
        </p>
        <a
          href={powerBiLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
        >
          <FaFileAlt className="text-lg" />
          Open Power BI Portfolio
        </a>
      </div>
    </section>
  );
}
