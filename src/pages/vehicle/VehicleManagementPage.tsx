

import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from 'react';


export const VehicleManagementPage = () => {


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
          <FaSearch className="absolute  top-auto m-3   text-red-700  " />                                       
          <input type="text" placeholder="Search..." 
          className="text-red-700 placeholder:text-red-400 border border-red-700 px-12 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 w-3/6"
             onChange={(e) => setSearchTerm(e.target.value)} />

          {/*  */}
          <IoFilterSharp className="text-black mt-3" style={{position: 'relative', left: '35px'}} color="white"/>
          <button className="ml-2 px-8 py-2 bg-red-700 text-white  rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700  flex items-center">Filter</button>

        </div>
      </div>

      {/* CARS WITH DATAS */}
      <div className="w-1/2">
        <div className=" w-1/2 grid grid-rows-2 gap-4"> 
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-red-700 p-4">Item 1</div>
          <div className="text-red-700 p-4">Item 2</div>
          <div className="text-red-700 p-4">Item 3</div>
          <div className="text-red-700 p-4">Item 4</div>
        </div>
      </div>
    </div>
    
  )
}
