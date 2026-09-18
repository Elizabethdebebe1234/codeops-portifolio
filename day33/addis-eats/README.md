# 🍽️ Addis Eats

Addis Eats is a React-based Ethiopian food ordering web application.  
It allows customers to browse Ethiopian dishes, view dish details, add items to a shopping cart, create an account, sign in, and prepare an order for delivery.


---

## 📌 Project Features

### 🏠 Home Page
- Welcome section for Addis Eats
- Introduction to the restaurant
- Navigation to the main pages
- Easy access to the menu and checkout

### 🍽️ Menu
- Displays 30 Ethiopian food products
- Shows:
  - Dish name
  - Price
  - Category
  - Spicy indicator
  - Food image
  - Description
- Products are loaded from a JSON data source

### 🔎 Menu Filtering
Customers can filter dishes by category:

- All
- Main
- Vegan
- Grill

### 🛒 Shopping Cart
Customers can:

- Add dishes to the cart
- View the number of items in the cart
- Remove individual dishes
- Clear the entire cart
- View the total price
- Keep cart data saved using Zustand persistence

### 📄 Dynamic Dish Details
Each dish has its own dynamic page.

Example:

`/menu/1`

The page displays:

- Dish name
- Price
- Category
- Spicy information
- Dish details

React Router dynamic routes are used to display the correct dish based on its ID.

### 👤 Authentication

Addis Eats includes a frontend authentication system.

Customers can:

- Create a new account
- Register using an email or phone number
- Create a password
- Confirm their password
- Sign in using email or phone number
- Sign out
- Remain signed in after refreshing the page

Authentication information is persisted locally for this project demonstration.

> Note: This is a frontend demonstration. A production application should use a secure backend authentication system and should never store plaintext passwords in localStorage.

### 🔐 Protected Checkout

The checkout page is protected using a `RequireAuth` component.

If a customer tries to access checkout without signing in:

`/checkout`

they are redirected to:

`/signin`

After successful authentication, they can continue to checkout.

### 💳 Delivery Information

The checkout page includes:

- Customer name
- Phone number
- Delivery area
- Ethiopian phone number validation
- TeleBirr payment button

Supported delivery areas include:

- Bole
- Kazanchis
- Megenagna

---

## 🧠 State Management

The project demonstrates multiple React state-management concepts.

### Zustand

Zustand is used to manage the shopping cart.

The cart store handles:

- Cart items
- Adding items
- Removing items
- Clearing the cart
- Persisting cart information

The store is located in:

`src/store/cartStore.js`

### React Context API

Context API is used for authentication.

The authentication context provides:

- Current user
- Register
- Login
- Logout

The main authentication file is:

`src/AuthContext.jsx`

### React useState

`useState` is used for local component state such as:

- Form inputs
- Authentication forms
- Password visibility
- Loading states
- Error messages
- Search/filter state

---

## 🌐 API / Data Fetching

The project uses a custom `useFetch` hook.

The hook handles:

- Fetching data
- Loading state
- Error state
- AbortController
- Updating data when the URL changes

The hook is located at:

`src/hooks/useFetch.js`

Menu data is loaded from:

`public/dishes.json`

---

## 🧭 Routing

React Router is used for navigation.

Main routes include:

```text
/
 /menu
 /menu/:id
 /checkout
 /signin
 *
