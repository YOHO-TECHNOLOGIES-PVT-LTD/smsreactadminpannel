import React, { useState, useEffect } from "react";
import {
    FaArrowRight,
    FaCodeBranch,
    FaRegAddressCard,
    FaUserCircle,
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { AiFillSafetyCertificate, AiOutlineAudit } from "react-icons/ai";
import { MdEmail, MdVerified, MdOutlineMailOutline, MdOutlineKeyboardBackspace } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FcDataEncryption } from "react-icons/fc";
import { BiSolidCertification } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { FONTS } from "../../constants/uiConstants";
import Client from "../../api";

type ServiceCenterProfileProps = {
    onServices: () => void;
    handleBack: () => void;
    setpartnerId:(id:string) =>void
    partner:any;
};

const ServiceCenterProfileView: React.FC<ServiceCenterProfileProps> = ({ onServices, handleBack ,partner, setpartnerId}) => {
    const [isActive, setIsActive] = useState(true);
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingStatus, setPendingStatus] = useState<boolean | null>(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showDeleteSuccessPopup, setShowDeleteSuccessPopup] = useState(false);

    // Contact Info State
    const [editCompanyName, setEditCompanyName] = useState(partner?.companyName || "yes mechanic");
    const [editEstablished, setEditEstablished] = useState("2005");
    const [editBranches, setEditBranches] = useState("35");
    const [editEvCertified, setEditEvCertified] = useState("Yes");
    const [editPhone, setEditPhone] = useState(partner?.contact_info?.phoneNumber);
    const [editEmail, setEditEmail] = useState(partner?.email);
    const [editWebsite, setEditWebsite] = useState("www.autonova.com");
    const [editAddress, setEditAddress] = useState(partner?.contact_info?.address1 +' '+ partner?.contact_info?.address2+' '+partner?.contact_info?.city + ' '+ partner?.contact_info?.state);
    const [editDataEncrypted, setEditDataEncrypted] = useState("Yes");
    const [editVerifiedCenter, setEditVerifiedCenter] = useState("✔️");
    const [editLastAudit, setEditLastAudit] = useState("Jan 2025");
    const [editCertification, setEditCertification] = useState("ISO 27001");

    // Login Info State
    const [editUsername, setEditUsername] = useState("autonova_admin");
    const [editLoginEmail, setEditLoginEmail] = useState(partner?.email);
    const [editPassword, setEditPassword] = useState("abc@123456");

    const handleToggle = () => {
        setPendingStatus(!isActive);
        setShowConfirm(true);
    };

    const confirmChange = () => {
        if (pendingStatus !== null) {
            setIsActive(pendingStatus);
            setShowConfirm(false);
        }
    };

    const cancelChange = () => {
        setPendingStatus(null);
        setShowConfirm(false);
    };

    const confirmDelete = async () => {
        setShowDeleteConfirm(false);
        try {
            await new Client().admin.servicecenter.delete(); 
            console.log("Service Center Deleted");
            setShowDeleteSuccessPopup(true);
            handleBack(); 
        } catch (error) {
            console.error("Error deleting service center:", error);
            
        }
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
    };

    const handleEditSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const data:any = {
            editCompanyName,
            editEstablished,
            editBranches,
            editEvCertified,
            editPhone,
            editEmail,
            editWebsite,
            editAddress,
            editDataEncrypted,
            editVerifiedCenter,
            editLastAudit,
            editCertification,
            editUsername,
            editLoginEmail,
            editPassword
        }
        try {
            const response:any = await new Client().admin.servicecenter.update(data,partner._id)
            console.log(response)
        } catch (error) {
            console.log("profile update", error)
        }
        setShowEditForm(false);
        setShowSuccessPopup(true);
    };

    useEffect(() => {
        if (showSuccessPopup) {
            const timer = setTimeout(() => setShowSuccessPopup(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showSuccessPopup]);

    useEffect(() => {
        if (showDeleteSuccessPopup) {
            const timer = setTimeout(() => setShowDeleteSuccessPopup(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showDeleteSuccessPopup]);

    function onChangeCat(id:string){
        setpartnerId(id)
        onServices()
    }
    function saveChanges(){
       
    }

    return (
        <div className="min-h-screen p-6" style={{ fontFamily: FONTS.paragraph.fontSize }}>
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <button 
                    onClick={handleBack} 
                    className="flex items-center gap-2 text-[#9b111e] hover:text-[#800000] transition-colors"
                >
                    <MdOutlineKeyboardBackspace className="text-2xl" />
                    <span className="font-medium">Back</span>
                </button>
                <h2 className="text-3xl font-bold text-[#9b111e]">Service Center Profile</h2>
                <div className="w-10"></div> {/* Spacer for alignment */}
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-r from-[#9b111e] to-[#d23c3c]">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="bg-white p-2 rounded-full">
                            <img 
                                src="https://logodix.com/logo/2004138.jpg" 
                                alt="Logo" 
                                className="w-16 h-16 object-contain" 
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{partner?.firstName + ' '+ partner?.lastName}</h3>
                    </div>
                    <button
                        onClick={()=>onChangeCat(partner._id)}
                        className="flex items-center gap-2 bg-white text-[#9b111e] px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm"
                    >
                        <span>View Services</span>
                        <FaArrowRight size={16} />
                    </button>
                </div>

                <div className="p-6">
                    {/* Status Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-3 md:mb-0">
                            <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="text-sm font-medium text-gray-700">
                                {isActive ? "Active" : "Inactive"} Service Center
                            </span>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isActive}
                                onChange={handleToggle}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-6"></div>

                    {/* Contact Information Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-[#9b111e] mb-4 pb-2 border-b border-gray-200">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-5">
                                <InfoItem icon={<BsBuildings className="text-[#9b111e]" />} label="Company Name" value={editCompanyName} />
                                <InfoItem icon={<SlCalender className="text-[#9b111e]" />} label="Established" value={editEstablished} />
                                <InfoItem icon={<FaCodeBranch className="text-[#9b111e]" />} label="Branches" value={editBranches} />
                                <InfoItem icon={<AiFillSafetyCertificate className="text-[#9b111e]" />} label="EV Certified" value={editEvCertified} />
                            </div>
                            <div className="space-y-5">
                                <InfoItem icon={<LuPhoneCall className="text-[#9b111e]" />} label="Phone" value={editPhone} />
                                <InfoItem icon={<MdEmail className="text-[#9b111e]" />} label="Email" value={editEmail} />
                                <InfoItem icon={<CgWebsite className="text-[#9b111e]" />} label="Website" value={editWebsite} />
                                <InfoItem icon={<FaRegAddressCard className="text-[#9b111e]" />} label="Address" value={editAddress} />
                            </div>
                            <div className="space-y-5">
                                <InfoItem icon={<FcDataEncryption className="text-[#9b111e]" />} label="Data Encrypted" value={editDataEncrypted} />
                                <InfoItem icon={<MdVerified className="text-[#9b111e]" />} label="Verified Center" value={editVerifiedCenter} />
                                <InfoItem icon={<AiOutlineAudit className="text-[#9b111e]" />} label="Last Audit" value={editLastAudit} />
                                <InfoItem icon={<BiSolidCertification className="text-[#9b111e]" />} label="Certification" value={editCertification} />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-6"></div>

                    {/* Login Information Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-[#9b111e] mb-4 pb-2 border-b border-gray-200">Login Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <InfoItem icon={<FaUserCircle className="text-[#9b111e]" />} label="Username" value={editUsername} />
                            <InfoItem icon={<MdOutlineMailOutline className="text-[#9b111e]" />} label="Email" value={editLoginEmail} />
                            <InfoItem icon={<RiLockPasswordLine className="text-[#9b111e]" />} label="Password" value="••••••••" />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={() => setShowEditForm(true)}
                            className="flex items-center justify-center gap-2 bg-[#9b111e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#800000] transition-colors"
                        >
                            <FaEdit /> Edit Profile
                        </button>
                        <button
                            onClick={() => setShowDeleteConfirm(true)}
                            className="flex items-center justify-center gap-2 bg-white text-red-600 border border-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
                        >
                            <FaTrash /> Delete Center
                        </button>
                    </div>
                </div>
            </div>

            {/* Confirmation Modals */}
            {showConfirm && (
                <ConfirmationModal
                    title={pendingStatus ? "Activate Service Center?" : "Deactivate Service Center?"}
                    message={pendingStatus ? "This will make the service center visible and available for bookings." : "This will hide the service center from customers and prevent new bookings."}
                    onConfirm={confirmChange}
                    onCancel={cancelChange}
                />
            )}

            {showDeleteConfirm && (
                <ConfirmationModal
                    title="Delete Service Center?"
                    message="This action cannot be undone. All associated data will be permanently removed."
                    confirmText="Delete"
                    confirmColor="bg-red-600 hover:bg-red-700"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}

            {/* Enhanced Edit Form Modal */}
            {showEditForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <form
                        onSubmit={handleEditSubmit}
                        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                    >
                        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-[#9b111e]">Edit Profile Information</h2>
                            <button
                                type="button"
                                onClick={() => setShowEditForm(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Contact Information Section */}
                            <div className="space-y-6">
                                <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-[#9b111e] mb-4 flex items-center gap-2">
                                        <BsBuildings className="text-[#9b111e]" />
                                        Contact Information
                                    </h3>
                                    <div className="space-y-4">
                                        <EnhancedEditField 
                                            icon={<BsBuildings className="text-[#9b111e]" />}
                                            label="Company Name" 
                                            value={editCompanyName} 
                                            onChange={setEditCompanyName} 
                                        />
                                        <EnhancedEditField 
                                            icon={<SlCalender className="text-[#9b111e]" />}
                                            label="Established" 
                                            value={editEstablished} 
                                            onChange={setEditEstablished} 
                                        />
                                        <EnhancedEditField 
                                            icon={<FaCodeBranch className="text-[#9b111e]" />}
                                            label="Branches" 
                                            value={editBranches} 
                                            onChange={setEditBranches} 
                                        />
                                        <EnhancedEditField 
                                            icon={<AiFillSafetyCertificate className="text-[#9b111e]" />}
                                            label="EV Certified" 
                                            value={editEvCertified} 
                                            onChange={setEditEvCertified} 
                                        />
                                        <EnhancedEditField 
                                            icon={<LuPhoneCall className="text-[#9b111e]" />}
                                            label="Phone" 
                                            value={editPhone} 
                                            onChange={setEditPhone} 
                                        />
                                        <EnhancedEditField 
                                            icon={<MdEmail className="text-[#9b111e]" />}
                                            label="Email" 
                                            value={editEmail} 
                                            onChange={setEditEmail} 
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="space-y-6">
                                <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-[#9b111e] mb-4 flex items-center gap-2">
                                        <CgWebsite className="text-[#9b111e]" />
                                        Website & Address
                                    </h3>
                                    <div className="space-y-4">
                                        <EnhancedEditField 
                                            icon={<CgWebsite className="text-[#9b111e]" />}
                                            label="Website" 
                                            value={editWebsite} 
                                            onChange={setEditWebsite} 
                                        />
                                        <EnhancedEditField 
                                            icon={<FaRegAddressCard className="text-[#9b111e]" />}
                                            label="Address" 
                                            value={editAddress} 
                                            onChange={setEditAddress} 
                                            textarea
                                        />
                                    </div>
                                </div>

                                <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-[#9b111e] mb-4 flex items-center gap-2">
                                        <RiLockPasswordLine className="text-[#9b111e]" />
                                        Login Information
                                    </h3>
                                    <div className="space-y-4">
                                        <EnhancedEditField 
                                            icon={<FaUserCircle className="text-[#9b111e]" />}
                                            label="Username" 
                                            value={editUsername} 
                                            onChange={setEditUsername} 
                                        />
                                        <EnhancedEditField 
                                            icon={<MdOutlineMailOutline className="text-[#9b111e]" />}
                                            label="Login Email" 
                                            value={editLoginEmail} 
                                            onChange={setEditLoginEmail} 
                                        />
                                        <EnhancedEditField 
                                            icon={<RiLockPasswordLine className="text-[#9b111e]" />}
                                            label="Password" 
                                            value={editPassword} 
                                            onChange={setEditPassword} 
                                            type="password"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Third Column */}
                            <div className="md:col-span-2">
                                <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-[#9b111e] mb-4 flex items-center gap-2">
                                        <BiSolidCertification className="text-[#9b111e]" />
                                        Additional Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <EnhancedEditField 
                                            icon={<FcDataEncryption className="text-[#9b111e]" />}
                                            label="Data Encrypted" 
                                            value={editDataEncrypted} 
                                            onChange={setEditDataEncrypted} 
                                        />
                                        <EnhancedEditField 
                                            icon={<MdVerified className="text-[#9b111e]" />}
                                            label="Verified Center" 
                                            value={editVerifiedCenter} 
                                            onChange={setEditVerifiedCenter} 
                                        />
                                        <EnhancedEditField 
                                            icon={<AiOutlineAudit className="text-[#9b111e]" />}
                                            label="Last Audit" 
                                            value={editLastAudit} 
                                            onChange={setEditLastAudit} 
                                        />
                                        <EnhancedEditField 
                                            icon={<BiSolidCertification className="text-[#9b111e]" />}
                                            label="Certification" 
                                            value={editCertification} 
                                            onChange={setEditCertification} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setShowEditForm(false)}
                                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                onClick={saveChanges}
                                className="px-6 py-2 bg-[#9b111e] text-white rounded-lg hover:bg-[#800000] transition-colors flex items-center gap-2"
                            >
                                <FaEdit /> Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Success Popups */}
            {showSuccessPopup && (
                <Popup 
                    message="Profile updated successfully!" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>}
                />
            )}

            {showDeleteSuccessPopup && (
                <Popup 
                    message="Service center deleted successfully!" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>}
                />
            )}
        </div>
    );
};

const InfoItem = ({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) => (
    <div className="flex items-start gap-3">
        <div className="mt-1 text-lg">{icon}</div>
        <div>
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="text-lg font-normal text-gray-800">{value}</p>
        </div>
    </div>
);

const EnhancedEditField = ({
    icon,
    label,
    value,
    onChange,
    type = "text",
    textarea = false
}: {
    icon?: React.ReactNode;
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    textarea?: boolean;
}) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            {icon}
            <span>{label}</span>
        </label>
        {textarea ? (
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b111e] focus:border-[#9b111e] outline-none transition min-h-[100px]"
                rows={3}
            />
        ) : (
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b111e] focus:border-[#9b111e] outline-none transition"
            />
        )}
    </div>
);

const ConfirmationModal = ({
    title,
    message,
    confirmText = "Confirm",
    confirmColor = "bg-[#9b111e] hover:bg-[#800000]",
    onConfirm,
    onCancel,
}: {
    title: string;
    message?: string;
    confirmText?: string;
    confirmColor?: string;
    onConfirm: () => void;
    onCancel: () => void;
}) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                {message && <p className="text-gray-600 mb-6">{message}</p>}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 text-white rounded-lg transition-colors ${confirmColor}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const Popup = ({ message, icon }: { message: string; icon?: React.ReactNode }) => (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-[#9b111e] text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in-out">
        {icon}
        <span>{message}</span>
    </div>
);

export default ServiceCenterProfileView;