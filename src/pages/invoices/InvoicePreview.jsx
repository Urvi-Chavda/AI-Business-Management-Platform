import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  FiArrowLeft,
  FiCheckCircle,
  FiDownload,
  FiPrinter,
} from "react-icons/fi";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/invoice.css";

function InvoicePreview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [downloading, setDownloading] = useState(false);

  const invoice = {
    id,

    invoiceNo: `INV-2026-${String(id || 1).padStart(3, "0")}`,

    seller: {
      name: "AI Business Management Platform",
      address: "Ahmedabad, Gujarat, India",
      email: "billing@aibusiness.com",
      phone: "+91 98765 43210",
    },

    client: {
      name: "Aarav Mehta",
      company: "Nexa Digital",
      address: "Surat, Gujarat, India",
      email: "aarav@nexa.com",
      phone: "+91 98250 11223",
    },

    issueDate: "10 Aug 2026",
    dueDate: "20 Aug 2026",

    tax: 18,

    items: [
      {
        id: 1,
        description: "Website Design & Development",
        quantity: 1,
        rate: 50000,
      },
      {
        id: 2,
        description: "UI/UX Design Services",
        quantity: 1,
        rate: 22000,
      },
      {
        id: 3,
        description: "Project Setup & Deployment",
        quantity: 1,
        rate: 13000,
      },
    ],

    notes:
      "Thank you for your business. Please complete the payment before the due date. For billing related queries, contact our finance team.",
  };

  // ======================================================
  // CALCULATIONS
  // ======================================================

  const subtotal = invoice.items.reduce((total, item) => {
    return total + item.quantity * item.rate;
  }, 0);

  const taxAmount = subtotal * (invoice.tax / 100);

  const total = subtotal + taxAmount;

  // ======================================================
  // PRINT
  // ======================================================

  const handlePrint = () => {
    window.print();
  };

  // ======================================================
  // DOWNLOAD PDF
  // ======================================================

  const handleDownloadPDF = async () => {
    const invoiceElement =
      document.getElementById("invoice-preview");

    if (!invoiceElement) {
      console.error("Invoice preview element not found.");
      return;
    }

    try {
      setDownloading(true);

      const canvas = await html2canvas(invoiceElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imageData = canvas.toDataURL(
        "image/png",
        1.0
      );

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth =
        pdf.internal.pageSize.getWidth();

      const pdfHeight =
        pdf.internal.pageSize.getHeight();

      const margin = 10;

      const usableWidth =
        pdfWidth - margin * 2;

      const usableHeight =
        pdfHeight - margin * 2;

      const imageWidth = usableWidth;

      const imageHeight =
        (canvas.height * imageWidth) /
        canvas.width;

      // If invoice fits on one page
      if (imageHeight <= usableHeight) {
        pdf.addImage(
          imageData,
          "PNG",
          margin,
          margin,
          imageWidth,
          imageHeight
        );
      } else {
        // Multiple page support
        let heightLeft = imageHeight;
        let position = margin;

        pdf.addImage(
          imageData,
          "PNG",
          margin,
          position,
          imageWidth,
          imageHeight
        );

        heightLeft -= usableHeight;

        while (heightLeft > 0) {
          pdf.addPage();

          position =
            margin -
            (imageHeight - heightLeft);

          pdf.addImage(
            imageData,
            "PNG",
            margin,
            position,
            imageWidth,
            imageHeight
          );

          heightLeft -= usableHeight;
        }
      }

      pdf.save(`${invoice.invoiceNo}.pdf`);
    } catch (error) {
      console.error(
        "PDF download failed:",
        error
      );
    } finally {
      setDownloading(false);
    }
  };

  // ======================================================
  // MARK PAID
  // ======================================================

  const handleMarkAsPaid = () => {
    setPaymentStatus("Paid");
  };

  return (
    <DashboardLayout>
      <main className="invoice-page">

        {/* ==================================================
            BACK TO INVOICES
        ================================================== */}

        <button
          type="button"
          className="invoice-back-button invoice-back-as-button"
          onClick={() => navigate("/invoices")}
        >
          <FiArrowLeft />
          Back to Invoices
        </button>

        {/* ==================================================
            PAGE HEADER
        ================================================== */}

        <section className="invoice-details-page-header">

          <div>
            <span className="invoice-page-label">
              FINANCIAL MANAGEMENT
            </span>

            <h1>
              Invoice Preview
            </h1>

            <p>
              Review billing information, invoice items
              and payment details before printing or
              downloading the invoice.
            </p>
          </div>

          <div className="invoice-details-actions">

            {/* PRINT */}
            <button
              type="button"
              className="invoice-secondary-action"
              onClick={handlePrint}
            >
              <FiPrinter />
              Print
            </button>

            {/* DOWNLOAD PDF */}
            <button
              type="button"
              className="invoice-primary-button"
              onClick={handleDownloadPDF}
              disabled={downloading}
            >
              <FiDownload />

              {downloading
                ? "Generating PDF..."
                : "Download PDF"}
            </button>

          </div>

        </section>

        {/* ==================================================
            INVOICE DOCUMENT
        ================================================== */}

        <section
          id="invoice-preview"
          className="invoice-preview-card"
        >

          {/* ==================================================
              TOP
          ================================================== */}

          <div className="invoice-preview-top">

            {/* BRAND */}
            <div className="invoice-preview-brand">

              <div className="invoice-preview-logo">
                AI
              </div>

              <div>
                <strong>
                  AI Business
                </strong>

                <span>
                  Management Platform
                </span>
              </div>

            </div>

            {/* INVOICE NUMBER */}
            <div className="invoice-preview-title">

              <span>
                INVOICE
              </span>

              <h2>
                {invoice.invoiceNo}
              </h2>

              <span
                className={`invoice-status ${paymentStatus.toLowerCase()}`}
              >
                {paymentStatus === "Paid" && (
                  <FiCheckCircle />
                )}

                {paymentStatus}
              </span>

            </div>

          </div>

          {/* ==================================================
              FROM / BILL TO
          ================================================== */}

          <div className="invoice-address-grid">

            {/* FROM */}
            <div className="invoice-address-card">

              <span>
                FROM
              </span>

              <h3>
                {invoice.seller.name}
              </h3>

              <p>
                {invoice.seller.address}
              </p>

              <p>
                {invoice.seller.email}
              </p>

              <p>
                {invoice.seller.phone}
              </p>

            </div>

            {/* BILL TO */}
            <div className="invoice-address-card">

              <span>
                BILL TO
              </span>

              <h3>
                {invoice.client.name}
              </h3>

              <strong>
                {invoice.client.company}
              </strong>

              <p>
                {invoice.client.address}
              </p>

              <p>
                {invoice.client.email}
              </p>

              <p>
                {invoice.client.phone}
              </p>

            </div>

          </div>

          {/* ==================================================
              META INFORMATION
          ================================================== */}

          <div className="invoice-detail-meta-grid">

            <div>
              <span>
                Invoice Number
              </span>

              <strong>
                {invoice.invoiceNo}
              </strong>
            </div>

            <div>
              <span>
                Issue Date
              </span>

              <strong>
                {invoice.issueDate}
              </strong>
            </div>

            <div>
              <span>
                Due Date
              </span>

              <strong>
                {invoice.dueDate}
              </strong>
            </div>

            <div>
              <span>
                Payment Status
              </span>

              <strong
                className={
                  paymentStatus === "Paid"
                    ? "invoice-meta-status-paid"
                    : "invoice-meta-status"
                }
              >
                {paymentStatus}
              </strong>
            </div>

          </div>

          {/* ==================================================
              ITEMS TABLE
          ================================================== */}

          <div className="invoice-preview-table-wrapper">

            <table className="invoice-preview-table">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>

                {invoice.items.map((item, index) => (
                  <tr key={item.id}>

                    <td>
                      {index + 1}
                    </td>

                    <td>
                      <strong>
                        {item.description}
                      </strong>
                    </td>

                    <td>
                      {item.quantity}
                    </td>

                    <td>
                      ₹
                      {item.rate.toLocaleString(
                        "en-IN"
                      )}
                    </td>

                    <td>
                      <strong>
                        ₹
                        {(
                          item.quantity *
                          item.rate
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </strong>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          {/* ==================================================
              NOTES + SUMMARY
          ================================================== */}

          <div className="invoice-preview-bottom">

            {/* NOTES */}
            <div className="invoice-preview-notes">

              <span>
                NOTES
              </span>

              <p>
                {invoice.notes}
              </p>

            </div>

            {/* SUMMARY */}
            <div className="invoice-preview-summary">

              <div>
                <span>
                  Subtotal
                </span>

                <strong>
                  ₹
                  {subtotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>

              <div>
                <span>
                  Tax ({invoice.tax}%)
                </span>

                <strong>
                  ₹
                  {taxAmount.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>

              <div className="invoice-preview-total">

                <span>
                  Total Amount
                </span>

                <strong>
                  ₹
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>

          </div>

          {/* ==================================================
              DOCUMENT FOOTER
          ================================================== */}

          <div className="invoice-preview-footer">

            <p>
              Thank you for choosing AI Business
              Management Platform.
            </p>

            <span>
              This invoice was generated digitally.
            </span>

          </div>

        </section>

        {/* ==================================================
            PAYMENT ACTION
        ================================================== */}

        <div className="invoice-payment-actions">

          {paymentStatus !== "Paid" ? (
            <button
              type="button"
              className="invoice-mark-paid-button"
              onClick={handleMarkAsPaid}
            >
              <FiCheckCircle />
              Mark as Paid
            </button>
          ) : (
            <div className="invoice-paid-confirmation">

              <FiCheckCircle />

              <div>
                <strong>
                  Payment Completed
                </strong>

                <span>
                  This invoice is marked as paid.
                </span>
              </div>

            </div>
          )}

        </div>

      </main>
    </DashboardLayout>
  );
}

export default InvoicePreview;