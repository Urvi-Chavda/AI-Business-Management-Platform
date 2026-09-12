import {
  FiBriefcase,
  FiCheckSquare,
  FiDollarSign,
  FiFileText,
  FiTrendingDown,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

function StatsCards() {
  const statistics = [
    {
      title: "Total Revenue",
      value: "₹2,48,500",
      change: "18.5%",
      trend: "up",
      description: "Compared with last month",
      icon: <FiDollarSign />,
      className: "stats-revenue",
    },
    {
      title: "Active Clients",
      value: "128",
      change: "12.2%",
      trend: "up",
      description: "14 new clients this month",
      icon: <FiUsers />,
      className: "stats-clients",
    },
    {
      title: "Active Projects",
      value: "42",
      change: "8.4%",
      trend: "up",
      description: "6 projects near completion",
      icon: <FiBriefcase />,
      className: "stats-projects",
    },
    {
      title: "Completed Tasks",
      value: "184",
      change: "26.8%",
      trend: "up",
      description: "32 tasks completed this week",
      icon: <FiCheckSquare />,
      className: "stats-tasks",
    },
    {
      title: "Pending Invoices",
      value: "12",
      change: "4.3%",
      trend: "down",
      description: "₹58,400 payment pending",
      icon: <FiFileText />,
      className: "stats-invoices",
    },
    {
      title: "Team Members",
      value: "19",
      change: "10.5%",
      trend: "up",
      description: "2 members joined recently",
      icon: <FiUsers />,
      className: "stats-employees",
    },
  ];

  return (
    <section className="dashboard-stats-section">
      <div className="dashboard-section-heading">
        <div>
          <span>Business statistics</span>
          <h2>Workspace Overview</h2>
        </div>

        <button type="button">View detailed report</button>
      </div>

      <div className="dashboard-stats-grid">
        {statistics.map((item) => (
          <article
            className={`dashboard-stats-card ${item.className}`}
            key={item.title}
          >
            <div className="dashboard-stats-card-header">
              <div className="dashboard-stats-icon">
                {item.icon}
              </div>

              <div
                className={`dashboard-stats-change ${
                  item.trend === "down"
                    ? "dashboard-stats-change-down"
                    : ""
                }`}
              >
                {item.trend === "up" ? (
                  <FiTrendingUp />
                ) : (
                  <FiTrendingDown />
                )}

                <span>{item.change}</span>
              </div>
            </div>

            <div className="dashboard-stats-content">
              <span className="dashboard-stats-title">
                {item.title}
              </span>

              <strong>{item.value}</strong>

              <p>{item.description}</p>
            </div>

            <div className="dashboard-stats-footer">
              <span>View details</span>
              <span>→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsCards;