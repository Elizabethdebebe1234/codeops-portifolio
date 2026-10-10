import DishCard from "./DishCard";

export const metadata = {
  title: "Menu",
  description:
    "Explore Doro Wat, Tibs, and other Ethiopian dishes available from Addis Eats.",

  alternates: {
    canonical: "/menu",
  },

  openGraph: {
    title: "Menu · Addis Eats",
    description: "Explore Ethiopian dishes available from Addis Eats.",
    type: "website",
  },
};

const dishes = [
  {
    name: "Doro Wat",
    description: "Traditional Ethiopian chicken stew.",
    price: 450,
    image: "/dishes/doro-wat.jpg",
  },
  {
    name: "Tibs",
    description: "Sautéed beef with vegetables.",
    price: 550,
    image: "/dishes/tibs.jpg",
  },
];

export default function MenuPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1>Addis Eats Menu</h1>

      <section>
        {dishes.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </section>
    </main>
  );
}
