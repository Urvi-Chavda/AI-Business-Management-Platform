import {
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiCheckCircle,
  FiDownload,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/billing-history.css";

/* =========================
   DEFAULT TRANSACTIONS
========================= */

const defaultTransactions = [
  {
    id: "TXN-2026-001",
    date: "10 Sep 2026",
    plan: "Pro",
    cycle: "Monthly",
    subtotal: 999,
    tax: 180,
    amount: 1179,
    method: "Visa •••• 4242",
    status: "Paid",
  },

  {
    id: "TXN-2026-002",
    date: "10 Aug 2026",
    plan: "Pro",
    cycle: "Monthly",
    subtotal: 999,
    tax: 180,
    amount: 1179,
    method: "Visa •••• 4242",
    status: "Paid",
  },

  {
    id: "TXN-2026-003",
    date: "10 Jul 2026",
    plan: "Pro",
    cycle: "Monthly",
    subtotal: 999,
    tax: 180,
    amount: 1179,
    method: "UPI",
    status: "Paid",
  },
];

function BillingHistory() {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  /* =========================
     LOAD TRANSACTIONS
  ========================= */

  const [transactions, setTransactions] =
    useState(() => {
      const savedTransactions =
        JSON.parse(
          localStorage.getItem(
            "billingTransactions"
          )
        );

      if (
        savedTransactions &&
        savedTransactions.length > 0
      ) {
        return savedTransactions;
      }

      localStorage.setItem(
        "billingTransactions",
        JSON.stringify(
          defaultTransactions
        )
      );

      return defaultTransactions;
    });

  /* =========================
     FILTER
  ========================= */

  const filteredTransactions =
    useMemo(() => {
      return transactions.filter(
        (transaction) => {
          const searchValue =
            search.toLowerCase();

          const matchesSearch =
            transaction.id
              .toLowerCase()
              .includes(searchValue) ||
            transaction.plan
              .toLowerCase()
              .includes(searchValue) ||
            transaction.method
              .toLowerCase()
              .includes(searchValue);

          const matchesStatus =
            statusFilter === "all" ||
            transaction.status.toLowerCase() ===
              statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [
      search,
      statusFilter,
      transactions,
    ]);

  /* =========================
     TOTAL PAID
  ========================= */

  const totalPaid =
    transactions
      .filter(
        (transaction) =>
          transaction.status === "Paid"
      )
      .reduce(
        (total, transaction) =>
          total + transaction.amount,
        0
      );

  /* =========================
     RECEIPT DOWNLOAD
  ========================= */

  const handleDownload = (
    transaction
  ) => {
    const receipt = `
AI BUSINESS MANAGEMENT PLATFORM
================================

PAYMENT RECEIPT

Transaction ID : ${transaction.id}
Date           : ${transaction.date}

Plan           : ${transaction.plan}
Billing Cycle  : ${transaction.cycle}

Subtotal       : ₹${transaction.subtotal ?? transaction.amount}
GST (18%)      : ₹${transaction.tax ?? 0}
Total Amount   : ₹${transaction.amount}

Payment Method : ${transaction.method}
Status         : ${transaction.status}

================================
Thank you for your payment.
`;

    const blob = new Blob(
      [receipt],
      {
        type: "text/plain",
      }
    );

    const url =
      window.URL.createObjectURL(
        blob
      );

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      `${transaction.id}-receipt.txt`;

    document.body.appendChild(
      link
    );

    link.click();

    document.body.removeChild(
      link
    );

    window.URL.revokeObjectURL(
      url
    );
  };

  /* =========================
     DELETE TRANSACTION
  ========================= */

  const handleDelete = (
    transactionId
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this transaction?"
      );

    if (!confirmDelete) {
      return;
    }

    const updatedTransactions =
      transactions.filter(
        (transaction) =>
          transaction.id !==
          transactionId
      );

    setTransactions(
      updatedTransactions
    );

    localStorage.setItem(
      "billingTransactions",
      JSON.stringify(
        updatedTransactions
      )
    );
  };

  return (
    <DashboardLayout>

      <main className="billing-history-page">

        {/* BACK */}

        <button
          type="button"
          className="billing-back-button"
          onClick={() =>
            navigate("/subscription")
          }
        >
          <FiArrowLeft />

          Back to Subscription
        </button>

        {/* HEADER */}

        <section className="billing-history-header">

          <div>
            <span className="billing-page-label">
              BILLING & PAYMENTS
            </span>

            <h1>
              Billing History
            </h1>

            <p>
              View your previous subscription
              payments and download receipts.
            </p>
          </div>

        </section>

        {/* =========================
            STATS
        ========================= */}

        <section className="billing-stats">

          <div className="billing-stat-card">

            <span>
              Total Transactions
            </span>

            <strong>
              {transactions.length}
            </strong>

          </div>

          <div className="billing-stat-card">

            <span>
              Total Paid
            </span>

            <strong>
              ₹
              {totalPaid.toLocaleString(
                "en-IN"
              )}
            </strong>

          </div>

          <div className="billing-stat-card">

            <span>
              Successful Payments
            </span>

            <strong>
              {
                transactions.filter(
                  (transaction) =>
                    transaction.status ===
                    "Paid"
                ).length
              }
            </strong>

          </div>

          <div className="billing-stat-card">

            <span>
              Latest Plan
            </span>

            <strong>
              {transactions.length > 0
                ? transactions[0].plan
                : "—"}
            </strong>

          </div>

        </section>

        {/* =========================
            HISTORY CARD
        ========================= */}

        <section className="billing-history-card">

          {/* TOOLBAR */}

          <div className="billing-toolbar">

            <div className="billing-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search transaction, plan or method..."
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
              />

            </div>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value
                )
              }
            >
              <option value="all">
                All Status
              </option>

              <option value="paid">
                Paid
              </option>

              <option value="failed">
                Failed
              </option>
            </select>

          </div>

          {/* =========================
              TABLE
          ========================= */}

          <div className="billing-table-wrapper">

            <table className="billing-table">

              <thead>
                <tr>
                  <th>
                    Transaction ID
                  </th>

                  <th>Date</th>

                  <th>Plan</th>

                  <th>Billing</th>

                  <th>
                    Payment Method
                  </th>

                  <th>Amount</th>

                  <th>Status</th>

                  <th>Receipt</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredTransactions.map(
                  (transaction) => (
                    <tr
                      key={
                        transaction.id
                      }
                    >

                      <td>
                        <strong>
                          {transaction.id}
                        </strong>
                      </td>

                      <td>
                        {transaction.date}
                      </td>

                      <td>
                        {transaction.plan}
                      </td>

                      <td>
                        {transaction.cycle}
                      </td>

                      <td>
                        {transaction.method}
                      </td>

                      <td>
                        ₹
                        {transaction.amount.toLocaleString(
                          "en-IN"
                        )}
                      </td>

                      <td>
                        <span className="billing-status paid">

                          <FiCheckCircle />

                          {
                            transaction.status
                          }

                        </span>
                      </td>

                      <td>

                        <button
                          type="button"
                          className="billing-download-button"
                          onClick={() =>
                            handleDownload(
                              transaction
                            )
                          }
                        >
                          <FiDownload />
                          Receipt
                        </button>

                      </td>

                      <td>

                        <button
                          type="button"
                          className="billing-delete-button"
                          onClick={() =>
                            handleDelete(
                              transaction.id
                            )
                          }
                        >
                          <FiTrash2 />
                        </button>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

            {/* EMPTY */}

            {filteredTransactions.length ===
              0 && (
              <div className="billing-empty">
                No transactions found.
              </div>
            )}

          </div>

        </section>

      </main>

    </DashboardLayout>
  );
}

export default BillingHistory;