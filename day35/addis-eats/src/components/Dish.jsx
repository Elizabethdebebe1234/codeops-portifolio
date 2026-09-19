// DAY 35 ERROR BOUNDARY TEST
// This intentionally crashes one dish so we can test
// whether the ErrorBoundary catches the error.
//if (name === "Doro Wot") {
// throw new Error("Test error: Doro Wot failed to render.");
//}

import { Link } from "react-router-dom";

function Dish({ id, name, price, spicy, image, onAdd, onOpenModal }) {
  return (
    <article className="dish">
      {image && <img src={image} alt={name} className="dish-image" />}

      <Link to={`/menu/${id}`}>
        <h3>{name}</h3>
      </Link>

      <p>{price} ETB</p>

      {spicy && <span>🌶️ Spicy</span>}

      <button
        type="button"
        onClick={() =>
          onAdd({
            id,
            name,
            price,
            spicy,
            image,
          })
        }
      >
        Add to Cart
      </button>

      <button type="button" onClick={onOpenModal}>
        Quick View
      </button>
    </article>
  );
}

export default Dish;
