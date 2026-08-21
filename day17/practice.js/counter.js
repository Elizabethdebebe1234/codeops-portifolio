function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

// count is private because it is inside makeCounter.
// Code outside cannot directly access or change count.
// Only the returned function can access it through the closure.

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
