import React from "react";

type QuotationItem = {
  description: string;
  qty: number;
  unitPrice: number;
};

const QuotationPage: React.FC = () => {
  const quotationItems: QuotationItem[] = [
    { description: "Service Fee", qty: 1, unitPrice: 200.0 },
    { description: "Labor: 5 hours @ $75/hr", qty: 5, unitPrice: 75.0 },
    { description: "Parts, including sales tax", qty: 7, unitPrice: 12.95 },
    { description: "New client discount", qty: 1, unitPrice: -50.0 },
  ];

  const subtotal = quotationItems.reduce(
    (acc, item) => acc + item.qty * item.unitPrice,
    0
  );

  return (
    <div className="sm:p-8 bg-white text-black max-w-2xl mx-auto  border rounded shadow">
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">YES MECHANIC</h1>
          <p>Street Address</p>
          <p>City, ST ZIP</p>
          <p>Phone: (000) 000-0000</p>
          <p>Email: company@email.com</p>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold">QUOTATION</h2>
          <div className="mt-2 overflow-x-auto">
            <table className="text-sm border border-gray-300 w-full">
              <tbody>
                <tr>
                  <td className="border px-2 py-1 font-semibold">QUOTE #</td>
                  <td className="border px-2 py-1">2034</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-semibold">DATE</td>
                  <td className="border px-2 py-1">2/1/2017</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-semibold">
                    CUSTOMER ID
                  </td>
                  <td className="border px-2 py-1">21007</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-semibold">
                    VALID UNTIL
                  </td>
                  <td className="border px-2 py-1">3/3/2017</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mb-6 border border-gray-400 p-4">
        <h3 className="font-bold mb-2">CUSTOMER INFO</h3>
        <p>Name</p>
        <p>Street Address</p>
        <p>City, ST ZIP</p>
        <p>Phone, Email</p>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">DESCRIPTION OF WORK</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-2 text-left">ITEMIZED COSTS</th>
                <th className="border px-3 py-2 text-center">QTY</th>
                <th className="border px-3 py-2 text-right">UNIT PRICE</th>
                <th className="border px-3 py-2 text-right">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {quotationItems.map((item, index) => (
                <tr key={index}>
                  <td className="border px-3 py-2">{item.description}</td>
                  <td className="border px-3 py-2 text-center">{item.qty}</td>
                  <td className="border px-3 py-2 text-right">
                    ${item.unitPrice.toFixed(2)}
                  </td>
                  <td className="border px-3 py-2 text-right">
                    ${(item.qty * item.unitPrice).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <div className="w-full md:w-1/2 overflow-x-auto">
          <table className="w-full text-sm border border-gray-300">
            <tbody>
              <tr>
                <td className="border px-3 py-2 font-semibold">SUBTOTAL</td>
                <td className="border px-3 py-2 text-right">
                  ${subtotal.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-semibold">OTHER</td>
                <td className="border px-3 py-2 text-right">-</td>
              </tr>
              <tr className="bg-gray-100 font-bold">
                <td className="border px-3 py-2">TOTAL QUOTE</td>
                <td className="border px-3 py-2 text-right">
                  ${subtotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-sm italic mb-4">
        This quotation is only for admin use.
      </p>

      <div className="mt-6">
        <p className="mb-2 font-semibold">Customer Acceptance</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <label>Signature</label>
            <div className="border border-gray-300 h-10 mt-1"></div>
          </div>
          <div>
            <label>Printed Name</label>
            <div className="border border-gray-300 h-10 mt-1"></div>
          </div>
          <div>
            <label>Date</label>
            <div className="border border-gray-300 h-10 mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationPage;
