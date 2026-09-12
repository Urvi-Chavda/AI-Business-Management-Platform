import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiDownload,
  FiMoreHorizontal,
  FiTrendingUp,
} from "react-icons/fi";

function RevenueChart() {
  const chartData = [
    { month: "Jan", revenue: 42, expense: 24 },
    { month: "Feb", revenue: 58, expense: 31 },
    { month: "Mar", revenue: 49, expense: 28 },
    { month: "Apr", revenue: 72, expense: 38 },
    { month: "May", revenue: 65, expense: 35 },
    { month: "Jun", revenue: 88, expense: 44 },
    { month: "Jul", revenue: 78, expense: 40 },
    { month: "Aug", revenue: 94, expense: 47 },
  ];

  return (
    <section className="dashboard-finance-section">
      <article className="dashboard-revenue-chart-card">
        <div className="dashboard-finance-card-header">
          <div>
            <span className="dashboard-card-label">Revenue analytics</span>
            <h2>Revenue Overview</h2>
            <p>Monthly revenue and expense performance</p>
          </div>

          <div className="dashboard-finance-actions">
            <button type="button" className="dashboard-report-button">
              <FiDownload />
              Export
            </button>

            <button
              type="button"
              className="dashboard-more-button"
              aria-label="More options"
            >
              <FiMoreHorizontal />
            </button>
          </div>
        </div>

        <div className="dashboard-chart-summary">
          <div>
            <span>Total Revenue</span>
            <strong>₹8,42,500</strong>

            <small className="positive-change">
              <FiArrowUpRight />
              18.5% from last period
            </small>
          </div>

          <div className="dashboard-chart-legend">
            <span>
              <i className="revenue-dot" />
              Revenue
            </span>

            <span>
              <i className="expense-dot" />
              Expenses
            </span>
          </div>
        </div>

        <div className="dashboard-bar-chart">
          <div className="dashboard-chart-axis">
            <span>₹10L</span>
            <span>₹7.5L</span>
            <span>₹5L</span>
            <span>₹2.5L</span>
            <span>₹0</span>
          </div>

          <div className="dashboard-chart-area">
            <div className="dashboard-chart-grid">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="dashboard-chart-columns">
              {chartData.map((item) => (
                <div className="dashboard-chart-column" key={item.month}>
                  <div className="dashboard-chart-bars">
                    <div
                      className="dashboard-revenue-bar"
                      style={{ height: `${item.revenue}%` }}
                    >
                      <span>₹{item.revenue * 10000}</span>
                    </div>

                    <div
                      className="dashboard-expense-bar"
                      style={{ height: `${item.expense}%` }}
                    >
                      <span>₹{item.expense * 10000}</span>
                    </div>
                  </div>

                  <small>{item.month}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <aside className="dashboard-income-summary-card">
        <div className="dashboard-finance-card-header">
          <div>
            <span className="dashboard-card-label">Finance summary</span>
            <h2>Income Summary</h2>
            <p>Current month financial overview</p>
          </div>

          <button
            type="button"
            className="dashboard-more-button"
            aria-label="More options"
          >
            <FiMoreHorizontal />
          </button>
        </div>

        <div className="dashboard-income-total">
          <span>Net Income</span>

          <strong>₹2,48,500</strong>

          <small>
            <FiTrendingUp />
            24.8% growth this month
          </small>
        </div>

        <div className="dashboard-income-items">
          <div className="dashboard-income-item">
            <div className="income-item-icon income-received-icon">
              <FiArrowUpRight />
            </div>

            <div>
              <span>Income Received</span>
              <strong>₹3,45,800</strong>
            </div>

            <small>+18.2%</small>
          </div>

          <div className="dashboard-income-item">
            <div className="income-item-icon income-expense-icon">
              <FiArrowDownRight />
            </div>

            <div>
              <span>Total Expenses</span>
              <strong>₹97,300</strong>
            </div>

            <small className="expense-percentage">-4.5%</small>
          </div>
        </div>

        <div className="dashboard-profit-progress">
          <div>
            <span>Monthly Target</span>
            <strong>83%</strong>
          </div>

          <div className="dashboard-profit-track">
            <span />
          </div>

          <p>
            ₹2,48,500 of ₹3,00,000 target achieved
          </p>
        </div>

        <button type="button" className="dashboard-finance-details-button">
          View Financial Report
          <FiArrowUpRight />
        </button>
      </aside>
    </section>
  );
}

export default RevenueChart;