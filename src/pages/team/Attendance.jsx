import { useNavigate } from "react-router-dom";

import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiUsers,
  FiXCircle,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/team.css";

function Attendance() {
  const navigate = useNavigate();

  const attendance = [
    {
      id: 1,
      name: "Urvi Chavda",
      initials: "UC",
      checkIn: "09:05 AM",
      checkOut: "06:10 PM",
      status: "Present",
    },
    {
      id: 2,
      name: "Aarav Mehta",
      initials: "AM",
      checkIn: "09:12 AM",
      checkOut: "06:00 PM",
      status: "Present",
    },
    {
      id: 3,
      name: "Riya Shah",
      initials: "RS",
      checkIn: "--",
      checkOut: "--",
      status: "Absent",
    },
    {
      id: 4,
      name: "Dev Patel",
      initials: "DP",
      checkIn: "10:10 AM",
      checkOut: "06:20 PM",
      status: "Late",
    },
  ];

  return (
    <DashboardLayout>
      <main className="team-page">

        <section className="team-page-header">
          <div>
            <span className="team-page-label">
              TEAM MANAGEMENT
            </span>

            <h1>Attendance</h1>

            <p>
              Monitor employee attendance, check-in and
              check-out activity.
            </p>
          </div>
        </section>

        <section className="team-module-navigation">
          <button
            type="button"
            className="team-module-tab"
            onClick={() => navigate("/team")}
          >
            <FiUsers />
            Employees
          </button>

          <button
            type="button"
            className="team-module-tab active"
            onClick={() =>
              navigate("/team/attendance")
            }
          >
            <FiCalendar />
            Attendance
          </button>

          <button
            type="button"
            className="team-module-tab"
            onClick={() => navigate("/team/roles")}
          >
            <FiShield />
            Roles & Permissions
          </button>
        </section>

        <section className="team-overview-section">
          <div className="team-section-heading">
            <div>
              <span>ATTENDANCE OVERVIEW</span>
              <h2>Today&apos;s Statistics</h2>
            </div>
          </div>

          <div className="team-stats-grid">
            <article className="team-stat-card">
              <div className="team-stat-icon blue">
                <FiUsers />
              </div>

              <div className="team-stat-content">
                <span>Total Employees</span>
                <strong>19</strong>
                <small>All team members</small>
              </div>
            </article>

            <article className="team-stat-card">
              <div className="team-stat-icon green">
                <FiCheckCircle />
              </div>

              <div className="team-stat-content">
                <span>Present</span>
                <strong>15</strong>
                <small>Checked in today</small>
              </div>
            </article>

            <article className="team-stat-card">
              <div className="team-stat-icon orange">
                <FiClock />
              </div>

              <div className="team-stat-content">
                <span>Late</span>
                <strong>2</strong>
                <small>Late arrivals</small>
              </div>
            </article>

            <article className="team-stat-card">
              <div className="team-stat-icon purple">
                <FiXCircle />
              </div>

              <div className="team-stat-content">
                <span>Absent</span>
                <strong>2</strong>
                <small>Not checked in</small>
              </div>
            </article>
          </div>
        </section>

        <section className="team-directory-section">
          <div className="team-results-heading">
            <div>
              <span>DAILY ATTENDANCE</span>
              <h2>Employee Attendance</h2>
            </div>

            <strong>06 Sep 2026</strong>
          </div>

          <div className="team-table-wrapper">
            <table className="team-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {attendance.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <div className="team-employee-info">
                        <div className="team-avatar">
                          {employee.initials}
                        </div>

                        <div>
                          <strong>
                            {employee.name}
                          </strong>
                        </div>
                      </div>
                    </td>

                    <td>{employee.checkIn}</td>
                    <td>{employee.checkOut}</td>

                    <td>
                      <span
                        className={`team-status ${
                          employee.status === "Present"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </DashboardLayout>
  );
}

export default Attendance;