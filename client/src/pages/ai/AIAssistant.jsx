import DashboardLayout from "../../components/layout/DashboardLayout";

function AIAssistant() {
  return (
    <DashboardLayout>
      <section
        style={{
          padding: "10px",
        }}
      >
        <span
          style={{
            color: "#2563eb",
            fontSize: "10px",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          AI Assistant
        </span>

        <h1
          style={{
            marginTop: "8px",
            color: "#0f172a",
            fontSize: "32px",
          }}
        >
          AI Business Assistant
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#64748b",
          }}
        >
          Email writing, proposals, meeting summaries, task suggestions and
          content generation tools will appear here.
        </p>
      </section>
    </DashboardLayout>
  );
}

export default AIAssistant;