import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

function Login({ setPage }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
      submit: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem(
      "aiBusinessUser",
      JSON.stringify({
        name: "Demo User",
        email: formData.email,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-card-content">
      <div className="auth-title-area">
        <h2>Sign in to your account</h2>

        <p>
          Enter your details to continue managing your business.
        </p>
      </div>

      {errors.submit && (
        <div className="auth-error-alert">
          <FiAlertCircle />
          {errors.submit}
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="auth-field">
          <label htmlFor="login-email">Email address</label>

          <div
            className={`auth-input-wrapper ${
              errors.email ? "auth-input-error" : ""
            }`}
          >
            <FiMail className="auth-input-icon" />

            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          {errors.email && (
            <span className="auth-field-error">{errors.email}</span>
          )}
        </div>

        <div className="auth-field">
          <div className="auth-label-row">
            <label htmlFor="login-password">Password</label>

            <button
              type="button"
              className="auth-text-button"
              onClick={() => setPage("forgotPassword")}
            >
              Forgot password?
            </button>
          </div>

          <div
            className={`auth-input-wrapper ${
              errors.password ? "auth-input-error" : ""
            }`}
          >
            <FiLock className="auth-input-icon" />

            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {errors.password && (
            <span className="auth-field-error">{errors.password}</span>
          )}
        </div>

        <label className="remember-checkbox">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />

          <span>Remember me on this device</span>
        </label>

        <button type="submit" className="auth-primary-button">
          Sign In
          <FiArrowRight />
        </button>
      </form>

      <div className="auth-divider">
        <span>or continue with</span>
      </div>

      <button
        type="button"
        className="google-auth-button"
        onClick={() => setPage("googleLogin")}
      >
        <FcGoogle />
        Continue with Google
      </button>

      <p className="auth-switch-text">
        Don&apos;t have an account?

        <button type="button" onClick={() => setPage("register")}>
          Create an account
        </button>
      </p>

      <p className="auth-terms-text">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}

export default Login;