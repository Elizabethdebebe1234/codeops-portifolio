import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";

function CreateAccount() {
  const { register } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = register(name, email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Registration automatically logs the user in.
    const destination = location.state?.from?.pathname || "/checkout";

    navigate(destination, { replace: true });
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">🍽️</div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Create your account and continue to checkout.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="At least 6 characters"
            />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm your password"
            />
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-switch">Already have an account?</p>

        <Link
          to="/signin"
          state={location.state}
          className="create-account-button"
        >
          Sign In
        </Link>

        <Link to="/menu" className="back-menu">
          ← Back to Menu
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;
