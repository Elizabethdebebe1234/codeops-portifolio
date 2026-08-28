import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ dishes, onAdd }) {
  const [category, setCategory] = useState("All");

  const shown =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  return (
    <div>
      <CategoryBar selected={category} onSelect={setCategory} />

      <DishList dishes={shown} onAdd={onAdd} />
    </div>
  );
}

export default Menu;
