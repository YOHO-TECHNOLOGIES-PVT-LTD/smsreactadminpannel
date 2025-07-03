/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react"

import { useState, useRef } from "react"
import { FaArrowTrendUp } from "react-icons/fa6"
import { BsEye } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { MdAddCircleOutline, MdOutlineKeyboardBackspace } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { COLORS, FONTS } from "../../constants/uiConstants"
import logo from "../../assets/LOGO.jpg"
import Client from "../../api"

interface ContactInfo {
  phoneNumber: string
  state: string
  city: string
  address1: string
  address2: string
}

interface PartnerFormData {
  firstName: string
  lastName: string
  companyName?: string
  email: string
  // password: string
  contact_info: ContactInfo
  role: "partner"
  image?: File | null
}

type ServiceCenterListProps = {
  onView: (step: any) => void
  handleBack: () => void
  partner: any
  setpartner: (id: number) => void
}

export const ServiceCenterListPage: React.FC<ServiceCenterListProps> = ({
  onView,
  handleBack,
  partner,
  setpartner,
}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [showPassForm, setShowPassForm] = useState(false)
  const [showPartnerForm, setShowPartnerForm] = useState(false)
  const partnerFileInputRef = useRef<HTMLInputElement>(null)

  // Partner form state
  const [partnerFormData, setPartnerFormData] = useState<PartnerFormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    // password: "",
    contact_info: {
      phoneNumber: "",
      state: "",
      city: "",
      address1: "",
      address2: "",
    },
    role: "partner",
    image: null,
  })

  function changeData(index: number) {
    onView(1)
    console.log(index,"partner")
    setpartner(index)
  }

  // Partner form handlers
  const handlePartnerFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement

    if (name === "image" && files) {
      setPartnerFormData((prev) => ({ ...prev, image: files[0] }))
    } else if (name.startsWith("contact_info.")) {
      const key = name.split(".")[1] as keyof ContactInfo
      setPartnerFormData((prevData) => ({
        ...prevData,
        contact_info: {
          ...prevData.contact_info,
          [key]: value,
        },
      }))
    } else {
      setPartnerFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const handlePartnerFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = new FormData()
    Object.entries(partnerFormData).forEach(([key, value]) => {
      if (key === "contact_info") {
        Object.entries(value).forEach(([subKey, subValue]) => {
          data.append(`contact_info.${subKey}`, String(subValue))
        })
      } else if (key === "image" && value instanceof File) {
        data.append("image", value)
      } else if (value !== undefined && value !== null) {
        data.append(key, value as string)
      }
    })

    try {
      const response: any = await new Client().admin.servicecenter.postPartner(data)
      console.log(response.data)

      // Reset form and close modal
      setPartnerFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        // password: "",
        contact_info: {
          phoneNumber: "",
          state: "",
          city: "",
          address1: "",
          address2: "",
        },
        role: "partner",
        image: null,
      })
      setShowPartnerForm(false)
      if (partnerFileInputRef.current) {
        partnerFileInputRef.current.value = ""
      }

     

      alert("Partner registered successfully!")
      // You might want to refresh the partner list here
    } catch (error:any) {
      console.log("Registration failed!",error.message)
    }
  }

  const handleCancelPartnerForm = () => {
    setShowPartnerForm(false)
    setPartnerFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      // password: "",
      contact_info: {
        phoneNumber: "",
        state: "",
        city: "",
        address1: "",
        address2: "",
      },
      role: "partner",
      image: null,
    })
    if (partnerFileInputRef.current) {
      partnerFileInputRef.current.value = ""
    }
  }

  // Filter partners based on search term
  const filteredPartners = partner.filter(
    (center: any) =>
      `${center.firstName} ${center.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.companyName?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col bg-gray-100" style={{ background: COLORS.bgColor }}>
      <div className="flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[600px] bg-white p-5" style={{ background: COLORS.bgColor }}>
          <div className="t-0" style={{ background: COLORS.bgColor }}>
            <button onClick={handleBack}>
              <MdOutlineKeyboardBackspace className="text-[#800000] text-3xl" />
            </button>
          </div>

          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4 flex-wrap gap-4">
            <h1 className="font-bold font-koh font-normal text-3xl pt-2 text-[#9b111e]">Service Center</h1>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                className="bg-[#fce8e8] font-koh text-gray-600 hover:text-[#9b111e] p-2 rounded-full transition"
                title="Search"
                onClick={() => setShowSearch(!showSearch)}
              >
                <FiSearch size={22} className="text-[#800000] font-koh" />
              </button>

              {showSearch && (
                <input
                  type="text"
                  className="px-4 py-1.5 border border-[#800000] focus:border-[#800000] rounded-md shadow-sm focus:outline-none"
                  placeholder="Search service centers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              )}

              <button
                className="!text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
                style={{ ...FONTS.paragraph, background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)"}}
                onClick={() => setShowPartnerForm(true)}
              >
                <MdAddCircleOutline size={18} /> Add
              </button>
            </div>
          </div>
          

          <div className="flex flex-col gap-4 mt-4" >
            {filteredPartners.map((center: any, index: number) => (
              <div key={index}>
                <div className="bg-white p-6 rounded-lg shadow flex flex-col sm:flex-row gap-20 items-start w-full max-w-[2000px]">
                  <img
                    src={center.image || logo}
                    alt={center.firstName}
                    className="w-72 h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800" style={{ ...FONTS.cardheader}}>
                      {center.firstName}&nbsp;{center.lastName}
                    </h3>
                    <div className="flex gap-2 text-base mt-2 text-gray-700 flex-wrap">
                      <span className="bg-[#fce8e8] text-[#800000] px-2 py-0.5 rounded">{center.rating} ★</span>
                      <span className="text-yellow-600" style={{ ...FONTS.paragraph}}>1,548 Services</span>
                    </div>
                    <div className="flex gap-2 mt-1 text-yellow-600 flex-wrap">
                      <span className="flex items-center gap-1">
                        <span className="bg-yellow-400 text-white p-1 rounded-full">
                          <FaArrowTrendUp size={12} />
                        </span>
                        Popular
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 border-[1px] border-[#800000] bg-[#F9E6E6] px-2 py-1 rounded inline-block w-fit mt-5" style={{ ...FONTS.subParagraph}}>
                      {center.contact_info.address1}, {center.contact_info.address2}, {center.contact_info.city}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-2 sm:mt-0">
                    {/* {selectedCardIndex !== index && ( */}
                      <button
                        onClick={() => changeData(index)}
                        className="!text-white px-4 py-2 rounded-md transition duration-200 flex items-center gap-1.5 text-sm"
                        style={{ ...FONTS.paragraph,
                          background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)",
                        }}
                      >
                        <BsEye size={16} /> View
                      </button>
                    {/* )} */}
                  </div>
                </div>

                {selectedCardIndex === index && (
                  <div className="mt-4 relative border rounded-md p-4 bg-gray-50">
                    <button
                      onClick={() => setSelectedCardIndex(null)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-red-600 pt-5 pr-5"
                    >
                      <IoClose size={30} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Registration Modal */}
      {showPartnerForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold !text-gray-900"
                style={{...FONTS.header}}
                >Partner Registration</h3>
                <button
                  onClick={handleCancelPartnerForm}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <IoClose size={24} className="text-gray-500" />
                </button>
              </div>
            </div>

            <form onSubmit={handlePartnerFormSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
              style={{...FONTS.paragraph}}
              >
                {/* Column 1 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First Name"
                      value={partnerFormData.firstName}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Last Name"
                      value={partnerFormData.lastName}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={partnerFormData.companyName}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={partnerFormData.email}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>
{/* 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      value={partnerFormData.password}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div> */}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contact_info.phoneNumber"
                      required
                      placeholder="Phone Number"
                      value={partnerFormData.contact_info.phoneNumber}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      name="contact_info.state"
                      placeholder="State"
                      value={partnerFormData.contact_info.state}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="contact_info.city"
                      placeholder="City"
                      value={partnerFormData.contact_info.city}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                    <input
                      type="text"
                      name="contact_info.address1"
                      placeholder="Address Line 1"
                      value={partnerFormData.contact_info.address1}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                    <input
                      type="text"
                      name="contact_info.address2"
                      placeholder="Address Line 2"
                      value={partnerFormData.contact_info.address2}
                      onChange={handlePartnerFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Profile Image</label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      ref={partnerFileInputRef}
                      onChange={handlePartnerFormChange}
                      className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer bg-white file:bg-gray-200 file:text-gray-700 file:border-none file:rounded file:px-4 file:py-2 hover:file:bg-gray-300 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Full width submit button */}
              <div className="mt-8">
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleCancelPartnerForm}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowPassForm(true)}
                    type="submit"
                    className="px-6 py-2 text-white font-semibold rounded-md hover:opacity-90 transition"
                    style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

    
    {showPassForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-4 rounded">
      <h1>Hello world</h1>
      <button onClick={() => setShowPassForm(false)}>Close</button>
    </div>
  </div>
)}

    </div>
  )
}
