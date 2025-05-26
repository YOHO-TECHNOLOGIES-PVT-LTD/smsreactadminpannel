import { useState } from 'react';

import { FaBell } from "react-icons/fa";

const mockNotifications = [
  {
    id: 1,
    title: 'Meeting at 7:30 PM',
    description: 'You have an upcoming meeting with Alex regarding digital marketing',
    status: 'new',
    type: 'info',
    date: '2025-12-24T19:30:00',
  },
  {
    id: 2,
    title: 'New Session booked by Anthony M',
    description: 'New session is booked by Anthony, on 27th Jan at 5:30 PM',
    status: 'new',
    type: 'info',
    date: '2025-01-27T17:30:00',
  },
  {
    id: 3,
    title: 'You have a new message from Iuko',
    description: 'You have a new message in conversations from Iuko Wild',
    status: '',
    type: 'info',
    date: '2025-12-24T20:45:00',
  },
  {
    id: 4,
    title: 'Meeting at 06:45 PM',
    description: 'You have a meeting with Lauren regarding career navigation',
    status: '',
    type: 'info',
    date: '2025-12-13T18:45:00',
  },
  {
    id: 5,
    title: 'Congratulations your profile is 100% complete',
    description: 'Your payment for booking #12345 has been received.',
    status: '',
    type: 'info',
    date: '2025-12-09T12:00:00',
  },
];

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) =>
      prev
        .map((notif) =>
          notif.id === id ? { ...notif, status: '' } : notif
        )
        .filter((notif) => notif.id !== id || notif.type !== 'error')
    );
  };

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
