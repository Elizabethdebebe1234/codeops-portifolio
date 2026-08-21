const form = document.querySelector("#signupForm");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");

const error = document.querySelector("#error");

// Ethiopian phone number regex
const PHONE = /^(?:\+251|0)9\d{8}$/;

// Handle form submission
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Read and trim the values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Clear previous error
  error.textContent = "";

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

  // Everything is valid
  error.textContent = "Signup information is valid!";
});
