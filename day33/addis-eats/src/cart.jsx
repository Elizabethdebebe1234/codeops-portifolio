import { useCartStore } from "./store/cartStore";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  const removeItem = useCartStore((state) => state.removeItem);

  const clear = useCartStore((state) => state.clear);

  return (
    <div>
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <span>
                {item.name} - {item.price} ETB
              </span>

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <button onClick={clear}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
