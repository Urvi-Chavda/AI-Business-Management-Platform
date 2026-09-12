import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiInfo,
  FiMoreVertical,
  FiPaperclip,
  FiPhone,
  FiPlus,
  FiSearch,
  FiSend,
  FiSmile,
  FiVideo,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/chat.css";

function Chat() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState("");

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Project Manager",
      initials: "AM",
      online: true,
      unread: 2,
      time: "10:42 AM",
      lastMessage: "I have updated the project timeline.",

      messages: [
        {
          id: 1,
          sender: "other",
          text: "Hi! Have you reviewed the new project requirements?",
          time: "10:30 AM",
        },
        {
          id: 2,
          sender: "me",
          text: "Yes, I reviewed them. Everything looks good.",
          time: "10:34 AM",
        },
        {
          id: 3,
          sender: "other",
          text: "Great. I have updated the project timeline.",
          time: "10:42 AM",
        },
      ],
    },

    {
      id: 2,
      name: "Riya Shah",
      role: "UI/UX Designer",
      initials: "RS",
      online: true,
      unread: 0,
      time: "9:25 AM",
      lastMessage: "The dashboard design is ready.",

      messages: [
        {
          id: 1,
          sender: "other",
          text: "Hi, I completed the dashboard design.",
          time: "9:20 AM",
        },
        {
          id: 2,
          sender: "me",
          text: "Great! Please share the final design.",
          time: "9:22 AM",
        },
        {
          id: 3,
          sender: "other",
          text: "The dashboard design is ready.",
          time: "9:25 AM",
        },
      ],
    },

    {
      id: 3,
      name: "Dev Patel",
      role: "Frontend Developer",
      initials: "DP",
      online: false,
      unread: 0,
      time: "Yesterday",
      lastMessage: "I pushed the latest changes.",

      messages: [
        {
          id: 1,
          sender: "other",
          text: "I completed the frontend updates.",
          time: "Yesterday",
        },
        {
          id: 2,
          sender: "other",
          text: "I pushed the latest changes.",
          time: "Yesterday",
        },
      ],
    },

    {
      id: 4,
      name: "Krisha Mehta",
      role: "CRM Executive",
      initials: "KM",
      online: false,
      unread: 1,
      time: "Yesterday",
      lastMessage: "Can we discuss the new client?",

      messages: [
        {
          id: 1,
          sender: "other",
          text: "Can we discuss the new client?",
          time: "Yesterday",
        },
      ],
    },
  ]);

  // =====================================================
  // SELECTED CHAT
  // =====================================================

  const selectedChat = conversations.find(
    (conversation) => conversation.id === activeChat
  );

  // =====================================================
  // SEARCH
  // =====================================================

  const filteredConversations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return conversations.filter((conversation) => {
      return (
        conversation.name.toLowerCase().includes(query) ||
        conversation.role.toLowerCase().includes(query)
      );
    });
  }, [search, conversations]);

  // =====================================================
  // SELECT CONVERSATION
  // =====================================================

  const selectConversation = (id) => {
    setActiveChat(id);

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              unread: 0,
            }
          : conversation
      )
    );
  };

  // =====================================================
  // SEND MESSAGE
  // =====================================================

  const sendMessage = () => {
    const cleanMessage = message.trim();

    if (!cleanMessage || !selectedChat) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: cleanMessage,

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === activeChat
          ? {
              ...conversation,
              lastMessage: cleanMessage,
              time: "Now",

              messages: [
                ...conversation.messages,
                newMessage,
              ],
            }
          : conversation
      )
    );

    setMessage("");
  };

  // =====================================================
  // ENTER TO SEND
  // =====================================================

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      sendMessage();
    }
  };

  return (
    <DashboardLayout>
      <main className="chat-page">

        {/* ==================================================
            PAGE HEADER
        ================================================== */}

        <section className="chat-page-header">

          <div>
            <span className="chat-page-label">
              TEAM COMMUNICATION
            </span>

            <h1>Messages</h1>

            <p>
              Communicate with your team and manage
              conversations from one workspace.
            </p>
          </div>

          {/* NEW CONVERSATION */}

          <button
            type="button"
            className="chat-new-button"
            onClick={() =>
              navigate("/chat/new")
            }
          >
            <FiPlus />

            New Conversation
          </button>

        </section>

        {/* ==================================================
            CHAT CONTAINER
        ================================================== */}

        <section className="chat-container">

          {/* ==================================================
              LEFT SIDEBAR
          ================================================== */}

          <aside className="chat-sidebar">

            <div className="chat-sidebar-header">

              <div>
                <span>
                  INBOX
                </span>

                <h2>
                  Conversations
                </h2>
              </div>

              <button
                type="button"
                title="New Conversation"
                onClick={() =>
                  navigate("/chat/new")
                }
              >
                <FiMoreVertical />
              </button>

            </div>

            {/* SEARCH */}

            <div className="chat-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search conversations..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

            </div>

            {/* CONVERSATIONS */}

            <div className="chat-conversation-list">

              {filteredConversations.map(
                (conversation) => (
                  <button
                    type="button"
                    key={conversation.id}
                    className={`chat-conversation-item ${
                      activeChat === conversation.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      selectConversation(
                        conversation.id
                      )
                    }
                  >

                    {/* AVATAR */}

                    <div className="chat-avatar-wrapper">

                      <div className="chat-avatar">
                        {conversation.initials}
                      </div>

                      <span
                        className={`chat-presence ${
                          conversation.online
                            ? "online"
                            : "offline"
                        }`}
                      />

                    </div>

                    {/* TEXT */}

                    <div className="chat-conversation-content">

                      <div className="chat-conversation-top">

                        <strong>
                          {conversation.name}
                        </strong>

                        <span>
                          {conversation.time}
                        </span>

                      </div>

                      <div className="chat-conversation-bottom">

                        <p>
                          {conversation.lastMessage}
                        </p>

                        {conversation.unread > 0 && (
                          <span className="chat-unread">
                            {conversation.unread}
                          </span>
                        )}

                      </div>

                    </div>

                  </button>
                )
              )}

            </div>

          </aside>

          {/* ==================================================
              RIGHT CHAT WINDOW
          ================================================== */}

          {selectedChat && (
            <section className="chat-window">

              {/* CHAT HEADER */}

              <header className="chat-window-header">

                <div className="chat-active-user">

                  <div className="chat-avatar-wrapper">

                    <div className="chat-avatar">
                      {selectedChat.initials}
                    </div>

                    <span
                      className={`chat-presence ${
                        selectedChat.online
                          ? "online"
                          : "offline"
                      }`}
                    />

                  </div>

                  <div>

                    <strong>
                      {selectedChat.name}
                    </strong>

                    <span>
                      {selectedChat.online
                        ? "Online"
                        : selectedChat.role}
                    </span>

                  </div>

                </div>

                {/* ==================================================
                    HEADER ACTIONS
                ================================================== */}

                <div className="chat-header-actions">

                  {/* AUDIO CALL */}

                  <button
                    type="button"
                    title="Audio Call"
                    onClick={() =>
                      navigate(
                        `/chat/call/${selectedChat.id}`
                      )
                    }
                  >
                    <FiPhone />
                  </button>

                  {/* VIDEO CALL */}

                  <button
                    type="button"
                    title="Video Call"
                    onClick={() =>
                      navigate(
                        `/chat/video/${selectedChat.id}`
                      )
                    }
                  >
                    <FiVideo />
                  </button>

                  {/* CHAT INFORMATION */}

                  <button
                    type="button"
                    title="Chat Information"
                    onClick={() =>
                      navigate(
                        `/chat/info/${selectedChat.id}`
                      )
                    }
                  >
                    <FiInfo />
                  </button>

                  {/* MORE OPTIONS */}

                  <button
                    type="button"
                    title="More Options"
                    onClick={() =>
                      navigate(
                        `/chat/options/${selectedChat.id}`
                      )
                    }
                  >
                    <FiMoreVertical />
                  </button>

                </div>

              </header>

              {/* ==================================================
                  MESSAGES
              ================================================== */}

              <div className="chat-messages">

                <div className="chat-date-divider">
                  <span>
                    Today
                  </span>
                </div>

                {selectedChat.messages.map(
                  (item) => (
                    <div
                      key={item.id}
                      className={`chat-message-row ${
                        item.sender === "me"
                          ? "sent"
                          : "received"
                      }`}
                    >

                      {item.sender !== "me" && (
                        <div className="chat-message-avatar">
                          {selectedChat.initials}
                        </div>
                      )}

                      <div>

                        <div className="chat-message-bubble">
                          {item.text}
                        </div>

                        <span className="chat-message-time">
                          {item.time}
                        </span>

                      </div>

                    </div>
                  )
                )}

              </div>

              {/* ==================================================
                  MESSAGE COMPOSER
              ================================================== */}

              <footer className="chat-composer">

                {/* ATTACHMENT */}

                <button
                  type="button"
                  className="chat-composer-icon"
                  title="Attach File"
                >
                  <FiPaperclip />
                </button>

                {/* INPUT */}

                <div className="chat-message-input">

                  <textarea
                    rows="1"
                    placeholder={`Message ${selectedChat.name}...`}
                    value={message}
                    onChange={(event) =>
                      setMessage(
                        event.target.value
                      )
                    }
                    onKeyDown={handleKeyDown}
                  />

                  <button
                    type="button"
                    title="Emoji"
                  >
                    <FiSmile />
                  </button>

                </div>

                {/* SEND */}

                <button
                  type="button"
                  className="chat-send-button"
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  title="Send Message"
                >
                  <FiSend />
                </button>

              </footer>

            </section>
          )}

        </section>

      </main>
    </DashboardLayout>
  );
}

export default Chat;