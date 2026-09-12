import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMic,
  FiPhoneOff,
  FiVolume2,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/chat.css";

function AudioCall() {
  const navigate = useNavigate();
  const { id } = useParams();

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

        <section className="chat-call-card">

          <span className="chat-page-label">
            AUDIO CALL
          </span>

          <div className="chat-call-avatar">
            AM
          </div>

          <h1>Aarav Mehta</h1>

          <p>Calling...</p>

          <small>Conversation ID: {id}</small>

          <div className="chat-call-actions">

            <button type="button">
              <FiMic />
            </button>

            <button type="button">
              <FiVolume2 />
            </button>

            <button
              type="button"
              className="chat-end-call"
              onClick={() => navigate("/chat")}
            >
              <FiPhoneOff />
            </button>

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default AudioCall;