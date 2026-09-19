import { useCartStore } from "../store/cartStore";

export default function CartBadge() {
  const items = useCartStore((state) => state.items);

  return <div className="cart-badge">🛒 Cart: {items.length}</div>;
}
