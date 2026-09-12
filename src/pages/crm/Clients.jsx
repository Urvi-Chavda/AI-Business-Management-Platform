import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiClock,
  FiFilter,
  FiMail,
  FiPlus,
  FiSearch,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/crm.css";

function Clients() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const clients = [
    {
      id: 1,
      initials: "AM",
      name: "Aarav Mehta",
      company: "Nexa Digital",
      email: "aarav@nexa.com",
      value: "₹85,000",
      status: "Active",
    },
    {
      id: 2,
      initials: "RS",
      name: "Riya Shah",
      company: "Bright Studio",
      email: "riya@brightstudio.com",
      value: "₹62,500",
      status: "Active",
    },
    {
      id: 3,
      initials: "DP",
      name: "Dev Patel",
      company: "Vertex Labs",
      email: "dev@vertexlabs.in",
      value: "₹1,25,000",
      status: "Pending",
    },
    {
      id: 4,
      initials: "KM",
      name: "Krisha Mehta",
      company: "Nova Works",
      email: "krisha@novaworks.in",
      value: "₹48,000",
      status: "Active",
    },
  ];

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const query = search.toLowerCase();

      const matchesSearch =
        client.name.toLowerCase().includes(query) ||
        client.company.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" || client.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <DashboardLayout>
      <main className="crm-page">

        {/* BACK */}
        <Link to="/crm" className="crm-back-button">
          <FiArrowLeft />
          Back to CRM
        </Link>

        {/* HEADER */}
        <section className="crm-page-header">
          <div>
            <span className="crm-page-label">
              CUSTOMER RELATIONSHIP MANAGEMENT
            </span>

            <h1>Clients</h1>

            <p>
              Manage client profiles, contact information and business
              relationships from one professional workspace.
            </p>
          </div>

          <button
            type="button"
            className="crm-add-button"
            onClick={() => navigate("/crm/clients/add")}
          >
            <FiPlus />
            Add Client
          </button>
        </section>

        {/* OVERVIEW */}
        <section className="crm-overview-section">
          <div className="crm-section-heading">
            <div>
              <span>CLIENT OVERVIEW</span>
              <h2>Workspace Statistics</h2>
            </div>

            <p>
              Monitor customer activity, status and growth.
            </p>
          </div>

          <div className="crm-stats-grid">

            <article className="crm-stat-card">
              <div className="crm-stat-icon blue">
                <FiUsers />
              </div>

              <div className="crm-stat-content">
                <span>Total Clients</span>
                <strong>128</strong>
                <small>14 new clients this month</small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon green">
                <FiUserCheck />
              </div>

              <div className="crm-stat-content">
                <span>Active Clients</span>
                <strong>96</strong>
                <small>Currently working with your team</small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon orange">
                <FiClock />
              </div>

              <div className="crm-stat-content">
                <span>Pending Clients</span>
                <strong>18</strong>
                <small>Awaiting next action</small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon purple">
                <FiTrendingUp />
              </div>

              <div className="crm-stat-content">
                <span>Client Growth</span>
                <strong>+12.2%</strong>
                <small>Compared with last month</small>
              </div>
            </article>

          </div>
        </section>

        {/* SEARCH */}
        <section className="crm-search-panel">
          <div className="crm-panel-heading">
            <div>
              <span>SEARCH AND FILTER</span>
              <h2>Find Clients</h2>

              <p>
                Search customers and filter them by current status.
              </p>
            </div>
          </div>

          <div className="crm-toolbar">

            <div className="crm-search">
              <FiSearch />

              <input
                type="text"
                value={search}
                placeholder="Search by client, company or email..."
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  className="crm-search-clear"
                  onClick={() => setSearch("")}
                >
                  <FiX />
                </button>
              )}
            </div>

            <div className="crm-filter">
              <FiFilter />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

          </div>
        </section>

        {/* CLIENTS */}
        <section className="crm-directory-section">
          <div className="crm-results-row">
            <div>
              <span>CLIENT RESULTS</span>

              <strong>
                {filteredClients.length} clients found
              </strong>
            </div>

            <button type="button">
              View customer report
            </button>
          </div>

          <div className="crm-client-grid">

            {filteredClients.map((client) => (
              <article
                className="crm-client-card"
                key={client.id}
              >
                <div className="crm-client-card-header">

                  <div className="crm-client-avatar">
                    {client.initials}
                  </div>

                  <div className="crm-client-info">
                    <strong>{client.name}</strong>
                    <span>{client.company}</span>
                  </div>

                  <span
                    className={`crm-status ${
                      client.status === "Active"
                        ? "crm-status-active"
                        : "crm-status-pending"
                    }`}
                  >
                    {client.status}
                  </span>

                </div>

                <div className="crm-client-contact">
                  <FiMail />
                  <span>{client.email}</span>
                </div>

                <div className="crm-client-value">
                  <span>Client Value</span>
                  <strong>{client.value}</strong>
                </div>

                <div className="crm-client-actions">
                  <button type="button">
                    View Details
                  </button>

                  <button type="button">
                    Edit
                  </button>
                </div>

              </article>
            ))}

          </div>
        </section>

      </main>
    </DashboardLayout>
  );
}

export default Clients; 