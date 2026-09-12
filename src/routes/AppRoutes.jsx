import { Navigate, Route, Routes } from "react-router-dom";

// ========================= PUBLIC =========================
import Home from "../pages/Home";
import Features from "../pages/Features";
import Solutions from "../pages/Solutions";
import Pricing from "../pages/Pricing";
import NotFound from "../pages/NotFound";

// ========================= AUTH =========================
import Authentication from "../pages/auth/Authentication";

// ========================= DASHBOARD =========================
import Dashboard from "../pages/dashboard/Dashboard";

// ========================= PROJECTS =========================
import Projects from "../pages/projects/Projects";
import CreateProject from "../pages/projects/CreateProject";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Tasks from "../pages/projects/Tasks";
import KanbanBoard from "../pages/projects/KanbanBoard";

// ========================= CRM =========================
import CRM from "../pages/crm/CRM";
import Clients from "../pages/crm/Clients";
import AddClient from "../pages/crm/AddClient";
import Leads from "../pages/crm/Leads";
import AddLead from "../pages/crm/AddLead";
import FollowUps from "../pages/crm/FollowUps";
import ScheduleFollowUp from "../pages/crm/ScheduleFollowUp";

// ========================= INVOICES =========================
import Invoices from "../pages/invoices/Invoices";
import CreateInvoice from "../pages/invoices/CreateInvoice";
import InvoicePreview from "../pages/invoices/InvoicePreview";

// ========================= TEAM =========================
import Employees from "../pages/team/Employees";
import AddEmployee from "../pages/team/AddEmployee";
import Attendance from "../pages/team/Attendance";
import Roles from "../pages/team/Roles";
import CreateRole from "../pages/team/CreateRole";
import ManageRole from "../pages/team/ManageRole";

// ========================= CHAT =========================
import Chat from "../pages/chat/Chat";
import NewConversation from "../pages/chat/NewConversation";
import AudioCall from "../pages/chat/AudioCall";
import VideoCall from "../pages/chat/VideoCall";
import ChatInfo from "../pages/chat/ChatInfo";
import ChatOptions from "../pages/chat/ChatOptions";

// ========================= CALENDAR =========================
import Calendar from "../pages/calendar/Calendar";
import AddEvent from "../pages/calendar/AddEvent";
import EventDetails from "../pages/calendar/EventDetails";

// ========================= NOTIFICATIONS =========================
import Notifications from "../pages/notifications/Notifications";

// ========================= AI ASSISTANT =========================
import AIAssistant from "../pages/ai/AIAssistant";

// ========================= ANALYTICS =========================
import Analytics from "../pages/analytics/Analytics";

// ========================= ADMIN =========================
import AdminPanel from "../pages/admin/AdminPanel";

// ========================= SUBSCRIPTION =========================
import Subscription from "../pages/subscription/Subscription";
import BillingHistory from "../pages/subscription/BillingHistory";

// ========================= PAYMENT =========================
import Payment from "../pages/payment/Payment";

// ========================= PROFILE =========================
import Profile from "../pages/profile/Profile";

// ========================= SETTINGS =========================
import Settings from "../pages/settings/Settings";

function AppRoutes() {
  return (
    <Routes>

      {/* ================= PUBLIC ================= */}

      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/pricing" element={<Pricing />} />

      {/* ================= AUTH ================= */}

      <Route path="/authentication" element={<Authentication />} />
      <Route path="/login" element={<Authentication initialPage="login" />} />
      <Route path="/register" element={<Authentication initialPage="register" />} />

      {/* ================= DASHBOARD ================= */}

      <Route path="/dashboard" element={<Dashboard />} />

      {/* ================= PROJECT MANAGEMENT ================= */}

      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/create" element={<CreateProject />} />
      <Route path="/projects/tasks" element={<Tasks />} />
      <Route path="/projects/kanban" element={<KanbanBoard />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />

      {/* ================= CRM ================= */}

      <Route path="/crm" element={<CRM />} />
      <Route path="/crm/clients" element={<Clients />} />
      <Route path="/crm/clients/add" element={<AddClient />} />
      <Route path="/crm/leads" element={<Leads />} />
      <Route path="/crm/leads/add" element={<AddLead />} />
      <Route path="/crm/follow-ups" element={<FollowUps />} />
      <Route path="/crm/follow-ups/add" element={<ScheduleFollowUp />} />

      {/* ================= INVOICES ================= */}

      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoices/create" element={<CreateInvoice />} />
      <Route path="/invoices/:id" element={<InvoicePreview />} />

      {/* ================= TEAM MANAGEMENT ================= */}

      <Route path="/team" element={<Employees />} />
      <Route path="/team/employees" element={<Employees />} />
      <Route path="/team/add" element={<AddEmployee />} />
      <Route path="/team/attendance" element={<Attendance />} />
      <Route path="/team/roles" element={<Roles />} />
      <Route path="/team/roles/create" element={<CreateRole />} />
      <Route path="/team/roles/:id" element={<ManageRole />} />

      {/* ================= CHAT ================= */}

      <Route path="/chat" element={<Chat />} />
      <Route path="/chat/new" element={<NewConversation />} />
      <Route path="/chat/call/:id" element={<AudioCall />} />
      <Route path="/chat/video/:id" element={<VideoCall />} />
      <Route path="/chat/info/:id" element={<ChatInfo />} />
      <Route path="/chat/options/:id" element={<ChatOptions />} />

      {/* ================= CALENDAR ================= */}

      <Route path="/calendar" element={<Calendar />} />
      <Route path="/calendar/add" element={<AddEvent />} />
      <Route path="/calendar/:id" element={<EventDetails />} />

      {/* ================= NOTIFICATIONS ================= */}

      <Route path="/notifications" element={<Notifications />} />

      {/* ================= AI ASSISTANT ================= */}

      <Route path="/ai-assistant" element={<AIAssistant />} />

      {/* ================= ANALYTICS ================= */}

      <Route path="/analytics" element={<Analytics />} />

      {/* ================= ADMIN PANEL ================= */}

      <Route path="/admin" element={<AdminPanel />} />

      {/* ================= SUBSCRIPTION ================= */}

      <Route path="/subscription" element={<Subscription />} />
      <Route path="/subscription/history" element={<BillingHistory />} />

      {/* ================= PAYMENT ================= */}

      <Route path="/payment" element={<Payment />} />

      {/* ================= PROFILE (NEW) ================= */}

      <Route path="/profile" element={<Profile />} />

      {/* ================= SETTINGS ================= */}

      <Route path="/settings" element={<Settings />} />

      {/* ================= 404 ================= */}

      <Route path="/404" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/404" replace />} />

    </Routes>
  );
}

export default AppRoutes;