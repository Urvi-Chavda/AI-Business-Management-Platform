import { useMemo, useState } from "react";

import {
  FiActivity,
  FiArrowUpRight,
  FiBriefcase,
  FiDollarSign,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/analytics.css";

const analyticsByPeriod = {
  "30days": {
    label: "Last 30 Days",
    revenue: "₹95,000",
    projects: 4,
    clients: 12,
    productivity: "82%",
    revenueGrowth: "6.8%",
    projectGrowth: "1 new project",
    clientGrowth: "4.2% growth",
    productivityGrowth: "2.1% improvement",

    performance: {
      projectCompletion: 74,
      clientSatisfaction: 90,
      teamProductivity: 82,
      invoiceCollection: 69,
    },

    monthlyRevenue: [
      { month: "Week 1", value: 18 },
      { month: "Week 2", value: 21 },
      { month: "Week 3", value: 24 },
      { month: "Week 4", value: 32 },
    ],
  },

  "3months": {
    label: "Last 3 Months",
    revenue: "₹2,80,000",
    projects: 7,
    clients: 25,
    productivity: "84%",
    revenueGrowth: "8.5%",
    projectGrowth: "2 new projects",
    clientGrowth: "5.9% growth",
    productivityGrowth: "3.1% improvement",

    performance: {
      projectCompletion: 78,
      clientSatisfaction: 92,
      teamProductivity: 84,
      invoiceCollection: 72,
    },

    monthlyRevenue: [
      { month: "Jul", value: 78 },
      { month: "Aug", value: 91 },
      { month: "Sep", value: 111 },
    ],
  },

  "6months": {
    label: "Last 6 Months",
    revenue: "₹5,10,000",
    projects: 9,
    clients: 36,
    productivity: "85%",
    revenueGrowth: "10.3%",
    projectGrowth: "3 new projects",
    clientGrowth: "7.1% growth",
    productivityGrowth: "3.7% improvement",

    performance: {
      projectCompletion: 80,
      clientSatisfaction: 93,
      teamProductivity: 85,
      invoiceCollection: 74,
    },

    monthlyRevenue: [
      { month: "Apr", value: 62 },
      { month: "May", value: 71 },
      { month: "Jun", value: 79 },
      { month: "Jul", value: 88 },
      { month: "Aug", value: 96 },
      { month: "Sep", value: 114 },
    ],
  },

  year: {
    label: "This Year",
    revenue: "₹8,45,000",
    projects: 12,
    clients: 48,
    productivity: "86%",
    revenueGrowth: "12.5%",
    projectGrowth: "3 new projects",
    clientGrowth: "8.4% growth",
    productivityGrowth: "4.2% improvement",

    performance: {
      projectCompletion: 82,
      clientSatisfaction: 94,
      teamProductivity: 86,
      invoiceCollection: 76,
    },

    monthlyRevenue: [
      { month: "Apr", value: 42 },
      { month: "May", value: 58 },
      { month: "Jun", value: 51 },
      { month: "Jul", value: 72 },
      { month: "Aug", value: 68 },
      { month: "Sep", value: 86 },
    ],
  },
};

const projectPerformance = [
  {
    name: "AI Business Platform",
    progress: 82,
    status: "On Track",
  },
  {
    name: "E-Commerce Website",
    progress: 68,
    status: "In Progress",
  },
  {
    name: "CRM Dashboard",
    progress: 91,
    status: "On Track",
  },
  {
    name: "Mobile Application",
    progress: 54,
    status: "In Progress",
  },
];

const teamPerformance = [
  {
    name: "Urvi Chavda",
    role: "Administrator",
    tasks: 28,
    completed: 25,
    productivity: 89,
  },
  {
    name: "Aarav Mehta",
    role: "Project Manager",
    tasks: 24,
    completed: 21,
    productivity: 87,
  },
  {
    name: "Riya Shah",
    role: "UI/UX Designer",
    tasks: 20,
    completed: 17,
    productivity: 85,
  },
  {
    name: "Dev Patel",
    role: "Frontend Developer",
    tasks: 26,
    completed: 21,
    productivity: 81,
  },
];

function Analytics() {
  const [period, setPeriod] = useState("year");

  const currentData = analyticsByPeriod[period];

  const maxRevenue = useMemo(() => {
    return Math.max(
      ...currentData.monthlyRevenue.map((item) => item.value)
    );
  }, [currentData]);

  return (
    <DashboardLayout>
      <main className="analytics-page">

        {/* HEADER */}

        <section className="analytics-header">
          <div>
            <span className="analytics-label">
              BUSINESS INSIGHTS
            </span>

            <h1>Analytics</h1>

            <p>
              Monitor revenue, projects, clients and team
              performance from one place.
            </p>
          </div>

          <select
            className="analytics-period"
            value={period}
            onChange={(event) =>
              setPeriod(event.target.value)
            }
          >
            <option value="30days">
              Last 30 Days
            </option>

            <option value="3months">
              Last 3 Months
            </option>

            <option value="6months">
              Last 6 Months
            </option>

            <option value="year">
              This Year
            </option>
          </select>
        </section>

        {/* STATS */}

        <section className="analytics-stats">

          <article className="analytics-stat-card">
            <div className="analytics-stat-icon">
              <FiDollarSign />
            </div>

            <div className="analytics-stat-info">
              <span>TOTAL REVENUE</span>

              <strong>
                {currentData.revenue}
              </strong>

              <small className="positive">
                <FiArrowUpRight />
                {currentData.revenueGrowth} from previous period
              </small>
            </div>
          </article>

          <article className="analytics-stat-card">
            <div className="analytics-stat-icon">
              <FiBriefcase />
            </div>

            <div className="analytics-stat-info">
              <span>ACTIVE PROJECTS</span>

              <strong>
                {currentData.projects}
              </strong>

              <small className="positive">
                <FiArrowUpRight />
                {currentData.projectGrowth}
              </small>
            </div>
          </article>

          <article className="analytics-stat-card">
            <div className="analytics-stat-icon">
              <FiUsers />
            </div>

            <div className="analytics-stat-info">
              <span>TOTAL CLIENTS</span>

              <strong>
                {currentData.clients}
              </strong>

              <small className="positive">
                <FiArrowUpRight />
                {currentData.clientGrowth}
              </small>
            </div>
          </article>

          <article className="analytics-stat-card">
            <div className="analytics-stat-icon">
              <FiActivity />
            </div>

            <div className="analytics-stat-info">
              <span>TEAM PRODUCTIVITY</span>

              <strong>
                {currentData.productivity}
              </strong>

              <small className="positive">
                <FiArrowUpRight />
                {currentData.productivityGrowth}
              </small>
            </div>
          </article>

        </section>

        {/* MAIN GRID */}

        <section className="analytics-main-grid">

          {/* REVENUE */}

          <article className="analytics-card revenue-card">

            <div className="analytics-card-header">
              <div>
                <span>
                  REVENUE ANALYTICS
                </span>

                <h2>
                  Revenue Overview
                </h2>
              </div>

              <div className="analytics-growth">
                <FiTrendingUp />
                +{currentData.revenueGrowth}
              </div>
            </div>

            <div className="analytics-revenue-summary">
              <strong>
                {currentData.revenue}
              </strong>

              <span>
                Revenue for {currentData.label}
              </span>
            </div>

            <div className="analytics-chart">

              {currentData.monthlyRevenue.map((item) => (
                <div
                  className="analytics-bar-column"
                  key={item.month}
                >
                  <span className="analytics-bar-value">
                    ₹{item.value}K
                  </span>

                  <div className="analytics-bar-track">
                    <div
                      className="analytics-bar"
                      style={{
                        height: `${
                          (item.value / maxRevenue) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <span className="analytics-bar-month">
                    {item.month}
                  </span>
                </div>
              ))}

            </div>

          </article>

          {/* PERFORMANCE */}

          <article className="analytics-card">

            <div className="analytics-card-header">
              <div>
                <span>
                  BUSINESS OVERVIEW
                </span>

                <h2>
                  Performance
                </h2>
              </div>
            </div>

            <div className="analytics-performance-list">

              <div className="analytics-performance-item">
                <div>
                  <span>
                    Project Completion
                  </span>

                  <strong>
                    {
                      currentData.performance
                        .projectCompletion
                    }%
                  </strong>
                </div>

                <div className="analytics-progress">
                  <div
                    style={{
                      width: `${
                        currentData.performance
                          .projectCompletion
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="analytics-performance-item">
                <div>
                  <span>
                    Client Satisfaction
                  </span>

                  <strong>
                    {
                      currentData.performance
                        .clientSatisfaction
                    }%
                  </strong>
                </div>

                <div className="analytics-progress">
                  <div
                    style={{
                      width: `${
                        currentData.performance
                          .clientSatisfaction
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="analytics-performance-item">
                <div>
                  <span>
                    Team Productivity
                  </span>

                  <strong>
                    {
                      currentData.performance
                        .teamProductivity
                    }%
                  </strong>
                </div>

                <div className="analytics-progress">
                  <div
                    style={{
                      width: `${
                        currentData.performance
                          .teamProductivity
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="analytics-performance-item">
                <div>
                  <span>
                    Invoice Collection
                  </span>

                  <strong>
                    {
                      currentData.performance
                        .invoiceCollection
                    }%
                  </strong>
                </div>

                <div className="analytics-progress">
                  <div
                    style={{
                      width: `${
                        currentData.performance
                          .invoiceCollection
                      }%`,
                    }}
                  />
                </div>
              </div>

            </div>

          </article>

        </section>

        {/* PROJECT PERFORMANCE */}

        <section className="analytics-card analytics-projects">

          <div className="analytics-card-header">
            <div>
              <span>
                PROJECT ANALYTICS
              </span>

              <h2>
                Project Performance
              </h2>
            </div>
          </div>

          <div className="analytics-project-table">

            <div className="analytics-project-row table-heading">
              <span>PROJECT</span>
              <span>PROGRESS</span>
              <span>COMPLETION</span>
              <span>STATUS</span>
            </div>

            {projectPerformance.map((project) => (
              <div
                className="analytics-project-row"
                key={project.name}
              >
                <strong>
                  {project.name}
                </strong>

                <div className="analytics-project-progress">
                  <div
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>

                <span>
                  {project.progress}%
                </span>

                <span
                  className={`analytics-status ${
                    project.status === "On Track"
                      ? "on-track"
                      : ""
                  }`}
                >
                  {project.status}
                </span>
              </div>
            ))}

          </div>

        </section>

        {/* TEAM PERFORMANCE */}

        <section className="analytics-card analytics-team">

          <div className="analytics-card-header">
            <div>
              <span>
                TEAM ANALYTICS
              </span>

              <h2>
                Team Productivity
              </h2>
            </div>
          </div>

          <div className="analytics-team-grid">

            {teamPerformance.map((member) => (
              <article
                className="analytics-member"
                key={member.name}
              >
                <div className="analytics-member-top">

                  <div className="analytics-avatar">
                    {member.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <strong>
                      {member.name}
                    </strong>

                    <span>
                      {member.role}
                    </span>
                  </div>

                </div>

                <div className="analytics-member-stats">

                  <div>
                    <span>
                      Tasks
                    </span>

                    <strong>
                      {member.tasks}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Completed
                    </span>

                    <strong>
                      {member.completed}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Productivity
                    </span>

                    <strong>
                      {member.productivity}%
                    </strong>
                  </div>

                </div>

                <div className="analytics-progress">
                  <div
                    style={{
                      width: `${member.productivity}%`,
                    }}
                  />
                </div>

              </article>
            ))}

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default Analytics;