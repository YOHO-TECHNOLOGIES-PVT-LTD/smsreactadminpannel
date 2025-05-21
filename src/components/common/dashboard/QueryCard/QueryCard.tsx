import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  profilePicUrl: string; 
};

//  Format date/time to India timezone
const getIndiaDateTime = () => {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
};

export const QueryCard: React.FC<Props> = ({
  title,
  icon,
  desc,
  profilePicUrl,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center bg-[#FAF3EB] rounded-xl shadow-md p-4 justify-between mt-2">
        {/* Profile Picture */}
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img
            src={profilePicUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-start">
          <p className="font-semibold">{title}</p>
          <p className="font-thin line-clamp-1">{desc}</p>
          <p className="text-xs text-gray-500 mt-1">
            {getIndiaDateTime()}
          </p>
        </div>

        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center text-xl text-green-600">
          {icon}
        </div>
      </div>
    </div>
  );
};
