import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import { Dashboard } from "../pages/Dashboards/Dashboard";
import { NotificationPage } from "../pages/notification/NotificationPage";
import { ServiceManagementPage } from "../pages/service-center/ServiceManagementPage";
import { JobCardsPage } from "../pages/job-cards/JobCardsPage";
import { CityManagementPage } from "../pages/city/CityManagementPage";
import AutomatedNotificationsPage from "../pages/notification/AutomatedNotificationsPage";
import VehicleManagementPage from "../pages/vehicle/VehicleManagementPage";
import GeneralSettings from "../pages/Settings/GeneralSettings";
import { MainLayout } from "../Layout/MainLayout/MainLayout";
import { useAuth } from "../pages/auth/AuthContext";
import { Announcement } from "../pages/Announcement/Announcement";
import SosDetailsCard from "../pages/sos/SosDetailsCard";
import DashboardSos from "../pages/sos/DashBoardSos";
import QuotationPage from "../pages/job-cards/steps/Quotationpage";
import Queries from "../pages/Queries/Queries";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  const AuthRoutes = () => (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );

  const AdminRoutes = () => (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="notifications" element={<NotificationPage />} />
        <Route
          path="automated-notifications"
          element={<AutomatedNotificationsPage />}
        />
        <Route path="service" element={<ServiceManagementPage />} />
        <Route path="job-cards" element={<JobCardsPage />} />
        <Route path="city" element={<CityManagementPage />} />
        <Route path="vehicle" element={<VehicleManagementPage />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="settings" element={<GeneralSettings />} />
        <Route path="sos" element={<DashboardSos />} />
        <Route path="sosdetails/:id" element={<SosDetailsCard />} />
        <Route path="quotation/:id" element={<QuotationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/queries" element={<Queries />} />
      </Route>
    </Routes>
  );

  return isAuthenticated ? <AdminRoutes /> : <AuthRoutes />;
};

export default AppRoutes;
