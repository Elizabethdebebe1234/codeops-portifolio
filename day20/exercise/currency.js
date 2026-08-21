async function getUsdToEtbRate() {
  const url = "https://api.frankfurter.app/latest?from=USD&to=ETB";

  const res = await fetch(url);

  // Check if the request was successful
  if (!res.ok) {
    throw new Error("Failed to fetch exchange rate");
  }

  const data = await res.json();

  // Return the USD → ETB rate
  return data.rates.ETB;
}

// Call the function
getUsdToEtbRate()
  .then((rate) => {
    console.log(`1 USD = ${rate} ETB`);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
