import { useState } from "react";
import { COLORS, FONTS } from "../../constants/uiConstants";
import { RiCarWashingFill } from "react-icons/ri";
// import { RiOilFill } from "react-icons/ri";
// import { GiSpanner } from "react-icons/gi";
// import { GiAutoRepair } from "react-icons/gi";
// import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

type ServiceCenterServicesProps = {
  onSpareParts: () => void;
  handleBack: () => void;
};

const ServicesList: React.FC<ServiceCenterServicesProps> = ({ onSpareParts, handleBack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const washingOptions = [
  //   { name: "Water wash", price: "$10" },
  //   { name: "Foam Wash", price: "$15" },
  //   { name: "Foam + Water Wash", price: "$20" },
  //   { name: "Foam Only", price: "$12" },
  //   { name: "Air Pressure Clean", price: "$8" },
  // ];

  const serviceOptions = [
    { name: "Tyre Change", price: "$10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cfmoK1zcVVgHGzjXvy0T3YqtDrdMWgSzGw&s" },
    { name: "Mirror change", price: "$15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXdy7iuelJuLwHjgqX0mzEUKVDTQay83ylw&s" },
    { name: "Bonnet", price: "$20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbcTJZP0ofDRdbcBmbeXxBMK7f8S75TBEUA&s" },
    { name: "Seat repair", price: "$12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-x14GdoGRcfG_OngpmDolY7yRRH9bumCrLg&s" },
    { name: "Paint check", price: "$8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31Hsugf2yE-h8T-Zcn_wO5WNqKgSm3VrVbA&s" },
  ];

  // const OilService = [
  //   { name: "Oil service", price: "$10" },
  //   { name: "oil check", price: "$15" },
  //   { name: "premium oil change", price: "$20" },
  //   { name: "engine check", price: "$12" },
  //   { name: "all in one combo", price: "$8" },
  // ];

  return (

    <div className="min-h-screen" style={{ backgroundColor: COLORS.bgColor }}>     

      <div className="">
        <button onClick={handleBack} className="">
          <MdOutlineKeyboardBackspace className="text-[#800000] text-3xl" />
        </button>
      </div>

      <div className="flex p-4 sticky top-0 shadow-inner-top border-b-2 border-orange-700" style={{ backgroundColor: COLORS.bgColor }}>
        <div>
          <h1 className="font-bold text-3xl pt-2 pl-0" style={{ color: "#9b111e" }}>
            Services Lists Management &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
        <div className="w-2/3">
          <form className="mx-auto pl-96" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:placeholder-gray-400 dark:text-black"
                placeholder="Search services..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-blue-800"
                style={{ backgroundColor: "#9b111e" }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-center p-2">
        <button
          onClick={onSpareParts}
          className="ml-auto px-4 py-2 bg-green-500 text-white rounded-md"
          style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
        >
          Spares
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 text-2xl mt-0 p-3" style={{ fontFamily: FONTS.header.fontFamily }}>
        <div>
          <div className="w-full w-5/6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4 cursor-pointer" >
              <h5 className="text-2xl font-bold leading-none flex gap-2" style={{ color: "#9b111e" }}>
                <RiCarWashingFill /> Washing
              </h5>
              <span
                className="text-sm font-medium text-orange-800 hover:underline dark:text-orange-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? 'Hide' : 'View all'}
              </span>
            </div>

            {isOpen && (
              <div className="overflow-x-auto">
                <button
                  type="button"
                  className="text-white font-medium rounded-lg text-sm px-3 py-1 mt-2 flex ml-auto me-2 mb-2 focus:outline-none"
                  style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
                >
                  Add
                </button>
                <table className="min-w-full text-left text-sm font-light text-gray-900 dark:text-black">
                  <thead className="border-b font-medium dark:border-gray-700">
                    <tr>
                      <th className="px-4 py-2">Service</th>
                      <th className="px-4 py-2">Service Name</th>
                      <th className="px-4 py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceOptions
                      .filter(option => option.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((option, index) => (
                        <tr key={index} className="border-b dark:border-gray-700">
                          <td className="px-0 py-0 text-2xl font-normal">
                            <img src={option.image} alt="image" className="w-2/3 h-12" />
                          </td>
                          <td className="px-0 py-0 text-2xl font-normal">{option.name}</td>
                          <td className="px-4 py-2 text-2xl font-normal">{option.price}</td>
                          <td className="px-4 py-2">
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" className="sr-only peer" />
                              <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
