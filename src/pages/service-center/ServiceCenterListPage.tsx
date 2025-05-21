import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoCallOutline, IoFilterSharp } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";

const centers = [
  {
    name: "Hyundai Accent",
    rating: 4.6,
    location: "South Bypass Road OMR, Chennai",
    image:
      "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Hyundai Creta",
    rating: 4.4,
    location: "South Bypass Road Tambaram, Chennai",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/025/288/111/small_2x/golden-car-with-blue-headlights-with-mountains-in-the-background-ai-generated-photo.jpg",
  },
  {
    name: "Hyundai Elantra",
    rating: 4.4,
    location: "South Bypass Road Tambaram, Chennai",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/025/288/127/small_2x/black-car-on-street-at-city-ai-generated-photo.jpg",
  },
];

const ServiceCard = ({ image, name, rating, location }: any) => (
  <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4 items-start">
    <img src={image} alt={name} className="w-32 h-20 object-cover rounded" />
    <div className="flex-1">
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="flex gap-2 text-sm mt-1 text-gray-600">
        <span className="bg-[#fce8e8] text-[#800000] px-2 py-0.5 rounded">
          {rating} ★
        </span>
        <span className="text-yellow-600">1,548 Ratings</span>
        <span className="text-yellow-600 flex items-center gap-1">
          <span className="bg-yellow-400 text-white p-1 rounded-full">
            <FaArrowTrendUp size={12} />
          </span>
          Popular
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{location}</p>
      <div className="flex flex-wrap gap-2 mt-2 text-xs">
        <span className="bg-gray-200 px-2 py-0.5 rounded">Company Authorised Dealer</span>
        <span className="bg-gray-200 px-2 py-0.5 rounded">Credit & Debit Card Facility</span>
        <span className="bg-gray-200 px-2 py-0.5 rounded">Shop in Store</span>
      </div>
    </div>
    <div className="flex gap-2 mt-2 sm:mt-0">
      <button className="bg-yellow-400 text-white p-2 rounded">
        <IoCallOutline />
      </button>
      <button className="bg-green-500 text-white p-2 rounded">
        <RiMessage2Line />
      </button>
      <button className="bg-blue-500 text-white p-2 rounded">
        <PiWhatsappLogoThin />
      </button>
    </div>
  </div>
);

const EnquirySidebar = () => (
  <div className="w-[300px] h-fit shrink-0 bg-white p-4 rounded shadow">
    <h3 className="font-semibold mb-2">Get the list of Top Car Repair & Services</h3>
    <p className="text-sm text-gray-500 mb-4">
      We'll send you contact details in seconds for free
    </p>
    <p className="font-semibold mb-2 whitespace-nowrap">
      What kind of Assistance do you need?
    </p>
    <div className="flex gap-4 mb-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="assistance" defaultChecked className="accent-[#800000] w-4 h-4" />
        Servicing
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="assistance" className="accent-[#800000] w-4 h-4" />
        Repair
      </label>
    </div>
    <input type="text" placeholder="Name" className="w-full border p-2 rounded mb-2" />
    <input type="text" placeholder="Mobile Number" className="w-full border p-2 rounded mb-4" />
    <button className="text-white w-full py-2 rounded-lg transition hover:opacity-90" style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}>
      Send Enquiry
    </button>
  </div>
);

const PeopleAlsoSearch = () => {
  const items = [
    {
      title: "Car Servicessss",
      listings: "905+ listings",
      image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
    },
    {
      title: "AC Repair",
      listings: "805+ listings",
      image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      title: "Denting",
      listings: "306+ listings",
      image: "https://tse1.mm.bing.net/th?id=OIP.uQIJb1TyA7jlthe248QeFgHaEK&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-95 mt-0">
      <h3 className="font-semibold text-gray-800 mb-4">People also Search for</h3>
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-2 border border-gray-100 rounded-lg hover:shadow-sm transition">
            <img src={item.image} alt={item.title} className="w-32 h-20 object-cover rounded-md" />
            <div className="flex flex-col justify-center">
              <p className="font-medium text-base">{item.title}</p>
              <p className="text-sm text-gray-500 mb-1">{item.listings}</p>
              <button className="text-xs px-3 py-1 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 w-fit">
                Get Best Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const ServiceCenterFilter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">List of Service Centers</h3>
        <IoFilterSharp className="text-xl text-gray-600 cursor-pointer" onClick={() => setShowFilters(!showFilters)} />
      </div>

      {showFilters && (
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <div className="flex flex-wrap gap-6">

            <div className="relative inline-block ">
              <select className="px-12 pr-20 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
                <option className="bg-[#800000] text-white">Sort By</option>
                <option className="bg-[#800000] text-white">Price</option>
                <option className="bg-[#800000] text-white">Popularity</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#800000]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>



            <div className="relative inline-block ">
              <select className="px-12 pr-20 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
                <option className="bg-[#800000] text-white"> Services</option>
                <option className="bg-[#800000] text-white">Oil change</option>
                <option className="bg-[#800000] text-white">AC Repair</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#800000]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>


            <button className="px-12 py-2 pr-19 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none">
              ⚡ Quick Response
            </button>
            <div className="relative inline-block ">
              <select className="px-12 pr-20 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
                <option className="bg-[#800000] text-white">Ratings</option>
                <option className="bg-[#800000] text-white">4+ Stars</option>
                <option className="bg-[#800000] text-white">3+ Stars</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#800000]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// Main page component
export const ServiceCenterListPage = () => {

  // Sample service center data
  const centers = [
    {
      name: "Hyundai Accent",
      rating: 4.6,
      location: "South Bypass Road OMR, Chennai",
      image:
        "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      name: "Hyundai Creta",
      rating: 4.4,
      location: "South Bypass Road Tambaram, Chennai",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/025/288/111/small_2x/golden-car-with-blue-headlights-with-mountains-in-the-background-ai-generated-photo.jpg",
    },
    {
      name: "Hyundai Elantra",
      rating: 4.4,
      location: "South Bypass Road Tambaram, Chennai",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/025/288/127/small_2x/black-car-on-street-at-city-ai-generated-photo.jpg",
    },
  ];

  // Service card component
  const ServiceCard = ({ image, name, rating, location }: any) => (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4 items-start">
      <img src={image} alt={name} className="w-32 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="flex gap-2 text-sm mt-1 text-gray-600">
          <span className="bg-[#fce8e8] text-[#800000] px-2 py-0.5 rounded">
            {rating} ★
          </span>
          <span className="text-yellow-600">1,548 Ratings</span>
          <span className="text-yellow-600 flex items-center gap-1">
            <span className="bg-yellow-400 text-white p-1 rounded-full">
              <FaArrowTrendUp size={12} />
            </span>
            Popular
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{location}</p>
        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          <span className="bg-gray-200 px-2 py-0.5 rounded">Company Authorised Dealer</span>
          <span className="bg-gray-200 px-2 py-0.5 rounded">Credit & Debit Card Facility</span>
          <span className="bg-gray-200 px-2 py-0.5 rounded">Shop in Store</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button className="bg-yellow-400 text-white p-2 rounded">
          <IoCallOutline />
        </button>
        <button className="bg-green-500 text-white p-2 rounded">
          <RiMessage2Line />
        </button>
        <button className="bg-blue-500 text-white p-2 rounded">
          <PiWhatsappLogoThin />
        </button>
      </div>
    </div>
  );

  // Sidebar component
  const EnquirySidebar = () => (
    <div className="w-[300px] h-fit shrink-0 bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Get the list of Top Car Repair & Services</h3>
      <p className="text-sm text-gray-500 mb-4">
        We'll send you contact details in seconds for free
      </p>
      <p className="font-semibold mb-2 whitespace-nowrap">
        What kind of Assistance do you need?
      </p>
      <div className="flex gap-4 mb-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="assistance"
            defaultChecked
            className="accent-[#800000] w-4 h-4"
          />
          Servicing
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="assistance" className="accent-[#800000] w-4 h-4" />
          Repair
        </label>
      </div>
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 rounded mb-2"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        className="w-full border p-2 rounded mb-4"
      />
      <button
        className="text-white w-full py-2 rounded-lg transition hover:opacity-90"
        style={{
          background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)",
        }}
      >
        Send Enquiry
      </button>
    </div>
  );


  const PeopleAlsoSearch = () => {
    const items = [
      {
        title: "Car Servicessss",
        listings: "905+ listings",
        image:
          "https://images.pexels.com/photos/3806286/pexels-photo-3806286.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        title: "AC Repair",
        listings: "805+ listings",
        image:
          "https://images.pexels.com/photos/6870324/pexels-photo-6870324.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        title: "Denting",
        listings: "306+ listings",
        image:
          "https://images.pexels.com/photos/3807337/pexels-photo-3807337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ];

    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-95 mt-0">
        <h3 className="font-semibold text-gray-800 mb-4">People also Search for</h3>
        <div className="flex flex-col gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-2 border border-gray-100 rounded-lg hover:shadow-sm transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col justify-center">
                <p className="font-medium text-base">{item.title}</p>
                <p className="text-sm text-gray-500 mb-1">{item.listings}</p>
                <button className="text-xs px-3 py-1 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 w-fit">
                  Get Best Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
       <div className="flex flex-col gap-6 p-6 bg-gray-100">
      <div className="flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[600px] bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Service Center Management</h2>
            <button className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2" style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}>
              <CiEdit size={18} /> Edit
            </button>
          </div>
          <ServiceCenterFilter />
          <div className="flex flex-col gap-4 mt-4">
            {centers.map((center, idx) => (
              <ServiceCard key={idx} {...center} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <EnquirySidebar />
          <PeopleAlsoSearch />
        </div>
      </div>
    </div>
    </>
  );
};

