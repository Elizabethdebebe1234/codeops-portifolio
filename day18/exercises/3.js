const customer = {
  name: "Elizabeth",
  city: "Addis Ababa",
  balance: 2500,
};

// Destructure name and city
const { name, city } = customer;

console.log("Name:", name);
console.log("City:", city);

// Function with parameter destructuring
function greet({ name }) {
  console.log("Hello, " + name + "!");
}

greet(customer);
