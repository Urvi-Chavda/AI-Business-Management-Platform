import {
  FiBarChart2,
  FiCheckCircle,
  FiLayers,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

function AuthLayout({ children, currentPage }) {
  const features = [
    {
      icon: <FiLayers />,
      title: "Manage Projects",
      description: "Plan tasks, deadlines and team activities.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Grow Revenue",
      description: "Monitor business growth and performance.",
    },
    {
      icon: <FiUsers />,
      title: "Manage Your Team",
      description: "Handle employees, clients and collaboration.",
    },
  ];

  return (
    <main className="auth-page">
      <section className="auth-hero-section">
        <div className="auth-background-shape auth-shape-one" />
        <div className="auth-background-shape auth-shape-two" />

        <div className="auth-hero-content">
          <div className="auth-hero-badge">
            <FiZap />
            AI-powered business workspace
          </div>

          <h1>
            Manage your entire business from
            <span> one intelligent platform.</span>
          </h1>

          <p className="auth-hero-description">
            Organize projects, manage clients, collaborate with your team,
            create invoices and use AI to complete daily work faster.
          </p>

          <div className="auth-feature-list">
            {features.map((feature) => (
              <div className="auth-feature-item" key={feature.title}>
                <div className="auth-feature-icon">{feature.icon}</div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="auth-trust-card">
            <div className="auth-users">
              <span>UC</span>
              <span>KM</span>
              <span>AS</span>
              <span>+</span>
            </div>

            <div>
              <strong>Trusted by growing teams</strong>

              <p>
                <FiCheckCircle />
                Simple, secure and productive
              </p>
            </div>
          </div>

          <div className="auth-mini-stat">
            <FiBarChart2 />
            <div>
              <strong>35%</strong>
              <span>More productivity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="auth-form-section">
        <div className="auth-form-wrapper">
          <div className="auth-mobile-brand">
            <span>AI</span>
            <div>
              <strong>AI Business</strong>
              <small>Management Platform</small>
            </div>
          </div>

          <div className="auth-form-heading">
            <span className="auth-page-label">
              {currentPage === "register" ? "Create account" : "Welcome back"}
            </span>
          </div>

          {children}
        </div>
      </section>
    </main>
  );
}

export default AuthLayout;