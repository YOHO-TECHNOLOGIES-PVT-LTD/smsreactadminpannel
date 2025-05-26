import React, { useState } from 'react';

const mockNotifications = [
  {
    id: 1,
    title: 'Meeting at 7:30 PM',
    description: 'You have an upcoming meeting with Alex regarding digital marketing',
    status: 'new',
    type: 'info',
    date: '24/12/2025'
  },
  {
    id: 2,
    title: 'New Session booked by Anthony M',
    description: 'New session is booked by anthony, on 27th Jan at 5:30 PM',
    status: 'new',
    type: 'info',
    date: '27/01/2025'
  },
  {
    id: 3,
    title: 'Error processing Payment',
    description: 'Please review the wallet details and fix the error to process your payments',
    status: 'new',
    type: 'error',
    date: '24/12/2025'
  },
  {
    id: 4,
    title: 'You have a new message from Iuko',
    description: 'You have a new message in conversations from Iuko Wild',
    status: '',
    type: 'info',
    date: '24/12/2025'
  },
  {
    id: 5,
    title: 'Meeting at 06:45 PM',
    description: 'You have a meeting with Lauren regarding career navigation',
    status: '',
    type: 'info',
    date: '13/12/2025'
  },
  {
    id: 6,
    title: 'Congratulations your profile is 100% complete',
    description: 'Your payment for booking #12345 has been received.',
    status: '',
    type: 'info',
    date: '09/12/2025'
  }
];

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleDelete = (id:any) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl p-6 shadow">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold"> Custom Notifications</h2>
        <button className="text-sm text-blue-600 hover:underline">Mark all as read</button>
      </div>

     
      <div className="flex gap-4 mb-6">
        <button className="bg-blue-600 hover:bg-orange-700  text-white px-4 py-2  lg:text-xl sm:text-sm">All</button>
        <button className="bg-blue-600 hover:bg-orange-700 text-white px-4 py-1 lg:text-xl sm:text-sm">New</button>
        <button className="bg-blue-600 hover:bg-orange-700 text-white px-4 py-1  lg:text-xl sm:text-sm ">Unread</button>
      </div>

     
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start justify-between p-4 rounded-xl border 
              ${notif.type === 'error' ? 'bg-red-50 border-red-300' : 'border-gray-200'}`}
          >
            <div className="flex items-start gap-3">
              {notif.type === 'error' ? (
                <span className="text-red-500 text-lg mt-1">⚠️</span>
              ) : (
                <span className="text-gray-400 text-lg mt-1">🔔</span>
              )}
              <div>
                <h4 className={`font-medium ${notif.type === 'error' ? 'text-red-600' : 'text-gray-800'}`}>
                  {notif.title}
                </h4>
                <p className={`text-sm ${notif.type === 'error' ? 'text-red-500' : 'text-gray-500'}`}>
                  {notif.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <div className="flex gap-6">
                {notif.status === 'new' && (
                  <span className="bg-green text-green-700 text-sm px-2 py-1 rounded">New</span>
                )}
                <button
                  onClick={() => handleDelete(notif.id)}
                  className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
              <p className="text-xs text-gray-400">{notif.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
