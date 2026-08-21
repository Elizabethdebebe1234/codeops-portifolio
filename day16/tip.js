const bill = Number(process.argv[2]);
const partySize = Number(process.argv[3]);
const paymentMethod = process.argv[4];

let tipRate;

if (bill > 300) {
  tipRate = 0.1;
} else {
  tipRate = 0.05;
}

const tip = bill * tipRate;
let serviceFee;

switch (paymentMethod) {
  case "TeleBirr":
    serviceFee = 5;
    break;

  case "CBE Birr":
    serviceFee = 3;
    break;

  default:
    serviceFee = 0;
}

const total = bill + tip + serviceFee;
const perPerson = total / partySize;

console.log(`Bill: ${bill.toFixed(2)} ETB`);
console.log(`Tip: ${(tipRate * 100).toFixed(0)}% (${tip.toFixed(2)} ETB)`);
console.log(`Service fee: ${serviceFee.toFixed(2)} ETB`);
console.log(`Total: ${total.toFixed(2)} ETB`);
console.log(`Per person: ${perPerson.toFixed(2)} ETB`);
