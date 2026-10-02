import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>🍽️ Addis Eats</h1>

      <p>Order delicious Ethiopian food online.</p>

      <nav>
        <ul>
          <li>
            <Link href="/menu">View Menu</Link>
          </li>

          <li>
            <Link href="/checkout">Checkout</Link>
          </li>

          <li>
            <Link href="/orders">My Orders</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
