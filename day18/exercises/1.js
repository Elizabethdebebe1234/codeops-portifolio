const prices = [500, 800, 1200, 300, 1500];

// Add 15% VAT
const pricesWithVAT = prices.map((price) => {
  return price * 1.15;
});

// Keep prices under 1000
const under1000 = pricesWithVAT.filter((price) => {
  return price < 1000;
});

// Calculate the grand total
const grandTotal = under1000.reduce((total, price) => {
  return total + price;
}, 0);

console.log("Prices with VAT:", pricesWithVAT);
console.log("Prices under 1000:", under1000);
console.log("Grand total:", grandTotal, "ETB");
