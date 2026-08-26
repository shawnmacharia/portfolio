// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  // New navigation item for Technical Arsenal (already present)
  { label: "Skills", href: "#tech" },
  // NEW – Experience section
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Brand / Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Shawn Macharia
        </Link>

        {/* Desktop navigation */}
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
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 px-6 py-4"
        >
          <ul className="flex flex-col gap-4 text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Social icons */}
            <li className="flex items-center gap-6 pt-2 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com/shawnmacharia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
                aria-label="GitHub Profile"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/shawnmugambi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://twitter.com/machariashawn9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={22} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
