import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import { Dashboard } from "../pages/Dashboard/Dashboard"
import { NotificationPage } from "../pages/notification/NotificationPage";
import { ServiceManagementPage } from "../pages/service-center/ServiceManagementPage";
import { JobCardsPage } from "../pages/job-cards/JobCardsPage";
import { CityManagementPage } from "../pages/city/CityManagementPage";
import AutomatedNotificationsPage from "../pages/notification/AutomatedNotificationsPage";
import { VehicleManagementPage } from "../pages/vehicle/VehicleManagementPage";
import GeneralSettings from "../pages/Settings/GeneralSettings";
import { MainLayout } from "../Layout/MainLayout/MainLayout";
import { NotFound } from "../pages/NotFound/NotFound";

const AppRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Simulate checking auth status
//   useEffect(() false
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token);
//   }, []);

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
                <Route path="automated-notifications" element={<AutomatedNotificationsPage />} />
                <Route path="service" element={<ServiceManagementPage />} />
                <Route path="job-cards" element={<JobCardsPage />} />
                <Route path="city" element={<CityManagementPage />} />
                <Route path="vehicle" element={<VehicleManagementPage />} />
                <Route path="settings" element={<GeneralSettings />} />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    );

    return isAuthenticated ? <AdminRoutes /> : <AuthRoutes />;
    };

export default AppRoutes;
