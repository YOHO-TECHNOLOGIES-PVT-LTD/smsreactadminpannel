import React, { useState, useRef, useEffect } from "react";
import { COLORS } from "../../../constants/uiConstants";

export const Navbar: React.FC = () => {
  const [isBellActive, setIsBellActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBellClick = () => {
    setIsBellActive(true);
    setTimeout(() => setIsBellActive(false), 500);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      style={{ backgroundColor: COLORS.primary_01, height: "64px" }}
      className="flex items-center px-4"
    >
      {/* Left: Search */}
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
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
          </svg>
        </button>
      </div>

      {/* Right: Bell + Profile */}
      <div className="ml-auto flex items-center space-x-4 pr-4">
        {/* Bell */}
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
      </div>
    </nav>
  );
};
