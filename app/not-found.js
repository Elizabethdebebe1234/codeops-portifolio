import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Dish Not Found</h1>

      <p>Sorry, we couldn't find the dish you're looking for.</p>

      <Link href="/menu">← Back to Menu</Link>
    </main>
  );
}
