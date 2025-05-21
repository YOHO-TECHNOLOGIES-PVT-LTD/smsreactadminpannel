// import React from 'react';
// import { FaUser, FaPhone, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

// const SosDetailsCard = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-gray-100 h-full">
//       <h1 className="text-3xl font-bold text-left mb-10 text-[#9b111e]">SOS Details</h1>

      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         <div className="bg-white shadow-md  rounded-2xl p-5">
//           <div className="flex items-center mb-4 text-[#9b111e] font-semibold text-lg">
//             <FaUser className="mr-2" />
//             Person Details
//           </div>
//           <div className="text-gray-800 space-y-1">
//             <p><strong>Name:</strong> John Doe</p>
//             <p><strong>Gender:</strong> Male</p>
//           </div>
//         </div>

        
//         <div className="bg-white shadow-md rounded-2xl p-5">
//           <div className="flex items-center mb-4 text-[#9b111e] font-semibold text-lg">
//             <FaPhone className="mr-2" />
//             Contact Information
//           </div>
//           <div className="text-gray-800 space-y-1">
//             <p><strong>Phone:</strong> +1 234 567 890</p>
//             <p><strong>Email:</strong> john@example.com</p>
//             <p><strong>Emergency Contact:</strong> 9876543210</p>
//           </div>
//         </div>

//         <div className="bg-white shadow-md rounded-2xl p-5">
//           <div className="flex items-center mb-4 text-[#9b111e] font-semibold text-lg">
//             <FaInfoCircle className="mr-2" />
//             Post Add Details
//           </div>
//           <div className="flex items-center gap-4">
            
//             <div className="text-gray-800 space-y-1">
//               <p><strong>Status:</strong> <span className="text-red-600 font-semibold">Urgent</span></p>
//               <p><strong>Note:</strong> Lost near park</p>
//             </div>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB0GVXJL-KEdO2HDzjhxSh0WwihQPkiCZ9Q&s"
//               alt="User"
//               className="w-20 h-20 rounded-lg  object-cover shadow"
//             />
//           </div>
//         </div>

       
//         <div className="bg-white shadow-md rounded-2xl p-5">
//           <div className="flex items-center mb-4 text-[#9b111e] font-semibold text-lg">
//             <FaMapMarkerAlt className="mr-2" />
//             Location
//           </div>
//           <div className="text-gray-800 space-y-1">
//             <p><strong>Latitude:</strong> 37.7739</p>
//             <p><strong>Longitude:</strong> -122.4313</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SosDetailsCard;
import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaStickyNote, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
//import L from 'leaflet';

// Fix default icon issue with React-Leaflet
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadowUrl,
//   iconAnchor: [12, 41],
// });

//L.Marker.prototype.options.icon = DefaultIcon;

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
}

const FourGridLayoutWithLiveMap: React.FC = () => {
  const [postedDetails, setPostedDetails] = useState<PostedDetail[]>([]);

  // Example fetch function: Replace with your real API endpoint
  const fetchPostedDetails = async () => {
    // try {
    //   // Simulate API call - you should replace this URL with your actual API
    //   const response = await fetch('/api/posted-details');
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   const data: PostedDetail[] = await response.json();
    //   setPostedDetails(data);
    // } catch (error) {
    //   console.error('Failed to fetch posted details:', error);
    // }
  };

  useEffect(() => {
    fetchPostedDetails();

    // Poll for live updates every 10 seconds
    const interval = setInterval(() => {
      fetchPostedDetails();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Select first posted detail to display info in grids, fallback to empty values
  const selected = postedDetails[0] || {
    title: 'Loading...',
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
  };

  return (
    <div className="max-w-6xl mx-auto p-5 bg-gray-100 text-gray-800 font-poppins min-h-screen">

      {/* Top Row: Image and Status side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Grid 1: Image */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex justify-center items-center">
          <img
            className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="Beautiful scenic view"
          />
        </div>

        {/* Grid 2: Status, Note, Location */}
        <div className="bg-white rounded-lg shadow-lg p-5" aria-label="Status, Note, Location grid">
          <div className="flex items-start mb-5">
            <FaInfoCircle className="text-blue-500 text-2xl mr-3" />
            <div>
              <div className="font-semibold text-lg">Status</div>
              <div className="text-gray-600">{selected.status || 'Actice or Inactive'}</div>
            </div>
          </div>

          <div className="flex items-start mb-5">
            <FaStickyNote className="text-blue-500 text-2xl mr-3" />
            <div>
              <div className="font-semibold text-lg">Note</div>
              <div className="text-gray-600">{selected.note || 'Describe the accidenect'}</div>
            </div>
          </div>

          <div className="flex items-start mb-5">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mr-3" />
            <div>
              <div className="font-semibold text-lg">Location</div>
              <div className="text-gray-600">{selected.location || 'chennai'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Posted Details and Personal Details side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Grid 4: Posted Details */}
        <div className="bg-white rounded-lg shadow-lg p-5" aria-label="Posted details grid">
          <h2 className="text-blue-500 font-bold text-xl text-center mb-5">Posted Details</h2>
          <div className="border border-gray-300 rounded-lg p-4 bg-blue-50">
            <p><strong>Job posted on:</strong> {selected.postedDate || '21-05-2025'}</p>
            <p><strong>Deadline:</strong> {selected.deadline || '11-06-2025'}</p>
            <p><strong>Posted By:</strong> {selected.postedBy || 'john'}</p>
            {/* <p><strong>Department:</strong> {selected.department || 'N/A'}</p> */}
            <p><strong>Status:</strong> {selected.status || 'inprogress'}</p>
          </div>
        </div>

        {/* Grid 3: Personal Details */}
        <div className="bg-white rounded-lg shadow-lg p-5" aria-label="Personal details grid">
          <h2 className="text-blue-500 font-bold text-xl text-center mb-5">Personal Details</h2>
          <div className="flex items-center mb-5">
            <FaUser className="text-pink-500 text-2xl mr-3" />
            <div className="font-semibold text-lg">{selected.contactName || 'johndoe'}</div>
          </div>
          <div className="flex items-center mb-5">
            <FaPhoneAlt className="text-pink-500 text-2xl mr-3" />
            <div className="font-semibold text-lg">{selected.contactPhone || '9876543210'}</div>
          </div>
          <div className="flex items-center mb-5">
            <FaEnvelope className="text-pink-500 text-2xl mr-3" />
            <div className="font-semibold text-lg">{selected.contactEmail || 'john@gmail.com'}</div>
          </div>
        </div>
      </div>

      {/* Live Map showing all posted details */}
      <div className="bg-white rounded-lg shadow-md p-5 h-96">
        <h2 className="text-blue-500 font-bold text-xl text-center mb-5">Live Map</h2>
        <MapContainer
          center={[selected.latitude, selected.longitude]}
          zoom={12}
          scrollWheelZoom={true}
          className="w-full h-full rounded-lg"
        >
          <TileLayer
            attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {postedDetails.map(detail => (
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

    </div>
  );
};

export default FourGridLayoutWithLiveMap;



