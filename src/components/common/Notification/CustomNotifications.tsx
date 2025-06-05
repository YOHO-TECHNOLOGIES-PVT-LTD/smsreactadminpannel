import { useEffect, useState } from 'react';

import { FaBell } from "react-icons/fa";

import {  getAllNotification } from './services';




const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');
  

  
  useEffect(() => {
  const fetchUserNotifications = async () => {
    try {
      const res: any = await getAllNotification('');
      const data = Array.isArray(res?.data?.data) ? res.data.data : [];
      setNotifications(data);
    } catch (err) {
      console.log("Error fetching user notifications:", err);
    }
  };

  fetchUserNotifications();
}, []);
  

  // const handleDelete = (id: number) => {
  //   setNotifications(notifications.filter((n) => n.id !== id));
  // };

  // const handleMarkAsRead = (id: number) => {
  //   setNotifications((prev) =>
  //     prev
  //       .map((notif) =>
  //         notif.id === id ? { ...notif, status: '' } : notif
  //       )
  //       .filter((notif) => notif.id !== id || notif.type !== 'error')
  //   );
  // };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return notif.status === 'new';
    if (filter === 'read') return notif.status !== 'new';
    return true;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="w-full h-full mt-5 bg-white rounded-2xl p-6 shadow">
      <div className="flex justify-between gap-4 mb-6">
        <div className="flex gap-4">
          {['all', 'read', 'unread'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`w-24 h-10 rounded px-4 py-2  ${
                filter === type
                  ? 'bg-[#9b111e] text-white'
                  : '  border-2 border-[#9b111e] text-[#9b111e]'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>

            
          ))}
        </div>
        <button
          onClick={() =>
            setNotifications((prev) =>
              prev
                .map((n) => ({ ...n, status: '' }))
                .filter((n) => n.type !== 'error')
            )
          }
          className="text-sm text-[#9b111e] hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {filteredNotifications.map((notif) => {
          const isUnread = notif.status === 'new';
          return (
            <div
              key={notif.id}
              className={`flex items-start justify-between p-4 rounded-xl border transition ${
                notif.type === 'error'
                  ? 'bg-red-50 border-red-300'
                  : isUnread
                  ? 'bg-orange-100 border-yellow-300'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3 cursor-pointer" onClick={() => handleMarkAsRead(notif.id)}>
                <span className={`text-lg mt-1 ${notif.type === 'error' ? 'text-red-500' : 'text-gray-400'}`}>
                  {notif.type === 'error' ? '⚠️' : <FaBell  className='text-[#9b111e] text-center'/>}
                </span>
                <div>
                  <h4
                    className={`font-medium ${
                      notif.type === 'error'
                        ? 'text-red-600'
                        : isUnread
                        ? 'text-black'
                        : 'text-gray-600'
                    }`}
                  >
                    {notif.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      notif.type === 'error'
                        ? 'text-red-500'
                        : isUnread
                        ? 'text-gray-800'
                        : 'text-gray-500'
                    }`}
                  >
                    {notif.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2 text-right">
                <div className="flex items-center gap-2">
                  {isUnread && (
                    <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  <p className="text-xs text-gray-500 whitespace-nowrap">
                    {formatDate(notif.date)}
                  </p>

                  <button
                  onClick={() => handleDelete(notif.id)}
                  className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm hover:bg-red-200"
                >
                  Delete
                </button>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationPanel;
