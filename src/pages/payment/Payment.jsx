import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiCheckCircle,
  FiCreditCard,
  FiLock,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/payment.css";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedPlan =
    location.state?.plan || {
      id: "pro",
      name: "Pro",
      monthly: 999,
      yearly: 9990,
    };

  const billingCycle =
    location.state?.billingCycle || "monthly";

  const planPrice =
    billingCycle === "yearly"
      ? selectedPlan.yearly
      : selectedPlan.monthly;

  const tax = Math.round(planPrice * 0.18);

  const total = planPrice + tax;

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [processing, setProcessing] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [billing, setBilling] = useState({
    name: "Urvi Chavda",
    email: "urvi@example.com",
    phone: "+91 98765 43210",
    address: "Surat, Gujarat",
  });

  const [card, setCard] = useState({
    number: "",
    holder: "",
    expiry: "",
    cvv: "",
  });

  const [upiId, setUpiId] = useState("");

  const handleBillingChange = (event) => {
    const { name, value } = event.target;

    setBilling((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardChange = (event) => {
    const { name, value } = event.target;

    setCard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     SAVE TRANSACTION
  ========================= */

  const saveTransaction = () => {
    let paymentLabel = "Free Plan";

    if (planPrice > 0) {
      if (paymentMethod === "card") {
        const cleanNumber =
          card.number.replace(/\s/g, "");

        const lastFour =
          cleanNumber.length >= 4
            ? cleanNumber.slice(-4)
            : "Card";

        paymentLabel = `Card •••• ${lastFour}`;
      } else {
        paymentLabel = "UPI";
      }
    }

    const transaction = {
      id: `TXN-${Date.now()}`,

      date: new Date().toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),

      plan: selectedPlan.name,

      cycle:
        billingCycle === "monthly"
          ? "Monthly"
          : "Yearly",

      subtotal: planPrice,

      tax,

      amount: total,

      method: paymentLabel,

      status: "Paid",
    };

    const savedTransactions =
      JSON.parse(
        localStorage.getItem(
          "billingTransactions"
        )
      ) || [];

    const updatedTransactions = [
      transaction,
      ...savedTransactions,
    ];

    localStorage.setItem(
      "billingTransactions",
      JSON.stringify(updatedTransactions)
    );

    /* =========================
       SAVE CURRENT SUBSCRIPTION
    ========================= */

    const currentSubscription = {
      planId: selectedPlan.id,

      planName: selectedPlan.name,

      billingCycle,

      price: planPrice,

      tax,

      total,

      status: "Active",

      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "currentSubscription",
      JSON.stringify(currentSubscription)
    );
  };

  /* =========================
     HANDLE PAYMENT
  ========================= */

  const handlePayment = (event) => {
    event.preventDefault();

    /* FREE PLAN */

    if (planPrice === 0) {
      saveTransaction();

      setSuccess(true);

      return;
    }

    /* CARD VALIDATION */

    if (paymentMethod === "card") {
      if (
        !card.number ||
        !card.holder ||
        !card.expiry ||
        !card.cvv
      ) {
        alert(
          "Please enter complete card details."
        );

        return;
      }
    }

    /* UPI VALIDATION */

    if (
      paymentMethod === "upi" &&
      !upiId.trim()
    ) {
      alert(
        "Please enter your UPI ID."
      );

      return;
    }

    setProcessing(true);

    setTimeout(() => {
      saveTransaction();

      setProcessing(false);

      setSuccess(true);
    }, 1200);
  };

  /* =========================
     PAYMENT SUCCESS
  ========================= */

  if (success) {
    return (
      <DashboardLayout>
        <main className="payment-page">

          <section className="payment-success-card">

            <div className="payment-success-icon">
              <FiCheckCircle />
            </div>

            <span className="payment-success-label">
              {planPrice === 0
                ? "PLAN ACTIVATED"
                : "PAYMENT SUCCESSFUL"}
            </span>

            <h1>
              {planPrice === 0
                ? `${selectedPlan.name} Plan Activated!`
                : "Payment Successful!"}
            </h1>

            <p>
              Your {selectedPlan.name} Plan
              subscription has been activated
              successfully.
            </p>

            <div className="payment-success-details">

              <div>
                <span>Plan</span>

                <strong>
                  {selectedPlan.name} Plan
                </strong>
              </div>

              <div>
                <span>Billing Cycle</span>

                <strong>
                  {billingCycle === "monthly"
                    ? "Monthly"
                    : "Yearly"}
                </strong>
              </div>

              <div>
                <span>
                  {planPrice === 0
                    ? "Plan Price"
                    : "Amount Paid"}
                </span>

                <strong>
                  ₹
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>

              <div>
                <span>Payment Method</span>

                <strong>
                  {planPrice === 0
                    ? "Free Plan"
                    : paymentMethod === "card"
                    ? "Card"
                    : "UPI"}
                </strong>
              </div>

              <div>
                <span>Status</span>

                <strong className="payment-paid">
                  Active
                </strong>
              </div>

            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >

              <button
                type="button"
                className="payment-dashboard-button"
                onClick={() =>
                  navigate("/subscription")
                }
              >
                Back to Subscription
              </button>

              <button
                type="button"
                className="payment-dashboard-button"
                onClick={() =>
                  navigate(
                    "/subscription/history"
                  )
                }
              >
                View Billing History
              </button>

            </div>

          </section>

        </main>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <main className="payment-page">

        {/* BACK */}

        <button
          type="button"
          className="payment-back-button"
          onClick={() =>
            navigate("/subscription")
          }
        >
          <FiArrowLeft />

          Back to Subscription
        </button>

        {/* HEADER */}

        <section className="payment-header">

          <div>

            <span className="payment-page-label">
              SECURE CHECKOUT
            </span>

            <h1>
              Payment
            </h1>

            <p>
              Complete your subscription payment
              securely.
            </p>

          </div>

          <div className="payment-secure-badge">
            <FiShield />
            Secure Payment
          </div>

        </section>

        <div className="payment-layout">

          {/* LEFT SIDE */}

          <form
            className="payment-main-card"
            onSubmit={handlePayment}
          >

            {/* =========================
                BILLING INFORMATION
            ========================= */}

            <section className="payment-section">

              <div className="payment-section-heading">

                <span>
                  STEP 1
                </span>

                <h2>
                  Billing Information
                </h2>

              </div>

              <div className="payment-form-grid">

                <div className="payment-form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    name="name"
                    value={billing.name}
                    onChange={
                      handleBillingChange
                    }
                    required
                  />

                </div>

                <div className="payment-form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={billing.email}
                    onChange={
                      handleBillingChange
                    }
                    required
                  />

                </div>

                <div className="payment-form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    value={billing.phone}
                    onChange={
                      handleBillingChange
                    }
                    required
                  />

                </div>

                <div className="payment-form-group">

                  <label>
                    Address
                  </label>

                  <input
                    name="address"
                    value={billing.address}
                    onChange={
                      handleBillingChange
                    }
                    required
                  />

                </div>

              </div>

            </section>

            {/* =========================
                PAYMENT METHOD
            ========================= */}

            {planPrice > 0 && (
              <section className="payment-section">

                <div className="payment-section-heading">

                  <span>
                    STEP 2
                  </span>

                  <h2>
                    Payment Method
                  </h2>

                </div>

                <div className="payment-method-options">

                  <button
                    type="button"
                    className={`payment-method-button ${
                      paymentMethod === "card"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentMethod("card")
                    }
                  >

                    <FiCreditCard />

                    <div>
                      <strong>
                        Debit / Credit Card
                      </strong>

                      <span>
                        Visa, Mastercard,
                        RuPay
                      </span>
                    </div>

                  </button>

                  <button
                    type="button"
                    className={`payment-method-button ${
                      paymentMethod === "upi"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentMethod("upi")
                    }
                  >

                    <FiSmartphone />

                    <div>
                      <strong>
                        UPI
                      </strong>

                      <span>
                        Google Pay, PhonePe,
                        Paytm
                      </span>
                    </div>

                  </button>

                </div>

                {/* CARD */}

                {paymentMethod === "card" && (
                  <div className="payment-card-fields">

                    <div className="payment-form-group payment-full">

                      <label>
                        Card Number
                      </label>

                      <input
                        name="number"
                        placeholder="1234 5678 9012 3456"
                        value={card.number}
                        onChange={
                          handleCardChange
                        }
                      />

                    </div>

                    <div className="payment-form-group payment-full">

                      <label>
                        Name on Card
                      </label>

                      <input
                        name="holder"
                        placeholder="Urvi Chavda"
                        value={card.holder}
                        onChange={
                          handleCardChange
                        }
                      />

                    </div>

                    <div className="payment-form-group">

                      <label>
                        Expiry Date
                      </label>

                      <input
                        name="expiry"
                        placeholder="MM/YY"
                        value={card.expiry}
                        onChange={
                          handleCardChange
                        }
                      />

                    </div>

                    <div className="payment-form-group">

                      <label>
                        CVV
                      </label>

                      <input
                        type="password"
                        name="cvv"
                        placeholder="•••"
                        maxLength="4"
                        value={card.cvv}
                        onChange={
                          handleCardChange
                        }
                      />

                    </div>

                  </div>
                )}

                {/* UPI */}

                {paymentMethod === "upi" && (
                  <div className="payment-upi-box">

                    <div className="payment-form-group">

                      <label>
                        UPI ID
                      </label>

                      <input
                        placeholder="example@upi"
                        value={upiId}
                        onChange={(event) =>
                          setUpiId(
                            event.target.value
                          )
                        }
                      />

                    </div>

                    <p>
                      Enter your registered UPI ID
                      to continue.
                    </p>

                  </div>
                )}

              </section>
            )}

            {/* PAY BUTTON */}

            <button
              type="submit"
              className="payment-pay-button"
              disabled={processing}
            >

              <FiLock />

              {processing
                ? "Processing..."
                : planPrice === 0
                ? `Activate ${selectedPlan.name} Plan`
                : `Pay ₹${total.toLocaleString(
                    "en-IN"
                  )}`}

            </button>

            <div className="payment-security-text">

              <FiLock />

              {planPrice === 0
                ? "No payment is required for this plan."
                : "Your payment information is securely encrypted."}

            </div>

          </form>

          {/* =========================
              ORDER SUMMARY
          ========================= */}

          <aside className="payment-summary-card">

            <span className="payment-summary-label">
              ORDER SUMMARY
            </span>

            <h2>
              Subscription Details
            </h2>

            <div className="payment-plan-box">

              <div>

                <strong>
                  {selectedPlan.name} Plan
                </strong>

                <span>
                  {billingCycle === "monthly"
                    ? "Monthly"
                    : "Yearly"}{" "}
                  subscription
                </span>

              </div>

              <strong>
                ₹
                {planPrice.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <div className="payment-summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹
                {planPrice.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <div className="payment-summary-row">

              <span>
                GST (18%)
              </span>

              <strong>
                ₹
                {tax.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <div className="payment-summary-total">

              <span>
                Total
              </span>

              <strong>
                ₹
                {total.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <div className="payment-protection">

              <FiShield />

              <div>

                <strong>
                  Secure Checkout
                </strong>

                <span>
                  Protected with secure
                  payment processing.
                </span>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </DashboardLayout>
  );
}

export default Payment;