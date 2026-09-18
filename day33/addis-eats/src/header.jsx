import { Link, useNavigate } from "react-router-dom";

import { useCartStore } from "./store/cartStore";
import { useAuth } from "./AuthContext.jsx";

function Header() {
  const items = useCartStore((state) => state.items);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/");
  }

  return (
    <header className="header">
      <div>
        <h1>🍽️ Addis Eats</h1>

        <p>Authentic Ethiopian food, delivered with love.</p>
      </div>

      <div className="header-actions">
        {user ? (
          <div className="user-section">
            <span className="welcome-user">Hi, {user.name} 👋</span>

            <button onClick={handleLogout} className="logout-button">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
        )}

        <Link to="/checkout" className="header-cart">
          🛒 Cart: {items.length}
        </Link>
      </div>
    </header>
  );
}

export default Header;
