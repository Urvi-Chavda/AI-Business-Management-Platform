import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheckSquare,
  FiSave,
  FiShield,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/team.css";

function CreateRole() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    roleName: "",
    description: "",
    permissions: [],
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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

    console.log("Created Role:", form);

    navigate("/team/roles");
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

            <h1>Create Role</h1>

            <p>
              Create a new workspace role and assign
              module permissions.
            </p>
          </div>
        </section>

        <section className="team-form-card">
          <div className="team-form-heading">
            <span>ROLE INFORMATION</span>

            <h2>Role Details</h2>

            <p>
              Define the role name, description and access.
            </p>
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
                    name="roleName"
                    placeholder="Example: Sales Manager"
                    value={form.roleName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="team-form-group team-form-full">
                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  rows="4"
                  placeholder="Describe this role..."
                  value={form.description}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="team-permission-section">
              <div className="team-form-heading">
                <span>PERMISSIONS</span>
                <h2>Module Access</h2>
              </div>

              <div className="team-permission-grid">
                {permissionOptions.map(
                  (permission) => {
                    const checked =
                      form.permissions.includes(
                        permission
                      );

                    return (
                      <button
                        key={permission}
                        type="button"
                        className={`team-permission-option ${
                          checked
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

                        <span>
                          {permission}
                        </span>
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
                Create Role
              </button>
            </div>

          </form>
        </section>

      </main>
    </DashboardLayout>
  );
}

export default CreateRole;