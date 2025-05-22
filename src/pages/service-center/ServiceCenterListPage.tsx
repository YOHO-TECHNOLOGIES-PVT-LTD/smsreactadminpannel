import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import ServiceCenterProfileView from "./ServiceCenterprofileview";


// Filter Component
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
            {/* Sort By */}
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

            {/* Services */}
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

            {/* Quick Response */}
            <button className="px-12 py-2 pr-10 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none">
              ⚡ Quick Response
            </button>

            {/* Ratings */}
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

// Main Page Component
export const ServiceCenterListPage = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const centers = [
    {
      name: "Hyundai Accent",
      rating: 4.6,
      location: "South Bypass Road OMR, Chennai",
      image:
        "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      name: "Hyundai Creta",
      rating: 4.4,
      location: "South Bypass Road Tambaram, Chennai",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/025/288/111/small_2x/golden-car-with-blue-headlights-with-mountains-in-the-background-ai-generated-photo.jpg",
    },
    {
      name: "Hyundai Elantra",
      rating: 4.4,
      location: "South Bypass Road Tambaram, Chennai",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/025/288/127/small_2x/black-car-on-street-at-city-ai-generated-photo.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100">
      <div className="flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[600px] bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4 sticky">
            <h1 className="font-bold text-3xl pt-2 pl-0" style={{ color: "#9b111e" }}>
              Service Center Management
            </h1>
            <button
              className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
              style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
            >
              <CiEdit size={18} /> Edit
            </button>
          </div>

          <ServiceCenterFilter />

          <div className="flex flex-col gap-4 mt-4">
            {centers.map((center, index) => (
              <div key={index}>
                <div className="bg-white p-10 rounded-lg shadow flex flex-col sm:flex-row gap-4 items-start">
                  <img src={center.image} alt={center.name} className="w-32 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{center.name}</h3>
                    <div className="flex gap-2 text-sm mt-1 text-gray-600">
                      <span className="bg-[#fce8e8] text-[#800000] px-2 py-0.5 rounded">{center.rating} ★</span>
                      <span className="text-yellow-600">1,548 Ratings</span>
                      <span className="text-yellow-600 flex items-center gap-1">
                        <span className="bg-yellow-400 text-white p-1 rounded-full">
                          <FaArrowTrendUp size={12} />
                        </span>
                        Popular
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{center.location}</p>
                  </div>

                  <div className="flex gap-2 mt-2 sm:mt-0">
                    {selectedCardIndex !== index && (
                      <button
                        onClick={() => setSelectedCardIndex(index)}
                        className="text-white px-4 py-1.5 rounded-md transition duration-200 flex items-center gap-1.5 text-sm"
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
                      className="absolute top-2 right-2 text-gray-600 hover:text-red-600 pt-2 pr-2"
                    >
                      <IoClose size={30} />
                    </button>
                    <ServiceCenterProfileView />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}