import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiList,
  FiTrendingUp,
} from "react-icons/fi";

function TaskStats({ tasks = [] }) {
  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const reviewTasks = tasks.filter(
    (task) => task.status === "Review"
  ).length;

  const statistics = [
    {
      title: "Total Tasks",
      value: totalTasks,
      description: "Across all projects",
      icon: <FiList />,
      className: "task-stat-blue",
    },
    {
      title: "Pending",
      value: pendingTasks,
      description: "Waiting to start",
      icon: <FiClock />,
      className: "task-stat-gray",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      description: "Currently active",
      icon: <FiTrendingUp />,
      className: "task-stat-purple",
    },
    {
      title: "Completed",
      value: completedTasks,
      description: "Successfully finished",
      icon: <FiCheckCircle />,
      className: "task-stat-green",
    },
    {
      title: "In Review",
      value: reviewTasks,
      description: "Waiting for approval",
      icon: <FiAlertCircle />,
      className: "task-stat-orange",
    },
  ];

  return (
    <section className="task-stats-wrapper">
      <div className="task-stats-title-row">
        <div>
          <span>Task Overview</span>
          <h2>Workspace Statistics</h2>
        </div>

        <p>
          Monitor task progress, workload and completion status.
        </p>
      </div>

      <div className="task-stats-grid">
        {statistics.map((stat) => (
          <article className="task-stat-card" key={stat.title}>
            <div className={`task-stat-icon ${stat.className}`}>
              {stat.icon}
            </div>

            <div className="task-stat-details">
              <span>{stat.title}</span>

              <strong>{stat.value}</strong>

              <p>{stat.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TaskStats;