import React, { useState ,useRef, useEffect } from 'react';
// import { FONTS } from "../../../../constants/uiConstants"//FONT
import {COLORS} from "../../../../constants/uiConstants"//COLOUR

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { ChevronDown } from 'lucide-react';


//for data
const data = [
  { day: 'Mon', newCustomers: 50,returnCustomers:80 },
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
  const [selectedRange, setSelectedRange] = useState('');
  const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null)
     useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <div className="bg-white w-full  ">
      <div className="flex justify-between items-center ">
        {/* content  */}
        <div className=''>
          <h2 className="text-lg " style={{color:COLORS.primary}}>Vehicle Management</h2>
          <div className="flex space-x-4 text-xs mt-4">
            <div className="flex items-center space-x-1 text-blue-600">
              <span className="h-2 w-2 bg-[#f2ddf3] rounded-full"></span>
              <span className='text-[#f2ddf3]' >New Customers</span>
            </div>
            <div className="flex items-center space-x-1 text-rose-400">
              <span className="h-2 w-2 bg-[#aac3c4] rounded-full"></span>
              <span className='text-[#aac3c4] '>Returning Customers</span>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <div className="relative"  ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-xs text-gray-700 border  px-1 py-1.5 rounded-md bg-white hover:bg-gray-50"
          >
            {/* {selectedRange} */}
            <ChevronDown className="w-6 h-4  text-[#9b111e]" />
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
                  className="block w-full text-left px-4 py-2 text-[#9b111e] text-sm hover:text-red-600"
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className='-ml-10'>
        <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <XAxis dataKey="day" width={1} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="newCustomers" fill="#f2ddf3" barSize={10} radius={[0, 0, 0, 0]} />
          <Bar dataKey="returnCustomers" fill="#aac3c4" barSize={10} radius={[0, 0, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;