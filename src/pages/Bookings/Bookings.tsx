import CompactServiceCard from "../../components/Bookings/CompactServiceCard";

const ServiceRequests: React.FC = () => {
  const serviceRequests = [
    {
      id: 1,
      user: {
        name: "Jane Smith",
        phone: "9876543210",
        address: "123 Main Street, Chennai",
      },
      car: {
        model: "Honda Civic",
        year: "2022",
        number: "TN AB0260",
      },
      services: ["Oil Change", "Brake Inspection", "Tire Rotation"],
      date: "2025-06-12",
      status: "pending",
      priority: "high"
    },
    {
      id: 2,
      user: {
        name: "Ravi Kumar",
        phone: "9123456780",
        address: "45 MG Road, Coimbatore",
      },
      car: {
        model: "Hyundai i20",
        year: "2020",
        number: "TN AB0000",
      },
      services: ["AC Repair", "Coolant Refill"],
      date: "2025-06-13",
      status: "in-progress",
      priority: "medium"
    },
    {
      id: 3,
      user: {
        name: "Priya Sharma",
        phone: "9234567891",
        address: "67 Anna Salai, Chennai",
      },
      car: {
        model: "Maruti Swift",
        year: "2021",
        number: "TN AB1234",
      },
      services: ["Engine Tune-up", "Oil Change", "Brake Service", "Tire Check", "Battery Test"],
      date: "2025-06-14",
      status: "completed",
      priority: "low"
    },
    {
      id: 4,
      user: {
        name: "Arun Raj",
        phone: "9345678902",
        address: "89 Brigade Road, Bangalore",
      },
      car: {
        model: "Toyota Innova",
        year: "2019",
        number: "KA AB5678",
      },
      services: ["Full Service", "Alignment"],
      date: "2025-06-15",
      status: "pending",
      priority: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF3EB]">
      {/* Compact Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Service Requests</h1>
              <p className="text-sm text-gray-600">Manage automotive service requests</p>
            </div>
            <div className="bg-[#9b111e] text-white px-4 py-2 rounded-lg">
              <span className="text-lg font-bold">{serviceRequests.length}</span>
              <span className="text-xs ml-1">Requests</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
          {serviceRequests.map((request) => (
            <CompactServiceCard key={request.id} request={request} />
          ))}
        </div>

        {/* Empty State */}
        {serviceRequests.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M9 16h6M9 8h6M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No service requests</h3>
            <p className="text-gray-600">New requests will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceRequests;