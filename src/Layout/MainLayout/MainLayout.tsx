
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar/Navbar.tsx';
import { Sidebar } from '../../components/common/Sidebar/Sidebar.tsx';
import { COLORS } from '../../constants/uiConstants.ts';


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

                {/* <header className="h-16 bg-white shadow flex items-center px-6">
                    <h2 className="text-xl font-medium">Dashboard</h2>
                </header> */}

                <main className="flex-1 overflow-auto ">
                    <div className="p-6 rounded shadow" style={{backgroundColor: COLORS.bgColor}}>
                        {/* Router */}
                            <Routes>
                                <Route element={<Dashboard/>} path='/' />
                                <Route element={<NotificationPage/>} path='/notifications' />
                                <Route element={<ServiceManagementPage/>} path='/service' />
                                <Route element={<JobCardsPage/>} path='/job-cards' />
                                <Route element={<CityManagementPage/>} path='/city' />
                                <Route element={<VehicleManagementPage/>} path='/vehicle' />
                                <Route element={<GeneralSettings/>} path='/settings' />
                                <Route element={<ServiceManagementPage/>} path='/logout' />
                                <Route element={<NotFound/>} path='*' />
                            </Routes>
                        
                    </div>
                </main>
            </div>
        </div>
    );
};
