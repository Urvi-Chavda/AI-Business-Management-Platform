import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFilter,
  FiGrid,
  FiList,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/projects.css";

function Projects() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [viewMode, setViewMode] = useState("grid");

  const projects = [
    {
      id: 1,
      name: "AI CRM Platform",
      client: "Nova Technologies",
      category: "Web Application",
      description:
        "AI-powered customer relationship management platform for managing leads, clients and follow-ups.",
      progress: 78,
      status: "In Progress",
      priority: "High",
      dueDate: "18 Aug 2026",
      tasksCompleted: 32,
      totalTasks: 41,
      members: ["UC", "AK", "RS"],
      color: "blue",
    },
    {
      id: 2,
      name: "Business Dashboard",
      client: "Orion Agency",
      category: "Dashboard Design",
      description:
        "Modern analytics dashboard for monitoring revenue, clients, tasks and team activity.",
      progress: 42,
      status: "In Progress",
      priority: "Medium",
      dueDate: "25 Aug 2026",
      tasksCompleted: 18,
      totalTasks: 43,
      members: ["UC", "MP"],
      color: "purple",
    },
    {
      id: 3,
      name: "Inventory Management",
      client: "MediStock Pvt. Ltd.",
      category: "Management System",
      description:
        "Medicine inventory and shortage prediction system for healthcare businesses.",
      progress: 60,
      status: "Testing",
      priority: "High",
      dueDate: "30 Aug 2026",
      tasksCompleted: 27,
      totalTasks: 45,
      members: ["UC", "AK", "MP"],
      color: "orange",
    },
    {
      id: 4,
      name: "Website Redesign",
      client: "Astra Solutions",
      category: "UI/UX Design",
      description:
        "Complete redesign of corporate website with responsive layouts and modern visual identity.",
      progress: 100,
      status: "Completed",
      priority: "Low",
      dueDate: "05 Aug 2026",
      tasksCompleted: 38,
      totalTasks: 38,
      members: ["UC", "RS"],
      color: "green",
    },
    {
      id: 5,
      name: "Mobile Banking App",
      client: "FinEdge Solutions",
      category: "Mobile Application",
      description:
        "Secure mobile banking application with transactions, reports and account management.",
      progress: 35,
      status: "Planning",
      priority: "Medium",
      dueDate: "10 Sep 2026",
      tasksCompleted: 12,
      totalTasks: 34,
      members: ["UC", "AK"],
      color: "pink",
    },
    {
      id: 6,
      name: "Marketing Automation",
      client: "Growth Studio",
      category: "SaaS Platform",
      description:
        "Campaign automation platform with lead tracking, email workflows and performance analytics.",
      progress: 85,
      status: "Review",
      priority: "High",
      dueDate: "12 Aug 2026",
      tasksCompleted: 41,
      totalTasks: 48,
      members: ["UC", "RS", "MP"],
      color: "cyan",
    },
  ];

  const filteredProjects = useMemo(() => {
    let updatedProjects = [...projects];

    if (searchTerm.trim()) {
      updatedProjects = updatedProjects.filter((project) => {
        const searchableText = `
          ${project.name}
          ${project.client}
          ${project.category}
        `.toLowerCase();

        return searchableText.includes(searchTerm.toLowerCase());
      });
    }

    if (selectedStatus !== "All") {
      updatedProjects = updatedProjects.filter(
        (project) => project.status === selectedStatus
      );
    }

    if (sortBy === "Progress") {
      updatedProjects.sort((a, b) => b.progress - a.progress);
    }

    if (sortBy === "Name") {
      updatedProjects.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "Due Date") {
      updatedProjects.sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      );
    }

    return updatedProjects;
  }, [searchTerm, selectedStatus, sortBy]);

  const projectStats = [
    {
      title: "Total Projects",
      value: "42",
      description: "6 new this month",
      icon: <FiBriefcase />,
      className: "project-stat-blue",
    },
    {
      title: "Active Projects",
      value: "18",
      description: "Currently in progress",
      icon: <FiTrendingUp />,
      className: "project-stat-purple",
    },
    {
      title: "Completed",
      value: "16",
      description: "38% completion rate",
      icon: <FiCheckCircle />,
      className: "project-stat-green",
    },
    {
      title: "Team Members",
      value: "19",
      description: "Across all projects",
      icon: <FiUsers />,
      className: "project-stat-orange",
    },
  ];

  const statusOptions = [
    "All",
    "Planning",
    "In Progress",
    "Testing",
    "Review",
    "Completed",
  ];

  return (
    <DashboardLayout>
      <section className="projects-page-header">
        <div>
          <span className="projects-page-label">Project management</span>

          <h1>Projects</h1>

          <p>
            Plan, organize and track all business projects from one workspace.
          </p>
        </div>

        <button
          type="button"
          className="projects-create-button"
          onClick={() => navigate("/projects/create")}
        >
          <FiPlus />
          Create Project
        </button>
      </section>

      <section className="projects-stat-grid">
        {projectStats.map((stat) => (
          <article className="projects-stat-card" key={stat.title}>
            <div className={`projects-stat-icon ${stat.className}`}>
              {stat.icon}
            </div>

            <div>
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>
              <p>{stat.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-toolbar">
        <div className="projects-search-wrapper">
          <FiSearch />

          <input
            type="text"
            placeholder="Search projects, clients or categories..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="projects-toolbar-actions">
          <div className="projects-filter-wrapper">
            <FiFilter />

            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              {statusOptions.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <select
            className="projects-sort-select"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="Newest">Sort: Newest</option>
            <option value="Progress">Sort: Progress</option>
            <option value="Name">Sort: Name</option>
            <option value="Due Date">Sort: Due Date</option>
          </select>

          <div className="projects-view-toggle">
            <button
              type="button"
              className={viewMode === "grid" ? "active" : ""}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <FiGrid />
            </button>

            <button
              type="button"
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <FiList />
            </button>
          </div>
        </div>
      </section>

      <section
        className={`projects-list-container ${
          viewMode === "list" ? "projects-list-view" : ""
        }`}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article className="project-main-card" key={project.id}>
              <div className="project-card-header">
                <div
                  className={`project-card-icon project-card-${project.color}`}
                >
                  <FiBriefcase />
                </div>

                <div className="project-card-title">
                  <span>{project.category}</span>
                  <h2>{project.name}</h2>
                  <p>{project.client}</p>
                </div>

                <button
                  type="button"
                  className="project-card-menu"
                  aria-label={`More options for ${project.name}`}
                >
                  <FiMoreHorizontal />
                </button>
              </div>

              <p className="project-card-description">
                {project.description}
              </p>

              <div className="project-status-row">
                <span
                  className={`project-status-badge status-${project.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {project.status}
                </span>

                <span
                  className={`project-priority-badge priority-${project.priority.toLowerCase()}`}
                >
                  {project.priority} Priority
                </span>
              </div>

              <div className="project-progress-section">
                <div className="project-progress-heading">
                  <span>Project Progress</span>
                  <strong>{project.progress}%</strong>
                </div>

                <div className="project-main-progress-track">
                  <span
                    className={`project-progress-${project.color}`}
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="project-task-summary">
                <div>
                  <FiCheckCircle />
                  <span>
                    {project.tasksCompleted}/{project.totalTasks} Tasks
                  </span>
                </div>

                <div>
                  <FiCalendar />
                  <span>{project.dueDate}</span>
                </div>
              </div>

              <div className="project-card-footer">
                <div className="project-team-members">
                  {project.members.map((member) => (
                    <span key={member}>{member}</span>
                  ))}

                  <button type="button" aria-label="Add member">
                    <FiPlus />
                  </button>
                </div>

                <button
                  type="button"
                  className="project-view-button"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  View Project
                  <span>→</span>
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="projects-empty-state">
            <div>
              <FiSearch />
            </div>

            <h2>No projects found</h2>

            <p>
              Try changing your search keyword or project status filter.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedStatus("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <section className="projects-pagination">
        <div>
          Showing <strong>{filteredProjects.length}</strong> of{" "}
          <strong>{projects.length}</strong> projects
        </div>

        <div>
          <button type="button" disabled>
            Previous
          </button>

          <button type="button" className="active">
            1
          </button>

          <button type="button">2</button>

          <button type="button">3</button>

          <button type="button">Next</button>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Projects;