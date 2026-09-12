import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiBriefcase,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSave,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/crm.css";

function AddClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    value: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Client:", form);

    navigate("/crm/clients");
  };

  return (
    <DashboardLayout>
      <main className="crm-page">

        <Link
          to="/crm/clients"
          className="crm-back-button"
        >
          <FiArrowLeft />
          Back to Clients
        </Link>

        <section className="crm-page-header">
          <div>
            <span className="crm-page-label">
              CUSTOMER RELATIONSHIP MANAGEMENT
            </span>

            <h1>Add New Client</h1>

            <p>
              Create a new customer profile and keep important
              contact and business information organized.
            </p>
          </div>
        </section>

        <section className="crm-form-panel">

          <div className="crm-panel-heading">
            <div>
              <span>CLIENT INFORMATION</span>
              <h2>Client Details</h2>

              <p>
                Enter the customer information below.
              </p>
            </div>
          </div>

          <form
            className="crm-form"
            onSubmit={handleSubmit}
          >

            <div className="crm-form-grid">

              <label className="crm-form-field">
                <span>Client Name</span>

                <div className="crm-input-box">
                  <FiUser />

                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter client name"
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
                    placeholder="client@example.com"
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
                    required
                    type="text"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="crm-form-field">
                <span>Client Value</span>

                <div className="crm-input-box">
                  <span>₹</span>

                  <input
                    type="number"
                    name="value"
                    placeholder="85000"
                    value={form.value}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="crm-form-field">
                <span>Status</span>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </select>
              </label>

              <label className="crm-form-field crm-form-full">
                <span>Address</span>

                <div className="crm-input-box">
                  <FiMapPin />

                  <input
                    type="text"
                    name="address"
                    placeholder="Enter client address"
                    value={form.address}
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
                  navigate("/crm/clients")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="crm-save-button"
              >
                <FiSave />
                Save Client
              </button>

            </div>

          </form>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default AddClient;