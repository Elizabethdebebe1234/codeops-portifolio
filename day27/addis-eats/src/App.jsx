import { useState } from "react";
import Dish from "./Dish";
import Card from "./Card";

const menu = [
  {
    id: 1,
    name: "Doro Wot",
    price: 250,
    category: "Wot",
    spicy: true,
  },
  {
    id: 2,
    name: "Siga Wot",
    price: 300,
    category: "Wot",
    spicy: true,
  },
  {
    id: 3,
    name: "Shiro Wot",
    price: 180,
    category: "Vegetarian",
    spicy: false,
  },
  {
    id: 4,
    name: "Tibs",
    price: 280,
    category: "Tibs",
    spicy: false,
  },
];

function App() {
  const [category, setCategory] = useState("All");

  const filteredMenu =
    category === "All"
      ? menu
      : menu.filter((dish) => dish.category === category);

  return (
    <div>
      <h1>My Ethiopian Foods</h1>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Wot">Wot</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Tibs">Tibs</option>
        <option value="Breakfast">Breakfast</option>
      </select>

      {filteredMenu.length === 0 ? (
        <p>No dishes found in this category.</p>
      ) : (
        filteredMenu.map((dish) => (
          <Card key={dish.id}>
            <Dish name={dish.name} price={dish.price} spicy={dish.spicy} />
          </Card>
        ))
      )}
    </div>
  );
}

export default App;
