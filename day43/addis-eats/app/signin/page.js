"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Save the signed-in user
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
      }),
    );

    // Go to checkout after signing in
    router.push("/checkout");
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-3xl font-bold">Sign In</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full rounded border p-3"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-black px-4 py-3 text-white hover:bg-gray-800"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
