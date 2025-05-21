import React from 'react';
import { useState } from 'react';
interface Notification {
  name: string;
  time: string;
  carNo: string;
  numberPlate: string;
  status: 'Available' | 'Unavailable';
  image: string;
}

const notifications: Notification[] = [
  {
    name: 'Alex',
    time: '09:00 AM',
    carNo: '6467',
    numberPlate: 'TN 01 CF 7989',
    status: 'Available',
    image: 'https://i.pravatar.cc/40?img=1',
  },
  {
    name: 'Artha',
    time: '04:00 PM',
    carNo: '6463',
    numberPlate: 'TN 01 CF 7986',
    status: 'Unavailable',
    image: 'https://i.pravatar.cc/40?img=2',
  },
  {
    name: 'Ruchi',
    time: '07:30 PM',
    carNo: '6467',
    numberPlate: 'TN 01 CF 7981',
    status: 'Available',
    image: 'https://i.pravatar.cc/40?img=3',
  },
  {
    name: 'Rooth',
    time: '09:22 AM',
    carNo: '6465',
    numberPlate: 'TN 01 CF 7982',
    status: 'Available',
    image: 'https://i.pravatar.cc/40?img=4',
  },
  {
    name: 'Emma Davis',
    time: '06:40 PM',
    carNo: '6469',
    numberPlate: 'TN 01 CF 7983',
    status: 'Unavailable',
    image: 'https://i.pravatar.cc/40?img=5',
  },
  {
    name: 'Sam ',
    time: '12:35 PM',
    carNo: '6455',
    numberPlate: 'TN 01 CF 7986',
    status: 'Available',
    image: 'https://i.pravatar.cc/40?img=6',
  },
  {
    name: 'Esai',
    time: '09:10 PM',
    carNo: '6454',
    numberPlate: 'TN 01 CF 7991',
    status: 'Available',
    image: 'https://i.pravatar.cc/40?img=7',
  },
  {
    name: 'Alex reddy',
    time: '12:30 PM',
    carNo: '6465',
    numberPlate: 'TN 01 CF 7986',
    status: 'Unavailable',
    image: 'https://i.pravatar.cc/40?img=8',
  },
  {
    name: 'Shaana reddy',
    time: '12:30 PM',
    carNo: '6459',
    numberPlate: 'TN 01 CF 7995',
    status: 'Available',
    image: 'https://i.pravatar.cc/40?img=9',
  },
  {
    name: 'sam vig',
    time: '12:30 PM',
    carNo: '6465',
    numberPlate: 'TN 01 CF 7993',
    status: 'Unavailable',
    image: 'https://i.pravatar.cc/40?img=10',
  },
   {
    name: 'vig',
    time: '12:30 PM',
    carNo: '6465',
    numberPlate: 'TN 01 CF 7993',
    status: 'Unavailable',
    image: 'https://i.pravatar.cc/40?img=10',
  },
];

const NotificationTable: React.FC = () => {

   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = notifications.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full mx-auto p-2 bg-gray-200 rounded-2xl  shadow-md">
      <div className="bg-white h-full w-full rounded-lg shadow-lg p-6">
        <h1 className="font-bold lg:text-2xl sm:text-sm text-[#9b111e] border-b">Notification</h1>
        <h2 className="text-2xl font-bold mb-6">Automated Notifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full lg:text-xl  sm:text-sm text-left table-fixed border-collapse">
            <thead className="bg-orange-100 lg:text-xl  sm:text-sm font-bold  text-gray-600  text-xs border-b gap-5">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Car No</th>
                <th className="p-4">Time</th>
                <th className="p-4">Number Plate</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-blue-50">
                <td className="p-4   items-center gap-3">
                   <div className="flex items-center rounded-full  gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded rounded-full lg:text-xl  sm:text-sm  border border-gray-300"
                    />
                    {item.name}
                    </div>
                  </td> 
                 
                  <td className="p-4 ">{item.carNo}</td>
                  <td className="p-4 ">{item.time}</td>
                  <td className="p-4 ">{item.numberPlate}</td>
                  <td
                    className={`p-4 font-medium ${
                      item.status === 'Available'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationTable;

