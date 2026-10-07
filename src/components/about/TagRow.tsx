import { Chip } from "@/components/ui/Chip";

export function TagRow() {
  const tags = [
    { icon: "<>", label: "data engineer" },
    { icon: "◬", label: "business intelligence" },
    { icon: "✧", label: "ai" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {tags.map((tag) => (
        <Chip key={tag.label} className="inline-flex gap-2 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[#4B5D70]">
          <span className="text-[#6B9BC3]">{tag.icon}</span>
          <span>{tag.label}</span>
        </Chip>
      ))}
    </div>
  );
}
