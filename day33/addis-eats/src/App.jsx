import React from "react";
import Menu from "./Menu";
import CartBadge from "./CartBadge";
import CartTotal from "./CartTotal";
import Cart from "./Cart";

const App = () => {
  return (
    <>
      <h1>Addis Eats</h1>

      <Menu />
      <h3>Cart Items:</h3>
      <CartBadge />
      <CartTotal />
      <hr />

      <Cart />
    </>
  );
};

export default App;
