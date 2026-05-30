import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import AuthPage from "./pages/AuthPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import ClientsPage from "./pages/ClientsPage";
import DashboardPage from "./pages/DashboardPage";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/clients/1" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/:id" element={<ClientDetailPage />} />
        <Route
          path="/invoices"
          element={<PlaceholderPage title="Invoices" />}
        />
        <Route
          path="/transactions"
          element={<PlaceholderPage title="Transactions" />}
        />
        <Route
          path="/expenses"
          element={<PlaceholderPage title="Expenses" />}
        />
        <Route path="/reports" element={<PlaceholderPage title="Reports" />} />
        <Route path="/team" element={<PlaceholderPage title="Team" />} />
        <Route
          path="/settings"
          element={<PlaceholderPage title="Settings" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}
