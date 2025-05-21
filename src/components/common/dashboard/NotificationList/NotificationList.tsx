
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
        <div className="flex">
          <div className=" flex bg-[#FAF3EB] w-full rounded-xl  shadow-md p-2 justify-between mt-2   " >
           <div className="w-10 h-10 mr-3 text-xl rounded-md flex items-center justify-center ">
              {icon1}
           </div>
            <div className="   w-full">
              <p className="font-semibold">{title}</p>
              <p className="line-clamp-2 font-light">` {desc} #{id}`</p>
            </div >
            <div className="align-end ">
              <div className="text-[green]">
                {icon2}
                </div>
                </div>
          </div>
        </div>
    </div>
    </>
  )
}

