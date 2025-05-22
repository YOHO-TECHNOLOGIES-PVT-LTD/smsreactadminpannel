import React, { useState } from "react";
import {COLORS} from "../../../../constants/uiConstants"//COLOUR


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChevronDown } from "lucide-react";

const customerData = [
  { month: "Jan", current: 40000, lastYear: 60000 },
  { month: "Feb", current: 48000, lastYear: 42000 },
  { month: "Mar", current: 51000, lastYear: 50000 },
  { month: "Apr", current: 55000, lastYear: 47000 },
  { month: "May", current: 49000, lastYear: 62000 },
  { month: "Jun", current: 53000, lastYear: 58000 },
  { month: "Jul", current: 52000, lastYear: 50000 },
  { month: "Aug", current: 54000, lastYear: 46000 },
  { month: "Sep", current: 60000, lastYear: 48000 },
  { month: "Oct", current: 45000, lastYear: 52000 },
  { month: "Nov", current: 80000, lastYear: 61000 },
  { month: "Dec", current: 70000, lastYear: 61000 },
];

const CustomerAnalyticsChart: React.FC = () => {
  const [filter, setFilter] = useState("Monthly");

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <p className=" text-lg" style={{ color: COLORS.primary }}> Total Customers </p>
        <div className="flex items-center space-x-2">
          <button className="flex items-center border border-gray-300 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            {filter} <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={customerData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorLastYear" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A5B4FC" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#A5B4FC" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="current"
            name="Current Year"
            stroke="#6366F1"
            fill="url(#colorCurrent)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="lastYear"
            name="Last Year"
            stroke="#A5B4FC"
            fill="url(#colorLastYear)"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerAnalyticsChart;