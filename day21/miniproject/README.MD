# Validated Persistent Signup Form

## About

This project is a signup form that validates a user's name and Ethiopian phone number.

The form checks that the name contains at least two characters and that the phone number matches the Ethiopian phone number format.

Valid signup entries are saved in the browser's localStorage as JSON and restored when the page is opened again.

## Features

- Name validation
- Ethiopian phone number validation
- Clear error messages
- Form submission using preventDefault()
- Trimmed input values
- Save signup data to localStorage
- JSON.stringify() for saving data
- JSON.parse() for loading data
- Handles missing and corrupt localStorage data
- Displays the number of people who have signed up

## Phone Format

The phone number is validated using:

`/^(?:\+251|0)9\d{8}$/`

Examples:

- 0912345678
- +251912345678

## How to Run

Open `index.html` in a web browser or use VS Code Live Server.

## Technologies

- HTML
- CSS
- JavaScript
- localStorage
- JSON
- Regular Expressions
