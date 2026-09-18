import { Link } from "react-router-dom";

function Dish({ id, name, price, spicy, image, onAdd }) {
  return (
    <article className="dish">
      {image && <img src={image} alt={name} className="dish-image" />}

      <Link to={`/menu/${id}`}>
        <h3>{name}</h3>
      </Link>

      <p>{price} ETB</p>

      {spicy && <span>🌶️ Spicy</span>}

      <button onClick={() => onAdd({ id, name, price, spicy, image })}>
        Add to Cart
      </button>
    </article>
  );
}

export default Dish;
