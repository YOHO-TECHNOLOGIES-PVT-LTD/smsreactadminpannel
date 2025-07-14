import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FONTS } from "../../constants/uiConstants";
import { GetAssignedScheduleReq } from "./Service";
import { assignedScheduleRequest } from "./scheduleType";

// interface Request {
//   id: string;
//   customerName: string;
//   mobile: string;
//   carNumber: string;
//   vehicle: string;
//   issue: string;
//   address: string;
//   city: string;
//   priorityDate: string;
//   status: string;
//   assignedPartner?: string;
//   partnerName?: string;
// }

export default function ScheduledRequestsPage() {
  const navigate = useNavigate();
  const [scheduledRequests, setScheduledRequests] = useState<assignedScheduleRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRequest, setSelectedRequest] = useState<assignedScheduleRequest| null>(null);
  const [open, setOpen] = useState(false);

  async function fetchedData() {
    const data = await GetAssignedScheduleReq()
    setScheduledRequests(data.data)
  }

  useEffect(() => {
    fetchedData()
  }, []);

  const openModal = (request: assignedScheduleRequest) => {
    setSelectedRequest(request);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedRequest(null);
  };

  // // Filter requests based on search term
  // const filteredRequests = scheduledRequests.filter((req) =>
  //   req.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="bg-[#FAF3EB] min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          {/* Back Arrow Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-12 h-12 bg-white border-2 border-[#9b111e] text-[#9b111e] rounded-3xl hover:bg-[#9b111e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            title="Back to Schedule Requests"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h1 className="!text-[20px] !font-bold " style={{...FONTS.header}}>
            Scheduled Requests
          </h1>
        </div>
        
        {/* Enhanced Search Bar */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 w-80 border-2 border-gray-200 rounded-3xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
              style={{...FONTS.paragraph}}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 rounded-3xl"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      

      {scheduledRequests.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-8xl mb-6">📅</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4" style={{...FONTS.cardSubHeader}}>
            {searchTerm ? "No matching scheduled requests found" : "No scheduled requests yet"}
          </h3>
          <p className="text-lg text-gray-500 mb-8" style={{...FONTS.paragraph}}>
            {searchTerm ? "Try adjusting your search terms" : "Assigned requests will appear here"}
          </p>
          
          {/* Enhanced Back Button when no scheduled requests */}
          {!searchTerm && (
            <button
              onClick={() => navigate('/request-queue/schedule')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#9b111e] to-[#c41e3a] text-white rounded-3xl hover:from-[#80101a] hover:to-[#a01829] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
              style={{...FONTS.paragraph}}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go to Schedule Requests
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduledRequests.map((req) => (
            <div
              key={req._id}
              className="relative group bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#9b111e] transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => openModal(req)}
            >
              {/* Status Ribbon */}
              <div className="absolute top-0 right-0 bg-green-600 !text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10" style={{...FONTS.paragraph}}>
                {"pending"}
              </div>

              <div className="flex gap-4 p-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                  ✅
                </div>

                {/* Details */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-bold text-[#9b111e]" style={{...FONTS.cardSubHeader}}>
                    {req.customerId.firstName+' '+req.customerId.lastName}
                  </h3>
                  <p className="text-sm !text-gray-700" style={{...FONTS.paragraph}}>
                    <span className="font-medium">📞</span> {req.customerId.contact_info.phoneNumber}
                  </p>
                  <p className="text-sm !text-gray-600" style={{...FONTS.paragraph}}>
                    <span className="font-medium">🚘</span> {req.customerId.vehicleInfo.model} • {req.customerId.vehicleInfo.registerNumber}
                  </p>
                  <p className="text-sm !text-gray-600 truncate" style={{...FONTS.paragraph}}>
                    <span className="font-medium">🛠</span> "genral service"
                  </p>
                  <p className="text-sm !text-green-600 font-medium" style={{...FONTS.paragraph}}>
                    <span className="font-medium">🏪</span> {req.partnerId.firstName+' '+req.partnerId.lastName}
                  </p>
                  <div className="flex justify-between text-sm !text-gray-600 mt-1" style={{...FONTS.paragraph}}>
                    <span>📍 {req.customerId.contact_info.city}</span>
                    <span>🗓 {req.schedule_date.split("T")[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for viewing scheduled request details */}
      {open && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <div className="w-full sm:w-1/2 h-full bg-[#FAF3EB] border-l-4 border-green-600 shadow-2xl p-8 relative overflow-y-auto rounded-3xl transition-all duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-green-600 tracking-wide" style={{...FONTS.header}}>
                Scheduled Request Details
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-black text-3xl font-bold rounded-3xl"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex gap-4">
              {/* Icon Block */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 text-3xl flex items-center justify-center font-bold shadow-md">
                  ✅
                </div>
              </div>

              {/* Info Block */}
              <div className="flex-1 space-y-4 text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                  <p className="!text-gray-800 text-[14px]" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Customer:</span>{" "}
                    {selectedRequest.customerId.firstName+' '+selectedRequest.customerId.lastName}
                  </p>
                  <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Mobile:</span>{" "}
                    {selectedRequest.customerId.contact_info.phoneNumber}
                  </p>
                  <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Car No:</span>{" "}
                    {selectedRequest.customerId.vehicleInfo.registerNumber}
                  </p>
                  <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Vehicle:</span>{" "}
                    {selectedRequest.customerId.vehicleInfo.model}
                  </p>
                  <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Issue:</span>{" "}
                    "general service"
                  </p>
                  <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Address:</span>{" "}
                    {selectedRequest.customerId.contact_info.address1+' '+selectedRequest.customerId.contact_info.address2}
                  </p>
                  <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>City:</span>{" "}
                    {selectedRequest.customerId.contact_info.city}
                  </p>
                  <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Priority Date:</span>{" "}
                    {selectedRequest.schedule_date.split('T')[0]}
                  </p>
                  <p className="!text-green-600 text-lg font-semibold" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Assigned Partner:</span>{" "}
                    {selectedRequest.partnerId.firstName+' '+selectedRequest.partnerId.lastName}
                  </p>
                  <p className="!text-green-600 text-lg" style={{...FONTS.cardSubHeader}}>
                    <span className="" style={{...FONTS.cardSubHeader}}>Status:</span>{" "}
                    "pending"
                  </p>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={closeModal}
                    className="px-5 py-2 bg-gray-200 !text-gray-800 rounded-3xl hover:!bg-gray-300"
                    style={{...FONTS.paragraph}}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}