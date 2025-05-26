import React from "react";
import { CiSearch } from "react-icons/ci";
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
    name: " Smith",
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

const JobCardsPage = () => {
  return (
    <div>
      <div className="bg-white shadow-md p-3 rounded-lg mt-3 px-8">
        <div className="mt-2">
          <h1 className="text-2xl font-bold">JOB CARD</h1>
        </div>
        <div className="relative w-80 mt-6">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <CiSearch size={20} />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-8 mb-5">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead style={{backgroundColor:"#FAF3EB"}}>
              <tr>
                <th style={{color:"#9b111e"}} className="text-left px-4 py-2">ID</th>
                <th style={{color:"#9b111e"}} className="text-left px-4 py-2">Name</th>
                <th style={{color:"#9b111e"}} className="text-left px-4 py-2">Invoice Date</th>
                <th style={{color:"#9b111e"}} className="text-left px-4 py-2">Vehicle</th>
                <th style={{color:"#9b111e"}} className="text-left px-4 py-2">Plate</th>
                <th style={{color:"#9b111e"}} className="text-left px-4 py-2">Total</th>
                <th style={{color:"#9b111e"}}  className="text-left px-4 py-2">Paid Amount</th>
                <th style={{color:"#9b111e"}} className="text-left px-4 py-2">Balance Due</th>
                <th className="text-left px-4 py-2">Profile</th>
                <th className="text-left px-4 py-2">Job Status</th>
                <th className="text-left px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr
                  key={invoice.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.id}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.invoiceDate}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.vehicle}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.plate}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.total}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.paidAmount}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.BalanceDue}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.profile}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {invoice.jobStatus}
                  </td>
                  <td className="px-4 py-2">
                    <button style={{background:"#800000"}} className="text-white rounded-md px-3 py-1 hover:bg-blue-600 transition">
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
export default JobCardsPage;