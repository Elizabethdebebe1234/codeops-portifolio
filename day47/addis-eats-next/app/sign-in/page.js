
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Sign-in failed.");
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const requestedNext = params.get("next");
      const safeNext =
        requestedNext?.startsWith("/") &&
        !requestedNext.startsWith("//")
          ? requestedNext
          : "/";

      window.location.assign(safeNext);
    } catch {
      setMessage("Could not connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <Link href="/" className="text-sm text-gray-600 hover:underline">
          ← Back to Addis Eats
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-red-900">
          Welcome back!
        </h1>

        <p className="mt-2 text-gray-600">
          Sign in to continue your Addis Eats experience.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block font-medium">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
              placeholder="Enter your password"
            />
          </div>

          {message && (
            <p role="alert" className="text-sm text-red-700">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-900 px-4 py-3 font-semibold text-white hover:bg-red-800 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Demo account sign-in for the Addis Eats coursework project.
        </p>
      </section>
    </main>
  );
}
