import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishPage from "./pages/DishPage";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";
import RequireAuth from "./RequireAuth";

const OrderForm = lazy(() => import("./pages/OrderForm"));
const Receipt = lazy(() => import("./pages/Receipt"));

function LoadingSkeleton() {
  return (
    <div className="page-skeleton">
      <div className="skeleton-box"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>
      <p>Loading page...</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSkeleton />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="menu"
              element={
                <ErrorBoundary message="The menu could not be displayed.">
                  <Menu />
                </ErrorBoundary>
              }
            />

            <Route
              path="menu/:id"
              element={
                <ErrorBoundary message="This dish could not be displayed.">
                  <DishPage />
                </ErrorBoundary>
              }
            />

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

            <Route path="receipt" element={<Receipt />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
