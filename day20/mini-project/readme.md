# 🌍 Country Facts Page

A simple single-page web application that allows users to search for a country and view important facts about it.

## Features

- Search for a country by name
- Displays the country's flag
- Displays the capital city
- Displays the population with commas
- Displays the region
- Displays the country's currencies
- Shows a **Loading...** message while fetching data
- Shows a friendly error message when a country cannot be found
- Defaults to **Ethiopia** when the page first loads
- Uses JavaScript `fetch()` and `async/await`
- Uses DOM manipulation with `createElement()`

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Async/Await
- Try/Catch
- DOM Manipulation

## API Used

This project uses the free **Countries.dev API** to retrieve country information.

API documentation:

https://countries.dev/docs

Country search endpoint:

https://countries.dev/name/{country}

Example:

https://countries.dev/name/Ethiopia

The API provides information such as:

- Country name
- Capital
- Population
- Region
- Currencies
- Flag

## How the Application Works

1. The page loads and automatically searches for **Ethiopia**.
2. A **Loading...** message is displayed while the request is in progress.
3. JavaScript uses `fetch()` to request the country data.
4. `res.ok` is checked to detect HTTP errors.
5. The response is converted to JSON using `await res.json()`.
6. The country information is displayed on the page using DOM methods.
7. If the request fails, a friendly error message is displayed.

## Error Handling

The application uses `try/catch` to handle:

- Network errors
- HTTP errors
- Countries that cannot be found
- Empty search input

For example, if a country does not exist, the page displays:

```text
Country not found
```

## Project Structure

```text
country-facts/
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

### `index.html`

Contains the structure of the webpage, search form, and output section.

### `styles.css`

Contains the styling and layout of the page.

### `app.js`

Contains the JavaScript logic for:

- Fetching country data
- Handling loading and error states
- Processing the API response
- Creating DOM elements
- Displaying country facts
- Handling the search form

### `README.md`

Contains information about the project, API, features, and how to run it.

## How to Run

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open the folder using VS Code.
4. Start the project using **Live Server**.
5. The page will automatically display Ethiopia's information.
6. Enter another country name in the search box.
7. Click **Search**.

## Example Searches

You can try:

```text
Ethiopia
United States
Canada
France
Japan
Kenya
Germany
Brazil
```

## Author

Elizabeth
