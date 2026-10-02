import { orders } from "@/lib/orders";

export default function OrdersPage() {
  return (
    <section>
      <h2>Your Orders 📦</h2>

      <p>View orders created during this session.</p>

      {orders.length === 0 ? (
        <article>
          <h3>No orders yet</h3>

          <p>Place an order from the checkout page and it will appear here.</p>
        </article>
      ) : (
        orders.map((order) => (
          <article key={order.id}>
            <h3>{order.dishName}</h3>

            <p>
              <strong>Order ID:</strong> {order.id}
            </p>

            <p>
              <strong>Name:</strong> {order.name}
            </p>

            <p>
              <strong>Phone:</strong> {order.phone}
            </p>

            <p>
              <strong>Total:</strong> {order.total} {order.currency}
            </p>

            <p>
              <strong>Status:</strong> {order.status}
            </p>
          </article>
        ))
      )}
    </section>
  );
}
