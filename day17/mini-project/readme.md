# TeleBirr Loyalty Points Module

This project is a loyalty-points module for a TeleBirr shop.

## Features

- Earn points from money spent.
- Redeem points.
- Check the current balance.
- Use different earn rules.
- Keep the points balance private using a closure.

## How the balance stays private

The `points` variable is declared inside `createLoyalty()`.

Code outside the function cannot directly access `points`.

Only these operations can interact with it:

- `earn()`
- `redeem()`
- `balance()`

This protects the balance from accidental changes.

## Earn Rule

The default rule gives 1 point for every 10 ETB.

A different rule can be passed into `createLoyalty()`.

For example, the holiday rule gives double points.
