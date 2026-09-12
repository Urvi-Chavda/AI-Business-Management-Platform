import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiMic,
  FiPhoneOff,
  FiVideo,
  FiVideoOff,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/chat.css";

function VideoCall() {
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

        <section className="chat-video-page">

          <div className="chat-video-person">
            <div className="chat-call-avatar">
              AM
            </div>

            <h1>Aarav Mehta</h1>

            <p>
              Connecting video call...
            </p>
          </div>

          <div className="chat-video-controls">

            <button type="button">
              <FiMic />
            </button>

            <button type="button">
              <FiVideo />
            </button>

            <button type="button">
              <FiVideoOff />
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

export default VideoCall;