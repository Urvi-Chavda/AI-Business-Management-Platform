import { useMemo, useState } from "react";
import {
  FiCreditCard,
  FiLock,
  FiSearch,
  FiShield,
  FiTrash2,
  FiUnlock,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/admin.css";

function AdminPanel() {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Urvi Chavda",
      email: "urvi@example.com",
      role: "Admin",
      plan: "Pro",
      status: "Active",
    },
    {
      id: 2,
      name: "Aarav Mehta",
      email: "aarav@example.com",
      role: "Manager",
      plan: "Business",
      status: "Active",
    },
    {
      id: 3,
      name: "Riya Shah",
      email: "riya@example.com",
      role: "Employee",
      plan: "Starter",
      status: "Active",
    },
    {
      id: 4,
      name: "Dev Patel",
      email: "dev@example.com",
      role: "Employee",
      plan: "Starter",
      status: "Blocked",
    },
    {
      id: 5,
      name: "Krisha Mehta",
      email: "krisha@example.com",
      role: "Manager",
      plan: "Pro",
      status: "Active",
    },
  ]);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query) ||
        user.plan.toLowerCase().includes(query)
      );
    });
  }, [search, users]);

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const blockedUsers = users.filter(
    (user) => user.status === "Blocked"
  ).length;

  const adminUsers = users.filter(
    (user) => user.role === "Admin"
  ).length;

  const handleStatus = (id) => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );
  };

  const handleRoleChange = (id, role) => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id
          ? {
              ...user,
              role,
            }
          : user
      )
    );
  };

  const handlePlanChange = (id, plan) => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id
          ? {
              ...user,
              plan,
            }
          : user
      )
    );
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    setUsers((previous) =>
      previous.filter((user) => user.id !== id)
    );
  };

  return (
    <DashboardLayout>
      <main className="admin-page">

        <section className="admin-header">
          <div>
            <span className="admin-page-label">
              PLATFORM MANAGEMENT
            </span>

            <h1>Admin Panel</h1>

            <p>
              Manage platform users, account status,
              roles and subscription plans.
            </p>
          </div>

          <div className="admin-header-icon">
            <FiShield />
          </div>
        </section>

        <section className="admin-stats">

          <article className="admin-stat-card">
            <div className="admin-stat-icon">
              <FiUsers />
            </div>

            <div>
              <span>TOTAL USERS</span>
              <strong>{users.length}</strong>
            </div>
          </article>

          <article className="admin-stat-card">
            <div className="admin-stat-icon">
              <FiUserCheck />
            </div>

            <div>
              <span>ACTIVE USERS</span>
              <strong>{activeUsers}</strong>
            </div>
          </article>

          <article className="admin-stat-card">
            <div className="admin-stat-icon">
              <FiLock />
            </div>

            <div>
              <span>BLOCKED USERS</span>
              <strong>{blockedUsers}</strong>
            </div>
          </article>

          <article className="admin-stat-card">
            <div className="admin-stat-icon">
              <FiShield />
            </div>

            <div>
              <span>ADMINS</span>
              <strong>{adminUsers}</strong>
            </div>
          </article>

        </section>

        <section className="admin-card">

          <div className="admin-card-header">
            <div>
              <span>
                USER MANAGEMENT
              </span>

              <h2>
                Platform Users
              </h2>
            </div>

            <div className="admin-search">
              <FiSearch />

              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>
          </div>

          <div className="admin-table-wrapper">

            <table className="admin-table">
              <thead>
                <tr>
                  <th>USER</th>
                  <th>ROLE</th>
                  <th>PLAN</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>

                      <td>
                        <div className="admin-user-cell">

                          <div className="admin-avatar">
                            {user.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)}
                          </div>

                          <div>
                            <strong>
                              {user.name}
                            </strong>

                            <span>
                              {user.email}
                            </span>
                          </div>

                        </div>
                      </td>

                      <td>
                        <select
                          className="admin-role-select"
                          value={user.role}
                          onChange={(event) =>
                            handleRoleChange(
                              user.id,
                              event.target.value
                            )
                          }
                        >
                          <option value="Admin">
                            Admin
                          </option>

                          <option value="Manager">
                            Manager
                          </option>

                          <option value="Employee">
                            Employee
                          </option>
                        </select>
                      </td>

                      <td>
                        <select
                          className="admin-plan-select"
                          value={user.plan}
                          onChange={(event) =>
                            handlePlanChange(
                              user.id,
                              event.target.value
                            )
                          }
                        >
                          <option value="Starter">
                            Starter
                          </option>

                          <option value="Pro">
                            Pro
                          </option>

                          <option value="Business">
                            Business
                          </option>
                        </select>
                      </td>

                      <td>
                        <span
                          className={`admin-status ${
                            user.status === "Active"
                              ? "active"
                              : "blocked"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td>
                        <div className="admin-actions">

                          <button
                            type="button"
                            title={
                              user.status === "Active"
                                ? "Block User"
                                : "Unblock User"
                            }
                            onClick={() =>
                              handleStatus(user.id)
                            }
                          >
                            {user.status === "Active" ? (
                              <FiLock />
                            ) : (
                              <FiUnlock />
                            )}
                          </button>

                          <button
                            type="button"
                            className="delete"
                            title="Delete User"
                            onClick={() =>
                              handleDelete(user.id)
                            }
                          >
                            <FiTrash2 />
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="admin-empty"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default AdminPanel;