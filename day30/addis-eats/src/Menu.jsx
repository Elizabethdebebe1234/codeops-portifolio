import { useContext, useEffect, useMemo, useRef, useState } from "react";

import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { useFetch } from "./hooks/useFetch";
import { CartContext } from "./cart/CartProvider";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const { data: dishes, loading, error } = useFetch("/dishes.json");

  const { dispatch } = useContext(CartContext);

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const shown = useMemo(() => {
    if (!dishes) {
      return [];
    }

    return dishes.filter((dish) => {
      const categoryMatch = category === "All" || dish.category === category;

      const searchMatch = dish.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [dishes, category, search]);

  function handleAdd(dish) {
    dispatch({
      type: "add",
      dish: dish,
    });
  }

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <CategoryBar selected={category} onSelect={setCategory} />

      <DishList dishes={shown} onAdd={handleAdd} />
    </div>
  );
}

export default Menu;
