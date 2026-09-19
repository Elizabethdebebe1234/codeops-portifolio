import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>🍽️ Welcome to Addis Eats</h1>

        <p>Discover delicious Ethiopian food and order your favorite dishes.</p>

        <Link to="/menu">
          <button>Explore Menu</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
