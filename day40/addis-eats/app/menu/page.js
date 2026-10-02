import Link from "next/link";
import { getDishes } from "@/lib/dishes";

export default async function MenuPage({ searchParams }) {
  const params = await searchParams;

  const category = params?.category;

  const allDishes = await getDishes();

  const filteredDishes = category
    ? allDishes.filter(
        (dish) => dish.category.toLowerCase() === category.toLowerCase(),
      )
    : allDishes;

  return (
    <section>
      <h3>Our Dishes 🍴</h3>

      <p>Explore our selection of Ethiopian favorites.</p>

      {filteredDishes.length === 0 ? (
        <article>
          <h3>No dishes found</h3>
          <p>Try another category.</p>
        </article>
      ) : (
        filteredDishes.map((dish) => (
          <article key={dish.id}>
            <h4>{dish.name}</h4>

            <p>{dish.description}</p>

            <p>
              <strong>{dish.price} ETB</strong>
            </p>

            <p>Category: {dish.category}</p>

            <Link href={`/menu/${dish.id}`}>View Details →</Link>

            {"  "}

            <Link href={`/checkout?dishId=${dish.id}`}>Order →</Link>
          </article>
        ))
      )}
    </section>
  );
}
