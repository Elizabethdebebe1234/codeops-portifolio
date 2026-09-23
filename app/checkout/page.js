import Link from "next/link";

export default function Checkout() {
  return (
    <main>
      <h1>Checkout</h1>

      <p>Review your order and complete your purchase.</p>

      <Link href="/cart">Back to Cart</Link>
      {" | "}
      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}
