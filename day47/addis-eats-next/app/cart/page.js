
"use client";

import Link from "next/link";
import { useCart } from "../CartContext";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const total = (cart || []).reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1 className="section-title">Your Shopping Cart</h1>
        <p className="section-description">
          Review your favorite Ethiopian dishes before checkout.
        </p>

        {!cart || cart.length === 0 ? (
          <div className="empty-menu">
            <h2>Your cart is empty</h2>
            <p>Something delicious is waiting for you.</p>
            <Link href="/menu" className="btn">
              Explore Our Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
  {cart.map((item) => (
    <article
      className="cart-item"
      key={item.id ?? item.name}
    >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.price} ETB each</p>

                    <div className="cart-item-actions">
                      <button
                        type="button"
                        className="btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        − Remove
                      </button>

                      <span>Qty: {item.quantity || 1}</span>

                      <button
                        type="button"
                        className="btn"
                        onClick={() => addToCart(item)}
                      >
                        + Add
                      </button>
                    </div>
                  </div>

                  <strong>
                    {item.price * (item.quantity || 1)} ETB
                  </strong>
                </article>
              ))}
            </div>

            <div className="cart-total">
              <h2>Total: {total} ETB</h2>

              <div className="cart-total-actions">
                <button
                  type="button"
                  className="btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

                <Link href="/menu" className="btn">
                  Continue Shopping
                </Link>

                <Link href="/checkout" className="btn btn-primary">
                  Proceed to Checkout →
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
