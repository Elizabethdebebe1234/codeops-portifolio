const {
  subtotal,
  discountBy,
  withVat,
  makeReceiptMaker,
} = require("./pricing");

// Menu prices
const doroWot = 350;
const kitfo = 300;
const tibs = 280;
const shiro = 180;

// Create 10% member discount
const memberDiscount = discountBy(0.1);

// Create receipt maker
const makeReceipt = makeReceiptMaker();

// Order 1: Kitfo + Tibs + Doro Wot
let amount1 = subtotal(kitfo, tibs, doroWot);
amount1 = memberDiscount(amount1);
amount1 = withVat(amount1);

console.log(makeReceipt(amount1));

// Order 2: Doro Wot + Shiro
let amount2 = subtotal(doroWot, shiro);
amount2 = memberDiscount(amount2);
amount2 = withVat(amount2);

console.log(makeReceipt(amount2));

// Order 3: Kitfo + Tibs + Shiro
let amount3 = subtotal(kitfo, tibs, shiro);
amount3 = memberDiscount(amount3);
amount3 = withVat(amount3);

console.log(makeReceipt(amount3));
