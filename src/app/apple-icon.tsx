import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAFA",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#FAFAFA" stroke="#1C1C1E" strokeWidth="3" />
          <path d="M17 23 13 12l15 8M47 23l4-11-15 8" fill="#FAFAFA" stroke="#1C1C1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 31c0-12 8-19 19-19s19 7 19 19v12c0 7-5 11-12 11H25c-7 0-12-4-12-11V31Z" fill="#F8FAFC" stroke="#1C1C1E" strokeWidth="4" strokeLinejoin="round" />
          <ellipse cx="24" cy="34" rx="9" ry="11" fill="#FFF" stroke="#1C1C1E" strokeWidth="3.5" />
          <ellipse cx="40" cy="34" rx="9" ry="11" fill="#FFF" stroke="#1C1C1E" strokeWidth="3.5" />
          <circle cx="25" cy="35" r="3.8" fill="#1C1C1E" />
          <circle cx="39" cy="35" r="3.8" fill="#1C1C1E" />
          <circle cx="26.5" cy="33" r="1.6" fill="#FFF" />
          <circle cx="40.5" cy="33" r="1.6" fill="#FFF" />
          <path d="m29 44 3 5 3-5" fill="#D9A64F" stroke="#1C1C1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
