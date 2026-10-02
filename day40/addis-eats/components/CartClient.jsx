"use client";

import { useState } from "react";

export default function CartClient() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Kitfo",
      price: 450,
      quantity: 1,
    },
  ]);

  function increase(id) {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decrease(id) {
    setCart((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  }

  function remove(id) {
    setCart((items) => items.filter((item) => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <article key={item.id}>
            <h3>{item.name}</h3>
            <p>
              {item.price} ETB × {item.quantity}
            </p>
            <button onClick={() => decrease(item.id)}>-</button>{" "}
            <span>{item.quantity}</span>{" "}
            <button onClick={() => increase(item.id)}>+</button>{" "}
            <button onClick={() => remove(item.id)}>Remove</button>
            <hr />
          </article>
        ))
      )}

      <h3>Total: {total} ETB</h3>
    </section>
  );
}
