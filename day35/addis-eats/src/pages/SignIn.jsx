import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";

function SignIn() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    const destination = location.state?.from?.pathname || "/checkout";

    navigate(destination, { replace: true });
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">🍽️</div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">Sign in to continue to your order.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <p className="auth-switch">Don't have an account?</p>

        <Link
          to="/create-account"
          state={location.state}
          className="create-account-button"
        >
          Create Account
        </Link>

        <Link to="/menu" className="back-menu">
          ← Back to Menu
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
