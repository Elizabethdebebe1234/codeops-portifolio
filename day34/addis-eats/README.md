# 🍽️ Addis Eats — React Food Ordering App

A modern Ethiopian food ordering web application built with **React**. Addis Eats allows users to browse Ethiopian dishes, filter meals, view individual dish details, manage their cart, create an account, sign in, and complete a checkout order.

---


## 📌 Project Overview

Addis Eats is a React-based food ordering application designed to demonstrate modern React development concepts including:

* Component-based architecture
* React Router
* Dynamic routes
* API/data fetching
* Custom hooks
* Zustand state management
* Context API
* Form validation
* Protected routes
* Local storage persistence
* Responsive user interface
* Accessibility features

---

## ✨ Features

### 🏠 Home Page

* Welcome section
* Featured Ethiopian dishes
* Navigation to the menu
* Clean and responsive layout

### 🍛 Menu

* Displays dishes fetched from `dishes.json`
* Category filtering
* Loading state
* Error handling
* Dish cards with images, names, prices, and categories

### 🔎 Dish Details

Each dish has its own dynamic page:

```text
/menu/:id
```

Users can view:

* Dish image
* Dish name
* Price
* Description
* Category
* Additional dish information
* Add to Cart option

### 🛒 Shopping Cart

The cart is managed using **Zustand**.

Users can:

* Add dishes
* Increase quantity
* Decrease quantity
* Remove individual dishes
* Clear the cart
* View the total price

Cart data is persisted using Zustand's `persist` middleware.

### 🔐 Authentication

Users can:

* Create an account
* Sign in
* Sign out
* Remain signed in using local storage

The checkout page is protected so users must sign in before placing an order.

### 💳 Checkout

The checkout form includes:

* Full name
* TeleBirr phone number
* Delivery area
* Optional delivery notes

The form includes:

* Pure `validate(form)` validation function
* Validation errors
* Blur/touched field handling
* `aria-invalid`
* `aria-describedby`
* `role="alert"`
* Submitting state
* Disabled submit button during submission
* ETB total displayed in the button
* First invalid field focus
* Cart review during checkout
* Quantity controls
* Remove item controls

The order submission is simulated for demonstration purposes.

> **Note:** This project does not connect to a real TeleBirr payment API. The checkout demonstrates the frontend order flow only.

### ❌ 404 Page

A custom 404 page is displayed when users visit an unknown route.

---

## 🧠 State Management

### Zustand

Zustand manages the shopping cart state.

The cart store handles:

```text
Add Item
Increase Quantity
Decrease Quantity
Remove Item
Clear Cart
```

Cart state is persisted in the browser using Zustand's `persist` middleware.

### Context API

The **AuthContext** manages authentication state including:

* Current user
* Registration
* Login
* Logout

---

## 🌐 Data Fetching

Dish information is loaded from:

```text
/public/dishes.json
```

A custom `useFetch` hook is used to handle:

* Fetching data
* Loading state
* Error state
* Returned data

---

## 🧭 Routing

React Router is used for navigation.

### Available Routes

| Route             | Description          |
| ----------------- | -------------------- |
| `/`               | Home page            |
| `/menu`           | All dishes           |
| `/menu/:id`       | Dynamic dish details |
| `/signin`         | Sign in              |
| `/create-account` | Create account       |
| `/checkout`       | Protected checkout   |
| `*`               | 404 Not Found        |

---

## 🔒 Protected Checkout

The checkout route is protected using:

```text
RequireAuth
```

If a user tries to access checkout without signing in, they are redirected to the Sign In page.

After authentication, they can continue to checkout.

---

## 🛠️ Technologies Used

* **React**
* **Vite**
* **React Router DOM**
* **Zustand**
* **JavaScript**
* **HTML**
* **CSS**
* **Local Storage**
* **JSON**

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Card.jsx
│   ├── CategoryBar.jsx
│   ├── Cart.jsx
│   ├── CartBadge.jsx
│   ├── CartTotal.jsx
│   ├── Dish.jsx
│   ├── DishList.jsx
│   ├── Header.jsx
│   └── Layout.jsx
│
├── hooks/
│   └── useFetch.js
│
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── DishPage.jsx
│   ├── SignIn.jsx
│   ├── CreateAccount.jsx
│   ├── NotFound.jsx
│   └── OrderForm.jsx
│
├── store/
│   └── cartStore.js
│
├── utils/
│   └── validate.js
│
├── AuthContext.jsx
├── RequireAuth.jsx
├── App.jsx
├── main.jsx
└── index.css

public/
└── dishes.json
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Elizabethdebebe1234/ibt-projects-and-classes.git
```

Navigate to the project:

```bash
cd ibt-projects-and-classes/day34/addis-eats
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local Vite development URL.

---

## 🧪 Testing the Application

To test the checkout:

1. Open the Menu.
2. Add one or more dishes to the cart.
3. Open the Cart.
4. Continue to Checkout.
5. Sign in or create an account.
6. Review the cart.
7. Test the `+` and `−` quantity controls.
8. Test removing an item.
9. Enter valid delivery information.
10. Submit the order.
11. Confirm the successful order message.

---

## ♿ Accessibility

The checkout form includes accessibility features such as:

* Proper `<label>` elements
* `aria-invalid`
* `aria-describedby`
* `role="alert"`
* Keyboard-focus management
* Focus on the first invalid field

---

## 📚 Learning Outcomes

Through this project, I practiced:

* Building reusable React components
* Managing application state with Zustand
* Using Context API
* Creating protected routes
* Working with dynamic routes
* Fetching local JSON data
* Creating custom hooks
* Building validated forms
* Managing asynchronous submission states
* Implementing accessible forms
* Persisting state with local storage
* Building responsive interfaces

---

## 👩‍💻 Author

**Elizabeth Debebe**

GitHub:
https://github.com/Elizabethdebebe1234

---

## 📄 License

This project was created for educational and learning purposes.
