import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaArrowTrendUp,
  FaBolt,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaCheck,
  FaCircleCheck,
  FaCode,
  FaFileInvoiceDollar,
  FaFolderOpen,
  FaLightbulb,
  FaRobot,
  FaRocket,
  FaShieldHalved,
  FaStore,
  FaUsers,
  FaUserTie,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Navbar from "../components/layout/Navbar";
import PublicFooter from "../components/PublicFooter";
import "../styles/publicPages.css";

const Solutions = () => {
  const businessSolutions = [
    {
      icon: <FaBriefcase />,
      label: "INDEPENDENT PROFESSIONALS",
      title: "Freelancers",
      description:
        "Manage client work, projects, invoices, follow-ups and daily priorities without relying on multiple disconnected tools.",
      challenges: [
        "Too many productivity tools",
        "Manual client follow-ups",
        "Scattered project information",
      ],
      benefits: [
        "Centralized client workspace",
        "Project and task tracking",
        "Professional invoicing",
        "AI writing assistance",
      ],
      accent: "blue",
    },
    {
      icon: <FaBuilding />,
      label: "CLIENT-FOCUSED TEAMS",
      title: "Agencies",
      description:
        "Bring client projects, deadlines, team workload and communication into one structured agency operations workspace.",
      challenges: [
        "Multiple client projects",
        "Limited workload visibility",
        "Follow-ups spread across tools",
      ],
      benefits: [
        "Multi-project visibility",
        "CRM and lead management",
        "Team activity tracking",
        "Project analytics",
      ],
      accent: "purple",
    },
    {
      icon: <FaRocket />,
      label: "FAST-GROWING TEAMS",
      title: "Startups",
      description:
        "Build repeatable workflows early so your team can move quickly without losing visibility as operations grow.",
      challenges: [
        "Rapidly changing priorities",
        "Unstructured team workflows",
        "Limited business visibility",
      ],
      benefits: [
        "Flexible project workflows",
        "Centralized collaboration",
        "AI productivity tools",
        "Growth analytics",
      ],
      accent: "orange",
    },
    {
      icon: <FaStore />,
      label: "MODERN OPERATIONS",
      title: "Small Businesses",
      description:
        "Connect customers, employees, tasks, finance and day-to-day operations in one practical business management system.",
      challenges: [
        "Manual daily administration",
        "Disconnected customer records",
        "Limited performance tracking",
      ],
      benefits: [
        "Customer management",
        "Employee workflows",
        "Invoice management",
        "Business reporting",
      ],
      accent: "green",
    },
  ];

  const capabilities = [
    {
      icon: <FaFolderOpen />,
      title: "Projects",
      text: "Plan work, assign tasks and monitor delivery.",
    },
    {
      icon: <FaUsers />,
      title: "CRM",
      text: "Organize clients, leads and follow-up activity.",
    },
    {
      icon: <FaUserTie />,
      title: "Teams",
      text: "Manage employees, roles and responsibilities.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Finance",
      text: "Create invoices and monitor revenue activity.",
    },
    {
      icon: <FaRobot />,
      title: "AI",
      text: "Speed up writing, summaries and business tasks.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      text: "Understand business performance with visual insights.",
    },
  ];

  const journey = [
    {
      number: "01",
      title: "Capture Information",
      text: "Bring clients, projects, tasks and people into one connected workspace.",
    },
    {
      number: "02",
      title: "Build Your Workflow",
      text: "Define ownership, priorities, deadlines and repeatable processes.",
    },
    {
      number: "03",
      title: "Collaborate",
      text: "Connect communication and responsibilities directly to work.",
    },
    {
      number: "04",
      title: "Automate",
      text: "Use AI, reminders and notifications to reduce manual effort.",
    },
    {
      number: "05",
      title: "Measure & Improve",
      text: "Use reports and analytics to understand what is working.",
    },
  ];

  const outcomes = [
    {
      number: "01",
      title: "Better Organization",
      text: "Keep important business work structured instead of scattered.",
    },
    {
      number: "02",
      title: "Stronger Visibility",
      text: "Understand projects, clients and team activity in real time.",
    },
    {
      number: "03",
      title: "Faster Execution",
      text: "Reduce manual work with connected workflows and AI support.",
    },
    {
      number: "04",
      title: "Scalable Operations",
      text: "Create systems that remain useful as your business grows.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="public-page solutions-page">

        {/* HERO */}
        <section className="public-section solutions-premium-hero">
          <div className="solutions-hero-inner">

            <div className="public-badge">
              <FaWandMagicSparkles />
              BUILT FOR MODERN BUSINESS WORKFLOWS
            </div>

            <h1 className="public-title">
              Different businesses.
              <br />
              Different challenges.
              <br />
              <span>One flexible platform.</span>
            </h1>

            <p className="public-subtitle">
              Whether you work independently or lead a growing team, create a
              business workspace that adapts to your projects, customers,
              people and daily operations.
            </p>

            <div className="features-hero-buttons">
              <Link to="/register" className="features-primary-button">
                Build Your Workspace
                <FaArrowRight />
              </Link>

              <Link to="/features" className="features-secondary-button">
                Explore Features
              </Link>
            </div>

            <div className="features-trust-row">
              <span>
                <FaCircleCheck />
                Flexible workflows
              </span>

              <span>
                <FaCircleCheck />
                Connected platform
              </span>

              <span>
                <FaCircleCheck />
                Built to scale
              </span>
            </div>

          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="public-section">

          <div className="features-section-heading centered">
            <span>WHO WE HELP</span>

            <h2>
              Solutions designed around
              <br />
              <strong>your business stage.</strong>
            </h2>

            <p>
              The platform gives each type of business the structure it needs
              without forcing every team into the same workflow.
            </p>
          </div>

          <div className="solutions-premium-grid">
            {businessSolutions.map((solution) => (
              <article
                key={solution.title}
                className={`solutions-premium-card solution-${solution.accent}`}
              >
                <div className="solutions-premium-card-head">
                  <div>{solution.icon}</div>
                  <span>{solution.label}</span>
                </div>

                <h3>{solution.title}</h3>
                <p>{solution.description}</p>

                <div className="solution-detail-grid">

                  <div>
                    <span className="solution-list-title challenge-title">
                      COMMON CHALLENGES
                    </span>

                    <ul className="solution-challenge-list">
                      {solution.challenges.map((item) => (
                        <li key={item}>
                          <span></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="solution-list-title">
                      HOW WE HELP
                    </span>

                    <ul>
                      {solution.benefits.map((item) => (
                        <li key={item}>
                          <FaCheck />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <Link to="/register">
                  Start for {solution.title}
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>

        </section>

        {/* OLD WAY / NEW WAY */}
        <section className="solutions-transformation-section">
          <div className="public-section">

            <div className="features-section-heading centered">
              <span>FROM CHAOS TO CLARITY</span>

              <h2>
                Replace disconnected tools with
                <br />
                <strong>one business operating system.</strong>
              </h2>

              <p>
                Bring important business activity together and make daily work
                easier to understand.
              </p>
            </div>

            <div className="solutions-premium-comparison">

              <div className="solutions-old-way">
                <span>THE OLD WAY</span>

                <h3>
                  Work scattered across apps, spreadsheets and messages.
                </h3>

                <ul>
                  <li>Separate project tools</li>
                  <li>Customer data stored everywhere</li>
                  <li>Manual reminders and follow-ups</li>
                  <li>Limited team visibility</li>
                  <li>Reports prepared manually</li>
                </ul>
              </div>

              <div className="solutions-transform-arrow">
                <FaArrowRight />
              </div>

              <div className="solutions-new-way">
                <span>THE AI BUSINESS WAY</span>

                <h3>
                  One connected workspace built around your business.
                </h3>

                <ul>
                  <li>
                    <FaCheck />
                    Connected projects and tasks
                  </li>

                  <li>
                    <FaCheck />
                    Centralized CRM
                  </li>

                  <li>
                    <FaCheck />
                    Smart reminders
                  </li>

                  <li>
                    <FaCheck />
                    Real-time team visibility
                  </li>

                  <li>
                    <FaCheck />
                    AI-assisted productivity
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="public-section">

          <div className="solutions-premium-capability-head">

            <div>
              <span>ONE CONNECTED PLATFORM</span>

              <h2>
                Connect every important
                <br />
                <strong>part of your business.</strong>
              </h2>
            </div>

            <p>
              Build a shared workspace where projects, customers, employees,
              finance and insights work together.
            </p>

          </div>

          <div className="solutions-premium-capabilities">

            {capabilities.map((item) => (
              <article key={item.title}>
                <div>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}

          </div>
        </section>

        {/* COMMAND CENTER */}
        <section className="solutions-workspace-showcase">
          <div className="public-section solutions-workspace-grid">

            <div className="solutions-workspace-copy">
              <span>BUSINESS COMMAND CENTER</span>

              <h2>
                See the whole business
                <br />
                <strong>without losing the details.</strong>
              </h2>

              <p>
                Give your team one place to understand current work, customer
                activity, team performance and business priorities.
              </p>

              <div className="solutions-workspace-points">
                <span>
                  <FaCheck />
                  Live project visibility
                </span>

                <span>
                  <FaCheck />
                  Client activity
                </span>

                <span>
                  <FaCheck />
                  Team productivity
                </span>

                <span>
                  <FaCheck />
                  Revenue overview
                </span>
              </div>

              <Link to="/register">
                Create Your Workspace
                <FaArrowRight />
              </Link>
            </div>

            <div className="solutions-mini-dashboard">

              <div className="solutions-mini-header">
                <div>
                  <small>BUSINESS WORKSPACE</small>
                  <h3>Tuesday Overview</h3>
                </div>

                <span>LIVE</span>
              </div>

              <div className="solutions-mini-stats">
                <article>
                  <small>Revenue</small>
                  <strong>₹4.82L</strong>
                  <span>+18.4%</span>
                </article>

                <article>
                  <small>Projects</small>
                  <strong>24</strong>
                  <span>8 active</span>
                </article>

                <article>
                  <small>Clients</small>
                  <strong>128</strong>
                  <span>+12 new</span>
                </article>
              </div>

              <div className="solutions-mini-progress">
                <div>
                  <span>Overall team productivity</span>
                  <strong>86%</strong>
                </div>

                <div className="solutions-progress-line">
                  <span></span>
                </div>
              </div>

              <div className="solution-dashboard-projects">
                <article>
                  <div>
                    <span>Website Redesign</span>
                    <small>Project Progress</small>
                  </div>

                  <strong>82%</strong>
                </article>

                <article>
                  <div>
                    <span>CRM Implementation</span>
                    <small>Project Progress</small>
                  </div>

                  <strong>68%</strong>
                </article>
              </div>

              <div className="solutions-ai-insight">
                <FaRobot />

                <div>
                  <small>AI BUSINESS INSIGHT</small>
                  <strong>
                    6 high-value leads need follow-up today.
                  </strong>
                </div>

                <span>View →</span>
              </div>

            </div>
          </div>
        </section>

        {/* AI */}
        <section className="public-section">

          <div className="solution-ai-panel">

            <div className="solution-ai-visual">

              <div className="solution-ai-visual-head">
                <div className="solution-ai-main-icon">
                  <FaRobot />
                </div>

                <div>
                  <small>AI BUSINESS ASSISTANT</small>
                  <h3>What should we focus on today?</h3>
                </div>
              </div>

              <div className="solution-ai-query">
                Analyze current activity and suggest today&apos;s priorities.
              </div>

              <div className="solution-ai-answer">
                <span>
                  <FaWandMagicSparkles />
                  TODAY&apos;S PRIORITIES
                </span>

                <article>
                  <strong>01</strong>
                  <div>
                    <h4>Follow up with high-value leads</h4>
                    <p>Several leads recently opened your proposal.</p>
                  </div>
                </article>

                <article>
                  <strong>02</strong>
                  <div>
                    <h4>Review active project deadlines</h4>
                    <p>Two important tasks are due tomorrow.</p>
                  </div>
                </article>

                <article>
                  <strong>03</strong>
                  <div>
                    <h4>Send pending invoices</h4>
                    <p>Three approved invoices are ready to send.</p>
                  </div>
                </article>

              </div>
            </div>

            <div className="solution-ai-copy">
              <span className="features-section-small-label">
                AI FOR EVERYDAY DECISIONS
              </span>

              <h2>
                Turn business activity into
                <br />
                <strong>clear next actions.</strong>
              </h2>

              <p>
                Use AI to help identify priorities, improve communication,
                generate content and simplify repetitive work.
              </p>

              <div className="solution-ai-benefits">
                <span>
                  <FaLightbulb />
                  Smart task suggestions
                </span>

                <span>
                  <FaArrowTrendUp />
                  Business insights
                </span>

                <span>
                  <FaCode />
                  Code explanation
                </span>

                <span>
                  <FaBolt />
                  Faster content creation
                </span>
              </div>

              <Link to="/features">
                Explore AI Features
                <FaArrowRight />
              </Link>
            </div>

          </div>
        </section>

        {/* JOURNEY */}
        <section className="solutions-journey-section">
          <div className="public-section">

            <div className="features-section-heading centered">
              <span>YOUR OPERATING FLOW</span>

              <h2>
                A clear system from
                <br />
                <strong>information to improvement.</strong>
              </h2>
            </div>

            <div className="solution-journey-grid">
              {journey.map((item, index) => (
                <article key={item.number}>
                  <div className="solution-journey-number">
                    {item.number}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  {index !== journey.length - 1 && (
                    <FaArrowRight />
                  )}
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* OUTCOMES */}
        <section className="public-section">

          <div className="features-section-heading centered">
            <span>BUSINESS OUTCOMES</span>

            <h2>
              Build a business that is
              <br />
              <strong>easier to understand and manage.</strong>
            </h2>
          </div>

          <div className="solutions-outcome-premium-grid">
            {outcomes.map((outcome) => (
              <article key={outcome.number}>
                <strong>{outcome.number}</strong>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>

        </section>

        {/* SECURITY */}
        <section className="solution-security-section">
          <div className="public-section solution-security-inner">

            <div>
              <FaShieldHalved />

              <section>
                <span>BUILT FOR CONTROL</span>
                <h3>
                  Secure access with structured roles and permissions.
                </h3>
              </section>
            </div>

            <Link to="/features">
              Explore Security
              <FaArrowRight />
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="public-section">

          <div className="public-cta solutions-premium-cta">

            <div>
              <span className="features-section-small-label">
                BUILD YOUR WORKSPACE
              </span>

              <h2>
                Choose the tools your business
                <br />
                needs today. Scale tomorrow.
              </h2>

              <p>
                Create a flexible business management workspace that grows
                alongside your operations.
              </p>
            </div>

            <Link to="/register">
              Start for Free
              <FaArrowRight />
            </Link>

          </div>
        </section>

        <PublicFooter />

      </div>
    </>
  );
};

export default Solutions;