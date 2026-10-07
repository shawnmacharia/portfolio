type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#D9E6F2] bg-[#EEF3F7] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#526575] ${className}`}
    >
      {children}
    </span>
  );
}
