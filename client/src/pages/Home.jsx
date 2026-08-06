import { useNavigate } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiLayers,
  FiMoreHorizontal,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import "../styles/auth.css";

function Home() {
  const navigate = useNavigate();

  const statistics = [
    {
      title: "Total Revenue",
      value: "₹2.48L",
      change: "+18.5%",
      icon: <FiDollarSign />,
      className: "revenue-stat",
    },
    {
      title: "Active Clients",
      value: "128",
      change: "+12.2%",
      icon: <FiUsers />,
      className: "clients-stat",
    },
    {
      title: "Projects",
      value: "42",
      change: "+8.4%",
      icon: <FiLayers />,
      className: "projects-stat",
    },
  ];

  const chartData = [
    {
      month: "Jan",
      value: 42,
      amount: "₹1.05L",
    },
    {
      month: "Feb",
      value: 60,
      amount: "₹1.50L",
    },
    {
      month: "Mar",
      value: 54,
      amount: "₹1.35L",
    },
    {
      month: "Apr",
      value: 78,
      amount: "₹1.95L",
    },
    {
      month: "May",
      value: 68,
      amount: "₹1.70L",
    },
    {
      month: "Jun",
      value: 91,
      amount: "₹2.28L",
    },
  ];

  return (
    <div className="professional-home-page">
      <Navbar />

      <main className="professional-home-hero">
        <section className="home-content-column">
          <div className="home-product-badge">
            <span className="badge-icon">
              <FiZap />
            </span>

            <span>AI workspace for modern businesses</span>

            <span className="badge-new">New</span>
          </div>

          <h1 className="professional-home-title">
            Build, manage and grow your business with
            <span> intelligent automation.</span>
          </h1>

          <p className="professional-home-description">
            One professional workspace to manage projects, clients, teams,
            invoices, meetings and business performance with AI-powered tools.
          </p>

          <div className="professional-home-actions">
            <button
              type="button"
              className="professional-primary-button"
              onClick={() => navigate("/register")}
            >
              Start for Free
              <FiArrowRight />
            </button>

            <button
              type="button"
              className="professional-secondary-button"
              onClick={() => navigate("/login")}
            >
              Login to Account
            </button>
          </div>

          <div className="home-benefit-list">
            <span>
              <FiCheckCircle />
              No credit card required
            </span>

            <span>
              <FiCheckCircle />
              Free workspace setup
            </span>

            <span>
              <FiCheckCircle />
              Secure business data
            </span>
          </div>

          <div className="home-trusted-section">
            <div className="trusted-avatar-group">
              <span>UC</span>
              <span>AK</span>
              <span>RS</span>
              <span>MP</span>
            </div>

            <div className="trusted-content">
              <strong>Trusted by growing teams</strong>

              <div className="trusted-rating">
                <span>★★★★★</span>
                <small>4.9 average rating</small>
              </div>
            </div>
          </div>
        </section>

        <section className="business-dashboard-wrapper">
          <div className="dashboard-glow dashboard-glow-one" />
          <div className="dashboard-glow dashboard-glow-two" />

          <div className="business-dashboard-card">
            <div className="dashboard-browser-header">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-address">
                app.aibusiness.com/dashboard
              </div>

              <div className="browser-secure">
                <FiCheck />
              </div>
            </div>

            <div className="dashboard-application">
              <aside className="dashboard-preview-sidebar">
                <div className="preview-sidebar-logo">
                  <span>AI</span>
                </div>

                <div className="preview-sidebar-menu">
                  <button
                    type="button"
                    className="active"
                    aria-label="Dashboard"
                  >
                    <FiBarChart2 />
                  </button>

                  <button type="button" aria-label="Projects">
                    <FiBriefcase />
                  </button>

                  <button type="button" aria-label="Team">
                    <FiUsers />
                  </button>

                  <button type="button" aria-label="Resources">
                    <FiLayers />
                  </button>

                  <button type="button" aria-label="Analytics">
                    <FiActivity />
                  </button>
                </div>

                <div className="preview-sidebar-user">UC</div>
              </aside>

              <div className="dashboard-preview-main">
                <div className="dashboard-preview-topbar">
                  <div>
                    <span className="preview-page-label">
                      Business overview
                    </span>

                    <h2>Good morning, Urvi 👋</h2>

                    <p>
                      Here is what is happening with your business today.
                    </p>
                  </div>

                  <button type="button" className="preview-date-button">
                    <FiClock />
                    This Month
                  </button>
                </div>

                <div className="dashboard-statistics-grid">
                  {statistics.map((item) => (
                    <div
                      className={`dashboard-statistic-card ${item.className}`}
                      key={item.title}
                    >
                      <div className="statistic-card-top">
                        <div className="statistic-icon">{item.icon}</div>

                        <button type="button" aria-label="More options">
                          <FiMoreHorizontal />
                        </button>
                      </div>

                      <span className="statistic-title">{item.title}</span>

                      <div className="statistic-value-row">
                        <strong>{item.value}</strong>

                        <span>
                          <FiTrendingUp />
                          {item.change}
                        </span>
                      </div>

                      <small>Compared with last month</small>
                    </div>
                  ))}
                </div>

                <div className="dashboard-information-grid">
                  <div className="dashboard-revenue-card">
                    <div className="dashboard-card-heading">
                      <div>
                        <h3>Revenue Overview</h3>
                        <p>Monthly business performance</p>
                      </div>

                      <div className="revenue-summary">
                        <span>Total Revenue</span>
                        <strong>₹2,48,500</strong>
                      </div>
                    </div>

                    <div className="revenue-chart-area">
                      <div className="chart-y-labels">
                        <span>₹3L</span>
                        <span>₹2L</span>
                        <span>₹1L</span>
                        <span>₹0</span>
                      </div>

                      <div className="revenue-chart-content">
                        <div className="chart-grid-lines">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="chart-bars">
                          {chartData.map((item) => (
                            <div
                              className="chart-bar-item"
                              key={item.month}
                            >
                              <div
                                className="chart-bar"
                                style={{
                                  height: `${item.value}%`,
                                }}
                              >
                                <span className="chart-tooltip">
                                  {item.amount}
                                </span>
                              </div>

                              <small>{item.month}</small>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-activity-card">
                    <div className="dashboard-card-heading">
                      <div>
                        <h3>Recent Activity</h3>
                        <p>Latest team updates</p>
                      </div>

                      <button type="button">View all</button>
                    </div>

                    <div className="activity-list">
                      <div className="activity-item">
                        <div className="activity-avatar blue-avatar">
                          AK
                        </div>

                        <div className="activity-details">
                          <p>
                            <strong>Arjun</strong> completed a project task.
                          </p>

                          <span>Website Redesign · 12 min ago</span>
                        </div>

                        <FiCheckCircle />
                      </div>

                      <div className="activity-item">
                        <div className="activity-avatar purple-avatar">
                          RS
                        </div>

                        <div className="activity-details">
                          <p>
                            <strong>Riya</strong> added a new client.
                          </p>

                          <span>CRM workspace · 35 min ago</span>
                        </div>

                        <FiUsers />
                      </div>

                      <div className="activity-item">
                        <div className="activity-avatar orange-avatar">
                          MP
                        </div>

                        <div className="activity-details">
                          <p>
                            <strong>Meet</strong> generated an invoice.
                          </p>

                          <span>Invoice #INV-2058 · 1 hr ago</span>
                        </div>

                        <FiDollarSign />
                      </div>
                    </div>

                    <div className="productivity-progress">
                      <div className="progress-heading">
                        <div>
                          <span>Team productivity</span>
                          <strong>82%</strong>
                        </div>

                        <small>+12% this week</small>
                      </div>

                      <div className="progress-track">
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dashboard-bottom-grid">
                  <div className="dashboard-goal-card">
                    <div className="goal-card-header">
                      <div>
                        <span>Monthly Goal</span>
                        <h4>₹3,00,000</h4>
                      </div>

                      <span className="goal-percentage">83%</span>
                    </div>

                    <div className="goal-progress-track">
                      <span />
                    </div>

                    <div className="goal-footer">
                      <span>₹2,48,500 achieved</span>
                      <strong>₹51,500 remaining</strong>
                    </div>
                  </div>

                  <div className="dashboard-deadline-card">
                    <div className="deadline-icon">
                      <FiClock />
                    </div>

                    <div>
                      <span>Upcoming Deadline</span>
                      <h4>Mobile App Design</h4>
                      <p>Due tomorrow at 5:00 PM</p>
                    </div>
                  </div>

                  <div className="dashboard-ai-insight-card">
                    <div className="ai-insight-icon">
                      <FiZap />
                    </div>

                    <div>
                      <span>AI Business Insight</span>

                      <p>
                        Revenue increased by 18.5%. Focus on your top
                        three clients this week.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-ai-card">
            <div className="floating-ai-icon">
              <FiZap />
            </div>

            <div>
              <strong>AI Assistant</strong>
              <span>3 tasks automated today</span>
            </div>

            <span className="ai-status-dot" />
          </div>

          <div className="floating-growth-card">
            <div className="growth-card-icon">
              <FiTrendingUp />
            </div>

            <div>
              <span>Monthly growth</span>
              <strong>+24.8%</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;