import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Addis Eats",
  description: "Ethiopian food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>🍽️ Addis Eats</h1>

          <nav>
            <Link href="/">Home</Link> <Link href="/menu">Menu</Link>{" "}
            <Link href="/cart">Cart</Link>{" "}
            <Link href="/checkout">Checkout</Link>{" "}
            <Link href="/orders">Orders</Link>
          </nav>

          <hr />
        </header>

        <main>{children}</main>

        <footer>
          <hr />
          <p>© 2026 Addis Eats</p>
        </footer>
      </body>
    </html>
  );
}
