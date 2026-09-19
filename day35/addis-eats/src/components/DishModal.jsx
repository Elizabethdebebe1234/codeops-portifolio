import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function DishModal({ dish, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!dish) {
      return;
    }

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) {
    return null;
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className="dish-modal-backdrop" onMouseDown={handleBackdropClick}>
      <div
        className="dish-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="dish-modal-close"
          onClick={onClose}
          aria-label="Close dish details"
        >
          ×
        </button>

        {dish.image && (
          <img src={dish.image} alt={dish.name} className="dish-modal-image" />
        )}

        <div className="dish-modal-content">
          <h2 id="dish-modal-title">{dish.name}</h2>

          <p className="dish-modal-price">{dish.price} ETB</p>

          {dish.spicy && <p className="dish-modal-spicy">🌶️ Spicy</p>}

          <p>
            Enjoy this delicious Addis Eats dish prepared with authentic
            Ethiopian flavors.
          </p>

          <button type="button" className="checkout-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default DishModal;
