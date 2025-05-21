
import React from "react";

type NotificationListprops={
    icon1: React.ReactNode;
    icon2:React.ReactNode;
    title:String;
    desc:String;
    id:number;
}

export const NotificationList:React.FC<NotificationListprops> = ({
  title,icon1,icon2,desc,id,}) => { 
  return (
    <>    
    <div className="">
        <div className="flex flex-wrap w-200px ">
          <div className=" flex  border-2 border-solid  rounded-xl bg-white shadow-md p-2">
            {icon1}
            <div className="">
              <p>{title}</p>
              <p>` {desc} #{id}`</p>
            </div >
            {icon2}
          </div>
        </div>
    </div>
    </>
  )
}

