import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBell,
  FiMail,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/chat.css";

function ChatInfo() {
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
            CONVERSATION DETAILS
          </span>

          <h1>Chat Information</h1>

          <div className="chat-profile-details">

            <div className="chat-call-avatar">
              AM
            </div>

            <h2>Aarav Mehta</h2>
            <p>Project Manager</p>

            <div className="chat-info-row">
              <FiMail />
              aarav@aibusiness.com
            </div>

            <div className="chat-info-row">
              <FiUser />
              Team Member
            </div>

            <div className="chat-info-row">
              <FiBell />
              Notifications Enabled
            </div>

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default ChatInfo;