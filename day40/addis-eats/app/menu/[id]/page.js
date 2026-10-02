import Link from "next/link";
import { notFound } from "next/navigation";
import { getDishes, getDishById } from "@/lib/dishes";

export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = await getDishById(id);

  if (!dish) {
    notFound();
  }

  return (
    <article>
      <h2>{dish.name}</h2>

      <p>{dish.description}</p>

      <p>Category: {dish.category}</p>

      <p>
        Price: <strong>{dish.price} ETB</strong>
      </p>

      <Link href={`/checkout?dishId=${dish.id}`}>Order This Dish</Link>

      {" | "}

      <Link href="/menu">Back to Menu</Link>
    </article>
  );
}
