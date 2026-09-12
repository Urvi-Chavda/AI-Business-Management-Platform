import { NavLink, useNavigate } from "react-router-dom";

import {
  FiActivity,
  FiBarChart2,
  FiBell,
  FiBriefcase,
  FiCalendar,
  FiCheckSquare,
  FiColumns,
  FiCreditCard,
  FiFileText,
  FiGrid,
  FiLogOut,
  FiMessageSquare,
  FiSettings,
  FiShield,
  FiUser,
  FiUsers,
  FiZap,
} from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();

  const mainItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: FiGrid,
    },
    {
      label: "Projects",
      path: "/projects",
      icon: FiBriefcase,
    },
    {
      label: "Tasks",
      path: "/projects/tasks",
      icon: FiCheckSquare,
    },
    {
      label: "Kanban Board",
      path: "/projects/kanban",
      icon: FiColumns,
    },
    {
      label: "CRM",
      path: "/crm",
      icon: FiUsers,
    },
    {
      label: "Invoices",
      path: "/invoices",
      icon: FiFileText,
    },
    {
      label: "Team",
      path: "/team",
      icon: FiUsers,
    },
    {
      label: "Chat",
      path: "/chat",
      icon: FiMessageSquare,
    },
    {
      label: "Calendar",
      path: "/calendar",
      icon: FiCalendar,
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: FiBell,
      badge: 3,
    },
    {
      label: "AI Assistant",
      path: "/ai-assistant",
      icon: FiZap,
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: FiBarChart2,
    },
  ];

  const managementItems = [
    {
      label: "Admin Panel",
      path: "/admin",
      icon: FiShield,
    },
    {
      label: "Subscription",
      path: "/subscription",
      icon: FiCreditCard,
    },
    {
      label: "My Profile",
      path: "/profile",
      icon: FiUser,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: FiSettings,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("aiBusinessUser");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <aside className="dashboard-sidebar">

      {/* BRAND */}

      <div className="sidebar-brand">

        <div className="sidebar-brand-icon">
          <FiActivity />
        </div>

        <div className="sidebar-brand-text">
          <strong>
            AI Business
          </strong>

          <span>
            Management Platform
          </span>
        </div>

      </div>

      {/* WORKSPACE */}

      <span className="sidebar-section-label">
        Workspace
      </span>

      <div className="sidebar-workspace">

        <div className="sidebar-workspace-icon">
          AB
        </div>

        <div className="sidebar-workspace-info">
          <strong>
            AI Business
          </strong>

          <span>
            Business Workspace
          </span>
        </div>

      </div>

      {/* MAIN MENU */}

      <span className="sidebar-section-label">
        Main Menu
      </span>

      <nav className="sidebar-navigation">

        {mainItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-nav-item ${
                  isActive
                    ? "active"
                    : ""
                }`
              }
            >
              <Icon />

              <span className="sidebar-nav-label">
                {item.label}
              </span>

              {item.badge && (
                <span className="sidebar-notification-badge">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

      </nav>

      {/* MANAGEMENT */}

      <span className="sidebar-section-label">
        Management
      </span>

      <nav className="sidebar-navigation sidebar-management-navigation">

        {managementItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-nav-item ${
                  isActive
                    ? "active"
                    : ""
                }`
              }
            >
              <Icon />

              <span className="sidebar-nav-label">
                {item.label}
              </span>
            </NavLink>
          );
        })}

      </nav>

      {/* BOTTOM */}

      <div className="sidebar-bottom">

        {/* UPGRADE */}

        <div className="sidebar-upgrade-card">

          <div className="sidebar-upgrade-icon">
            <FiZap />
          </div>

          <strong>
            Upgrade your plan
          </strong>

          <p>
            Unlock advanced AI and
            business management features.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/subscription")
            }
          >
            Upgrade Now
          </button>

        </div>

        {/* LOGOUT */}

        <button
          type="button"
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <FiLogOut />

          <span>
            Logout
          </span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;