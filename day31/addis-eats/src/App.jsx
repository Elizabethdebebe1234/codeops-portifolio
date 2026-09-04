import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Menu from "./Menu";
import DishPage from "./DishPage";
import Checkout from "./OrderForm";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="menu" element={<Menu />} />

        <Route path="menu/:id" element={<DishPage />} />

        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />

        <Route path="signin" element={<SignIn />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
