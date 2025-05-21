 import { FONTS } from "../../constants/uiConstants"//FONT
// import {COLORS} from "../../constants/uiConstants"//COLOUR


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
import dummpypic from "../../assets/Dashboard/images.jpg"

export const Dashboard = () => {
  return (


    //total dashboard
    <div className=" px-4 py-6 custom900:px-1 lg:px-2 w-full">

    {/* cards+dashcards */}
      {/* for dashcard */}
      <div className="rounded-xl shadow-md  bg-white pb-4 ">
      <p className="text-xl font-semibold pl-6 pt-3 " style={{...FONTS.header}}>Overview of Service Center</p>
      <p className="text-gray-500 text-sm pb-5 pl-7"style={{...FONTS.paragraph}}>Get your Service Center latest update for the last 7 days</p>
      {/* cards for dashborad  */}
      <div className=" flex  custom900:flex-col-[2] lg:flex-row md:gap-x-4 md:gap-y-4  flex-wrap lg:gap-4 justify-center   ">
        
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
      </div>



      {/* recent notification + bar + sos */}

      {/* recent notification */}
      <div className="flex flex-wrap ">
      <div className="lg:max-w-[380px] rounded-xl max-h-96  custom900:max-w-1/2 md:flex-col  flex-wrap gap-4  bg-white shadow-md p-4 w-full mt-4 ">
        <div className="flex justify-between mb-2">
          <p className="align-start font-bold text-lg " >Recent Notification</p>
          {/* for view notification to change into link of nav */}
          <a href=""className="align-end text-md text-[skyblue] " >View All</a>
        </div>
      <div className="overflow-y-auto scrollbar-thumb-rounded max-h-80 ">
      <NotificationList
      icon1={<AiOutlineCheckCircle className=""/>}
      icon2={<GoDotFill/>}
      title={"Booking Confrim"}
      desc={"your order is cdmam"}
      id={1234}
      />
      <NotificationList
      icon1={<AiOutlineCheckCircle  />}
      icon2={<GoDotFill/>}
      title={"Booking Confrim123"}
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
      <NotificationList
      icon1={<AiOutlineCheckCircle/>}
      icon2={<GoDotFill/>}
      title={"Booking Confrim123"}
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
      <NotificationList
      icon1={<AiOutlineCheckCircle/>}
      icon2={<GoDotFill/>}
      title={"Booking Confrim123"}
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
      <NotificationList
      icon1={<AiOutlineCheckCircle/>}
      icon2={<GoDotFill/>}
      title={"Booking Confrim123"}
      desc={"your order is complete"}
      id={1234}
      />

      </div>
      </div>


      {/* this is bar */}
      <div className="flex flex-wrap ">
      
      <div className=" lg:ml-3  rounded-xl max-h-96 flex  custom900:flex-col custom900:mr-2 custom900:max-w-[200px] lg:gap-4   bg-white shadow-md p-4  mt-4 ">
       <BarCharts  />  
      </div>

    </div>
    {/* sos */}
    <div className="flex flex-wrap">
      <div className=" lg:ml-3 md:ml-3 rounded-xl max-h-96 custom900:flex-col custom900:flex-row bg-white shadow-md p-4 w-full mt-4 ">
        sos contentoaciabibibibibi
      </div>
    </div>
  </div>

  {/* recent trancations +Query */}
    {/* recent trancations */}
    <div className="flex flex-wrap gap-x-3  justify-start">
      <div className="lg:max-w-[350px] xl:max-w-[500px] rounded-xl max-h-96 w-full  custom900:max-w-1/2 custom900:flex-col  flex-wrap gap-4 bg-white  shadow-md p-4 mt-4 ">
        <div className="flex justify-between mb-2">
          <p className="align-start font-bold text-lg " >Recent Transaction</p>
        </div>
        <div className="overflow-y-auto scrollbar-thumb-rounded max-h-80">
          <TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundUp/>}
            title={"Master Card"}
            value={1234}
            color="text-green-600"
          />
          <TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundDown/>}
            title={"Withdrawal"}
            value={1234}
            color="text-red-600"
          /><TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundUp/>}
            title={"Master Card"}
            value={1234}
            color="text-green-600"
          />
          <TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundDown/>}
            title={"Withdrawal"}
            value={1234}
            color="text-red-600"
          /><TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundUp/>}
            title={"Master Card"}
            value={1234}
            color="text-green-600"
          />
          <TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundDown/>}
            title={"Withdrawal"}
            value={1234}
            color="text-red-600"
          /><TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundUp/>}
            title={"Master Card"}
            value={1234}
            color="text-green-600"
          />
          <TransactionCard 
            icon1={<AiOutlineCheckCircle/>}
            icon2={<IoIosArrowRoundDown/>}
            title={"Withdrawal"}
            value={1234}
            color="text-red-600"
          />
        </div>
      </div>

      {/* Query */}
      <div className="lg:max-w-[400px] xl:max-w-[460px] rounded-xl max-h-96  custom900:max-w-[310px] custom900:flex-row  flex-wrap  bg-white shadow-md p-4 w-full mt-4  ">
       <div className="custom900:max-w-full w-full">
        <div className="flex justify-between mb-2">
          <p className="align-start font-bold text-lg " >Query </p>
          <button className="align-end text-md text-[skyblue] " >View All</button>

        </div>
        <div>
          <QueryCard
          profilePicUrl={dummpypic}
          icon={<AiOutlineRight/>}
          title={"break not fixed"}
          desc={"i give to shop my bike some day age but they didnt repair in time and they didnt fix it"}
          
          />
        </div>
       </div>
      </div>
    </div>
    <div className="lg:max-w-full rounded-xl max-h-96  md:max-w-full md:flex-col  flex-wrap  bg-white shadow-md p-4 w-full mt-4 -mb-6">
      <div className="flex items-center justify-center space-x-1">
      <p className="text-center "><AiOutlineCopyrightCircle/></p>
      <p className="text-center">YESMECHANGE </p>
      </div>
    </div>
    </div>
  );
};
