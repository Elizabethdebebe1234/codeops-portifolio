const itemList = document.querySelector("#itemList");

// One listener on the parent
itemList.addEventListener("click", (event) => {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains("delete")) {
    // Find the item's <li>
    const item = event.target.parentElement;

    // Remove the item
    item.remove();
  }
});
