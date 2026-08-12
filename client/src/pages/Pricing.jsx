import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBolt,
  FaBuilding,
  FaChartLine,
  FaCheck,
  FaCircleCheck,
  FaCircleQuestion,
  FaCreditCard,
  FaCrown,
  FaHeadset,
  FaLayerGroup,
  FaLock,
  FaRocket,
  FaShieldHalved,
  FaUsers,
  FaWandMagicSparkles,
  FaXmark,
} from "react-icons/fa6";

import Navbar from "../components/layout/Navbar";
import PublicFooter from "../components/PublicFooter";
import "../styles/publicPages.css";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      eyebrow: "START SIMPLE",
      description:
        "A clean starting point for freelancers and individuals who need essential business tools.",
      price: "₹0",
      period: "/month",
      note: "No credit card required",
      icon: <FaRocket />,
      button: "Start for Free",
      featured: false,
      features: [
        "1 workspace user",
        "Up to 3 projects",
        "Task management",
        "Kanban board",
        "Basic CRM",
        "Basic dashboard",
        "Calendar access",
        "Community support",
      ],
    },
    {
      name: "Professional",
      eyebrow: "MOST POPULAR",
      description:
        "Built for agencies, startups and growing teams that need automation, analytics and AI.",
      price: "₹799",
      period: "/month",
      note: "Best value for growing teams",
      icon: <FaCrown />,
      button: "Choose Professional",
      featured: true,
      features: [
        "Up to 10 team members",
        "Unlimited projects",
        "Advanced task workflows",
        "Advanced CRM",
        "Professional invoices",
        "Business analytics",
        "AI Assistant",
        "Calendar & reminders",
        "Email notifications",
        "Priority support",
      ],
    },
    {
      name: "Business",
      eyebrow: "ADVANCED CONTROL",
      description:
        "For larger teams that need deeper administration, permissions and advanced reporting.",
      price: "₹1,999",
      period: "/month",
      note: "Designed for scaling businesses",
      icon: <FaBuilding />,
      button: "Choose Business",
      featured: false,
      features: [
        "Unlimited team members",
        "Everything in Professional",
        "Admin panel",
        "Advanced roles & permissions",
        "Advanced analytics",
        "Advanced AI tools",
        "Subscription controls",
        "Team management",
        "API-ready architecture",
        "Priority business support",
      ],
    },
  ];

  const comparisonRows = [
    {
      feature: "Workspace Users",
      starter: "1",
      professional: "10",
      business: "Unlimited",
    },
    {
      feature: "Projects",
      starter: "3",
      professional: "Unlimited",
      business: "Unlimited",
    },
    {
      feature: "Task Management",
      starter: true,
      professional: true,
      business: true,
    },
    {
      feature: "Kanban Board",
      starter: true,
      professional: true,
      business: true,
    },
    {
      feature: "CRM",
      starter: "Basic",
      professional: "Advanced",
      business: "Advanced",
    },
    {
      feature: "Invoices",
      starter: false,
      professional: true,
      business: true,
    },
    {
      feature: "AI Assistant",
      starter: false,
      professional: true,
      business: true,
    },
    {
      feature: "Analytics",
      starter: "Basic",
      professional: "Advanced",
      business: "Advanced",
    },
    {
      feature: "Team Management",
      starter: false,
      professional: true,
      business: true,
    },
    {
      feature: "Roles & Permissions",
      starter: false,
      professional: false,
      business: true,
    },
    {
      feature: "Admin Panel",
      starter: false,
      professional: false,
      business: true,
    },
    {
      feature: "Priority Support",
      starter: false,
      professional: true,
      business: true,
    },
  ];

  const benefits = [
    {
      icon: <FaBolt />,
      title: "Fast Setup",
      text: "Create your workspace and start organizing your business without a complicated setup process.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Secure Workspace",
      text: "Keep business workflows organized with secure access and role-based controls.",
    },
    {
      icon: <FaChartLine />,
      title: "Built to Scale",
      text: "Unlock more advanced capabilities as your business requirements grow.",
    },
    {
      icon: <FaUsers />,
      title: "Team Ready",
      text: "Move from individual productivity to structured team collaboration.",
    },
  ];

  const recommendations = [
    {
      number: "01",
      title: "Choose Starter",
      text: "Best for students, freelancers and solo professionals exploring the platform.",
    },
    {
      number: "02",
      title: "Choose Professional",
      text: "Best for startups, agencies and small teams that need AI, CRM and analytics.",
    },
    {
      number: "03",
      title: "Choose Business",
      text: "Best for larger organizations that need advanced permissions and administration.",
    },
  ];

  const faqItems = [
    {
      question: "Can I start for free?",
      answer:
        "Yes. Starter gives you access to essential project, task, CRM and calendar features.",
    },
    {
      question: "Can I upgrade later?",
      answer:
        "Yes. You can start with Starter and move to Professional or Business whenever your requirements increase.",
    },
    {
      question: "Does Professional include AI?",
      answer:
        "Yes. Professional includes AI-assisted writing, summaries, task suggestions and productivity features.",
    },
    {
      question: "Which plan is best for agencies?",
      answer:
        "Professional is a strong fit for most agencies. Business is better when advanced access control is required.",
    },
    {
      question: "Can I change my plan?",
      answer:
        "Yes. The pricing model is designed to allow businesses to move between plans as their needs change.",
    },
    {
      question: "Are payment gateways supported?",
      answer:
        "The platform includes payment workflow support for Stripe and Razorpay integrations.",
    },
  ];

  const renderComparisonValue = (value) => {
    if (value === true) {
      return (
        <span className="pricing-table-yes">
          <FaCheck />
        </span>
      );
    }

    if (value === false) {
      return (
        <span className="pricing-table-no">
          <FaXmark />
        </span>
      );
    }

    return <span className="pricing-table-text">{value}</span>;
  };

  return (
    <>
      <Navbar />

      <div className="public-page pricing-page">

        {/* HERO */}
        <section className="public-section pricing-premium-hero">
          <div className="pricing-hero-inner">

            <div className="public-badge">
              <FaWandMagicSparkles />
              SIMPLE PRICING. SERIOUS BUSINESS VALUE.
            </div>

            <h1 className="public-title">
              Start with what you need.
              <br />
              Upgrade when you&apos;re ready.
              <br />
              <span>Grow without limits.</span>
            </h1>

            <p className="public-subtitle">
              Flexible plans for freelancers, startups, agencies and growing
              businesses. Start simple and unlock advanced functionality as
              your business evolves.
            </p>

            <div className="pricing-premium-trust">
              <span>
                <FaCircleCheck />
                Free starter plan
              </span>

              <span>
                <FaCircleCheck />
                Upgrade anytime
              </span>

              <span>
                <FaCircleCheck />
                Simple setup
              </span>
            </div>

          </div>
        </section>

        {/* PLANS */}
        <section className="public-section">

          <div className="features-section-heading centered">
            <span>CHOOSE YOUR PLAN</span>

            <h2>
              Pricing that works for
              <br />
              <strong>every stage of your business.</strong>
            </h2>

            <p>
              Start with essential features and move into more advanced
              functionality as your team grows.
            </p>
          </div>

          <div className="pricing-premium-grid">

            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`pricing-premium-card ${
                  plan.featured ? "pricing-premium-featured" : ""
                }`}
              >
                {plan.featured && (
                  <span className="pricing-premium-popular">
                    MOST POPULAR
                  </span>
                )}

                <div className="pricing-plan-icon">
                  {plan.icon}
                </div>

                <span className="pricing-premium-label">
                  {plan.eyebrow}
                </span>

                <h3>{plan.name}</h3>

                <p className="pricing-plan-description">
                  {plan.description}
                </p>

                <div className="pricing-premium-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>

                <small className="pricing-plan-note">
                  {plan.note}
                </small>

                <Link
                  to="/register"
                  className={`pricing-premium-button ${
                    plan.featured ? "featured" : ""
                  }`}
                >
                  {plan.button}
                  <FaArrowRight />
                </Link>

                <div className="pricing-premium-divider"></div>

                <span className="pricing-includes-label">
                  WHAT&apos;S INCLUDED
                </span>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <FaCircleCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

          </div>

          <p className="pricing-demo-note">
            Pricing shown is for project demonstration and interface design
            purposes.
          </p>

        </section>

        {/* VALUE STRIP */}
        <section className="pricing-value-strip">
          <div className="public-section pricing-value-grid">

            <article>
              <FaCreditCard />

              <div>
                <strong>Flexible Plans</strong>
                <span>Start small and upgrade later</span>
              </div>
            </article>

            <article>
              <FaLock />

              <div>
                <strong>Secure Access</strong>
                <span>Structured user permissions</span>
              </div>
            </article>

            <article>
              <FaHeadset />

              <div>
                <strong>Business Support</strong>
                <span>Help when your team needs it</span>
              </div>
            </article>

            <article>
              <FaLayerGroup />

              <div>
                <strong>Connected Platform</strong>
                <span>Major modules in one workspace</span>
              </div>
            </article>

          </div>
        </section>

        {/* COMPARISON */}
        <section className="pricing-premium-comparison-section">
          <div className="public-section">

            <div className="features-section-heading centered">
              <span>COMPARE PLANS</span>

              <h2>
                See exactly what&apos;s
                <br />
                <strong>included in every plan.</strong>
              </h2>
            </div>

            <div className="pricing-premium-table-wrap">

              <table className="pricing-premium-table">
                <thead>
                  <tr>
                    <th>Platform Feature</th>
                    <th>Starter</th>
                    <th className="pricing-table-pro">
                      Professional
                    </th>
                    <th>Business</th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>

                      <td>
                        {renderComparisonValue(row.starter)}
                      </td>

                      <td className="pricing-table-pro">
                        {renderComparisonValue(row.professional)}
                      </td>

                      <td>
                        {renderComparisonValue(row.business)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="public-section">

          <div className="pricing-benefits-heading">

            <div>
              <span>MORE THAN A SUBSCRIPTION</span>

              <h2>
                A workspace designed
                <br />
                <strong>to grow with you.</strong>
              </h2>
            </div>

            <p>
              Every plan is built around the same goal: make business
              management clearer, simpler and more connected.
            </p>

          </div>

          <div className="pricing-premium-benefits">

            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <div>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}

          </div>
        </section>

        {/* RECOMMENDATION */}
        <section className="public-section">

          <div className="pricing-premium-recommendation">

            <div>
              <span>NOT SURE WHICH PLAN?</span>

              <h2>
                Choose based on where
                <br />
                your business is today.
              </h2>

              <p>
                Start with the right level of functionality and expand when
                your business workflows become more sophisticated.
              </p>

              <Link
                to="/register"
                className="pricing-recommendation-button"
              >
                Start with Starter
                <FaArrowRight />
              </Link>
            </div>

            <div className="pricing-premium-recommend-list">

              {recommendations.map((item) => (
                <article key={item.number}>
                  <strong>{item.number}</strong>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}

            </div>

          </div>
        </section>

        {/* PROFESSIONAL HIGHLIGHT */}
        <section className="pricing-highlight-section">
          <div className="public-section pricing-highlight-layout">

            <div className="pricing-highlight-content">
              <span>
                <FaCrown />
                RECOMMENDED FOR GROWING TEAMS
              </span>

              <h2>
                Why Professional is the
                <br />
                <strong>sweet spot for most teams.</strong>
              </h2>

              <p>
                Professional unlocks advanced CRM, AI assistance, analytics,
                invoicing and team collaboration without unnecessary
                complexity.
              </p>

              <div className="pricing-highlight-points">
                <span>
                  <FaCheck />
                  Unlimited projects
                </span>

                <span>
                  <FaCheck />
                  Advanced CRM
                </span>

                <span>
                  <FaCheck />
                  AI productivity tools
                </span>

                <span>
                  <FaCheck />
                  Business analytics
                </span>

                <span>
                  <FaCheck />
                  Team management
                </span>

                <span>
                  <FaCheck />
                  Priority support
                </span>
              </div>

              <Link to="/register">
                Choose Professional
                <FaArrowRight />
              </Link>
            </div>

            <div className="pricing-highlight-card">

              <div className="pricing-highlight-card-top">
                <div>
                  <small>PROFESSIONAL PLAN</small>
                  <h3>Everything your growing team needs.</h3>
                </div>

                <FaCrown />
              </div>

              <div className="pricing-highlight-price">
                <strong>₹799</strong>
                <span>/month</span>
              </div>

              <div className="pricing-highlight-progress">
                <div>
                  <span>Projects</span>
                  <strong>Unlimited</strong>
                </div>

                <div>
                  <span>Team Members</span>
                  <strong>Up to 10</strong>
                </div>

                <div>
                  <span>AI Assistant</span>
                  <strong>Included</strong>
                </div>

                <div>
                  <span>Advanced CRM</span>
                  <strong>Included</strong>
                </div>
              </div>

              <div className="pricing-highlight-insight">
                <FaWandMagicSparkles />

                <div>
                  <small>BEST VALUE</small>
                  <strong>
                    Ideal balance of collaboration, automation and analytics.
                  </strong>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="public-section pricing-premium-faq-layout">

          <div className="pricing-premium-faq-left">

            <div className="public-badge">
              <FaCircleQuestion />
              PRICING FAQ
            </div>

            <h2>
              Questions before
              <br />
              <strong>choosing a plan?</strong>
            </h2>

            <p>
              Here are answers to common questions about plans, upgrades and
              platform access.
            </p>

            <Link to="/register">
              Start Free
              <FaArrowRight />
            </Link>

          </div>

          <div className="pricing-premium-faq-list">

            {faqItems.map((item) => (
              <article key={item.question}>
                <div>
                  <FaCircleQuestion />
                </div>

                <section>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </section>
              </article>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="public-section">

          <div className="public-cta pricing-premium-cta">

            <div>
              <span className="features-section-small-label">
                START WITH ZERO RISK
              </span>

              <h2>
                Build your business workspace
                <br />
                before paying for more.
              </h2>

              <p>
                Start free, explore the workflow and upgrade only when your
                business needs more advanced functionality.
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

export default Pricing;