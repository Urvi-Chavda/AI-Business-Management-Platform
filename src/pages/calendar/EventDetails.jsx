import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiSave,
  FiTag,
  FiUsers,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/calendar.css";

function AddEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    type: "Meeting",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    members: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Created Event:", formData);

    alert("Event created successfully!");

    navigate("/calendar");
  };

  return (
    <DashboardLayout>
      <main className="calendar-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="calendar-back-button"
          onClick={() => navigate("/calendar")}
        >
          <FiArrowLeft />
          Back to Calendar
        </button>

        {/* HEADER */}

        <section className="calendar-page-header">
          <div>
            <span className="calendar-page-label">
              WORKSPACE SCHEDULE
            </span>

            <h1>Add New Event</h1>

            <p>
              Schedule a meeting, client call, project review
              or team event.
            </p>
          </div>
        </section>

        {/* FORM CARD */}

        <section className="calendar-form-card">

          <div className="calendar-form-heading">
            <span>EVENT INFORMATION</span>

            <h2>Event Details</h2>

            <p>
              Enter the required information to add an event
              to your workspace calendar.
            </p>
          </div>

          <form
            className="calendar-event-form"
            onSubmit={handleSubmit}
          >

            <div className="calendar-form-grid">

              {/* EVENT TITLE */}

              <div className="calendar-form-group calendar-form-full">
                <label htmlFor="title">
                  Event Title
                </label>

                <div className="calendar-input-wrapper">
                  <FiCalendar />

                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Example: Project Review Meeting"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* EVENT TYPE */}

              <div className="calendar-form-group">
                <label htmlFor="type">
                  Event Type
                </label>

                <div className="calendar-input-wrapper">
                  <FiTag />

                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Meeting">
                      Meeting
                    </option>

                    <option value="Client">
                      Client Meeting
                    </option>

                    <option value="Team">
                      Team Event
                    </option>

                    <option value="Design">
                      Design Review
                    </option>

                    <option value="Planning">
                      Planning
                    </option>

                    <option value="Deadline">
                      Project Deadline
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* DATE */}

              <div className="calendar-form-group">
                <label htmlFor="date">
                  Event Date
                </label>

                <div className="calendar-input-wrapper">
                  <FiCalendar />

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* START TIME */}

              <div className="calendar-form-group">
                <label htmlFor="startTime">
                  Start Time
                </label>

                <div className="calendar-input-wrapper">
                  <FiClock />

                  <input
                    id="startTime"
                    name="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* END TIME */}

              <div className="calendar-form-group">
                <label htmlFor="endTime">
                  End Time
                </label>

                <div className="calendar-input-wrapper">
                  <FiClock />

                  <input
                    id="endTime"
                    name="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* LOCATION */}

              <div className="calendar-form-group">
                <label htmlFor="location">
                  Location / Meeting Link
                </label>

                <div className="calendar-input-wrapper">
                  <FiMapPin />

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Google Meet / Office / Zoom"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* MEMBERS */}

              <div className="calendar-form-group">
                <label htmlFor="members">
                  Participants
                </label>

                <div className="calendar-input-wrapper">
                  <FiUsers />

                  <input
                    id="members"
                    name="members"
                    type="text"
                    placeholder="Example: Aarav, Riya, Dev"
                    value={formData.members}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* DESCRIPTION */}

              <div className="calendar-form-group calendar-form-full">
                <label htmlFor="description">
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  placeholder="Write event agenda, notes or additional information..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* ACTIONS */}

            <div className="calendar-form-actions">

              <button
                type="button"
                className="calendar-cancel-button"
                onClick={() => navigate("/calendar")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="calendar-primary-button"
              >
                <FiSave />
                Create Event
              </button>

            </div>

          </form>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default AddEvent;