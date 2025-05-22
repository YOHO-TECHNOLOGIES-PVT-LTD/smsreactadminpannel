import { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { carIcons } from "../../components/sos/sosicons";

type SOSRequest = {
  vehicleNumber: string;
  location: string;
  name: string;
  phoneNumber: string;
  status: string;
  view: string;
};

type Service = {
  id: number;
  name: string;
  active: boolean;
};

const DashboardSos = () => {
  const navigate = useNavigate();

  const [isToggled, setIsToggled] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<React.ReactNode | null>(null);

  const handleViewClick = () => {
    navigate("/sosdetails");
  };

  const activeRequests: SOSRequest[] = [
    {
      vehicleNumber: "1234",
      location: "New York",
      name: "John Doe",
      phoneNumber: "9876543210",
      status: "Not started",
      view: "View",
    },
    {
      vehicleNumber: "5678",
      location: "Los Angeles",
      name: "Joe Allen",
      phoneNumber: "9876543211",
      status: "Completed",
      view: "View",
    },
    {
      vehicleNumber: "4321",
      location: "Chicago",
      name: "Joe Kelley",
      phoneNumber: "9876543212",
      status: "In Progress",
      view: "View",
    },
    {
      vehicleNumber: "8765",
      location: "Houston",
      name: "Alex Doe",
      phoneNumber: "9876543213",
      status: "Completed",
      view: "View",
    },
    {
      vehicleNumber: "6789",
      location: "Phoenix",
      name: "Alex Goan",
      phoneNumber: "9876543214",
      status: "In Progress",
      view: "View",
    },
  ];

  const [filterStatus, setFilterStatus] = useState<string>("All");

  const filteredRequests = activeRequests.filter((req) => {
    const status = req.status.toLowerCase();
    if (filterStatus === "All") return true;
    if (filterStatus === "In Progress") return status.includes("progress");
    if (filterStatus === "Completed") return status === "completed";
  });

  const [services, setServices] = useState<Service[]>([
    { id: 1, name: "Pickup Truck", active: true },
    { id: 2, name: "Car Wheel", active: false },
    { id: 3, name: "Gas Pump", active: true },
    { id: 4, name: "Tools", active: false },
    { id: 5, name: "Garage", active: true },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");

  return (
    <div className=" flex flex-col md:flex-row gap-8 p-6 text-gray-800 h-screen">
      {/* SOS Requests */}
      <div className="rounded p-2 lg:w-full border-2 md:w-2/3 overflow-auto bg-white rounded-xl flex flex-col">
        <div className="mb-8">
          <div className="flex justify-between items-center m-6">
            <h2 className="text-4xl font-bold">Active SOS Requests</h2>
            <MdClose
              onClick={() => navigate("/")}
              className="text-3xl text-red-700 cursor-pointer"
              title="Close and return to Dashboard"
            />
          </div>
          <div className="flex gap-4 mt-4 ml-4">
            <button
              onClick={() => setFilterStatus("All")}
              className="px-10 py-2 bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 transition-transform text-white rounded"
            >
              All
            </button>
            <button
              onClick={() => setFilterStatus("In Progress")}
              className={`px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 transition-transform text-white rounded ${
                filterStatus === "In Progress"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setFilterStatus("Completed")}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 transition-transform text-white rounded"
            >
              Completed
            </button>
          </div>
        </div>

        <div>
          <table className="w-full text-left text-lg border-gray-900 rounded overflow-hidden bg-white">
            <thead className="border-2">
              <tr className="text-gray-900 bg-gray-100 transition-colors">
                <th className="px-4 py-2">Vehicle Number</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Work Status</th>
                <th className="px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody className="divide-y border-b-2 border-gray-300 divide-gray-300">
              {filteredRequests.map((req, index) => (
                <tr key={index} className="text-gray-900 font-semibold">
                  <td className="px-4 py-4">{req.vehicleNumber}</td>
                  <td className="px-4 py-2">{req.location}</td>
                  <td className="px-4 py-2">{req.name}</td>
                  <td className="px-4 py-2">{req.phoneNumber}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`${
                        req.status.toLowerCase() === "not started"
                          ? "text-[#800000]"
                          : req.status.toLowerCase() === "in progress"
                          ? "text-gray-600"
                          : "text-green-600"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 cursor-pointer">
                    <button
                      className="bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 transition-transform text-white px-4 py-1 rounded"
                      onClick={handleViewClick}
                    >
                      {req.view}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SOS Services */}
      <div className="rounded-xl p-2 w-full md:w-1/3 flex flex-col border-2 overflow-auto bg-white">
        <div className="flex justify-between items-center m-4">
          <h2 className="text-4xl font-bold">SOS Services</h2>
          <FiPlus
            onClick={() => setShowForm(true)}
            className="text-4xl text-red-800 cursor-pointer hover:text-gray-800"
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
              <div className="p-2 flex flex-row gap-2">
                <div className="w-5 mt-2">
                  {
                    carIcons.find(item => item.name === service.name)?.icon 
                  }       
                </div>
                <div>
                  <div className="font-medium text-lg">{service.name}</div>
                  <div className="text-gray-600 mt-1">
                    <span
                      className={`font-semibold ${
                        service.active ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {service.active ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setServices((prevServices) =>
                    prevServices.map((s) =>
                      s.id === service.id ? { ...s, active: !s.active } : s
                    )
                  );
                }}
                className="cursor-pointer"
              >
                {service.active ? (
                  <MdToggleOn
                    className="text-[#800000] text-6xl"
                    title="Enabled"
                  />
                ) : (
                  <MdToggleOff
                    className="text-gray-400 text-6xl"
                    title="Disabled"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide-in Form */}
      <div
        className={`fixed top-0 right-0 h-full w-[22rem] max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          showForm ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 px-10 mt-10 border-b">
          <h3 className="text-2xl font-bold">Add New Service</h3>
          <MdClose
            className="text-2xl cursor-pointer text-red-800"
            onClick={() => setShowForm(false)}
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!newServiceName.trim()) return;

            const newService: Service = {
              id: services.length + 1,
              name: newServiceName.trim(),
              active: false,
            };
            setServices((prev) => [...prev, newService]);
            setNewServiceName("");
            setShowForm(false);
          }}
          className="p-4 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Service Name"
            value={newServiceName}
            onChange={(e) => setNewServiceName(e.target.value)}
            // className="border p-2 rounded w-full"
            className="bg-white text-black placeholder-gray-500 rounded w-full border px-4 py-2 w-60 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b1b1b] transition-all"
          />
          <div className="grid grid-cols-6 gap-3 bg-gray-100 p-4 rounded">
            {carIcons.map((item, idx) => (
              <button
                key={idx}
                type="button"
                // onClick={}
                className={`p-2 border rounded text-2xl hover:bg-red-100 
                  ${selectedIcon === item.icon ? "bg-red-200 border-red-600" : ""
                  }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-4 rounded hover:scale-105 transition-transform"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardSos;
