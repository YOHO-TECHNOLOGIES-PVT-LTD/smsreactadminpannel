import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdAddCircleOutline, MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { COLORS } from "../../constants/uiConstants";

const ServiceCenterFilter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">List of Service Centers</h3>
        <IoFilterSharp
          className="text-xl text-gray-600 cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        />
      </div>

      {showFilters && (
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <div className="flex flex-wrap gap-12">
            <div className="relative inline-block">
              <select className="px-12 pr-10 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
                <option className="bg-[#800000] text-white">Sort By</option>
                <option className="bg-[#800000] text-white">Price</option>
                <option className="bg-[#800000] text-white">Popularity</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#800000]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative inline-block">
              <select className="px-12 pr-10 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
                <option className="bg-[#800000] text-white">Services</option>
                <option className="bg-[#800000] text-white">Oil change</option>
                <option className="bg-[#800000] text-white">AC Repair</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#800000]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button className="px-12 py-2 pr-10 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none">
              ⚡ Quick Response
            </button>

            <div className="relative inline-block">
              <select className="px-12 pr-10 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
                <option className="bg-[#800000] text-white">Ratings</option>
                <option className="bg-[#800000] text-white">4+ Stars</option>
                <option className="bg-[#800000] text-white">3+ Stars</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#800000]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type ServiceCenterListProps = {
  onView: () => void;  // A function that returns nothing
  handleBack: () => void;
};

export const ServiceCenterListPage: React.FC<ServiceCenterListProps> = ({ onView, handleBack }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const centers = [
    {
      name: "Fast & Furious Auto Mobiles",
      rating: 4.6,
      location: "South Bypass Road OMR, Chennai",
      image: "https://logodix.com/logo/2004138.jpg",
    },
    {
      name: "Raajes Kumar Auto Mobiles",
      rating: 4.4,
      location: "South Bypass Road Tambaram, Chennai",
      image: "https://logodix.com/logo/2004335.png",
    },
    {
      name: "Praveen Kumar Auto Mobiles",
      rating: 4.4,
      location: "South Bypass Road Tambaram, Chennai",
      image: "https://logodix.com/logo/2004152.png",
    },
  ];

  const filteredCenters = centers.filter((center) =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col   bg-gray-100" style={{background: COLORS.bgColor}}>
      <div className="flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[600px] bg-white p-5" style={{background: COLORS.bgColor}}>
          <div className="t-0" style={{background: COLORS.bgColor}}>
            <button onClick={handleBack} className=""><MdOutlineKeyboardBackspace className="text-[#800000] text-3xl" /></button>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4 flex-wrap gap-4">
            <h1 className="font-bold text-3xl pt-2 text-[#9b111e]">Service Center Management</h1>
            <div className="flex items-center gap-3 flex-wrap">


              <button
                className="bg-[#fce8e8] text-gray-600 hover:text-[#9b111e] p-2 rounded-full transition"
                title="Search"
                onClick={() => setShowSearch(!showSearch)}
              >
                <FiSearch size={22} className="text-[#800000]" />
              </button>


              {showSearch && (

                <input
                  type="text"
                  className="px-4 py-1.5 border border-[#800000] focus:border-[#800000] rounded-md shadow-sm focus:outline-none"
                  placeholder="Search service centers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

              )}
              <button
                className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
                style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
              >
                <MdAddCircleOutline size={18} /> Add
              </button>
            </div>
          </div>

          <ServiceCenterFilter />

          <div className="flex flex-col gap-4 mt-4">
            {filteredCenters.map((center, index) => (
              <div key={index}>
                <div className="bg-white p-6 rounded-lg shadow flex flex-col sm:flex-row gap-20 items-start w-full max-w-[2000px]">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-72 h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800">{center.name}</h3>
                    <div className="flex gap-2 text-base mt-2 text-gray-700 flex-wrap">
                      <span className="bg-[#fce8e8] text-[#800000] px-2 py-0.5 rounded">
                        {center.rating} ★
                      </span>
                      <span className="text-yellow-600">1,548 Services</span>
                    </div>
                    <div className="flex gap-2 mt-1 text-yellow-600 flex-wrap">
                      <span className="flex items-center gap-1">
                        <span className="bg-yellow-400 text-white p-1 rounded-full">
                          <FaArrowTrendUp size={12} />
                        </span>
                        Popular
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mt-2">{center.location}</p>
                  </div>

                  <div className="flex gap-2 mt-2 sm:mt-0">
                    {selectedCardIndex !== index && (
                      <button
                        onClick={onView}
                        className="text-white px-4 py-2 rounded-md transition duration-200 flex items-center gap-1.5 text-sm"
                        style={{
                          background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)",
                        }}
                      >
                        <BsEye size={16} /> View
                      </button>
                    )}
                  </div>
                </div>

                {selectedCardIndex === index && (
                  <div className="mt-4 relative border rounded-md p-4 bg-gray-50">
                    <button
                      onClick={() => setSelectedCardIndex(null)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-red-600 pt-5 pr-5"
                    >
                      <IoClose size={30} />
                    </button>

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
