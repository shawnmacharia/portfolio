import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-1 font-semibold text-primary">
          Shawn Mugambi – Data Analytics Engineer
        </p>
        <p className="mb-4 text-xs md:text-sm">
          Building reliable data pipelines and decision-ready analytics.
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/shawnmacharia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/shawnmugambi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:shawnmugambi1@gmail.com"
            aria-label="Email"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            <FaEnvelope size={20} />
          </a>

          <a
            href="/Shawn-Mugambi-Resume.pdf"
            download
            aria-label="Download Resume"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            <FaFileAlt size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Shawn Mugambi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
