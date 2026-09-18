import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  return (
    <div className="dishes">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          id={dish.id}
          name={dish.name}
          price={dish.price}
          spicy={dish.spicy}
          currency={dish.currency}
          image={dish.image}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default DishList;
