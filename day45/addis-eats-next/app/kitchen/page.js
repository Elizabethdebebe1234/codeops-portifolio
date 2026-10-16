
import Link from "next/link";
import KitchenOrders from "./KitchenOrders";
import "./kitchen.css";

export default function KitchenPage() {
  return (
    <main className="kitchen-page">
      <div className="kitchen-header">
        <div>
          <p className="kitchen-eyebrow">
            ADDIS EATS • TEAM PORTAL
          </p>
          <h1>Kitchen Dashboard</h1>
          <p>Manage customer orders and prepare delicious meals.</p>
        </div>

        <Link href="/" className="kitchen-home-link">
          Back to Home
        </Link>
      </div>

      <section className="kitchen-welcome">
        <span className="kitchen-icon">🍳</span>
        <h2>Welcome to the Kitchen</h2>
        <p>
          View the dishes customers have ordered, check quantities,
          and update each order as your team prepares it.
        </p>
      </section>

      <KitchenOrders />
    </main>
  );
}
