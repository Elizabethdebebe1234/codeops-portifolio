const createLoyalty = require("./loyalty");

// Normal loyalty card
const card = createLoyalty();

card.earn(250); // 25 points
card.redeem(10); // 15 points

console.log("Normal balance:", card.balance());

// Holiday rule: double points
const holiday = createLoyalty((etb) => Math.floor(etb / 10) * 2);

holiday.earn(250); // 50 points

console.log("Holiday balance:", holiday.balance());
