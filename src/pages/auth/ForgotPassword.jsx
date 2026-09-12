import { useState } from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiMail,
  FiSend,
} from "react-icons/fi";

function ForgotPassword({ setPage }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setEmailSent(true);
  };

  if (emailSent) {
    return (
      <div className="auth-card-content auth-status-content">
        <div className="auth-status-icon success-icon">
          <FiCheckCircle />
        </div>

        <div className="auth-title-area">
          <h2>Check your email</h2>

          <p>
            We sent password reset instructions to
            <strong> {email}</strong>.
          </p>
        </div>

        <button
          type="button"
          className="auth-primary-button"
          onClick={() => setPage("login")}
        >
          Return to login
        </button>

        <button
          type="button"
          className="auth-secondary-text-button"
          onClick={() => setEmailSent(false)}
        >
          Use another email address
        </button>
      </div>
    );
  }

  return (
    <div className="auth-card-content">
      <button
        type="button"
        className="auth-back-button"
        onClick={() => setPage("login")}
      >
        <FiArrowLeft />
        Back to login
      </button>

      <div className="auth-status-icon">
        <FiMail />
      </div>

      <div className="auth-title-area">
        <h2>Forgot your password?</h2>

        <p>
          Enter your registered email and we will send you reset
          instructions.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="forgot-email">Email address</label>

          <div
            className={`auth-input-wrapper ${
              error ? "auth-input-error" : ""
            }`}
          >
            <FiMail className="auth-input-icon" />

            <input
              id="forgot-email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
            />
          </div>

          {error && <span className="auth-field-error">{error}</span>}
        </div>

        <button type="submit" className="auth-primary-button">
          Send Reset Link
          <FiSend />
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;