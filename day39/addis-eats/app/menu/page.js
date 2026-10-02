import Link from "next/link";
import { dishes } from "@/lib/dishes";

export default function MenuPage() {
  return (
    <main>
      <h1>Our Menu</h1>

      {dishes.map((dish) => (
        <article key={dish.id}>
          <h2>{dish.name}</h2>

          <p>Category: {dish.category}</p>

          <p>Price: {dish.price} ETB</p>

          <Link href={`/checkout?dishId=${dish.id}`}>
            <button type="button">Add to Order</button>
          </Link>

          <hr />
        </article>
      ))}
    </main>
  );
}
