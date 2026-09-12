import { Link } from "react-router-dom";

import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiPlus,
  FiTrendingUp,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/crm.css";

function CRM() {
  return (
    <DashboardLayout>
      <main className="crm-page">

        {/* HEADER */}
        <section className="crm-page-header">
          <div>
            <span className="crm-page-label">
              CUSTOMER RELATIONSHIP MANAGEMENT
            </span>

            <h1>CRM Overview</h1>

            <p>
              Manage clients, leads and follow-ups from one connected
              customer workspace.
            </p>
          </div>

          <Link
            to="/crm/clients"
            className="crm-add-button"
          >
            <FiPlus />
            Add Client
          </Link>
        </section>

        {/* OVERVIEW */}
        <section className="crm-overview-section">

          <div className="crm-section-heading">
            <div>
              <span>CRM OVERVIEW</span>

              <h2>
                Customer Statistics
              </h2>
            </div>

            <p>
              Monitor clients, leads, follow-ups and customer conversion.
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
              <div className="crm-stat-icon purple">
                <FiUserPlus />
              </div>

              <div className="crm-stat-content">
                <span>Active Leads</span>
                <strong>42</strong>
                <small>8 leads added this week</small>
              </div>
            </article>


            <article className="crm-stat-card">
              <div className="crm-stat-icon orange">
                <FiCalendar />
              </div>

              <div className="crm-stat-content">
                <span>Follow-ups</span>
                <strong>18</strong>
                <small>6 scheduled for today</small>
              </div>
            </article>


            <article className="crm-stat-card">
              <div className="crm-stat-icon green">
                <FiTrendingUp />
              </div>

              <div className="crm-stat-content">
                <span>Conversion Rate</span>
                <strong>68%</strong>
                <small>Compared with 61% last month</small>
              </div>
            </article>

          </div>
        </section>

        {/* CRM WORKSPACE */}
        <section className="crm-workspace">

          <div className="crm-section-heading">
            <div>
              <span>CRM WORKSPACE</span>

              <h2>
                Manage Customer Relationships
              </h2>
            </div>

            <p>
              Access customer management tools from one workspace.
            </p>
          </div>

          <div className="crm-workspace-grid">

            {/* CLIENTS */}
            <Link
              to="/crm/clients"
              className="crm-workspace-card"
            >
              <div className="crm-workspace-icon blue">
                <FiUsers />
              </div>

              <div>
                <span>CLIENTS</span>

                <h3>
                  Client Management
                </h3>

                <p>
                  Add, view and manage customer profiles, companies,
                  contact details and business relationships.
                </p>
              </div>

              <span className="crm-workspace-arrow">
                →
              </span>
            </Link>


            {/* LEADS */}
            <Link
              to="/crm/leads"
              className="crm-workspace-card"
            >
              <div className="crm-workspace-icon purple">
                <FiUserPlus />
              </div>

              <div>
                <span>LEADS</span>

                <h3>
                  Lead Management
                </h3>

                <p>
                  Track potential customers, opportunities,
                  lead sources and sales progress.
                </p>
              </div>

              <span className="crm-workspace-arrow">
                →
              </span>
            </Link>


            {/* FOLLOW UPS */}
            <Link
              to="/crm/follow-ups"
              className="crm-workspace-card"
            >
              <div className="crm-workspace-icon orange">
                <FiClock />
              </div>

              <div>
                <span>FOLLOW-UPS</span>

                <h3>
                  Follow-up Manager
                </h3>

                <p>
                  Schedule customer calls, meetings,
                  reminders and important next actions.
                </p>
              </div>

              <span className="crm-workspace-arrow">
                →
              </span>
            </Link>

          </div>
        </section>


        {/* ACTIVITY */}
        <section className="crm-search-panel">

          <div className="crm-panel-heading">
            <div>
              <span>RECENT ACTIVITY</span>

              <h2>
                Customer Activity
              </h2>

              <p>
                Latest updates from your CRM workspace.
              </p>
            </div>
          </div>

          <div className="crm-activity-list">

            <div className="crm-activity-item">
              <div className="crm-activity-icon blue">
                <FiUsers />
              </div>

              <div>
                <strong>
                  New client added
                </strong>

                <span>
                  Aarav Mehta · Nexa Digital
                </span>
              </div>

              <small>
                10 min ago
              </small>
            </div>


            <div className="crm-activity-item">
              <div className="crm-activity-icon purple">
                <FiUserPlus />
              </div>

              <div>
                <strong>
                  New lead received
                </strong>

                <span>
                  Nova Labs · Website
                </span>
              </div>

              <small>
                35 min ago
              </small>
            </div>


            <div className="crm-activity-item">
              <div className="crm-activity-icon green">
                <FiCheckCircle />
              </div>

              <div>
                <strong>
                  Follow-up completed
                </strong>

                <span>
                  Riya Shah · Bright Studio
                </span>
              </div>

              <small>
                1 hr ago
              </small>
            </div>

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default CRM;