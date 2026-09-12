import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiCheckSquare,
  FiSave,
  FiShield,
  FiTrash2,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/team.css";

function ManageRole() {
  const navigate = useNavigate();
  const { id } = useParams();

  const roleData = {
    1: {
      name: "Administrator",
      description:
        "Full access to all platform modules and settings.",
      permissions: [
        "Dashboard",
        "Projects",
        "CRM",
        "Invoices",
        "Team",
        "Analytics",
      ],
    },

    2: {
      name: "Project Manager",
      description:
        "Manage projects, tasks and team collaboration.",
      permissions: [
        "Projects",
        "Tasks",
        "Kanban",
        "Team",
      ],
    },

    3: {
      name: "Employee",
      description:
        "Access assigned tasks and workspace features.",
      permissions: [
        "Tasks",
        "Kanban",
        "Chat",
        "Calendar",
      ],
    },
  };

  const selectedRole =
    roleData[id] || roleData[1];

  const [form, setForm] = useState({
    roleName: selectedRole.name,
    description: selectedRole.description,
    permissions: selectedRole.permissions,
  });

  const permissionOptions = [
    "Dashboard",
    "Projects",
    "Tasks",
    "Kanban",
    "CRM",
    "Invoices",
    "Team",
    "Chat",
    "Calendar",
    "AI Assistant",
    "Analytics",
    "Admin Panel",
  ];

  const togglePermission = (permission) => {
    setForm((prev) => {
      const exists =
        prev.permissions.includes(permission);

      return {
        ...prev,
        permissions: exists
          ? prev.permissions.filter(
              (item) => item !== permission
            )
          : [...prev.permissions, permission],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Updated Role:",
      id,
      form
    );

    navigate("/team/roles");
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this role?"
    );

    if (confirmed) {
      navigate("/team/roles");
    }
  };

  return (
    <DashboardLayout>
      <main className="team-page">

        <button
          type="button"
          className="team-back-button"
          onClick={() => navigate("/team/roles")}
        >
          <FiArrowLeft />
          Back to Roles
        </button>

        <section className="team-page-header">
          <div>
            <span className="team-page-label">
              TEAM MANAGEMENT
            </span>

            <h1>Manage Role</h1>

            <p>
              Update role information and workspace
              permissions.
            </p>
          </div>

          <button
            type="button"
            className="team-danger-button"
            onClick={handleDelete}
          >
            <FiTrash2 />
            Delete Role
          </button>
        </section>

        <section className="team-form-card">

          <div className="team-form-heading">
            <span>ROLE INFORMATION</span>

            <h2>Role Details</h2>
          </div>

          <form
            className="team-employee-form"
            onSubmit={handleSubmit}
          >

            <div className="team-form-grid">

              <div className="team-form-group">
                <label>
                  Role Name
                </label>

                <div className="team-input-wrapper">
                  <FiShield />

                  <input
                    type="text"
                    value={form.roleName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        roleName:
                          e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="team-form-group team-form-full">
                <label>
                  Description
                </label>

                <textarea
                  rows="4"
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description:
                        e.target.value,
                    })
                  }
                />
              </div>

            </div>

            <div className="team-permission-section">

              <div className="team-form-heading">
                <span>PERMISSIONS</span>

                <h2>
                  Module Access
                </h2>
              </div>

              <div className="team-permission-grid">

                {permissionOptions.map(
                  (permission) => {
                    const selected =
                      form.permissions.includes(
                        permission
                      );

                    return (
                      <button
                        key={permission}
                        type="button"
                        className={`team-permission-option ${
                          selected
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          togglePermission(
                            permission
                          )
                        }
                      >
                        <FiCheckSquare />
                        {permission}
                      </button>
                    );
                  }
                )}

              </div>

            </div>

            <div className="team-form-actions">

              <button
                type="button"
                className="team-cancel-button"
                onClick={() =>
                  navigate("/team/roles")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="team-primary-button"
              >
                <FiSave />
                Save Changes
              </button>

            </div>

          </form>
        </section>

      </main>
    </DashboardLayout>
  );
}

export default ManageRole;