import { useEffect, useState } from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiFileText,
  FiFlag,
  FiSave,
  FiUser,
  FiX,
} from "react-icons/fi";

function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
  editingTask = null,
}) {
  const [formData, setFormData] = useState({
    title: "",
    project: "",
    assignee: "",
    priority: "Medium",
    status: "Pending",
    progress: 0,
    dueDate: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        project: editingTask.project || "",
        assignee: editingTask.assignee || "",
        priority: editingTask.priority || "Medium",
        status: editingTask.status || "Pending",
        progress: editingTask.progress || 0,
        dueDate: editingTask.dueDate || "",
        description: editingTask.description || "",
      });
    } else {
      setFormData({
        title: "",
        project: "",
        assignee: "",
        priority: "Medium",
        status: "Pending",
        progress: 0,
        dueDate: "",
        description: "",
      });
    }

    setErrors({});
  }, [editingTask, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]:
        name === "progress"
          ? Number(value)
          : value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Task title is required.";
    }

    if (!formData.project.trim()) {
      newErrors.project = "Project name is required.";
    }

    if (!formData.assignee.trim()) {
      newErrors.assignee = "Assignee is required.";
    }

    if (!formData.dueDate) {
      newErrors.dueDate = "Due date is required.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Task description is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddTask({
      ...formData,
      id: editingTask?.id || Date.now(),
      assigneeInitials: formData.assignee
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    });

    onClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="task-modal-overlay"
      onMouseDown={handleOverlayClick}
      role="presentation"
    >
      <section
        className="task-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-modal-title"
      >
        <div className="task-modal-header">
          <div>
            <span>Task Management</span>

            <h2 id="task-modal-title">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h2>

            <p>
              Add task details, assignee, deadline and progress.
            </p>
          </div>

          <button
            type="button"
            className="task-modal-close"
            onClick={onClose}
            aria-label="Close task form"
          >
            <FiX />
          </button>
        </div>

        <form
          className="task-modal-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="task-modal-field full-task-field">
            <label htmlFor="task-title">Task title</label>

            <div
              className={`task-modal-input ${
                errors.title ? "task-modal-input-error" : ""
              }`}
            >
              <FiFileText />

              <input
                id="task-title"
                type="text"
                name="title"
                placeholder="Example: Design dashboard UI"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {errors.title && (
              <span className="task-modal-error">
                {errors.title}
              </span>
            )}
          </div>

          <div className="task-modal-grid">
            <div className="task-modal-field">
              <label htmlFor="task-project">Project</label>

              <div
                className={`task-modal-input ${
                  errors.project ? "task-modal-input-error" : ""
                }`}
              >
                <FiBriefcase />

                <select
                  id="task-project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                >
                  <option value="">Select project</option>
                  <option value="AI CRM Platform">
                    AI CRM Platform
                  </option>
                  <option value="Business Platform">
                    Business Platform
                  </option>
                  <option value="Inventory System">
                    Inventory System
                  </option>
                  <option value="Finance SaaS">
                    Finance SaaS
                  </option>
                </select>
              </div>

              {errors.project && (
                <span className="task-modal-error">
                  {errors.project}
                </span>
              )}
            </div>

            <div className="task-modal-field">
              <label htmlFor="task-assignee">Assignee</label>

              <div
                className={`task-modal-input ${
                  errors.assignee ? "task-modal-input-error" : ""
                }`}
              >
                <FiUser />

                <select
                  id="task-assignee"
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                >
                  <option value="">Select member</option>
                  <option value="Urvi Chavda">
                    Urvi Chavda
                  </option>
                  <option value="Arjun Kumar">
                    Arjun Kumar
                  </option>
                  <option value="Riya Shah">
                    Riya Shah
                  </option>
                  <option value="Meet Patel">
                    Meet Patel
                  </option>
                </select>
              </div>

              {errors.assignee && (
                <span className="task-modal-error">
                  {errors.assignee}
                </span>
              )}
            </div>

            <div className="task-modal-field">
              <label htmlFor="task-priority">Priority</label>

              <div className="task-modal-input">
                <FiFlag />

                <select
                  id="task-priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>
              </div>
            </div>

            <div className="task-modal-field">
              <label htmlFor="task-status">Status</label>

              <div className="task-modal-input">
                <FiFlag />

                <select
                  id="task-status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">
                    In Progress
                  </option>
                  <option value="Review">Review</option>
                  <option value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            </div>

            <div className="task-modal-field">
              <label htmlFor="task-due-date">Due date</label>

              <div
                className={`task-modal-input ${
                  errors.dueDate ? "task-modal-input-error" : ""
                }`}
              >
                <FiCalendar />

                <input
                  id="task-due-date"
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                />
              </div>

              {errors.dueDate && (
                <span className="task-modal-error">
                  {errors.dueDate}
                </span>
              )}
            </div>

            <div className="task-modal-field">
              <label htmlFor="task-progress">
                Progress: {formData.progress}%
              </label>

              <input
                id="task-progress"
                className="task-progress-range"
                type="range"
                name="progress"
                min="0"
                max="100"
                step="5"
                value={formData.progress}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="task-modal-field full-task-field">
            <label htmlFor="task-description">
              Description
            </label>

            <textarea
              id="task-description"
              name="description"
              placeholder="Describe task requirements and expected output..."
              value={formData.description}
              onChange={handleChange}
              className={
                errors.description
                  ? "task-modal-textarea-error"
                  : ""
              }
            />

            <div className="task-modal-description-footer">
              {errors.description ? (
                <span className="task-modal-error">
                  {errors.description}
                </span>
              ) : (
                <span>
                  Add enough details for the assigned member.
                </span>
              )}

              <span>
                {formData.description.length}/300
              </span>
            </div>
          </div>

          <div className="task-modal-actions">
            <button
              type="button"
              className="task-modal-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="task-modal-submit"
            >
              <FiSave />

              {editingTask ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddTaskModal;