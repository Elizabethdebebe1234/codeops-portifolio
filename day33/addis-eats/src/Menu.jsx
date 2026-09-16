import { dishes } from "./data/dishes";
import { useCartStore } from "./store/cartStore";

export default function Menu() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div>
      <h2>Menu</h2>

      {dishes.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.name}</h3>

          <p>{dish.price} ETB</p>

          <button onClick={() => addItem(dish)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
