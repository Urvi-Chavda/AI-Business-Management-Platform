import {
  FiFilter,
  FiSearch,
  FiSliders,
  FiX,
} from "react-icons/fi";

function TaskFilter({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  onClear,
}) {
  const hasActiveFilters =
    search.trim() !== "" ||
    status !== "All" ||
    priority !== "All";

  return (
    <section className="task-filter-wrapper">
      <div className="task-filter-top">
        <div>
          <span className="task-filter-label">
            Search and filter
          </span>

          <h2>Find Tasks</h2>

          <p>
            Search tasks and filter them by status or priority.
          </p>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            className="task-clear-filter-button"
            onClick={onClear}
          >
            <FiX />
            Clear Filters
          </button>
        )}
      </div>

      <div className="task-filter-controls">
        <div className="task-search-field">
          <FiSearch />

          <input
            type="text"
            placeholder="Search by task, project or assignee..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}
        </div>

        <div className="task-filter-select">
          <FiFilter />

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="task-filter-select">
          <FiSliders />

          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="All">All Priority</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>

      <div className="task-active-filters">
        <span>Active filters:</span>

        {!hasActiveFilters && (
          <small>No filters selected</small>
        )}

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
          >
            Search: {search}
            <FiX />
          </button>
        )}

        {status !== "All" && (
          <button
            type="button"
            onClick={() => setStatus("All")}
          >
            Status: {status}
            <FiX />
          </button>
        )}

        {priority !== "All" && (
          <button
            type="button"
            onClick={() => setPriority("All")}
          >
            Priority: {priority}
            <FiX />
          </button>
        )}
      </div>
    </section>
  );
}

export default TaskFilter;