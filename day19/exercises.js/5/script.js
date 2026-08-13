const form = document.querySelector("#addForm");
const input = document.querySelector("#itemInput");
const list = document.querySelector("#itemList");

form.addEventListener("submit", (event) => {
  // Stop the page from refreshing
  event.preventDefault();

  // Get what the user typed
  const item = input.value;

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = item;

  // Add it to the list
  list.append(li);

  // Clear the input
  input.value = "";
});
