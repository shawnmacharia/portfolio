"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/ui/Icons";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E7EDF4] bg-[#F5F8FB] p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#62717C]">simplified for illustration</p>
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1200);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[#DDE7F0] bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#485A6D]"
        >
          {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-[0.8rem] leading-6 text-[#23313E]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
