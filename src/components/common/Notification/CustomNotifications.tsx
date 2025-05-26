import  { useState } from 'react';

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
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  
  const filteredNotifications = notifications.filter((notif) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return notif.status === 'new';
    if (filter === 'read') return notif.status !== 'new';
    return true;
  });

  return (
    <div className="w-full mx-auto mt-5 bg-white rounded-2xl p-6 shadow">
      <div className="flex justify-between items-center mb-6">
        {/* <h2 className="text-xl font-semibold"> Custom Notifications</h2> */}
      </div>

      <div className="flex justify-between gap-4 mb-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`w-24 h-10 rounded px-4 py-2 text-white ${
              filter === 'all' ? 'bg-[#9b111e]' : 'bg-[#9b111e] hover:bg-orange-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('read')}
            className={`w-24 h-10 rounded px-4 py-2 text-white ${
              filter === 'read' ? 'bg-[#9b111e]' : 'bg-[#9b111e] hover:bg-orange-700'
            }`}
          >
            Read
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`w-24 h-10 rounded px-4 py-2 text-white ${
              filter === 'unread' ? 'bg-[#9b111e]' : 'bg-[#9b111e] hover:bg-orange-700'
            }`}
          >
            Unread
          </button>
        </div>

        <button className="text-sm text-[#9b111e] hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start justify-between p-4 rounded-xl border ${
              notif.type === 'error' ? 'bg-red-50 border-red-300' : 'border-gray-200'
            }`}
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
