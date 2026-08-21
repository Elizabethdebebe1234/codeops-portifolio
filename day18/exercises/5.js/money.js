const VAT = 0.15;

function addVat(price) {
  return price + price * VAT;
}

export { addVat, VAT };
