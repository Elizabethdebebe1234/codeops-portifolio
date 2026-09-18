import { Link, useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

function DishPage() {
  const { id } = useParams();

  const { data: dishes, loading, error } = useFetch("/dishes.json");

  if (loading) {
    return (
      <div className="status">
        <h2>Loading dish...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status error-box">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!dishes) {
    return (
      <div className="status">
        <p>No dishes found.</p>
      </div>
    );
  }

  const dish = dishes.find((item) => item.id === Number(id));

  if (!dish) {
    return (
      <div className="status">
        <h2>Dish not found.</h2>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <section className="dish-page">
      {dish.image && (
        <img src={dish.image} alt={dish.name} className="detail-image" />
      )}

      <div className="dish-details">
        <p className="category-label">{dish.category}</p>

        <h1>{dish.name}</h1>

        <p className="detail-price">{dish.price} ETB</p>

        <p>{dish.description}</p>

        {dish.spicy && <p className="spicy">🌶️ Spicy</p>}

        <Link to="/menu" className="primary-button">
          ← Back to Menu
        </Link>
      </div>
    </section>
  );
}

export default DishPage;
