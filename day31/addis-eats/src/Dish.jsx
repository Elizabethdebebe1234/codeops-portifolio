import { useState } from "react";
import PropTypes from "prop-types";

function Dish({ id, name, price, spicy, currency = "ETB", onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((currentCount) => currentCount + 1);

    onAdd({
      id,
      name,
      price,
      spicy,
      currency,
    });
  }

  return (
    <div>
      <h3>{name}</h3>

      <p>
        {price} {currency}
      </p>

      {typeof spicy === "boolean" && spicy && <span>🌶️ Spicy</span>}

      <p>Added: {count}</p>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

Dish.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

Dish.defaultProps = {
  currency: "ETB",
};

export default Dish;
