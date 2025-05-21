import React from "react";
import { CiSearch } from "react-icons/ci";
import { FONTS } from "../../constants/uiConstants";
import { useNavigate } from "react-router-dom";

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
    jobStatus: "In Progress",
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
];

export const JobCardsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-1 md:block">
      <div className=" rounded-lg">
        <div className=" border-b-2 border-[#9b111e] pb-2 mb-4">
          <h1
            style={{ ...FONTS.header, fontWeight: 600 }}
            className="font-bold  text-[#9b111e]"
          >
            JOB CARDS
          </h1>
        </div>

       <div className="relative max-w-md mb-6">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <CiSearch size={20} />
          </span>
          <input
            type="search"
            placeholder="Search by name, vehicle or ID"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
          />
        </div>
         

        <div className="overflow-x-auto ">
          <table className="min-w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-[#E6A895]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  Invoice Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b lg:table-cell hidden">
                  Vehicle
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b ">
                  Plate
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b lg:table-cell hidden">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  Job Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr
                  key={invoice.id}
                  className={`text-sm text-gray-700 hover:bg-gray-100 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-3 border-b">{invoice.id}</td>
                  <td className="px-4 py-3 border-b ">{invoice.invoiceDate}</td>
                  <td className="px-4 py-3 border-b">{invoice.name}</td>
                  <td className="px-4 py-3 border-b hidden lg:table-cell">
                    {invoice.vehicle}
                  </td>
                  <td className="px-4 py-3 border-b ">{invoice.plate}</td>
                  <td className="px-4 py-3 border-b lg:table-cell hidden">
                    {invoice.total}
                  </td>
                  <td
                    className={`px-4 py-3 border-b capitalize ${
                      invoice.jobStatus === "completed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {invoice.jobStatus}
                  </td>
                  <td className="px-4 py-3 border-b">
                    <button
                      onClick={() => navigate("/qoutation")}
                      className="bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1 active:scale-110 rounded hover:bg-[#a00000] transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
