import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FONTS } from "../../constants/uiConstants";

interface Request {
  id: string;
  customerName: string;
  mobile: string;
  carNumber: string;
  vehicle: string;
  issue: string;
  address: string;
  city: string;
  priorityDate: string;
  status: string;
  assignedPartner?: string;
  partnerName?: string;
}

interface Partner {
  id: string;
  name: string;
  city: string;
  expertise: string;
}

export default function ScheduleRequestPage() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<Request[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const names = ["Arjun", "Priya", "Karthik", "Sneha", "Ravi", "Divya", "Vikram", "Anjali", "Surya", "Meena"];
    const cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];
    const vehicles = ["Honda Civic", "Swift", "Innova", "Creta", "Verna"];
    const issues = ["Brake issue", "Battery", "Oil leak", "AC problem", "Suspension"];
    const addresses = ["123 Main Rd", "45A Gandhi St", "88 Patel Nagar", "12 MG Road", "9th Cross Street"];
    // const statuses:string[] = ["Pending", "Scheduled"];

    const mockRequests: Request[] = Array.from({ length: 20 }, (_, i) => ({
      id: `${i + 1}`,
      customerName: names[i % names.length],
      mobile: `98765${10000 + i}`,
      carNumber: `TN0${i % 5 + 1} AB ${1000 + i}`,
      vehicle: vehicles[i % vehicles.length],
      issue: issues[i % issues.length],
      address: addresses[i % addresses.length],
      city: cities[i % cities.length],
      priorityDate: `2025-06-${(i % 30 + 1).toString().padStart(2, '0')}`,
      status: "Pending", // Only show pending requests here
    }));

    const mockPartners: Partner[] = Array.from({ length: 10 }, (_, i) => ({
      id: `${100 + i + 1}`,
      name: `Garage ${i + 1}`,
      city: cities[i % cities.length],
      expertise: ["Brakes", "Electrical", "Engine", "AC", "General"][i % 5],
    }));

    setRequests(mockRequests);
    setPartners(mockPartners);
  }, []);

  const openModal = (request: Request) => {
    setSelectedRequest(request);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedPartnerId("");
    setSelectedRequest(null);
  };

  const assignPartner = () => {
    if (!selectedRequest || !selectedPartnerId) return;
    
    const selectedPartner = partners.find(p => p.id === selectedPartnerId);
    
    // Update the request status to "Scheduled"
    const updatedRequest = {
      ...selectedRequest,
      status: "Scheduled",
      assignedPartner: selectedPartnerId,
      partnerName: selectedPartner?.name || "Unknown Partner"
    };

    // Remove from current requests
    setRequests(prev => prev.filter(req => req.id !== selectedRequest.id));

    // Add to scheduled requests in localStorage
    const existingScheduled = JSON.parse(localStorage.getItem('scheduledRequests') || '[]');
    const updatedScheduled = [...existingScheduled, updatedRequest];
    localStorage.setItem('scheduledRequests', JSON.stringify(updatedScheduled));

    alert(`Successfully assigned ${selectedPartner?.name} to ${selectedRequest.customerName}'s request!`);
    closeModal();
  };

  const filteredPartners = selectedRequest
    ? partners.filter((p) => p.city === selectedRequest.city)
    : [];

  // Filter requests based on search term
  const filteredRequests = requests.filter((req) =>
    req.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#FAF3EB] min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-[#9b111e]" style={{...FONTS.header}}>
          Schedule Requests
        </h1>
        
        <div className="flex items-center gap-6">
          {/* Enhanced Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 group-focus-within:text-[#9b111e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 w-80 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9b111e] focus:border-[#9b111e] transition-all duration-300 bg-white shadow-sm hover:shadow-md"
              style={{...FONTS.paragraph}}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Enhanced Scheduled Button */}
          <button
            onClick={() => navigate('/request-queue/scheduled')}
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold border-2 border-transparent hover:border-green-300"
            style={{...FONTS.paragraph}}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Scheduled
            <div className="bg-white bg-opacity-20 rounded-full px-2 py-1 text-xs font-bold">
              {JSON.parse(localStorage.getItem('scheduledRequests') || '[]').length}
            </div>
          </button>
        </div>
      </div>
      
      <hr className="border-1 border-red-700 my-5" />

      {filteredRequests.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2" style={{...FONTS.cardSubHeader}}>
            {searchTerm ? "No matching requests found" : "No pending requests"}
          </h3>
          <p className="text-gray-500" style={{...FONTS.paragraph}}>
            {searchTerm ? "Try adjusting your search terms" : "All requests have been scheduled"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((req) => (
          <div
            key={req.id}
            className="relative group bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#9b111e] transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => openModal(req)}
          >
            {/* Status Ribbon */}
            <div className="absolute top-0 right-0 bg-[#9b111e] !text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10" style={{...FONTS.paragraph}}>
              {req.status}
            </div>

            <div className="flex gap-4 p-6">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#9b111e]/10 text-[#9b111e] text-2xl font-bold">
                🚗
              </div>

              {/* Details */}
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-bold text-[#9b111e]" style={{...FONTS.cardSubHeader}}>{req.customerName}</h3>
                <p className="text-sm !text-gray-700" style={{...FONTS.paragraph}}>
                  <span className="font-medium">📞</span> {req.mobile}
                </p>
                <p className="text-sm !text-gray-600" style={{...FONTS.paragraph}}>
                  <span className="font-medium">🚘</span> {req.vehicle} • {req.carNumber}
                </p>
                <p className="text-sm !text-gray-600 truncate" style={{...FONTS.paragraph}}>
                  <span className="font-medium">🛠</span> {req.issue}
                </p>
                <div className="flex justify-between text-sm !text-gray-600 mt-1" style={{...FONTS.paragraph}}>
                  <span>📍 {req.city}</span>
                  <span>🗓 {req.priorityDate}</span>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      )}

      {open && selectedRequest && (
  <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
    <div className="w-full sm:w-1/2 h-full bg-[#FAF3EB] border-l-4 border-[#9b111e] shadow-2xl p-8 relative overflow-y-auto rounded-l-xl transition-all duration-300">
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#9b111e] tracking-wide" style={{...FONTS.header}}>
          Assign Partner
        </h2>
        <button
          onClick={closeModal}
          className="text-gray-500 hover:text-black text-3xl font-bold"
        >
          &times;
        </button>
      </div>

      {/* Modal Content */}
      <div className="flex gap-4 ">
        {/* Icon Block */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-[#9b111e]/10 text-[#9b111e] text-3xl flex items-center justify-center font-bold shadow-md">
            🧾
          </div>
        </div>

        {/* Info Block */}
        <div className="flex-1 space-y-4 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">

            <p className="!text-gray-800 text-[14px]" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>Customer:</span>{" "}
              {selectedRequest.customerName}
            </p>
            <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>Mobile:</span>{" "}
              {selectedRequest.mobile}
            </p>
            <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>Car No:</span>{" "}
              {selectedRequest.carNumber}
            </p>
            <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>Vehicle:</span>{" "}
              {selectedRequest.vehicle}
            </p>
            <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>Issue:</span>{" "}
              {selectedRequest.issue}
            </p>
            <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>Address:</span>{" "}
              {selectedRequest.address}
            </p>
            <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>City:</span>{" "}
              {selectedRequest.city}
            </p>
            <p className="!text-gray-800 text-lg" style={{...FONTS.cardSubHeader}}>
              <span className="" style={{...FONTS.cardSubHeader}}>Priority Date:</span>{" "}
              {selectedRequest.priorityDate}
            </p>
          </div>

          {/* Partner Select */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-sm" style={{...FONTS.cardSubHeader}}>
              Select Partner:
            </label>
            <select
              className="w-full border border-gray-300 p-3 rounded-lg !text-gray-800 focus:ring-[#9b111e] focus:border-[#9b111e]"
              value={selectedPartnerId}
              onChange={(e) => setSelectedPartnerId(e.target.value)}
              style={{...FONTS.paragraph}}
            >
              <option value="">-- Choose a partner --</option>
              {filteredPartners.map((partner) => (
                <option className="!text-gray-800" key={partner.id} value={partner.id} style={{...FONTS.paragraph}}>
                  {partner.name} ({partner.expertise})
                </option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={closeModal}
              className="px-5 py-2 bg-gray-200 !text-gray-800 rounded-lg hover:!bg-gray-300"
              style={{...FONTS.paragraph}}
            >
              Cancel
            </button>
            <button
              onClick={assignPartner}
              className="px-5 py-2 !bg-[#9b111e] !text-white rounded-lg hover:!bg-[#80101a]"
              style={{...FONTS.paragraph}}
            >
              Assign Partner
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