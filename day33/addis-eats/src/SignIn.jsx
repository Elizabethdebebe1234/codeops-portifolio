import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "./AuthContext.jsx";

function SignIn() {
  const { user, login, register } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [mode, setMode] = useState("signin");

  const [name, setName] = useState("");

  const [identifier, setIdentifier] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  function switchMode(newMode) {
    setMode(newMode);

    setError("");
    setSuccess("");

    setName("");
    setIdentifier("");
    setPassword("");
    setConfirmPassword("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (mode === "register") {
      if (!name.trim()) {
        setError("Please enter your full name.");
        return;
      }

      if (!identifier.trim()) {
        setError("Please enter your email or phone number.");
        return;
      }

      if (password.length < 6) {
        setError("Password must contain at least 6 characters.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const result = register({
        name,
        identifier,
        password,
      });

      if (!result.success) {
        setError(result.message);
        return;
      }

      setSuccess(result.message);

      setTimeout(() => {
        navigate(from, {
          replace: true,
        });
      }, 700);

      return;
    }

    if (!identifier.trim()) {
      setError("Please enter your email or phone number.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    const result = login({
      identifier,
      password,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    setSuccess(result.message);

    setTimeout(() => {
      navigate(from, {
        replace: true,
      });
    }, 500);
  }

  if (user) {
    return (
      <section className="signin">
        <div className="signin-card">
          <div className="signin-icon">🍽️</div>

          <h1>Welcome, {user.name}!</h1>

          <p>You are already signed in to Addis Eats.</p>

          <button
            className="primary-button"
            onClick={() =>
              navigate(from, {
                replace: true,
              })
            }
          >
            Continue
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="signin">
      <div className="signin-card">
        <div className="signin-icon">🍽️</div>

        <h1>{mode === "signin" ? "Welcome Back" : "Create Your Account"}</h1>

        <p className="signin-subtitle">
          {mode === "signin"
            ? "Sign in to continue your Addis Eats order."
            : "Create an account to order your favorite Ethiopian dishes."}
        </p>

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === "signin" ? "auth-tab active" : "auth-tab"}
            onClick={() => switchMode("signin")}
          >
            Sign In
          </button>

          <button
            type="button"
            className={mode === "register" ? "auth-tab active" : "auth-tab"}
            onClick={() => switchMode("register")}
          >
            Create Account
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <label>
              Full Name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your full name"
              />
            </label>
          )}

          <label>
            Email or Phone Number
            <input
              type="text"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder="example@email.com or 0912345678"
            />
          </label>

          <label>
            Password
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {mode === "register" && (
            <label>
              Confirm Password
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm your password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword((current) => !current)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>
          )}

          {mode === "register" && (
            <p className="password-hint">
              Password must contain at least 6 characters.
            </p>
          )}

          {error && <div className="auth-error">{error}</div>}

          {success && <div className="auth-success">{success}</div>}

          <button type="submit" className="primary-button auth-submit">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="auth-switch">
          {mode === "signin" ? "Don't have an account?" : "Already registered?"}

          <button
            type="button"
            onClick={() =>
              switchMode(mode === "signin" ? "register" : "signin")
            }
          >
            {mode === "signin" ? " Create Account" : " Sign In"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default SignIn;
