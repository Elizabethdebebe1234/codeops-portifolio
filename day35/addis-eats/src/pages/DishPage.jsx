import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

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

  const dish = dishes.find((item) => item.id === Number(id));

  if (!dish) {
    return <p>Dish not found.</p>;
  }

  return (
    <article className="dish-page">
      {dish.image && (
        <img src={dish.image} alt={dish.name} className="dish-detail-image" />
      )}

      <h1>{dish.name}</h1>

      <p>
        <strong>Price:</strong> {dish.price} ETB
      </p>

      <p>
        <strong>Category:</strong> {dish.category}
      </p>

      {dish.spicy && <p>🌶️ This dish is spicy.</p>}

      <Link to="/menu">← Back to Menu</Link>
    </article>
  );
}

export default DishPage;
