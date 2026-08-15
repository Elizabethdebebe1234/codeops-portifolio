// Save an array to localStorage
function save(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

// Load an array from localStorage
function load() {
  try {
    const raw = localStorage.getItem("items");

    // Nothing saved
    if (!raw) {
      return [];
    }

    // Convert JSON string back to array
    const items = JSON.parse(raw);

    // Make sure the saved data is actually an array
    if (!Array.isArray(items)) {
      return [];
    }

    return items;
  } catch (error) {
    // Corrupt JSON
    return [];
  }
}

// Example array
const myItems = ["Apple", "Banana", "Orange"];

// Save button
document.querySelector("#saveBtn").addEventListener("click", () => {
  save(myItems);

  document.querySelector("#message").textContent = "Items saved successfully!";
});

// Load button
document.querySelector("#loadBtn").addEventListener("click", () => {
  const items = load();

  document.querySelector("#message").textContent =
    "Loaded: " + items.join(", ");
});
