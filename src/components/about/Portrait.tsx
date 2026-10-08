import Image from "next/image";

export function Portrait() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#E7E9EE] bg-[linear-gradient(135deg,#E9EEF5,#F8F8F9_35%,#ECE7E2)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
      <div className="relative h-[440px] overflow-hidden rounded-[14px] border border-white/80">
        <Image
          src="/images/shawn.jpeg"
          alt="Portrait of Shawn Macharia Mugambi"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
