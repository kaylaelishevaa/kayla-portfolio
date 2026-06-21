import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 16,
        background: "#161513",
        color: "#FAF8F4",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      }}
    >
      KS
    </div>,
    size,
  );
}
