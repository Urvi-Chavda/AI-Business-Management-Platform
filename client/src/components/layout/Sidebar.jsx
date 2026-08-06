import { NavLink, useNavigate } from "react-router-dom";
import {
  FiActivity,
  FiBarChart2,
  FiBriefcase,
  FiCalendar,
  FiCheckSquare,
  FiChevronRight,
  FiColumns,
  FiCreditCard,
  FiFileText,
  FiGrid,
  FiLogOut,
  FiMessageSquare,
  FiSettings,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const navigationItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FiGrid />,
    },
    {
      title: "Projects",
      path: "/projects",
      icon: <FiBriefcase />,
    },
    {
      title: "Tasks",
      path: "/projects/tasks",
      icon: <FiCheckSquare />,
    },
    {
      title: "Kanban Board",
      path: "/projects/kanban",
      icon: <FiColumns />,
    },
    {
      title: "CRM",
      path: "/clients",
      icon: <FiUsers />,
    },
    {
      title: "Invoices",
      path: "/invoices",
      icon: <FiFileText />,
    },
    {
      title: "Team",
      path: "/team",
      icon: <FiUsers />,
    },
    {
      title: "Chat",
      path: "/chat",
      icon: <FiMessageSquare />,
      badge: 3,
    },
    {
      title: "Calendar",
      path: "/calendar",
      icon: <FiCalendar />,
    },
    {
      title: "AI Assistant",
      path: "/ai-assistant",
      icon: <FiZap />,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <FiBarChart2 />,
    },
  ];

  const managementItems = [
    {
      title: "Admin Panel",
      path: "/admin",
      icon: <FiActivity />,
    },
    {
      title: "Subscription",
      path: "/subscription",
      icon: <FiCreditCard />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FiSettings />,
    },
  ];

  const closeSidebar = () => {
    setSidebarOpen?.(false);
  };

  const handleWorkspaceClick = () => {
    navigate("/dashboard");
    closeSidebar();
  };

  const handleUpgrade = () => {
    navigate("/subscription");
    closeSidebar();
  };

  const handleLogout = () => {
    localStorage.removeItem("aiBusinessUser");
    localStorage.removeItem("token");

    closeSidebar();
    navigate("/login");
  };

  return (
    <aside
      className={`dashboard-sidebar ${
        sidebarOpen ? "dashboard-sidebar-open" : ""
      }`}
    >
      <div className="dashboard-sidebar-header">
        <button
          type="button"
          className="dashboard-sidebar-brand"
          onClick={() => {
            navigate("/dashboard");
            closeSidebar();
          }}
        >
          <span className="dashboard-brand-logo">AI</span>

          <span className="dashboard-brand-text">
            <strong>AI Business</strong>
            <small>Management Platform</small>
          </span>
        </button>

        <button
          type="button"
          className="dashboard-sidebar-close"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        >
          <FiX />
        </button>
      </div>

      <button
        type="button"
        className="dashboard-sidebar-workspace"
        onClick={handleWorkspaceClick}
      >
        <span className="workspace-icon">UC</span>

        <span className="workspace-content">
          <small>Current workspace</small>
          <strong>Urvi Business</strong>
        </span>

        <FiChevronRight />
      </button>

      <nav className="dashboard-sidebar-navigation">
        <div className="dashboard-navigation-section">
          <span className="dashboard-navigation-label">
            Workspace
          </span>

          <div className="dashboard-navigation-list">
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `dashboard-navigation-link ${
                    isActive
                      ? "dashboard-navigation-link-active"
                      : ""
                  }`
                }
              >
                <span className="dashboard-navigation-icon">
                  {item.icon}
                </span>

                <span className="dashboard-navigation-title">
                  {item.title}
                </span>

                {item.badge && (
                  <span className="dashboard-menu-badge">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="dashboard-navigation-section">
          <span className="dashboard-navigation-label">
            Management
          </span>

          <div className="dashboard-navigation-list">
            {managementItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `dashboard-navigation-link ${
                    isActive
                      ? "dashboard-navigation-link-active"
                      : ""
                  }`
                }
              >
                <span className="dashboard-navigation-icon">
                  {item.icon}
                </span>

                <span className="dashboard-navigation-title">
                  {item.title}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <div className="dashboard-sidebar-upgrade">
        <div className="dashboard-upgrade-icon">
          <FiZap />
        </div>

        <strong>Upgrade your plan</strong>

        <p>
          Unlock advanced AI tools, reports and business analytics.
        </p>

        <button
          type="button"
          onClick={handleUpgrade}
        >
          View Plans
        </button>
      </div>

      <div className="dashboard-sidebar-footer">
        <button
          type="button"
          onClick={handleLogout}
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;