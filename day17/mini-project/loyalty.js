// Create a loyalty points module
function createLoyalty(earnRule = (etb) => Math.floor(etb / 10)) {
  let points = 0; // Private state

  return {
    // Earn points based on the earn rule
    earn(etb) {
      points += earnRule(etb);
    },

    // Redeem points, but never go below zero
    redeem(amount) {
      points = Math.max(0, points - amount);
    },

    // Getter for the current balance
    balance() {
      return points;
    },
  };
}

module.exports = createLoyalty;
