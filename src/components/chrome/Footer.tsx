"use client";

import Link from "next/link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { CopyEmail } from "@/components/CopyEmail";
import { siteConfig } from "@/config/site";
import { ShortcutsModalTrigger } from "@/components/ShortcutsModal";
import { FooterOwl } from "@/components/mascot/FooterOwl";

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--footer-gradient)] px-6 pb-10 pt-12">
      <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-[clamp(2.3rem,5vw,4rem)] font-light tracking-[-0.06em] text-[var(--text)]">say hello.</p>
          <p className="mt-4 max-w-xl text-[0.95rem] text-[var(--muted)]">For work opportunities, coffee chats, or music recommendations.</p>
          <div className="mt-6 flex items-center gap-3">
            <CopyEmail email={siteConfig.email} />
          </div>
          <div className="mt-6 flex items-center gap-2">
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
          </div>
          <div className="mt-8"><ShortcutsModalTrigger /></div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[260px]">
            <FooterOwl />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1080px] items-center justify-between gap-4 border-t border-[var(--border)] pt-5 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
        <p>© {siteConfig.name} 2026 · designed and built with ♥ · press ? for shortcuts</p>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/work">work</Link>
          <Link href="/craft">craft</Link>
          <Link href="/about">about</Link>
        </div>
      </div>
    </footer>
  );
}
