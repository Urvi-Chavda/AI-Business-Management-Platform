import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiEdit2,
  FiEye,
  FiFilter,
  FiMail,
  FiPlus,
  FiSearch,
  FiShield,
  FiUserCheck,
  FiUsers,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/team.css";

function Employees() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const employees = [
    {
      id: 1,
      initials: "UC",
      name: "Urvi Chavda",
      email: "urvi@aibusiness.com",
      role: "Administrator",
      department: "Management",
      status: "Active",
      joined: "12 Jul 2026",
    },
    {
      id: 2,
      initials: "AM",
      name: "Aarav Mehta",
      email: "aarav@aibusiness.com",
      role: "Project Manager",
      department: "Projects",
      status: "Active",
      joined: "18 Jul 2026",
    },
    {
      id: 3,
      initials: "RS",
      name: "Riya Shah",
      email: "riya@aibusiness.com",
      role: "UI/UX Designer",
      department: "Design",
      status: "Active",
      joined: "22 Jul 2026",
    },
    {
      id: 4,
      initials: "DP",
      name: "Dev Patel",
      email: "dev@aibusiness.com",
      role: "Frontend Developer",
      department: "Development",
      status: "Active",
      joined: "02 Aug 2026",
    },
    {
      id: 5,
      initials: "KM",
      name: "Krisha Mehta",
      email: "krisha@aibusiness.com",
      role: "CRM Executive",
      department: "Sales",
      status: "Inactive",
      joined: "05 Aug 2026",
    },
  ];

  const filteredEmployees = useMemo(() => {
    const query = search.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(query) ||
        employee.email.toLowerCase().includes(query) ||
        employee.role.toLowerCase().includes(query);

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [search, department]);

  return (
    <DashboardLayout>
      <main className="team-page">

        {/* HEADER */}
        <section className="team-page-header">
          <div>
            <span className="team-page-label">
              TEAM MANAGEMENT
            </span>

            <h1>Team Members</h1>

            <p>
              Manage employees, roles, departments and attendance
              from one professional workspace.
            </p>
          </div>

          <button
            type="button"
            className="team-primary-button"
            onClick={() => navigate("/team/add")}
          >
            <FiPlus />
            Add Employee
          </button>
        </section>

        {/* TEAM NAVIGATION */}
        <section className="team-module-navigation">

          <button
            type="button"
            className="team-module-tab active"
            onClick={() => navigate("/team")}
          >
            <FiUsers />
            Employees
          </button>

          <button
            type="button"
            className="team-module-tab"
            onClick={() => navigate("/team/attendance")}
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

        {/* STATISTICS */}
        <section className="team-overview-section">

          <div className="team-section-heading">
            <div>
              <span>TEAM OVERVIEW</span>
              <h2>Workspace Statistics</h2>
            </div>

            <p>
              Monitor workforce and employee activity.
            </p>
          </div>

          <div className="team-stats-grid">

            <article className="team-stat-card">
              <div className="team-stat-icon blue">
                <FiUsers />
              </div>

              <div className="team-stat-content">
                <span>Total Employees</span>
                <strong>19</strong>
                <small>2 members joined recently</small>
              </div>
            </article>

            <article className="team-stat-card">
              <div className="team-stat-icon green">
                <FiUserCheck />
              </div>

              <div className="team-stat-content">
                <span>Active Members</span>
                <strong>16</strong>
                <small>Currently active in workspace</small>
              </div>
            </article>

            <article className="team-stat-card">
              <div className="team-stat-icon purple">
                <FiBriefcase />
              </div>

              <div className="team-stat-content">
                <span>Departments</span>
                <strong>6</strong>
                <small>Across the organization</small>
              </div>
            </article>

            <article className="team-stat-card">
              <div className="team-stat-icon orange">
                <FiClock />
              </div>

              <div className="team-stat-content">
                <span>Present Today</span>
                <strong>15</strong>
                <small>78.9% attendance today</small>
              </div>
            </article>

          </div>
        </section>

        {/* SEARCH AND FILTER */}
        <section className="team-search-panel">

          <div className="team-panel-heading">
            <span>SEARCH AND FILTER</span>

            <h2>Find Team Members</h2>

            <p>
              Search employees and filter them by department.
            </p>
          </div>

          <div className="team-toolbar">

            <div className="team-search-box">
              <FiSearch />

              <input
                type="text"
                placeholder="Search employee, email or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
            </div>

            <div className="team-filter-box">
              <FiFilter />

              <select
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
              >
                <option value="All">
                  All Departments
                </option>

                <option value="Management">
                  Management
                </option>

                <option value="Projects">
                  Projects
                </option>

                <option value="Design">
                  Design
                </option>

                <option value="Development">
                  Development
                </option>

                <option value="Sales">
                  Sales
                </option>

                <option value="Finance">
                  Finance
                </option>
              </select>
            </div>

          </div>
        </section>

        {/* EMPLOYEE DIRECTORY */}
        <section className="team-directory-section">

          <div className="team-results-heading">
            <div>
              <span>EMPLOYEE DIRECTORY</span>
              <h2>Team Members</h2>
            </div>

            <strong>
              {filteredEmployees.length} members found
            </strong>
          </div>

          <div className="team-table-wrapper">

            <table className="team-table">

              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee) => (
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

                          <span>
                            <FiMail />
                            {employee.email}
                          </span>
                        </div>

                      </div>
                    </td>

                    <td>
                      <span className="team-role">
                        {employee.role}
                      </span>
                    </td>

                    <td>
                      {employee.department}
                    </td>

                    <td>
                      <span
                        className={`team-status ${employee.status.toLowerCase()}`}
                      >
                        {employee.status === "Active" && (
                          <FiCheckCircle />
                        )}

                        {employee.status}
                      </span>
                    </td>

                    <td>
                      {employee.joined}
                    </td>

                    <td>
                      <div className="team-actions">

                        <button
                          type="button"
                          title="View Employee"
                        >
                          <FiEye />
                        </button>

                        <button
                          type="button"
                          title="Edit Employee"
                        >
                          <FiEdit2 />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          {filteredEmployees.length === 0 && (
            <div className="team-empty-state">
              <FiUsers />

              <h3>No employees found</h3>

              <p>
                Try changing your search or department filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDepartment("All");
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

export default Employees;