import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Features from "../pages/Features";
import Solutions from "../pages/Solutions";
import Pricing from "../pages/Pricing";
import NotFound from "../pages/NotFound";

import Authentication from "../pages/auth/Authentication";

import Dashboard from "../pages/dashboard/Dashboard";

import Projects from "../pages/projects/Projects";
import CreateProject from "../pages/projects/CreateProject";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Tasks from "../pages/projects/Tasks";
import KanbanBoard from "../pages/projects/KanbanBoard";

function AppRoutes() {
  return (
    <Routes>
      {/* Landing Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/pricing" element={<Pricing />} />

      {/* Authentication */}
      <Route
        path="/authentication"
        element={<Authentication />}
      />

      <Route
        path="/login"
        element={<Authentication initialPage="login" />}
      />

      <Route
        path="/register"
        element={<Authentication initialPage="register" />}
      />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Project Management */}
      <Route path="/projects" element={<Projects />} />

      <Route
        path="/projects/create"
        element={<CreateProject />}
      />

      <Route
        path="/projects/tasks"
        element={<Tasks />}
      />

      <Route
        path="/projects/kanban"
        element={<KanbanBoard />}
      />

      <Route
        path="/projects/:id"
        element={<ProjectDetails />}
      />

      {/* 404 */}
      <Route path="/404" element={<NotFound />} />

      <Route
        path="*"
        element={<Navigate to="/404" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;