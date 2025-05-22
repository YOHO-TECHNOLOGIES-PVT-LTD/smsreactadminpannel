import { FONTS } from "../../constants/uiConstants"; //FONT
import {COLORS} from "../../constants/uiConstants"//COLOUR

//this is for ICONS
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

//this is FILE
import { NotificationList } from "../../components/common/dashboard/NotificationList/NotificationList";
import BarCharts from "../../components/common/dashboard/BarChart/BarChart";
import { TransactionCard } from "../../components/common/dashboard/TransactionsCard/TransactionsCard";
import { DashboardCard } from "../../components/common/dashboard/DashboardCard/DashboardCard";
import { QueryCard } from "../../components/common/dashboard/QueryCard/QueryCard";
import dummpypic from "../../assets/Dashboard/images.jpg";


//

export const Dashboard = () => {
  return (
    <div className="w-full px-4 py-6 -mt-6">
      {/* Header */}
      <div className="rounded-xl shadow-md bg-white pb-4 mb-4">
        <p
          className="text-xl font-semibold pl-6 pt-3 bg-rgb(214, 90, 103) "
          style={{ ...FONTS.header,backgroundImage: `linear-gradient(25deg,${COLORS.primary} 12%,rgb(229, 95, 108) 26%, ${COLORS.primary} 25%)`, WebkitBackgroundClip: "text" ,WebkitTextFillColor: "transparent" }}
        >
          Overview of Service Center
        </p>
        <p
          className="text-gray-500 text-sm pb-5 pl-7"
          style={{ ...FONTS.paragraph ,color:COLORS.secondary}}
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
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 overflow-hidden">
          <div className="flex justify-between mb-2">
            <p className="font-semibold text-lg" style={{color:COLORS.primary}}>Recent Notification</p>
           <button className="text-sky-500 text-md">View All</button>
          </div>
          <div className="overflow-y-auto max-h-80 scrollbar-thumb-rounded">
            {[...Array(8)].map((_, index) => (
              <NotificationList
                key={index}
                icon1={<AiOutlineCheckCircle />}
                icon2={<GoDotFill />}
                title="Booking Confirm"
                desc="Your order is complete"
                id={1234}
              />
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96">
          <BarCharts />
        </div>

        {/* SOS Content */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 text-lg font-semibold" style={{color:COLORS.primary}}>
          <p>SOS contentoaciabibibibibi</p>
          <button className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
      <span >Shine</span>
    </button>
        </div>
      </div>

      {/* Transactions & Query */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Transactions */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 overflow-hidden">
          <p className=" mb-2 text-lg font-semibold" style={{color:COLORS.primary}}>Recent Transactions</p>
          <div className="overflow-y-auto max-h-80">
            {[...Array(4)].map((_, index) => (
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

        {/* Query */}
        <div className="bg-white shadow-md rounded-xl p-4 max-h-96 overflow-hidden">
          <div className="flex justify-between mb-2">
            <p className="text-lg font-semibold" style={{color:COLORS.primary}}>Query</p>
            <button className="text-sky-500 text-md">View All</button>
          </div>
          <QueryCard
            profilePicUrl={dummpypic}
            icon={<AiOutlineRight />}
            title="Break not fixed"
            desc="I gave my bike to the shop some days ago but they didn’t repair it in time and didn’t fix it."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md rounded-xl p-4 w-full text-center mt-4 -mb-10">
      <div >
        <div className="flex items-center justify-center space-x-1">
          <AiOutlineCopyrightCircle />
          <span>YESMECHANGE</span>
        </div>
      </div>
      </footer>
    </div>
   
  );
};
