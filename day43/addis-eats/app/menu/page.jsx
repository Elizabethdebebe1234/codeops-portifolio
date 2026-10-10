import DishCard from "./DishCard";

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
