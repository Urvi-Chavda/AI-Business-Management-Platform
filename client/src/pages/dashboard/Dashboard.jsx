import { FiCalendar, FiPlus } from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatsCards from "../../components/dashboard/StatsCards";
import RevenueChart from "../../components/dashboard/RevenueChart";
import ProjectOverview from "../../components/dashboard/ProjectOverview";
import ProductivityWidgets from "../../components/dashboard/ProductivityWidgets";
import ActionWidgets from "../../components/dashboard/ActionWidgets";

import "../../styles/dashboard.css";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("aiBusinessUser") || "{}"
  );

  return (
    <DashboardLayout>
      <section className="dashboard-welcome-section">
        <div>
          <span className="dashboard-page-label">
            Dashboard overview
          </span>

          <h1>
            Good morning, {user.name || "Urvi"} 👋
          </h1>

          <p>
            Here is what is happening with your business today.
          </p>
        </div>

        <div className="dashboard-welcome-actions">
          <button
            type="button"
            className="dashboard-date-filter"
          >
            <FiCalendar />
            August 2026
          </button>

          <button
            type="button"
            className="dashboard-create-button"
          >
            <FiPlus />
            Create New
          </button>
        </div>
      </section>

      <StatsCards />

      <RevenueChart />

      <ProjectOverview />

      <ProductivityWidgets />

      <ActionWidgets />
    </DashboardLayout>
  );
}

export default Dashboard;