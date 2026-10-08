"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems, siteConfig } from "@/config/site";
import { OwlMark } from "@/components/mascot/OwlMark";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const isWork = pathname === "/work" || pathname.startsWith("/work/");

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(250,250,250,0.55)] backdrop-blur-[8px] dark:bg-[rgba(15,15,17,0.55)]"
      style={{ WebkitBackdropFilter: "blur(8px)" }}
      initial={false}
    >
      <motion.div
        className="mx-auto max-w-[1080px] px-6"
        style={{
          borderBottom: "1px solid rgba(17,17,17,0.06)",
          opacity: scrollY ? 1 : 1,
        }}
      />
      <div className="mx-auto grid max-w-[1080px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-3 sm:py-4">
        <div className="flex items-center gap-3">
          <Link href="/work" className="flex items-center gap-2" aria-label="Go to work page">
            <OwlMark />
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-[var(--text)] sm:inline">{siteConfig.short}</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-5 sm:gap-8">
          {navItems.map((item) => {
            const isActive = item.href === "/work" ? isWork : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative inline-flex items-center pb-1 text-[11px] uppercase tracking-[0.14em] text-[#485562] transition hover:text-[var(--text)] dark:text-[#C7CED9]"
                data-magnetic="true"
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-[8px] left-0 right-0 h-[2px] rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                ) : null}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-end gap-2">
          {siteConfig.github ? (
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/60 text-[var(--text)] transition hover:-translate-y-0.5">
              <GitHubIcon className="h-4 w-4" />
            </a>
          ) : null}
          {siteConfig.linkedin ? (
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/60 text-[var(--text)] transition hover:-translate-y-0.5">
              <LinkedInIcon className="h-4 w-4" />
            </a>
          ) : null}
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/60 text-[var(--text)] transition hover:-translate-y-0.5">
            <MailIcon className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
