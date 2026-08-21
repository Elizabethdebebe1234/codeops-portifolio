console.log("SUMMARY FILE IS RUNNING");
const { withVat, format, total } = require("./pricing");
const orders = require("./orders");

// Calculate the total for every order
// Spread keeps the original order information
// and adds a new total property.
const ordersWithTotal = orders.map((order) => ({
  ...order,
  total: withVat(total(order.items)),
}));

// Keep only orders whose total is above 500 ETB
const over500 = ordersWithTotal.filter((order) => order.total > 500);

// Calculate the grand total
const grandTotal = ordersWithTotal.reduce((sum, order) => sum + order.total, 0);

// Print orders over 500 ETB
console.log("Orders over 500 ETB:");

over500.forEach((order) => {
  console.log(`Order ${order.id}: ${format(order.total)}`);
});

// Print grand total
console.log(`Grand total: ${format(grandTotal)}`);
