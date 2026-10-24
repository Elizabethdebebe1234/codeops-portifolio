"use client";

import { useState } from "react";

export default function EventsDemoPage() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Choose an activity below.");

  function handleClick(event) {
    setCount((previous) => previous + 1);
    setMessage(`You clicked: ${event.currentTarget.textContent.trim()}`);
    console.log("Event type:", event.type);
    console.log("Clicked element:", event.currentTarget);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("The form submitted without refreshing the page.");
  }

  function handleParentClick() {
    setMessage("Parent clicked.");
  }

  function handleChildClick(event) {
    event.stopPropagation();
    setMessage("Child clicked. The parent click was stopped.");
  }

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-5 py-10">
      <header>
        <p className="font-semibold uppercase tracking-widest">Day 48</p>
        <h1 className="mt-2 text-3xl font-bold">React Events Playground</h1>
        <p className="mt-3">Practise common React event handlers.</p>
      </header>

      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-bold">1. Click events and event objects</h2>
        <button type="button" onClick={handleClick}
          className="min-h-11 rounded-lg bg-green-800 px-5 py-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4">
          Click me
        </button>
        <p>Clicks: <strong>{count}</strong></p>
        <p aria-live="polite">{message}</p>
      </section>

      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-bold">2. preventDefault()</h2>
        <p>This prevents the browser's normal form submission.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <label htmlFor="demo-name" className="block">Your name</label>
          <input id="demo-name" name="name" required
            className="min-h-11 w-full rounded-lg border px-3"
            placeholder="Enter your name" />
          <button className="min-h-11 rounded-lg bg-green-800 px-5 py-3 text-white">
            Submit form
          </button>
        </form>
      </section>

      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-bold">3. stopPropagation()</h2>
        <div onClick={handleParentClick}
          className="space-y-4 rounded-lg border-2 border-dashed p-5">
          <p>Parent box: click here to trigger the parent.</p>
          <button type="button" onClick={handleChildClick}
            className="min-h-11 rounded-lg bg-amber-600 px-5 py-3 text-white focus-visible:outline-2">
            Click child only
          </button>
        </div>
        <p aria-live="polite">{message}</p>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-bold">Key ideas</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><code>onClick</code> handles a click.</li>
          <li><code>event</code> provides information about an interaction.</li>
          <li><code>preventDefault()</code> prevents the browser's default action.</li>
          <li><code>stopPropagation()</code> stops an event reaching parent elements.</li>
          <li><code>useState</code> stores values that change the screen.</li>
        </ul>
      </section>
    </main>
  );
}
