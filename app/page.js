import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Addis Eats</h1>

      <p>Discover delicious Ethiopian food and explore our menu.</p>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
      </nav>

      <section>
        <h2>Explore Addis Eats</h2>
        <p>
          Enjoy traditional Ethiopian dishes such as Kitfo, Shiro, Doro Wot, and
          Tibs.
        </p>

        <Link className="button" href="/menu">
          Explore Menu
        </Link>
      </section>
    </main>
  );
}
