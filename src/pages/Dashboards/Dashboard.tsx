import { FONTS } from "../../constants/uiConstants"; //FONT
import {COLORS} from "../../constants/uiConstants"//COLOUR
import  { useState } from "react";
//this is for ICONS
import { AiOutlineCheckCircle } from "react-icons/ai";
// import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
// import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineArrowLeft } from 'react-icons/ai';


//this is FILE
import CustomerAnalyticsChart from "../../components/common/dashboard/NotificationList/NotificationList";
import BarCharts from "../../components/common/dashboard/BarChart/BarChart";
import { TransactionCard } from "../../components/common/dashboard/TransactionsCard/TransactionsCard";
import { DashboardCard } from "../../components/common/dashboard/DashboardCard/DashboardCard";
import { QueryCard } from "../../components/common/dashboard/QueryCard/QueryCard";
import dummpypic from "../../assets/Dashboard/images.jpg";
// import StatCard from "../../components/common/dashboard/StatCard/StatCard";
import  { SoSCard } from "../../components/common/dashboard/SoSCard/SoSCard";
import TotalRevenue from "../../components/common/dashboard/TotalRevenue/TotalRevenue";


const queries = [
  {
    title: "Break not fixed",
    desc: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl: dummpypic,
  },
  {
    title: "Glass work bending",
    desc: "I gave my car to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Tyre puncture",
    desc: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Late pickup service",
    desc: "Scheduled pickup was delayed by 2 hours without any update or notice.",
    profilePicUrl:"https://t3.ftcdn.net/jpg/08/86/78/68/360_F_886786813_XhL8zD8rhZCW7F5HvJdOPvquFh3n23vd.jpg",
  },
  {
    title: "Billing mismatch",
    desc: "Was charged extra without prior intimation or explanation on final invoice.",
    profilePicUrl:"https://www.shutterstock.com/image-photo/happy-middle-aged-45-years-260nw-2516789519.jpg",
  },
];

 type Query = {
  title: string;
  desc: string;
  profilePicUrl: string;
};



// code Dashboard started

  export const Dashboard = () => {
  const [isAllQueryModalOpen, setAllQueryModalOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  // Removed unused selectedQueryIndex state

  return (
    <div className="w-full px-4 py-6 -mt-6">
      {/* Header */}
      <div className="rounded-xl shadow-md bg-white pb-4 mb-4">
        <p
          className="text-xl font-semibold pl-6 pt-3 "
          style={{...FONTS.header,color:COLORS.primary }}
        >
          Overview of Service Center
        </p>
        <p
          className="text-gray-500 text-sm pb-5 pl-7"
          style={{ ...FONTS.paragraph, color: COLORS.secondary }}
        >
          Get your Service Center latest update for the last 7 days
        </p>

        {/* Dashboard Cards */}
        <div className="mx-4 justify-center items-center px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
            <DashboardCard
              icon={<RiUser6Line />}
              title="Schedule Request"
              value={20}
              per={10}
              perColor="#facc15"
              borderColor="rgba(234,179,8,0.8)"
              backgroundColor="#facc15"
              dataPoints={[1, 3, 2, 5, 4, 6, 5]}
            />
            <DashboardCard
              icon={<RiUser6Line />}
              title="Emergency Service"
              value={10}
              per={5}
              perColor="#f87171"
              borderColor="rgba(248,113,113,0.8)"
              backgroundColor="#f87171"
              dataPoints={[2, 1, 4, 3, 5, 2, 1]}
            />
            <DashboardCard
              icon={<RiUser6Line />}
              title="Service Requests"
              value={2}
              per={5}
              perColor="#3b82f6"
              borderColor="rgba(59,130,246,0.8)"
              backgroundColor="#3b82f6"
              dataPoints={[1, 2, 1, 6, 4, 3, 6]}
            />
            <DashboardCard
              icon={<RiUser6Line />}
              title="Total Transactions"
              value={22}
              per={15}
              perColor="#10b981"
              borderColor="rgba(16,185,129,0.8)"
              backgroundColor="#10b981"
              dataPoints={[1, 5, 2, 4, 3, 5, 6]}
            />
          </div>
        </div>
      </div>

      {/* Notifications, Bar Chart, SOS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Notifications */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 ">
          <div className="">
            <CustomerAnalyticsChart/>
          </div>
        </div>

        {/* Bar Chart */}
       <div className=" grid grid-row-2">
         <div className="bg-white shadow-md rounded-xl p-4 max-h-44 mb-2">
          <BarCharts />
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 max-h-45 ">
          <TotalRevenue/>
        </div>
       </div>

        {/* SOS Content */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 ">
          <div className="flex justify-between mb-2">
            <p
              className="text-lg "
              style={{ color: COLORS.primary }}
            >
              SoS Summary
            </p>
            <button className="text-red-700 text-md item-end hover:text-red-900">View All</button>{" "}
          </div>
          <div className="">
            <SoSCard/>
          </div>
        </div>
      </div>

      {/* Transactions & Query */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
        {/* Transactions */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 overflow-hidden ">
          <div className="flex justify-between mb-2 ">
            <p
              className=" mb-2 text-lg "
              style={{ color: COLORS.primary }}
            >
              Recent Transactions
            </p>
            <button className="text-red-700 text-md item-end hover:text-red-900">View All</button>
          </div>
          <div className="overflow-y-auto  max-h-80 scrollbar-hide">
            {[...Array(14)].map((_, index) => (
              <TransactionCard
                key={index}
                icon1={<AiOutlineCheckCircle />}
                icon2={
                  index % 2 === 0 ? (
                    <IoIosArrowRoundUp />
                  ) : (
                    <IoIosArrowRoundDown />
                  )
                }
                title={index % 2 === 0 ? "Master Card" : "Withdrawal"}
                value={1234}
                color={index % 2 === 0 ? "text-green-600" : "text-red-600"}
              />
            ))}
          </div>
        </div>

        
         {/* Query Section */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 overflow-hidden">
          <div className="flex justify-between mb-2">
            <p className="text-lg" style={{ color: COLORS.primary }}>
              Query
            </p>
            <button
              onClick={() => setAllQueryModalOpen(true)}
              className="text-red-700 hover:text-red-900 text-md"
            >
              View All
            </button>
          </div>
         <div className="pr-2 space-y-2">

            {queries.slice(0, 3).map((q, idx) => (
              <QueryCard
                key={idx}
                icon={null}
                title={q.title}
                desc={q.desc}
                profilePicUrl={q.profilePicUrl}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Queries Modal */}
      {isAllQueryModalOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-40 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-9 relative">
            <button
              className="absolute top-2 left-3 w-8 h-8 flex items-center justify-center text-lg text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition duration-200"
              onClick={() => setAllQueryModalOpen(false)}
            >
              
          <AiOutlineArrowLeft />
            </button>
            <button
              className="absolute top-2 right-3 w-8 h-8 flex items-center justify-center text-lg text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition duration-200"
              onClick={() => setAllQueryModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
              Query Details
            </h2>
            <div className="space-y-4">
              {queries.map((q, idx) => (
                <div key={idx} onClick={() => {
                  setSelectedQuery(q);
                  setAllQueryModalOpen(false);
                }}>
                  <QueryCard
                    icon={<AiOutlineRight />}
                    title={q.title}
                    desc={q.desc}
                    profilePicUrl={q.profilePicUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Selected Query Detail Modal */}
      {selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl w-full max-w-xl p-9 relative">
            <button
              className="absolute top-2 left-3 w-8 h-8 flex items-center justify-center text-lg text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition duration-200"
              onClick={() => {
                setSelectedQuery(null);
                setAllQueryModalOpen(true);
              }}
            >
              
          <AiOutlineArrowLeft />
            </button>
            <button
            className="absolute top-2 right-3 w-8 h-8 flex items-center justify-center text-lg text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition duration-200"
              onClick={() => {
                setSelectedQuery(null);
              }}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>
              All Queries
            </h2>
            <div className="mt-4">
              <QueryCard
                icon={null}
                title={selectedQuery.title}
                desc={selectedQuery.desc}
                profilePicUrl={selectedQuery.profilePicUrl}
              />
              <p className="mt-4 text-gray-700">{selectedQuery.desc}</p>
            </div>
          </div>
        </div>
      )}
      
      
      {/* Footer */}
      <footer className="bg-white shadow-md rounded-xl p-4 w-full text-center mt-4 -mb-10">
        <div>
          <div className="flex items-center justify-center space-x-1">
            <AiOutlineCopyrightCircle />
            <span style={{color:COLORS.primary}}>YESMECHANIC</span>
          </div>
        </div>
      </footer>
    </div>
  );
};