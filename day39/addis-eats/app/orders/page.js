import { orders } from "@/lib/orders";
import CancelButton from "./cancel-button";

export default function OrdersPage() {
  return (
    <main>
      <h1>Orders</h1>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order) => (
        <article key={order.id}>
          <h2>{order.name}</h2>

          <p>Phone: {order.phone}</p>

          <p>
            Total: {order.total} {order.currency}
          </p>

          <p>Status: {order.status}</p>

          {order.status !== "Cancelled" && <CancelButton orderId={order.id} />}

          <hr />
        </article>
      ))}
    </main>
  );
}
