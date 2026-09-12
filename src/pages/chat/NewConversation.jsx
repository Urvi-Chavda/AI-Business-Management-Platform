import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiSearch,
  FiUserPlus,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/chat.css";

function NewConversation() {
  const navigate = useNavigate();

  const members = [
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Project Manager",
      initials: "AM",
    },
    {
      id: 2,
      name: "Riya Shah",
      role: "UI/UX Designer",
      initials: "RS",
    },
    {
      id: 3,
      name: "Dev Patel",
      role: "Frontend Developer",
      initials: "DP",
    },
    {
      id: 4,
      name: "Krisha Mehta",
      role: "CRM Executive",
      initials: "KM",
    },
  ];

  return (
    <DashboardLayout>
      <main className="chat-page">

        <button
          type="button"
          className="chat-back-button"
          onClick={() => navigate("/chat")}
        >
          <FiArrowLeft />
          Back to Chat
        </button>

        <section className="chat-page-header">
          <div>
            <span className="chat-page-label">
              TEAM COMMUNICATION
            </span>

            <h1>New Conversation</h1>

            <p>
              Select a team member and start a new
              conversation.
            </p>
          </div>
        </section>

        <section className="chat-new-page-card">

          <div className="chat-new-search">
            <FiSearch />

            <input
              type="text"
              placeholder="Search team members..."
            />
          </div>

          <div className="chat-member-list">
            {members.map((member) => (
              <article
                key={member.id}
                className="chat-member-card"
              >
                <div className="chat-member-left">

                  <div className="chat-avatar">
                    {member.initials}
                  </div>

                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => navigate("/chat")}
                >
                  <FiUserPlus />
                  Start Chat
                </button>
              </article>
            ))}
          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default NewConversation;