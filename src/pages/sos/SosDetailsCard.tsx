import React, { useState, useEffect } from 'react';
import {
  FaInfoCircle,
  FaStickyNote,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowLeft,
} from 'react-icons/fa';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import sos from '../../assets/sos.jpg';
import { Link, useParams } from 'react-router-dom';
import { getsos } from '../../components/sos/services';

interface ResponseItem {
  responder: string;
  message: string;
  timestamp: string;
}

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
  type: string;
  responses?: ResponseItem[];
}

const SosDetails: React.FC = () => {
  const { id } = useParams();

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

  const [postedDetails, setPostedDetails] = useState<PostedDetail>({
  id: 0,
  title: '',
  latitude: 0,
  longitude: 0,
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
  imageUrl: '',
  contactNumber: '',
  type: '',
  responses: []
});
  const [statusFilter, setStatusFilter] = useState<string>('All');

  useEffect(() => {
    const fetchSosRequests = async () => {
      try {
        const response: any = await getsos(id);
         setPostedDetails(response.data); 
      } catch (error) {
        console.log("Error fetching SOS requests:", error);
      }
    };

    fetchSosRequests();
  }, [id]);

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
    contactNumber: '',
    type: '',
    responses: [],
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
            onError={(e) => { e.currentTarget.src = sos }}
            alt="User or default"
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
            {filteredDetails
              .filter(detail=> detail.latitude && detail.longitude)
              .map(detail => (
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
          <div className="bg-white rounded-xl xl:pl-10 w-6/12 shadow-md p-5">
            <h2 className="text-[#9b111e] font-bold text-2xl mb-4">Personal Details</h2>
            <div className="flex items-center mt-5">
              <FaUser className="text-[#9b111e] xl:text-2xl mr-3" />
              <div className="xl:text-lg font-semibold">{selected.contactName}</div>
            </div>
            <div className="flex items-center mt-10">
              <FaMapMarkerAlt className="text-[#9b111e] xl:text-2xl mr-3" />
              <div className="text-lg font-semibold">{selected.location}</div>
            </div>
            <div className="flex items-center mt-10">
              <FaEnvelope className="text-[#9b111e] xl:text-2xl mr-3" />
              <div className="text-lg font-semibold">{selected.contactEmail}</div>
            </div>
            <div className="flex items-center mt-10">
              <FaPhoneAlt className="text-[#9b111e] xl:text-2xl mr-3" />
              <div className="text-lg font-semibold">{selected.contactNumber}</div>
            </div>
          </div>

          <div className="bg-white xl:pl-10 w-6/12 rounded-xl shadow-md p-5">
            <h2 className="text-[#9b111e] font-bold text-2xl mb-4">Other Details</h2>
            <div className="flex items-center mt-10">
              <FaPhoneAlt className="text-[#9b111e] xl:text-2xl mr-3" />
              <div className="xl:text-lg font-semibold">{selected.contactNumber}</div>
            </div>
            <div className="flex items-center mt-10">
              <FaMapMarkerAlt className="text-[#9b111e] xl:text-2xl mr-3" />
              <div className="xl:text-lg font-semibold">{selected.location}</div>
            </div>
            <div className="flex gap-4 mt-10">
              {selected.type === "Own" && (
                <button className="px-4 py-2 ml-5 rounded font-semibold border bg-[#9b111e] text-white">
                  Own
                </button>
              )}
              {selected.type === "Other" && (
                <button className="px-4 py-2 ml-5 rounded font-semibold border bg-[#9b111e] text-white">
                  Others
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-[#9b111e] font-bold text-2xl mb-4 xl:ml-5">SOS Info</h2>
          <div className='flex flex-row xl:gap-20 lg:ml-1 xl:ml-10 lg:gap-5 mt-10'>
            <div className="flex items-start mb-4">
              <FaInfoCircle className="text-[#9b111e] mt-1 text-xl" />
              <div className="ml-3 w-full">
                <div className="font-semibold text-base mb-2">Status:</div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="sm:w-72 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-lg px-4 py-3 text-base font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400 transition duration-300 ease-in-out hover:from-red-600 hover:to-red-800 cursor-pointer"
                  style={{ width: "150px" }}
                >
                  <option value="Not Started" className="text-black">Not Started</option>
                  <option value="In Progress" className="text-black">In Progress</option>
                  <option value="Completed" className="text-black">Completed</option>
                </select>

                <div className="flex flex-row gap-4 mt-4">
            <div
  className={`text-sm font-semibold inline-block px-4 py-2 rounded ${getStatusStyles(
    selected.status || "Completed"
  )}`}
>
                    {selected.status || "Completed"}
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col xl:ml-25 lg:ml-18'>
              <div className="flex items-start mb-4">
                <FaStickyNote className="text-[#9b111e] text-2xl mr-3" />
                <div>
                  <div className="font-semibold text-lg">Note</div>
                  <div className="text-gray-600">{selected.note}</div>
                </div>
              </div>

              <div className="flex items-start mt-10">
                <FaMapMarkerAlt className="text-[#9b111e] text-2xl mr-3" />
                <div>
                  <div className="font-semibold text-lg">Location</div>
                  <div className="text-gray-600 text-2xl">{selected.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        {selected.responses && selected.responses.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-5 mt-6 col-span-2">
            <h2 className="text-[#9b111e] font-bold text-2xl mb-4">Response Updates</h2>
            <ul className="space-y-4">
              {selected.responses.map((res, idx) => (
                <li key={idx} className="border p-4 rounded shadow-sm">
                  <div className="font-semibold text-lg text-gray-800">{res.responder}</div>
                  <div className="text-gray-600">{res.message}</div>
                  <div className="text-sm text-gray-400 mt-2">{new Date(res.timestamp).toLocaleString()}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SosDetails;