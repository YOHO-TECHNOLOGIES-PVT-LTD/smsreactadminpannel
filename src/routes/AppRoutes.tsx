import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { NotificationPage } from "../pages/notification/NotificationPage";
import { ServiceManagementPage } from "../pages/service-center/ServiceManagementPage";
import { JobCardsPage } from "../pages/job-cards/JobCardsPage";
import { CityManagementPage } from "../pages/city/CityManagementPage";
import AutomatedNotificationsPage from "../pages/notification/AutomatedNotificationsPage";
import  VehicleManagementPage  from "../pages/vehicle/VehicleManagementPage";
import GeneralSettings from "../pages/Settings/GeneralSettings";
import { MainLayout } from "../Layout/MainLayout/MainLayout";
<<<<<<< HEAD
import { NotFound } from "../pages/NotFound/NotFound";
import CityAddPage from "../pages/city/CityAddPage";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import QuotationPage from "../pages/job-cards/steps/Quotationpage";
import CityListPage from "../pages/city/CityListPage";
=======
import { useAuth } from "../pages/auth/AuthContext";
import { Announcement } from "../pages/Announcement/Announcement";
>>>>>>> ab247d18e9eb3dba91717e86856216fde7dbd96c

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
                <Route path="automated-notifications" element={<AutomatedNotificationsPage />} />
                <Route path="service" element={<ServiceManagementPage />} />
                <Route path="job-cards" element={<JobCardsPage />} />
                <Route path="city" element={<CityManagementPage />} />
                <Route path="vehicle" element={<VehicleManagementPage />} />
                <Route path="announcement" element={<Announcement />} />
                <Route path="settings" element={<GeneralSettings />} />
<<<<<<< HEAD
                {/* <Route path="/add" element={<CityAddPage /> } /> */}
                <Route path="/qoutation" element={<QuotationPage /> } />
                <Route path="city-list" element={<CityListPage /> } />
                
                <Route path="*" element={<NotFound/>} />
               
=======
                <Route path="*" element={<Navigate to="/" />} />
>>>>>>> ab247d18e9eb3dba91717e86856216fde7dbd96c
            </Route>
        </Routes>
    );

    return isAuthenticated ? <AdminRoutes /> : <AuthRoutes />;
};

export default AppRoutes;
