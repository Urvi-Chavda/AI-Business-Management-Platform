import { useState } from "react";
import Sidebar from "./Sidebar";
import "../../styles/dashboard.css";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && (
        <button
          type="button"
          className="dashboard-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <div className="dashboard-main-area">
        <header className="dashboard-topbar">
          <button
            type="button"
            className="dashboard-mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>

          <div className="dashboard-topbar-title">
            <span>AI Business Platform</span>
            <strong>Business Workspace</strong>
          </div>

          <div className="dashboard-topbar-actions">
            <button
              type="button"
              className="dashboard-icon-button"
              aria-label="Search"
            >
              🔍
            </button>

            <button
              type="button"
              className="dashboard-icon-button notification-button"
              aria-label="Notifications"
            >
              🔔
              <span />
            </button>

            <button type="button" className="dashboard-profile-button">
              <span className="dashboard-profile-avatar">UC</span>

              <span className="dashboard-profile-info">
                <strong>Urvi Chavda</strong>
                <small>Administrator</small>
              </span>

              <span className="dashboard-profile-arrow">⌄</span>
            </button>
          </div>
        </header>

        <main className="dashboard-page-content">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;