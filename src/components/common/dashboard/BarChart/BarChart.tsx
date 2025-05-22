import React, { useState } from 'react';
import { FONTS } from "../../../../constants/uiConstants"//FONT
import {COLORS} from "../../../../constants/uiConstants"//COLOUR

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { ChevronDown } from 'lucide-react';


//for data
const data = [
  { day: 'Mon', newCustomers: 50 },
  { day: 'Tue', newCustomers: 35 },
  { day: 'Wed', newCustomers: 25 },
  { day: 'Thu', newCustomers: 40 },
  { day: 'Fri', newCustomers: 12 },
  { day: 'Sat', newCustomers: 32 },
  { day: 'Sun', newCustomers: 24 },
];


//for drop down
const dateRanges = ['Weekly', 'Monthly', 'Yearly'];

const BarCharts: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState('Weekly');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white w-full lg:max-w-xl md:max-h-[350px] mx-auto relative">
      <div className="flex justify-between items-center ">
        {/* content  */}
        <div>
          <h2 className="text-lg font-semibold" style={{color:COLORS.primary}}>Vehicle Management</h2>
          <div className="flex space-x-4 text-xs mt-4">
            <div className="flex items-center space-x-1 text-blue-600">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>New Customers</span>
            </div>
            <div className="flex items-center space-x-1 text-rose-400">
              <span className="h-2 w-2 bg-rose-400 rounded-full"></span>
              <span>Returning Customers</span>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-xs text-gray-700 border  px-1 py-1.5 rounded-md bg-white hover:bg-gray-50"
          >
            {selectedRange}
            <ChevronDown className="w-6 h-4 ml-1" />
          </button>
          {isOpen && (
            <div className="absolute  mt-2 bg-white border rounded-md shadow-lg z-10">
              {dateRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setSelectedRange(range);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className='mt-9 -ml-10'>
        <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="newCustomers" fill="#0A68FF" barSize={10} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
