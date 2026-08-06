import {
  FiArrowUpRight,
  FiBell,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiMessageSquare,
  FiPlus,
  FiUserPlus,
  FiUsers,
  FiZap,
} from "react-icons/fi";

function ActionWidgets() {
  const notifications = [
    {
      title: "New client registered",
      description: "Aarav Patel joined your CRM workspace.",
      time: "5 min ago",
      icon: <FiUserPlus />,
      className: "notification-blue",
    },
    {
      title: "Payment received",
      description: "₹24,500 received for Invoice #INV-2058.",
      time: "18 min ago",
      icon: <FiCheckCircle />,
      className: "notification-green",
    },
    {
      title: "Project deadline tomorrow",
      description: "Mobile App Design is due tomorrow at 5 PM.",
      time: "42 min ago",
      icon: <FiClock />,
      className: "notification-orange",
    },
    {
      title: "New team message",
      description: "Riya sent a message in the Design Team chat.",
      time: "1 hr ago",
      icon: <FiMessageSquare />,
      className: "notification-purple",
    },
  ];

  const quickActions = [
    {
      title: "Create Project",
      description: "Start a new project",
      icon: <FiBriefcase />,
      className: "quick-blue",
    },
    {
      title: "Add Client",
      description: "Create CRM contact",
      icon: <FiUsers />,
      className: "quick-purple",
    },
    {
      title: "Generate Invoice",
      description: "Create a new invoice",
      icon: <FiFileText />,
      className: "quick-orange",
    },
    {
      title: "Schedule Meeting",
      description: "Add a calendar event",
      icon: <FiCalendar />,
      className: "quick-green",
    },
    {
      title: "Invite Employee",
      description: "Add a team member",
      icon: <FiUserPlus />,
      className: "quick-pink",
    },
    {
      title: "AI Assistant",
      description: "Automate your work",
      icon: <FiZap />,
      className: "quick-ai",
    },
  ];

  const tasks = [
    {
      title: "Homepage UI Review",
      project: "Website Redesign",
      progress: 100,
      status: "Completed",
      due: "Completed today",
      className: "task-complete",
    },
    {
      title: "Client CRM Integration",
      project: "CRM Management System",
      progress: 72,
      status: "In Progress",
      due: "Due 15 Aug",
      className: "task-progress",
    },
    {
      title: "Mobile App Prototype",
      project: "Product Design",
      progress: 48,
      status: "In Progress",
      due: "Due 22 Aug",
      className: "task-warning",
    },
    {
      title: "Campaign Performance Report",
      project: "Marketing Campaign",
      progress: 85,
      status: "Review",
      due: "Due 10 Aug",
      className: "task-review",
    },
  ];

  return (
    <section className="dashboard-action-section">
      <article className="dashboard-notification-card">
        <div className="dashboard-action-header">
          <div>
            <span className="dashboard-card-label">Updates</span>
            <h2>Notifications</h2>
            <p>Latest updates from your business workspace.</p>
          </div>

          <button
            type="button"
            className="dashboard-notification-header-button"
          >
            <FiBell />
            <span>4</span>
          </button>
        </div>

        <div className="dashboard-notification-list">
          {notifications.map((notification) => (
            <div
              className="dashboard-notification-item"
              key={notification.title}
            >
              <div
                className={`dashboard-notification-icon ${notification.className}`}
              >
                {notification.icon}
              </div>

              <div className="dashboard-notification-content">
                <div>
                  <h3>{notification.title}</h3>
                  <span>{notification.time}</span>
                </div>

                <p>{notification.description}</p>
              </div>

              <span className="dashboard-notification-dot" />
            </div>
          ))}
        </div>

        <button type="button" className="dashboard-view-notifications">
          View all notifications
          <FiArrowUpRight />
        </button>
      </article>

      <article className="dashboard-task-progress-card">
        <div className="dashboard-action-header">
          <div>
            <span className="dashboard-card-label">
              Productivity
            </span>

            <h2>Task Progress</h2>

            <p>Track your active tasks and completion status.</p>
          </div>

          <button type="button" className="dashboard-task-add-button">
            <FiPlus />
            Add Task
          </button>
        </div>

        <div className="dashboard-task-summary">
          <div>
            <span>Completed</span>
            <strong>184</strong>
          </div>

          <div>
            <span>In Progress</span>
            <strong>32</strong>
          </div>

          <div>
            <span>Overdue</span>
            <strong>6</strong>
          </div>
        </div>

        <div className="dashboard-task-list">
          {tasks.map((task) => (
            <div className="dashboard-task-item" key={task.title}>
              <div className="dashboard-task-heading">
                <div>
                  <h3>{task.title}</h3>
                  <span>{task.project}</span>
                </div>

                <span
                  className={`dashboard-task-status ${task.className}`}
                >
                  {task.status}
                </span>
              </div>

              <div className="dashboard-task-meta">
                <span>
                  <FiClock />
                  {task.due}
                </span>

                <strong>{task.progress}%</strong>
              </div>

              <div className="dashboard-task-track">
                <span
                  className={task.className}
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="dashboard-view-tasks-button">
          View all tasks
          <FiArrowUpRight />
        </button>
      </article>

      <aside className="dashboard-quick-actions-card">
        <div className="dashboard-action-header">
          <div>
            <span className="dashboard-card-label">
              Shortcuts
            </span>

            <h2>Quick Actions</h2>

            <p>Access common business actions quickly.</p>
          </div>
        </div>

        <div className="dashboard-quick-actions-grid">
          {quickActions.map((action) => (
            <button
              type="button"
              className="dashboard-quick-action-item"
              key={action.title}
            >
              <span
                className={`dashboard-quick-action-icon ${action.className}`}
              >
                {action.icon}
              </span>

              <span className="dashboard-quick-action-content">
                <strong>{action.title}</strong>
                <small>{action.description}</small>
              </span>

              <FiArrowUpRight />
            </button>
          ))}
        </div>

        <div className="dashboard-shortcut-tip">
          <div>
            <FiZap />
          </div>

          <p>
            Use the AI Assistant to automate repetitive business tasks.
          </p>
        </div>
      </aside>
    </section>
  );
}

export default ActionWidgets;