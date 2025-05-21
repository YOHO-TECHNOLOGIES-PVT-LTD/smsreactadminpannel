import { useState } from 'react';
import vehicleData from '../vehicle/VehicleData';
import VehicleDetailCard, { type Vehicle } from '../../components/common/Card/VehicleDetailCard';
import VehicleModal from '../vehicle/VehicleModal';
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";



const VehicleManagementPage = () => {

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const product=['Hyundai','Maruthi','Audi','Benz','Bmw'];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(product);

  // Handle search/filter logic
  const handleSearch = () => {
    // Filter the product array based on the search term
    const filtered = product.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
      };
      
  return (
    <div>
      {/* TOP TEXT */}
      <div className="m-1 p-2">
        <h1 className="text-3xl text-red-700 font-medium" >Vehicle Management</h1>
        <hr className="border-1 border-red-700 my-3"/>
        <div className="flex mt-10 ">

          {/* SEARCH BAR ALONG WITH ICON */}
          <FaSearch className="absolute top-auto m-3 text-red-700" />                                       
          <input type="text" placeholder="Search..." 
          className="text-red-700 placeholder:text-red-400 border border-red-700 px-12 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 w-3/6"
          onChange={(e) => setSearchTerm(e.target.value)} />

          {/*FILTER BAR*/}
          <IoFilterSharp className="text-black mt-3" style={{position: 'relative', left: '35px', top: '1px'}} color="white"/>
          <button className="ml-2 px-8 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700  flex items-center">Filter</button>
        </div>
      </div>

          <div className="relative">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicleData.map((vehicle, index) => (
          <VehicleDetailCard
            key={index}
            vehicle={vehicle}
            onViewDetails={setSelectedVehicle}
          />
        ))}
      </div>

      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>

    </div>
    
  )
}

export default VehicleManagementPage;

