import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoCallOutline, IoFilterSharp } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import ServiceCenterProfileView from "./ServiceCenterprofileview";
import { ServiceManagementPage } from "./ServiceManagementPage";
import { COLORS } from "../../constants/uiConstants";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FONTS } from "../../constants/uiConstants";
import { MdDeleteSweep, MdOutlineEditCalendar } from "react-icons/md";


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
          <div className="flex flex-wrap gap-12">

            <div className="relative inline-block ">
              <select className="px-12 pr-10 py-2  border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
                <option className="bg-[#800000] text-white ">Sort By</option>
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
              <select className="px-12 pr-10 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
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
            <button className="px-12 py-2 pr-10 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none">
              ⚡ Quick Response
            </button>
            <div className="relative inline-block ">
              <select className="px-12 pr-10 py-2 border border-[#800000] rounded-md shadow-sm bg-[#fce8e8] text-[#800000] focus:outline-none appearance-none w-full">
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

  const [tab, setTab] = useState<String>("")

  const handleView = (tabText: String) => {
    setTab(tabText)
  }
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
    <><div className="bg-white p-10 rounded-lg shadow flex flex-col sm:flex-row gap-4 items-start">
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


      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button onClick={() => handleView("Profile View")}
          className="text-white px-2 w-15 py-1.5 rounded-md transition duration-200 flex items-center gap-1.5 text-sm"
          style={{
            background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)",
          }}
        >
          <BsEye size={16} /> View
        </button>


      </div>
    </div>
    <div> 
      {tab === "Profile View" && (<ServiceCenterProfileView handleView={handleView} />)}
      {tab === "Services View" && <div><div className="flex p-4 pb-8 sticky top-0  rounded-t-xl shadow-inner-top border-b-2 border-orange-700" style={{ backgroundColor: COLORS.bgColor }}>
        <h1 className="font-bold text-3xl pt-2 pl-0" style={{ color: "#9b111e" }}>Service Management System</h1>
        <button className="flex static bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-auto " style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}><IoIosAddCircleOutline className="mt-1 mr-2 " />Add</button>
      </div>

<div id="accordion-collapse" data-accordion="collapse" >
  <h2 id="accordion-collapse-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Car Wash</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Car Painting</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Full Service</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
</div>}
    </div></>
  );


  return (
    <>
      <div className="flex flex-col gap-6 p-6 bg-gray-100">
        <div className="flex gap-6 flex-wrap">
          <div className="flex-1 min-w-[600px] bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4 sticky">
              <h2 className="text-2xl font-semibold text-gray-800" style={{ color: "#9b111e" }}>Service Center Management</h2>
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
          </div>
        </div>
      </div>
    </>
  );
};

