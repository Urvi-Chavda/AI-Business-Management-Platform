import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiSave,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/team.css";

function AddEmployee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    status: "Active",
    joiningDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Employee Data:", formData);

    alert("Employee added successfully!");

    navigate("/team");
  };

  return (
    <DashboardLayout>
      <main className="team-page">

        {/* Back Button */}
        <button
          type="button"
          className="team-back-button"
          onClick={() => navigate("/team")}
        >
          <FiArrowLeft />
          Back to Team
        </button>

        {/* Header */}
        <section className="team-page-header">
          <div>
            <span className="team-page-label">
              TEAM MANAGEMENT
            </span>

            <h1>Add Employee</h1>

            <p>
              Add a new team member and assign their role,
              department and account status.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="team-form-card">

          <div className="team-form-heading">
            <span>EMPLOYEE INFORMATION</span>
            <h2>Employee Details</h2>

            <p>
              Enter the employee&apos;s personal and professional
              information.
            </p>
          </div>

          <form
            className="team-employee-form"
            onSubmit={handleSubmit}
          >

            <div className="team-form-grid">

              {/* Full Name */}
              <div className="team-form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <div className="team-input-wrapper">
                  <FiUser />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter employee name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="team-form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <div className="team-input-wrapper">
                  <FiMail />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="employee@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="team-form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <div className="team-input-wrapper">
                  <FiPhone />

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Role */}
              <div className="team-form-group">
                <label htmlFor="role">
                  Role
                </label>

                <div className="team-input-wrapper">
                  <FiBriefcase />

                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select Role
                    </option>

                    <option value="Administrator">
                      Administrator
                    </option>

                    <option value="Project Manager">
                      Project Manager
                    </option>

                    <option value="Developer">
                      Developer
                    </option>

                    <option value="UI/UX Designer">
                      UI/UX Designer
                    </option>

                    <option value="Employee">
                      Employee
                    </option>
                  </select>
                </div>
              </div>

              {/* Department */}
              <div className="team-form-group">
                <label htmlFor="department">
                  Department
                </label>

                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Department
                  </option>

                  <option value="Management">
                    Management
                  </option>

                  <option value="Projects">
                    Projects
                  </option>

                  <option value="Development">
                    Development
                  </option>

                  <option value="Design">
                    Design
                  </option>

                  <option value="Sales">
                    Sales
                  </option>

                  <option value="Finance">
                    Finance
                  </option>
                </select>
              </div>

              {/* Joining Date */}
              <div className="team-form-group">
                <label htmlFor="joiningDate">
                  Joining Date
                </label>

                <input
                  id="joiningDate"
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Status */}
              <div className="team-form-group">
                <label htmlFor="status">
                  Employee Status
                </label>

                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>

                  <option value="On Leave">
                    On Leave
                  </option>
                </select>
              </div>

            </div>

            {/* Actions */}
            <div className="team-form-actions">

              <button
                type="button"
                className="team-cancel-button"
                onClick={() => navigate("/team")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="team-primary-button"
              >
                <FiSave />
                Add Employee
              </button>

            </div>

          </form>
        </section>

      </main>
    </DashboardLayout>
  );
}

export default AddEmployee;