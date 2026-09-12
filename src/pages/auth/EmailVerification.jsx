import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiMail,
  FiRefreshCw,
} from "react-icons/fi";

function EmailVerification({ setPage, email }) {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds <= 0) return undefined;

    const timer = setInterval(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);
    setError("");

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (event) => {
    event.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Enter the complete 6-digit verification code.");
      return;
    }

    setVerified(true);
  };

  const resendCode = () => {
    setOtp(["", "", "", "", "", ""]);
    setSeconds(30);
    setError("");
    inputRefs.current[0]?.focus();
  };

  if (verified) {
    return (
      <div className="auth-card-content auth-status-content">
        <div className="auth-status-icon success-icon">
          <FiCheckCircle />
        </div>

        <div className="auth-title-area">
          <h2>Email verified successfully</h2>

          <p>
            Your account is ready. You can now sign in to the
            platform.
          </p>
        </div>

        <button
          type="button"
          className="auth-primary-button"
          onClick={() => setPage("login")}
        >
          Continue to Login
        </button>
      </div>
    );
  }

  return (
    <div className="auth-card-content">
      <button
        type="button"
        className="auth-back-button"
        onClick={() => setPage("register")}
      >
        <FiArrowLeft />
        Back to registration
      </button>

      <div className="auth-status-icon">
        <FiMail />
      </div>

      <div className="auth-title-area">
        <h2>Verify your email</h2>

        <p>
          Enter the 6-digit code sent to
          <strong> {email || "your email address"}</strong>.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleVerify}>
        <div className="otp-input-group">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(event) =>
                handleOtpChange(index, event.target.value)
              }
              onKeyDown={(event) => handleKeyDown(index, event)}
              aria-label={`Verification digit ${index + 1}`}
            />
          ))}
        </div>

        {error && (
          <span className="auth-field-error otp-error">{error}</span>
        )}

        <button type="submit" className="auth-primary-button">
          Verify Email
          <FiCheckCircle />
        </button>
      </form>

      <div className="resend-code-area">
        <p>Didn&apos;t receive the verification code?</p>

        <button
          type="button"
          disabled={seconds > 0}
          onClick={resendCode}
        >
          <FiRefreshCw />

          {seconds > 0 ? `Resend in ${seconds}s` : "Resend code"}
        </button>
      </div>
    </div>
  );
}

export default EmailVerification;