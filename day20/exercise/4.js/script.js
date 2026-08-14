async function loadProducts() {
  try {
    // Step 1: Fetch the list of products
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch product list");
    }

    const data = await response.json();

    // Get the first two products
    const firstTwoProducts = data.products.slice(0, 2);

    // Step 2: Fetch details for both products IN PARALLEL
    const details = await Promise.all(
      firstTwoProducts.map(async (product) => {
        const response = await fetch(
          `https://dummyjson.com/products/${product.id}`,
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product ${product.id}`);
        }

        return await response.json();
      }),
    );

    // Step 3: Render the details
    const productList = document.getElementById("productList");

    details.forEach((product) => {
      const li = document.createElement("li");

      li.innerHTML = `
                <strong>${product.title}</strong><br>
                Price: $${product.price}<br>
                Category: ${product.category}<br>
                Brand: ${product.brand || "No brand"}
            `;

      productList.appendChild(li);
    });
  } catch (error) {
    console.log("Error:", error.message);

    document.getElementById("productList").innerHTML =
      "<li>Sorry, something went wrong.</li>";
  }
}

// Run the function
loadProducts();
