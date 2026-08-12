import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa6";

const PublicFooter = () => {
  return (
    <footer className="saas-footer">
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">
        {/* TOP CTA */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <span className="footer-eyebrow">
              READY TO TRANSFORM YOUR BUSINESS?
            </span>

            <h2>
              One workspace.
              <br />
              <span>Unlimited possibilities.</span>
            </h2>

            <p>
              Bring projects, clients, teams, analytics, automation and AI
              together in one powerful business management platform.
            </p>
          </div>

          <div className="footer-cta-actions">
            <Link to="/register" className="footer-primary-btn">
              Start for Free
              <FaArrowRight />
            </Link>

            <Link to="/pricing" className="footer-secondary-btn">
              View Pricing
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand">
              <div className="footer-logo">
                <span>AI</span>
              </div>

              <div>
                <strong>AI Business</strong>
                <small>Management Platform</small>
              </div>
            </Link>

            <p className="footer-description">
              A modern AI-powered workspace built for freelancers, agencies,
              startups and growing businesses that want to manage work,
              clients, teams and growth from one place.
            </p>

            <div className="footer-socials">
              <a href="#github" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#linkedin" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#twitter" aria-label="Twitter">
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="footer-links-column">
            <h4>Platform</h4>

            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="footer-links-column">
            <h4>Workspace</h4>

            <a href="#projects">Projects</a>
            <a href="#crm">CRM</a>
            <a href="#team">Team</a>
            <a href="#analytics">Analytics</a>
          </div>

          <div className="footer-links-column">
            <h4>AI Tools</h4>

            <a href="#assistant">AI Assistant</a>
            <a href="#email">Email Writer</a>
            <a href="#meeting">Meeting Summary</a>
            <a href="#content">Content Generator</a>
          </div>

          <div className="footer-links-column">
            <h4>Company</h4>

            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-text">
            <div className="newsletter-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>BUSINESS INSIGHTS</span>

              <h3>Get smarter about running your business.</h3>

              <p>
                Product updates, AI tips and productivity insights delivered
                directly to your inbox.
              </p>
            </div>
          </div>

          <form
            className="footer-subscribe"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />

            <button type="submit">
              Subscribe
              <FaArrowRight />
            </button>
          </form>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © 2026 AI Business Management Platform. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies</a>
          </div>

          <div className="footer-status">
            <span></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;