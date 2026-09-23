import Link from "next/link";
import { notFound } from "next/navigation";

const dishes = {
  kitfo: {
    name: "Kitfo",
    price: 320,
    description: "Traditional Ethiopian beef dish.",
  },
  shiro: {
    name: "Shiro",
    price: 130,
    description: "Delicious Ethiopian stew.",
  },
  "doro-wot": {
    name: "Doro Wot",
    price: 240,
    description: "Spicy Ethiopian chicken stew served with injera.",
  },
  tibs: {
    name: "Tibs",
    price: 280,
    description: " Ethiopian beef served with vegetables.",
  },
};

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes[id];

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <p>
        <strong>Price:</strong> {dish.price} ETB
      </p>

      <Link href="/menu">← Back to Menu</Link>
    </main>
  );
}
