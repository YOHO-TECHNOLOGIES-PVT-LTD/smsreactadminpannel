
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
