const form = document.querySelector("#signupForm");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");

const error = document.querySelector("#error");
const message = document.querySelector("#message");
const count = document.querySelector("#count");

// Ethiopian phone number regex
const PHONE = /^(?:\+251|0)9\d{8}$/;

// Load saved signups
function loadSignups() {
  try {
    const raw = localStorage.getItem("signups");

    if (!raw) {
      return [];
    }

    const signups = JSON.parse(raw);

    if (!Array.isArray(signups)) {
      return [];
    }

    return signups;
  } catch (error) {
    return [];
  }
}

// Show number of people signed up
function showCount() {
  const signups = loadSignups();

  count.textContent = `People signed up: ${signups.length}`;
}

// Handle form submission
form.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Read trimmed values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Clear old messages
  error.textContent = "";
  message.textContent = "";

  // Validate name
  if (name.length < 2) {
    error.textContent = "Name must be at least 2 characters.";
    return;
  }

  // Validate phone
  if (!PHONE.test(phone)) {
    error.textContent = "Enter a valid Ethiopian phone number.";
    return;
  }

  // Get existing signups
  const signups = loadSignups();

  // Create new signup
  const person = {
    name: name,
    phone: phone,
  };

  // Add new person
  signups.push(person);

  // Save array as JSON
  localStorage.setItem("signups", JSON.stringify(signups));

  // Success message
  message.textContent = "Signup successful!";

  // Clear the form
  form.reset();

  // Update count
  showCount();
});

// Show count when page loads
showCount();
