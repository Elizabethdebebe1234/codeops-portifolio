import ErrorBoundary from "./ErrorBoundary";
import Cart from "./Cart";

function CartPanel() {
  return (
    <ErrorBoundary message="Your cart could not be displayed.">
      <Cart />
    </ErrorBoundary>
  );
}

export default CartPanel;
