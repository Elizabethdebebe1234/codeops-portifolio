// Factory function for creating discount functions
function discountBy(rate) {
  return (price) => price * (1 - rate);
}

// Create a 10% member discount
const memberPrice = discountBy(0.1);

// Create a 30% sale discount
const salePrice = discountBy(0.3);

// Apply both discounts to 1000 ETB
console.log("Member price:", memberPrice(1000), "ETB");
console.log("Sale price:", salePrice(1000), "ETB");
