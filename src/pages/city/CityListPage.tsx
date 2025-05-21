import React, { useEffect, useRef, useState } from "react";
import { CgMoreVertical } from "react-icons/cg";
import { FONTS } from "../../constants/uiConstants";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type City = {
  name: string;
  pincode:string;
  citycode:string;
};

const citydetails: City[] = [
  { name: "Chennai",pincode:"607106",citycode :"111"},
  { name: "Bangalore",pincode:"607106",citycode :"110" },
  { name: "Panruti",pincode:"607106",citycode :"109" },
  { name: "Delhi",pincode:"607106",citycode :"108" },
  { name: "Hydrabad", pincode:"607106",citycode :"107" },
  { name: "Chennai", pincode:"607106",citycode :"106"},
  { name: "Bangalore",pincode:"607106",citycode :"105" },
  { name: "Panruti", pincode:"607106",citycode :"104" },
  { name: "Delhi", pincode:"607106",citycode :"103" },
  { name: "Hydrabad", pincode:"607106",citycode :"102"},
];

const CityListPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the dropdown for the selected row
  const toggleDropdown = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveIndex(null);
    }
  };

  // Add event listener for outside click on mount and cleanup on unmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="px-3 mb-5 border-b-2 border-[#9b111e] pb-5 text-[#9b111e]">
        <h1 style={{ ...FONTS.header, fontWeight: 600 }}>City List</h1>
      </div>

      <div>
        <table className="table-auto w-full border-collapse ">
          <thead className="bg-[#9b111e]">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">PinCode</th>
                <th className="px-4 py-2 text-left">CityCode</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {citydetails.map((city, index) => (
              <tr key={index} className="border-b hover:bg-[#f8ddd5]">
                <td className="px-4 py-2 flex items-center gap-2">
                  
                  {city.name}
                </td>
                <td className="px-4 py-2">{city.pincode}</td>
                <td className="px-8 py-2">{city.citycode}</td>
                {/* Add more columns as needed */}
                <td className="px-8 py-2 relative">
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // prevent click from propagating up
                      toggleDropdown(index);
                    }}
                    className="cursor-pointer inline-flex items-center justify-center"
                  >
                    <CgMoreVertical className="text-xl" />
                  </div>
                  {activeIndex === index && (
                    <div
                      ref={dropdownRef}
                      className="bg-white z-10 absolute w-28 ml-7 mb-6 shadow border rounded"
                    >
                      <ul>
                        <div className="flex hover:bg-[#f8ddd5]  items-center justify-center">
                          <div>
                            <li className="text-center py-2 ">
                              <a href="#">Edit</a>
                            </li>
                          </div>
                          <div className="ml-2">
                            <FaEdit />
                          </div>
                        </div>
                        <div className="flex hover:bg-[#f8ddd5] items-center justify-center">
                          <div>
                            <li className="text-center py-2">
                              <a href="#">Delete </a>
                            </li>
                          </div>
                          <div>
                            <MdDelete />
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CityListPage;
