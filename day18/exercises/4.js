const customer = {
  name: "Elizabeth",
  city: "Addis Ababa",
  balance: 2500,
};

// Create an updated copy without changing the original
const updatedCustomer = {
  ...customer,
  city: "Adama",
  phone: "+251900000000",
};

console.log("Original customer:");
console.log(customer);

console.log("Updated customer:");
console.log(updatedCustomer);
