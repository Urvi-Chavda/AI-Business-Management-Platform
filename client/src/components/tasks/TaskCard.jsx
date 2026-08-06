import {
  FiCalendar,
  FiCheck,
  FiClock,
  FiEdit2,
  FiMoreHorizontal,
  FiTrash2,
  FiUser,
} from "react-icons/fi";

function TaskCard({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const statusClass = task.status
    .toLowerCase()
    .replace(/\s+/g, "-");

  const priorityClass = task.priority.toLowerCase();

  return (
    <div className="task-card">
      {/* Header */}
      <div className="task-card-header">
        <div className="task-card-left">
          <button
            className={`task-check ${
              task.status === "Completed"
                ? "checked"
                : ""
            }`}
            onClick={() =>
              onStatusChange(task.id)
            }
          >
            {task.status === "Completed" && (
              <FiCheck />
            )}
          </button>

          <div>
            <span className="task-project">
              {task.project}
            </span>

            <h3>{task.title}</h3>
          </div>
        </div>

        <button className="task-menu">
          <FiMoreHorizontal />
        </button>
      </div>

      {/* Badges */}

      <div className="task-badges">
        <span
          className={`status ${statusClass}`}
        >
          {task.status}
        </span>

        <span
          className={`priority ${priorityClass}`}
        >
          {task.priority}
        </span>
      </div>

      {/* Progress */}

      <div className="task-progress">
        <div className="task-progress-top">
          <span>Progress</span>

          <strong>{task.progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${task.progress}%`,
            }}
          />
        </div>
      </div>

      {/* Footer */}

      <div className="task-footer">
        <div className="task-info">
          <FiUser />

          <span>{task.assignee}</span>
        </div>

        <div className="task-info">
          <FiCalendar />

          <span>{task.dueDate}</span>
        </div>
      </div>

      {/* Actions */}

      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
        >
          <FiEdit2 />

          Edit
        </button>

        <button
          className="delete"
          onClick={() =>
            onDelete(task.id)
          }
        >
          <FiTrash2 />

          Delete
        </button>

        <button className="view">
          <FiClock />

          Details
        </button>
      </div>
    </div>
  );
}

export default TaskCard;