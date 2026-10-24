
"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../CartContext";

export default function CheckoutPage() {
  const { cart, cartTotal, removeFromCart, cartCount, clearCart } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const [orderNumber, setOrderNumber] = useState("");
  const [submitError, setSubmitError] = useState("");

  
function handleSubmit(event) {
  event.preventDefault();
  setSubmitError("");

  if (cart.length === 0) return;

  try {
    const savedOrders = JSON.parse(
      localStorage.getItem("addisEatsOrders") || "[]"
    );

    const order = {
      id: `AE-${Date.now()}`,
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      items: cart.map((dish) => ({
        id: dish.id,
        name: dish.name,
        price: Number(dish.price),
        quantity: dish.quantity || 1,
        image: dish.image || "",
      })),
      total: cartTotal,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "addisEatsOrders",
      JSON.stringify([order, ...savedOrders])
    );

    setOrderNumber(order.id);
    setConfirmedTotal(cartTotal);
    setOrderPlaced(true);
    clearCart();
  } catch {
    setSubmitError(
      "We couldn't save your order. Please try again."
    );
  }
}


  if (orderPlaced) {
    return (
      <main className="checkout-page">
        <div className="checkout-shell">
          <div className="checkout-success">
            <div className="success-icon">✓</div>
            <p className="checkout-kicker">ADDIS EATS · ORDER UPDATE</p>
            <h1>Thank you, {customerName}!</h1>
            <p>
  Your demo order has been saved for the kitchen.
  No payment or real delivery has been processed.
</p>

<p>
  Order number: <strong>{orderNumber}</strong>
</p>

            <div className="success-details">
              <div>
                <span>Order total</span>
                <strong>{confirmedTotal.toLocaleString()} ETB</strong>
              </div>
              <div>
                <span>Delivery address</span>
                <strong>{address}</strong>
              </div>
              <div>
                <span>Contact number</span>
                <strong>{phone}</strong>
              </div>
            </div>

            <Link href="/menu" className="checkout-primary-btn">
              Discover More Dishes →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-shell">
        <div className="checkout-topbar">
          <Link href="/cart" className="checkout-back">
            ← Back to cart
          </Link>
          <small>Made with love in Ethiopia</small>
        </div>

        <header className="checkout-hero">
          <div>
            <p className="checkout-kicker">GOOD FOOD. GREAT MOMENTS.</p>
            <h1>Almost <span>yours.</span></h1>
            <p>
              Your favorite Ethiopian dishes are waiting. Complete your details
              to finish your order.
            </p>
          </div>

          <div className="checkout-hero-art" aria-hidden="true">
            <span>✳</span>
            <div>🍲</div>
            <small>Made with love in Ethiopia</small>
          </div>
        </header>

        <nav className="checkout-steps" aria-label="Checkout progress">
          <div className="checkout-step completed">
            <span>✓</span>
            <div>
              <strong>01</strong>
              <small>Your selection</small>
            </div>
          </div>

          <div className="step-line active-line" />

          <div className="checkout-step current">
            <span>02</span>
            <div>
              <strong>02</strong>
              <small>Delivery details</small>
            </div>
          </div>

          <div className="step-line" />

          <div className="checkout-step">
            <span>03</span>
            <div>
              <strong>03</strong>
              <small>Confirmation</small>
            </div>
          </div>
        </nav>

        {cart.length === 0 ? (
          <section className="checkout-empty">
            <div className="empty-illustration">🛍️</div>
            <p className="checkout-kicker">YOUR NEXT FAVORITE MEAL</p>
            <h2>Your basket is empty</h2>
            <p>
              Explore our menu and find something delicious to make your day
              special.
            </p>
            <Link href="/menu" className="checkout-primary-btn">
              Explore the menu →
            </Link>
          </section>
        ) : (
          <div className="checkout-main-grid">
            <section className="checkout-form-panel">
              <div className="panel-heading">
                <div className="panel-icon">01</div>
                <div>
                  <p className="checkout-kicker">FIRST THINGS FIRST</p>
                  <h2>Delivery information</h2>
                  <p>Where should we bring your order?</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="modern-checkout-form">
                <div className="checkout-field">
                  <label htmlFor="customer-name">Full name</label>
                  <input
                    id="customer-name"
                    type="text"
                    placeholder="Your full name"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+251 9XX XXX XXX"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="address">Delivery address</label>
                  <textarea
                    id="address"
                    placeholder="City, neighborhood, street and landmarks..."
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    autoComplete="street-address"
                    rows={4}
                    required
                  />
                </div>

                <div className="checkout-delivery-note">
                  <span>✦</span>
                  <div>
                    <strong>A little note</strong>
                    <p>Please provide clear delivery details for your order.</p>
                  </div>
                </div>

                {submitError && (
  <p role="alert" className="checkout-error">
    {submitError}
  </p>
)}

                <button type="submit" className="checkout-primary-btn form-submit">
                  Confirm Demo Order <span>→</span>
                </button>

                <p className="checkout-disclaimer">
                  Demo only · No payment or real delivery
                </p>
              </form>
            </section>

            <aside className="checkout-summary-panel">
              <div className="summary-heading">
                <div>
                  <p className="checkout-kicker">MADE FOR YOUR APPETITE</p>
                  <h2>Your order</h2>
                </div>
                <span className="summary-count">{cartCount} items</span>
              </div>

              <div className="summary-items">
                {cart.map((dish) => (
                  <article className="summary-item" key={dish.id}>
                    <div className="summary-food-image">
                      {dish.image ? (
                        <img src={dish.image} alt={dish.name} />
                      ) : (
                        <span>🍲</span>
                      )}
                    </div>

                    <div className="summary-food-info">
                      <h3>{dish.name}</h3>
                      <p>
                        {Number(dish.price).toLocaleString()} ETB
                        <span> × {dish.quantity || 1}</span>
                      </p>
                      <button
                        type="button"
                        className="summary-remove"
                        onClick={() => removeFromCart(dish.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <strong className="summary-line-price">
                      {(Number(dish.price) * (dish.quantity || 1)).toLocaleString()}
                      <small> ETB</small>
                    </strong>
                  </article>
                ))}
              </div>

              <Link href="/menu" className="summary-add-more">
                <span>＋</span> Add more delicious food
              </Link>

              <div className="summary-calculation">
                <div>
                  <span>Subtotal</span>
                  <span>{cartTotal.toLocaleString()} ETB</span>
                </div>
                <div>
                  <span>Delivery fee</span>
                  <span className="fee-unavailable">Not included</span>
                </div>
              </div>

              <div className="summary-total">
                <div>
                  <span>Total amount</span>
                  <small>ETB</small>
                </div>
                <strong>{cartTotal.toLocaleString()}</strong>
              </div>

              <div className="summary-footer">
                <span>♥</span>
                <p>
                  Every dish tells a story.
                  <strong> Taste the heart of Ethiopia.</strong>
                </p>
              </div>
            </aside>
          </div>
        )}

        <footer className="checkout-footer">
          <span>ADDIS EATS</span>
          <p>Made with ♥ in Ethiopia</p>
          <Link href="/menu">Back to menu ↑</Link>
        </footer>
      </div>
    </main>
  );
}
