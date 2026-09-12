import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiFilter,
  FiPlus,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUserPlus,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/crm.css";

function Leads() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const leads = [
    {
      id: 1,
      initials: "AS",
      name: "Aditi Sharma",
      company: "PixelCraft",
      email: "aditi@pixelcraft.in",
      source: "Website",
      value: "₹75,000",
      status: "New",
    },
    {
      id: 2,
      initials: "RK",
      name: "Rahul Kumar",
      company: "TechNova",
      email: "rahul@technova.in",
      source: "Referral",
      value: "₹1,20,000",
      status: "Qualified",
    },
    {
      id: 3,
      initials: "NP",
      name: "Neha Patel",
      company: "Growthify",
      email: "neha@growthify.in",
      source: "LinkedIn",
      value: "₹95,000",
      status: "Contacted",
    },
    {
      id: 4,
      initials: "VM",
      name: "Vishal Mehta",
      company: "CloudCore",
      email: "vishal@cloudcore.in",
      source: "Website",
      value: "₹1,45,000",
      status: "Qualified",
    },
  ];

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const query = search.toLowerCase();

      const matchesSearch =
        lead.name.toLowerCase().includes(query) ||
        lead.company.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" || lead.status === status;

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

            <h1>Leads</h1>

            <p>
              Manage potential customers, opportunities and sales
              progress from one professional workspace.
            </p>
          </div>

          <button
            type="button"
            className="crm-add-button"
            onClick={() => navigate("/crm/leads/add")}
          >
            <FiPlus />
            Add Lead
          </button>
        </section>

        {/* STATISTICS */}
        <section className="crm-overview-section">

          <div className="crm-section-heading">
            <div>
              <span>LEAD OVERVIEW</span>
              <h2>Lead Statistics</h2>
            </div>

            <p>
              Monitor your sales pipeline and lead performance.
            </p>
          </div>

          <div className="crm-stats-grid">

            <article className="crm-stat-card">
              <div className="crm-stat-icon blue">
                <FiUserPlus />
              </div>

              <div className="crm-stat-content">
                <span>Total Leads</span>
                <strong>42</strong>
                <small>8 new leads this week</small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon purple">
                <FiClock />
              </div>

              <div className="crm-stat-content">
                <span>New Leads</span>
                <strong>14</strong>
                <small>Awaiting first contact</small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon orange">
                <FiTarget />
              </div>

              <div className="crm-stat-content">
                <span>Qualified</span>
                <strong>18</strong>
                <small>Ready for next sales stage</small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon green">
                <FiTrendingUp />
              </div>

              <div className="crm-stat-content">
                <span>Conversion Rate</span>
                <strong>68%</strong>
                <small>7% higher than last month</small>
              </div>
            </article>

          </div>
        </section>

        {/* SEARCH */}
        <section className="crm-search-panel">

          <div className="crm-panel-heading">
            <div>
              <span>SEARCH AND FILTER</span>
              <h2>Find Leads</h2>

              <p>
                Search potential customers and filter them by lead
                status.
              </p>
            </div>
          </div>

          <div className="crm-toolbar">

            <div className="crm-search">
              <FiSearch />

              <input
                type="text"
                placeholder="Search by lead, company or email..."
                value={search}
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
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
              </select>
            </div>

          </div>
        </section>

        {/* LEADS */}
        <section className="crm-directory-section">

          <div className="crm-results-row">
            <div>
              <span>LEAD RESULTS</span>

              <strong>
                {filteredLeads.length} leads found
              </strong>
            </div>

            <button type="button">
              View sales report
            </button>
          </div>

          <div className="crm-leads-grid">

            {filteredLeads.map((lead) => (
              <article
                className="crm-lead-card"
                key={lead.id}
              >

                <div className="crm-lead-top">

                  <div className="crm-client-avatar">
                    {lead.initials}
                  </div>

                  <div className="crm-lead-info">
                    <strong>{lead.name}</strong>
                    <span>{lead.company}</span>
                    <small>{lead.email}</small>
                  </div>

                  <span
                    className={`crm-lead-status crm-lead-${lead.status.toLowerCase()}`}
                  >
                    {lead.status}
                  </span>

                </div>

                <div className="crm-lead-details">

                  <div>
                    <span>Lead Source</span>
                    <strong>{lead.source}</strong>
                  </div>

                  <div>
                    <span>Opportunity</span>
                    <strong>{lead.value}</strong>
                  </div>

                </div>

                <div className="crm-lead-progress">

                  <div>
                    <span>Lead Progress</span>

                    <strong>
                      {lead.status === "New"
                        ? "25%"
                        : lead.status === "Contacted"
                        ? "55%"
                        : "80%"}
                    </strong>
                  </div>

                  <div className="crm-lead-progress-track">
                    <div
                      className={`crm-lead-progress-bar crm-progress-${lead.status.toLowerCase()}`}
                    />
                  </div>

                </div>

                <div className="crm-client-actions">

                  <button type="button">
                    View Details
                  </button>

                  <button type="button">
                    Edit Lead
                  </button>

                  <button type="button">
                    <FiCheckCircle />
                    Follow Up
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

export default Leads;