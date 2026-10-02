import CheckoutForm from "./checkout-form";

export default async function CheckoutPage({ searchParams }) {
  const params = await searchParams;
  const dishId = params?.dishId || "1";

  return (
    <main>
      <h1>Checkout</h1>

      <CheckoutForm selectedDishId={dishId} />
    </main>
  );
}
