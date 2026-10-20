
"use client";

import { useState } from "react";

const dishes = [
  {
    name: "Doro Wot",
    description: "Traditional Ethiopian chicken stew made with berbere, onions, butter, and spices.",
    price: "240",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCh-vNFPCN-mkWhcaYnaBOEVjF2xm5BgDxcBMP2V2SvA&s=10",
    tag: "TRADITIONAL FAVORITE",
  },
  {
    name: "Tibs",
    description: "Delicious Ethiopian grilled beef prepared with onions, peppers, and traditional spices.",
    price: "280",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSQHw29dtmek18OXRxhx_sz8OUlkr7z1eQX_A18LN2w&s=10",
    tag: "CHEF'S SPECIAL",
  },
  {
    name: "Shiro",
    description: "Smooth Ethiopian chickpea stew seasoned with traditional spices and served with injera.",
    price: "130",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-KwkLEr4TvGxURe-ShdA-Ax9Z13urKGr0VY3By-A6Q&s=10",
    tag: "VEGAN FAVORITE",
  },
  {
    name: "Kitfo",
    description: "Traditional Ethiopian minced beef dish seasoned with mitmita and clarified butter.",
    price: "320",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOxveKmREQgpLYWwpShMACJD7xwqeQqN6fBAVxUBPVQ&s=10",
    tag: "TRADITIONAL FAVORITE",
  },
  {
    name: "Misir Wot",
    description: "Spicy Ethiopian red lentil stew cooked with berbere and aromatic spices.",
    price: "140",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAvyq3vHC722i9_rbviRRpPov_RbSZ2MnsjPmyllXug&s=10",
    tag: "VEGAN FAVORITE",
  },
  {
    name: "Gomen",
    description: "Ethiopian collard greens cooked with garlic, onions, and traditional seasonings.",
    price: "120",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AWz02PiimMi8i-2J8fLzZ9ViFc54z_hlDyqRTXNORw&s=10",
    tag: "VEGAN FAVORITE",
  },
  {
    name: "Fossolia",
    description: "Fresh green beans and carrots cooked with onions, garlic, and Ethiopian spices.",
    price: "125",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOzTdkkN2KnKTt0TLwT5lnsnH3MlepghcFpp1rcdB9A&s=10",
    tag: "FRESH & FLAVORFUL",
  },
  {
    name: "Atkilt",
    description: "A comforting Ethiopian vegetable stew made with cabbage, potatoes, carrots, and spices.",
    price: "135",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0EHdv5n1qgClM6HSDeB-P790DXMIVWXiPek__brhlA&s=10",
    tag: "VEGAN FAVORITE",
  },
  {
    name: "Dirkosh Firfir",
    description: "Pieces of injera mixed with berbere sauce, clarified butter, and flavorful spices.",
    price: "150",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEbmjz6y9EaAzoAFEHLhK5oYv1nZ5xpcjRBs5APvzPA&s=10",
    tag: "TRADITIONAL FAVORITE",
  },
  {
    name: "Chechebsa",
    description: "Traditional Ethiopian torn flatbread prepared with spiced butter and honey.",
    price: "160",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7wuTBms56b2wgFFYrKdSYbqr6hyWzIHug2JLRTy4Yg&s=10",
    tag: "BREAKFAST FAVORITE",
  },
  {
    name: "Beyaynetu",
    description: "A colorful combination of Ethiopian vegetable and lentil dishes served together with injera.",
    price: "300",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBHFySQCJrAQc3UexgGJihY1CsKkHxWROb59I5TW6mQ&s=10",
    tag: "VEGAN COMBO",
  },
  {
    name: "Dulet",
    description: "Traditional Ethiopian dish made with finely chopped meat, liver, peppers, and spices.",
    price: "290",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbUVLWHKH3Z8TefYUUHKZ0_HJJ44n3mbVxKt03vJm2g&s=10",
    tag: "TRADITIONAL FAVORITE",
  },
  {
    name: "Awaze Tibs",
    description: "Grilled beef tibs served with a rich and spicy Ethiopian awaze sauce.",
    price: "310",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQCy0OigeyzrnNDFL0P6wt67KCZNyC3IxgfQCH31SkQ&s=10",
    tag: "SPICY SPECIAL",
  },
  {
    name: "Shekla Tibs",
    description: "Sizzling Ethiopian grilled meat served with peppers, onions, and traditional spices.",
    price: "340",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6R7sjXGK_M0CJSwLtifWvKfaxTqLX7p8fT5TU-qQmQ&s=10",
    tag: "CHEF'S SPECIAL",
  },
  {
    name: "Minchet Abish",
    description: "Spiced minced beef stew prepared with Ethiopian butter and aromatic berbere.",
    price: "260",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaWVhKMcOuESWuG4uxnJ9g7tAs2-nTlmxbvKQuCOV4w&s=10",
    tag: "TRADITIONAL FAVORITE",
  },
  {
    name: "Alicha Wot",
    description: "Mild Ethiopian stew prepared with meat, turmeric, onions, garlic, and ginger.",
    price: "230",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdwYx0iWNnhH8ejy39RIofuHtN_aprpNL9EZrYVwS7w&s=10",
    tag: "MILD & FLAVORFUL",
  },
  {
    name: "Siga Wot",
    description: "Rich Ethiopian beef stew cooked slowly with berbere, onions, garlic, and spices.",
    price: "300",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gGwvHqCrbbz8dY8Codk08tJRhgjTwibmWPnvIefTow&s=10",
    tag: "TRADITIONAL FAVORITE",
  },
  {
    name: "Gored Gored",
    description: "Traditional Ethiopian beef cubes seasoned with mitmita, butter, and aromatic spices.",
    price: "330",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfNwlHP6NwCSW47wQxsJUfj-JlelxGGlDLF8N8cjw_g&s=10",
    tag: "ETHIOPIAN SPECIAL",
  },
  {
    name: "Yebeg Wot",
    description: "Tender lamb cooked in a traditional Ethiopian berbere sauce with onions and spices.",
    price: "290",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMF4KggdHEClPMhsHydeRDBuKdH2vFZaOPiqKnfFOLw&s=10",
    tag: "LAMB SPECIAL",
  },
  {
    name: "Yebeg Tibs",
    description: "Tender lamb grilled with onions, peppers, rosemary, and Ethiopian spices.",
    price: "320",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LO5LEdk5y1BfdAk1rdqkPrgTKEOK9evHon0ecMZIfA&s=10",
    tag: "LAMB SPECIAL",
  },
];

const filters = [
  "ALL",
  ...new Set(dishes.map((dish) => dish.tag)),
];

export default function Home() {
  const [selectedTag, setSelectedTag] = useState("ALL");

  const filteredDishes =
    selectedTag === "ALL"
      ? dishes
      : dishes.filter((dish) => dish.tag === selectedTag);

  return (
    <>
      

      <main>
        {/* 2. HERO SECTION */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                THE TASTE OF ETHIOPIA
              </span>

              <h1>
                A taste of home,
                <br />
                made with <em>love.</em>
              </h1>

              <p className="hero-description">
                Discover the rich flavors of Ethiopian cuisine.
                From traditional favorites to comforting classics,
                your next unforgettable meal starts here.
              </p>

              <div className="hero-actions">
                <a href="/menu" className="btn">
                  Explore Our Menu →
                </a>

                <a href="#story" className="btn btn-outline">
                  Our Story
                </a>
              </div>
            </div>

            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
                alt="A beautifully prepared meal ready to be enjoyed"
              />

              <div className="hero-note">
                <strong>Made with tradition.</strong>
                <p>
                  Authentic flavors, carefully prepared,
                  and served with Ethiopian hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CUSTOMERS SHOULD CHOOSE US */}
        <section className="feature-strip">
          <div className="container feature-grid">
            <div className="feature">
              <strong>Authentic Flavors</strong>
              <p>Traditional Ethiopian recipes and spices.</p>
            </div>

            <div className="feature">
              <strong>Freshly Prepared</strong>
              <p>Meals prepared with care for every order.</p>
            </div>

            <div className="feature">
              <strong>Made for Sharing</strong>
              <p>Good food brings family and friends together.</p>
            </div>
          </div>
        </section>

        
{/* 4. FEATURED FOOD CARDS — ONLY 3 DISHES */}
<section className="section">
  <div className="container">
    <div className="section-heading">
      <div>
        <span className="eyebrow">FROM OUR KITCHEN</span>
        <h2 className="section-title">
          Discover our favorites
        </h2>
        <p className="section-description">
          Explore some beloved dishes inspired by the
          flavors and traditions of Ethiopia.
        </p>
      </div>

      <a href="/menu" className="btn btn-outline">
        View Full Menu →
      </a>
    </div>

    {/* FEATURED FOOD CARDS — 3 SELECTED DISHES */}
    <div className="dish-grid">
      {dishes.slice(0, 3).map((dish) => (
        <article className="dish-card" key={dish.name}>
          <img
            className="dish-image"
            src={dish.image}
            alt={dish.name}
            loading="lazy"
          />

          <div className="dish-content">
            <span className="eyebrow">{dish.tag}</span>

            <h3>{dish.name}</h3>

            <p>{dish.description}</p>

            <div className="dish-bottom">
              <span className="price">
                {dish.price} <small>ETB</small>
              </span>

              <a href="/menu" className="btn">
                Order Now
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


        {/* 5. OUR STORY */}
        <section className="section story-section" id="story">
          <div className="container story-grid">
            <img
              className="story-image"
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85"
              alt="Food prepared for a shared dining experience"
              loading="lazy"
            />

            <div>
              <span className="eyebrow">MORE THAN A MEAL</span>

              <h2 className="section-title">
                Bringing people together, one meal at a time.
              </h2>

              <p className="section-description">
                Ethiopian food is about more than what is on
                the plate. It is about hospitality, tradition,
                family, and sharing something special together.
              </p>

              <p className="section-description">
                At Addis Eats, we want every order to bring
                a little more of that experience to your table.
              </p>

              <a href="/menu" className="btn">
                Discover Our Menu →
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}
