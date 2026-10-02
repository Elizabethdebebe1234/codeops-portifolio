# Rendering Strategy

## Home

The home page is a Server Component because it contains static content and navigation.

## Menu

The menu is a Server Component because it reads dish data on the server.

Category filtering is handled through URL search parameters.

## Menu/[id]

The dynamic dish page is a Server Component.

It uses the route parameter to find the selected dish.

generateStaticParams() is used for known dish IDs.

## Cart

The cart page is a Server Component containing a small Client Component.

CartClient uses useState and click handlers for interactive quantity changes.

## Checkout

Checkout uses a Server Action.

The form sends data to the server where Zod validates the input before an order is created.

## Route Handlers

Route Handlers provide HTTP endpoints for dishes and orders.

They are useful when an external client needs to communicate with the application through HTTP.

## Loading and Error

loading.js provides loading feedback.

error.js provides a recovery UI when the menu encounters an error.

## Not Found

not-found.js handles invalid dish URLs.
