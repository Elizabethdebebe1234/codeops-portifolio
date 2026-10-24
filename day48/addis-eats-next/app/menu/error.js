
"use client";

export default function MenuError({ reset }) {
  return (
    <main className="container">
      <h1>Something went wrong</h1>
      <p>We couldn't load the menu. Please try again.</p>
      <button onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
