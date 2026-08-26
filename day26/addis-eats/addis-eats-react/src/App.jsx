import Header from "./Header";
import Dish from "./Dish";
import "./App.css";

const dishes = [
  {
    id: 1,
    name: "Doro Wat",
    price: 240,
  },
  {
    id: 2,
    name: "Siga Wat",
    price: 280,
  },
  {
    id: 3,
    name: "Tibs",
    price: 300,
  },
  {
    id: 4,
    name: "Shiro Wat",
    price: 180,
  },
  {
    id: 5,
    name: "Kitfo",
    price: 350,
  },
  {
    id: 6,
    name: "Firfir",
    price: 160,
  },
];

function App() {
  return (
    <>
      <Header />

      <main className="menu">
        <section className="hero">
          <h2>Welcome to Addis Eats</h2>
          <p>Enjoy delicious Ethiopian dishes made with traditional flavors.</p>
        </section>

        <section className="menu-section">
          <h2>Our Menu</h2>

          <div className="dishes">
            {dishes.map((dish) => (
              <Dish key={dish.id} name={dish.name} price={dish.price} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Addis Eats | Ethiopian Food</p>
      </footer>
    </>
  );
}

export default App;
