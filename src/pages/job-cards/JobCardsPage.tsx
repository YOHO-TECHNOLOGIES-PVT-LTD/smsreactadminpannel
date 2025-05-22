import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FONTS } from "../../constants/uiConstants";
import { useNavigate } from "react-router-dom";
import { HiMiniIdentification } from "react-icons/hi2";
import { FaFileInvoice } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { PiListNumbersFill } from "react-icons/pi";
type Invoice = {
  id: string;
  name: string;
  invoiceDate: string;
  vehicle: string;
  plate: string;
  total: string;
  paidAmount?: string;
  BalanceDue: string;
  profile: string;
  jobStatus: string;
};

const invoices: Invoice[] = [
  {
    id: "INV001",
    name: "Sameena Khan",
    invoiceDate: "2025-05-18",
    vehicle: "Toyato",
    plate: "ABC-1234",
    total: "$2500.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "completed",
  },
  {
    id: "INV002",
    name: "John Doe",
    invoiceDate: "2025-05-17",
    vehicle: "Honda",
    plate: "XYZ-5678",
    total: "$1800.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "in progress",
  },
  {
    id: "INV003",
    name: "Jane Smith",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV005",
    name: "Smith",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$700.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "Not started",
  },
  {
    id: "INV006",
    name: "Jane",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$900.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV006",
    name: "Jane Smith",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$900.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV006",
    name: "Carter",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$900.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV006",
    name: "Jack",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$900.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
];

export const JobCardsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = invoices.filter((invoice) => {
    const query = searchQuery.toLowerCase();
    return (
      invoice.name.toLowerCase().includes(query) ||
      invoice.vehicle.toLowerCase().includes(query) ||
      invoice.id.toLowerCase().includes(query)
    );
  });

  return (
    <div className="p-1 md:block bg-white rounded-lg shadow-lg p-8">
      <div className="rounded-lg">
        <div className="border-b-2 border-[#9b111e] pb-2 mb-4">
          <h1
            style={{ ...FONTS.header, fontWeight: 500 }}
            className="font-bold text-[#9b111e] "
          >
            JOB CARDS
          </h1>
        </div>

        <div className="relative max-w-md mt-10">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <CiSearch size={20} />
          </span>
          <input
            type="search"
            placeholder="Search by name, vehicle or ID"
            className="pl-10 pr-4 py-2 w-full border rounded-full shadow focus:ring-2 focus:ring-[#9b111e] focus:outline-none focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse rounded-lg overflow-hidden mt-8">
            <thead className="bg-[#e2cac0]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  <div className="flex items-center gap-2">
                    <HiMiniIdentification size={20}/>
                    ID
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                 <div className="flex items-center gap-2">
                  <FaFileInvoice size={20}/>
                  Invoice Date</div> 
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  <div className="flex items-center gap-2">
                    <MdOutlineDriveFileRenameOutline size={20}/>
                    Name</div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b lg:table-cell hidden">
                  <div className="flex items-center gap-2">
                    <FaCar size={20}/>
                    Vehicle</div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  <div className="flex items-center gap-2"><PiListNumbersFill size={20}/>Plate</div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b lg:table-cell hidden">
                  <div className="flex items-center gap-2"><RiMoneyRupeeCircleLine size={20} />Total</div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  <div className="flex items-center gap-2"><IoMdStats size={20}/>Job Status</div> 
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  <div className="flex items-center gap-2"><GrView size={20}/>View</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((invoice, index) => (
                  <tr
                    key={invoice.id}
                    className={`text-sm text-gray-700 hover:bg-[#edeae9] transition font-semibold ${
                      index % 2 == 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-3 border-b">{invoice.id}</td>
                    <td className="px-4 py-3 border-b">
                      {invoice.invoiceDate}
                    </td>
                    <td className="px-4 py-3 border-b">{invoice.name}</td>
                    <td className="px-4 py-3 border-b hidden lg:table-cell">
                      {invoice.vehicle}
                    </td>
                    <td className="px-4 py-3 border-b">{invoice.plate}</td>
                    <td className="px-4 py-3 border-b hidden lg:table-cell">
                      {invoice.total}
                    </td>
                    <td className="px-4 py-3 border-b">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                          invoice.jobStatus.toLowerCase() === "completed"
                            ? "bg-green-100 text-green-700"
                            : invoice.jobStatus.toLowerCase() === "not started"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {invoice.jobStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b font-semibold">
                      <button
                        onClick={() => navigate("/quotation")}
                        className="bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1 active:scale-110 rounded hover:bg-[#a00000] transition"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center text-gray-500 py-6">
                    No matching found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
