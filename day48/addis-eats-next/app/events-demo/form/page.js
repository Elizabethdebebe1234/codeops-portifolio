"use client";

import { useState } from "react";

export default function FormDemoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (name.trim().length < 2) {
      setError("Please enter a name with at least two characters.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess(`Practice form accepted. Welcome, ${name.trim()}!`);
  }

  return (
    <main className="mx-auto max-w-xl space-y-6 px-5 py-10">
      <h1 className="text-3xl font-bold">Form Validation Demo</h1>
      <p>Practise controlled inputs, validation, and onSubmit.</p>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium">Name</label>
          <input id="name" value={name} required
            onChange={(event) => setName(event.target.value)}
            className="min-h-11 w-full rounded-lg border px-3"
            autoComplete="name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">Email</label>
          <input id="email" type="email" value={email} required
            onChange={(event) => setEmail(event.target.value)}
            className="min-h-11 w-full rounded-lg border px-3"
            autoComplete="email" />
        </div>

        <button type="submit"
          className="min-h-11 rounded-lg bg-green-800 px-5 py-3 text-white">
          Validate form
        </button>

        {error && <p role="alert" className="text-red-700">{error}</p>}
        {success && <p role="status" className="text-green-800">{success}</p>}
      </form>
    </main>
  );
}
