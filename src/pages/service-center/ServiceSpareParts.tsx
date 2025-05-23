import { IoIosAddCircleOutline } from "react-icons/io"
import { COLORS } from "../../constants/uiConstants"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

type ServiceCenterSpareParts = {
  handleBack: () => void;
}


const spareParts = [
  {
    id: 1,
    name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
    price: 59900,
    quantity: 5,
  },
  {
    id: 2,
    name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
    price: 59900,
    quantity: 5,
  },
  {
    id: 3,
    name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
    price: 45000,
    quantity: 2,
  },
  {
    id: 4,
    name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
    price: 45000,
    quantity: 2,
  }
];


const ServiceSpareParts: React.FC<ServiceCenterSpareParts> = ({ handleBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredParts = spareParts.filter((part) =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div style={{background: COLORS.bgColor}}>
      <div className="" style={{background: COLORS.bgColor}}>
        <button onClick={handleBack} className=""><MdOutlineKeyboardBackspace className="text-[#800000] text-3xl" /></button>
      </div>
      <div
        className="flex p-4 pb-8 sticky top-0 rounded-t-xl shadow-inner-top border-b-2 border-orange-700"
        style={{ backgroundColor: COLORS.bgColor }}
      >
        <h1 className="font-bold text-3xl pt-2" style={{ color: "#9b111e" }}>
          Spare Parts Management System
        </h1>
        <form
          className="w-2/3 mx-auto pl-96"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search spare parts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              style={{ backgroundColor: "#9b111e" }}
            >
              Search
            </button>
          </div>
        </form>
      </div>


      <div className="grid grid-cols-4 gap-10 p-5 mt-10">
        {filteredParts.map((part) => (
          <div key={part.id}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
              <img className="p-8 rounded-t-lg" src={part.image} alt={part.name} />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  {part.name}
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "text-yellow-300" : "text-gray-200"}`}
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-black">
                    Rs.{part.price}
                  </span>
                  <div className="bg-gray-300 rounded-lg p-1">
                    <span>Quantity: </span>
                    <span>{part.quantity}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredParts.length === 0 && (
          <p className="col-span-4 text-center text-xl font-semibold text-red-500">
            No matching spare parts found.
          </p>
        )}
      </div>
    </div>
  )
}


export default ServiceSpareParts