// import React from 'react'

//import AutomatedNotifications from '../../components/common/Notification/AutomatedNotifications.tsx'
//import NotificationsLogs from '../../components/common/Notification/NotificationsLogs.tsx'
import CustomNotifications from '../../components/common/Notification/CustomNotifications.tsx' 
// import SosDashboard from '../sos/SosDashboard.tsx'
// import SosDetails from '../sos/SosDetailsCard.tsx'

export const NotificationPage = () => {
  return (
    <div className='flex flex-col'>
      <h1 className="font-bold lg:text-2xl sm:text-sm text-[#9b111e] ">Notification</h1>
      <CustomNotifications/>
      {/* <SosDashboard/>
      <SosDetails/> */}
    </div>

  )
}
