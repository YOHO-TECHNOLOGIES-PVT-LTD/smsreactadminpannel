import { ChartCard } from "../LineChart/LineChart";
import React from "react";

type DashboardCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  per: number;
  perColor: string;
  borderColor: string;
  backgroundColor: string;
  dataPoints: number[];
};

export const DashboardCard : React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  per,
  perColor,
  borderColor,
  backgroundColor,
  dataPoints,
}) => {
  return (
    <div className="rounded-xl bg-white shadow-md p-4 w-full max-w-[230px] h-[130px] align-center">
      <div className="flex justify-between items-start mb-2">
        <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor }}>
          <div className="text-white text-xl">{icon}</div>
        </div>
       <div>
         <p className="text-xs  text-gray-500">{title}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
       </div>
        <span className={`text-xs font-bold`} style={{ color: perColor }}>
          {per}%
        </span>
        
      </div>
      
      <div className="mt-2">
        <ChartCard
          dataPoints={dataPoints}
          borderColor={borderColor}
          backgroundColor={`${borderColor.replace("0.8", "0.1")}`}
        />
      </div>
    </div>
    
  );
};
