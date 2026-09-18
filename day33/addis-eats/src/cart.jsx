import { useCartStore } from "./store/cartStore";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  const removeItem = useCartStore((state) => state.removeItem);

  const clear = useCartStore((state) => state.clear);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <div>
                  <strong>{item.name}</strong>

                  <span>{item.price} ETB</span>
                </div>

                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <button onClick={clear} className="clear-button">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
