import { notFound } from "next/navigation";
import { getOrder } from "../../../lib/orders";
import TrackingClient from "./TrackingClient";

export const metadata = {
  title: "Track Your Order | Addis Eats",
  description: "Track your Addis Eats demo delivery and order status.",
};

export default async function TrackingPage({ params }) {
  const { id } = await params;
  const order = getOrder(id);

  if (!order) notFound();

  return <TrackingClient initialOrder={order} />;
}
