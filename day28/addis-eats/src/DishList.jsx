import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  if (dishes.length === 0) {
    return <p>No dishes in this category yet.</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish key={dish.id} {...dish} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default DishList;
