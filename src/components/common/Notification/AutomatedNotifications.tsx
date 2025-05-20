import React from 'react';

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
];

const NotificationTable: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4 bg-white rounded-2xl  shadow-md">
      <div className="bg-white h-full w-full rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Automated Notifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left table-fixed border-collapse">
            <thead className="bg-gray-100   text-gray-600 uppercase text-xs border-b gap-5">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Car No</th>
                <th className="p-4">Time</th>
                <th className="p-4">Number Plate</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4  text-center items-center gap-3">
                   <div className="flex items-center rounded-full  gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded rounded-full  border border-gray-300"
                    />
                    {item.name}
                    </div>
                  </td> 
                 
                  <td className="p-4 text-center">{item.carNo}</td>
                  <td className="p-4 text-center">{item.time}</td>
                  <td className="p-4 text-center">{item.numberPlate}</td>
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
        </div>
      </div>
    </div>
  );
};

export default NotificationTable;

