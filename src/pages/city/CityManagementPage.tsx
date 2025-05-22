import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import CityAddPage from "./CityAddPage"; 

export const CityManagementPage: React.FC = () => {
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="p-2">
  
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2 mb-4 border-b-2 border-orange-700 pb-4">
        <h1
          className="font-bold text-3xl pt-2 pl-0"
          style={{ color: "#9b111e" }}
        >
          City Management 
        </h1>

      </div>

     
      <div className="rounded-lg overflow-hidden border border-gray-300 mt-8">
        <iframe
          title="City Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15558.968218678115!2d80.2459148!3d13.0826802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266dd1f7c1a3d%3A0x82bc0baebedf4a34!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650000000000"
          width="100%"
          height="560"
          className="border-0 w-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      
      {isAddModalOpen && <CityAddPage onClose={() => setIsAddModalOpen(false)} />}
    </div>
  );
};
