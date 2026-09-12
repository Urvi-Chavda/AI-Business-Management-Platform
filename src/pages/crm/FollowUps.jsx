import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFilter,
  FiMail,
  FiPhone,
  FiPlus,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/crm.css";

function FollowUps() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const followUps = [
    {
      id: 1,
      client: "Aarav Mehta",
      company: "Nexa Digital",
      type: "Call",
      date: "14 Aug 2026",
      time: "10:30 AM",
      note: "Discuss website proposal and next milestones.",
      status: "Scheduled",
    },
    {
      id: 2,
      client: "Riya Shah",
      company: "Bright Studio",
      type: "Email",
      date: "14 Aug 2026",
      time: "12:00 PM",
      note: "Send revised project quotation.",
      status: "Pending",
    },
    {
      id: 3,
      client: "Dev Patel",
      company: "Vertex Labs",
      type: "Meeting",
      date: "15 Aug 2026",
      time: "03:30 PM",
      note: "Review CRM implementation requirements.",
      status: "Scheduled",
    },
    {
      id: 4,
      client: "Krisha Mehta",
      company: "Nova Works",
      type: "Call",
      date: "13 Aug 2026",
      time: "04:00 PM",
      note: "Confirm contract and payment timeline.",
      status: "Completed",
    },
  ];

  const filteredFollowUps = useMemo(() => {
    return followUps.filter((item) => {
      const query = search.toLowerCase();

      const matchesSearch =
        item.client.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const getTypeIcon = (type) => {
    if (type === "Call") return <FiPhone />;
    if (type === "Email") return <FiMail />;
    return <FiUsers />;
  };

  return (
    <DashboardLayout>
      <main className="crm-page">

        {/* BACK */}
        <Link
          to="/crm"
          className="crm-back-button"
        >
          <FiArrowLeft />
          Back to CRM
        </Link>

        {/* HEADER */}
        <section className="crm-page-header">
          <div>
            <span className="crm-page-label">
              CUSTOMER RELATIONSHIP MANAGEMENT
            </span>

            <h1>Follow-ups</h1>

            <p>
              Schedule client calls, emails, meetings and reminders
              so important customer conversations are never missed.
            </p>
          </div>

          <button
            type="button"
            className="crm-add-button"
            onClick={() =>
              navigate("/crm/follow-ups/add")
            }
          >
            <FiPlus />
            Schedule Follow-up
          </button>
        </section>

        {/* OVERVIEW */}
        <section className="crm-overview-section">

          <div className="crm-section-heading">
            <div>
              <span>FOLLOW-UP OVERVIEW</span>

              <h2>
                Activity Statistics
              </h2>
            </div>

            <p>
              Monitor upcoming and completed customer interactions.
            </p>
          </div>

          <div className="crm-stats-grid">

            <article className="crm-stat-card">
              <div className="crm-stat-icon blue">
                <FiCalendar />
              </div>

              <div className="crm-stat-content">
                <span>
                  Total Follow-ups
                </span>

                <strong>
                  28
                </strong>

                <small>
                  All scheduled interactions
                </small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon purple">
                <FiClock />
              </div>

              <div className="crm-stat-content">
                <span>
                  Today
                </span>

                <strong>
                  6
                </strong>

                <small>
                  Follow-ups scheduled today
                </small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon orange">
                <FiCalendar />
              </div>

              <div className="crm-stat-content">
                <span>
                  Pending
                </span>

                <strong>
                  9
                </strong>

                <small>
                  Awaiting next customer action
                </small>
              </div>
            </article>

            <article className="crm-stat-card">
              <div className="crm-stat-icon green">
                <FiCheckCircle />
              </div>

              <div className="crm-stat-content">
                <span>
                  Completed
                </span>

                <strong>
                  19
                </strong>

                <small>
                  Successfully completed interactions
                </small>
              </div>
            </article>

          </div>
        </section>

        {/* SEARCH */}
        <section className="crm-search-panel">

          <div className="crm-panel-heading">
            <div>
              <span>
                SEARCH AND FILTER
              </span>

              <h2>
                Find Follow-ups
              </h2>

              <p>
                Search by client, company or interaction type.
              </p>
            </div>
          </div>

          <div className="crm-toolbar">

            <div className="crm-search">
              <FiSearch />

              <input
                type="text"
                value={search}
                placeholder="Search client, company or follow-up type..."
                onChange={(e) =>
                  setSearch(e.target.value)
                }
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
                onChange={(e) =>
                  setStatus(e.target.value)
                }
              >
                <option value="All">
                  All Status
                </option>

                <option value="Scheduled">
                  Scheduled
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="Completed">
                  Completed
                </option>
              </select>
            </div>

          </div>
        </section>

        {/* RESULTS */}
        <section className="crm-directory-section">

          <div className="crm-results-row">
            <div>
              <span>
                FOLLOW-UP RESULTS
              </span>

              <strong>
                {filteredFollowUps.length} follow-ups found
              </strong>
            </div>

            <button type="button">
              View activity report
            </button>
          </div>

          <div className="crm-followup-grid">

            {filteredFollowUps.map((item) => (
              <article
                key={item.id}
                className="crm-followup-card"
              >

                <div className="crm-followup-header">

                  <div className="crm-followup-type-icon">
                    {getTypeIcon(item.type)}
                  </div>

                  <div className="crm-followup-client">
                    <strong>
                      {item.client}
                    </strong>

                    <span>
                      {item.company}
                    </span>
                  </div>

                  <span
                    className={`crm-followup-status crm-followup-${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>

                </div>

                <div className="crm-followup-meta">

                  <div>
                    <span>
                      Date
                    </span>

                    <strong>
                      {item.date}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Time
                    </span>

                    <strong>
                      {item.time}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Type
                    </span>

                    <strong>
                      {item.type}
                    </strong>
                  </div>

                </div>

                <div className="crm-followup-note">
                  <span>
                    FOLLOW-UP NOTE
                  </span>

                  <p>
                    {item.note}
                  </p>
                </div>

                <div className="crm-client-actions">

                  <button type="button">
                    View Details
                  </button>

                  <button type="button">
                    Edit
                  </button>

                  {item.status !== "Completed" && (
                    <button type="button">
                      <FiCheckCircle />
                      Mark Complete
                    </button>
                  )}

                </div>

              </article>
            ))}

          </div>

          {filteredFollowUps.length === 0 && (
            <div className="crm-no-results">
              <div>
                <FiCalendar />
              </div>

              <h2>
                No follow-ups found
              </h2>

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

export default FollowUps;