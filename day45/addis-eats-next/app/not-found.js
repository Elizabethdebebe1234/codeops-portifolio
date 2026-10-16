
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <h1>404 — Page not found</h1>
      <p>Sorry, we couldn't find that page or dish.</p>
      <Link href="/menu">Explore our menu</Link>
    </main>
  );
}
