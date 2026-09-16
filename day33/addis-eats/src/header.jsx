import { useContext } from "react";
import { CartContext } from "./cart/CartProvider";

function Header() {
  const { items } = useContext(CartContext);

  return (
    <header>
      <h2>🍽️ Addis Eats</h2>

      <div>🛒 Cart: {items.length}</div>
    </header>
  );
}

export default Header;
