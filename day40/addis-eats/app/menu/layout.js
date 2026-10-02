import Link from "next/link";

export default function MenuLayout({ children }) {
  return (
    <section>
      <h2>Our Menu 🍽️</h2>

      <p>Choose from traditional Ethiopian favorites.</p>

      <nav>
        <Link href="/menu">All</Link>

        <Link href="/menu?category=Ethiopian">Ethiopian</Link>

        <Link href="/menu?category=Vegetarian">Vegetarian</Link>

        <Link href="/menu?category=Breakfast">Breakfast</Link>
      </nav>

      {children}
    </section>
  );
}
