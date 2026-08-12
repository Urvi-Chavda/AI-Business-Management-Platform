import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBell,
  FaBolt,
  FaCalendarDays,
  FaChartLine,
  FaCheck,
  FaCircleCheck,
  FaComments,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaFolderOpen,
  FaGaugeHigh,
  FaGear,
  FaLock,
  FaRobot,
  FaShieldHalved,
  FaUserCheck,
  FaUsers,
  FaUserTie,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Navbar from "../components/layout/Navbar";
import PublicFooter from "../components/PublicFooter";
import "../styles/publicPages.css";

const Features = () => {
  const coreFeatures = [
    {
      icon: <FaGaugeHigh />,
      tag: "OVERVIEW",
      title: "Smart Dashboard",
      description:
        "See revenue, projects, clients, tasks and team activity from one intelligent business dashboard.",
      points: [
        "Business statistics",
        "Revenue overview",
        "Team activity",
        "Quick insights",
      ],
    },
    {
      icon: <FaFolderOpen />,
      tag: "PRODUCTIVITY",
      title: "Project Management",
      description:
        "Plan projects, assign work, track deadlines and manage visual workflows for your entire team.",
      points: [
        "Create projects",
        "Task management",
        "Deadlines",
        "Kanban board",
      ],
    },
    {
      icon: <FaUsers />,
      tag: "CUSTOMERS",
      title: "CRM Workspace",
      description:
        "Manage clients, leads, follow-ups and customer relationships from one connected workspace.",
      points: [
        "Client management",
        "Lead tracking",
        "Follow-up reminders",
        "Customer records",
      ],
    },
    {
      icon: <FaFileInvoiceDollar />,
      tag: "FINANCE",
      title: "Smart Invoicing",
      description:
        "Create professional invoices, organize billing information and track business payments.",
      points: [
        "Generate invoices",
        "PDF download",
        "Payment status",
        "Billing records",
      ],
    },
    {
      icon: <FaUserTie />,
      tag: "PEOPLE",
      title: "Team Management",
      description:
        "Manage employees, attendance, roles and responsibilities from one structured workspace.",
      points: [
        "Employees",
        "Attendance",
        "Roles",
        "Permissions",
      ],
    },
    {
      icon: <FaComments />,
      tag: "COLLABORATION",
      title: "Real-time Chat",
      description:
        "Keep business communication connected with fast conversations and shared team workflows.",
      points: [
        "Team conversations",
        "Real-time messages",
        "Workspace communication",
        "Fast collaboration",
      ],
    },
    {
      icon: <FaBell />,
      tag: "AUTOMATION",
      title: "Smart Notifications",
      description:
        "Stay informed about tasks, deadlines, meetings and important business activity.",
      points: [
        "Email notifications",
        "Push notifications",
        "Task alerts",
        "Deadline reminders",
      ],
    },
    {
      icon: <FaCalendarDays />,
      tag: "PLANNING",
      title: "Business Calendar",
      description:
        "Organize meetings, reminders, deadlines and scheduled business activity in one place.",
      points: [
        "Meeting planning",
        "Task reminders",
        "Deadline visibility",
        "Schedule management",
      ],
    },
    {
      icon: <FaChartLine />,
      tag: "INTELLIGENCE",
      title: "Analytics & Reports",
      description:
        "Turn business activity into visual insights that help you understand performance and growth.",
      points: [
        "Interactive charts",
        "Business reports",
        "Performance tracking",
        "Growth insights",
      ],
    },
  ];

  const aiFeatures = [
    {
      icon: <FaComments />,
      title: "Email Writing",
      text: "Create clear and professional business emails in seconds.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Proposal Writing",
      text: "Generate structured client proposals with AI assistance.",
    },
    {
      icon: <FaCalendarDays />,
      title: "Meeting Summary",
      text: "Turn meeting notes into concise summaries and action points.",
    },
    {
      icon: <FaBolt />,
      title: "Task Suggestions",
      text: "Get intelligent recommendations for what your team should do next.",
    },
    {
      icon: <FaChartLine />,
      title: "SEO Content",
      text: "Generate content ideas designed for better online visibility.",
    },
    {
      icon: <FaWandMagicSparkles />,
      title: "Blog Writing",
      text: "Create useful blog drafts and content ideas faster.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Capture",
      text: "Bring projects, clients, tasks and business information into one workspace.",
    },
    {
      number: "02",
      title: "Organize",
      text: "Structure work with owners, priorities, deadlines and workflows.",
    },
    {
      number: "03",
      title: "Collaborate",
      text: "Connect employees and communication directly with ongoing work.",
    },
    {
      number: "04",
      title: "Automate",
      text: "Use reminders, notifications and AI to reduce repetitive work.",
    },
    {
      number: "05",
      title: "Improve",
      text: "Use analytics and reports to understand performance and grow smarter.",
    },
  ];

  const securityFeatures = [
    {
      icon: <FaLock />,
      title: "Secure Authentication",
      text: "Protect user accounts through structured login and verification workflows.",
    },
    {
      icon: <FaUserCheck />,
      title: "Role-based Permissions",
      text: "Control platform access based on user responsibilities and roles.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Controlled Workspace",
      text: "Keep important business areas available only to authorized users.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="public-page features-page">

        {/* HERO */}

        <section className="public-section features-premium-hero">
          <div className="features-premium-hero-content">

            <div className="public-badge">
              <FaWandMagicSparkles />
              POWERFUL FEATURES. ONE CONNECTED PLATFORM.
            </div>

            <h1 className="public-title">
              Powerful tools for
              <br />
              every part of your
              <br />
              <span>business workflow.</span>
            </h1>

            <p className="public-subtitle">
              From projects and customers to teams, finance, analytics and AI,
              everything works together to give you a clearer and more
              efficient way to manage your business.
            </p>

            <div className="features-hero-buttons">
              <Link
                to="/register"
                className="features-primary-button"
              >
                Start for Free
                <FaArrowRight />
              </Link>

              <Link
                to="/solutions"
                className="features-secondary-button"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="features-trust-row">
              <span>
                <FaCircleCheck />
                Connected workspace
              </span>

              <span>
                <FaCircleCheck />
                AI-powered tools
              </span>

              <span>
                <FaCircleCheck />
                Built for growing teams
              </span>
            </div>

          </div>
        </section>

        {/* STATS */}

        <section className="features-premium-stats">
          <div className="public-section features-premium-stat-grid">

            <article>
              <strong>10+</strong>
              <span>Core Business Modules</span>
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
              <strong>1</strong>
              <span>Unified Workspace</span>
            </article>

          </div>
        </section>

        {/* CORE FEATURES */}

        <section className="public-section">

          <div className="features-section-heading centered">
            <span>CORE PLATFORM</span>

            <h2>
              Everything you need to
              <br />
              <strong>run work more efficiently.</strong>
            </h2>

            <p>
              Each module solves a different business challenge while sharing
              information across the same connected platform.
            </p>
          </div>

          <div className="features-premium-grid">

            {coreFeatures.map((feature) => (
              <article
                className="features-premium-card"
                key={feature.title}
              >
                <div className="features-premium-icon">
                  {feature.icon}
                </div>

                <span className="feature-card-tag">
                  {feature.tag}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>
                      <FaCheck />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

          </div>
        </section>

        {/* PROJECT WORKSPACE */}

        <section className="features-showcase-section">
          <div className="public-section features-showcase-layout">

            <div className="features-showcase-content">

              <span className="features-section-small-label">
                PROJECT WORKSPACE
              </span>

              <h2>
                Turn complex work into a
                <br />
                <strong>clear visual workflow.</strong>
              </h2>

              <p>
                Keep tasks, priorities and progress visible so your team
                instantly understands what is planned, in progress and
                completed.
              </p>

              <div className="features-showcase-points">
                <span>
                  <FaCircleCheck />
                  Visual Kanban workflow
                </span>

                <span>
                  <FaCircleCheck />
                  Project progress tracking
                </span>

                <span>
                  <FaCircleCheck />
                  Team task ownership
                </span>

                <span>
                  <FaCircleCheck />
                  Deadline management
                </span>
              </div>

              <Link
                to="/register"
                className="feature-inline-link"
              >
                Create Your Workspace
                <FaArrowRight />
              </Link>

            </div>

            <div className="features-demo-board">

              <div className="features-demo-head">
                <div>
                  <small>PROJECT WORKSPACE</small>
                  <h3>Website Redesign</h3>
                </div>

                <span>78% Complete</span>
              </div>

              <div className="features-demo-columns">

                <div>
                  <span>TO DO · 3</span>

                  <article>
                    <small>DESIGN</small>
                    <strong>Homepage concepts</strong>
                    <p>Due Aug 14</p>
                  </article>

                  <article>
                    <small>CONTENT</small>
                    <strong>Write feature copy</strong>
                    <p>Due Aug 15</p>
                  </article>
                </div>

                <div>
                  <span>IN PROGRESS · 2</span>

                  <article>
                    <small>DEVELOPMENT</small>
                    <strong>Dashboard UI</strong>
                    <p>Assigned to Team</p>
                  </article>

                  <article>
                    <small>CRM</small>
                    <strong>Client workflow</strong>
                    <p>High priority</p>
                  </article>
                </div>

                <div>
                  <span>COMPLETED · 4</span>

                  <article>
                    <small>RESEARCH</small>
                    <strong>User requirements</strong>
                    <p>Completed</p>
                  </article>

                  <article>
                    <small>PLANNING</small>
                    <strong>Project structure</strong>
                    <p>Completed</p>
                  </article>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* AI FEATURES */}

        <section className="features-premium-ai">
          <div className="public-section">

            <div className="features-premium-ai-head">

              <div>
                <span>AI PRODUCTIVITY SUITE</span>

                <h2>
                  AI that works where
                  <br />
                  <strong>your business works.</strong>
                </h2>

                <p>
                  AI tools are built directly into your workspace so your team
                  can move from idea to finished work faster.
                </p>
              </div>

              <div className="features-premium-ai-label">
                <FaRobot />
                AI Assistant
              </div>

            </div>

            <div className="features-premium-ai-grid">

              {aiFeatures.map((feature) => (
                <article key={feature.title}>

                  <div>
                    {feature.icon}
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>

                  <span className="ai-feature-arrow">
                    <FaArrowRight />
                  </span>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* WORKFLOW */}

        <section className="public-section">

          <div className="features-section-heading centered">
            <span>CONNECTED WORKFLOW</span>

            <h2>
              One continuous flow from
              <br />
              <strong>planning to performance.</strong>
            </h2>

            <p>
              Connect the entire business lifecycle in one organized system.
            </p>
          </div>

          <div className="features-premium-workflow">

            {workflow.map((item, index) => (
              <article key={item.number}>

                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {index !== workflow.length - 1 && (
                  <FaArrowRight />
                )}

              </article>
            ))}

          </div>
        </section>

        {/* ADMIN + PAYMENT */}

        <section className="features-control-section">
          <div className="public-section">

            <div className="features-section-heading centered">
              <span>BUSINESS CONTROL</span>

              <h2>
                Built for users.
                <br />
                <strong>Designed for administrators too.</strong>
              </h2>

              <p>
                Manage access, subscriptions and important platform activity
                through structured administration tools.
              </p>
            </div>

            <div className="features-control-grid">

              <article className="features-control-card">

                <div className="features-control-icon">
                  <FaGear />
                </div>

                <div>
                  <span>ADMIN PANEL</span>

                  <h3>Manage your business environment.</h3>

                  <p>
                    Give administrators the tools needed to manage users,
                    permissions and subscription access.
                  </p>

                  <div className="features-control-points">
                    <span>
                      <FaCheck />
                      User management
                    </span>

                    <span>
                      <FaCheck />
                      Permission control
                    </span>

                    <span>
                      <FaCheck />
                      Subscription management
                    </span>
                  </div>
                </div>

              </article>

              <article className="features-control-card">

                <div className="features-control-icon payment-icon">
                  <FaCreditCard />
                </div>

                <div>
                  <span>PAYMENTS</span>

                  <h3>Flexible payment experience.</h3>

                  <p>
                    Support modern subscription and payment workflows with
                    professional payment integrations.
                  </p>

                  <div className="features-control-points">
                    <span>
                      <FaCheck />
                      Stripe integration
                    </span>

                    <span>
                      <FaCheck />
                      Razorpay integration
                    </span>

                    <span>
                      <FaCheck />
                      Subscription workflow
                    </span>
                  </div>
                </div>

              </article>

            </div>
          </div>
        </section>

        {/* SECURITY */}

        <section className="public-section">

          <div className="features-security-layout">

            <div className="features-security-intro">

              <span className="features-section-small-label">
                SECURITY & ACCESS
              </span>

              <h2>
                Built with control
                <br />
                <strong>at every level.</strong>
              </h2>

              <p>
                Keep business information structured with secure account
                access and clearly defined user responsibilities.
              </p>

              <Link to="/register">
                Start Securely
                <FaArrowRight />
              </Link>

            </div>

            <div className="features-security-grid">

              {securityFeatures.map((feature) => (
                <article key={feature.title}>

                  <div>
                    {feature.icon}
                  </div>

                  <section>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </section>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* BENEFITS */}

        <section className="public-section">

          <div className="features-premium-benefits">

            <div>
              <span>THE BIGGER PICTURE</span>

              <h2>
                More than features.
                <br />
                A better way to work.
              </h2>

              <p>
                The real value comes from connecting every feature into one
                business system.
              </p>
            </div>

            <div>

              <article>
                <FaCheck />

                <div>
                  <h3>Less tool switching</h3>

                  <p>
                    Keep projects, CRM, teams, finance and analytics connected.
                  </p>
                </div>
              </article>

              <article>
                <FaCheck />

                <div>
                  <h3>Better visibility</h3>

                  <p>
                    Understand important business activity from one dashboard.
                  </p>
                </div>
              </article>

              <article>
                <FaCheck />

                <div>
                  <h3>Faster execution</h3>

                  <p>
                    Reduce repetitive work with AI and connected workflows.
                  </p>
                </div>
              </article>

              <article>
                <FaCheck />

                <div>
                  <h3>Built to grow</h3>

                  <p>
                    Expand your workspace as your business grows.
                  </p>
                </div>
              </article>

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="public-section">

          <div className="public-cta features-premium-cta">

            <div>
              <span className="features-section-small-label">
                EXPLORE THE PLATFORM
              </span>

              <h2>
                Your business deserves more
                <br />
                than disconnected tools.
              </h2>

              <p>
                Create one intelligent workspace for projects, customers,
                teams, finance and AI-powered productivity.
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

export default Features;