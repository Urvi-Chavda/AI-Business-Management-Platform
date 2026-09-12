import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiFolder,
  FiPlus,
  FiTrendingDown,
  FiTrendingUp,
  FiUserPlus,
  FiUsers,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/dashboard.css";

const stats = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹8,45,000",
    description: "₹68,000 this month",
    change: "18.5%",
    trend: "up",
    icon: FiDollarSign,
    type: "blue",
  },
  {
    id: 2,
    title: "Active Clients",
    value: "128",
    description: "14 new clients this month",
    change: "12.2%",
    trend: "up",
    icon: FiUsers,
    type: "cyan",
  },
  {
    id: 3,
    title: "Active Projects",
    value: "42",
    description: "6 projects near completion",
    change: "8.4%",
    trend: "up",
    icon: FiBriefcase,
    type: "purple",
  },
  {
    id: 4,
    title: "Pending Invoices",
    value: "12",
    description: "₹74,500 awaiting payment",
    change: "4.3%",
    trend: "down",
    icon: FiFileText,
    type: "orange",
  },
  {
    id: 5,
    title: "Team Members",
    value: "19",
    description: "3 members joined recently",
    change: "10.5%",
    trend: "up",
    icon: FiUsers,
    type: "pink",
  },
  {
    id: 6,
    title: "Tasks Completed",
    value: "86%",
    description: "124 tasks completed this month",
    change: "9.8%",
    trend: "up",
    icon: FiCheckCircle,
    type: "green",
  },
];

const projects = [
  {
    id: 1,
    name: "AI Business Platform",
    client: "Internal Project",
    progress: 82,
    status: "On Track",
  },
  {
    id: 2,
    name: "E-Commerce Website",
    client: "Nexa Digital",
    progress: 68,
    status: "In Progress",
  },
  {
    id: 3,
    name: "CRM Dashboard",
    client: "Growth Labs",
    progress: 91,
    status: "On Track",
  },
];

const activities = [
  {
    id: 1,
    title: "Invoice INV-2026-001 was paid",
    time: "12 minutes ago",
    icon: FiDollarSign,
  },
  {
    id: 2,
    title: "New client added to CRM",
    time: "45 minutes ago",
    icon: FiUserPlus,
  },
  {
    id: 3,
    title: "Project Review meeting scheduled",
    time: "2 hours ago",
    icon: FiCalendar,
  },
  {
    id: 4,
    title: "UI Design task completed",
    time: "3 hours ago",
    icon: FiCheckCircle,
  },
];

const revenueData = [
  { month: "Apr", value: 42 },
  { month: "May", value: 58 },
  { month: "Jun", value: 51 },
  { month: "Jul", value: 72 },
  { month: "Aug", value: 68 },
  { month: "Sep", value: 86 },
];

function Dashboard() {
  const navigate = useNavigate();

  const [createOpen, setCreateOpen] = useState(false);

  const [profile, setProfile] = useState({
    name: "Urvi Chavda",
  });

  /* =========================
     PROFILE SYNC
  ========================= */

  useEffect(() => {
    const loadProfile = () => {
      try {
        const savedProfile = JSON.parse(
          localStorage.getItem("userProfile") || "{}"
        );

        setProfile((prev) => ({
          ...prev,
          ...savedProfile,
        }));
      } catch {
        setProfile({
          name: "Urvi Chavda",
        });
      }
    };

    loadProfile();

    window.addEventListener(
      "profileUpdated",
      loadProfile
    );

    window.addEventListener(
      "storage",
      loadProfile
    );

    return () => {
      window.removeEventListener(
        "profileUpdated",
        loadProfile
      );

      window.removeEventListener(
        "storage",
        loadProfile
      );
    };
  }, []);

  /* =========================
     QUICK ACTIONS
  ========================= */

  const quickActions = [
    {
      title: "New Project",
      description: "Create a new project",
      icon: FiFolder,
      path: "/projects/create",
    },
    {
      title: "Add Client",
      description: "Add a client to CRM",
      icon: FiUsers,
      path: "/crm/clients/add",
    },
    {
      title: "Add Lead",
      description: "Create a new sales lead",
      icon: FiUserPlus,
      path: "/crm/leads/add",
    },
    {
      title: "Create Invoice",
      description: "Generate a new invoice",
      icon: FiFileText,
      path: "/invoices/create",
    },
    {
      title: "Add Employee",
      description: "Add a team member",
      icon: FiBriefcase,
      path: "/team/add",
    },
    {
      title: "Add Event",
      description: "Schedule calendar event",
      icon: FiCalendar,
      path: "/calendar/add",
    },
  ];

  const handleQuickAction = (path) => {
    setCreateOpen(false);
    navigate(path);
  };

  return (
    <DashboardLayout>
      <main className="dashboard-page">

        {/* HEADER */}

        <section className="dashboard-page-header">

          <div className="dashboard-page-heading">

            <span className="dashboard-page-label">
              OVERVIEW
            </span>

            <h1>
              Welcome back, {profile.name || "Urvi Chavda"} 👋
            </h1>

            <p>
              Here&apos;s what&apos;s happening
              with your business today.
            </p>

          </div>

          <div className="dashboard-page-actions">

            <button
              type="button"
              className="dashboard-date-button"
            >
              <FiCalendar />
              September 2026
            </button>

            <button
              type="button"
              className="dashboard-create-button"
              onClick={() => setCreateOpen(true)}
            >
              <FiPlus />
              Create New
            </button>

          </div>

        </section>

        {/* STATS */}

        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>

              <span className="dashboard-section-label">
                BUSINESS OVERVIEW
              </span>

              <h2>
                Performance Summary
              </h2>

            </div>

            <button
              type="button"
              className="dashboard-text-button"
              onClick={() => navigate("/analytics")}
            >
              View detailed report
              <FiArrowRight />
            </button>

          </div>

          <div className="dashboard-stats-grid">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.id}
                  className="dashboard-stat-card"
                >

                  <div className="dashboard-stat-top">

                    <div
                      className={`dashboard-stat-icon dashboard-stat-icon-${stat.type}`}
                    >
                      <Icon />
                    </div>

                    <span
                      className={`dashboard-stat-change ${
                        stat.trend === "up"
                          ? "positive"
                          : "negative"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <FiTrendingUp />
                      ) : (
                        <FiTrendingDown />
                      )}

                      {stat.change}
                    </span>

                  </div>

                  <div className="dashboard-stat-content">

                    <span className="dashboard-stat-title">
                      {stat.title}
                    </span>

                    <strong>
                      {stat.value}
                    </strong>

                    <p>
                      {stat.description}
                    </p>

                  </div>

                  <button
                    type="button"
                    className="dashboard-stat-link"
                  >
                    View details
                    <FiArrowRight />
                  </button>

                </article>
              );
            })}

          </div>

        </section>

        {/* REVENUE + PROJECTS */}

        <section className="dashboard-main-grid">

          <article className="dashboard-panel">

            <div className="dashboard-panel-header">

              <div>

                <span className="dashboard-section-label">
                  FINANCE
                </span>

                <h3>
                  Revenue Overview
                </h3>

                <p>
                  Monthly revenue performance.
                </p>

              </div>

              <div className="dashboard-panel-icon">
                <FiBarChart2 />
              </div>

            </div>

            <div className="dashboard-revenue-summary">

              <div>

                <span>
                  Total Revenue
                </span>

                <strong>
                  ₹8,45,000
                </strong>

              </div>

              <span className="dashboard-revenue-growth">
                <FiTrendingUp />
                18.5%
              </span>

            </div>

            <div className="dashboard-chart">

              {revenueData.map((item) => (
                <div
                  key={item.month}
                  className="dashboard-chart-item"
                >

                  <div className="dashboard-chart-track">

                    <div
                      className="dashboard-chart-bar"
                      style={{
                        height: `${item.value}%`,
                      }}
                    />

                  </div>

                  <span>
                    {item.month}
                  </span>

                </div>
              ))}

            </div>

          </article>

          <article className="dashboard-panel">

            <div className="dashboard-panel-header">

              <div>

                <span className="dashboard-section-label">
                  PROJECTS
                </span>

                <h3>
                  Project Overview
                </h3>

                <p>
                  Track current project progress.
                </p>

              </div>

              <button
                type="button"
                className="dashboard-small-link"
                onClick={() => navigate("/projects")}
              >
                View All
              </button>

            </div>

            <div className="dashboard-project-list">

              {projects.map((project) => (
                <div
                  key={project.id}
                  className="dashboard-project-item"
                >

                  <div className="dashboard-project-row">

                    <div>

                      <strong>
                        {project.name}
                      </strong>

                      <span>
                        {project.client}
                      </span>

                    </div>

                    <span className="dashboard-project-percent">
                      {project.progress}%
                    </span>

                  </div>

                  <div className="dashboard-project-progress">

                    <div
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />

                  </div>

                  <div className="dashboard-project-footer">

                    <span>
                      {project.status}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/projects/${project.id}`
                        )
                      }
                    >
                      Details
                      <FiArrowRight />
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </article>

        </section>

        {/* ACTIVITY + PRODUCTIVITY */}

        <section className="dashboard-bottom-grid">

          <article className="dashboard-panel">

            <div className="dashboard-panel-header">

              <div>

                <span className="dashboard-section-label">
                  ACTIVITY
                </span>

                <h3>
                  Recent Activity
                </h3>

                <p>
                  Latest updates from your workspace.
                </p>

              </div>

              <FiClock className="dashboard-panel-header-icon" />

            </div>

            <div className="dashboard-activity-list">

              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.id}
                    className="dashboard-activity-item"
                  >

                    <div className="dashboard-activity-icon">
                      <Icon />
                    </div>

                    <div>

                      <strong>
                        {activity.title}
                      </strong>

                      <span>
                        {activity.time}
                      </span>

                    </div>

                  </div>
                );
              })}

            </div>

          </article>

          <article className="dashboard-panel">

            <div className="dashboard-panel-header">

              <div>

                <span className="dashboard-section-label">
                  PRODUCTIVITY
                </span>

                <h3>
                  Team Productivity
                </h3>

                <p>
                  Current monthly performance.
                </p>

              </div>

            </div>

            <div className="dashboard-productivity">

              <div className="dashboard-productivity-circle">

                <strong>
                  86%
                </strong>

                <span>
                  Overall
                </span>

              </div>

              <div className="dashboard-productivity-list">

                <ProductivityItem
                  label="Tasks Completed"
                  value="124"
                />

                <ProductivityItem
                  label="Pending Tasks"
                  value="18"
                />

                <ProductivityItem
                  label="Active Members"
                  value="19"
                />

                <ProductivityItem
                  label="Projects"
                  value="42"
                />

              </div>

            </div>

          </article>

        </section>

        {/* CREATE MODAL */}

        {createOpen && (
          <div
            className="dashboard-create-overlay"
            onClick={() => setCreateOpen(false)}
          >

            <div
              className="dashboard-create-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <div className="dashboard-create-modal-header">

                <div>

                  <span className="dashboard-section-label">
                    QUICK ACTION
                  </span>

                  <h3>
                    Create New
                  </h3>

                  <p>
                    Choose what you want to create.
                  </p>

                </div>

                <button
                  type="button"
                  className="dashboard-create-close"
                  onClick={() => setCreateOpen(false)}
                >
                  <FiX />
                </button>

              </div>

              <div className="dashboard-create-grid">

                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <button
                      key={action.title}
                      type="button"
                      className="dashboard-quick-action"
                      onClick={() =>
                        handleQuickAction(action.path)
                      }
                    >

                      <div className="dashboard-quick-action-icon">
                        <Icon />
                      </div>

                      <div>

                        <strong>
                          {action.title}
                        </strong>

                        <span>
                          {action.description}
                        </span>

                      </div>

                      <FiArrowRight className="dashboard-quick-action-arrow" />

                    </button>
                  );
                })}

              </div>

            </div>

          </div>
        )}

      </main>
    </DashboardLayout>
  );
}

function ProductivityItem({
  label,
  value,
}) {
  return (
    <div className="dashboard-productivity-item">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}

export default Dashboard;