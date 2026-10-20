
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand footer-brand">
              Addis<span>Eats.</span>
            </Link>

            <p className="footer-description">
              Celebrating Ethiopian flavors with food made
              for sharing, connecting, and enjoying.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Explore</h3>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/menu">Our Menu</Link>
              <Link href="/cart">Your Cart</Link>
              <Link href="/checkout">Checkout</Link>
              <Link href="/sign-in">Sign In</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Get in Touch</h3>
            <div className="footer-links">
              <a href="mailto:hello@addiseats.example">Email Us</a>
              <Link href="/#story">Our Story</Link>
              <span>Made with care in Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Addis Eats. All rights reserved.</span>
          <span>Good food. Great company.</span>
        </div>
      </div>
    </footer>
  );
}
