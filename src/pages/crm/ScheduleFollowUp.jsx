import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiFileText,
  FiSave,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/crm.css";

function ScheduleFollowUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    client: "",
    company: "",
    type: "Call",
    date: "",
    time: "",
    priority: "Medium",
    status: "Scheduled",
    note: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Follow-up:", form);

    // Backend/MongoDB connect કર્યા પછી અહીં API call આવશે.
    navigate("/crm/follow-ups");
  };

  return (
    <DashboardLayout>
      <main className="crm-page">
        {/* BACK */}
        <Link
          to="/crm/follow-ups"
          className="crm-back-button"
        >
          <FiArrowLeft />
          Back to Follow-ups
        </Link>

        {/* HEADER */}
        <section className="crm-page-header">
          <div>
            <span className="crm-page-label">
              CUSTOMER RELATIONSHIP MANAGEMENT
            </span>

            <h1>Schedule Follow-up</h1>

            <p>
              Schedule a customer call, email, meeting or reminder
              and keep your next customer action organized.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="crm-form-panel">
          <div className="crm-panel-heading">
            <div>
              <span>FOLLOW-UP INFORMATION</span>

              <h2>Follow-up Details</h2>

              <p>
                Enter the customer interaction details below.
              </p>
            </div>
          </div>

          <form
            className="crm-form"
            onSubmit={handleSubmit}
          >
            <div className="crm-form-grid">
              {/* CLIENT */}
              <label className="crm-form-field">
                <span>Client Name *</span>

                <div className="crm-input-box">
                  <FiUser />

                  <input
                    type="text"
                    name="client"
                    placeholder="Enter client name"
                    value={form.client}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

              {/* COMPANY */}
              <label className="crm-form-field">
                <span>Company Name *</span>

                <div className="crm-input-box">
                  <FiUser />

                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    value={form.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

              {/* TYPE */}
              <label className="crm-form-field">
                <span>Follow-up Type *</span>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option value="Call">Call</option>
                  <option value="Email">Email</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Reminder">Reminder</option>
                </select>
              </label>

              {/* PRIORITY */}
              <label className="crm-form-field">
                <span>Priority</span>

                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </label>

              {/* DATE */}
              <label className="crm-form-field">
                <span>Follow-up Date *</span>

                <div className="crm-input-box">
                  <FiCalendar />

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

              {/* TIME */}
              <label className="crm-form-field">
                <span>Follow-up Time *</span>

                <div className="crm-input-box">
                  <FiClock />

                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

              {/* STATUS */}
              <label className="crm-form-field crm-form-full">
                <span>Status</span>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Scheduled">
                    Scheduled
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Completed">
                    Completed
                  </option>
                </select>
              </label>

              {/* NOTE */}
              <label className="crm-form-field crm-form-full">
                <span>Follow-up Note *</span>

                <div className="crm-textarea-box">
                  <FiFileText />

                  <textarea
                    name="note"
                    rows="5"
                    placeholder="Write follow-up details, discussion points or next action..."
                    value={form.note}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>

            {/* ACTIONS */}
            <div className="crm-form-actions">
              <button
                type="button"
                className="crm-cancel-button"
                onClick={() =>
                  navigate("/crm/follow-ups")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="crm-save-button"
              >
                <FiSave />
                Schedule Follow-up
              </button>
            </div>
          </form>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default ScheduleFollowUp;