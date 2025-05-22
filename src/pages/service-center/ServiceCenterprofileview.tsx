import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { AiFillSafetyCertificate, AiOutlineAudit } from "react-icons/ai";
import { FaCodeBranch, FaPhoneVolume, FaRegAddressCard } from "react-icons/fa6";
import { MdEmail, MdVerified } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FcDataEncryption } from "react-icons/fc";
import { BiSolidCertification } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react'
import { ServiceManagementPage } from "./ServiceManagementPage";



const ServiceCenterProfileView: React.FC = () => {
    // const [tab, setTab] = useState <String>("");

    // const handleServiceView = (tabText: String)=>{
    //     handleView(tabText)
    // }

    return (
        <div className="bg-neutral-100 min-h-screen py-12 px-4">
            <div className="bg-white rounded-3xl shadow-lg p-8 space-y-8 w-full">
                {/* Title */}
                <h2 className="text-2xl font-bold">Profile</h2>

                {/* Header and Button */}
                <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-extrabold text-black">Hyundai Accent</h3>
                    <button 
                        className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
                        style={{
                            background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)",
                        }}
                        
                    >
                        <FaArrowRight size={18} /> Services
                    </button>
                </div>

                {/* Full-width bottom line */}
                <div className="w-full h-px bg-gray-300 mt-4" />

                {/* Contact Information */}
                <h2 className="text-2xl font-bold">Contact Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black text-base">
                    {/* Company Details */}
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <BsBuildings />
                                    <p>Company Name</p>
                                </div>
                                <p className="text-lg text-gray-700">Hyundai Accent</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <SlCalender />
                                    <p>Established</p>
                                </div>
                                <p className="text-lg text-gray-700">2005</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <FaCodeBranch />
                                    <p>Branches</p>
                                </div>
                                <p className="text-lg text-gray-700">35</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <AiFillSafetyCertificate />
                                    <p>EV Certified</p>
                                </div>
                                <p className="text-lg text-gray-700">Yes</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                        <div className="space-y-3">
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <FaPhoneVolume />
                                    <p>Phone</p>
                                </div>
                                <p className="text-lg text-gray-800">+91 98765 43210</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <MdEmail />
                                    <p>Email</p>
                                </div>
                                <p className="text-lg text-gray-800">support@autonova.com</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <CgWebsite />
                                    <p>Website</p>
                                </div>
                                <p className="text-lg text-gray-800">www.autonova.com</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <FaRegAddressCard />
                                    <p>Address</p>
                                </div>
                                <p className="text-lg text-gray-800">123 EV Road, Chennai, Tamil Nadu</p>
                            </div>
                        </div>
                    </div>

                    {/* Security Info */}
                    <div className="space-y-2">
                        <div className="space-y-3">
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <FcDataEncryption />
                                    <p>Data Encrypted:</p>
                                </div>
                                <p className="text-lg text-gray-800">Yes</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <MdVerified />
                                    <p>Verified Center:</p>
                                </div>
                                <p className="text-lg text-gray-800">✔️</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <AiOutlineAudit />
                                    <p>Last Audit:</p>
                                </div>
                                <p className="text-lg text-gray-800">Jan 2025</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <BiSolidCertification />
                                    <p>Certification:</p>
                                </div>
                                <p className="text-lg text-gray-800">ISO 27001</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Information Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-6">Login Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black text-base">
                        <div>
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <FaUserCircle />
                                <p>Username</p>
                            </div>
                            <p className="text-lg text-gray-700">autonova_admin</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <MdOutlineMailOutline />
                                <p>Email</p>
                            </div>
                            <p className="text-lg text-gray-700">abc@gmail.com</p>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <RiLockPasswordLine />
                                <p>Password</p>
                            </div>
                            <p className="text-lg text-gray-700">abc@123456</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCenterProfileView;
