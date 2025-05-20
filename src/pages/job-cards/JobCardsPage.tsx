
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FONTS } from "../../constants/uiConstants";


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

export const JobCardsPage = () => {
  return (
    <div className="p-1" >
      <div className="bg-white p-6 rounded-lg">
        <div className="mb-6">
          <h1 style={{...FONTS.header,fontWeight:600}} className="font-bold text-gray- text-[#9b111e]">JOB CARDS</h1>
        </div>

        <div className="relative w-80 mb-6">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <CiSearch size={20} />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-[#6b1b1b]"
          />
        </div>

        <div className="overflow-x-auto ">
          <table className="min-w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-[#FAF3EB]">
              <tr>
                {[
                  "ID",
                  "Name",
                  "Invoice Date",
                  "Vehicle",
                  "Plate",
                  "Total",
                  "Paid Amount",
                  "Balance Due",
                  "Profile",
                  "Job Status",
                  "View",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left text-sm font-semibold text-[#9b111e] border-b"
                  >
                    {header}
                  </th>
                ))}
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
                  <td className="px-4 py-3 border-b">{invoice.name}</td>
                  <td className="px-4 py-3 border-b">{invoice.invoiceDate}</td>
                  <td className="px-4 py-3 border-b">{invoice.vehicle}</td>
                  <td className="px-4 py-3 border-b">{invoice.plate}</td>
                  <td className="px-4 py-3 border-b">{invoice.total}</td>
                  <td className="px-4 py-3 border-b">{invoice.paidAmount}</td>
                  <td className="px-4 py-3 border-b">{invoice.BalanceDue}</td>
                  <td className="px-4 py-3 border-b">{invoice.profile}</td>
                  <td className="px-4 py-3 border-b capitalize">
                    {invoice.jobStatus}
                  </td>
                  <td className="px-4 py-3 border-b">
                    <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1 rounded hover:bg-[#a00000] transition">
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
