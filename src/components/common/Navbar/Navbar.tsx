import React, { useState, useRef, useEffect } from "react";
import { COLORS } from "../../../constants/uiConstants";

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

export const Navbar: React.FC = () => {
  const [isBellActive, setIsBellActive] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showProfileDetails, setShowProfileDetails] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedUser, setEditedUser] = useState<User>({
    name: "John Doe",
    phone: "+1 856-589-998-1236",
    email: "johndoe3108@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?semt=ais_hybrid&w=740",
    role: "System Administrator",
    location: "San Francisco, CA",
    joinDate: "August 17, 2018",
    status: "Active",
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleBellClick = (): void => {
    setIsBellActive(true);
    setTimeout(() => setIsBellActive(false), 500);
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Use keyof User to restrict fields to user keys
  const handleChange = <K extends keyof User>(field: K, value: User[K]): void => {
    setEditedUser((prev) => ({ ...prev, [field]: value }));
  };

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

        <div className="ml-auto flex items-center space-x-4 pr-4">
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

          <div className="relative" ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={editedUser.avatar}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#9b111e] font-medium">{editedUser.name}</span>
                <span className="text-sm text-[#c13340]">Admin</span>
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg z-50 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <ul className="py-1 text-sm text-[#9b111e]">
                  <li>
                    <button
                      onClick={() => {
                        setShowProfileDetails(true);
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-center px-4 py-1 transition-colors duration-200 hover:text-white hover:bg-[#d14c4c]"
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        alert("Logging out...");
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-center px-4 py-1 transition-colors duration-200 hover:text-white hover:bg-[#d14c4c]"
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

      {showProfileDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <img
                  src={editedUser.avatar}
                  alt="User"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                />
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="text-2xl font-bold bg-transparent border-b border-white placeholder-white placeholder-opacity-75 text-white"
                    />
                  ) : (
                    <h2 className="text-2xl font-bold">{editedUser.name}</h2>
                  )}
                  <p className="text-sm opacity-90">Admin, Production Department</p>
                </div>
              </div>
             <button
  onClick={() => setShowProfileDetails(false)}
  className="bg-white text-red-600 font-semibold p-2 rounded-lg shadow hover:bg-gray-100 transition"
  aria-label="Close profile details"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-gray-700">
              <div className="space-y-3">
                {["phone", "email", "location"].map((field) => (
                  <div key={field}>
                    <h4 className="text-sm text-gray-500">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </h4>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedUser[field as keyof User]}
                        onChange={(e) => handleChange(field as keyof User, e.target.value)}
                        className="text-lg w-full border-b border-gray-400 focus:outline-none"
                      />
                    ) : (
                      <p className="text-lg">{editedUser[field as keyof User]}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["role", "joinDate", "status"].map((field) => (
                  <div key={field}>
                    <h4 className="text-sm text-gray-500">
                      {field === "joinDate" ? "Join Date" : field.charAt(0).toUpperCase() + field.slice(1)}
                    </h4>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedUser[field as keyof User]}
                        onChange={(e) => handleChange(field as keyof User, e.target.value)}
                        className="text-lg w-full border-b border-gray-400 focus:outline-none"
                      />
                    ) : field === "status" ? (
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        {editedUser.status}
                      </span>
                    ) : (
                      <p className="text-lg">{editedUser[field as keyof User]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 border-t flex justify-end gap-2">
              {isEditing ? (
                <>
                  <button
                    className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-gradient-to-r from-red-600 to-red-800 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
                    onClick={() => setIsEditing(false)}
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  className="bg-gradient-to-r from-red-600 to-red-800 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
