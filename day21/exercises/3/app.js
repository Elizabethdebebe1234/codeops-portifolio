const form = document.querySelector("#signupForm");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");

const error = document.querySelector("#error");
const message = document.querySelector("#message");

// Ethiopian phone number regex
const PHONE = /^(?:\+251|0)9\d{8}$/;

form.addEventListener("submit", function (event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Read and trim the input values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Clear previous messages
  error.textContent = "";
  message.textContent = "";

  // Validate name
  if (name.length < 2) {
    error.textContent = "Enter your full name.";
    return;
  }

  // Validate phone
  if (!PHONE.test(phone)) {
    error.textContent = "Enter a valid Ethiopian phone number.";
    return;
  }

  // Success
  message.textContent = "Signup successful!";

  // Clear the form
  form.reset();
});
