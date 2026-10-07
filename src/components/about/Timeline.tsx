"use client";

import { motion } from "framer-motion";
import { timeline } from "@/content/timeline";

export function Timeline() {
  return (
    <div className="relative mt-10">
      <div className="absolute left-[115px] top-0 h-full w-px bg-[#E3E7EC]" />
      {timeline.map((entry, index) => (
        <motion.div
          key={`${entry.date}-${entry.org}`}
          className="grid grid-cols-[110px_1fr] gap-6 py-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
        >
          <div className="pt-1 text-[11px] uppercase tracking-[0.18em] text-[#6E7781]">{entry.date}</div>
          <div className="flex gap-4">
            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#D9E3ED] bg-[#F7FAFD] text-[10px] font-medium text-[#53677D]">{entry.org.slice(0, 2).toUpperCase()}</div>
            <div>
              <p className="text-[1.05rem] font-medium text-[#1C1C1E]">{entry.org}</p>
              <p className="mt-1 text-[#5F6D7A]">{entry.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
