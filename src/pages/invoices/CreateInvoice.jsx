import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiCalendar,
  FiFileText,
  FiPlus,
  FiSave,
  FiTrash2,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/invoice.css";

function CreateInvoice() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    invoiceNumber: "INV-2026-005",
    client: "",
    company: "",
    email: "",
    issueDate: "",
    dueDate: "",
    tax: 18,
    notes: "",
  });

  const [items, setItems] = useState([
    {
      id: 1,
      description: "",
      quantity: 1,
      rate: 0,
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        description: "",
        quantity: 1,
        rate: 0,
      },
    ]);
  };

  const removeItem = (id) => {
    if (items.length === 1) return;

    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const subtotal = items.reduce((total, item) => {
    return (
      total +
      Number(item.quantity || 0) *
        Number(item.rate || 0)
    );
  }, 0);

  const taxAmount =
    subtotal * (Number(form.tax || 0) / 100);

  const total = subtotal + taxAmount;

  const handleSubmit = (e) => {
    e.preventDefault();

    const invoiceData = {
      ...form,
      items,
      subtotal,
      taxAmount,
      total,
    };

    console.log("Invoice Created:", invoiceData);

    navigate("/invoices");
  };

  return (
    <DashboardLayout>
      <main className="invoice-page">

        {/* BACK */}
        <button
          type="button"
          className="invoice-back-button invoice-back-as-button"
          onClick={() => navigate("/invoices")}
        >
          <FiArrowLeft />
          Back to Invoices
        </button>

        {/* HEADER */}
        <section className="invoice-page-header">
          <div>
            <span className="invoice-page-label">
              FINANCIAL MANAGEMENT
            </span>

            <h1>Create Invoice</h1>

            <p>
              Create a professional client invoice with
              products, services and payment details.
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmit}>

          {/* INFO */}
          <section className="invoice-form-card">
            <div className="invoice-form-heading">
              <span>INVOICE INFORMATION</span>
              <h2>Invoice Details</h2>

              <p>
                Enter invoice and client information.
              </p>
            </div>

            <div className="invoice-form-grid">

              <label className="invoice-form-field">
                <span>Invoice Number *</span>

                <div className="invoice-input">
                  <FiFileText />

                  <input
                    type="text"
                    name="invoiceNumber"
                    value={form.invoiceNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

              <label className="invoice-form-field">
                <span>Client Name *</span>

                <div className="invoice-input">
                  <FiUser />

                  <input
                    type="text"
                    name="client"
                    value={form.client}
                    placeholder="Enter client name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

              <label className="invoice-form-field">
                <span>Company</span>

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  placeholder="Enter company name"
                  onChange={handleChange}
                />
              </label>

              <label className="invoice-form-field">
                <span>Email *</span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="client@example.com"
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="invoice-form-field">
                <span>Issue Date *</span>

                <div className="invoice-input">
                  <FiCalendar />

                  <input
                    type="date"
                    name="issueDate"
                    value={form.issueDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

              <label className="invoice-form-field">
                <span>Due Date *</span>

                <div className="invoice-input">
                  <FiCalendar />

                  <input
                    type="date"
                    name="dueDate"
                    value={form.dueDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>

            </div>
          </section>

          {/* ITEMS */}
          <section className="invoice-form-card">
            <div className="invoice-items-header">
              <div className="invoice-form-heading">
                <span>INVOICE ITEMS</span>
                <h2>Products & Services</h2>

                <p>
                  Add services or products included in this invoice.
                </p>
              </div>

              <button
                type="button"
                className="invoice-add-item-button"
                onClick={addItem}
              >
                <FiPlus />
                Add Item
              </button>
            </div>

            <div className="invoice-items-list">

              {items.map((item, index) => (
                <div
                  className="invoice-item-row"
                  key={item.id}
                >
                  <div className="invoice-item-number">
                    {index + 1}
                  </div>

                  <div>
                    <label>Description</label>

                    <input
                      type="text"
                      value={item.description}
                      placeholder="Service description"
                      onChange={(e) =>
                        handleItemChange(
                          item.id,
                          "description",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>

                  <div>
                    <label>Quantity</label>

                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(
                          item.id,
                          "quantity",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label>Rate (₹)</label>

                    <input
                      type="number"
                      min="0"
                      value={item.rate}
                      onChange={(e) =>
                        handleItemChange(
                          item.id,
                          "rate",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label>Amount</label>

                    <strong className="invoice-item-amount">
                      ₹
                      {(
                        Number(item.quantity || 0) *
                        Number(item.rate || 0)
                      ).toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="invoice-delete-item"
                    onClick={() => removeItem(item.id)}
                    disabled={items.length === 1}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}

            </div>
          </section>

          {/* SUMMARY */}
          <section className="invoice-form-card">
            <div className="invoice-form-heading">
              <span>PAYMENT SUMMARY</span>
              <h2>Invoice Summary</h2>
            </div>

            <div className="invoice-summary-layout">

              <label className="invoice-form-field">
                <span>Notes</span>

                <textarea
                  rows="5"
                  name="notes"
                  value={form.notes}
                  placeholder="Payment terms or additional notes..."
                  onChange={handleChange}
                />
              </label>

              <div className="invoice-summary-box">

                <div>
                  <span>Subtotal</span>

                  <strong>
                    ₹{subtotal.toLocaleString("en-IN")}
                  </strong>
                </div>

                <div>
                  <span>Tax</span>

                  <div className="invoice-tax-input">
                    <input
                      type="number"
                      name="tax"
                      value={form.tax}
                      min="0"
                      onChange={handleChange}
                    />

                    <span>%</span>
                  </div>
                </div>

                <div>
                  <span>Tax Amount</span>

                  <strong>
                    ₹{taxAmount.toLocaleString("en-IN")}
                  </strong>
                </div>

                <div className="invoice-total-row">
                  <span>Total Amount</span>

                  <strong>
                    ₹{total.toLocaleString("en-IN")}
                  </strong>
                </div>

              </div>
            </div>
          </section>

          {/* ACTIONS */}
          <div className="invoice-form-actions">
            <button
              type="button"
              className="invoice-cancel-button"
              onClick={() => navigate("/invoices")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="invoice-primary-button"
            >
              <FiSave />
              Create Invoice
            </button>
          </div>

        </form>
      </main>
    </DashboardLayout>
  );
}

export default CreateInvoice;