import { useRef, useState, useMemo } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { useFetch } from "./hooks/useFetch";

function Menu({ onAdd }) {
  const [category, setCategory] = useState("All");

  const { data: dishes, loading, error } = useFetch("/dishes.json");

  const searchRef = useRef(null);

  const shown = useMemo(() => {
    if (!dishes) return [];

    return category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);
  }, [dishes, category]);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <input ref={searchRef} type="text" placeholder="Search dishes..." />

      <CategoryBar selected={category} onSelect={setCategory} />

      <DishList dishes={shown} onAdd={onAdd} />
    </div>
  );
}

export default Menu;
