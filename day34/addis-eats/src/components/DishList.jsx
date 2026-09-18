import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  if (dishes.length === 0) {
    return <p>No dishes found in this category.</p>;
  }

  return (
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
        />
      ))}
    </div>
  );
}

export default DishList;
