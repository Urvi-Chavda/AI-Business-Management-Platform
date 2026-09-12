import { useMemo, useState } from "react";

import {
  FiCode,
  FiFileText,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiTarget,
  FiZap,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/ai-assistant.css";

// ======================================================
// AI TOOLS
// ======================================================

const tools = [
  {
    id: "email",
    title: "Email Generator",
    description:
      "Generate professional business emails quickly.",
    icon: FiMail,
    placeholder:
      "Example: Write a follow-up email for a client who has not replied for 3 days.",
  },
  {
    id: "proposal",
    title: "Proposal Generator",
    description:
      "Create professional project and client proposals.",
    icon: FiFileText,
    placeholder:
      "Example: Create a website development proposal for a small business.",
  },
  {
    id: "meeting",
    title: "Meeting Summary",
    description:
      "Convert meeting notes into a clear summary.",
    icon: FiMessageSquare,
    placeholder:
      "Paste your meeting notes here...",
  },
  {
    id: "tasks",
    title: "Task Suggestions",
    description:
      "Generate useful tasks from your project requirements.",
    icon: FiTarget,
    placeholder:
      "Example: Suggest tasks for developing an ecommerce website.",
  },
  {
    id: "content",
    title: "SEO / Blog Content",
    description:
      "Generate blog ideas, SEO content and marketing copy.",
    icon: FiZap,
    placeholder:
      "Example: Write SEO content for an AI business management platform.",
  },
  {
    id: "code",
    title: "Code Explanation",
    description:
      "Understand code in simple and clear language.",
    icon: FiCode,
    placeholder:
      "Paste your code here for explanation...",
  },
];

// ======================================================
// COMPONENT
// ======================================================

function AIAssistant() {
  const [selectedTool, setSelectedTool] =
    useState("email");

  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  // ====================================================
  // ACTIVE TOOL
  // ====================================================

  const activeTool = useMemo(() => {
    return (
      tools.find(
        (tool) => tool.id === selectedTool
      ) || tools[0]
    );
  }, [selectedTool]);

  const ActiveToolIcon = activeTool.icon;

  // ====================================================
  // GENERATE DEMO AI RESPONSE
  // ====================================================

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Please enter your request.");
      return;
    }

    setLoading(true);
    setResponse("");

    // Frontend demo response
    // Later we will connect real AI API here.

    setTimeout(() => {
      let generatedText = "";

      switch (selectedTool) {
        // EMAIL GENERATOR

        case "email":
          generatedText = `Subject: Follow-up Regarding Our Previous Discussion

Dear Client,

I hope you are doing well.

I wanted to follow up regarding our previous discussion and check whether you had a chance to review the information shared earlier.

Please let me know if you need any additional information or clarification from my side.

I look forward to hearing from you.

Best regards,
AI Business Management Platform`;

          break;

        // PROPOSAL GENERATOR

        case "proposal":
          generatedText = `PROJECT PROPOSAL

Project Objective:
Develop a professional, responsive and user-friendly digital solution based on the client's business requirements.

Scope of Work:

1. Requirement Analysis
2. UI/UX Design
3. Frontend Development
4. Backend Development
5. Database Integration
6. Testing and Bug Fixing
7. Deployment

Expected Outcome:

A scalable and professional business solution that improves productivity and provides a better user experience.

Estimated Workflow:

Planning → Design → Development → Testing → Deployment`;

          break;

        // MEETING SUMMARY

        case "meeting":
          generatedText = `MEETING SUMMARY

Key Discussion Points:

• Reviewed current project progress.
• Discussed pending development tasks.
• Reviewed client requirements.
• Identified important deadlines.
• Assigned responsibilities to team members.

Action Items:

• Complete pending development work.
• Review UI/UX changes.
• Fix reported issues.
• Prepare the next progress update.
• Schedule the next project review meeting.`;

          break;

        // TASK SUGGESTIONS

        case "tasks":
          generatedText = `SUGGESTED TASKS

1. Analyze project requirements.

2. Prepare project structure.

3. Create UI wireframes.

4. Design frontend components.

5. Develop authentication module.

6. Develop backend APIs.

7. Connect the database.

8. Implement CRUD operations.

9. Perform application testing.

10. Fix bugs and errors.

11. Optimize application performance.

12. Deploy the final application.`;

          break;

        // SEO / BLOG CONTENT

        case "content":
          generatedText = `AI BUSINESS MANAGEMENT PLATFORM

Transform the way you manage your business with an intelligent AI-powered business management platform.

Our platform brings project management, CRM, invoicing, team collaboration, calendar management, analytics and AI-powered automation into one centralized workspace.

KEY BENEFITS

• Manage projects efficiently
• Track clients and leads
• Generate professional invoices
• Collaborate with your team
• Organize meetings and events
• Analyze business performance
• Automate repetitive business tasks

Work smarter, improve productivity and make better business decisions with AI-powered business management.`;

          break;

        // CODE EXPLANATION

        case "code":
          generatedText = `CODE EXPLANATION

The submitted code can be understood in the following way:

1. IMPORTS
The code imports the required libraries, icons and components.

2. COMPONENT
The main component contains the page functionality and user interface.

3. STATE MANAGEMENT
React state is used to store and update dynamic information.

4. FUNCTIONS
Functions handle user actions and application logic.

5. JSX
JSX defines what will be displayed on the screen.

6. EXPORT
The component is exported so it can be imported and used in other files.

When the real AI backend is connected, the assistant will analyze the exact submitted code and provide a detailed explanation.`;

          break;

        default:
          generatedText =
            "AI response generated successfully.";
      }

      setResponse(generatedText);
      setLoading(false);
    }, 700);
  };

  // ====================================================
  // CLEAR
  // ====================================================

  const handleClear = () => {
    setPrompt("");
    setResponse("");
  };

  // ====================================================
  // COPY RESPONSE
  // ====================================================

  const handleCopy = async () => {
    if (!response) {
      return;
    }

    try {
      await navigator.clipboard.writeText(response);

      alert("Response copied successfully!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // ====================================================
  // UI
  // ====================================================

  return (
    <DashboardLayout>
      <main className="ai-page">

        {/* ================================================
            PAGE HEADER
        ================================================ */}

        <section className="ai-page-header">

          <div>
            <span className="ai-page-label">
              AI POWERED WORKSPACE
            </span>

            <h1>AI Assistant</h1>

            <p>
              Generate emails, proposals, meeting
              summaries, tasks, SEO content and code
              explanations from one intelligent
              workspace.
            </p>
          </div>

          <div className="ai-header-badge">
            <FiZap />

            AI Assistant
          </div>

        </section>

        {/* ================================================
            AI TOOLS
        ================================================ */}

        <section className="ai-tools-grid">

          {tools.map((tool) => {
            const ToolIcon = tool.icon;

            return (
              <button
                key={tool.id}
                type="button"
                className={`ai-tool-card ${
                  selectedTool === tool.id
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setSelectedTool(tool.id);
                  setPrompt("");
                  setResponse("");
                }}
              >
                <div className="ai-tool-icon">
                  <ToolIcon />
                </div>

                <div>
                  <strong>
                    {tool.title}
                  </strong>

                  <span>
                    {tool.description}
                  </span>
                </div>
              </button>
            );
          })}

        </section>

        {/* ================================================
            AI WORKSPACE
        ================================================ */}

        <section className="ai-workspace-card">

          {/* HEADER */}

          <div className="ai-workspace-header">

            <div className="ai-workspace-title">

              <div className="ai-workspace-icon">
                <ActiveToolIcon />
              </div>

              <div>
                <span>
                  CURRENT TOOL
                </span>

                <h2>
                  {activeTool.title}
                </h2>
              </div>

            </div>

            <button
              type="button"
              className="ai-clear-button"
              onClick={handleClear}
            >
              Clear
            </button>

          </div>

          {/* BODY */}

          <div className="ai-workspace-body">

            {/* ============================================
                INPUT
            ============================================ */}

            <div className="ai-input-panel">

              <label>
                Your Request
              </label>

              <textarea
                value={prompt}
                onChange={(event) =>
                  setPrompt(event.target.value)
                }
                placeholder={
                  activeTool.placeholder
                }
              />

              <div className="ai-input-footer">

                <span>
                  {prompt.length} characters
                </span>

                <button
                  type="button"
                  className="ai-generate-button"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <FiZap />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Generate
                    </>
                  )}
                </button>

              </div>

            </div>

            {/* ============================================
                OUTPUT
            ============================================ */}

            <div className="ai-output-panel">

              <div className="ai-output-header">

                <span>
                  AI RESPONSE
                </span>

                {response && (
                  <button
                    type="button"
                    className="ai-copy-button"
                    onClick={handleCopy}
                  >
                    Copy Response
                  </button>
                )}

              </div>

              {loading ? (
                <div className="ai-empty-response">

                  <div className="ai-empty-icon ai-loading-icon">
                    <FiZap />
                  </div>

                  <h3>
                    Generating response...
                  </h3>

                  <p>
                    AI Assistant is preparing your
                    content.
                  </p>

                </div>
              ) : response ? (
                <div className="ai-response">

                  <pre>
                    {response}
                  </pre>

                </div>
              ) : (
                <div className="ai-empty-response">

                  <div className="ai-empty-icon">
                    <FiZap />
                  </div>

                  <h3>
                    Ready to generate
                  </h3>

                  <p>
                    Enter your request and click
                    Generate to see the AI response.
                  </p>

                </div>
              )}

            </div>

          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}

export default AIAssistant;