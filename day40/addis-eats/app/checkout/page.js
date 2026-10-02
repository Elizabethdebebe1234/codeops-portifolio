import CheckoutForm from "./checkout-form";

export default async function CheckoutPage({ searchParams }) {
  const params = await searchParams;

  return (
    <section>
      <h2>Checkout</h2>

      <CheckoutForm selectedDishId={params?.dishId || "1"} />
    </section>
  );
}
