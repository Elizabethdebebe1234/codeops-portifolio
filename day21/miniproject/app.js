const form = document.querySelector("#signupForm");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");

const error = document.querySelector("#error");
const success = document.querySelector("#success");
const count = document.querySelector("#count");

// Ethiopian phone number regex
const PHONE = /^(?:\+251|0)9\d{8}$/;

// Load saved signups
function loadSignups() {
  try {
    const raw = localStorage.getItem("signups");

    // Nothing saved
    if (!raw) {
      return [];
    }

    const signups = JSON.parse(raw);

    // Make sure the stored data is an array
    if (!Array.isArray(signups)) {
      return [];
    }

    return signups;
  } catch (error) {
    // Corrupt JSON
    return [];
  }
}

// Save signups
function saveSignups(signups) {
  localStorage.setItem("signups", JSON.stringify(signups));
}

// Validate the form
function validate(name, phone) {
  if (name.length < 2) {
    return "Enter your full name.";
  }

  if (!PHONE.test(phone)) {
    return "Enter a valid phone.";
  }

  return "";
}

// Show number of people signed up
function showCount() {
  const signups = loadSignups();

  count.textContent = `People signed up: ${signups.length}`;
}

// Handle form submission
form.addEventListener("submit", function (event) {
  // Prevent the browser from refreshing
  event.preventDefault();

  // Read and trim values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Clear old messages
  error.textContent = "";
  success.textContent = "";

  // Validate
  const errorMessage = validate(name, phone);

  // Show first problem found
  if (errorMessage) {
    error.textContent = errorMessage;
    return;
  }

  // Load existing signups
  const signups = loadSignups();

  // Create new signup
  const newSignup = {
    name: name,
    phone: phone,
  };

  // Add the new person
  signups.push(newSignup);

  // Save as JSON
  saveSignups(signups);

  // Show success message
  success.textContent = "Signup successful!";

  // Clear the form
  form.reset();

  // Update the number of people
  showCount();
});

// Restore and show count when page loads
showCount();
