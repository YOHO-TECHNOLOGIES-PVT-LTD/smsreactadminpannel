import { FaCar, FaFileInvoice } from "react-icons/fa";
import { HiMiniIdentification } from "react-icons/hi2";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FONTS } from "../../constants/uiConstants";
import { PiListNumbersFill } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Client from "../../api";
import { CiSearch } from "react-icons/ci";
type Invoice = {
  uuid: string;
  customerInfo: {
    name: string;
  };
  invoiceDate: string;
  vehicleInfo: {
    model: string;
    registrationNo: string;
  };
  plate: string;
  total: string;
  amount: string;
  balanceDue: string;
  profile: string;
  status: string;
  createdAt: string;
  serviceInfo: {
    totalAmount: string;
  };
};

const JobCardHistory = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [invoices, setinvoices] = useState<Invoice[]>([]);

  useEffect(() => { 

    async function fetchdata() {
      const response:any = await new Client().admin.jobcard.getJobHistory()
      console.log(response?.data?.data)
      setinvoices(response?.data?.data)
    }
    fetchdata()
  }, []);

  const filteredInvoices = invoices.filter((invoice) => {
    const query = searchQuery.trim().toLowerCase();
    return (
      invoice.customerInfo.name.toLowerCase().includes(query) ||
      invoice.vehicleInfo.model.toLowerCase().includes(query) ||
      invoice.uuid.toLowerCase().includes(query)
    );
  });
  return (
    <div className="h-screen">
      <div className="flex gap-3 border-b-2 border-[#9b111e] pb-2 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 bg-white border-2 border-[#9b111e] text-[#9b111e] rounded-3xl hover:bg-[#9b111e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          title="Back to Job cards"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1
          style={{ ...FONTS.header, fontWeight: 500 }}
          className="!font-bold text-[#9b111e] "
        >
          Completed Jobs
        </h1>
      </div>
      <div className="relative flex-1 ">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <CiSearch size={20} />
          </span>
          <input
            type="search"
            placeholder="Search by name, vehicle or ID"
            className="pl-10 pr-4 py-2 w-full border rounded-full shadow focus:ring-2 focus:ring-[#9b111e] focus:outline-none focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ ...FONTS.description }}
          />
        </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full border-collapse rounded-lg overflow-hidden mt-8 ">
          <thead className="bg-[#e9e9e9]">
            <tr>
              <th
                className="px-4 py-3 text-left text-sm text-[#717171]  border-b"
                style={{ ...FONTS.tableHeader }}
              >
                No
              </th>
              <th
                className="px-4 py-3 text-left text-sm text-[#717171]  border-b"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <HiMiniIdentification size={20} />
                  Id
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-bold text-[#717171] border-b"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <FaFileInvoice size={20} />
                  Invoice date
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-bold text-[#717171] border-b"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <MdOutlineDriveFileRenameOutline size={20} />
                  Name
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-bold text-[#717171] border-b lg:table-cell hidden"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <FaCar size={20} />
                  Vehicle
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-bold text-[#717171] border-b"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <PiListNumbersFill size={20} />
                  Plate
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-bold text-[#717171] border-b lg:table-cell hidden"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <RiMoneyRupeeCircleLine size={20} />
                  Total
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-bold text-[#717171] border-b"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <IoMdStats size={20} />
                  Job status
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-bold text-[#717171] border-b"
                style={{ ...FONTS.tableHeader }}
              >
                <div className="flex items-center gap-2">
                  <GrView size={20} />
                  View
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice, index) => (
                <tr
                  key={invoice.uuid}
                  className={`text-sm !text-gray-700 hover:bg-[#edeae9] transition font-semibold ${
                    index % 2 == 0 ? "bg-white" : "bg-gray-50"
                  }`}
                  style={{ ...FONTS.paragraph }}
                >
                  <td className="px-4 py-3 border-b">{index + 1}</td>
                  <td className="px-4 py-3 border-b">{invoice.uuid}</td>
                  <td className="px-4 py-3 border-b">
                    {invoice.createdAt.split("T")[0]}
                  </td>
                  <td className="px-4 py-3 border-b">
                    {invoice.customerInfo.name}
                  </td>
                  <td className="px-4 py-3 border-b hidden lg:table-cell">
                    {invoice.vehicleInfo.model}
                  </td>
                  <td className="px-4 py-3 border-b">
                    {invoice.vehicleInfo.registrationNo}
                  </td>
                  <td className="px-4 py-3 border-b hidden lg:table-cell">
                    {invoice.serviceInfo.totalAmount}
                  </td>
                  <td className="px-4 py-3 border-b">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                        invoice.status.toLowerCase() === "completed"
                          ? "bg-green-100 text-green-700"
                          : invoice.status.toLowerCase() === "not started"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                      style={{ ...FONTS.subParagraph }}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b font-semibold">
                    <button
                      onClick={() => navigate(`/quotation/${invoice.uuid}`)}
                      className="bg-[#a00000] !text-white px-3 py-1 active:scale-110 rounded-3xl hover:bg-[#800000] transition"
                      style={{ ...FONTS.cardSubHeader }}
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
  );
};

export default JobCardHistory;
