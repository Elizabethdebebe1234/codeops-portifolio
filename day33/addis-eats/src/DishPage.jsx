import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

function DishPage() {
  const { id } = useParams();

  const { data: dishes, loading, error } = useFetch("/dishes.json");

  if (loading) {
    return <p>Loading dish...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!dishes) {
    return <p>No dishes found.</p>;
  }

  const dish = dishes.find((dish) => dish.id === Number(id));

  if (!dish) {
    return <p>Dish not found.</p>;
  }

  return (
    <div>
      <h1>{dish.name}</h1>

      <p>Price: {dish.price} ETB</p>

      <p>Category: {dish.category}</p>

      {dish.spicy && <p>🌶️ Spicy</p>}
    </div>
  );
}

export default DishPage;
