import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { COLORS } from "../../constants/uiConstants"; 
import { FONTS } from "../../constants/uiConstants";
import { TiEdit } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { MdDeleteSweep, MdOutlineEditCalendar } from "react-icons/md";


export const ServiceManagementPage = () => {
  return (
    <div className="mt-0"style={{fontFamily: FONTS.header.fontFamily}}>
      <div className="flex p-4 pb-8 sticky top-0  rounded-t-xl shadow-inner-top border-b-2 border-orange-700" style={{backgroundColor: COLORS.bgColor}}>
         <h1 className="font-bold text-3xl pt-2 pl-0" style={{color:"#9b111e"}}>Service Management System</h1>
         <button className="flex static bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-auto "  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}><IoIosAddCircleOutline className="mt-1 mr-2 "/>Add</button>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-5">
         <div className="bg-sky-50 rounded-lg " >
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <div className="flex">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <button className="flex shadow-md p-1 rounded-lg ml-auto"><MdDeleteSweep className="w-7 h-9 fill-orange-800"/></button>
    <button className="flex shadow-md p-1 rounded-lg ml-1 "><MdOutlineEditCalendar className="w-7 h-9 fill-orange-800"/></button>
    </div>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex"><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
  <div className="bg-white rounded-lg">
   <div className="max-w-m p-3 border pr-10 pb-6 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
   <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
   <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
   <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
   <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
   <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
   <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
  <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
</div>
  </div>
  <div className="bg-white  rounded-lg">
   <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-orange-50">
    <a href="#">
        <h5 className="mb-2  tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  style={{background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)"}}>
    <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
    </a>
 </div>
  </div>
      </div>
    </div>
  )
}
