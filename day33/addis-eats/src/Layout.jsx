import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="app">
      <Header />

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Addis Eats. Ethiopian food made with love.</p>
      </footer>
    </div>
  );
}

export default Layout;
