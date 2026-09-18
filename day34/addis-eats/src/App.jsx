import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishPage from "./pages/DishPage";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";
import OrderForm from "./pages/OrderForm";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="menu" element={<Menu />} />

          <Route path="menu/:id" element={<DishPage />} />

          <Route path="signin" element={<SignIn />} />

          <Route path="create-account" element={<CreateAccount />} />

          <Route
            path="checkout"
            element={
              <RequireAuth>
                <OrderForm />
              </RequireAuth>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
