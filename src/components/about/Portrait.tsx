export function Portrait() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#E7E9EE] bg-[linear-gradient(135deg,#E9EEF5,#F8F8F9_35%,#ECE7E2)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
      <div className="flex h-[440px] items-center justify-center rounded-[14px] border border-white/80 bg-[radial-gradient(circle_at_top,#F5F8FF,#E8EEF5_52%,#E4E0DD)] text-[clamp(3.2rem,10vw,5rem)] font-light tracking-[-0.08em] text-[#1C1C1E]">
        SM
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#6F7883]">TODO: replace /public/portrait.jpg</p>
    </div>
  );
}
