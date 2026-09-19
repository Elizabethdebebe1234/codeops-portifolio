import { useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCartStore } from "../store/cartStore";
import CategoryBar from "../components/CategoryBar";
import DishList from "../components/DishList";

export default function Menu() {
  const { data: dishes, loading, error } = useFetch("/dishes.json");

  const addItem = useCartStore((state) => state.addItem);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes = useMemo(() => {
    if (!dishes) {
      return [];
    }

    if (selectedCategory === "All") {
      return dishes;
    }

    return dishes.filter((dish) => dish.category === selectedCategory);
  }, [dishes, selectedCategory]);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="menu">
      <div className="hero">
        <h1>🍽️ Addis Eats</h1>
        <p>Delicious Ethiopian food for every taste.</p>
      </div>

      <h2>Our Menu</h2>

      <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />

      <DishList dishes={filteredDishes} onAdd={addItem} />
    </section>
  );
}
