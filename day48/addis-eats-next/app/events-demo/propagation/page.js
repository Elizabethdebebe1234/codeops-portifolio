"use client";

import { useState } from "react";

export default function PropagationDemoPage() {
  const [message, setMessage] = useState("Click the parent or child button.");

  return (
    <main className="mx-auto max-w-2xl space-y-6 px-5 py-10">
      <h1 className="text-3xl font-bold">Event Propagation</h1>
      <p>Events can travel from a child element to its parent.</p>

      <div onClick={() => setMessage("Parent container received the click.")}
        className="space-y-4 rounded-xl border-2 border-dashed p-6">
        <h2 className="text-xl font-semibold">Parent container</h2>

        <button type="button"
          onClick={() => setMessage("Child button clicked; parent also receives the event.")}
          className="min-h-11 rounded-lg bg-green-800 px-4 py-3 text-white">
          Child: allow propagation
        </button>

        <button type="button"
          onClick={(event) => {
            event.stopPropagation();
            setMessage("Child clicked; propagation stopped.");
          }}
          className="min-h-11 rounded-lg bg-amber-600 px-4 py-3 text-white">
          Child: stop propagation
        </button>
      </div>

      <p role="status" className="rounded-lg border p-4">{message}</p>
    </main>
  );
}
