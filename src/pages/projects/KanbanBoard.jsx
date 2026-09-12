import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiFilter,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
  FiUser,
  FiX,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/kanban.css";

function KanbanBoard() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState("All");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create Login API",
      project: "Business Platform",
      priority: "Medium",
      status: "Pending",
      assignee: "AK",
      dueDate: "15 Aug 2026",
      progress: 15,
    },
    {
      id: 2,
      title: "Prepare Project Report",
      project: "Business Platform",
      priority: "Medium",
      status: "Pending",
      assignee: "RS",
      dueDate: "28 Aug 2026",
      progress: 10,
    },
    {
      id: 3,
      title: "Design Dashboard UI",
      project: "AI CRM Platform",
      priority: "High",
      status: "In Progress",
      assignee: "UC",
      dueDate: "12 Aug 2026",
      progress: 75,
    },
    {
      id: 4,
      title: "Client Management UI",
      project: "AI CRM Platform",
      priority: "High",
      status: "In Progress",
      assignee: "UC",
      dueDate: "21 Aug 2026",
      progress: 58,
    },
    {
      id: 5,
      title: "Invoice Module",
      project: "Finance SaaS",
      priority: "High",
      status: "Review",
      assignee: "MP",
      dueDate: "18 Aug 2026",
      progress: 90,
    },
    {
      id: 6,
      title: "Testing Dashboard",
      project: "Inventory System",
      priority: "Low",
      status: "Completed",
      assignee: "RS",
      dueDate: "08 Aug 2026",
      progress: 100,
    },
  ]);

  const columns = [
    {
      title: "Pending",
      className: "kanban-pending",
    },
    {
      title: "In Progress",
      className: "kanban-progress",
    },
    {
      title: "Review",
      className: "kanban-review",
    },
    {
      title: "Completed",
      className: "kanban-completed",
    },
  ];

  const filteredTasks = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        keyword === "" ||
        task.title.toLowerCase().includes(keyword) ||
        task.project.toLowerCase().includes(keyword) ||
        task.assignee.toLowerCase().includes(keyword) ||
        task.priority.toLowerCase().includes(keyword) ||
        task.status.toLowerCase().includes(keyword);

      const matchesProject =
        selectedProject === "All" ||
        task.project === selectedProject;

      return matchesSearch && matchesProject;
    });
  }, [tasks, search, selectedProject]);

  const moveTask = (taskId, newStatus) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        let newProgress = task.progress;

        if (newStatus === "Pending") {
          newProgress = 0;
        }

        if (newStatus === "In Progress" && task.progress === 0) {
          newProgress = 25;
        }

        if (newStatus === "Review") {
          newProgress = Math.max(task.progress, 85);
        }

        if (newStatus === "Completed") {
          newProgress = 100;
        }

        return {
          ...task,
          status: newStatus,
          progress: newProgress,
        };
      })
    );
  };

  const clearSearch = () => {
    setSearch("");
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedProject("All");
  };

  const hasActiveFilters =
    search.trim() !== "" || selectedProject !== "All";

  return (
    <DashboardLayout>
      <section className="kanban-page">
        <button
          type="button"
          className="kanban-back-button"
          onClick={() => navigate("/projects")}
        >
          <FiArrowLeft />
          Back to Projects
        </button>

        <header className="kanban-page-header">
          <div>
            <span className="kanban-page-label">
              Project Management
            </span>

            <h1>Kanban Board</h1>

            <p>
              Organize tasks across pending, in progress, review and
              completed stages.
            </p>
          </div>

          <button
            type="button"
            className="kanban-add-button"
            onClick={() => navigate("/projects/tasks")}
          >
            <FiPlus />
            Add Task
          </button>
        </header>

        <section className="kanban-toolbar">
          <div className="kanban-search">
            <FiSearch />

            <input
              type="text"
              placeholder="Search task, project, assignee, priority or status..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            {search && (
              <button
                type="button"
                className="kanban-search-clear"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>

          <div className="kanban-filter">
            <FiFilter />

            <select
              value={selectedProject}
              onChange={(event) =>
                setSelectedProject(event.target.value)
              }
            >
              <option value="All">All Projects</option>
              <option value="AI CRM Platform">
                AI CRM Platform
              </option>
              <option value="Business Platform">
                Business Platform
              </option>
              <option value="Finance SaaS">
                Finance SaaS
              </option>
              <option value="Inventory System">
                Inventory System
              </option>
            </select>
          </div>
        </section>

        <div className="kanban-results-row">
          <div>
            <span>Task Results</span>

            <strong>
              {filteredTasks.length} task
              {filteredTasks.length !== 1 ? "s" : ""} found
            </strong>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}
        </div>

        <section className="kanban-board">
          {columns.map((column) => {
            const columnTasks = filteredTasks.filter(
              (task) => task.status === column.title
            );

            return (
              <article
                className={`kanban-column ${column.className}`}
                key={column.title}
              >
                <div className="kanban-column-header">
                  <div>
                    <span className="kanban-column-dot" />

                    <h2>{column.title}</h2>
                  </div>

                  <span className="kanban-column-count">
                    {columnTasks.length}
                  </span>
                </div>

                <div className="kanban-task-list">
                  {columnTasks.map((task) => (
                    <article
                      className="kanban-task-card"
                      key={task.id}
                    >
                      <div className="kanban-task-card-header">
                        <span>{task.project}</span>

                        <button
                          type="button"
                          aria-label={`${task.title} options`}
                        >
                          <FiMoreHorizontal />
                        </button>
                      </div>

                      <h3>{task.title}</h3>

                      <div className="kanban-task-badges">
                        <span
                          className={`kanban-priority kanban-priority-${task.priority.toLowerCase()}`}
                        >
                          {task.priority} Priority
                        </span>

                        <span className="kanban-task-progress-value">
                          {task.progress}%
                        </span>
                      </div>

                      <div className="kanban-progress-track">
                        <span
                          style={{
                            width: `${task.progress}%`,
                          }}
                        />
                      </div>

                      <div className="kanban-task-meta">
                        <span>
                          <FiUser />
                          {task.assignee}
                        </span>

                        <span>
                          <FiCalendar />
                          {task.dueDate}
                        </span>
                      </div>

                      <div className="kanban-move-actions">
                        {columns
                          .filter(
                            (item) => item.title !== task.status
                          )
                          .map((item) => (
                            <button
                              type="button"
                              key={item.title}
                              onClick={() =>
                                moveTask(task.id, item.title)
                              }
                            >
                              Move to {item.title}
                            </button>
                          ))}
                      </div>
                    </article>
                  ))}

                  {columnTasks.length === 0 && (
                    <div className="kanban-empty-column">
                      <span>
                        No matching tasks in this stage
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="kanban-column-add"
                  onClick={() => navigate("/projects/tasks")}
                >
                  <FiPlus />
                  Add Task
                </button>
              </article>
            );
          })}
        </section>

        {filteredTasks.length === 0 && (
          <section className="kanban-no-results">
            <div>
              <FiSearch />
            </div>

            <h2>No tasks found</h2>

            <p>
              Try another keyword or select a different project.
            </p>

            <button
              type="button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </section>
        )}
      </section>
    </DashboardLayout>
  );
}

export default KanbanBoard;