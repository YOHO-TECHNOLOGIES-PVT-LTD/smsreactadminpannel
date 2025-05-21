
import { IconName } from "react-icons";
import { FaSearch } from "react-icons/fa";



export const VehicleManagementPage = () => {


      const product=['Hyundai','Maruthi','Audi','Benz','Bmw'];


  return (
    <div>

      {/* TOP TEXT */}
      <div className="m-1 p-2">
        <h1 className="text-3xl text-red-700 font-medium" >Vehicle Management</h1>
        <hr className="border-1 border-red-700 my-3"/>
        <h2 className="text-xl pt-2">255 Second hand Hyundai cars are available in chennai</h2>
        <p className="text-xs pt-2">Here there are more than 250 cars are available with the most affordable and confortable for travell</p>
      
      {/* SEARCH BAR FOR SELECT THE CAR */}
      
        <div className="flex mt-10  text-">
                              
                                 <FaSearch className="text-red-700 " />
                              
          <input type="text" placeholder="Search..." className="text-red-700 placeholder:text-red-400 border border-red-700 px-12 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 w-3/6"/>
          
          <button className="ml-2 px-4 py-2 bg-red-700 text-white  rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700">Filter</button>

        </div>
      

      </div>

      {/* CARS WITH DATAS */}
      <div className="w-1/2 flex">
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
