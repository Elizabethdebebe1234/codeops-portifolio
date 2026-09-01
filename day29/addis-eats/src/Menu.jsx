import { useEffect, useRef, useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { loadDishes } from "./api";

function Menu({ onAdd }) {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadMenu() {
      try {
        setLoading(true);
        setError("");

        const data = await loadDishes(controller.signal);
        setDishes(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadMenu();

    return () => {
      controller.abort();
    };
  }, [category]);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const shown =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  return (
    <div>
      <input ref={searchRef} type="text" placeholder="Search dishes..." />

      <CategoryBar selected={category} onSelect={setCategory} />

      <DishList dishes={shown} onAdd={onAdd} />
    </div>
  );
}

export default Menu;
