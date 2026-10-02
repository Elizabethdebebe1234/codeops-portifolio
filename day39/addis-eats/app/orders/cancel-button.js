"use client";

import { cancelOrder } from "@/app/actions";
import { useState } from "react";

export default function CancelButton({ orderId }) {
  const [message, setMessage] = useState("");

  async function handleCancel() {
    const result = await cancelOrder(orderId);

    if (result.success) {
      setMessage("Cancelled!");
    } else {
      setMessage(result.error);
    }
  }

  return (
    <div>
      <button onClick={handleCancel}>Cancel Order</button>

      {message && <p>{message}</p>}
    </div>
  );
}
