import { useState } from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

function Register({ setPage, onRegistrationSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must accept the terms and conditions.";
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
      "registeredUser",
      JSON.stringify({
        fullName: formData.fullName,
        businessName: formData.businessName,
        email: formData.email,
      })
    );

    onRegistrationSuccess(formData.email);
  };

  return (
    <div className="auth-card-content">
      <div className="auth-title-area">
        <h2>Create your free account</h2>

        <p>
          Start managing your projects, clients and team in one place.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="auth-form-grid">
          <div className="auth-field">
            <label htmlFor="register-name">Full name</label>

            <div
              className={`auth-input-wrapper ${
                errors.fullName ? "auth-input-error" : ""
              }`}
            >
              <FiUser className="auth-input-icon" />

              <input
                id="register-name"
                type="text"
                name="fullName"
                placeholder="Urvi Chavda"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {errors.fullName && (
              <span className="auth-field-error">{errors.fullName}</span>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="business-name">Business name</label>

            <div
              className={`auth-input-wrapper ${
                errors.businessName ? "auth-input-error" : ""
              }`}
            >
              <FiBriefcase className="auth-input-icon" />

              <input
                id="business-name"
                type="text"
                name="businessName"
                placeholder="Your business"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>

            {errors.businessName && (
              <span className="auth-field-error">
                {errors.businessName}
              </span>
            )}
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="register-email">Email address</label>

          <div
            className={`auth-input-wrapper ${
              errors.email ? "auth-input-error" : ""
            }`}
          >
            <FiMail className="auth-input-icon" />

            <input
              id="register-email"
              type="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {errors.email && (
            <span className="auth-field-error">{errors.email}</span>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="register-password">Password</label>

          <div
            className={`auth-input-wrapper ${
              errors.password ? "auth-input-error" : ""
            }`}
          >
            <FiLock className="auth-input-icon" />

            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Minimum 8 characters"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((current) => !current)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {errors.password && (
            <span className="auth-field-error">{errors.password}</span>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="confirm-password">Confirm password</label>

          <div
            className={`auth-input-wrapper ${
              errors.confirmPassword ? "auth-input-error" : ""
            }`}
          >
            <FiLock className="auth-input-icon" />

            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Enter password again"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword((current) => !current)
              }
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {errors.confirmPassword && (
            <span className="auth-field-error">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <label className="remember-checkbox register-terms">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />

          <span>
            I agree to the Terms of Service and Privacy Policy.
          </span>
        </label>

        {errors.agreeTerms && (
          <span className="auth-field-error">{errors.agreeTerms}</span>
        )}

        <button type="submit" className="auth-primary-button">
          Create Account
          <FiArrowRight />
        </button>
      </form>

      <div className="auth-divider">
        <span>or sign up with</span>
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
        Already have an account?

        <button type="button" onClick={() => setPage("login")}>
          Sign in
        </button>
      </p>
    </div>
  );
}

export default Register;