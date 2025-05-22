import React, { useState, useEffect } from 'react';
import {
  FaInfoCircle,
  FaStickyNote,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import sos from '../../assets/sos.jpg';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface PostedDetail {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  postedDate: string;
  deadline: string;
  postedBy: string;
  department: string;
  status: string;
  note: string;
  location: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  imageUrl?: string;
  contactNumber: string;
  type:string;
}

const SosDetails: React.FC = () => {

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "not started":
        return "bg-red-100 text-red-800";
      case "in progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const [postedDetails, setPostedDetails] = useState<PostedDetail[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const fetchPostedDetails = async () => {
   
    // Example dummy data:
    setPostedDetails([
      {
        id: 1,
        title: 'Fire in Chennai',
        latitude: 13.0827,
        longitude: 80.2707,
        postedDate: '2025-05-22',
        deadline: '2025-05-23',
        postedBy: 'Police Dept',
        department: 'Emergency',
        status: 'Not Started',
        note: 'Reported fire in North Chennai',
        location: 'Chennai',
        contactName: 'Inspector Raj',
        contactPhone: '1234567890',
        contactEmail: 'raj@example.com',
        imageUrl: '',
        contactNumber:"99486637684",
        type:"Own"
      },
      {
        id: 2,
        title: 'Flood Rescue',
        latitude: 12.9716,
        longitude: 77.5946,
        postedDate: '2025-05-21',
        deadline: '2025-05-22',
        postedBy: 'Disaster Management',
        department: 'Rescue',
        status: 'In Progress',
        note: 'Flooding in Bangalore suburbs',
        location: 'Bangalore',
        contactName: 'Officer Meera',
        contactPhone: '9876543210',
        contactEmail: 'meera@example.com',
        imageUrl: '',
        contactNumber: "99486637684",
        type:"Other"
      },
    ]);
  };

  useEffect(() => {
    fetchPostedDetails();
    const interval = setInterval(() => {
      fetchPostedDetails();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  
  const filteredDetails = statusFilter === 'All'
    ? postedDetails
    : postedDetails.filter(detail => detail.status === statusFilter);

  const selected = filteredDetails[0] || {
    title: 'No Matching Records',
    postedDate: '',
    deadline: '',
    postedBy: '',
    department: '',
    status: '',
    note: '',
    location: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    latitude: 37.773972,
    longitude: -122.431297,
    imageUrl: '',
  };

  return (
    <div className="w-full mx-auto p-6 bg-gray-100 min-h-screen font-poppins">
     <div className="flex items-center p-4">
  <Link to="/sos" className="mr-4 text-[#9b111e] hover:text-red-800">
    <FaArrowLeft className="text-3xl" />
  </Link>
  <h1 className="text-[#9b111e] text-5xl font-bold">SOS Details</h1>
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div className="bg-white rounded-xl shadow-md overflow-hidden flex justify-center items-center">
          <img
            className="w-full h-80 object-cover rounded-xl"
            src={selected.imageUrl || sos}
            onError={(e) => {
              e.currentTarget.src = sos;
            }}
            alt="User or default image"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 h-80">
          <MapContainer
            center={[selected.latitude, selected.longitude]}
            zoom={12}
            scrollWheelZoom={true}
            className="w-full h-full rounded-lg"
           
          >
             <TileLayer
              attribution=""
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> 
            {filteredDetails.map(detail => (
              <Marker key={detail.id} position={[detail.latitude, detail.longitude]}>
                <Popup>
                  <strong>{detail.title}</strong><br />
                  {detail.location}<br />
                  <em>{detail.status}</em>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      <div className='flex flex-row w-full gap-5'>

        <div className="bg-white rounded-xl w-96 shadow-md p-5">
          <h2 className="text-[#9b111e] font-bold text-4xl mb-4">Personal Details</h2>
          <div className="flex items-center  mt-5">
            <FaUser className="text-[#9b111e]  text-2xl mr-3" />
            <div className="text-lg font-semibold">{selected.contactName || 'John Doe'}</div>
          </div>
          <div className="flex items-center mt-10">
            <FaMapMarkerAlt className="text-[#9b111e]  text-2xl mr-3" />
            <div className="text-lg font-semibold">{selected.location || 'Chennai'}</div>
          </div>
          <div className="flex items-center mt-10">
            <FaEnvelope className="text-[#9b111e]  text-2xl mr-3" />
            <div className="text-lg font-semibold">{selected.contactEmail || 'john@example.com'}</div>
          </div>
          <div className="flex items-center mt-10">
            <FaPhoneAlt className="text-[#9b111e]  text-2xl mr-3" />
            <div className="text-lg font-semibold">{selected.contactNumber || 'John Doe'}</div>
          </div>
        </div>

          <div className="bg-white w-96 rounded-xl shadow-md p-5">
            <h2 className="text-[#9b111e] font-bold text-4xl mb-4">Other Details</h2>
            <div className="flex items-center mt-10">
              <FaPhoneAlt className="text-[#9b111e]  text-2xl mr-3" />
              <div className="text-lg font-semibold">{selected.contactNumber || 'John Doe'}</div>
            </div>
            <div className="flex items-center mt-10">
              <FaMapMarkerAlt className="text-[#9b111e]  text-2xl mr-3" />
              <div className="text-lg font-semibold">{selected.location || 'Chennai'}</div>
            </div>

            <div className="flex gap-4 mt-10">
              {
                selected.type === "Own" && <button
                  className={`px-4 py-2 ml-5 rounded font-semibold border ${"Own" === "Own"
                    ? "bg-[#9b111e] text-white"
                    : "bg-white text-[#9b111e] border-[#9b111e]"
                    }`}
                >
                  Own
                </button>
              }
              {
                selected.type === "Other" && <button
                  className={`px-4 py-2 ml-5 rounded font-semibold border ${"Other" === "Other"
                    ? "bg-[#9b111e] text-white"
                    : "bg-white text-[#9b111e] border-[#9b111e]"
                    }`}
                >
                  Others
                </button>
              }
            </div>
          </div>

          

      </div>

       
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-[#9b111e] font-bold text-5xl mb-4">SOS Info</h2>

          <div className='flex flex-row gap-20 mt-10'>

          <div className="flex items-start mb-4">
            <FaInfoCircle className="text-[#9b111e] mt-4 text-2xl " />
            <div>
              <div className="font-semibold text-center text-2xl">Status :<select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 text-black  ml-10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9b111e] transition duration-200"
        >
          <option className="p-2 " value="Not Started">Not Started</option>
          <option className="p-2 "  value="In Progress">In Progress</option>
          <option  className="p-2 " value="Completed">Completed</option>
        </select></div>
        <div className='flex flex-row gap-20'>
        <div
           className={`text-xl mt-10 font-semibold inline-block px-4 py-2 rounded ml-5 ${getStatusStyles(
                    selected.status || "Completed"
                  )}`}
                >
                  {selected.status || "Completed"}
                </div>
                  <div className="flex items-start mt-10">
                    <FaMapMarkerAlt className="text-[#9b111e]  text-2xl mr-3" />
                    <div>
                      <div className="font-semibold text-lg">Location</div>
                      <div className="text-gray-600 text-2xl">{selected.location || 'chennai'}</div>
                    </div>
                  </div>
               </div>
              </div>
          </div>

          <div className="flex items-start mb-4">
            <FaStickyNote className="text-[#9b111e]  text-2xl mr-3" />
            <div>
              <div className="font-semibold text-lg">Note</div>
              <div className="text-gray-600">{selected.note || 'No notes provided'}</div>
            </div>
          </div>

          </div>

         
        </div>

      </div>
    </div>
  );
};

export default SosDetails;
