
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StaffLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
        const response = await fetch("/api/auth/login", {
      
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role: "staff" }),
        
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Staff sign-in failed.");
        return;
      }

      router.push("/kitchen");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="staff-login-page">
      <div className="staff-login-card">
        <Link href="/" className="staff-back-link">
          ← Back to Addis Eats
        </Link>

        <div className="staff-login-icon">🍳</div>

        <p className="staff-eyebrow">ADDIS EATS TEAM</p>
        <h1>Staff Sign In</h1>
        <p className="staff-description">
          Sign in to access the kitchen dashboard
          and manage customer orders.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="staff-email">Staff email</label>
          <input
            id="staff-email"
            type="email"
            placeholder="Enter your staff email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="username"
            required
          />

          <label htmlFor="staff-password">Password</label>
          <input
            id="staff-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />

          {error && (
            <p className="staff-login-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In to Kitchen"}
          </button>
        </form>

        <p className="staff-login-footer">
          Authorized kitchen staff only.
        </p>
      </div>

      <style jsx>{`
        .staff-login-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: #f8f3e8;
        }

        .staff-login-card {
          width: 100%;
          max-width: 440px;
          padding: 32px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .staff-back-link {
          color: #7b1e1e;
          text-decoration: none;
          font-size: 14px;
        }

        .staff-login-icon {
          margin-top: 26px;
          font-size: 42px;
        }

        .staff-eyebrow {
          margin-top: 12px;
          color: #9b7025;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        h1 {
          margin: 8px 0;
          color: #321515;
          font-size: 30px;
        }

        .staff-description {
          margin-bottom: 26px;
          color: #686868;
          line-height: 1.6;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        label {
          margin-top: 6px;
          color: #333;
          font-weight: 600;
          font-size: 14px;
        }

        input {
          width: 100%;
          box-sizing: border-box;
          padding: 13px;
          border: 1px solid #ddd;
          border-radius: 9px;
          background: #fff;
          color: #222;
          font-size: 15px;
        }

        input:focus {
          outline: 2px solid #c99a3d;
          border-color: #c99a3d;
        }

        button {
          margin-top: 12px;
          padding: 14px;
          border: none;
          border-radius: 9px;
          background: #7b1e1e;
          color: white;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
        }

        button:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .staff-login-error {
          color: #b42318;
          font-size: 14px;
        }

        .staff-login-footer {
          margin-top: 24px;
          color: #777;
          font-size: 12px;
          text-align: center;
        }

        @media (max-width: 480px) {
          .staff-login-card {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
