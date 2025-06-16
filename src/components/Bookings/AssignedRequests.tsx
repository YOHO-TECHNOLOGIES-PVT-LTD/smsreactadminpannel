import React from "react";

interface AssignedRequest {
  id: number;
  user: {
    name: string;
    phone: string;
    address: string;
  };
  car: {
    model: string;
    year: string;
    number: string;
  };
  services: string[];
  date: string;
  status: string;
  priority: string;
  assignedPartner: string;
  assignedDate: string;
}

interface AssignedRequestsProps {
  assignedRequests: AssignedRequest[];
  searchTerm?: string;
}

const AssignedRequests: React.FC<AssignedRequestsProps> = ({ assignedRequests, searchTerm }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
      {assignedRequests.map((request) => (
        <div
          key={request.id}
          className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-base">
                {request.user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">{request.user.name}</h3>
                <p className="text-sm text-gray-500 font-medium">
                  #{request.id.toString().padStart(4, "0")}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600 font-medium text-right leading-tight">
              <p>{new Date(request.date).toLocaleDateString()}</p>
              <p className="text-xs text-gray-500">
                {new Date(request.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>

          {/* Assigned Partner Info */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
            <div className="flex items-center mb-1">
              <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-semibold text-green-800">Assigned Partner</p>
            </div>
            <p className="font-semibold text-green-900 text-sm">{request.assignedPartner}</p>
            <p className="text-xs text-green-600">
              Assigned on {new Date(request.assignedDate).toLocaleDateString()}
            </p>
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
              <p className="font-semibold text-gray-900 text-sm">{request.car.model}</p>
              <p className="font-semibold text-gray-900 text-sm">{request.car.year}</p>
              <p className="font-mono text-black rounded mt-1 text-sm font-medium">{request.car.number}</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <svg className="w-4 h-4 text-[#9b111e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-sm font-semibold text-gray-700">Contact</p>
              </div>
              <p className="font-semibold text-gray-900 text-sm">{request.user.phone}</p>
              <div className="flex items-center mt-1">
                <svg className="w-3 h-3 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-600 truncate text-sm">{request.user.address}</p>
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
                Services ({request.services.length})
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              {request.services.slice(0, 3).map((service: string, index: number) => (
                <span key={index} className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                  {service}
                </span>
              ))}
              {request.services.length > 3 && (
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm font-medium">
                  +{request.services.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
              Assigned
            </span>
            <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-blue-700">
              View Details
            </button>
          </div>
        </div>
      ))}

      {assignedRequests.length === 0 && !searchTerm && (
        <div className="col-span-full text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No assigned requests</h3>
          <p className="text-gray-600">Assigned requests will appear here</p>
        </div>
      )}

      {assignedRequests.length === 0 && searchTerm && (
        <div className="col-span-full text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-600">No assigned requests match your search for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default AssignedRequests;