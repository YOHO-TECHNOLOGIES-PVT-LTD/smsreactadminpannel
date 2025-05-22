import React, { useState, useRef, useEffect } from "react";

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

interface ProfileModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  onUserUpdate: (updatedUser: User) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  user: initialUser,
  isOpen,
  onClose,
  onUserUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<User>(initialUser);
  const modalRef = useRef<HTMLDivElement | null>(null); 

  // Update user when initialUser prop changes
  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  // Handle outside clicks for modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleChange = <K extends keyof User>(field: K, value: User[K]) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUserUpdate(user);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUser(initialUser);
    setIsEditing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div
        ref={modalRef}
        className="bg-[#FAF3EB] rounded-2xl shadow-2xl w-full max-w-2xl md:max-w-xl sm:max-w-md overflow-hidden"
      >
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt="User"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="text-2xl font-bold bg-transparent border-b border-white placeholder-white placeholder-opacity-75 text-white"
                />
              ) : (
                <h2 className="text-2xl font-bold">{user.name}</h2>
              )}
              <p className="text-sm opacity-90">Admin, Production Department</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-[#FAF3EB] text-red-600 font-semibold p-2 rounded-lg shadow hover:bg-[#f8e0b0] transition"
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
                    value={user[field as keyof User]}
                    onChange={(e) => handleChange(field as keyof User, e.target.value)}
                    className="text-lg w-full border-b border-gray-400 focus:outline-none"
                  />
                ) : (
                  <p className="text-lg">{user[field as keyof User]}</p>
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
                    value={user[field as keyof User]}
                    onChange={(e) => handleChange(field as keyof User, e.target.value)}
                    className="text-lg w-full border-b border-gray-400 focus:outline-none"
                  />
                ) : field === "status" ? (
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                    {user.status}
                  </span>
                ) : (
                  <p className="text-lg">{user[field as keyof User]}</p>
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
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
                onClick={handleSave}
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
  );
};