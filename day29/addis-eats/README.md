# Addis Eats 🍽️

A simple Ethiopian food menu built with React. This project demonstrates React props, PropTypes validation, conditional rendering, component composition, category filtering, empty states, and stable list keys.

## Features

- 🍛 Ethiopian food menu
- 🧩 Reusable `Dish` component
- ✅ PropTypes validation
- 💰 Default currency set to ETB
- 🌶️ Conditional "Spicy" badge
- 🃏 Reusable `Card` wrapper component
- 🔍 Category filtering
- 📭 Empty state when no dishes match
- 🔑 Stable React keys using each dish's `id`
- 🎨 Simple CSS styling

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- PropTypes
- Vite

## Menu Categories

- Wot
- Vegetarian
- Tibs

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to view the application.

## Project Structure

```text
src/
├── App.jsx
├── Card.jsx
├── Dish.jsx
├── index.css
└── main.jsx
```

## React Concepts Demonstrated

### Props

The `Dish` component receives:

- `name`
- `price`
- `spicy`
- `currency`

### PropTypes

`name` and `price` are required, while `spicy` is optional.

### Conditional Rendering

The spicy badge is rendered only when `spicy` is a boolean and its value is `true`.

### Filtering

The menu can be filtered by category using React state.

### Empty State

When no dishes match the selected category, the application displays:

> No dishes found in this category.

### Stable Keys

Each dish is rendered using its unique `id` as the React key.

## Author

Elizabeth Debebe

## Project Status

Completed as part of the React learning milestone on props, validation, and rendering patterns.
