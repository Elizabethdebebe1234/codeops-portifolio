import { useState } from "react";
import Menu from "./Menu";
import menu from "./data";
import OrderForm from "./OrderForm";

function App() {
  const [total, setTotal] = useState(0);

  function handleAdd(price) {
    setTotal((currentTotal) => currentTotal + price);
  }

  return (
    <div>
      <h1>🍽️ Addis Eats</h1>

      <Menu dishes={menu} onAdd={handleAdd} />

      <div className="order-total">
        <h2>Order Total: {total} ETB</h2>
      </div>
      <OrderForm />
    </div>
  );
}

export default App;
