import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiSave,
  FiTarget,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/crm.css";

function AddLead() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    source: "Website",
    value: "",
    status: "New",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Lead:", form);

    navigate("/crm/leads");
  };

  return (
    <DashboardLayout>
      <main className="crm-page">

        <Link
          to="/crm/leads"
          className="crm-back-button"
        >
          <FiArrowLeft />
          Back to Leads
        </Link>

        <section className="crm-page-header">
          <div>
            <span className="crm-page-label">
              CUSTOMER RELATIONSHIP MANAGEMENT
            </span>

            <h1>Add New Lead</h1>

            <p>
              Add a potential customer and track their progress
              through your sales pipeline.
            </p>
          </div>
        </section>

        <section className="crm-form-panel">

          <div className="crm-panel-heading">
            <div>
              <span>LEAD INFORMATION</span>

              <h2>Lead Details</h2>

              <p>
                Enter the potential customer information below.
              </p>
            </div>
          </div>

          <form
            className="crm-form"
            onSubmit={handleSubmit}
          >

            <div className="crm-form-grid">

              <label className="crm-form-field">
                <span>Lead Name</span>

                <div className="crm-input-box">
                  <FiUser />

                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter lead name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="crm-form-field">
                <span>Company Name</span>

                <div className="crm-input-box">
                  <FiBriefcase />

                  <input
                    required
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="crm-form-field">
                <span>Email Address</span>

                <div className="crm-input-box">
                  <FiMail />

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="lead@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="crm-form-field">
                <span>Phone Number</span>

                <div className="crm-input-box">
                  <FiPhone />

                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="crm-form-field">
                <span>Lead Source</span>

                <select
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                >
                  <option value="Website">
                    Website
                  </option>

                  <option value="Referral">
                    Referral
                  </option>

                  <option value="LinkedIn">
                    LinkedIn
                  </option>

                  <option value="Social Media">
                    Social Media
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </label>

              <label className="crm-form-field">
                <span>Status</span>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="New">
                    New
                  </option>

                  <option value="Contacted">
                    Contacted
                  </option>

                  <option value="Qualified">
                    Qualified
                  </option>
                </select>
              </label>

              <label className="crm-form-field crm-form-full">
                <span>Opportunity Value</span>

                <div className="crm-input-box">
                  <FiTarget />

                  <input
                    type="number"
                    name="value"
                    placeholder="100000"
                    value={form.value}
                    onChange={handleChange}
                  />
                </div>
              </label>

            </div>

            <div className="crm-form-actions">

              <button
                type="button"
                className="crm-cancel-button"
                onClick={() =>
                  navigate("/crm/leads")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="crm-save-button"
              >
                <FiSave />
                Save Lead
              </button>

            </div>

          </form>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default AddLead;