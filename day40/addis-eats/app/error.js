"use client";

export default function Error({ error, reset }) {
  return (
    <section>
      <h2>Something went wrong 😕</h2>

      <p>Addis Eats could not load this page.</p>

      <button onClick={() => reset()}>Try Again</button>
    </section>
  );
}
