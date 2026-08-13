const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

// Button listener
btn.addEventListener("click", (event) => {
  console.log("Button clicked");
  console.log(event.target);
});

// Div listener
box.addEventListener("click", (event) => {
  console.log("Div clicked");
  console.log(event.target);
});
