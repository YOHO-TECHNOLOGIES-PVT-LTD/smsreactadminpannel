import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

type SOSRequest = {
  id: number;
  location: string;
  name: string;
  status: string;
  view: string;
};

type Service = {
  id: number;
  name: string;
  active: boolean;
};

const SosDashboard = () => {
  const activeRequests: SOSRequest[] = [
    {
      id: 1024,
      location: "New York",
      name: "John Doe",
      status: "Urgent",
      view: "View",
    },
    {
      id: 1023,
      location: "Los Angeles",
      name: "Joe Allen",
      status: "Normal",
      view: "View",
    },
    {
      id: 1013,
      location: "Chicago",
      name: "Joe Kelley",
      status: "Urgent",
      view: "View",
    },
    {
      id: 1015,
      location: "Houston",
      name: "Alex Doe",
      status: "Normal",
      view: "View",
    },
    {
      id: 1014,
      location: "Phoenix",
      name: "Alex Goan",
      status: "Urgent",
      view: "View",
    },
  ];

  const [services, setServices] = useState<Service[]>([
    { id: 1, name: "Medical Help", active: true },
    { id: 2, name: "Health-Sleeping", active: false },
    { id: 3, name: "Local Airdab", active: true },
    { id: 4, name: "Patient Help", active: false },
    { id: 5, name: "Healthcare", active: true },
  ]);

  return (
    <div className="bg-white flex flex-col md:flex-row gap-8 p-6 text-gray-800">
      {/* SOS Requests */}
      <div className="rounded p-2 lg:w-full border-2 md:w-2/3 overflow-auto">
        <h2 className="text-xl font-bold m-4">Active SOS Requests</h2>
        <table className="w-full h-96 text-left text-sm border-gray-900 rounded overflow-hidden">
          <thead className="border-2 ">
            <tr className="text-gray-900">
              <th className="px-4 py-2 ">Number</th>
              <th className="px-4 py-2 ">Location</th>
              <th className="px-4 py-2 ">Name</th>
              <th className="px-4 py-2 ">Status</th>
              <th className="px-4 py-2 ">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {activeRequests.map((req) => (
              <tr key={req.id} className="text-gray-900">
                <td className="px-4 py-2">{req.id}</td>
                <td className="px-4 py-2">{req.location}</td>
                <td className="px-4 py-2">{req.name}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-4 w-20 py-2 rounded text-xs font-medium
                        ${
                            req.status === "Urgent"
                            ? "bg-red-600 text-white"
                            : "border border-red-600 text-red-600"
                        }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="px-4 py-2 cursor-pointer">
                  <button className="bg-[#800000] text-white px-4 py-1 rounded hover:bg-[#a00000] transition">
                    {req.view}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SOS Services */}
      <div className="rounded-xl p-2 w-full md:w-1/3 flex flex-col border-2 overflow-auto">
        <div className="flex justify-between items-center m-4">
          <h2 className="text-xl font-bold">SoS Services</h2>
          <FiPlus
            className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
            title="Add Service"
          />
        </div>
        <ul
          className="space-y-2 flex-grow overflow-auto scroll-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((service) => (
            <li
              key={service.id}
              className="border border-gray-200 rounded p-2 shadow-sm flex items-center justify-between"
            >
              <div className="p-2">
                <div className="font-medium">{service.name}</div>
                <div className="text-xs text-gray-600 mt-1">
                  <span
                    className={`font-semibold ${
                      service.active ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {service.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-600 text-lg">
                <FiEdit title="Edit" />
                <FiTrash title="Delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SosDashboard;
