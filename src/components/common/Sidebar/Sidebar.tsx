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
} from "react-icons/fi";
// import Logo from "../../../assets/LOGO.jpg";
import { RiCalendarScheduleLine } from "react-icons/ri";
import Logo from "../../../assets/YES MECHANIC LOGO .png";
import MiniLogo from "../../../assets/Toggle-Logo.jpg";
import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";
import { Megaphone } from "lucide-react";
import { MdHelpOutline } from "react-icons/md";
import { FONTS } from "../../../constants/uiConstants";
import { AiOutlineCalendar } from "react-icons/ai";

const COLOR = {
  primary: "#9b111e",
  bgColor: "#faf3eb",
  secondary: "#E6A895",
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-white border-r shadow-md p-2 transition-all duration-300 fixed top-0 left-0 h-screen z-40 flex flex-col items-center">
        <div
          className={`flex justify-center items-center h-20 transition-all duration-300 ${
            isOpen ? "w-40" : "w-12"
          }`}
        >
          <img
            src={isOpen ? Logo : MiniLogo}
            alt="YES Mechanic Logo"
            className="object-contain h-[48px] transition-all duration-300"
          />
        </div>

        <div className="w-full flex justify-end px-2 mt-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-black p-2 rounded-md transition duration-200 hover:bg-gray-100"
            title="Toggle Sidebar"
          >
            {isOpen ? (
              <RiMenu3Line size={20} style={{ color: COLOR.primary }} />
            ) : (
              <RiMenu2Line size={20} style={{ color: COLOR.primary }} />
            )}
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
            to="/bookings"
            icon={<AiOutlineCalendar />}
            label="Bookings"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />       
          <SidebarLink
            to="/service"
            icon={<FiUsers />}
            label="Partner"
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
            to="/request-queue/schedule"
            icon={<RiCalendarScheduleLine />}
            label="Request Queue"
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
            to="/sos"
            icon={<FiAlertTriangle />}
            label="SOS"
            isOpen={isOpen}
            onClick={handleLinkClick}
          />
          <SidebarLink
            to="/queries"
            icon={<MdHelpOutline />}
            label="Queries"
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
            to="/announcement"
            icon={<Megaphone />}
            label="Announcement"
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

        </nav>
      </div>
      <div
        className={`transition-all duration-300 ${
          isOpen ? "ml-48" : "ml-16"
        } flex-1`}
      ></div>
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

  const backgroundColor = isActive
    ? COLOR.primary
    : isHovered
      ? COLOR.bgColor
      : "transparent";

  const textColor = isActive ? COLOR.bgColor : COLOR.primary;

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor }}
      className={`flex items-center transition-all px-2 py-1 
        ${
          isOpen
            ? "w-full justify-start gap-5 pl-5 pr-1"
            : "justify-center w-10 h-8"
        } 
        rounded-full
      `}
    >
      <div className="text-xl" style={{ color: textColor }}>
        {icon}
      </div>
      {isOpen && (
        <span style={{ ...FONTS.cardSubHeader, color: textColor }}>
          {label}
        </span>
      )}
    </Link>
  );
};
