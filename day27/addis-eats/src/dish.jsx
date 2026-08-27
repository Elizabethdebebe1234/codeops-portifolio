import PropTypes from "prop-types";

function Dish({ name, price, spicy, currency = "ETB" }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        {price} {currency}
      </p>

      {typeof spicy === "boolean" && spicy && <span>🌶️ Spicy</span>}
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
};

Dish.defaultProps = {
  currency: "ETB",
};

export default Dish;
