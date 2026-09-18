import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Menu from "./Menu";
import DishPage from "./DishPage";
import OrderForm from "./OrderForm";
import SignIn from "./SignIn";
import RequireAuth from "./RequireAuth";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="menu" element={<Menu />} />

          <Route path="menu/:id" element={<DishPage />} />

          <Route
            path="checkout"
            element={
              <RequireAuth>
                <OrderForm />
              </RequireAuth>
            }
          />

          <Route path="signin" element={<SignIn />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
