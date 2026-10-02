# Server and Client Boundary

## Server Components

The following are Server Components:

- Root Layout
- Home Page
- Menu Layout
- Menu Page
- Dish Details Page
- Cart Page
- Checkout Page

They do not require browser state or event handlers.

## Client Components

### CartClient

Uses:

- useState
- onClick

It manages interactive cart quantity changes.

### CheckoutForm

Uses:

- useActionState

It connects the browser form to the Server Action.

### SubmitButton

Uses:

- useFormStatus

It displays the pending state during form submission.

### Menu Error

Uses:

- reset()
- onClick

Therefore it must be a Client Component.

## Server Actions

placeOrder() executes on the server and validates the order before creating it.

## Route Handlers

Route Handlers expose HTTP endpoints for dishes and orders.
