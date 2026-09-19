import { useRef, useState } from "react";
import Dish from "./Dish";
import DishModal from "./DishModal";

function DishList({ dishes, onAdd }) {
  const [selectedDish, setSelectedDish] = useState(null);
  const lastFocusedElement = useRef(null);

  if (dishes.length === 0) {
    return <p>No dishes found in this category.</p>;
  }

  function openModal(dish) {
    lastFocusedElement.current = document.activeElement;
    setSelectedDish(dish);
  }

  function closeModal() {
    setSelectedDish(null);

    requestAnimationFrame(() => {
      lastFocusedElement.current?.focus();
    });
  }

  return (
    <>
      <div className="dishes">
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            id={dish.id}
            name={dish.name}
            price={dish.price}
            spicy={dish.spicy}
            image={dish.image}
            onAdd={onAdd}
            onOpenModal={() => openModal(dish)}
          />
        ))}
      </div>

      <DishModal dish={selectedDish} onClose={closeModal} />
    </>
  );
}

export default DishList;
