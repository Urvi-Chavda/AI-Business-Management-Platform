import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaArrowTrendUp,
  FaBell,
  FaBolt,
  FaBriefcase,
  FaBuilding,
  FaCalendarDays,
  FaChartLine,
  FaCheck,
  FaCircleCheck,
  FaClock,
  FaComments,
  FaFileInvoiceDollar,
  FaFolderOpen,
  FaRobot,
  FaShieldHalved,
  FaUsers,
  FaUserTie,
  FaWallet,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Navbar from "../components/layout/Navbar";
import PublicFooter from "../components/PublicFooter";
import "../styles/publicPages.css";

const Home = () => {
  const modules = [
    {
      icon: <FaFolderOpen />,
      title: "Project Management",
      text: "Plan projects, assign tasks, manage deadlines and track progress through one organized workspace.",
      link: "Explore Projects",
    },
    {
      icon: <FaUsers />,
      title: "Smart CRM",
      text: "Manage clients, leads, follow-ups and customer relationships without switching between different tools.",
      link: "Explore CRM",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Invoices & Finance",
      text: "Create professional invoices, organize billing information and keep revenue activity visible.",
      link: "Explore Finance",
    },
    {
      icon: <FaUserTie />,
      title: "Team Management",
      text: "Manage employees, attendance, roles and team responsibilities from a single business workspace.",
      link: "Explore Team",
    },
    {
      icon: <FaComments />,
      title: "Team Collaboration",
      text: "Keep teams connected with real-time communication, notifications and shared business workflows.",
      link: "Explore Collaboration",
    },
    {
      icon: <FaRobot />,
      title: "AI Business Assistant",
      text: "Write emails, create proposals, summarize meetings and generate useful business content using AI.",
      link: "Explore AI",
    },
  ];

  const businesses = [
    {
      icon: <FaBriefcase />,
      title: "Freelancers",
      text: "Manage clients, projects, invoices and daily tasks from one professional workspace.",
    },
    {
      icon: <FaBuilding />,
      title: "Agencies",
      text: "Coordinate multiple clients, project deadlines, teams and business activity clearly.",
    },
    {
      icon: <FaBolt />,
      title: "Startups",
      text: "Build organized workflows early and move faster with collaboration, analytics and AI.",
    },
    {
      icon: <FaChartLine />,
      title: "Growing Businesses",
      text: "Scale business operations with CRM, team management, finance and performance insights.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Create Workspace",
      text: "Set up your business workspace and organize the platform around your operations.",
    },
    {
      number: "02",
      title: "Add Your Team",
      text: "Invite employees and define roles, responsibilities and permissions.",
    },
    {
      number: "03",
      title: "Connect Your Work",
      text: "Create projects, clients, tasks, meetings and business workflows.",
    },
    {
      number: "04",
      title: "Automate with AI",
      text: "Use AI tools and reminders to reduce repetitive everyday work.",
    },
    {
      number: "05",
      title: "Track Growth",
      text: "Monitor revenue, productivity, projects and overall business performance.",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "One Unified Workspace",
      text: "Replace disconnected tools with one organized business platform.",
    },
    {
      number: "02",
      title: "Save Valuable Time",
      text: "Reduce repetitive work using smarter workflows and AI assistance.",
    },
    {
      number: "03",
      title: "Better Visibility",
      text: "Understand projects, clients, teams and performance from one dashboard.",
    },
    {
      number: "04",
      title: "Built to Scale",
      text: "Start simple and expand your workflow as your business grows.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="public-page home-public-page">
        {/* HERO */}
        <section className="public-section home-hero">
          <div className="home-hero-grid">
            <div className="home-hero-content">
              <div className="public-badge">
                <FaWandMagicSparkles />
                AI-POWERED BUSINESS OPERATING SYSTEM
              </div>

              <h1 className="public-title home-main-title">
                Run your entire
                <br />
                business from
                <br />
                <span>one smart workspace.</span>
              </h1>

              <p className="public-subtitle home-main-subtitle">
                Manage projects, clients, teams, invoices, meetings and
                business performance while AI helps automate everyday work
                and improve productivity.
              </p>

              <div className="home-hero-actions">
                <Link to="/register" className="home-primary-button">
                  Start for Free
                  <FaArrowRight />
                </Link>

                <Link to="/features" className="home-secondary-button">
                  Explore Platform
                </Link>
              </div>

              <div className="home-trust-list">
                <span>
                  <FaCircleCheck />
                  No credit card required
                </span>

                <span>
                  <FaCircleCheck />
                  Easy workspace setup
                </span>

                <span>
                  <FaCircleCheck />
                  Secure business access
                </span>
              </div>
            </div>

            {/* DASHBOARD PREVIEW */}
            <div className="home-dashboard-preview">
              <div className="home-floating-card home-floating-ai">
                <FaRobot />

                <div>
                  <small>AI Assistant</small>
                  <strong>3 smart insights</strong>
                </div>
              </div>

              <div className="home-floating-card home-floating-growth">
                <FaArrowTrendUp />

                <div>
                  <small>Monthly Growth</small>
                  <strong>+18.4%</strong>
                </div>
              </div>

              <div className="home-preview-window">
                <div className="home-preview-topbar">
                  <div className="preview-window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-url">
                    app.aibusiness.com/dashboard
                  </div>

                  <div className="preview-secure">✓</div>
                </div>

                <div className="home-preview-body">
                  <aside className="home-preview-sidebar">
                    <div className="home-preview-logo">AI</div>

                    <span className="active">
                      <FaChartLine />
                    </span>

                    <span>
                      <FaFolderOpen />
                    </span>

                    <span>
                      <FaUsers />
                    </span>

                    <span>
                      <FaWallet />
                    </span>

                    <span>
                      <FaCalendarDays />
                    </span>

                    <span>
                      <FaRobot />
                    </span>
                  </aside>

                  <main className="home-preview-main">
                    <div className="business-overview-header">
                      <div>
                        <span className="overview-label">
                          BUSINESS COMMAND CENTER
                        </span>

                        <h3>Good morning, Urvi 👋</h3>

                        <p>
                          Here&apos;s what&apos;s happening with your business
                          today.
                        </p>
                      </div>

                      <div className="overview-profile">
                        <div className="overview-notification">
                          <FaBell />
                          <span></span>
                        </div>

                        <div className="overview-avatar">UC</div>
                      </div>
                    </div>

                    <div className="overview-kpi-grid">
                      <article className="overview-kpi-card">
                        <div className="kpi-card-top">
                          <span>Total Revenue</span>

                          <div className="kpi-icon revenue">
                            <FaWallet />
                          </div>
                        </div>

                        <small>This month</small>

                        <div className="kpi-value-row">
                          <strong>₹4.82L</strong>
                          <span className="positive-growth">+18.4%</span>
                        </div>

                        <p>Compared with last month</p>
                      </article>

                      <article className="overview-kpi-card">
                        <div className="kpi-card-top">
                          <span>Active Clients</span>

                          <div className="kpi-icon clients">
                            <FaUsers />
                          </div>
                        </div>

                        <small>Current clients</small>

                        <div className="kpi-value-row">
                          <strong>128</strong>
                          <span className="positive-growth">+12</span>
                        </div>

                        <p>New clients this month</p>
                      </article>

                      <article className="overview-kpi-card">
                        <div className="kpi-card-top">
                          <span>Projects</span>

                          <div className="kpi-icon projects">
                            <FaFolderOpen />
                          </div>
                        </div>

                        <small>Active projects</small>

                        <div className="kpi-value-row">
                          <strong>24</strong>
                          <span className="positive-growth">92%</span>
                        </div>

                        <p>Overall completion rate</p>
                      </article>
                    </div>

                    <div className="overview-middle-grid">
                      <article className="overview-chart-card">
                        <div className="overview-card-header">
                          <div>
                            <strong>Revenue Overview</strong>
                            <small>Last 6 months</small>
                          </div>

                          <button type="button">View Report</button>
                        </div>

                        <div className="overview-chart-content">
                          <div className="chart-y-axis">
                            <span>₹6L</span>
                            <span>₹4L</span>
                            <span>₹2L</span>
                            <span>₹0</span>
                          </div>

                          <div className="chart-area">
                            <div className="overview-bars">
                              <div className="overview-bar-item">
                                <span style={{ height: "46%" }}></span>
                                <small>Mar</small>
                              </div>

                              <div className="overview-bar-item">
                                <span style={{ height: "58%" }}></span>
                                <small>Apr</small>
                              </div>

                              <div className="overview-bar-item">
                                <span style={{ height: "51%" }}></span>
                                <small>May</small>
                              </div>

                              <div className="overview-bar-item">
                                <span style={{ height: "70%" }}></span>
                                <small>Jun</small>
                              </div>

                              <div className="overview-bar-item">
                                <span style={{ height: "78%" }}></span>
                                <small>Jul</small>
                              </div>

                              <div className="overview-bar-item">
                                <span
                                  className="highlight-bar"
                                  style={{ height: "92%" }}
                                ></span>
                                <small>Aug</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="overview-activity-card">
                        <div className="overview-card-header">
                          <div>
                            <strong>Team Activity</strong>
                            <small>Live workspace updates</small>
                          </div>

                          <button type="button">View All</button>
                        </div>

                        <div className="activity-list">
                          <div className="activity-item">
                            <div className="activity-avatar blue">AK</div>

                            <div>
                              <strong>Project updated</strong>
                              <small>Marketing Website</small>
                            </div>

                            <span>✓</span>
                          </div>

                          <div className="activity-item">
                            <div className="activity-avatar purple">RM</div>

                            <div>
                              <strong>New client added</strong>
                              <small>Nexa Digital</small>
                            </div>

                            <span>+</span>
                          </div>

                          <div className="activity-item">
                            <div className="activity-avatar orange">SP</div>

                            <div>
                              <strong>Invoice paid</strong>
                              <small>₹42,500 received</small>
                            </div>

                            <span>₹</span>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div className="overview-bottom-grid">
                      <article className="overview-progress-card">
                        <div className="overview-card-header">
                          <div>
                            <strong>Project Performance</strong>
                            <small>Overall workspace progress</small>
                          </div>

                          <span className="performance-score">92%</span>
                        </div>

                        <div className="project-progress-row">
                          <div>
                            <span>Website Redesign</span>
                            <strong>82%</strong>
                          </div>

                          <div className="project-progress-bar">
                            <span style={{ width: "82%" }}></span>
                          </div>
                        </div>

                        <div className="project-progress-row">
                          <div>
                            <span>Mobile Application</span>
                            <strong>68%</strong>
                          </div>

                          <div className="project-progress-bar purple">
                            <span style={{ width: "68%" }}></span>
                          </div>
                        </div>
                      </article>

                      <article className="overview-ai-card">
                        <div className="overview-ai-icon">
                          <FaWandMagicSparkles />
                        </div>

                        <div>
                          <small>AI BUSINESS INSIGHT</small>

                          <strong>Revenue is trending upward</strong>

                          <p>
                            Your monthly revenue increased by 18.4%. Consider
                            prioritizing your highest-performing client segment.
                          </p>
                        </div>

                        <button type="button">
                          View AI Insights →
                        </button>
                      </article>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="home-trusted-section">
          <div className="public-section home-trusted-inner">
            <p>BUILT FOR MODERN TEAMS THAT WANT TO WORK SMARTER</p>

            <div className="home-trusted-logos">
              <span>NEXORA</span>
              <span>VERTEX</span>
              <span>FLOWLAB</span>
              <span>NOVAWORK</span>
              <span>BRIGHTLY</span>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="home-stats-section">
          <div className="public-section home-stats-grid">
            <article>
              <strong>10+</strong>
              <span>Business Modules</span>
            </article>

            <article>
              <strong>6+</strong>
              <span>AI Productivity Tools</span>
            </article>

            <article>
              <strong>360°</strong>
              <span>Business Visibility</span>
            </article>

            <article>
              <strong>24/7</strong>
              <span>Workspace Access</span>
            </article>
          </div>
        </section>

        {/* FEATURES PREVIEW */}
        <section className="public-section">
          <div className="home-section-heading">
            <div>
              <span>POWERFUL FEATURES</span>

              <h2>
                Everything you need to
                <br />
                <strong>run your business smarter.</strong>
              </h2>
            </div>

            <p>
              Manage projects, customers, teams, invoices, analytics and
              AI-powered productivity from one connected workspace.
            </p>
          </div>

          <div className="home-module-grid">
            {modules.map((module) => (
              <article className="home-module-card" key={module.title}>
                <div className="public-icon">{module.icon}</div>

                <h3>{module.title}</h3>

                <p>{module.text}</p>

                <Link to="/features">
                  {module.link}
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>

          <div className="home-preview-action">
            <Link to="/features">
              Explore All Features
              <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* SOLUTIONS PREVIEW */}
        <section className="home-business-section">
          <div className="public-section">
            <div className="features-section-heading centered">
              <span>BUSINESS SOLUTIONS</span>

              <h2>
                Designed for the way
                <br />
                <strong>different businesses work.</strong>
              </h2>

              <p>
                Whether you work independently or manage a growing team, AI
                Business adapts to your business workflow.
              </p>
            </div>

            <div className="home-business-grid">
              {businesses.map((business) => (
                <article className="home-business-card" key={business.title}>
                  <div className="home-business-icon">{business.icon}</div>

                  <h3>{business.title}</h3>

                  <p>{business.text}</p>

                  <Link to="/solutions">
                    View Solution
                    <FaArrowRight />
                  </Link>
                </article>
              ))}
            </div>

            <div className="home-preview-action">
              <Link to="/solutions">
                Explore All Solutions
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING PREVIEW */}
        <section className="public-section">
          <div className="features-section-heading centered">
            <span>SIMPLE PRICING</span>

            <h2>
              Start free.
              <br />
              <strong>Upgrade when you grow.</strong>
            </h2>

            <p>
              Flexible plans designed for individuals, growing teams and
              advanced business operations.
            </p>
          </div>

          <div className="home-pricing-preview">
            <article className="home-price-card">
              <span>STARTER</span>

              <h3>For individuals</h3>

              <div className="home-price">
                ₹0
                <small>/month</small>
              </div>

              <p>
                Essential tools for freelancers and professionals getting
                started.
              </p>

              <ul>
                <li>
                  <FaCheck />
                  3 Projects
                </li>

                <li>
                  <FaCheck />
                  Task Management
                </li>

                <li>
                  <FaCheck />
                  Basic CRM
                </li>

                <li>
                  <FaCheck />
                  Business Calendar
                </li>
              </ul>

              <Link to="/pricing">
                View Starter
                <FaArrowRight />
              </Link>
            </article>

            <article className="home-price-card home-price-featured">
              <div className="home-price-popular">
                MOST POPULAR
              </div>

              <span>PROFESSIONAL</span>

              <h3>For growing teams</h3>

              <div className="home-price">
                ₹799
                <small>/month</small>
              </div>

              <p>
                Advanced business tools with AI, CRM, analytics and
                collaboration.
              </p>

              <ul>
                <li>
                  <FaCheck />
                  Unlimited Projects
                </li>

                <li>
                  <FaCheck />
                  Advanced CRM
                </li>

                <li>
                  <FaCheck />
                  AI Assistant
                </li>

                <li>
                  <FaCheck />
                  Business Analytics
                </li>
              </ul>

              <Link to="/pricing">
                Choose Professional
                <FaArrowRight />
              </Link>
            </article>

            <article className="home-price-card">
              <span>BUSINESS</span>

              <h3>For advanced teams</h3>

              <div className="home-price">
                ₹1,999
                <small>/month</small>
              </div>

              <p>
                Advanced administration, permissions and business control.
              </p>

              <ul>
                <li>
                  <FaCheck />
                  Unlimited Team Members
                </li>

                <li>
                  <FaCheck />
                  Admin Panel
                </li>

                <li>
                  <FaCheck />
                  Advanced Permissions
                </li>

                <li>
                  <FaCheck />
                  Advanced Reports
                </li>
              </ul>

              <Link to="/pricing">
                View Business
                <FaArrowRight />
              </Link>
            </article>
          </div>

          <div className="home-preview-action">
            <Link to="/pricing">
              Compare All Plans
              <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* AI ASSISTANT */}
        <section className="public-section">
          <div className="home-ai-box">
            <div className="home-ai-content">
              <span className="features-section-small-label">
                INTELLIGENCE BUILT INTO YOUR WORKFLOW
              </span>

              <h2>
                Meet your
                <br />
                <strong>AI Business Assistant.</strong>
              </h2>

              <p>
                Turn everyday business work into faster workflows. Generate
                content, summarize information and get useful suggestions
                without leaving your workspace.
              </p>

              <div className="home-ai-capability-grid">
                <span>
                  <FaCheck />
                  Professional Email Writing
                </span>

                <span>
                  <FaCheck />
                  Proposal Generation
                </span>

                <span>
                  <FaCheck />
                  Meeting Summaries
                </span>

                <span>
                  <FaCheck />
                  Task Suggestions
                </span>

                <span>
                  <FaCheck />
                  SEO Content
                </span>

                <span>
                  <FaCheck />
                  Business Insights
                </span>
              </div>

              <Link to="/features">
                Discover AI Features
                <FaArrowRight />
              </Link>
            </div>

            <div className="home-ai-demo">
              <div className="home-ai-demo-header">
                <div className="home-ai-demo-icon">
                  <FaRobot />
                </div>

                <div>
                  <small>AI Business Assistant</small>
                  <strong>How can I help you today?</strong>
                </div>
              </div>

              <div className="home-ai-prompt">
                Create a professional follow-up email for a client who received
                our proposal three days ago.
              </div>

              <div className="home-ai-response">
                <span>AI GENERATED RESPONSE</span>

                <h3>
                  Subject: Following up on our proposal
                </h3>

                <p>
                  Hi Alex, I wanted to follow up regarding the proposal we
                  shared earlier this week. Please let me know if you have any
                  questions or would like to discuss the next steps.
                </p>

                <div>
                  <small>Professional</small>
                  <small>Client Follow-up</small>
                  <small>Ready to Send</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="home-workflow-section">
          <div className="public-section">
            <div className="features-section-heading centered">
              <span>HOW IT WORKS</span>

              <h2>
                From setup to growth
                <br />
                <strong>in five simple steps.</strong>
              </h2>

              <p>
                Start with a workspace and gradually connect every important
                part of your business.
              </p>
            </div>

            <div className="home-workflow-grid">
              {workflow.map((item, index) => (
                <article className="home-workflow-card" key={item.number}>
                  <div className="home-workflow-number">
                    {item.number}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  {index !== workflow.length - 1 && (
                    <FaArrowRight className="home-workflow-arrow" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="public-section">
          <div className="home-benefits-layout">
            <div>
              <span className="features-section-small-label">
                WHY AI BUSINESS
              </span>

              <h2>
                Less busywork.
                <br />
                More meaningful growth.
              </h2>

              <p>
                Give your team the tools needed to stay organized,
                collaborate effectively and focus on work that moves the
                business forward.
              </p>

              <Link to="/solutions">
                Explore Business Solutions
                <FaArrowRight />
              </Link>
            </div>

            <div className="home-benefits-grid">
              {benefits.map((benefit) => (
                <article key={benefit.number}>
                  <span>{benefit.number}</span>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className="home-business-section">
          <div className="public-section">
            <div className="home-section-heading">
              <div>
                <span>BUILT FOR TRUST</span>

                <h2>
                  Your workspace deserves
                  <br />
                  <strong>serious protection.</strong>
                </h2>
              </div>

              <p>
                Secure authentication, role-based permissions and structured
                business workflows help keep your organization controlled.
              </p>
            </div>

            <div className="home-module-grid">
              <article className="home-module-card">
                <div className="public-icon">
                  <FaShieldHalved />
                </div>

                <h3>Secure Authentication</h3>

                <p>
                  Protect account access with modern login and verification
                  workflows.
                </p>
              </article>

              <article className="home-module-card">
                <div className="public-icon">
                  <FaUsers />
                </div>

                <h3>Role-based Access</h3>

                <p>
                  Define what administrators, managers and team members can
                  access.
                </p>
              </article>

              <article className="home-module-card">
                <div className="public-icon">
                  <FaClock />
                </div>

                <h3>Always Available</h3>

                <p>
                  Access your business workspace whenever your team needs it.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="public-section">
          <div className="public-cta">
            <div>
              <span className="features-section-small-label">
                YOUR NEXT WORKSPACE
              </span>

              <h2>
                Ready to simplify the way
                <br />
                you run your business?
              </h2>

              <p>
                Start building a smarter, more organized and AI-powered
                business workspace today.
              </p>
            </div>

            <Link to="/register">
              Create Free Account
              <FaArrowRight />
            </Link>
          </div>
        </section>

        <PublicFooter />
      </div>
    </>
  );
};

export default Home;