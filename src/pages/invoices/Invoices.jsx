import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiEye,
  FiFileText,
  FiFilter,
  FiPlus,
  FiSearch,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/invoice.css";

function Invoices() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const invoices = [
    {
      id: 1,
      invoiceNo: "INV-2026-001",
      client: "Aarav Mehta",
      company: "Nexa Digital",
      issueDate: "10 Aug 2026",
      dueDate: "20 Aug 2026",
      amount: "₹85,000",
      status: "Paid",
    },
    {
      id: 2,
      invoiceNo: "INV-2026-002",
      client: "Riya Shah",
      company: "Bright Studio",
      issueDate: "12 Aug 2026",
      dueDate: "25 Aug 2026",
      amount: "₹62,500",
      status: "Pending",
    },
    {
      id: 3,
      invoiceNo: "INV-2026-003",
      client: "Dev Patel",
      company: "Vertex Labs",
      issueDate: "01 Aug 2026",
      dueDate: "15 Aug 2026",
      amount: "₹1,25,000",
      status: "Overdue",
    },
    {
      id: 4,
      invoiceNo: "INV-2026-004",
      client: "Krisha Mehta",
      company: "Nova Works",
      issueDate: "15 Aug 2026",
      dueDate: "30 Aug 2026",
      amount: "₹48,000",
      status: "Pending",
    },
  ];

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const query = search.toLowerCase();

      const matchesSearch =
        invoice.invoiceNo.toLowerCase().includes(query) ||
        invoice.client.toLowerCase().includes(query) ||
        invoice.company.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" || invoice.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <DashboardLayout>
      <main className="invoice-page">

        {/* HEADER */}
        <section className="invoice-page-header">
          <div>
            <span className="invoice-page-label">
              FINANCIAL MANAGEMENT
            </span>

            <h1>Invoices</h1>

            <p>
              Create, manage and track client invoices,
              payments and due dates from one workspace.
            </p>
          </div>

          <button
            type="button"
            className="invoice-primary-button"
            onClick={() => navigate("/invoices/create")}
          >
            <FiPlus />
            Create Invoice
          </button>
        </section>

        {/* OVERVIEW */}
        <section className="invoice-overview-section">
          <div className="invoice-section-heading">
            <div>
              <span>INVOICE OVERVIEW</span>
              <h2>Financial Statistics</h2>
            </div>

            <p>
              Monitor invoice activity and outstanding payments.
            </p>
          </div>

          <div className="invoice-stats-grid">

            <article className="invoice-stat-card">
              <div className="invoice-stat-icon blue">
                <FiFileText />
              </div>

              <div>
                <span>Total Invoices</span>
                <strong>24</strong>
                <small>6 invoices created this month</small>
              </div>
            </article>

            <article className="invoice-stat-card">
              <div className="invoice-stat-icon green">
                ₹
              </div>

              <div>
                <span>Total Revenue</span>
                <strong>₹4,82,500</strong>
                <small>+18.5% from last month</small>
              </div>
            </article>

            <article className="invoice-stat-card">
              <div className="invoice-stat-icon orange">
                <FiClock />
              </div>

              <div>
                <span>Pending</span>
                <strong>₹58,400</strong>
                <small>5 invoices awaiting payment</small>
              </div>
            </article>

            <article className="invoice-stat-card">
              <div className="invoice-stat-icon red">
                <FiAlertCircle />
              </div>

              <div>
                <span>Overdue</span>
                <strong>₹32,500</strong>
                <small>2 invoices require attention</small>
              </div>
            </article>

          </div>
        </section>

        {/* SEARCH */}
        <section className="invoice-search-panel">
          <div className="invoice-panel-heading">
            <span>SEARCH AND FILTER</span>
            <h2>Find Invoices</h2>

            <p>
              Search invoices by invoice number, client or company.
            </p>
          </div>

          <div className="invoice-toolbar">

            <div className="invoice-search">
              <FiSearch />

              <input
                type="text"
                placeholder="Search invoice, client or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                >
                  <FiX />
                </button>
              )}
            </div>

            <div className="invoice-filter">
              <FiFilter />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>

          </div>
        </section>

        {/* LIST */}
        <section className="invoice-list-section">
          <div className="invoice-results-header">
            <span>INVOICE RESULTS</span>

            <strong>
              {filteredInvoices.length} invoices found
            </strong>
          </div>

          <div className="invoice-table-wrapper">
            <table className="invoice-table">

              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Client</th>
                  <th>Issue Date</th>
                  <th>Due Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id}>

                    <td>
                      <div className="invoice-number">
                        <div>
                          <FiFileText />
                        </div>

                        <strong>
                          {invoice.invoiceNo}
                        </strong>
                      </div>
                    </td>

                    <td>
                      <div className="invoice-client">
                        <strong>{invoice.client}</strong>
                        <span>{invoice.company}</span>
                      </div>
                    </td>

                    <td>{invoice.issueDate}</td>

                    <td>{invoice.dueDate}</td>

                    <td>
                      <strong>{invoice.amount}</strong>
                    </td>

                    <td>
                      <span
                        className={`invoice-status ${invoice.status.toLowerCase()}`}
                      >
                        {invoice.status === "Paid" && (
                          <FiCheckCircle />
                        )}

                        {invoice.status === "Pending" && (
                          <FiClock />
                        )}

                        {invoice.status === "Overdue" && (
                          <FiAlertCircle />
                        )}

                        {invoice.status}
                      </span>
                    </td>

                    <td>
                      <div className="invoice-actions">

                        <button
                          type="button"
                          title="View Invoice"
                          onClick={() =>
                            navigate(`/invoices/${invoice.id}`)
                          }
                        >
                          <FiEye />
                        </button>

                        <button
                          type="button"
                          title="Download"
                          onClick={() =>
                            navigate(`/invoices/${invoice.id}`)
                          }
                        >
                          <FiDownload />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {filteredInvoices.length === 0 && (
            <div className="invoice-empty-state">
              <FiFileText />

              <h3>No invoices found</h3>

              <p>
                Try changing your search or status filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setStatus("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

      </main>
    </DashboardLayout>
  );
}

export default Invoices;