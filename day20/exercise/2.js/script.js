async function loadProducts() {
  try {
    // Step 1: Fetch data
    const response = await fetch("https://dummyjson.com/products");

    // Check if request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    // Step 2: Convert response to JSON
    const data = await response.json();

    // Step 3: Render the products
    const productList = document.getElementById("productList");

    data.products.forEach((product) => {
      const li = document.createElement("li");

      li.textContent = product.title;

      productList.appendChild(li);
    });
  } catch (error) {
    // Handle any error
    console.log("Error:", error.message);

    const productList = document.getElementById("productList");
    productList.innerHTML = "<li>Sorry, something went wrong.</li>";
  }
}

// Call the async function
loadProducts();
