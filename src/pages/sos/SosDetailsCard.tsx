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
import { Link, useParams } from 'react-router-dom';
import { getsos, updatesos } from '../../components/sos/services';

interface PostedDetail {

  customerId:{
    contact_info: {
      phoneNumber:string;
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
  type: string;
}

const SosDetails: React.FC = () => {
  const {uuid} = useParams()

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

    customerId:{
      email:"",
      firstName:"",
      lastName:"",
      contact_info:{
        phoneNumber:""
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
    type: "",
  });
  const [statusFilter, setStatusFilter] = useState<string>('All');

 
useEffect(() => {
   
    const fetchSosRequests = async (id:any) => {
    try {
      
     const data:any = await getsos(id)
     console.log(data)
     setPostedDetails(data.data)
     console.log(data)
    } catch (error) {
      console.error("Error fetching SOS requests:", error);
    }
  };
   fetchSosRequests(uuid);
 }, []);

 const updateStatus = async(e:any,params:any)=>{
  try {
    // setStatusFilter(e.target.value)
    const data = {status:e.target.value}
    const responce:any = await updatesos(data,params)
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
            src={postedDetails.imageUrl || sos}
            onError={(e) => {
              e.currentTarget.src = sos;
            }}
            alt="User or default image"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 h-80">
          <MapContainer
            center={[postedDetails.latitude, postedDetails.longitude]}
            zoom={12}
            scrollWheelZoom={true}
            className="w-full h-full rounded-lg"
           
          >
             <TileLayer
              attribution=""
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> 
            {/* {filteredDetails.map(detail => (
              <Marker key={detail.id} position={[detail.latitude, detail.longitude]}>
                <Popup>
                  <strong>{detail.title}</strong><br />
                  {detail.location}<br />
                  <em>{detail.status}</em>
                </Popup>
              </Marker>
            ))} */}
          </MapContainer>
        </div>

      <div className='flex flex-row w-full gap-5'>

        <div className="bg-white rounded-xl xl:pl-10 w-6/12 shadow-md p-5">
          <h2 className="text-[#9b111e] font-bold text-2xl mb-4">Personal Details</h2>
          <div className="flex items-center  mt-5">
              <FaUser className="text-[#9b111e] lg:text-md  xl:text-2xl mr-3" />
            <div className="xl:text-lg lg:text-md font-semibold">{postedDetails.name}</div>
          </div>
          <div className="flex items-center mt-10">
              <FaMapMarkerAlt className="text-[#9b111e] lg:text-md  xl:text-2xl mr-3" />
              <div className="text-lg lg:text-md  font-semibold">{postedDetails.location }</div>
          </div>
          <div className="flex items-center mt-10">
              <FaEnvelope className="text-[#9b111e] lg:text-md  xl:text-2xl mr-3" />
              <div className="text-lg lg:text-md  font-semibold">{postedDetails.customerId.email }</div>
          </div>
          <div className="flex items-center mt-10">
              <FaPhoneAlt className="text-[#9b111e] lg:text-md  xl:text-2xl mr-3" />
              <div className="text-lg lg:text-md  font-semibold">{postedDetails.phoneNumber}</div>
          </div>
        </div>

          <div className="bg-white xl:pl-10 w-6/12 rounded-xl shadow-md p-5">
            <h2 className="text-[#9b111e] font-bold text-2xl  mb-4">Other Details</h2>
            <div className="flex items-center mt-10">
              <FaPhoneAlt className="text-[#9b111e]  xl:text-2xl lg:text-md mr-3" />
              <div className="xl:text-lg lg:text-md  font-semibold">{postedDetails.phoneNumber }</div>
            </div>
            <div className="flex items-center mt-10">
              <FaMapMarkerAlt className="text-[#9b111e]  xl:text-2xl lg:text-md  mr-3" />
              <div className="xl:text-lg lg:text-md  font-semibold">{postedDetails.location }</div>
            </div>

            <div className="flex gap-4 mt-10">
              {
                postedDetails.type === "Own" && <button
                  className={`px-4 py-2 ml-5 rounded font-semibold border ${"Own" === "Own"
                    ? "bg-[#9b111e] text-white"
                    : "bg-white text-[#9b111e] border-[#9b111e]"
                    }`}
                >
                  Own
                </button>
              }
              {
                postedDetails.type === "Other" && <button
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
          <h2 className="text-[#9b111e] font-bold text-2xl mb-4 xl:ml-5">SOS Info</h2>

          <div className='flex flex-row xl:gap-20 lg:ml-1 xl:ml-10 lg:gap-5 mt-10'>

            <div className="flex items-start mb-4">
              <FaInfoCircle className="text-[#9b111e] mt-1 text-xl sm:text-2xl" />

              <div className="ml-3 w-full">
                <div className="font-semibold text-base sm:text-lg md:text-xl mb-2">
                  Status:
                </div>

                <select
                  value={postedDetails.status}
                  onChange={(e) => updateStatus(e,uuid)}
                  className=" sm:w-72 bg-gradient-to-r from-red-500 via-red-600 to-red-700
    text-white
    rounded-lg
    px-4 py-3
    text-base sm:text-lg
    font-semibold
    shadow-lg
    focus:outline-none
    focus:ring-4 focus:ring-red-400
    transition duration-300 ease-in-out
    hover:from-red-600 hover:to-red-800
    cursor-pointer
  "
   style={{width:"150px"}}
                >
                  <option value="Not Started" className="text-black">Not Started</option>
                  <option value="In Progress" className="text-black">In Progress</option>
                  <option value="Completed" className="text-black">Completed</option>
                </select>


                <div className="flex flex-row gap-4 mt-4">
                  <div
                    className={`text-sm sm:text-base md:text-lg font-semibold inline-block px-4 py-2 rounded ${getStatusStyles(
                      postedDetails.status || "Completed"
                    )}`}
                  >
                    {postedDetails.status || "Completed"}
                  </div>
                </div>
              </div>
            </div>



          <div className='flex flex-col xl:ml-25 lg:ml-18'>

              <div className="flex items-start mb-4">
                <FaStickyNote className="text-[#9b111e]  text-2xl mr-3" />
                <div>
                  <div className="font-semibold text-lg">Note</div>
                  <div className="text-gray-600">{postedDetails.description}</div>
                </div>
              </div>

              <div className="flex items-start mt-10">
                <FaMapMarkerAlt className="text-[#9b111e]  text-2xl mr-3" />
                <div>
                  <div className="font-semibold text-lg">Location</div>
                  <div className="text-gray-600 text-2xl">{postedDetails.location}</div>
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
  