import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { validate } from "../pages/validate";

function OrderForm() {
  const { items, increaseItem, decreaseItem, removeItem, clear } =
    useCartStore();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    notes: "",
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState("");

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const areaRef = useRef(null);
  const notesRef = useRef(null);

  const errors = useMemo(() => validate(form), [form]);

  const total = items.reduce(
    (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
    0,
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitError("");
    setSuccess("");
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function focusFirstError(currentErrors) {
    if (currentErrors.name) {
      nameRef.current?.focus();
      return;
    }

    if (currentErrors.phone) {
      phoneRef.current?.focus();
      return;
    }

    if (currentErrors.area) {
      areaRef.current?.focus();
      return;
    }

    if (currentErrors.notes) {
      notesRef.current?.focus();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const currentErrors = validate(form);

    setTouched({
      name: true,
      phone: true,
      area: true,
      notes: true,
    });

    if (Object.keys(currentErrors).length > 0) {
      focusFirstError(currentErrors);
      return;
    }

    if (items.length === 0) {
      setSubmitError("Your cart is empty.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    setSuccess("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      clear();

      setSuccess(
        `Order placed successfully! Your total was ETB ${total.toLocaleString()}.`,
      );
    } catch {
      setSubmitError(
        "The server could not process your order. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="checkout-page">
        <div className="checkout-success-card">
          <div className="success-icon">✓</div>

          <h1>Order Successful!</h1>

          <p>{success}</p>

          <button
            type="button"
            className="checkout-button"
            onClick={() => navigate("/menu")}
          >
            Back to Menu
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-heading">
          <span>🍽️ Addis Eats</span>
          <h1>Complete Your Order</h1>
          <p>Review your order and enter your delivery information.</p>
        </div>

        <div className="checkout-layout">
          {/* CART */}
          <section className="checkout-cart-card">
            <div className="section-header">
              <div>
                <h2>Your Order</h2>
                <p>
                  {items.length} item
                  {items.length !== 1 ? "s" : ""}
                </p>
              </div>

              {items.length > 0 && (
                <button
                  type="button"
                  className="clear-cart-button"
                  onClick={clear}
                >
                  Clear
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="empty-cart">
                <div>🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some delicious dishes before checkout.</p>

                <button
                  type="button"
                  className="checkout-button"
                  onClick={() => navigate("/menu")}
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="checkout-cart-list">
                  {items.map((item) => {
                    const quantity = item.quantity || 1;
                    const itemTotal = Number(item.price || 0) * quantity;

                    return (
                      <article className="checkout-cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />

                        <div className="checkout-item-info">
                          <h3>{item.name}</h3>

                          <p>ETB {Number(item.price).toLocaleString()} each</p>

                          <div className="quantity-row">
                            <div className="quantity-controls">
                              <button
                                type="button"
                                onClick={() => decreaseItem(item.id)}
                                aria-label={`Decrease ${item.name} quantity`}
                              >
                                −
                              </button>

                              <span>{quantity}</span>

                              <button
                                type="button"
                                onClick={() => increaseItem(item.id)}
                                aria-label={`Increase ${item.name} quantity`}
                              >
                                +
                              </button>
                            </div>

                            <button
                              type="button"
                              className="remove-item-button"
                              onClick={() => removeItem(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        <strong>ETB {itemTotal.toLocaleString()}</strong>
                      </article>
                    );
                  })}
                </div>

                <div className="checkout-total">
                  <span>Total</span>
                  <strong>ETB {total.toLocaleString()}</strong>
                </div>
              </>
            )}
          </section>

          {/* CHECKOUT FORM */}
          <section className="checkout-form-card">
            <div className="section-header">
              <div>
                <h2>Delivery Information</h2>
                <p>Where should we deliver your order?</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>

                <input
                  ref={nameRef}
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby={
                    touched.name && errors.name ? "name-error" : undefined
                  }
                />

                {touched.name && errors.name && (
                  <p id="name-error" role="alert" className="field-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="phone">TeleBirr Phone Number</label>

                <input
                  ref={phoneRef}
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="0912345678"
                  aria-invalid={Boolean(touched.phone && errors.phone)}
                  aria-describedby={
                    touched.phone && errors.phone ? "phone-error" : undefined
                  }
                />

                {touched.phone && errors.phone && (
                  <p id="phone-error" role="alert" className="field-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="area">Delivery Area</label>

                <select
                  ref={areaRef}
                  id="area"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.area && errors.area)}
                  aria-describedby={
                    touched.area && errors.area ? "area-error" : undefined
                  }
                >
                  <option value="">Select delivery area</option>
                  <option value="Bole">Bole</option>
                  <option value="Kazanchis">Kazanchis</option>
                  <option value="Piassa">Piassa</option>
                  <option value="CMC">CMC</option>
                  <option value="Lideta">Lideta</option>
                  <option value="Mexico">Mexico</option>
                </select>

                {touched.area && errors.area && (
                  <p id="area-error" role="alert" className="field-error">
                    {errors.area}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="notes">
                  Delivery Notes <span>(optional)</span>
                </label>

                <textarea
                  ref={notesRef}
                  id="notes"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Any special delivery instructions?"
                  rows="4"
                  aria-invalid={Boolean(touched.notes && errors.notes)}
                  aria-describedby={
                    touched.notes && errors.notes ? "notes-error" : undefined
                  }
                />

                {touched.notes && errors.notes && (
                  <p id="notes-error" role="alert" className="field-error">
                    {errors.notes}
                  </p>
                )}
              </div>

              {submitError && (
                <p className="submit-error" role="alert">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                className="checkout-button"
                disabled={submitting || items.length === 0}
              >
                {submitting
                  ? "Processing..."
                  : `Place Order — ETB ${total.toLocaleString()}`}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default OrderForm;
