// import React from 'react';
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/common/Navbar/Navbar.tsx";
import { Sidebar } from "../../components/common/Sidebar/Sidebar.tsx";
// import { Route, Routes } from 'react-router-dom';

// import { NotificationPage } from '../../pages/notification/NotificationPage.tsx';
// import { ServiceManagementPage } from '../../pages/service-center/ServiceManagementPage.tsx';
// import { JobCardsPage } from '../../pages/job-cards/JobCardsPage.tsx';
// import { CityManagementPage } from '../../pages/city/CityManagementPage.tsx';
// import { NotFound } from '../../pages/NotFound/NotFound.tsx';
// import { VehicleManagementPage } from '../../pages/vehicle/VehicleManagementPage.tsx';
// import GeneralSettings from '../../pages/Settings/GeneralSettings.tsx';
// import QuotationPage from '../../pages/job-cards/steps/Quotationpage.tsx';
// import { Dashboard } from '../../pages/Dashboard/Dashboard.tsx';
import { COLORS } from "../../constants/uiConstants.ts";

export const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar takes up 1/9 of the width */}
      <div className="w-1/9">
        <Sidebar />
      </div>

      {/* Main content takes up the remaining 8/9 of the width */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-auto ">
          <div
            className="p-4 rounded shadow"
            style={{ backgroundColor: COLORS.bgColor }}
          >
            <Outlet />
            {/* <div className="p-6 rounded shadow" style={{ backgroundColor: COLORS.bgColor }}> */}

            {/* <Routes>
                                <Route element={<Dashboard/>} path='/' />
                                <Route element={<NotificationPage/>} path='/notifications' />
                                <Route element={<ServiceManagementPage/>} path='/service' />
                                <Route element={<JobCardsPage/>} path='/job-cards' />
                                <Route element={<CityManagementPage/>} path='/city' />
                                <Route element={<VehicleManagementPage/>} path='/vehicle' />
                                <Route element={<GeneralSettings/>} path='/settings' />
                                <Route element={<ServiceManagementPage/>} path='/logout' />
                                <Route element={<QuotationPage/>} path='/quatation' />
                                
                                <Route element={<NotFound/>} path='*' />
                            </Routes>
                        */}

            {/* </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};
