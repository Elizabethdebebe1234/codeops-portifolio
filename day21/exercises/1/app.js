const form = document.querySelector("#searchForm");
const input = document.querySelector("#countryInput");
const facts = document.querySelector("#facts");

// Create and display one fact
function renderFact(parent, label, value) {
  const div = document.createElement("div");
  div.className = "fact";

  const strong = document.createElement("strong");
  strong.textContent = label;

  const span = document.createElement("span");
  span.textContent = value;

  div.appendChild(strong);
  div.appendChild(span);

  parent.appendChild(div);
}

// Fetch and display country information
async function showCountry(countryName) {
  // Loading state
  facts.textContent = "Loading...";
  facts.className = "loading";

  try {
    // Fetch country data
    const res = await fetch(
      `https://countries.dev/name/${encodeURIComponent(countryName)}`,
    );

    // Check HTTP errors
    if (!res.ok) {
      throw new Error("Country not found");
    }

    // Convert response to JSON
    const countries = await res.json();

    // The API returns an array
    const country = countries[0];

    // Clear loading message
    facts.textContent = "";
    facts.className = "";

    // Create country card
    const card = document.createElement("div");
    card.className = "country-card";

    // Country name
    const title = document.createElement("h2");
    title.textContent = country.name;

    card.appendChild(title);

    // Country flag
    const flag = document.createElement("img");

    flag.src = country.flags.svg;
    flag.alt = `Flag of ${country.name}`;

    card.appendChild(flag);

    // Capital
    renderFact(card, "Capital", country.capital || "N/A");

    // Population
    renderFact(
      card,
      "Population",
      country.population ? country.population.toLocaleString() : "N/A",
    );

    // Region
    renderFact(card, "Region", country.region || "N/A");

    // Currencies
    let currencyText = "N/A";

    if (country.currencies && country.currencies.length > 0) {
      currencyText = country.currencies
        .map((currency) => {
          return `${currency.name} (${currency.symbol || currency.code})`;
        })
        .join(", ");
    }

    renderFact(card, "Currencies", currencyText);

    // Display the card
    facts.appendChild(card);
  } catch (error) {
    // Error state
    facts.textContent = error.message;
    facts.className = "error";
  }
}

// Handle search
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const countryName = input.value.trim();

  if (countryName === "") {
    facts.textContent = "Please enter a country name.";
    facts.className = "error";

    return;
  }

  showCountry(countryName);
});

// Load Ethiopia by default
showCountry("Ethiopia");

// Theme toggle
const themeBtn = document.querySelector("#themeBtn");

// Restore saved theme on load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "Light Mode";
}

// Save theme when changed
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "Dark Mode";
  }
});
