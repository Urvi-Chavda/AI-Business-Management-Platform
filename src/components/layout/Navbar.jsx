import { Link, NavLink } from "react-router-dom";
import { FaArrowRight, FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="main-navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            AI
          </div>

          <div className="navbar-brand-text">
            <strong>AI Business</strong>
            <span>Management Platform</span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Solutions
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Pricing
          </NavLink>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">
          <Link to="/login" className="navbar-login-btn">
            Login
          </Link>

          <Link to="/register" className="navbar-start-btn">
            Get Started
            <FaArrowRight />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="navbar-mobile-button">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;