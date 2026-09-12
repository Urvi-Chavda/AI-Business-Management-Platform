import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiPlus, FiSearch } from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import TaskCard from "../../components/tasks/TaskCard";
import TaskStats from "../../components/tasks/TaskStats";
import TaskFilter from "../../components/tasks/TaskFilter";
import AddTaskModal from "../../components/tasks/AddTaskModal";

import "../../styles/tasks.css";

function Tasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Dashboard UI",
      project: "AI CRM Platform",
      assignee: "Urvi Chavda",
      assigneeInitials: "UC",
      priority: "High",
      status: "In Progress",
      progress: 75,
      dueDate: "2026-08-12",
      description:
        "Create a professional dashboard interface with revenue, project and activity widgets.",
    },
    {
      id: 2,
      title: "Create Login API",
      project: "Business Platform",
      assignee: "Arjun Kumar",
      assigneeInitials: "AK",
      priority: "Medium",
      status: "Pending",
      progress: 15,
      dueDate: "2026-08-15",
      description:
        "Prepare authentication API integration requirements for the frontend login flow.",
    },
    {
      id: 3,
      title: "Testing Dashboard",
      project: "Inventory System",
      assignee: "Riya Shah",
      assigneeInitials: "RS",
      priority: "Low",
      status: "Completed",
      progress: 100,
      dueDate: "2026-08-08",
      description:
        "Test dashboard responsiveness, cards, navigation and component alignment.",
    },
    {
      id: 4,
      title: "Invoice Module",
      project: "Finance SaaS",
      assignee: "Meet Patel",
      assigneeInitials: "MP",
      priority: "High",
      status: "Review",
      progress: 90,
      dueDate: "2026-08-18",
      description:
        "Review invoice creation interface and PDF download frontend workflow.",
    },
    {
      id: 5,
      title: "Client Management UI",
      project: "AI CRM Platform",
      assignee: "Urvi Chavda",
      assigneeInitials: "UC",
      priority: "High",
      status: "In Progress",
      progress: 58,
      dueDate: "2026-08-21",
      description:
        "Design client list, profile, search and follow-up management interfaces.",
    },
    {
      id: 6,
      title: "Prepare Project Report",
      project: "Business Platform",
      assignee: "Riya Shah",
      assigneeInitials: "RS",
      priority: "Medium",
      status: "Pending",
      progress: 10,
      dueDate: "2026-08-28",
      description:
        "Prepare project module documentation and frontend screenshots.",
    },
  ]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(keyword) ||
        task.project.toLowerCase().includes(keyword) ||
        task.assignee.toLowerCase().includes(keyword);

      const matchesStatus =
        status === "All" || task.status === status;

      const matchesPriority =
        priority === "All" || task.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, search, status, priority]);

  const clearFilters = () => {
    setSearch("");
    setStatus("All");
    setPriority("All");
  };

  const openAddTaskModal = () => {
    setEditingTask(null);
    setIsTaskModalOpen(true);
  };

  const openEditTaskModal = (task) => {
    setEditingTask(task);
    setIsTaskModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
    setEditingTask(null);
  };

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                ...taskData,
                id: editingTask.id,
              }
            : task
        )
      );

      return;
    }

    setTasks((currentTasks) => [
      {
        ...taskData,
        id: Date.now(),
      },
      ...currentTasks,
    ]);
  };

  const handleStatusChange = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        const isCompleted = task.status === "Completed";

        return {
          ...task,
          status: isCompleted ? "Pending" : "Completed",
          progress: isCompleted ? 0 : 100,
        };
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!shouldDelete) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <DashboardLayout>
      <section className="tasks-page">
        <button
          type="button"
          className="tasks-back-button"
          onClick={() => navigate("/projects")}
        >
          <FiArrowLeft />
          Back to Projects
        </button>

        <header className="tasks-page-header">
          <div>
            <span className="tasks-page-label">
              Project Management
            </span>

            <h1>Tasks</h1>

            <p>
              Manage project tasks, deadlines, priorities and team
              progress from one professional workspace.
            </p>
          </div>

          <button
            type="button"
            className="tasks-add-button"
            onClick={openAddTaskModal}
          >
            <FiPlus />
            Add Task
          </button>
        </header>

        <TaskStats tasks={tasks} />

        <TaskFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          priority={priority}
          setPriority={setPriority}
          onClear={clearFilters}
        />

        <div className="tasks-results-header">
          <div>
            <span>Task Results</span>

            <strong>
              {filteredTasks.length} task
              {filteredTasks.length !== 1 ? "s" : ""} found
            </strong>
          </div>

          <small>
            Showing tasks based on your current search and filters.
          </small>
        </div>

        {filteredTasks.length > 0 ? (
          <section className="tasks-grid">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={openEditTaskModal}
                onDelete={handleDeleteTask}
                onStatusChange={handleStatusChange}
              />
            ))}
          </section>
        ) : (
          <section className="tasks-empty-state">
            <div className="tasks-empty-icon">
              <FiSearch />
            </div>

            <h2>No tasks found</h2>

            <p>
              Try another search keyword or update the selected status
              and priority filters.
            </p>

            <button type="button" onClick={clearFilters}>
              Clear Filters
            </button>
          </section>
        )}

        <AddTaskModal
          isOpen={isTaskModalOpen}
          onClose={closeTaskModal}
          onAddTask={handleSaveTask}
          editingTask={editingTask}
        />
      </section>
    </DashboardLayout>
  );
}

export default Tasks;