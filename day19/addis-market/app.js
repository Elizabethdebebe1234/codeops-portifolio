// Cache DOM elements
const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#list");
const totalEl = document.querySelector("#total");
const emptyMessage = document.querySelector("#empty-message");

// Add a new item to the list
function addRow(name, price) {
  const li = document.createElement("li");

  const itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  const itemName = document.createElement("span");
  itemName.classList.add("item-name");
  itemName.textContent = name;

  const itemPrice = document.createElement("span");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = `${price.toFixed(2)} ETB`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("del");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  itemInfo.append(itemName);
  itemInfo.append(itemPrice);

  li.append(itemInfo);
  li.append(deleteButton);

  list.append(li);

  updateEmptyMessage();
}

// Update the running total
function updateTotal() {
  let total = 0;

  const items = list.querySelectorAll("li");

  items.forEach((item) => {
    const priceText = item.querySelector(".item-price").textContent;

    const price = Number(priceText.replace(" ETB", ""));

    total += price;
  });

  totalEl.textContent = `${total.toFixed(2)} ETB`;
}

// Show or hide empty message
function updateEmptyMessage() {
  if (list.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || !price || price <= 0) {
    alert("Please enter both an item name and a valid price.");
    return;
  }

  addRow(name, price);

  form.reset();

  updateTotal();
});

// Event delegation
list.addEventListener("click", (e) => {
  // Delete item
  if (e.target.matches(".del")) {
    const row = e.target.closest("li");

    row.remove();

    updateTotal();
    updateEmptyMessage();

    return;
  }

  // Toggle bought state
  const row = e.target.closest("li");

  if (row) {
    row.classList.toggle("bought");
  }
});

// Initial state
updateEmptyMessage();
updateTotal();
