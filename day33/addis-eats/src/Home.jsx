import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to Addis Eats 🇪🇹</h2>

        <p>
          Discover delicious Ethiopian dishes prepared with traditional flavors
          and served fresh.
        </p>

        <Link to="/menu" className="primary-button">
          Explore Our Menu
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🍛 Authentic Food</h3>
          <p>Enjoy traditional Ethiopian dishes and flavors.</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Easy Delivery</h3>
          <p>Choose your area and order your favorite meal.</p>
        </div>

        <div className="feature-card">
          <h3>💳 TeleBirr</h3>
          <p>Simple and convenient payment experience.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
