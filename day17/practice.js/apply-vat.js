// Higher-order function
function applyToAll(list, fn) {
  const results = [];

  for (const item of list) {
    results.push(fn(item));
  }

  return results;
}

// Function to add 15% VAT
const addVat = (price) => price * 1.15;

// Array of prices
const prices = [100, 200, 300];

// Apply VAT to every price
const pricesWithVat = applyToAll(prices, addVat);

console.log(pricesWithVat);
