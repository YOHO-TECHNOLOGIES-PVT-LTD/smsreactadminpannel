// import React from 'react'

import AutomatedNotifications from '../../components/common/Notification/AutomatedNotifications.tsx'
import NotificationsLogs from '../../components/common/Notification/NotificationsLogs.tsx'
import SosDashboard from '../sos/SosDashboard.tsx'

export const NotificationPage = () => {
  return (
    <div className='flex flex-col gap-20'>
      <AutomatedNotifications />
      <NotificationsLogs />
      <SosDashboard/>
    </div>

  )
}
