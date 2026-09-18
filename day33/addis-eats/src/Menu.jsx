import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { useFetch } from "./hooks/useFetch";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { useCartStore } from "./store/cartStore";

function Menu() {
  const { data: dishes, loading, error } = useFetch("/dishes.json");

  const [searchParams, setSearchParams] = useSearchParams();

  const addItem = useCartStore((state) => state.addItem);

  const searchInputRef = useRef(null);

  const search = searchParams.get("search") || "";

  const selectedCategory = searchParams.get("category") || "All";

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const filteredDishes = useMemo(() => {
    if (!dishes) {
      return [];
    }

    return dishes.filter((dish) => {
      const matchesSearch = dish.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || dish.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [dishes, search, selectedCategory]);

  function handleSearch(event) {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  }

  function handleCategory(category) {
    const params = new URLSearchParams(searchParams);

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setSearchParams(params);
  }

  if (loading) {
    return (
      <div className="status">
        <h2>Loading menu...</h2>
        <p>Please wait while we bring you the dishes.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status error-box">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="menu">
      <div className="menu-heading">
        <h2>Our Menu</h2>

        <p>Choose from our selection of Ethiopian dishes.</p>
      </div>

      <div className="search-box">
        <input
          ref={searchInputRef}
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search dishes..."
        />
      </div>

      <CategoryBar selected={selectedCategory} onSelect={handleCategory} />

      {filteredDishes.length === 0 ? (
        <div className="status">
          <h3>No dishes found.</h3>
          <p>Try another search or category.</p>
        </div>
      ) : (
        <DishList dishes={filteredDishes} onAdd={addItem} />
      )}
    </section>
  );
}

export default Menu;
