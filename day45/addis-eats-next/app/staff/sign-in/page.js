
"use client";

import { useState } from "react";
import Link from "next/link";

export default function StaffSignInPage() {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role: "staff",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Staff sign-in failed.");
        return;
      }

      if (data.role !== "staff") {
        setMessage("Staff access could not be verified.");
        return;
      }

      window.location.assign("/kitchen");
    } catch {
      setMessage("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back to Addis Eats
        </Link>

        <div className="mt-6 text-3xl">🍽️</div>

        <h1 className="mt-3 text-3xl font-bold text-red-900">
          Kitchen Staff
        </h1>

        <p className="mt-2 text-gray-600">
          Sign in with your staff account to manage restaurant orders.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="staff-email"
              className="mb-1 block font-medium"
            >
              Staff email
            </label>

            <input
              id="staff-email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="kitchen@addiseats.example"
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            />
          </div>

          <div>
            <label
              htmlFor="staff-password"
              className="mb-1 block font-medium"
            >
              Password
            </label>

            <input
              id="staff-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter staff password"
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
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
            {loading ? "Signing in..." : "Staff Sign In"}
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-500">
          Authorized restaurant staff only.
        </p>

        <p className="mt-3 text-sm text-gray-600">
          Are you a customer?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-red-900 hover:underline"
          >
            Customer sign in
          </Link>
        </p>
      </section>
    </main>
  );
}
