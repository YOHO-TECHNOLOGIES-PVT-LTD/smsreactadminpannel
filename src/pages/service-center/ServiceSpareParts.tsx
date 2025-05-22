import { IoIosAddCircleOutline } from "react-icons/io"
import { COLORS } from "../../constants/uiConstants"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";




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
    name: "Turbo Engine X - Silver Edition - Petrol Only",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
    price: 59900,
    quantity: 5,
  },
  {
    id: 3,
    name: "Hybrid Engine 2500cc - Eco Boost -Diesel mode - More energy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
    price: 45000,
    quantity: 2,
  },
  {
    id: 4,
    name: "Sports Engine 2500cc - Eco Boost - Automatic Engine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
    price: 45000,
    quantity: 2,
  }
];


const ServiceSpareParts = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
      const filteredParts = spareParts.filter((part) =>
        part.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
     <div>
          <div>
            <p>
              <FaArrowLeftLong className="text-4xl mt-5 ml-4 bg-pink-200 rounded-lg p-2" />
            </p>
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
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <img className="p-8 rounded-t-lg" src={part.image} alt={part.name} />
                  <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
                            <path d="M20.924 7.625a1.523 1.523 0 0..." />
                          </svg>
                        ))}
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                        5.0
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
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