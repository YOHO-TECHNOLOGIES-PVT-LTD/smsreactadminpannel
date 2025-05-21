 import { FONTS } from "../../constants/uiConstants"
// // import {COLORS} from "../../constants/uiConstants"
import { DashboardCard } from "../../components/common/dashboard/DashboardCard/DashboardCard";
import { RiUser6Line } from "react-icons/ri";

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
          dataPoints={[1, 2, 1, 3, 4, 3, 6]}
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
      <div>
        
      </div>
    </div>
  );
};
