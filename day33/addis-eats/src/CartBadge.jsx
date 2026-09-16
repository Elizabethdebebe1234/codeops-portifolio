import { useCartStore } from "./store/cartStore";

export default function CartBadge() {
  const items = useCartStore((state) => state.items);

  return <div>Cart: {items.length}</div>;
}
