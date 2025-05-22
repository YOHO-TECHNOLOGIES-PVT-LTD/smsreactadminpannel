import React, { useState, useEffect } from "react";
import {
    FaArrowRight,
    FaCodeBranch,
    FaRegAddressCard,
    FaUserCircle,
} from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { AiFillSafetyCertificate, AiOutlineAudit } from "react-icons/ai";
import { MdEmail, MdVerified, MdOutlineMailOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FcDataEncryption } from "react-icons/fc";
import { BiSolidCertification } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";

const ServiceCenterProfileView: React.FC = () => {
    const [isActive, setIsActive] = useState(true);
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingStatus, setPendingStatus] = useState<boolean | null>(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showDeleteSuccessPopup, setShowDeleteSuccessPopup] = useState(false);

    const [editUsername, setEditUsername] = useState("autonova_admin");
    const [editEmail, setEditEmail] = useState("abc@gmail.com");
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

    const confirmDelete = () => {
        setShowDeleteConfirm(false);
        console.log("Service Center Deleted");
        setShowDeleteSuccessPopup(true);
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated:", { editUsername, editEmail, editPassword });
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

    return (
        <div className="bg-neutral-100 min-h-screen py-12 px-4">
            <div className="bg-white rounded-3xl shadow-lg p-8 space-y-8 w-full">
                <h2 className="font-bold text-3xl pt-2 text-[#9b111e]">Profile</h2>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="https://logodix.com/logo/2004138.jpg" alt="Logo" className="w-20 h-20 object-contain" />
                        <h3 className="text-3xl font-extrabold text-black">Shiva Shanker Auto Mobiles</h3>
                    </div>
                    <button
                        className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
                        style={{
                            background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)",
                        }}
                    >
                        <FaArrowRight size={18} /> Services
                    </button>
                </div>

                <div className="w-full h-px bg-gray-300 mt-4" />

                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black text-base">
                    <div className="space-y-4">
                        <InfoItem icon={<BsBuildings className="text-[#800000]" />} label="Company Name" value="Hyundai Accent" />
                        <InfoItem icon={<SlCalender className="text-[#800000]" />} label="Established" value="2005" />
                        <InfoItem icon={<FaCodeBranch className="text-[#800000]" />} label="Branches" value="35" />
                        <InfoItem icon={<AiFillSafetyCertificate className="text-[#800000]" />} label="EV Certified" value="Yes" />
                    </div>
                    <div className="space-y-4">
                        <InfoItem icon={<LuPhoneCall className="text-[#800000]" />} label="Phone" value="+91 98765 43210" />
                        <InfoItem icon={<MdEmail className="text-[#800000]" />} label="Email" value="support@autonova.com" />
                        <InfoItem icon={<CgWebsite className="text-[#800000]" />} label="Website" value="www.autonova.com" />
                        <InfoItem icon={<FaRegAddressCard className="text-[#800000]" />} label="Address" value="123 EV Road, Chennai, Tamil Nadu" />
                    </div>
                    <div className="space-y-4">
                        <InfoItem icon={<FcDataEncryption className="text-[#800000]" />} label="Data Encrypted" value="Yes" />
                        <InfoItem icon={<MdVerified className="text-[#800000]" />} label="Verified Center" value="✔️" />
                        <InfoItem icon={<AiOutlineAudit className="text-[#800000]" />} label="Last Audit" value="Jan 2025" />
                        <InfoItem icon={<BiSolidCertification className="text-[#800000]" />} label="Certification" value="ISO 27001" />
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-6">Login Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black text-base">
                        <InfoItem icon={<FaUserCircle className="text-[#800000]" />} label="Username" value={editUsername} />
                        <InfoItem icon={<MdOutlineMailOutline className="text-[#800000]" />} label="Email" value={editEmail} />
                        <InfoItem icon={<RiLockPasswordLine className="text-[#800000]" />} label="Password" value={editPassword} />
                    </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full shadow">
                        <span className="text-sm font-medium text-gray-700">
                            {isActive ? "Active" : "Inactive"}
                        </span>
                        <label className="inline-flex items-center cursor-pointer relative">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isActive}
                                onChange={handleToggle}
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600 relative"></div>
                        </label>
                    </div>

                    <div className="flex gap-4">
                        <button
                            className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
                            style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
                            onClick={() => setShowEditForm(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
                            style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
                            onClick={() => setShowDeleteConfirm(true)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {showConfirm && (
                <ConfirmationModal
                    title={pendingStatus ? "Do you want to activate this Service Center?" : "Do you want to deactivate this Service Center?"}
                    onConfirm={confirmChange}
                    onCancel={cancelChange}
                />
            )}

            {showDeleteConfirm && (
                <ConfirmationModal
                    title="Are you sure you want to delete this Service Center?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}

            {showEditForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <form
                        onSubmit={handleEditSubmit}
                        className="bg-white px-8 py-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
                    >
                        <h2 className="text-xl font-semibold text-gray-900 text-center">Edit Login Info</h2>

                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">Username</label>
                            <input
                                type="text"
                                value={editUsername}
                                onChange={(e) => setEditUsername(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                value={editEmail}
                                onChange={(e) => setEditEmail(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                value={editPassword}
                                onChange={(e) => setEditPassword(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                            />
                        </div>

                        <div className="flex justify-between pt-4">
                            <button
                                type="button"
                                onClick={() => setShowEditForm(false)}
                                className="text-white px-4 py-2 rounded-lg"
                                style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="text-white px-4 py-2 rounded-lg"
                                style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {showSuccessPopup && (
                <Popup message="Updated Successfully!" />
            )}

            {showDeleteSuccessPopup && (
                <Popup message="Successfully Deleted!" />
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
    <div>
        <div className="flex items-center gap-2 text-lg font-semibold">
            {icon}
            <p>{label}</p>
        </div>
        <p className="text-lg text-gray-700">{value}</p>
    </div>
);

const ConfirmationModal = ({
    title,
    onConfirm,
    onCancel,
}: {
    title: string;
    onConfirm: () => void;
    onCancel: () => void;
}) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white px-6 py-6 rounded-2xl shadow-lg w-full max-w-sm text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="flex justify-center gap-6">
                <button
                    className="text-white px-4 py-2 rounded-lg"
                    style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
                    onClick={onConfirm}
                >
                    Yes
                </button>
                <button
                    className="text-white px-4 py-2 rounded-lg"
                    style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
                    onClick={onCancel}
                >
                    No
                </button>
            </div>
        </div>
    </div>
);

const Popup = ({ message }: { message: string }) => (
    <div
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-white px-4 py-2 rounded-lg shadow-lg"
        style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
    >
        {message}
    </div>
);

export default ServiceCenterProfileView;
