// components/Navbar.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      {/* Brand / Logo */}
      <Link href="/" className="text-2xl font-bold text-primary">
        Your Name
      </Link>

      {/* Desktop navigation links */}
      <ul className="hidden md:flex items-center gap-6 text-sm">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}

        {/* Social icons */}
        <li className="flex items-center gap-3 ml-4">
          <a
            href="https://github.com/shawnmacharia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/shawnmugambi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/machariashawn9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <FaTwitter size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
