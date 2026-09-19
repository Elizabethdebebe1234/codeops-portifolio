import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Addis Eats. All rights reserved.</p>

        <Link to="/menu">Browse Menu</Link>
      </footer>
    </div>
  );
}

export default Layout;
