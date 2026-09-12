import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiCheck,
  FiClock,
  FiCreditCard,
  FiDollarSign,
  FiShield,
  FiStar,
  FiZap,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/subscription.css";

function Subscription() {
  const navigate = useNavigate();

  /* =========================
     LOAD SAVED SUBSCRIPTION
  ========================= */

  const savedSubscription =
    JSON.parse(
      localStorage.getItem(
        "currentSubscription"
      )
    );

  const [billingCycle, setBillingCycle] =
    useState(
      savedSubscription?.billingCycle ||
        "monthly"
    );

  const [currentPlan] = useState(
    savedSubscription?.planId || "pro"
  );

  /* =========================
     PLANS
  ========================= */

  const plans = [
    {
      id: "starter",

      name: "Starter",

      monthly: 0,

      yearly: 0,

      description:
        "Basic tools for individuals and small teams.",

      icon: FiZap,

      features: [
        "3 Active Projects",
        "Basic CRM",
        "Basic Invoicing",
        "5 Team Members",
        "Standard Support",
      ],
    },

    {
      id: "pro",

      name: "Pro",

      monthly: 999,

      yearly: 9990,

      description:
        "Advanced tools for growing businesses.",

      icon: FiStar,

      popular: true,

      features: [
        "Unlimited Projects",
        "Advanced CRM",
        "AI Assistant",
        "Analytics Dashboard",
        "25 Team Members",
        "Priority Support",
      ],
    },

    {
      id: "business",

      name: "Business",

      monthly: 1999,

      yearly: 19990,

      description:
        "Complete platform for larger teams.",

      icon: FiShield,

      features: [
        "Everything in Pro",
        "Unlimited Team Members",
        "Admin Controls",
        "Advanced Analytics",
        "Premium AI Features",
        "Dedicated Support",
      ],
    },
  ];

  const selectedPlan =
    plans.find(
      (plan) =>
        plan.id === currentPlan
    ) || plans[1];

  /* =========================
     CURRENT SUBSCRIPTION DATA
  ========================= */

  const currentPrice =
    savedSubscription?.price ??
    (billingCycle === "yearly"
      ? selectedPlan.yearly
      : selectedPlan.monthly);

  const currentTotal =
    savedSubscription?.total ??
    currentPrice +
      Math.round(
        currentPrice * 0.18
      );

  /* =========================
     CHANGE PLAN
  ========================= */

  const handlePlanChange = (plan) => {
    if (plan.id === currentPlan) {
      return;
    }

    navigate("/payment", {
      state: {
        plan: {
          id: plan.id,
          name: plan.name,
          monthly: plan.monthly,
          yearly: plan.yearly,
        },

        billingCycle,
      },
    });
  };

  /* =========================
     PAYMENT PAGE
  ========================= */

  const handleEditPayment = () => {
    navigate("/payment", {
      state: {
        plan: {
          id: selectedPlan.id,
          name: selectedPlan.name,
          monthly: selectedPlan.monthly,
          yearly: selectedPlan.yearly,
        },

        billingCycle:
          savedSubscription?.billingCycle ||
          billingCycle,
      },
    });
  };

  return (
    <DashboardLayout>

      <main className="subscription-page">

        {/* =========================
            HEADER
        ========================= */}

        <section className="subscription-header">

          <div>

            <span className="subscription-page-label">
              BILLING & PLANS
            </span>

            <h1>
              Subscription
            </h1>

            <p>
              Manage your subscription plan,
              billing cycle and payment details.
            </p>

          </div>

          <div className="subscription-current-badge">

            <FiShield />

            Current Plan:{" "}
            {selectedPlan.name}

          </div>

        </section>

        {/* =========================
            CURRENT PLAN
        ========================= */}

        <section className="subscription-current-card">

          <div className="subscription-current-left">

            <div className="subscription-current-icon">

              {selectedPlan.id ===
              "starter" ? (
                <FiZap />
              ) : selectedPlan.id ===
                "business" ? (
                <FiShield />
              ) : (
                <FiStar />
              )}

            </div>

            <div>

              <span>
                CURRENT SUBSCRIPTION
              </span>

              <h2>
                {selectedPlan.name} Plan
              </h2>

              <p>
                Your subscription is active
                and all included features are
                available.
              </p>

            </div>

          </div>

          <div className="subscription-current-right">

            <div>

              <span>
                Status
              </span>

              <strong>
                {savedSubscription?.status ||
                  "Active"}
              </strong>

            </div>

            <button
              type="button"
              className="subscription-history-button"
              onClick={() =>
                navigate(
                  "/subscription/history"
                )
              }
            >
              <FiClock />

              View Billing History
            </button>

          </div>

        </section>

        {/* =========================
            CURRENT PLAN SUMMARY
        ========================= */}

        <section
          style={{
            marginBottom: "18px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "12px",
          }}
        >

          <div className="subscription-info-card">

            <span className="subscription-page-label">
              CURRENT PLAN
            </span>

            <h3>
              {selectedPlan.name}
            </h3>

          </div>

          <div className="subscription-info-card">

            <span className="subscription-page-label">
              BILLING CYCLE
            </span>

            <h3>
              {(savedSubscription?.billingCycle ||
                billingCycle) ===
              "monthly"
                ? "Monthly"
                : "Yearly"}
            </h3>

          </div>

          <div className="subscription-info-card">

            <span className="subscription-page-label">
              PLAN PRICE
            </span>

            <h3>
              ₹
              {currentPrice.toLocaleString(
                "en-IN"
              )}
            </h3>

          </div>

          <div className="subscription-info-card">

            <span className="subscription-page-label">
              TOTAL WITH GST
            </span>

            <h3>
              ₹
              {currentTotal.toLocaleString(
                "en-IN"
              )}
            </h3>

          </div>

        </section>

        {/* =========================
            AVAILABLE PLANS HEADER
        ========================= */}

        <section className="subscription-plan-header">

          <div>

            <span className="subscription-page-label">
              AVAILABLE PLANS
            </span>

            <h2>
              Choose the right plan
            </h2>

            <p>
              Upgrade or change your subscription
              whenever you need.
            </p>

          </div>

          {/* BILLING TOGGLE */}

          <div className="subscription-toggle">

            <button
              type="button"
              className={
                billingCycle === "monthly"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setBillingCycle("monthly")
              }
            >
              Monthly
            </button>

            <button
              type="button"
              className={
                billingCycle === "yearly"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setBillingCycle("yearly")
              }
            >
              Yearly

              <span>
                Save 17%
              </span>
            </button>

          </div>

        </section>

        {/* =========================
            PLAN CARDS
        ========================= */}

        <section className="subscription-plan-grid">

          {plans.map((plan) => {
            const Icon = plan.icon;

            const isCurrent =
              currentPlan === plan.id;

            const price =
              billingCycle === "monthly"
                ? plan.monthly
                : plan.yearly;

            return (
              <article
                key={plan.id}
                className={`subscription-plan-card ${
                  isCurrent
                    ? "current"
                    : ""
                } ${
                  plan.popular
                    ? "popular"
                    : ""
                }`}
              >

                {plan.popular && (
                  <div className="subscription-popular">
                    MOST POPULAR
                  </div>
                )}

                <div className="subscription-plan-icon">
                  <Icon />
                </div>

                <h3>
                  {plan.name}
                </h3>

                <p className="subscription-plan-description">
                  {plan.description}
                </p>

                {/* PRICE */}

                <div className="subscription-price">

                  <strong>
                    ₹
                    {price.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                  {price !== 0 ? (
                    <span>
                      /
                      {billingCycle ===
                      "monthly"
                        ? "month"
                        : "year"}
                    </span>
                  ) : (
                    <span>
                      Free
                    </span>
                  )}

                </div>

                {/* FEATURES */}

                <div className="subscription-features">

                  {plan.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="subscription-feature"
                      >

                        <FiCheck />

                        <span>
                          {feature}
                        </span>

                      </div>
                    )
                  )}

                </div>

                {/* PLAN BUTTON */}

                <button
                  type="button"
                  className="subscription-plan-button"
                  disabled={isCurrent}
                  onClick={() =>
                    handlePlanChange(plan)
                  }
                >
                  {isCurrent
                    ? "Current Plan"
                    : plan.id ===
                      "starter"
                    ? "Switch to Starter"
                    : currentPlan ===
                      "starter"
                    ? `Upgrade to ${plan.name}`
                    : `Switch to ${plan.name}`}
                </button>

              </article>
            );
          })}

        </section>

        {/* =========================
            BOTTOM SECTION
        ========================= */}

        <section className="subscription-bottom-grid">

          {/* PAYMENT METHOD */}

          <div className="subscription-info-card">

            <div className="subscription-card-title">

              <div className="subscription-small-icon">
                <FiCreditCard />
              </div>

              <div>

                <span>
                  PAYMENT METHOD
                </span>

                <h3>
                  Saved Card
                </h3>

              </div>

            </div>

            <div className="subscription-payment-card">

              <div className="subscription-card-logo">
                VISA
              </div>

              <div>

                <strong>
                  •••• •••• •••• 4242
                </strong>

                <span>
                  Expires 08/29
                </span>

              </div>

              <button
                type="button"
                onClick={
                  handleEditPayment
                }
              >
                Edit
              </button>

            </div>

          </div>

          {/* BILLING SUMMARY */}

          <div className="subscription-info-card">

            <div className="subscription-card-title">

              <div className="subscription-small-icon">
                <FiDollarSign />
              </div>

              <div>

                <span>
                  BILLING SUMMARY
                </span>

                <h3>
                  Subscription Details
                </h3>

              </div>

            </div>

            <div className="subscription-summary-row">

              <span>
                Plan
              </span>

              <strong>
                {selectedPlan.name}
              </strong>

            </div>

            <div className="subscription-summary-row">

              <span>
                Billing Cycle
              </span>

              <strong>
                {(savedSubscription?.billingCycle ||
                  billingCycle) ===
                "monthly"
                  ? "Monthly"
                  : "Yearly"}
              </strong>

            </div>

            <div className="subscription-summary-row">

              <span>
                Status
              </span>

              <strong className="subscription-active">
                {savedSubscription?.status ||
                  "Active"}
              </strong>

            </div>

            <div className="subscription-summary-row">

              <span>
                Amount
              </span>

              <strong>
                ₹
                {currentTotal.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <button
              type="button"
              className="subscription-billing-link"
              onClick={() =>
                navigate(
                  "/subscription/history"
                )
              }
            >
              <FiClock />

              View All Transactions
            </button>

          </div>

        </section>

      </main>

    </DashboardLayout>
  );
}

export default Subscription;