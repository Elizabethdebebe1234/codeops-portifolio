# Addis Eats — Next.js

A Next.js version of the Addis Eats food ordering application.

## Routes

| Route        | File                    |
| ------------ | ----------------------- |
| `/`          | `app/page.js`           |
| `/menu`      | `app/menu/page.js`      |
| `/menu/[id]` | `app/menu/[id]/page.js` |
| `/cart`      | `app/cart/page.js`      |
| `/checkout`  | `app/checkout/page.js`  |

## Special Files

| File                    | Purpose                  |
| ----------------------- | ------------------------ |
| `app/menu/loading.js`   | Menu loading UI          |
| `app/menu/error.js`     | Menu error UI            |
| `app/not-found.js`      | Not-found UI             |
| `app/menu/DishList.jsx` | Colocated menu component |
