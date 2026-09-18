import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Dish({ id, name, price, spicy, currency = "ETB", image, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((currentCount) => currentCount + 1);

    onAdd({
      id,
      name,
      price,
      spicy,
      currency,
      image,
    });
  }

  return (
    <article className="dish-card">
      {image && <img src={image} alt={name} className="dish-image" />}

      <div className="dish-content">
        <Link to={`/menu/${id}`} className="dish-title">
          <h3>{name}</h3>
        </Link>

        <p className="price">
          {price} {currency}
        </p>

        {typeof spicy === "boolean" && spicy && (
          <span className="spicy">🌶️ Spicy</span>
        )}

        <p className="added">Added: {count}</p>

        <button onClick={handleAdd} className="add-button">
          Add to Cart
        </button>
      </div>
    </article>
  );
}

Dish.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  image: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

Dish.defaultProps = {
  currency: "ETB",
  spicy: false,
  image: "",
};

export default Dish;
