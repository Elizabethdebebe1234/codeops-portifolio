import { useState } from "react";
import { useCartStore } from "./store/cartStore";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
  });

  const items = useCartStore((state) => state.items);

  const removeItem = useCartStore((state) => state.removeItem);

  const clear = useCartStore((state) => state.clear);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  const validPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  function handleSubmit(event) {
    event.preventDefault();

    alert(`Order for ${form.name} will be delivered to ${form.area}.`);
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        <div className="cart">
          <h2>Your Cart</h2>

          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {items.map((dish, index) => (
                <div key={`${dish.id}-${index}`} className="cart-item">
                  <span>
                    {dish.name} — {dish.price} ETB
                  </span>

                  <button type="button" onClick={() => removeItem(dish.id)}>
                    Remove
                  </button>
                </div>
              ))}

              <h3>Total: {total} ETB</h3>

              <button type="button" onClick={clear} className="clear-button">
                Clear Cart
              </button>
            </>
          )}
        </div>

        <div className="delivery">
          <h2>Delivery Information</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Phone
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="TeleBirr phone number"
                required
              />
            </label>

            {form.phone && !validPhone && (
              <p className="error">Use 09XXXXXXXX or +2519XXXXXXXX</p>
            )}

            <label>
              Delivery Area
              <select name="area" value={form.area} onChange={handleChange}>
                <option value="Bole">Bole</option>
                <option value="Kazanchis">Kazanchis</option>
                <option value="Megenagna">Megenagna</option>
              </select>
            </label>

            <button
              type="submit"
              disabled={!validPhone || items.length === 0}
              className="payment-button"
            >
              💳 Pay with TeleBirr
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default OrderForm;
