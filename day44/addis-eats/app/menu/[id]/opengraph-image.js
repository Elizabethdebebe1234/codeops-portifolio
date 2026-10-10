import { ImageResponse } from "next/og";
import { getDish } from "../../lib/dishes";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Addis Eats dish preview";

export default async function DishOpenGraphImage({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "70px",
        background: "#7c2d12",
        color: "white",
      }}
    >
      <div style={{ fontSize: 34, marginBottom: 25 }}>ADDIS EATS</div>

      <div style={{ fontSize: 76, fontWeight: 800 }}>
        {dish?.name ?? "Ethiopian Food"}
      </div>

      <div style={{ fontSize: 42, marginTop: 24 }}>
        {dish ? `${dish.price} ETB` : ""}
      </div>

      <div style={{ fontSize: 28, marginTop: 24 }}>
        {dish?.summary ?? "Discover Ethiopian dishes"}
      </div>
    </div>,
  );
}
