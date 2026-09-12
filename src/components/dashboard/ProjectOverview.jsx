import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMoreHorizontal,
  FiUsers,
} from "react-icons/fi";

function ProjectOverview() {
  const projectProgress = [
    {
      name: "Website Redesign",
      category: "UI/UX Design",
      progress: 100,
      status: "Completed",
      deadline: "Completed",
      members: ["UC", "AK", "RS"],
      className: "project-blue",
    },
    {
      name: "CRM Management System",
      category: "Development",
      progress: 72,
      status: "In Progress",
      deadline: "15 Aug 2026",
      members: ["UC", "MP", "AK"],
      className: "project-purple",
    },
    {
      name: "Mobile Application",
      category: "Product Design",
      progress: 48,
      status: "In Progress",
      deadline: "22 Aug 2026",
      members: ["RS", "UC"],
      className: "project-orange",
    },
    {
      name: "Marketing Campaign",
      category: "Marketing",
      progress: 85,
      status: "Review",
      deadline: "10 Aug 2026",
      members: ["AK", "MP", "RS"],
      className: "project-green",
    },
  ];

  const recentProjects = [
    {
      name: "AI CRM Platform",
      client: "Nova Technologies",
      progress: 78,
      dueDate: "18 Aug 2026",
      status: "Development",
      icon: "AC",
      className: "recent-blue",
    },
    {
      name: "Business Dashboard",
      client: "Orion Agency",
      progress: 42,
      dueDate: "25 Aug 2026",
      status: "Design",
      icon: "BD",
      className: "recent-purple",
    },
    {
      name: "Inventory System",
      client: "MediStock Pvt. Ltd.",
      progress: 60,
      dueDate: "30 Aug 2026",
      status: "Testing",
      icon: "IS",
      className: "recent-orange",
    },
  ];

  return (
    <section className="dashboard-project-section">
      <article className="dashboard-project-progress-card">
        <div className="dashboard-project-header">
          <div>
            <span className="dashboard-card-label">
              Project performance
            </span>

            <h2>Project Progress</h2>

            <p>Monitor active projects and completion status.</p>
          </div>

          <button type="button" className="dashboard-view-all-button">
            View all projects
            <FiArrowUpRight />
          </button>
        </div>

        <div className="project-progress-list">
          {projectProgress.map((project) => (
            <div
              className="project-progress-item"
              key={project.name}
            >
              <div
                className={`project-progress-icon ${project.className}`}
              >
                <FiBriefcase />
              </div>

              <div className="project-progress-content">
                <div className="project-progress-top">
                  <div>
                    <h3>{project.name}</h3>
                    <span>{project.category}</span>
                  </div>

                  <button
                    type="button"
                    aria-label={`More options for ${project.name}`}
                  >
                    <FiMoreHorizontal />
                  </button>
                </div>

                <div className="project-progress-info">
                  <div className="project-progress-members">
                    {project.members.map((member) => (
                      <span key={member}>{member}</span>
                    ))}
                  </div>

                  <div className="project-progress-deadline">
                    {project.progress === 100 ? (
                      <FiCheckCircle />
                    ) : (
                      <FiCalendar />
                    )}

                    <span>{project.deadline}</span>
                  </div>

                  <strong>{project.progress}%</strong>
                </div>

                <div className="project-progress-track">
                  <span
                    className={project.className}
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      <aside className="dashboard-recent-projects-card">
        <div className="dashboard-project-header">
          <div>
            <span className="dashboard-card-label">
              Latest work
            </span>

            <h2>Recent Projects</h2>

            <p>Your recently updated projects.</p>
          </div>

          <button
            type="button"
            className="dashboard-project-more-button"
            aria-label="More project options"
          >
            <FiMoreHorizontal />
          </button>
        </div>

        <div className="recent-project-list">
          {recentProjects.map((project) => (
            <div className="recent-project-item" key={project.name}>
              <div
                className={`recent-project-icon ${project.className}`}
              >
                {project.icon}
              </div>

              <div className="recent-project-content">
                <div className="recent-project-heading">
                  <div>
                    <h3>{project.name}</h3>
                    <span>{project.client}</span>
                  </div>

                  <strong>{project.progress}%</strong>
                </div>

                <div className="recent-project-track">
                  <span
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>

                <div className="recent-project-footer">
                  <span>
                    <FiClock />
                    {project.dueDate}
                  </span>

                  <span className="recent-project-status">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="project-summary-box">
          <div className="project-summary-icon">
            <FiBriefcase />
          </div>

          <div>
            <span>Total active projects</span>
            <strong>42 Projects</strong>
          </div>

          <div className="project-summary-members">
            <FiUsers />
            <span>19 members</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default ProjectOverview;