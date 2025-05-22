import React, { useState, useEffect } from 'react';
import {
  FaInfoCircle,
  FaStickyNote,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
} from 'react-icons/fa';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import sos from '../../assets/sos.jpg';

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
}

const TwoByTwoGridWithMap: React.FC = () => {
  const [postedDetails, setPostedDetails] = useState<PostedDetail[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const fetchPostedDetails = async () => {
    // Replace with actual API
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

  // Filter the postedDetails by selected status
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
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen font-poppins">
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

      
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-[#9b111e] font-bold text-4xl mb-4">Personal Details</h2>
          <div className="flex items-center mb-4">
            <FaUser className="text-pink-500 text-2xl mr-3" />
            <div className="text-lg font-semibold">{selected.contactName || 'John Doe'}</div>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-pink-500 text-2xl mr-3" />
            <div className="text-lg font-semibold">{selected.location || 'Chennai'}</div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-pink-500 text-2xl mr-3" />
            <div className="text-lg font-semibold">{selected.contactEmail || 'john@example.com'}</div>
          </div>
        </div>

       
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-[#9b111e] font-bold text-4xl mb-4">SOS Info</h2>

          <div className="flex items-start mb-4">
            <FaInfoCircle className="text-blue-500 text-2xl mr-3" />
            <div>
              <div className="font-semibold text-lg">Status :<select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 ml-10 rounded px-3 py-2"
        >
          <option className="p-2" value="Not Started">Not Started</option>
          <option className="p-2"  value="In Progress">In Progress</option>
          <option  className="p-2" value="Completed">Completed</option>
        </select></div>
              <div className="text-gray-600">{selected.status || 'completed'}</div>
              <div className="mb-6">
            </div>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <FaStickyNote className="text-blue-500 text-2xl mr-3" />
            <div>
              <div className="font-semibold text-lg">Note</div>
              <div className="text-gray-600">{selected.note || 'No notes provided'}</div>
            </div>
          </div>

          <div className="flex items-start">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mr-3" />
            <div>
              <div className="font-semibold text-lg">Location</div>
              <div className="text-gray-600">{selected.location || 'chennai'}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TwoByTwoGridWithMap;
