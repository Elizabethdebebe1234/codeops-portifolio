const message = document.getElementById("message");

// --------------------------------------------------
// 1. Deliberately wrong URL
// --------------------------------------------------

async function testWrongUrl() {
  try {
    message.textContent = "Testing wrong URL...";

    const res = await fetch("https://this-url-does-not-exist-12345.com");

    // Check HTTP status
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("Catch block ran!");
    console.log(error.message);

    message.textContent = "❌ Wrong URL: catch block ran!";
  }
}

// --------------------------------------------------
// 2. Real URL that returns 404
// --------------------------------------------------

async function test404() {
  try {
    message.textContent = "Testing 404 URL...";

    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/999999999",
    );

    console.log("Fetch completed.");
    console.log("Status:", res.status);
    console.log("res.ok:", res.ok);

    // fetch() does NOT throw automatically for HTTP 404
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("Catch block ran!");
    console.log(error.message);

    message.textContent =
      "❌ 404 error: catch block ran because we checked res.ok!";
  }
}

// --------------------------------------------------
// Button events
// --------------------------------------------------

document.getElementById("testWrongUrl").addEventListener("click", testWrongUrl);

document.getElementById("test404").addEventListener("click", test404);
