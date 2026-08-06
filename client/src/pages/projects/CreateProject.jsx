import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiFileText,
  FiFlag,
  FiPlus,
  FiSave,
  FiTag,
  FiUserPlus,
  FiUsers,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/projects.css";

function CreateProject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    category: "",
    priority: "Medium",
    startDate: "",
    dueDate: "",
    budget: "",
    description: "",
  });

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Urvi Chavda",
      role: "Project Manager",
      initials: "UC",
    },
  ]);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const availableMembers = [
    {
      id: 2,
      name: "Arjun Kumar",
      role: "Frontend Developer",
      initials: "AK",
    },
    {
      id: 3,
      name: "Riya Shah",
      role: "UI/UX Designer",
      initials: "RS",
    },
    {
      id: 4,
      name: "Meet Patel",
      role: "Backend Developer",
      initials: "MP",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = "Project name is required.";
    }

    if (!formData.clientName.trim()) {
      newErrors.clientName = "Client name is required.";
    }

    if (!formData.category) {
      newErrors.category = "Select a project category.";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required.";
    }

    if (!formData.dueDate) {
      newErrors.dueDate = "Due date is required.";
    }

    if (
      formData.startDate &&
      formData.dueDate &&
      new Date(formData.dueDate) < new Date(formData.startDate)
    ) {
      newErrors.dueDate = "Due date cannot be before start date.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required.";
    }

    return newErrors;
  };

  const addTeamMember = (member) => {
    const alreadyAdded = teamMembers.some(
      (teamMember) => teamMember.id === member.id
    );

    if (!alreadyAdded) {
      setTeamMembers((currentMembers) => [
        ...currentMembers,
        member,
      ]);
    }
  };

  const removeTeamMember = (memberId) => {
    setTeamMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== memberId)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProject = {
      id: Date.now(),
      ...formData,
      teamMembers,
      progress: 0,
      status: "Planning",
      createdAt: new Date().toISOString(),
    };

    const savedProjects = JSON.parse(
      localStorage.getItem("createdProjects") || "[]"
    );

    localStorage.setItem(
      "createdProjects",
      JSON.stringify([newProject, ...savedProjects])
    );

    setSuccessMessage("Project created successfully.");

    setTimeout(() => {
      navigate("/projects");
    }, 1200);
  };

  return (
    <DashboardLayout>
      <section className="create-project-page">
        <div className="create-project-header">
          <div>
            <button
              type="button"
              className="create-project-back-button"
              onClick={() => navigate("/projects")}
            >
              <FiArrowLeft />
              Back to Projects
            </button>

            <span className="projects-page-label">
              Project management
            </span>

            <h1>Create New Project</h1>

            <p>
              Add project information, deadlines, team members and
              business requirements.
            </p>
          </div>

          <div className="create-project-header-actions">
            <button
              type="button"
              className="create-project-cancel-button"
              onClick={() => navigate("/projects")}
            >
              Cancel
            </button>

            <button
              type="submit"
              form="create-project-form"
              className="projects-create-button"
            >
              <FiSave />
              Create Project
            </button>
          </div>
        </div>

        {successMessage && (
          <div className="create-project-success">
            <FiCheck />
            {successMessage}
          </div>
        )}

        <form
          id="create-project-form"
          className="create-project-layout"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="create-project-main-column">
            <section className="create-project-card">
              <div className="create-project-card-heading">
                <div className="create-project-heading-icon">
                  <FiBriefcase />
                </div>

                <div>
                  <h2>Basic Information</h2>
                  <p>Enter general project and client details.</p>
                </div>
              </div>

              <div className="create-project-form-grid">
                <div className="create-project-field full-width-field">
                  <label htmlFor="projectName">
                    Project name
                  </label>

                  <div
                    className={`create-project-input ${
                      errors.projectName
                        ? "create-project-input-error"
                        : ""
                    }`}
                  >
                    <FiBriefcase />

                    <input
                      id="projectName"
                      type="text"
                      name="projectName"
                      placeholder="Example: AI CRM Platform"
                      value={formData.projectName}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.projectName && (
                    <span className="create-project-error">
                      {errors.projectName}
                    </span>
                  )}
                </div>

                <div className="create-project-field">
                  <label htmlFor="clientName">Client name</label>

                  <div
                    className={`create-project-input ${
                      errors.clientName
                        ? "create-project-input-error"
                        : ""
                    }`}
                  >
                    <FiUsers />

                    <input
                      id="clientName"
                      type="text"
                      name="clientName"
                      placeholder="Client or company name"
                      value={formData.clientName}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.clientName && (
                    <span className="create-project-error">
                      {errors.clientName}
                    </span>
                  )}
                </div>

                <div className="create-project-field">
                  <label htmlFor="category">Category</label>

                  <div
                    className={`create-project-input ${
                      errors.category
                        ? "create-project-input-error"
                        : ""
                    }`}
                  >
                    <FiTag />

                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Select category</option>
                      <option value="Web Application">
                        Web Application
                      </option>
                      <option value="Mobile Application">
                        Mobile Application
                      </option>
                      <option value="UI/UX Design">
                        UI/UX Design
                      </option>
                      <option value="Dashboard">
                        Dashboard
                      </option>
                      <option value="SaaS Platform">
                        SaaS Platform
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {errors.category && (
                    <span className="create-project-error">
                      {errors.category}
                    </span>
                  )}
                </div>
              </div>
            </section>

            <section className="create-project-card">
              <div className="create-project-card-heading">
                <div className="create-project-heading-icon schedule-icon">
                  <FiCalendar />
                </div>

                <div>
                  <h2>Schedule and Budget</h2>
                  <p>Define timeline, priority and estimated budget.</p>
                </div>
              </div>

              <div className="create-project-form-grid">
                <div className="create-project-field">
                  <label htmlFor="startDate">Start date</label>

                  <div
                    className={`create-project-input ${
                      errors.startDate
                        ? "create-project-input-error"
                        : ""
                    }`}
                  >
                    <FiCalendar />

                    <input
                      id="startDate"
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.startDate && (
                    <span className="create-project-error">
                      {errors.startDate}
                    </span>
                  )}
                </div>

                <div className="create-project-field">
                  <label htmlFor="dueDate">Due date</label>

                  <div
                    className={`create-project-input ${
                      errors.dueDate
                        ? "create-project-input-error"
                        : ""
                    }`}
                  >
                    <FiCalendar />

                    <input
                      id="dueDate"
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.dueDate && (
                    <span className="create-project-error">
                      {errors.dueDate}
                    </span>
                  )}
                </div>

                <div className="create-project-field">
                  <label htmlFor="priority">Priority</label>

                  <div className="create-project-input">
                    <FiFlag />

                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                    >
                      <option value="Low">Low Priority</option>
                      <option value="Medium">
                        Medium Priority
                      </option>
                      <option value="High">High Priority</option>
                    </select>
                  </div>
                </div>

                <div className="create-project-field">
                  <label htmlFor="budget">
                    Estimated budget
                  </label>

                  <div className="create-project-input">
                    <span className="create-project-currency">₹</span>

                    <input
                      id="budget"
                      type="number"
                      name="budget"
                      min="0"
                      placeholder="Example: 150000"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="create-project-card">
              <div className="create-project-card-heading">
                <div className="create-project-heading-icon description-icon">
                  <FiFileText />
                </div>

                <div>
                  <h2>Project Description</h2>
                  <p>
                    Explain project goals, scope and important
                    requirements.
                  </p>
                </div>
              </div>

              <div className="create-project-field">
                <label htmlFor="description">Description</label>

                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the project purpose, expected features and business requirements..."
                  value={formData.description}
                  onChange={handleChange}
                  className={
                    errors.description
                      ? "create-project-textarea-error"
                      : ""
                  }
                />

                <div className="create-project-textarea-footer">
                  {errors.description ? (
                    <span className="create-project-error">
                      {errors.description}
                    </span>
                  ) : (
                    <span>
                      Add enough details to help your team understand
                      the project.
                    </span>
                  )}

                  <span>{formData.description.length}/500</span>
                </div>
              </div>
            </section>
          </div>

          <aside className="create-project-side-column">
            <section className="create-project-card">
              <div className="create-project-card-heading">
                <div className="create-project-heading-icon team-icon">
                  <FiUserPlus />
                </div>

                <div>
                  <h2>Project Team</h2>
                  <p>Assign members to this project.</p>
                </div>
              </div>

              <div className="selected-project-team">
                {teamMembers.map((member) => (
                  <div
                    className="selected-project-member"
                    key={member.id}
                  >
                    <span>{member.initials}</span>

                    <div>
                      <strong>{member.name}</strong>
                      <small>{member.role}</small>
                    </div>

                    {member.id !== 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeTeamMember(member.id)
                        }
                        aria-label={`Remove ${member.name}`}
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="available-project-members">
                <span>Available members</span>

                {availableMembers.map((member) => {
                  const isAdded = teamMembers.some(
                    (teamMember) => teamMember.id === member.id
                  );

                  return (
                    <button
                      type="button"
                      key={member.id}
                      disabled={isAdded}
                      onClick={() => addTeamMember(member)}
                    >
                      <span>{member.initials}</span>

                      <div>
                        <strong>{member.name}</strong>
                        <small>{member.role}</small>
                      </div>

                      {isAdded ? <FiCheck /> : <FiPlus />}
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="create-project-summary-card">
              <span className="projects-page-label">
                Project summary
              </span>

              <h2>
                {formData.projectName || "New Project"}
              </h2>

              <div className="create-project-summary-list">
                <div>
                  <span>Client</span>
                  <strong>
                    {formData.clientName || "Not selected"}
                  </strong>
                </div>

                <div>
                  <span>Category</span>
                  <strong>
                    {formData.category || "Not selected"}
                  </strong>
                </div>

                <div>
                  <span>Priority</span>
                  <strong>{formData.priority}</strong>
                </div>

                <div>
                  <span>Team members</span>
                  <strong>{teamMembers.length}</strong>
                </div>

                <div>
                  <span>Budget</span>
                  <strong>
                    {formData.budget
                      ? `₹${Number(
                          formData.budget
                        ).toLocaleString("en-IN")}`
                      : "Not defined"}
                  </strong>
                </div>
              </div>

              <button
                type="submit"
                className="create-project-summary-button"
              >
                <FiSave />
                Create Project
              </button>
            </section>
          </aside>
        </form>
      </section>
    </DashboardLayout>
  );
}

export default CreateProject;