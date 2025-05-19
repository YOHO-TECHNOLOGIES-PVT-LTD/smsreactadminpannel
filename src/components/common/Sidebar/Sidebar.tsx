// import React from 'react'

import { Link } from "react-router-dom"
import Logo from '../../../assets/YESMECHANIC.jpg'

export const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col w-36 h-full bg-white border-r shadow-md">
                <div className="h-16 flex items-center justify-center border-b">
                    <img src={Logo} alt="" width={120} height={80} />
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-100" >Dashboard</Link>
                    <Link to="/notifications" className="block px-4 py-2 rounded hover:bg-gray-100">Notifications</Link>
                    <Link to="/service" className="block px-4 py-2 rounded hover:bg-gray-100">Service</Link>
                    <Link to="/job-cards" className="block px-4 py-2 rounded hover:bg-gray-100">Job Cards</Link>
                    <Link to="/city" className="block px-4 py-2 rounded hover:bg-gray-100">City</Link>
                    <Link to="/vehicle" className="block px-4 py-2 rounded hover:bg-gray-100">Vehicle</Link>
                    <Link to="/settings" className="block px-4 py-2 rounded hover:bg-gray-100">Settings</Link>
                    <Link to="/logout" className="block px-4 py-2 rounded hover:bg-gray-100">Logout</Link>
                </nav>
            </div>
        </>
    )
}
