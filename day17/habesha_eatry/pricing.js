// Calculate the subtotal of all prices
function subtotal(...prices) {
  return prices.reduce((total, price) => {
    return total + price;
  }, 0);
}

// Create a discount function
function discountBy(rate) {
  return (amount) => {
    return amount * (1 - rate);
  };
}

// Add VAT
function withVat(amount, rate = 0.15) {
  return amount * (1 + rate);
}

// Format amount as ETB
function toETB(amount) {
  return `${amount.toFixed(2)} ETB`;
}

// Create receipts with a private running order number
function makeReceiptMaker() {
  let orderNumber = 0;

  return (amount) => {
    orderNumber++;

    return `#${orderNumber}: ${toETB(amount)}`;
  };
}

// Export the functions
module.exports = {
  subtotal,
  discountBy,
  withVat,
  toETB,
  makeReceiptMaker,
};
