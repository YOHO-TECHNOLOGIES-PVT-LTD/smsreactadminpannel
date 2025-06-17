/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetPartnerList } from "../../features/CommonService";
import { updatePendingRequest } from "../../pages/Bookings/service";

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
   
  async function fetchpartner() {
      const data = await GetPartnerList()
      console.log(data.data)
      setpartnerList(data.data)
    }
   
  async function setOpenModel() {
    fetchpartner()
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#9b111e] rounded-lg flex items-center justify-center text-white font-bold text-base">
              {request.customerId.firstName.charAt(0)}
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
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-[#9b111e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
              </svg>
              <p className="text-sm font-semibold text-gray-700">Vehicle</p>
            </div>
            <p className="font-semibold text-gray-900 text-sm">{request.customerId.vehicleInfo.model || "vehicle model"}</p>
            <p className="font-semibold text-gray-900 text-sm">{"2025"}</p>
            <p className="font-mono text-black rounded mt-1 text-sm font-medium">{request.customerId.vehicleInfo.registerNumber}</p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-[#9b111e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p className="text-sm font-semibold text-gray-700">Contact</p>
            </div>
            <p className="font-semibold text-gray-900 text-sm">{request.customerId.contact_info.phoneNumber}</p>
            <div className="flex items-center mt-1">
              <svg className="w-3 h-3 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-600 truncate text-sm">{request.customerId.contact_info.address1+' '+
                  request.customerId.contact_info.address2+' '+ request.customerId.contact_info.city+' '+
                  request.customerId.contact_info.state
                }</p>
            </div>
          </div>
        </div>


        <div className="mb-3">
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-[#9b111e] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
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
            className="bg-[#9b111e] text-white px-3 py-2 rounded text-md font-medium"
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
              className="absolute top-4 right-6 text-gray-600 text-xl font-bold hover:text-gray-800"
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
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAssign}
                disabled={!selectedPartner}
                className="bg-[#9b111e] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7e0e19] disabled:opacity-50"
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
