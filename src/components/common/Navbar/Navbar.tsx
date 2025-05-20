import React, { useState, useRef, useEffect } from "react";
import { COLORS } from "../../../constants/uiConstants";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  phone: string;
  email: string;
  avatar: string;
  role: string;
  location: string;
  joinDate: string;
  status: string;
}

interface Notification {
  id: number;
  message: string;
  time: string;
  isRead: boolean;
}

export const Navbar: React.FC = () => {
  const [isBellActive, setIsBellActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      message: "New task assigned to you: Project Review",
      time: "5 minutes ago",
      isRead: true,
    },
    {
      id: 2,
      message: "Your report has been approved",
      time: "1 hour ago",
      isRead: true,
    },
    {
      id: 3,
      message: "System maintenance scheduled for tomorrow",
      time: "3 hours ago",
      isRead: true,
    },
    {
      id: 4,
      message: "Welcome to the dashboard! Take a tour",
      time: "1 day ago",
      isRead: true,
    },
  ]);

  const [editedUser, setEditedUser] = useState<User>({
    name: "John ",
    phone: "+1 856-589-998-1236",
    email: "johndoe3108@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?semt=ais_hybrid&w=740",
    role: "System Administrator",
    location: "San Francisco, CA",
    joinDate: "August 17, 2018",
    status: "Active",
  });

  // 🔁 Handle outside clicks for dropdown & notifications
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔁 Handle outside clicks for modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowProfileDetails(false);
      }
    };
    if (showProfileDetails) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileDetails]);

  const handleBellClick = () => {
    setIsBellActive(true);
    setShowNotifications((prev) => !prev);
    setTimeout(() => setIsBellActive(false), 150);
  };

  const handleViewAllNotifications = () => {
    setShowNotifications(false);
    navigate("/notifications");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        style={{ backgroundColor: COLORS.primary_01, height: "64px" }}
        className="flex items-center px-4"
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black placeholder-gray-500 rounded-full px-4 py-2 w-60 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b1b1b] transition-all"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-full p-3 hover:scale-105 transition-transform"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
            </svg>
          </button>
        </div>

        {/* SOS Emergency Icon */}
        {/* SOS Emergency Icon */}
        <div className="relative w-full">
          {/* SOS Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="relative">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-75 animate-ping"></span>
              <button
                onClick={() => alert("Emergency SOS Triggered!")}
                className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
              >
                SOS
              </button>
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-4 pr-4">
          <div className="relative" ref={notificationRef}>
            <button
              aria-label="Notifications"
              onClick={handleBellClick}
              className={`relative p-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 focus:outline-none transform transition-transform duration-200 ease-in-out ${
                isBellActive ? "scale-90" : "scale-100"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.3-2.2-6.1-5.3-6.8V4a.7.7 0 00-1.4 0v.2C8.2 4.9 6 7.7 6 11v5l-1.7 1.7a1 1 0 00.7 1.7h14a1 1 0 00.7-1.7L18 16z"
                />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>

        {/* Profile + Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?semt=ais_hybrid&w=740"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
  <span className="text-[#9b111e] font-medium">John Doe</span>
  <span className="text-sm text-[#c13340]">Admin</span>
</div>

            </div>
          </div>

          {/* Dropdown */}
  {isDropdownOpen && (
  <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg z-50 bg-gradient-to-br from-yellow-50 to-yellow-100">
    <ul className="py-1 text-sm text-[#9b111e]">
      <li>
        <a
          href="/profile"
          className="block px-4 py-1 text-center transition-colors duration-200 hover:text-white hover:bg-[#d14c4c]"
        >
          Profile
        </a>
      </li>
      <li>
        <button
  onClick={() => {
    alert("Logging out...");
    setIsDropdownOpen(false); // <-- Closes the dropdown
  }}
  className="w-full text-left px-4 py-1 text-center transition-colors duration-200 hover:text-white hover:bg-[#d14c4c]"
>
  Logout
</button>

      </li>
    </ul>
  </div>
)}




        </div>
      )}

      {/* Logout Success Modal */}
      {showLogoutSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-xl shadow-xl w-80 p-6 flex flex-col items-center space-y-4 text-center animate-fade-in">
            {/* Animated Checkmark with Tailwind */}
            <svg
              className="w-16 h-16 text-green-600 animate-draw-check"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="26"
                cy="26"
                r="25"
                stroke="currentColor"
                strokeWidth="2"
                className="stroke-current"
              />
              <path
                d="M14 27L22 35L38 19"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-path"
              />
            </svg>
            <p className="text-green-700 text-lg font-semibold">
              Logout Successfully!
            </p>
          </div>

          {/* Tailwind custom animation via <style> tag (works well for small scoped styles) */}
          <style>
            {`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        @keyframes draw-path {
          from { stroke-dasharray: 48; stroke-dashoffset: 48; }
          to { stroke-dashoffset: 0; }
        }

        .animate-draw-path {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: draw-path 0.5s ease-out forwards;
        }

        @keyframes draw-check {
          from { stroke-dasharray: 166; stroke-dashoffset: 166; }
          to { stroke-dashoffset: 0; }
        }

        .animate-draw-check circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          animation: draw-check 0.6s ease-out forwards;
        }
      `}
          </style>
        </div>
      )}
    </>
  );
};
