 import { FONTS } from "../../constants/uiConstants"
// // import {COLORS} from "../../constants/uiConstants"
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { DashboardCard } from "../../components/common/dashboard/DashboardCard/DashboardCard";
import { RiUser6Line } from "react-icons/ri";
import { NotificationList } from "../../components/common/dashboard/NotificationList/NotificationList";


export const Dashboard = () => {
  return (
    <div className="p-3 ">
      <p className="text-xl font-semibold pb-1" style={{...FONTS.header}}>Overview of Service Center</p>
      <p className="text-gray-500 text-sm pb-5"style={{...FONTS.paragraph}}>Get your Service Center latest update for the last 7 days</p>
      {/* cards */}
      <div className="flex flex-wrap gap-5 justify-center  ">
        
        <DashboardCard
          icon={<RiUser6Line />}
          title="Schedule Request"
          value={20}
          per={10}
          perColor="#facc15"
          borderColor="rgba(234,179,8,0.8)" // yellow-400
          backgroundColor="#facc15"
          dataPoints={[1, 3, 2, 5, 4, 6, 5]}
        />
        <DashboardCard
          icon={<RiUser6Line />}
          title="Emergency Service"
          value={10}
          per={5}
          perColor="#f87171"
          borderColor="rgba(248,113,113,0.8)" // red-400
          backgroundColor="#f87171"
          dataPoints={[2, 1, 4, 3, 5, 2, 1]}
        />
        <DashboardCard
          icon={<RiUser6Line />}
          title="Service Requests"
          value={2}
          per={5}
          perColor="#3b82f6"
          borderColor="rgba(59,130,246,0.8)" // blue-500
          backgroundColor="#3b82f6"
          dataPoints={[1, 2, 1, 6, 4, 3, 6]}
        />
        <DashboardCard
          icon={<RiUser6Line />}
          title="Total Transactions"
          value={22}
          per={15}
          perColor="#10b981"
          borderColor="rgba(16,185,129,0.8)" // green-500
          backgroundColor="#10b981"
          dataPoints={[1, 5, 2, 4, 3, 5, 6]}
        />
      </div>
      {/* recent notification */}
      <div className="max-w-[400px] rounded-xl bg-white shadow-md p-4 w-full mt-4 ml-3">
        <div className="flex justify-between ">
          <p style={{...FONTS.header}}>Recent Notification</p>
          <a href="" style={{...FONTS.paragraph}}>View All</a>
        </div>
      <div>
      <NotificationList
      icon1={<AiOutlineCheckCircle/>}
      icon2={<GoDotFill/>}
      title={"Booking Confrim"}
      desc={"your order is complete"}
      id={1234}
      />
      <NotificationList
      icon1={<AiOutlineCheckCircle/>}
      icon2={<GoDotFill/>}
      title={"Booking Confrim123"}
      desc={"your order is complete"}
      id={1234}
      />
      </div>
      </div>
    </div>
  );
};
