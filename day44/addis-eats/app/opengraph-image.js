import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Addis Eats — Ethiopian food in Addis Ababa";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#7c2d12",
        color: "white",
        padding: "60px",
      }}
    >
      <div style={{ fontSize: 82, fontWeight: 800 }}>ADDIS EATS</div>

      <div style={{ fontSize: 36, marginTop: 28 }}>
        Ethiopian food in Addis Ababa
      </div>

      <div style={{ fontSize: 26, marginTop: 20 }}>
        Discover your next favorite dish
      </div>
    </div>,
  );
}
