import { useEffect, useState, useRef } from "react";
import { FaBell } from "react-icons/fa";
import { toast } from "react-toastify";
import { getAllNotification } from "./services";
import { FONTS } from "../../../constants/uiConstants";
import { useSocket } from "../../../context/adminSocket";
// import notificationSound from "../../../assets/notification.mp3";

interface Notification {
	id: number;
	message: string;
	created_at: string;
	is_read: boolean;
	priority: string;
	action_type: string;
	title: string;
	is_active: boolean
}

const NotificationPanel: React.FC = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");
  const socket = useSocket();

  useEffect(()=>{
    if(!socket) return;

    const handleNotification = (data: any) => {
      console.log("Admin Notification Recieved", data)
    }

    socket.on("newNotification", handleNotification)

    return ()=>{
      socket.off('newNotification', handleNotification)
    }
  }, [socket])


  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res:any = await getAllNotification();
        setNotifications(res.data?.data || []);
      } catch (err) {
        console.error("Fetch error", err);
      }
    };
    fetchNotifications();
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n._id === id ? { ...n, is_read: true } : n))
    );
  };

  const filtered = notifications.filter((n) =>
    filter === "all" ? true : filter === "read" ? n.is_read : !n.is_read
  );

  const formatDate = (d) => new Date(d).toLocaleString();

  return (
    <div className="p-4 bg-white rounded shadow w-full mx-auto mt-5">
      <div className="flex justify-between mb-4">
        <div className="space-x-2">
          {["all", "read", "unread"].map((f) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full border ${f === filter ? "bg-[#9b111e] text-white" : "text-[#9b111e] border-[#9b111e]"}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })))}>
          Mark all as read
        </button>
      </div>
      <div className="space-y-4">
        {filtered.map((n) => (
          <div
            key={n._id}
            className={`p-4 rounded border ${n.is_read ? "bg-gray-100" : "bg-yellow-100"}`}
            onClick={() => handleMarkAsRead(n._id)}
          >
            <div className="flex justify-between">
              <div>
                <h4 className="font-semibold">{n.title}</h4>
                <p className="text-sm">{n.message}</p>
              </div>
              <span className="text-xs text-gray-500">{formatDate(n.created_at)}</span>
            </div>
          </div>
        ))}
      </div>
      {/* <audio ref={audioRef} src={notificationSound} preload="auto" /> */}
    </div>
  );
};

export default NotificationPanel;