import { Link, Outlet } from "react-router-dom";
import Header from "./header";

function Layout() {
  return (
    <div>
      <Header />

      <nav>
        <Link to="/">Home</Link> <Link to="/menu">Menu</Link>{" "}
        <Link to="/checkout">Checkout</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
