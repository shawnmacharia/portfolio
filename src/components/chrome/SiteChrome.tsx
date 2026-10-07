"use client";

import { CustomCursor } from "@/components/cursor/CustomCursor";
import { ShortcutsProvider } from "@/components/ShortcutsProvider";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <ShortcutsProvider>
      <CustomCursor />
      {children}
    </ShortcutsProvider>
  );
}
