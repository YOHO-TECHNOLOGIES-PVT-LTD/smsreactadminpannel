import React from "react";
import { useNavigate } from "react-router-dom";
import { TbBuildingEstate, TbMapPinCode } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

type City = {
  name: string;
  TotalCenters: string;
  serviceCenters?: string;
};

const citydetails: City[] = [
  { name: "Chennai", TotalCenters: "13" },
  { name: "Madurai", TotalCenters: "03" },
  { name: "Coimbatore", TotalCenters: "02" },
  { name: "Nammakkal", TotalCenters: "07" },
  { name: "Trichy", TotalCenters: "04" },
  { name: "Nagercoil", TotalCenters: "02" },
  { name: "kadalur", TotalCenters: "01" },
  { name: "Thiruvanamalai", TotalCenters: "04" },
  { name: "Kachipuram", TotalCenters: "01" },
];

interface CityListPageProps {
  searchTerm?: string;
}

const CityListPage: React.FC<CityListPageProps> = ({ searchTerm = "" }) => {
  const navigate = useNavigate();
  const filteredCities = citydetails.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-2 mt-2">
      <div>
        <table className="table-auto w-full border-white bg-white rounded-lg shadow-md mx-auto shadow-lg">
          <thead className="bg-[#a00000] text-white">
            <tr>
              <th className="px-4 py-2 text-left">
                <div className="flex items-center gap-2">
                  <TbBuildingEstate className="text-lg" />
                  District
                </div>
              </th>
              <th className="px-4 py-2 text-left">
                <div className="flex items-center gap-2">
                  <TbMapPinCode className="text-lg" />
                  Total Centers
                </div>
              </th>
              <th className="px-4 py-2 text-left">
                <div className="flex items-center gap-2">
                  <MdOutlineMiscellaneousServices className="text-lg" />
                  Service Centers
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <tr key={index} className="border-b hover:bg-[#f8ddd5]">
                  <td className="px-10 py-2">{city.name}</td>
                  <td className="px-16 py-2">{city.TotalCenters}</td>
                  <td className="px-14 py-2">
                    <button
                      onClick={() => navigate("/service")}
                      className="bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1 rounded hover:bg-[#a00000] transition active:scale-110"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No cities found matching your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CityListPage;
