/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updatePendingRequest } from "../../pages/Bookings/service";
import { FetchPartnerList } from "../../utils/CommonApiFetch";
import vehicleimg from "../../assets/Vehicle1.svg"
import contactimg from "../../assets/Phone Number.svg"
import location from "../../assets/Location.svg"
import service from "../../assets/Service (1).svg"


type pendingService = {
  _id: string;
  requestId: string;
  uuid: string;
  requestType: string;
  customerId: {
    contact_info: {
      state: string;
      city: string;
      address1: string;
      address2: string;
      phoneNumber: string;
    }
    vehicleInfo: {
      registerNumber: string;
      model: string;
    }
    firstName: string;
    lastName: string;
  }
  service: [
    {
      _id: string;
      service_name: string;
      uuid: string;
    }
  ]
  createdAt: string;
}
interface CompactServiceCardProps {
  request: pendingService;
  onAssign?: (requestId: string, partner: string) => void;
}

const CompactServiceCard: React.FC<CompactServiceCardProps> = ({ request, onAssign }) => {
  console.log("request", request)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState("");
  const [partnerList, setpartnerList] = useState<any[]>([]);

  const handleAssign = async() => {
  
    if (!selectedPartner) {
      toast.error("Please select a partner.");
      return;
    }
    toast.success(`Assigned to ${selectedPartner}`);
    const data = { uuid: request.uuid }
    await updatePendingRequest(selectedPartner,data)

    // Call the onAssign callback if provided
    if (onAssign) {
      onAssign(request.uuid, selectedPartner);
    }
    
    setIsModalOpen(false);
    setSelectedPartner("");
  };
   
  async function setOpenModel() {
    const data:any = await FetchPartnerList()
    setpartnerList(data)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#9b111e] rounded-lg flex items-center justify-center text-white font-bold text-base">
              {request?.customerId?.firstName.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">{ request.customerId.firstName + ' ' + request.customerId.lastName || "cusotmer name" }</h3>
              <p className="text-sm text-gray-500 font-medium">
                #{request.requestId}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-600 font-medium text-right leading-tight">
            <p>{request.createdAt.split('T')[0]}</p>
            <p className="text-xs text-gray-500">
              {new Date(request.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <div className="flex items-center mb-2 gap-2">
            <img className="w-5 h-5"src={vehicleimg} alt="vehicle image" />
              <p className="text-sm font-semibold text-gray-700">Vehicle</p>
            </div>
            <p className="font-semibold text-gray-900 text-sm">{request.customerId.vehicleInfo.model || "vehicle model"}</p>
            <p className="font-semibold text-gray-900 text-sm">{"2025"}</p>
            <p className="font-mono text-black rounded mt-1 text-sm font-medium">{request.customerId.vehicleInfo.registerNumber}</p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <img className="w-5 h-5" src={contactimg} alt="" />
              <p className="text-sm font-semibold text-gray-700">Contact</p>
            </div>
            <p className="font-semibold text-gray-900 text-sm">{request.customerId.contact_info.phoneNumber}</p>
            <div className="flex items-center mt-1 gap-2">
              <img className="w-5 h-5" src={location} alt="" />
              <p className="text-gray-600 truncate text-sm">{request.customerId.contact_info.address1+' '+
                  request.customerId.contact_info.address2+' '+ request.customerId.contact_info.city+' '+
                  request.customerId.contact_info.state
                }</p>
            </div>
          </div>
        </div>


        <div className="mb-3">
          <div className="flex items-center mb-2 gap-2`">
           <img className="w-5 h-5" src={service} alt="" />
            <p className="text-sm font-semibold text-gray-700">
              Services ({request.service.length})
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {request.service.slice(0, 3).map((service: any, index: number) => (
              <span key={index} className="bg-[#9b111e] text-white px-2 py-1 rounded text-sm font-medium">
                {service.service_name}
              </span>
            ))}
            {request.service.length > 3 && (
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm font-medium">
                +{request.service.length - 3} more
              </span>
            )}
          </div>
        </div>


        <div className="flex justify-end">
          <button
            onClick={setOpenModel}
            className="bg-[#9b111e] text-white px-3 py-2 rounded-3xl text-md font-medium"
          >
            Partner
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setIsModalOpen(false)} />
          <div className="ml-auto w-1/2 h-full bg-[#fef3f2] shadow-xl z-50 p-6 overflow-y-auto animate-slide-in relative rounded-l-xl border-l-4 border-[#9b111e]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-6 text-gray-600 text-xl font-bold hover:text-gray-800 rounded-3xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-[#9b111e] mb-6">Assign Partner</h2>

            <div className="bg-white shadow-md rounded-xl p-5 grid grid-cols-2 gap-4 mb-6 border">
              <div>
                <p className="text-sm text-gray-500 font-medium">Customer:</p>
                <p className="font-semibold text-gray-800">{request.customerId.firstName+' '+request.customerId.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Mobile:</p>
                <p className="font-semibold text-gray-800">{request.customerId.contact_info.phoneNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Car No:</p>
                <p className="font-semibold text-gray-800">{request.customerId.vehicleInfo.registerNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Vehicle:</p>
                <p className="font-semibold text-gray-800">{request.customerId.vehicleInfo.model}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Issues:</p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                  {request.service.map((service: any, index: number) => (
                    <li key={index} className="font-medium">{service.service_name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Address:</p>
                <p className="font-semibold text-gray-800">{request.customerId.contact_info.address1 + ' ' +
                  request.customerId.contact_info.address2 + ' ' + request.customerId.contact_info.city + ' ' +
                  request.customerId.contact_info.state}</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Partner:</label>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="">-- Choose a partner --</option>
                {
                  partnerList.map((items,index)=>{
                    return <option key={index} value={items._id}>{items?.id+" "+items.firstName+' '+items.lastName+"-"+items.contact_info.city}</option>
                  })
                }
                {/* <option value="Donald spares & services">Donald spares & services</option>
                <option value="kar spa services">kar spa services</option> */}
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2  font-medium hover:bg-gray-300 rounded-3xl"
              >
                Cancel
              </button>
              <button
                onClick={handleAssign}
                disabled={!selectedPartner}
                className="bg-[#9b111e] text-white px-4 py-2 rounded-3xl font-medium hover:bg-[#7e0e19] disabled:opacity-50"
              >
                Assign Partner
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompactServiceCard;
