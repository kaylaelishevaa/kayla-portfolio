import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    <div
      style={{
        background: "#FAF8F4",
        color: "#161513",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "80px 88px",
        justifyContent: "space-between",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          color: "#5A574F",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 18,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            display: "flex",
            width: 56,
            height: 1,
            background: "#5A574F",
          }}
        />
        <span style={{ display: "flex" }}>open to swe internships</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 22,
            color: "#5A574F",
            letterSpacing: "0.04em",
          }}
        >
          Kayla Elisheva Siwi
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            lineHeight: 1.04,
            letterSpacing: "-0.022em",
            fontWeight: 600,
            maxWidth: 980,
          }}
        >
          <span style={{ display: "flex" }}>CS student building</span>
          <span style={{ display: "flex" }}>AI in production.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#5A574F",
            maxWidth: 880,
            lineHeight: 1.35,
            fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
            marginTop: 12,
          }}
        >
          Computer Science · Monash University Malaysia · Software Engineer Intern at Coldwell Banker
          Indonesia.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          color: "#5A574F",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 18,
          letterSpacing: "0.04em",
        }}
      >
        <span style={{ display: "flex" }}>kaylasiwi.com</span>
        <span style={{ display: "flex", color: "#0F4C5C" }}>↗</span>
      </div>
    </div>,
    size,
  );
}
