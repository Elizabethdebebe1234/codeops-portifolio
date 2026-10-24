
import Link from "next/link";
import { cookies } from "next/headers";
import { COOKIE_NAME, verifySessionToken } from "@/lib/session";
import SignOutButton from "./SignOutButton";

export default async function SiteHeader() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Addis<span>Eats.</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/menu">Our Menu</Link>
          <Link href="/#story">Our Story</Link>
          <Link href="/#contact">Contact</Link>

        </nav>

        <div className="header-actions">
          <Link href="/cart" className="btn btn-outline">
            Cart
          </Link>
          
<Link href="/staff/login" className="kitchen-login-link">
  🍳 Kitchen Staff
</Link>


          {session ? (
            <>
              <span className="header-welcome">
                Hi, {session.email.split("@")[0]}
              </span>
              <SignOutButton />
            </>
          ) : (
            <Link href="/sign-in" className="btn btn-outline">
              Sign In
            </Link>
          )}

          <Link href="/menu" className="btn">
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}
