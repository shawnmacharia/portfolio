export function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.2 3.2 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.9A5.3 5.3 0 0 0 19 4.7a4.9 4.9 0 0 0-.1-3.6s-1.3-.4-4.2 1.6a14.5 14.5 0 0 0-7.4 0C6.4 1.7 5.1 2.1 5.1 2.1A4.9 4.9 0 0 0 5 5.7 5.3 5.3 0 0 0 3.8 9c0 5.4 3.1 6.6 6.1 6.9a3.2 3.2 0 0 0-.9 2.5V22" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M7.5 9.5v8m0-11.5v.4M7.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM13 17.5v-5.1c0-1.7 1.3-3 3-3s3 1.3 3 3v5.1" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function CopyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="9" y="9" width="10" height="10" rx="1.5" />
      <path d="M7 15H6.5A1.5 1.5 0 0 1 5 13.5V6.5A1.5 1.5 0 0 1 6.5 5h7A1.5 1.5 0 0 1 15 6.5V7" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="m5 12 4.2 4.2L19 2.5" />
    </svg>
  );
}
