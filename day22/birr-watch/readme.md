# Birr Watch
https://elizabethdebebe1234.github.io/codeops-portifolio/ copy this URL to see the website 

Birr Watch is a simple currency conversion web app that uses live exchange rates for the Ethiopian Birr (ETB).

Users can:

- View live ETB exchange rates
- Select a currency
- Convert an amount from ETB
- Add currencies to a watchlist
- Remove currencies from the watchlist
- Keep their watchlist after refreshing the page using localStorage

## API Used

This project uses the ExchangeRate-API public endpoint:

https://open.er-api.com/v6/latest/ETB

The API provides the latest exchange rates with ETB as the base currency.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- async/await
- localStorage
- ExchangeRate-API

## How to Run

1. Download or clone this project.
2. Open the project folder.
3. Open `index.html` in a browser.

You can also use VS Code with Live Server to run the project locally.

## How It Works

When the application starts, it:

1. Loads saved watchlist data from localStorage.
2. Fetches live ETB exchange rates from the API.
3. Displays the available currencies in the dropdown.
4. Allows the user to enter an ETB amount and convert it.
5. Allows currencies to be added to the watchlist.
6. Prevents duplicate currencies from being added.
7. Allows currencies to be removed from the watchlist.
8. Saves the watchlist to localStorage so it remains after a page reload.

## Project Files

- `index.html` - Page structure and HTML elements
- `styles.css` - Layout and styling
- `app.js` - API fetching, conversion, watchlist, and localStorage logic
- `README.md` - Project documentation
