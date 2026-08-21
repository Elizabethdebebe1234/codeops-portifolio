const customer = {
  name: "Elizabeth",
  city: "Addis Ababa",
  balance: 2500,
};

const entries = Object.entries(customer);

for (const [key, value] of entries) {
  console.log(key + ": " + value);
}
