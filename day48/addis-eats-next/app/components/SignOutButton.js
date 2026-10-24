
"use client";

import { useState } from "react";

export default function SignOutButton() {
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Sign-out failed");
      }

      window.location.assign("/");
    } catch {
      setLoading(false);
      window.alert("Could not sign out. Please try again.");
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className="rounded-lg border border-red-900 px-4 py-2 font-semibold text-red-900 hover:bg-red-50 disabled:opacity-60"
    >
      {loading ? "Signing out..." : "Sign Out"}
    </button>
  );
}
