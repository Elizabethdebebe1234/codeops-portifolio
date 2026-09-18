import { useCartStore } from "./store/cartStore";

export default function CartTotal() {
  const total = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price, 0),
  );

  return <h3 className="cart-total">Total: {total} ETB</h3>;
}
