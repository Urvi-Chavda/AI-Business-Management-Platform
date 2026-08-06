import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar({ onLoginClick, onRegisterClick }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    setMenuOpen(false);

    if (onLoginClick) {
      onLoginClick();
    } else {
      navigate("/login");
    }
  };

  const handleRegister = () => {
    setMenuOpen(false);

    if (onRegisterClick) {
      onRegisterClick();
    } else {
      navigate("/register");
    }
  };

  return (
    <header className="main-navbar">
      <div className="navbar-container">
        <button
          type="button"
          className="navbar-brand"
          onClick={() => navigate("/")}
        >
          <span className="brand-logo">AI</span>

          <span className="brand-content">
            <strong>AI Business</strong>
            <small>Management Platform</small>
          </span>
        </button>

        <nav className={`navbar-menu ${menuOpen ? "navbar-menu-open" : ""}`}>
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>

          <button type="button" onClick={() => navigate("/#features")}>
            Features
          </button>

          <button type="button" onClick={() => navigate("/#solutions")}>
            Solutions
          </button>

          <button type="button" onClick={() => navigate("/#pricing")}>
            Pricing
          </button>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          <button
            type="button"
            className="navbar-register-btn"
            onClick={handleRegister}
          >
            Get Started
            <FiArrowRight />
          </button>
        </div>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;