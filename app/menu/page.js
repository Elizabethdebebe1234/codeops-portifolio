import Link from "next/link";

const dishes = [
  { id: "kitfo", name: "Kitfo", price: 320 },
  { id: "shiro", name: "Shiro", price: 130 },
  { id: "doro-wot", name: "Doro Wot", price: 240 },
  { id: "tibs", name: "Tibs", price: 280 },
];

export default function Menu() {
  return (
    <main>
      <h1>Our Menu</h1>
      <p>Choose your favorite Ethiopian dish.</p>

      {dishes.map((dish) => (
        <div key={dish.id}>
          <h2>{dish.name}</h2>
          <p>{dish.price} ETB</p>

          <Link href={`/menu/${dish.id}`}>View dish</Link>
        </div>
      ))}

      <br />

      <Link href="/">Home</Link>
    </main>
  );
}
