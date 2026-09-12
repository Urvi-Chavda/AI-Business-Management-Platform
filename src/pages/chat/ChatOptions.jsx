import { useNavigate } from "react-router-dom";
import {
  FiArchive,
  FiArrowLeft,
  FiBellOff,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/chat.css";

function ChatOptions() {
  const navigate = useNavigate();

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

        <section className="chat-new-page-card">

          <span className="chat-page-label">
            CONVERSATION SETTINGS
          </span>

          <h1>Chat Options</h1>

          <p>
            Manage this conversation and its settings.
          </p>

          <div className="chat-option-list">

            <button type="button">
              <FiSearch />
              Search in Conversation
            </button>

            <button type="button">
              <FiBellOff />
              Mute Notifications
            </button>

            <button type="button">
              <FiArchive />
              Archive Conversation
            </button>

            <button
              type="button"
              className="danger"
            >
              <FiTrash2 />
              Delete Conversation
            </button>

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default ChatOptions;