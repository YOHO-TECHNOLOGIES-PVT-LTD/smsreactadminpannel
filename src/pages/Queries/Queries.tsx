import { useState } from "react";
import { QueryCard } from "../../components/common/dashboard/QueryCard/QueryCard";
import dummpypic from "../../assets/Dashboard/images.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";

// Define the query type
type Query = {
  id: number;
  title: string;
  desc: string;
  profilePicUrl: string;
  isRead: boolean;
  center: string; // <-- new field
};

const initialQueries: Query[] = [
  {
    id: 1,
    title: "Break not fixed",
    desc: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl: dummpypic,
    isRead: false,
     center: "Red Hills Center",
  },
  {
    id: 2,
    title: "Glass work bending",
    desc: "I gave my car to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000",
    isRead: false,
     center: "OMR Center",
  },
  {
    id: 3,
    title: "Tyre puncture",
    desc: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000",
    isRead: true,
     center: "ECR Center",
  },
  {
    id: 4,
    title: "Late pickup service",
    desc: "Scheduled pickup was delayed by 2 hours without any update or notice.",
    profilePicUrl:
      "https://t3.ftcdn.net/jpg/08/86/78/68/360_F_886786813_XhL8zD8rhZCW7F5HvJdOPvquFh3n23vd.jpg",
    isRead: true,
     center: "Anna nagar Center",
  },
  {
    id: 5,
    title: "Billing mismatch",
    desc: "Was charged extra without prior intimation or explanation on final invoice.",
    profilePicUrl:
      "https://www.shutterstock.com/image-photo/happy-middle-aged-45-years-260nw-2516789519.jpg",
    isRead: false,
     center: "Tambaram Center",
  },
];

const Queries = () => {
  const [queries, setQueries] = useState<Query[]>(initialQueries);
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  const [filter, setFilter] = useState<"All" | "Unread" | "Read">("All");

  const handleSelectQuery = (query: Query) => {
    // Mark as read if not already
    if (!query.isRead) {
      const updatedQueries = queries.map((q) =>
        q.id === query.id ? { ...q, isRead: true } : q
      );
      setQueries(updatedQueries);
    }
    setSelectedQuery(query);
  };

  const filteredQueries = queries.filter((q) => {
    if (filter === "All") return true;
    if (filter === "Unread") return !q.isRead;
    if (filter === "Read") return q.isRead;
    return true;
  });

  return (
    <div className="flex h-screen bg-[#f6c6a4]">
      {/* Sidebar Filters */}
      <div className="w-1/5 bg-[#fdeae4] p-4 border-r">
        <h2 className="text-lg font-semibold mb-4 text-[#9b111e]">Filters</h2>
        <div className="space-y-2">
          {["All", "Unread", "Read"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                filter === f
                  ? "bg-gradient-to-r from-red-600 to-red-400 text-white"
                  : "text-red-600 hover:bg-red-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Middle Query List */}
      <div className="w-2/5 p-4 space-y-4 overflow-y-none border-r">
        {filteredQueries.length === 0 && (
          <p className="text-center text-gray-400">No queries to show.</p>
        )}
        {filteredQueries.map((q) => (
          <div
            key={q.id}
            onClick={() => handleSelectQuery(q)}
           
          >
            <QueryCard
              icon={null}
              title={q.title}
              desc={q.desc}
              profilePicUrl={q.profilePicUrl}
            />
          </div>
        ))}
      </div>

      <div className="w-2/5 p-6">
  {selectedQuery ? (
    <>
      <button
        onClick={() => setSelectedQuery(null)}
        className="text-red-500 flex items-center mb-4"
      >
        <AiOutlineArrowLeft className="mr-2" />
        Back to list
      </button>

      {/* User info + center */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={selectedQuery.profilePicUrl}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-800 text-lg">User</span>
        </div>
        <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">
          {selectedQuery.center}
        </span>
      </div>

      {/* Query title */}
      <h2 className="text-xl font-bold text-[#9b111e] mb-2">
        {selectedQuery.title}
      </h2>

      {/* Query description */}
      <p className="text-gray-800">{selectedQuery.desc}</p>
    </>
  ) : (
    <p className="text-gray-400 text-center mt-10">
      Select a query card to view full details
    </p>
  )}
</div>


    </div>
  );
};

export default Queries;
