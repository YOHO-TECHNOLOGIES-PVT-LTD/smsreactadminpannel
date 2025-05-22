import React, {  useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import CityAddPage from "./CityAddPage";
import { useNavigate } from "react-router-dom";

export const CityManagementPage: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");

  const navigate = useNavigate();
  return (
    <div className="p-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2 mb-4 border-b-2 border-orange-700 pb-4">
        <h1
          className="font-bold text-3xl pt-2 pl-0"
          style={{ color: "#9b111e" }}
        >
          City Management
        </h1>

        <div className="flex items-center gap-x-2 ml-auto">
          <button
            className="flex items-center gap-2 font-bold px-4 py-2 rounded-lg text-white transition duration-200 active:scale-105 hover:bg-[#a00000]"
            style={{
              background:
                "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)",
            }}
            onClick={() => setIsAddModalOpen(true)}
          >
            <IoIosAddCircleOutline className="mt-0" />
            Add
          </button>

          <button
            className="flex items-center gap-2 font-bold px-4 py-2 rounded-lg text-white transition duration-200 hover:bg-[#a00000] active:scale-105"
            style={{
              background:
                "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)",
            }}
            onClick={() => navigate("/city-list")}
          >
            <AiOutlineEye size={18} />
            View
          </button>
        </div>
      </div>
      <div>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">State</label>
            <select
              className="border border-gray-300 rounded-lg p-2 w-full"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="" disabled>
                Select a state
              </option>
              <option>Tamil Nadu</option>
              <option>Tamil Nadu</option>
              <option>Tamil Nadu</option>
            </select>
          </div>
        </form>
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-300 mt-12 h-fit">
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

      {isAddModalOpen && (
        <CityAddPage onClose={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
};
