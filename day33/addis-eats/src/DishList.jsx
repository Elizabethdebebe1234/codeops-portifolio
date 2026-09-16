import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          id={dish.id}
          name={dish.name}
          price={dish.price}
          spicy={dish.spicy}
          currency={dish.currency}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default DishList;
