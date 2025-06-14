import { useState, useEffect } from 'react';
import {
  FaInfoCircle,
  FaStickyNote,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCar,
} from 'react-icons/fa';
import {
  MapContainer,
  TileLayer,
  //Marker,
 // Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import sos from '../../assets/sos.jpg';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { getsos, updatesos } from '../../components/sos/services';

interface PostedDetail {

  customerId: {
    contact_info: {
      phoneNumber: string;
    }
    email: string;
    firstName: string;
    lastName: string;
  },

  title: string;
  vehicleInfo: {
    model: string;
    registerNumber: string;
  }
  latitude: number;
  longitude: number;
  postedDate: string;
  deadline: string;
  postedBy: string;
  department: string;
  status: string;
  description: string;
  location: string;
  name: string;
  phoneNumber: string;
  contactEmail: string;
  imageUrl?: string;
  contactNumber: string;
  types: string;
  vehicleNumber: string;
  workStatus: string;
  createdAt: string;
  updatedAt: string;
  uuid: string;
  id: number;
  __v: number;
}

const SosDetails = () => {
  const { uuid } = useParams()

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "not started":
        return "bg-red-100 text-red-800 border-red-200";
      case "in progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "not started":
        return "bg-red-500";
      case "in progress":
        return "bg-yellow-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const [postedDetails, setPostedDetails] = useState<PostedDetail>({

    customerId: {
      email: "",
      firstName: "",
      lastName: "",
      contact_info: {
        phoneNumber: ""
      }
    },
    title: "",
    vehicleInfo: {
      model: "",
      registerNumber: "",
    },
    latitude: 13.067439,
    longitude: 80.237617,
    postedDate: "",
    deadline: "",
    postedBy: "",
    department: "",
    status: "",
    description: "",
    location: "",
    name: "",
    phoneNumber: "",
    contactEmail: "",
    imageUrl: " ",
    contactNumber: "",
    types: "",
    vehicleNumber: "",
    workStatus: "",
    createdAt: "",
    updatedAt: "",
    uuid: "",
    id: 0,
    __v: 0,
  });
 /// const [statusFilter, setStatusFilter] = useState<string>('All');


  useEffect(() => {

    const fetchSosRequests = async (id: any) => {
      try {

        const data: any = await getsos(id)
        console.log(data)
        setPostedDetails(data.data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching SOS requests:", error);
      }
    };
    fetchSosRequests(uuid);
  }, []);

  const updateStatus = async (e: any, params: any) => {
    try {
      // setStatusFilter(e.target.value)
      const data = { status: e.target.value }
      const responce: any = await updatesos(data, params)
      setPostedDetails(responce.data)
    } catch (error) {
      console.log(error)
    }
  }


  // const filteredDetails = statusFilter === 'All'
  //   ? postedDetails
  //   : postedDetails.filter(detail => detail.status === statusFilter);

  // const selected = filteredDetails[0] || {
  //   title: 'No Matching Records',
  //   postedDate: '',
  //   deadline: '',
  //   postedBy: '',
  //   department: '',
  //   status: '',
  //   note: '',
  //   location: '',
  //   contactName: '',
  //   contactPhone: '',
  //   contactEmail: '',
  //   latitude: 37.773972,
  //   longitude: -122.431297,
  //   imageUrl: '',
  // };

  return (
    <div className="w-full mx-auto bg-[#FAF3EB] min-h-screen font-poppins">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center">
            <Link to="/sos" className="mr-6 text-[#9b111e] hover:text-red-800 transition-colors duration-200">
              <FaArrowLeft className="text-2xl" />
            </Link>
            <h1 className="text-[#9b111e] text-3xl lg:text-2xl font-bold">SOS Details</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video flex justify-center items-center p-4">
              <img
                className="w-full h-full max-h-80 object-cover rounded-xl"
                src={postedDetails.imageUrl || sos}
                onError={(e) => {
                  e.currentTarget.src = sos;
                }}
                alt="SOS Emergency Image"
              />
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-80 p-4">
              <MapContainer
                center={[postedDetails.latitude, postedDetails.longitude]}
                zoom={12}
                scrollWheelZoom={true}
                className="w-full h-full rounded-xl"
              >
                <TileLayer
                  attribution=""
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Details Section - Three Cards in One Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Personal Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-[#9b111e] font-bold text-xl mb-6 pb-3 border-b border-gray-100 flex items-center">
              <FaUser className="mr-3 text-lg" />
              Personal Details
            </h2>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaUser className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Full Name</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">{postedDetails.name || 'N/A'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaEnvelope className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Email Address</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">{postedDetails.customerId.email || 'N/A'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaPhoneAlt className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Phone Number</p>
                  <p className="text-sm font-semibold text-gray-900">{postedDetails.phoneNumber || 'N/A'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p className="text-sm font-semibold text-gray-900 line-clamp-2">{postedDetails.location || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-[#9b111e] font-bold text-xl mb-6 pb-3 border-b border-gray-100 flex items-center">
              <FaInfoCircle className="mr-3 text-lg" />
              Additional Details
            </h2>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaPhoneAlt className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Contact Number</p>
                  <p className="text-sm font-semibold text-gray-900">{postedDetails.phoneNumber || 'N/A'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Emergency Location</p>
                  <p className="text-sm font-semibold text-gray-900 line-clamp-2">{postedDetails.location || 'N/A'}</p>
                </div>
              </div>

              {postedDetails.vehicleNumber && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                    <FaCar className="text-[#9b111e] text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">Vehicle Number</p>
                    <p className="text-sm font-semibold text-gray-900">{postedDetails.vehicleNumber}</p>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-2">Emergency Type</p>
                <div className="flex flex-wrap gap-2">
                  {postedDetails.types?.toLowerCase() === "own" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-[#9b111e] text-white">
                      Own Vehicle
                    </span>
                  )}
                  {postedDetails.types?.toLowerCase() === "other" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-[#9b111e] text-white">
                      Other Vehicle
                    </span>
                  )}
                  {!postedDetails.types && (
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-600">
                      Not Specified
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SOS Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-[#9b111e] font-bold text-xl mb-6 pb-3 border-b border-gray-100 flex items-center">
              <FaInfoCircle className="mr-3 text-lg" />
              SOS Information
            </h2>
            
            <div className="space-y-5">
              {/* Status Section */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaInfoCircle className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-3">Current Status</p>
                  
                  {/* Professional Status Dropdown */}
                  <div className="relative mb-4">
                    <select
                      value={postedDetails.status}
                      onChange={(e) => updateStatus(e, uuid)}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:border-[#9b111e] focus:outline-none focus:ring-2 focus:ring-[#9b111e] focus:ring-opacity-20 focus:border-[#9b111e] transition-all duration-200 cursor-pointer"
                    >
                      <option value="Not Started" className="text-gray-700 bg-white">🔴 Not Started</option>
                      <option value="In Progress" className="text-gray-700 bg-white">🟡 In Progress</option>
                      <option value="Completed" className="text-gray-700 bg-white">🟢 Completed</option>
                    </select>
                    
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Status Badge Display */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Status Display</p>
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusStyles(
                          postedDetails.status || "Completed"
                        )} transition-all duration-200`}
                      >
                        <span className={`w-2 h-2 rounded-full mr-2 ${getStatusDotColor(postedDetails.status || "Completed")}`}></span>
                        {postedDetails.status || "Completed"}
                      </span>
                    </div>
                    
                    {/* Status Update Indicator */}
                    <div className="text-xs text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notes */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaStickyNote className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Emergency Notes</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{postedDetails.description || 'No additional notes provided'}</p>
                </div>
              </div>

              {/* Emergency Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="text-[#9b111e] text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Emergency Location</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{postedDetails.location || 'Location not specified'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosDetails;
