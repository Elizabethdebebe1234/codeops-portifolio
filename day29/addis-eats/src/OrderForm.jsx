import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
  });

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
