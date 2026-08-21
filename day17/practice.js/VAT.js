// Normal function with a default parameter
function vat(amount, rate = 0.15) {
  return amount * (1 + rate);
}

// Arrow function with an implicit return
const vatArrow = (amount, rate = 0.15) => amount * (1 + rate);

// Test the normal function
console.log(vat(1000));

// Test the arrow function
console.log(vatArrow(1000));
