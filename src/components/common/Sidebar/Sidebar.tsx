import { useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBell,
  FiUsers,
  FiClipboard,
  FiMapPin,
  FiTruck,
  FiSettings,
  FiAlertTriangle,
  FiMenu,

} from "react-icons/fi";
import Logo from '../../../assets/LOGO.jpg'
import { Megaphone } from "lucide-react"; 

// import { COLORS } from "../../../constants/uiConstants";

const COLOR = {
   primary: "#9b111e",
   bgColor: "#faf3eb",
   secondary: "#E6A895",
 };



export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div
        className="bg-white border-r shadow-md p-2 transition-all duration-300 fixed top-0 left-0 h-screen z-40 flex flex-col items-center"
        
      >
        <div className="flex justify-center items-center h-20">
          <img
          src={Logo}
          alt="YES Mechanic Logo"
          className={`object-contain transition-all duration-300 ${isOpen ? "w-20 h-20" : "w-10 h-10"}`}
          />

        </div>
        <div className="w-full flex justify-end px-2 mt-2">
         <button
         onClick={() => setIsOpen(!isOpen)}
         className="text-gray-600 hover:text-black p-2 rounded-md transition duration-200 hover:bg-gray-100"
         title="Toggle Sidebar"
         >
        <FiMenu size={20} style={{ color: COLOR.primary }} />
        </button>
        </div>

        <nav className="flex flex-col gap-4 mt-4 w-full items-center">
          <SidebarLink
            to="/"
            icon={<FiHome />}
            label="Dashboard"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/notifications"
            icon={<FiBell />}
            label="Notifications"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/service"
            icon={<FiUsers/>}
            label="Service"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/job-cards"
            icon={<FiClipboard />}
            label="Job Cards"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/city"
            icon={<FiMapPin />}
            label="City"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/vehicle"
            icon={<FiTruck />}
            label="Vehicle"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/announcement"
            icon={<Megaphone />}
            label="Announcement"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/settings"
            icon={<FiSettings />}
            label="Settings"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
  to="/sos"
  icon={<FiAlertTriangle />}
  label="SOS"
  isOpen={isOpen}
  onClick={handleLinkClick}
/>

        </nav>
      </div>
            <div
  className={`transition-all duration-300 ${isOpen ? "ml-48" : "ml-16"} flex-1`}
>

      </div>
    </div>
  );
};

const SidebarLink = ({
  to,
  icon,
  label,
  isOpen,
  onClick,
}: {
  to: string;
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered || isActive ? "#faf3eb" : "transparent",
      }}
      className={`flex items-center transition-all px-2 py-1 
        ${isOpen ? "w-full justify-start gap-5 pl-5 pr-1" : "justify-center w-10 h-8"} 
        ${isHovered || isActive ? "bg-[#faf3eb] rounded-full" : "rounded-full"}
      `}
    >
      <div className="text-xl" style={{ color: COLOR.primary }}>
        {icon}
      </div>
      {isOpen && (
        <span style={{ color: COLOR.primary }}>
          {label}
        </span>
      )}
    </Link>
  );
};

