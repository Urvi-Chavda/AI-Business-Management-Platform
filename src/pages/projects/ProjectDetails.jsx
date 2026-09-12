import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiEdit3,
  FiFileText,
  FiFlag,
  FiMoreHorizontal,
  FiPlus,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/projects.css";

function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const projects = {
    1: {
      id: 1,
      name: "AI CRM Platform",
      client: "Nova Technologies",
      category: "Web Application",
      description:
        "An AI-powered customer relationship management platform designed to help businesses manage clients, leads, follow-ups, team activities and business communication from one workspace.",
      status: "In Progress",
      priority: "High",
      progress: 78,
      startDate: "01 July 2026",
      dueDate: "18 August 2026",
      budget: "₹2,50,000",
      completedTasks: 32,
      totalTasks: 41,
      members: [
        {
          name: "Urvi Chavda",
          role: "Project Manager",
          initials: "UC",
        },
        {
          name: "Arjun Kumar",
          role: "Frontend Developer",
          initials: "AK",
        },
        {
          name: "Riya Shah",
          role: "UI/UX Designer",
          initials: "RS",
        },
      ],
    },

    2: {
      id: 2,
      name: "Business Dashboard",
      client: "Orion Agency",
      category: "Dashboard Design",
      description:
        "A modern analytics dashboard for monitoring revenue, clients, projects, tasks, invoices and team activities.",
      status: "In Progress",
      priority: "Medium",
      progress: 42,
      startDate: "10 July 2026",
      dueDate: "25 August 2026",
      budget: "₹1,80,000",
      completedTasks: 18,
      totalTasks: 43,
      members: [
        {
          name: "Urvi Chavda",
          role: "Project Manager",
          initials: "UC",
        },
        {
          name: "Meet Patel",
          role: "Frontend Developer",
          initials: "MP",
        },
      ],
    },

    3: {
      id: 3,
      name: "Inventory Management",
      client: "MediStock Pvt. Ltd.",
      category: "Management System",
      description:
        "A medicine inventory and shortage prediction system for healthcare businesses with stock tracking and reporting.",
      status: "Testing",
      priority: "High",
      progress: 60,
      startDate: "15 July 2026",
      dueDate: "30 August 2026",
      budget: "₹3,20,000",
      completedTasks: 27,
      totalTasks: 45,
      members: [
        {
          name: "Urvi Chavda",
          role: "Project Manager",
          initials: "UC",
        },
        {
          name: "Arjun Kumar",
          role: "Frontend Developer",
          initials: "AK",
        },
        {
          name: "Meet Patel",
          role: "Backend Developer",
          initials: "MP",
        },
      ],
    },
  };

  const fallbackProject = projects[1];
  const project = projects[id] || fallbackProject;

  const recentTasks = [
    {
      title: "Create dashboard wireframe",
      assignee: "Riya Shah",
      status: "Completed",
      dueDate: "05 Aug 2026",
    },
    {
      title: "Develop client management UI",
      assignee: "Arjun Kumar",
      status: "In Progress",
      dueDate: "12 Aug 2026",
    },
    {
      title: "Prepare CRM analytics section",
      assignee: "Urvi Chavda",
      status: "Review",
      dueDate: "14 Aug 2026",
    },
    {
      title: "Test responsive layouts",
      assignee: "Arjun Kumar",
      status: "Pending",
      dueDate: "16 Aug 2026",
    },
  ];

  const activities = [
    {
      title: "Riya completed dashboard wireframe",
      time: "12 minutes ago",
      initials: "RS",
    },
    {
      title: "Arjun updated client management UI",
      time: "45 minutes ago",
      initials: "AK",
    },
    {
      title: "Urvi added a new project document",
      time: "2 hours ago",
      initials: "UC",
    },
  ];

  const statusClass = project.status
    .toLowerCase()
    .replaceAll(" ", "-");

  const priorityClass = project.priority.toLowerCase();

  return (
    <DashboardLayout>
      <section className="project-details-page">
        <div className="project-details-topbar">
          <button
            type="button"
            className="create-project-back-button"
            onClick={() => navigate("/projects")}
          >
            <FiArrowLeft />
            Back to Projects
          </button>

          <div className="project-details-actions">
            <button
              type="button"
              className="project-details-secondary-button"
              onClick={() =>
                window.alert("Edit Project UI will be added later.")
              }
            >
              <FiEdit3 />
              Edit Project
            </button>

            <button
              type="button"
              className="project-details-primary-button"
              onClick={() => navigate("/projects/tasks")}
            >
              <FiPlus />
              Add Task
            </button>
          </div>
        </div>

        <section className="project-details-hero">
          <div className="project-details-icon">
            <FiBriefcase />
          </div>

          <div className="project-details-heading">
            <span>{project.category}</span>

            <h1>{project.name}</h1>

            <p>{project.client}</p>
          </div>

          <div className="project-details-badges">
            <span className={`status-${statusClass}`}>
              {project.status}
            </span>

            <span className={`priority-${priorityClass}`}>
              {project.priority} Priority
            </span>
          </div>

          <button
            type="button"
            className="project-details-menu-button"
            aria-label="Project options"
          >
            <FiMoreHorizontal />
          </button>
        </section>

        <section className="project-details-stat-grid">
          <article>
            <div className="project-details-stat-icon stat-blue">
              <FiCheckCircle />
            </div>

            <div>
              <span>Project Progress</span>
              <strong>{project.progress}%</strong>
              <p>
                {project.completedTasks}/{project.totalTasks} tasks completed
              </p>
            </div>
          </article>

          <article>
            <div className="project-details-stat-icon stat-purple">
              <FiCalendar />
            </div>

            <div>
              <span>Due Date</span>
              <strong>{project.dueDate}</strong>
              <p>Started {project.startDate}</p>
            </div>
          </article>

          <article>
            <div className="project-details-stat-icon stat-orange">
              <FiFlag />
            </div>

            <div>
              <span>Project Budget</span>
              <strong>{project.budget}</strong>
              <p>Estimated project cost</p>
            </div>
          </article>

          <article>
            <div className="project-details-stat-icon stat-green">
              <FiUsers />
            </div>

            <div>
              <span>Team Members</span>
              <strong>{project.members.length}</strong>
              <p>Assigned to this project</p>
            </div>
          </article>
        </section>

        <section className="project-details-progress-card">
          <div>
            <span>Overall Project Completion</span>
            <strong>{project.progress}%</strong>
          </div>

          <div className="project-details-progress-track">
            <span style={{ width: `${project.progress}%` }} />
          </div>

          <p>
            The project is progressing well and is currently on schedule.
          </p>
        </section>

        <section className="project-details-main-grid">
          <div className="project-details-main-column">
            <article className="project-details-card">
              <div className="project-details-card-header">
                <div>
                  <span className="projects-page-label">
                    Project overview
                  </span>

                  <h2>About This Project</h2>
                </div>

                <FiFileText />
              </div>

              <p className="project-details-description">
                {project.description}
              </p>

              <div className="project-details-info-grid">
                <div>
                  <span>Client</span>
                  <strong>{project.client}</strong>
                </div>

                <div>
                  <span>Category</span>
                  <strong>{project.category}</strong>
                </div>

                <div>
                  <span>Start Date</span>
                  <strong>{project.startDate}</strong>
                </div>

                <div>
                  <span>Due Date</span>
                  <strong>{project.dueDate}</strong>
                </div>
              </div>
            </article>

            <article className="project-details-card">
              <div className="project-details-card-header">
                <div>
                  <span className="projects-page-label">
                    Task management
                  </span>

                  <h2>Recent Tasks</h2>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/projects/tasks")}
                >
                  View All Tasks
                </button>
              </div>

              <div className="project-details-task-list">
                {recentTasks.map((task) => {
                  const taskStatusClass = task.status
                    .toLowerCase()
                    .replaceAll(" ", "-");

                  return (
                    <div
                      className="project-details-task-item"
                      key={task.title}
                    >
                      <div className="project-details-task-check">
                        <FiCheckCircle />
                      </div>

                      <div className="project-details-task-content">
                        <h3>{task.title}</h3>
                        <p>Assigned to {task.assignee}</p>
                      </div>

                      <span
                        className={`project-details-task-status task-${taskStatusClass}`}
                      >
                        {task.status}
                      </span>

                      <div className="project-details-task-date">
                        <FiClock />
                        {task.dueDate}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>

          <aside className="project-details-side-column">
            <article className="project-details-card">
              <div className="project-details-card-header">
                <div>
                  <span className="projects-page-label">
                    Collaboration
                  </span>

                  <h2>Project Team</h2>
                </div>

                <button
                  type="button"
                  aria-label="Add project member"
                >
                  <FiPlus />
                </button>
              </div>

              <div className="project-details-team-list">
                {project.members.map((member) => (
                  <div
                    className="project-details-team-member"
                    key={member.name}
                  >
                    <span>{member.initials}</span>

                    <div>
                      <strong>{member.name}</strong>
                      <small>{member.role}</small>
                    </div>

                    <button
                      type="button"
                      aria-label={`${member.name} options`}
                    >
                      <FiMoreHorizontal />
                    </button>
                  </div>
                ))}
              </div>
            </article>

            <article className="project-details-card">
              <div className="project-details-card-header">
                <div>
                  <span className="projects-page-label">
                    Latest updates
                  </span>

                  <h2>Recent Activity</h2>
                </div>
              </div>

              <div className="project-details-activity-list">
                {activities.map((activity) => (
                  <div
                    className="project-details-activity-item"
                    key={activity.title}
                  >
                    <span>{activity.initials}</span>

                    <div>
                      <p>{activity.title}</p>
                      <small>{activity.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="project-details-deadline-card">
              <div>
                <FiCalendar />
              </div>

              <span>Upcoming Deadline</span>

              <h2>{project.dueDate}</h2>

              <p>
                Complete the remaining project tasks before the due date.
              </p>

              <button
                type="button"
                onClick={() => navigate("/calendar")}
              >
                View Schedule
              </button>
            </article>
          </aside>
        </section>
      </section>
    </DashboardLayout>
  );
}

export default ProjectDetails;