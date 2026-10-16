
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../CartContext";

const categories = [
  "All",
  "Traditional Favorite",
  "Chef's Special",
  "Vegan Favorite",
  "Fresh & Flavorful",
  "Breakfast Favorite",
  "Vegan Combo",
  "Spicy Special",
  "Mild & Flavorful",
  "Ethiopian Special",
  "Lamb Special",
  "Grill Favorite",
];

export default function MenuPage() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart, cartCount } = useCart();

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await fetch("/api/dishes");

        if (!response.ok) {
          throw new Error("Failed to load dishes");
        }

        const data = await response.json();

        if (!Array.isArray(data.dishes)) {
          throw new Error("Invalid dishes data");
        }

        setDishes(data.dishes);
      } catch {
        setError("Could not load dishes. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    }

    fetchDishes();
  }, []);

  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch = (dish.name || "")
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      (dish.category || "").trim().toLowerCase() ===
        activeCategory.trim().toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <section className="menu-hero">
        <div className="container">
          <span className="eyebrow">FRESH FROM OUR KITCHEN</span>

          <h1 className="section-title">Explore Our Menu</h1>

          <p className="section-description">
            Discover Ethiopia&apos;s authentic flavors, prepared with care.
          </p>

          <div className="menu-filter-panel">
            <div className="menu-search-wrap">
              <span className="search-icon" aria-hidden="true">
                ⌕
              </span>

              <input
                id="menu-search"
                name="search"
                className="menu-search"
                type="search"
                placeholder="Search Doro Wot, Tibs, Shiro..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search dishes"
              />

              {search && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <p className="cart-status">
              🛒 Items in cart: {cartCount}{" "}
              <Link href="/cart">View Cart →</Link>
            </p>

            <div className="category-filter">
              <p className="filter-label">EXPLORE BY CATEGORY</p>

              <div className="category-list">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category
                        ? "category-button active"
                        : "category-button"
                    }
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="menu-results-heading">
            <h2 className="section-title">Made with care</h2>

            {!loading && !error && (
              <p>{filteredDishes.length} dishes found</p>
            )}
          </div>

          {loading ? (
            <p>Loading delicious dishes...</p>
          ) : error ? (
            <p role="alert">{error}</p>
          ) : filteredDishes.length > 0 ? (
            <div className="dish-grid">
              {filteredDishes.map((dish) => (
                <article
                  className="dish-card"
                  key={dish.id ?? dish.name}
                >
                  {dish.image ? (
                    <img
                      className="dish-image"
                      src={dish.image}
                      alt={dish.name || "Ethiopian dish"}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="dish-image image-placeholder"
                      role="img"
                      aria-label={`Image unavailable for ${dish.name}`}
                    >
                      Image unavailable
                    </div>
                  )}

                  <div className="dish-content">
                    <span className="eyebrow">
                      {dish.category}
                    </span>

                    <h3>{dish.name}</h3>

                    <p>{dish.description}</p>

                    <div className="dish-bottom">
                      <span className="price">
                        {dish.price} <small>ETB</small>
                      </span>

                      <button
                        type="button"
                        className="btn"
                        onClick={() => addToCart(dish)}
                      >
                        Add to Cart +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-menu">
              <h3>No dishes found</h3>

              <p>Try another search or category.</p>

              <button
                className="btn"
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Show All Dishes
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
