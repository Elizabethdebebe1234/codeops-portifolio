"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("./DeliveryMap"), {
  ssr: false,
  loading: () => (
    <div className="tracking-map-placeholder">
      Loading delivery map...
    </div>
  ),
});

export default function MapPanel({ courier, destination }) {
  return (
    <section>
      <h2>Delivery map</h2>
      <p className="tracking-muted">
        Demonstration locations only — not live GPS.
      </p>
      <DeliveryMap courier={courier} destination={destination} />
    </section>
  );
}
