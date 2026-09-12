import { useNavigate } from "react-router-dom";

import {
  FiCalendar,
  FiCheckCircle,
  FiPlus,
  FiShield,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/team.css";

function Roles() {
  const navigate = useNavigate();

  const roles = [
    {
      id: 1,
      name: "Administrator",
      members: 2,
      description:
        "Full access to all platform modules, business settings and management controls.",
      permissions: [
        "Dashboard",
        "Projects",
        "CRM",
        "Invoices",
        "Team",
        "Analytics",
      ],
    },
    {
      id: 2,
      name: "Project Manager",
      members: 4,
      description:
        "Manage projects, tasks, Kanban workflow and team collaboration.",
      permissions: [
        "Projects",
        "Tasks",
        "Kanban",
        "Team",
      ],
    },
    {
      id: 3,
      name: "Employee",
      members: 10,
      description:
        "Access assigned tasks, collaboration tools and everyday workspace features.",
      permissions: [
        "Tasks",
        "Kanban",
        "Chat",
        "Calendar",
      ],
    },
  ];

  return (
    <DashboardLayout>
      <main className="team-page">

        {/* ==================================================
            HEADER
        ================================================== */}

        <section className="team-page-header">
          <div>
            <span className="team-page-label">
              TEAM MANAGEMENT
            </span>

            <h1>Roles & Permissions</h1>

            <p>
              Create workspace roles, assign module access and control
              employee permissions from one professional workspace.
            </p>
          </div>

          <button
            type="button"
            className="team-primary-button"
            onClick={() =>
              navigate("/team/roles/create")
            }
          >
            <FiPlus />
            Create Role
          </button>
        </section>

        {/* ==================================================
            TEAM MODULE NAVIGATION
        ================================================== */}

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
            className="team-module-tab"
            onClick={() =>
              navigate("/team/attendance")
            }
          >
            <FiCalendar />
            Attendance
          </button>

          <button
            type="button"
            className="team-module-tab active"
            onClick={() =>
              navigate("/team/roles")
            }
          >
            <FiShield />
            Roles & Permissions
          </button>

        </section>

        {/* ==================================================
            ROLE OVERVIEW
        ================================================== */}

        <section className="team-overview-section">

          <div className="team-section-heading">
            <div>
              <span>ACCESS CONTROL</span>

              <h2>Workspace Roles</h2>
            </div>

            <p>
              Manage responsibilities, permissions and module access.
            </p>
          </div>

          {/* ==================================================
              ROLE CARDS
          ================================================== */}

          <div className="team-role-grid">

            {roles.map((role) => (
              <article
                key={role.id}
                className="team-role-card"
              >

                {/* ROLE HEADER */}
                <div className="team-role-card-header">

                  <div className="team-stat-icon blue">
                    <FiShield />
                  </div>

                  <div>
                    <h3>
                      {role.name}
                    </h3>

                    <span>
                      {role.members} members
                    </span>
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p>
                  {role.description}
                </p>

                {/* PERMISSIONS */}
                <div className="team-permissions">

                  <span>
                    PERMISSIONS
                  </span>

                  {role.permissions.map(
                    (permission) => (
                      <div key={permission}>
                        <FiCheckCircle />

                        {permission}
                      </div>
                    )
                  )}

                </div>

                {/* MANAGE ROLE */}
                <button
                  type="button"
                  className="team-role-manage-button"
                  onClick={() =>
                    navigate(
                      `/team/roles/${role.id}`
                    )
                  }
                >
                  Manage Role
                </button>

              </article>
            ))}

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default Roles;