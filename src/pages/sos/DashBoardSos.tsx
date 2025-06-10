import { useEffect, useState } from "react";
import { MdToggleOn, MdToggleOff, MdClose } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import {  useNavigate } from "react-router-dom";
import { carIcons } from "../../components/sos/sosicons";
import { getallSos, getServiceList, statusupdatesos, updatelistedsos } from "../../components/sos/services";


type SOSRequest = {
  _id:string;
  vehicleNumber: string;
  location: string;
  name: string;
  phoneNumber: string;
  status: string;
  view: string;
};

 type Service = {
  _id: string;
  title: string;
  active: boolean;
  icon?: React.ReactNode;
};

const DashboardSos = () => {
  const navigate = useNavigate();

  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [services, setServices] = useState<Service[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");
  const [selectedIconIndex, setSelectedIconIndex] = useState<number | null>(null);
 const [activeRequest, setactiverequest] = useState<SOSRequest[]>([]);
  

  const fetchSosRequests = async () => {
    try {
      const data: any = await getallSos()
      setactiverequest(data.data.data);
    } catch (error) {
      console.error("Error fetching SOS requests:", error);
    }
  };

  const fetchSoslist = async () => {
    try {
      const datas: any = await getServiceList()
      setServices(datas.data.data)
    } catch (error) {
      console.error("Error fetching SOS requests:", error);
    }
  };

 useEffect(() => {
   fetchSosRequests();
   fetchSoslist();
 }, []);

  const filteredRequests = activeRequest.filter((req) => {
    const status = req.status.toLowerCase();
    if (filterStatus === "All") return true;
    if (filterStatus === "In Progress") return status.includes("progress");
    if (filterStatus === "Completed") return status === "completed";
    if (filterStatus === "Not Started") return status === "not started";
    return true;
  });
  const handleViewClick = (uuid:string) => {

  navigate(`/sosdetails/${uuid}`);
  };

  
 

const handleAddService = async (e: any) => {
  e.preventDefault();
  if (!newServiceName || selectedIconIndex === null) return;

  const selectedIcon = carIcons[selectedIconIndex];
  const existingService = services.find(
    (s) => s.title.toLowerCase() === newServiceName.toLowerCase()
  );

  try {
    if (existingService) {
      // Update the existing service's status to active

      setServices((prev) =>
        prev.map((s) =>
          s._id=== existingService._id ? { ...s, active: true } : s
        )
      );

      // await updatelistedsos({ active: true },existingService._id)
      await statusupdatesos({active:true},existingService._id)
      
      console.log("Service updated:", existingService.title);
    } else {
    
      const newService = {
        title: newServiceName,
        icon: selectedIcon.name,
        active: true,
      };

      const response = await updatelistedsos(newService,'');
      const newId = response.data; 

      setServices((prev) => [...prev,newId]);
      console.log("Service added:", newService.title);
    }

    
    setNewServiceName("");
    setSelectedIconIndex(null);
    setShowForm(false);
  } catch (error) {
    console.error("Error adding or updating service:", error);
  }
};


const handleToggleService = async (service:any) => {
  const updatedActive= !service.active;
  try {
    await statusupdatesos({ active: updatedActive }, service._id)
    
    setServices((prevServices) =>
      prevServices.map((s) =>
        s._id === service._id ? { ...s, active: updatedActive } : s
      )
    );
  } catch (error) {
    console.error("Failed to update service status:", error);
  }
};

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 text-gray-800 h-screen bg-gray-50">
      {/* SOS Requests */}
      <div className="rounded-xl p-4 md:w-2/3 bg-white border-2 flex flex-col shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Active SOS Requests</h2>
          <MdClose
            onClick={() => navigate("/")}
            className="text-3xl text-red-700 cursor-pointer hover:text-red-900 transition-colors"
            title="Close and return to Dashboard"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-6 px-1 md:px-4">
          {["All", "In Progress", "Completed", "Not Started"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-6 py-2 rounded text-white transition-transform hover:scale-105 ${filterStatus === status
                  ? "bg-gradient-to-r from-red-700 to-red-900"
                  : "bg-gradient-to-r from-red-600 to-red-800"
                }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="overflow-auto max-h-[60vh] md:max-h-[65vh] px-1 md:px-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-100">
          <table className="min-w-full text-left text-lg border-collapse border border-gray-200">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Vehicle Number</th>
                <th className="border border-gray-300 px-4 py-2">Location</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                <th className="border border-gray-300 px-4 py-2">Work Status</th>
                <th className="border border-gray-300 px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {activeRequest.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center text-gray-500 py-6 font-medium"
                  >
                    No requests found
                  </td>
                </tr>
              ) : (
                  filteredRequests.map((req, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{req.vehicleNumber}</td>
                    <td className="border border-gray-300 px-4 py-2">{req.location}</td>
                    <td className="border border-gray-300 px-4 py-2">{req.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{req.phoneNumber}</td>
                    

                   <td
  className={`border border-gray-300 px-4 py-2 font-semibold ${
    {
      "Completed": "text-orange-500",
      "In Progress": "text-green-600",
      "Not Started": "text-black",
    }[req.status] || "text-black"
  }`}
>
  {req.status}
</td>

                    <td className="border border-gray-300 px-4 py-2">
                      <button
                       onClick={() => handleViewClick(req._id)}
                        className="bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 transition-transform text-white px-4 py-1 rounded w-full"
                        title={`View details for ${req._id}`}
                      >
                        {req.view}view
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* SOS Services */}
      <div className="rounded-xl p-4 md:w-1/3 bg-white border-2 flex flex-col shadow-md">
        <div className="flex justify-between items-center mb-6 px-1 md:px-4">
          <h2 className="text-3xl md:text-4xl font-bold">SOS Services</h2>
          <FiPlus
            onClick={() => setShowForm(true)}
            className="text-4xl text-red-800 cursor-pointer hover:text-red-900 transition-colors"
            title="Add Service"
          />
        </div>

        <ul className="flex flex-col gap-4 overflow-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-100 px-1 md:px-4">
          {services.length > 0 && services.map((service,index) => (
            <li
              key={index}
              className="flex items-center justify-between border border-gray-200 rounded p-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex justify-center items-center text-2xl">
                  {carIcons.find((item) => item.name === service.icon)?.icon}
                </div>
                <div>
                  <div className="font-semibold text-lg">{service.title}</div>
                  <div
                    className={`mt-1 font-semibold ${service.active ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {service.active ? "Active" : "Inactive"}
                  </div>
                </div>
              </div>
             <button
       aria-label={`Toggle ${service.title} ${service.active ? "off" : "on"}`}
       onClick={() => handleToggleService(service)}
       className="focus:outline-none"
       title={service.active ? "Enabled" : "Disabled"}
>
          {service.active ? (
       <MdToggleOn className="text-[#800000] text-6xl" />
  ) : (
         <MdToggleOff className="text-gray-400 text-6xl" />
      )}
</button>

            </li>
          ))}
        </ul>
      </div>

      {/* Slide-in Form */}
      <div
        className={`fixed top-0 right-0 h-full max-w-sm w-11/12 sm:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${showForm ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold">Add New Service</h3>
          <MdClose
            className="text-2xl cursor-pointer text-red-800 hover:text-red-900 transition-colors"
            onClick={() => setShowForm(false)}
            title="Close form"
          />
        </div>
        <form
          onSubmit={handleAddService}
          className="p-6 flex flex-col gap-6"
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Service Name"
            value={newServiceName}
            onChange={(e) => setNewServiceName(e.target.value)}
            className="bg-white text-black placeholder-gray-500 rounded border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b1b1b] transition-all w-full"
            required
            aria-label="Service Name"
          />

          <div className="grid grid-cols-6 gap-3 bg-gray-100 p-3 rounded max-h-24 overflow-auto">
            {carIcons.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIconIndex(idx)}
                className={`p-2 border rounded text-2xl flex justify-center items-center transition-colors ${selectedIconIndex === idx
                    ? "bg-red-200 border-red-600"
                    : "hover:bg-red-100"
                  }`}
                aria-pressed={selectedIconIndex === idx}
                title={`Select icon for ${item.name}`}
              >
                {item.icon}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-800 text-white py-3 rounded hover:scale-105 transition-transform font-semibold"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardSos;