// ===============================
// Bole Music Shop - app.js
// ===============================

// ---------- STATE ----------

const state = {
  products: [], // loaded from products.json
  cart: [], // { id, name, price, qty }
  search: "", // current search text
  category: "all", // current category
};

// ---------- DOM ELEMENTS ----------

const productsEl = document.querySelector("#products-container");
const searchEl = document.querySelector("#search");
const categoryEl = document.querySelector("#category");

const cartEl = document.querySelector("#cart-items");
const cartTotalEl = document.querySelector("#cart-total");
const checkoutButton = document.querySelector("#checkout-button");

// ---------- LOAD PRODUCTS ----------

async function loadProducts() {
  productsEl.textContent = "Loading products...";

  try {
    const res = await fetch("data/products.json");

    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    state.products = await res.json();

    render();
  } catch (error) {
    productsEl.textContent = "Could not load products.";

    console.error("Error loading products:", error);
  }
}

// ---------- RENDER PRODUCTS ----------

function render() {
  const term = state.search.toLowerCase();

  const shown = state.products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(term);

    const matchesCategory =
      state.category === "all" ||
      product.category?.toLowerCase() === state.category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Clear previous products

  productsEl.innerHTML = "";

  // Empty result

  if (shown.length === 0) {
    productsEl.innerHTML = `
            <p class="no-results">No products found.</p>
        `;

    renderCart();

    return;
  }

  // Create product cards

  shown.forEach((product) => {
    const card = document.createElement("article");

    card.className = "product-card";

    card.dataset.id = product.id;

    card.innerHTML = `
    <img
        src="${product.image}"
        alt="${product.name}"
        class="product-image"
    >

    <h3 class="product-name">
        ${product.name}
    </h3>

    <p>
        ${product.description || ""}
    </p>

    <p class="product-price">
        ${Number(product.price).toLocaleString()} ETB
    </p>

    <button class="add-to-cart" type="button">
        Add to Cart
    </button>
`;
    productsEl.appendChild(card);
  });

  // Update cart too

  renderCart();
}

// ---------- SEARCH ----------

searchEl.addEventListener("input", (e) => {
  state.search = e.target.value;

  render();
});

// ---------- CATEGORY FILTER ----------

categoryEl.addEventListener("change", (e) => {
  state.category = e.target.value;

  render();
});

// ---------- ADD TO CART ----------

productsEl.addEventListener("click", (e) => {
  if (!e.target.matches(".add-to-cart")) {
    return;
  }

  // Get product ID

  const card = e.target.closest(".product-card");

  const id = Number(card.dataset.id);

  // Find product

  const product = state.products.find((product) => Number(product.id) === id);

  if (!product) {
    return;
  }

  // Check if already in cart

  const line = state.cart.find((item) => Number(item.id) === id);

  if (line) {
    // Increase quantity

    line.qty++;
  } else {
    // Add new product

    state.cart.push({
      ...product,
      qty: 1,
    });
  }

  // Save and update screen

  save();

  render();
});

// ---------- RENDER CART ----------

function renderCart() {
  cartEl.innerHTML = "";

  // Empty cart

  if (state.cart.length === 0) {
    cartEl.innerHTML = `
            <p id="empty-cart">
                Your cart is empty.
            </p>
        `;

    cartTotalEl.textContent = "0 ETB";

    checkoutButton.disabled = true;

    return;
  }

  // Create cart items

  state.cart.forEach((item) => {
    const li = document.createElement("li");

    li.dataset.id = item.id;

    li.innerHTML = `
            <div class="cart-item">

                <strong>
                    ${item.name}
                </strong>

                <span>
                    ${item.qty} ×
                    ${Number(item.price).toLocaleString()} ETB
                </span>

                <button
                    class="rm"
                    type="button"
                >
                    Remove
                </button>

            </div>
        `;

    cartEl.appendChild(li);
  });

  // Show total

  cartTotalEl.textContent = `${cartTotal().toLocaleString()} ETB`;

  // Enable checkout

  checkoutButton.disabled = false;
}

// ---------- REMOVE FROM CART ----------

cartEl.addEventListener("click", (e) => {
  if (!e.target.matches(".rm")) {
    return;
  }

  // Get product ID

  const li = e.target.closest("li");

  const id = Number(li.dataset.id);

  // Remove item

  state.cart = state.cart.filter((item) => Number(item.id) !== id);

  // Save and update

  save();

  render();
});

// ---------- CART TOTAL ----------

function cartTotal() {
  return state.cart.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0,
  );
}

// ---------- SAVE CART ----------

function save() {
  localStorage.setItem("boleMusicCart", JSON.stringify(state.cart));
}

// ---------- LOAD CART ----------

function load() {
  const saved = localStorage.getItem("boleMusicCart");

  if (saved) {
    try {
      state.cart = JSON.parse(saved);
    } catch (error) {
      console.error("Could not load saved cart:", error);

      state.cart = [];
    }
  }
}

// ---------- CHECKOUT ----------

checkoutButton.addEventListener("click", () => {
  if (state.cart.length === 0) {
    return;
  }

  const total = cartTotal();

  alert(
    `Order total: ${total.toLocaleString()} ETB\n\nThank you for shopping at Bole Music Shop!`,
  );
});

// ---------- INITIALIZE APP ----------

async function init() {
  // Restore cart first

  load();

  // Then load products

  await loadProducts();
}

// ---------- START APP ----------

init();
