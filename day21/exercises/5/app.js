const form = document.querySelector("#signupForm");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");

const error = document.querySelector("#error");

// Ethiopian phone regex
const PHONE = /^(?:\+251|0)9\d{8}$/;

form.addEventListener("submit", function (event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Read and trim values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Clear previous error
  error.textContent = "";

  // First problem: name
  if (name.length < 2) {
    error.textContent = "Enter your full name.";
    return;
  }

  // Second problem: phone
  if (!PHONE.test(phone)) {
    error.textContent = "Enter a valid Ethiopian phone number.";
    return;
  }

  // Everything is valid
  error.textContent = "Signup information is valid!";
});
