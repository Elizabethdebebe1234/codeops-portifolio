import { useState, useContext } from "react";
import { CartContext } from "./cart/CartProvider";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
  });

  const { items, dispatch, total } = useContext(CartContext);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const validPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Order for ${form.name} will be delivered to ${form.area}.`);
  }

  return (
    <div className="order-form">
      {/* CART */}
      <div className="cart">
        <h2>Your Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {items.map((dish) => (
              <div key={dish.id} className="cart-item">
                <span>
                  {dish.name} — {dish.price} ETB
                </span>

                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "remove",
                      id: dish.id,
                    })
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <h3>Total: {total} ETB</h3>

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "clear",
                })
              }
            >
              Clear Cart
            </button>
          </>
        )}
      </div>

      {/* DELIVERY FORM */}
      <h2>Delivery Information</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="TeleBirr phone number"
        />

        {form.phone && !validPhone && (
          <p className="error">Use 09XXXXXXXX or +2519XXXXXXXX</p>
        )}

        <select name="area" value={form.area} onChange={handleChange}>
          <option value="Bole">Bole</option>
          <option value="Kazanchis">Kazanchis</option>
          <option value="Megenagna">Megenagna</option>
        </select>

        <button type="submit" disabled={!validPhone}>
          Pay with TeleBirr
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
