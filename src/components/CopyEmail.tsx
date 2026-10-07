"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/ui/Icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore copy failures; still leave the link in place
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-left text-[0.95rem] text-[#1F2730] underline decoration-[#D7E3ED] decoration-2 underline-offset-4 transition hover:text-[#0F172A]"
      aria-live="polite"
    >
      <span>{email}</span>
      {copied ? <CheckIcon className="h-4 w-4 text-[#2f6a54]" /> : <CopyIcon className="h-4 w-4" />}
    </button>
  );
}
