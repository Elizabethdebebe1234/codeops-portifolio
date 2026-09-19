import { Link } from "react-router-dom";

function Receipt() {
  return (
    <main className="receipt-page">
      <div className="receipt-card">
        <div className="receipt-icon">✓</div>

        <h1>Order Receipt</h1>

        <p>Your Addis Eats order has been received successfully.</p>

        <Link to="/menu" className="checkout-button">
          Back to Menu
        </Link>
      </div>
    </main>
  );
}

export default Receipt;
