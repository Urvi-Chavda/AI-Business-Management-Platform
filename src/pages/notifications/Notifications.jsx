import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiFolder,
  FiMessageSquare,
  FiSearch,
  FiTrash2,
  FiUserPlus,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/notifications.css";

function Notifications() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "project",
      title: "Project updated",
      message:
        "Aarav Mehta updated the AI Business Platform project timeline.",
      time: "5 min ago",
      read: false,
      route: "/projects",
    },
    {
      id: 2,
      type: "message",
      title: "New message received",
      message:
        "Riya Shah sent you a new message in team chat.",
      time: "12 min ago",
      read: false,
      route: "/chat",
    },
    {
      id: 3,
      type: "invoice",
      title: "Invoice marked as paid",
      message:
        "Invoice INV-2026-001 has been marked as paid.",
      time: "35 min ago",
      read: true,
      route: "/invoices",
    },
    {
      id: 4,
      type: "team",
      title: "New employee added",
      message:
        "Dev Patel has been added to the Development department.",
      time: "1 hour ago",
      read: true,
      route: "/team",
    },
    {
      id: 5,
      type: "calendar",
      title: "Upcoming meeting",
      message:
        "Project Review meeting starts tomorrow at 10:00 AM.",
      time: "2 hours ago",
      read: false,
      route: "/calendar",
    },
  ]);

  const filteredNotifications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notifications.filter((notification) => {
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "unread"
          ? !notification.read
          : notification.read;

      const matchesSearch =
        notification.title.toLowerCase().includes(query) ||
        notification.message.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [filter, search, notifications]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id) => {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((previous) =>
      previous.filter(
        (notification) => notification.id !== id
      )
    );
  };

  const handleOpenNotification = (notification) => {
    markAsRead(notification.id);

    navigate(notification.route);
  };

  const getIcon = (type) => {
    switch (type) {
      case "project":
        return <FiFolder />;

      case "message":
        return <FiMessageSquare />;

      case "invoice":
        return <FiDollarSign />;

      case "team":
        return <FiUserPlus />;

      case "calendar":
        return <FiClock />;

      default:
        return <FiBell />;
    }
  };

  return (
    <DashboardLayout>
      <main className="notifications-page">

        <section className="notifications-page-header">
          <div>
            <span className="notifications-page-label">
              WORKSPACE ACTIVITY
            </span>

            <h1>Notifications</h1>

            <p>
              Stay updated with project activity, messages,
              meetings, invoices and team updates.
            </p>
          </div>

          <button
            type="button"
            className="notifications-primary-button"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <FiCheckCircle />
            Mark All as Read
          </button>
        </section>

        <section className="notifications-stats-grid">

          <article className="notifications-stat-card">
            <div className="notifications-stat-icon">
              <FiBell />
            </div>

            <div>
              <span>TOTAL</span>
              <strong>{notifications.length}</strong>
            </div>
          </article>

          <article className="notifications-stat-card">
            <div className="notifications-stat-icon">
              <FiMessageSquare />
            </div>

            <div>
              <span>UNREAD</span>
              <strong>{unreadCount}</strong>
            </div>
          </article>

          <article className="notifications-stat-card">
            <div className="notifications-stat-icon">
              <FiCheckCircle />
            </div>

            <div>
              <span>READ</span>
              <strong>
                {notifications.length - unreadCount}
              </strong>
            </div>
          </article>

        </section>

        <section className="notifications-card">

          <div className="notifications-toolbar">

            <div className="notifications-tabs">

              <button
                type="button"
                className={
                  filter === "all" ? "active" : ""
                }
                onClick={() => setFilter("all")}
              >
                All
              </button>

              <button
                type="button"
                className={
                  filter === "unread" ? "active" : ""
                }
                onClick={() => setFilter("unread")}
              >
                Unread
              </button>

              <button
                type="button"
                className={
                  filter === "read" ? "active" : ""
                }
                onClick={() => setFilter("read")}
              >
                Read
              </button>

            </div>

            <div className="notifications-search">
              <FiSearch />

              <input
                type="text"
                placeholder="Search notifications..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

          </div>

          <div className="notifications-list">

            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(
                (notification) => (
                  <article
                    key={notification.id}
                    className={`notification-item ${
                      !notification.read
                        ? "unread"
                        : ""
                    }`}
                  >

                    <button
                      type="button"
                      className="notification-main"
                      onClick={() =>
                        handleOpenNotification(
                          notification
                        )
                      }
                    >

                      <div className="notification-icon">
                        {getIcon(notification.type)}
                      </div>

                      <div className="notification-content">

                        <div className="notification-title-row">
                          <h3>
                            {notification.title}
                          </h3>

                          {!notification.read && (
                            <span className="notification-dot" />
                          )}
                        </div>

                        <p>
                          {notification.message}
                        </p>

                        <span className="notification-time">
                          <FiClock />
                          {notification.time}
                        </span>

                      </div>

                    </button>

                    <div className="notification-actions">

                      {!notification.read && (
                        <button
                          type="button"
                          title="Mark as Read"
                          onClick={() =>
                            markAsRead(
                              notification.id
                            )
                          }
                        >
                          <FiCheck />
                        </button>
                      )}

                      <button
                        type="button"
                        title="Delete Notification"
                        className="delete"
                        onClick={() =>
                          deleteNotification(
                            notification.id
                          )
                        }
                      >
                        <FiTrash2 />
                      </button>

                    </div>

                  </article>
                )
              )
            ) : (
              <div className="notifications-empty">
                <FiBell />

                <h3>No notifications found</h3>

                <p>
                  There are no notifications matching
                  your current filter.
                </p>
              </div>
            )}

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default Notifications;