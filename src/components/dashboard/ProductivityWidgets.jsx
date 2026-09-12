import {
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMessageSquare,
  FiMoreHorizontal,
  FiRefreshCw,
  FiUsers,
  FiZap,
} from "react-icons/fi";

function ProductivityWidgets() {
  const calendarDays = [
    "", "", "", "", "", "",
    "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "11", "12", "13", "14",
    "15", "16", "17", "18", "19", "20", "21",
    "22", "23", "24", "25", "26", "27", "28",
    "29", "30", "31",
  ];

  const meetings = [
    {
      time: "10:00 AM",
      title: "Client Project Meeting",
      description: "Website redesign discussion",
      members: ["UC", "AK", "RS"],
      className: "meeting-blue",
    },
    {
      time: "03:00 PM",
      title: "Team Standup",
      description: "Weekly task and progress review",
      members: ["UC", "MP", "AK"],
      className: "meeting-purple",
    },
    {
      time: "05:00 PM",
      title: "Product Review",
      description: "Mobile app final UI review",
      members: ["UC", "RS"],
      className: "meeting-orange",
    },
  ];

  const aiSuggestions = [
    {
      title: "Reply to client emails",
      description: "3 important emails need your response.",
      icon: <FiMail />,
      className: "ai-task-blue",
    },
    {
      title: "Generate project proposal",
      description: "Create a proposal for Nova Technologies.",
      icon: <FiMessageSquare />,
      className: "ai-task-purple",
    },
    {
      title: "Schedule team meeting",
      description: "Your development team is available at 3 PM.",
      icon: <FiUsers />,
      className: "ai-task-green",
    },
  ];

  return (
    <section className="dashboard-productivity-section">
      <article className="dashboard-calendar-card">
        <div className="dashboard-widget-header">
          <div>
            <span className="dashboard-card-label">
              Schedule
            </span>

            <h2>Calendar</h2>

            <p>Manage meetings and upcoming deadlines.</p>
          </div>

          <button
            type="button"
            className="dashboard-widget-icon-button"
            aria-label="Calendar options"
          >
            <FiMoreHorizontal />
          </button>
        </div>

        <div className="dashboard-calendar-heading">
          <button type="button" aria-label="Previous month">
            ‹
          </button>

          <strong>August 2026</strong>

          <button type="button" aria-label="Next month">
            ›
          </button>
        </div>

        <div className="dashboard-calendar-weekdays">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        <div className="dashboard-calendar-grid">
          {calendarDays.map((day, index) => (
            <button
              type="button"
              key={`${day}-${index}`}
              className={`
                ${day === "2" ? "calendar-today" : ""}
                ${["5", "10", "15", "22"].includes(day)
                  ? "calendar-event-day"
                  : ""}
              `}
              disabled={!day}
            >
              {day}

              {["5", "10", "15", "22"].includes(day) && (
                <span />
              )}
            </button>
          ))}
        </div>

        <div className="dashboard-calendar-footer">
          <div>
            <span className="calendar-indicator meeting-indicator" />
            Meeting
          </div>

          <div>
            <span className="calendar-indicator deadline-indicator" />
            Deadline
          </div>

          <button type="button">
            Full Calendar
            <FiArrowUpRight />
          </button>
        </div>
      </article>

      <article className="dashboard-meetings-card">
        <div className="dashboard-widget-header">
          <div>
            <span className="dashboard-card-label">
              Today&apos;s schedule
            </span>

            <h2>Upcoming Meetings</h2>

            <p>You have 3 meetings scheduled today.</p>
          </div>

          <button
            type="button"
            className="dashboard-widget-icon-button"
            aria-label="Meeting options"
          >
            <FiCalendar />
          </button>
        </div>

        <div className="dashboard-meeting-list">
          {meetings.map((meeting) => (
            <div
              className={`dashboard-meeting-item ${meeting.className}`}
              key={meeting.title}
            >
              <div className="dashboard-meeting-time">
                <FiClock />
                <span>{meeting.time}</span>
              </div>

              <div className="dashboard-meeting-content">
                <h3>{meeting.title}</h3>
                <p>{meeting.description}</p>

                <div className="dashboard-meeting-footer">
                  <div className="dashboard-meeting-members">
                    {meeting.members.map((member) => (
                      <span key={member}>{member}</span>
                    ))}
                  </div>

                  <button type="button">
                    Join
                    <FiArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="dashboard-add-meeting-button"
        >
          <FiCalendar />
          Schedule New Meeting
        </button>
      </article>

      <aside className="dashboard-ai-widget">
        <div className="dashboard-ai-header">
          <div className="dashboard-ai-main-icon">
            <FiZap />
          </div>

          <div>
            <span>AI Assistant</span>
            <h2>Smart Suggestions</h2>
          </div>

          <button type="button" aria-label="Refresh suggestions">
            <FiRefreshCw />
          </button>
        </div>

        <p className="dashboard-ai-description">
          AI analyzed your workspace and found three tasks that can
          improve today&apos;s productivity.
        </p>

        <div className="dashboard-ai-suggestions">
          {aiSuggestions.map((suggestion) => (
            <div
              className="dashboard-ai-suggestion-item"
              key={suggestion.title}
            >
              <div
                className={`dashboard-ai-task-icon ${suggestion.className}`}
              >
                {suggestion.icon}
              </div>

              <div>
                <h3>{suggestion.title}</h3>
                <p>{suggestion.description}</p>
              </div>

              <button
                type="button"
                aria-label={`Complete ${suggestion.title}`}
              >
                <FiCheckCircle />
              </button>
            </div>
          ))}
        </div>

        <div className="dashboard-ai-summary">
          <div>
            <span>AI tasks completed</span>
            <strong>7 of 10</strong>
          </div>

          <div className="dashboard-ai-progress">
            <span />
          </div>
        </div>

        <button type="button" className="dashboard-open-ai-button">
          <FiZap />
          Open AI Assistant
          <FiArrowUpRight />
        </button>
      </aside>
    </section>
  );
}

export default ProductivityWidgets;