import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { useFetch } from "./hooks/useFetch";
import { CartContext } from "./cart/CartProvider";

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "All";

  const [category, setCategory] = useState(categoryFromUrl);
  const [search, setSearch] = useState("");

  const { data: dishes, loading, error } = useFetch("/dishes.json");

  const { dispatch } = useContext(CartContext);

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);

    if (newCategory === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: newCategory,
      });
    }
  }

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

      <CategoryBar selected={category} onSelect={handleCategoryChange} />

      <DishList dishes={shown} onAdd={handleAdd} />
    </div>
  );
}

export default Menu;
