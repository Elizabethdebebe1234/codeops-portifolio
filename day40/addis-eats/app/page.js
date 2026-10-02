import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <p>AUTHENTIC ETHIOPIAN CUISINE</p>

      <h2>
        Taste Ethiopia,
        <br />
        delivered to you. 🍽️
      </h2>

      <p>
        Discover delicious Ethiopian dishes, explore traditional flavors, and
        place your order with Addis Eats.
      </p>

      <Link href="/menu">Explore Our Menu →</Link>
    </section>
  );
}
