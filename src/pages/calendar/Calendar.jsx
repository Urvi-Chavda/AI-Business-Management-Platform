import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiMapPin,
  FiPlus,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/calendar.css";

function Calendar() {
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 8, 1)
  );

  const events = [
    {
      id: 1,
      title: "Project Review",
      date: "2026-09-07",
      time: "10:00 AM",
      type: "Meeting",
      location: "Google Meet",
      members: 4,
    },
    {
      id: 2,
      title: "Client Discussion",
      date: "2026-09-10",
      time: "02:30 PM",
      type: "Client",
      location: "Zoom Meeting",
      members: 3,
    },
    {
      id: 3,
      title: "UI/UX Review",
      date: "2026-09-14",
      time: "11:30 AM",
      type: "Design",
      location: "Conference Room",
      members: 5,
    },
    {
      id: 4,
      title: "Team Standup",
      date: "2026-09-18",
      time: "09:30 AM",
      type: "Team",
      location: "Google Meet",
      members: 8,
    },
    {
      id: 5,
      title: "Sprint Planning",
      date: "2026-09-23",
      time: "04:00 PM",
      type: "Planning",
      location: "Meeting Room",
      members: 6,
    },
  ];

  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();

    const totalDays = new Date(
      year,
      month + 1,
      0
    ).getDate();

    const previousMonthDays = new Date(
      year,
      month,
      0
    ).getDate();

    const days = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: previousMonthDays - i,
        currentMonth: false,
        date: null,
      });
    }

    for (let day = 1; day <= totalDays; day++) {
      const dateString = `${year}-${String(
        month + 1
      ).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
      )}`;

      days.push({
        day,
        currentMonth: true,
        date: dateString,
      });
    }

    let nextDay = 1;

    while (days.length < 42) {
      days.push({
        day: nextDay,
        currentMonth: false,
        date: null,
      });

      nextDay++;
    }

    return days;
  }, [currentDate]);

  const previousMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };

  const goToday = () => {
    setCurrentDate(new Date());
  };

  const getEvents = (date) => {
    if (!date) return [];

    return events.filter(
      (event) => event.date === date
    );
  };

  const todayString = new Date()
    .toISOString()
    .split("T")[0];

  return (
    <DashboardLayout>
      <main className="calendar-page">

        {/* HEADER */}

        <section className="calendar-page-header">
          <div>
            <span className="calendar-page-label">
              WORKSPACE SCHEDULE
            </span>

            <h1>Calendar</h1>

            <p>
              Manage meetings, project deadlines, client
              calls and team events from one workspace.
            </p>
          </div>

          <button
            type="button"
            className="calendar-primary-button"
            onClick={() =>
              navigate("/calendar/add")
            }
          >
            <FiPlus />
            Add Event
          </button>
        </section>

        {/* STATS */}

        <section className="calendar-stats-grid">

          <article className="calendar-stat-card">
            <div className="calendar-stat-icon">
              <FiCalendar />
            </div>

            <div>
              <span>THIS MONTH</span>
              <strong>12 Events</strong>
            </div>
          </article>

          <article className="calendar-stat-card">
            <div className="calendar-stat-icon">
              <FiClock />
            </div>

            <div>
              <span>UPCOMING</span>
              <strong>5 Meetings</strong>
            </div>
          </article>

          <article className="calendar-stat-card">
            <div className="calendar-stat-icon">
              <FiUsers />
            </div>

            <div>
              <span>TEAM EVENTS</span>
              <strong>7 Scheduled</strong>
            </div>
          </article>

        </section>

        {/* CALENDAR + UPCOMING */}

        <section className="calendar-layout">

          {/* CALENDAR */}

          <section className="calendar-card">

            <div className="calendar-toolbar">

              <div className="calendar-month-controls">

                <button
                  type="button"
                  onClick={previousMonth}
                >
                  <FiChevronLeft />
                </button>

                <h2>{monthName}</h2>

                <button
                  type="button"
                  onClick={nextMonth}
                >
                  <FiChevronRight />
                </button>

              </div>

              <button
                type="button"
                className="calendar-today-button"
                onClick={goToday}
              >
                Today
              </button>

            </div>

            {/* WEEK DAYS */}

            <div className="calendar-weekdays">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            {/* DAYS */}

            <div className="calendar-grid">

              {calendarDays.map((item, index) => {
                const dayEvents = getEvents(item.date);

                return (
                  <div
                    key={index}
                    className={`calendar-day ${
                      !item.currentMonth
                        ? "outside"
                        : ""
                    } ${
                      item.date === todayString
                        ? "today"
                        : ""
                    }`}
                  >
                    <span className="calendar-day-number">
                      {item.day}
                    </span>

                    <div className="calendar-day-events">

                      {dayEvents.map((event) => (
                        <button
                          type="button"
                          key={event.id}
                          className="calendar-event-chip"
                          onClick={() =>
                            navigate(
                              `/calendar/${event.id}`
                            )
                          }
                        >
                          {event.title}
                        </button>
                      ))}

                    </div>
                  </div>
                );
              })}

            </div>

          </section>

          {/* UPCOMING */}

          <aside className="calendar-upcoming-card">

            <div className="calendar-section-heading">
              <span>UPCOMING</span>
              <h2>Next Events</h2>
            </div>

            <div className="calendar-upcoming-list">

              {events.map((event) => (
                <button
                  type="button"
                  key={event.id}
                  className="calendar-upcoming-item"
                  onClick={() =>
                    navigate(
                      `/calendar/${event.id}`
                    )
                  }
                >

                  <div className="calendar-event-date">
                    <strong>
                      {new Date(
                        `${event.date}T00:00:00`
                      ).getDate()}
                    </strong>

                    <span>
                      {new Date(
                        `${event.date}T00:00:00`
                      )
                        .toLocaleString("en-US", {
                          month: "short",
                        })
                        .toUpperCase()}
                    </span>
                  </div>

                  <div className="calendar-event-info">

                    <span className="calendar-event-type">
                      {event.type}
                    </span>

                    <h3>{event.title}</h3>

                    <div>
                      <span>
                        <FiClock />
                        {event.time}
                      </span>

                      <span>
                        <FiMapPin />
                        {event.location}
                      </span>
                    </div>

                  </div>

                </button>
              ))}

            </div>

          </aside>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default Calendar;