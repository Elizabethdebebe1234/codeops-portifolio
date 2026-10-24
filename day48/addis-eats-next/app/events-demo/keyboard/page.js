"use client";

import { useState } from "react";

export default function KeyboardDemoPage() {
  const [message, setMessage] = useState("Use Tab to focus the button, then press Enter or Space.");

  function handleKeyDown(event) {
    if (event.key === "Enter") setMessage("You pressed Enter.");
    if (event.key === "Escape") setMessage("You pressed Escape.");
  }

  return (
    <main className="mx-auto max-w-2xl space-y-6 px-5 py-10">
      <h1 className="text-3xl font-bold">Keyboard Accessibility</h1>
      <p>Accessible controls can be used without a mouse.</p>

      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Keyboard practice</h2>
        <p>Press Tab to move between the controls.</p>

        <button type="button"
          onClick={() => setMessage("Button activated successfully.")}
          onKeyDown={handleKeyDown}
          className="min-h-11 rounded-lg bg-green-800 px-5 py-3 text-white focus-visible:outline-4 focus-visible:outline-offset-4">
          Accessible button
        </button>

        <label htmlFor="keyboard-input" className="block font-medium">Test input</label>
        <input id="keyboard-input" onKeyDown={handleKeyDown}
          className="min-h-11 w-full rounded-lg border px-3 focus-visible:outline-2"
          placeholder="Press Enter or Escape" />

        <p role="status" aria-live="polite">{message}</p>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Accessibility reminders</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Use real buttons for actions and links for navigation.</li>
          <li>Keep visible keyboard focus indicators.</li>
          <li>Give form inputs labels.</li>
          <li>Make controls comfortable to tap on a phone.</li>
        </ul>
      </section>
    </main>
  );
}
