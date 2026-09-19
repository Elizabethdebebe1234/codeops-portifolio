import { memo } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useAuth } from "../AuthContext.jsx";

function Header() {
  const items = useCartStore((state) => state.items);

  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/" className="logo">
        🍽️ Addis Eats
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>

      <div className="header-actions">
        {user ? (
          <>
            <span>Hi, {user.name}</span>

            <button onClick={logout} type="button">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/signin" className="sign-in-button">
            Sign In
          </Link>
        )}

        <Link to="/checkout" className="cart-link">
          🛒 Cart: {items.length}
        </Link>
      </div>
    </header>
  );
}

export default memo(Header);
