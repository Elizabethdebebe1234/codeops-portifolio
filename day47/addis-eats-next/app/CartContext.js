
"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(dish) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => String(item.id) === String(dish.id)
      );

      if (existing) {
        return currentCart.map((item) =>
          String(item.id) === String(dish.id)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...currentCart, { ...dish, quantity: 1 }];
    });
  }

  function removeFromCart(dishId) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          String(item.id) === String(dishId)
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) =>
      sum + Number(item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
