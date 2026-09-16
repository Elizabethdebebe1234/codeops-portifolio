import { createContext, useContext, useMemo, useReducer } from "react";

import { cartReducer } from "./cartReducer";

const CartContext = createContext(null);

const initialState = {
  items: [],
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const total = state.items.reduce((sum, item) => sum + item.price, 0);

  const value = useMemo(
    () => ({
      items: state.items,
      total,
      dispatch,
    }),
    [state.items, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
