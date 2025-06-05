import { useState, useEffect } from "react";
import { QueryCard } from "../../components/common/dashboard/QueryCard/QueryCard";
import dummpypic from "../../assets/Dashboard/images.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getQueries } from "../../features/Queries/service";

type Query = {
  _id: number;
  subject: string;
  description: string;
  profilePicUrl: string;
  isRead: boolean;
  center: string;
  postDate: string
};

// const initialQueries: Query[] = [
//   {
//     _idid: 1,
//     subject: "Break not fixed",
//     description: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
//     profilePicUrl: dummpypic,
//     isRead: false,
//     center: "Red Hills Center",
//     postDate:''
//   },
//   {
//     id: 2,
//     subject: "Glass work bending",
//     description: "I gave my car to the shop some days ago but they didn't repair it in time and didn't fix it.",
//     profilePicUrl:
//       "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000",
//     isRead: false,
//     center: "OMR Center",
//     postDate:''
//   },
//   {
//     id: 3,
//     subject: "Tyre puncture",
//     description: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
//     profilePicUrl:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000",
//     isRead: true,
//     center: "ECR Center",
//     postDate:''
//   },
//   {
//     id: 4,
//     subject: "Late pickup service",
//     description: "Scheduled pickup was delayed by 2 hours without any update or notice.",
//     profilePicUrl:
//       "https://t3.ftcdn.net/jpg/08/86/78/68/360_F_886786813_XhL8zD8rhZCW7F5HvJdOPvquFh3n23vd.jpg",
//     isRead: true,
//     center: "Anna nagar Center",
//     postDate:''
//   },
//   {
//     id: 5,
//     subject: "Billing mismatch",
//     description: "Was charged extra without prior intimation or explanation on final invoice.",
//     profilePicUrl:
//       "https://www.shutterstock.com/image-photo/happy-middle-aged-45-years-260nw-2516789519.jpg",
//     isRead: false,
//     center: "Tambaram Center",
//     postDate:''
//   },
// ];

const Queries = () => {
  const [queries, setQueries] = useState<Query[]>([]);
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  const [filter, setFilter] = useState<"All" | "Unread" | "Read">("All");

  const handleSelectQuery = (query: Query) => {
    if (!query.isRead) {
      const updatedQueries = queries.map((q) =>
        q._id === query._id ? { ...q, isRead: true } : q
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

  console.log(filteredQueries, "queries")

  const fetchQueries = async () => {
  try {
    const response: any = await getQueries({});
    const formattedData = response.data.data.map((item: any) => ({
      ...item,
      postDate: new Date(item.postDate).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    }));
    console.log('date',formattedData)
    setQueries(formattedData);
  } catch (error) {
    console.error("Error fetching queries", error);
  }
};


  useEffect(()=>{
    fetchQueries()
  },[])

  useEffect(() => {
  const stillExists = queries.find((q) => q._id === selectedQuery?._id);
  const matchesFilter =
    filter === "All" ||
    (filter === "Read" && selectedQuery?.isRead) ||
    (filter === "Unread" && !selectedQuery?.isRead);

  if (!stillExists || !matchesFilter) {
    setSelectedQuery(null);
  }
}, [filter, queries]);


  return (
    <div className="flex h-screen bg-[#f5f0ec]">
      {/* Sidebar Filters */}
      <div className="w-1/5 bg-[#FAF3EB] p-4 border-r">
        <h2 className="text-lg font-semibold mb-4 text-[#da4c5a]">Filters</h2>
        <div className="space-y-2">
          {["All", "Unread", "Read"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                filter === f
                  ? "bg-[#de6874] text-white"
                  : "text-[#724e35] hover:bg-[#eaced1]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Query List */}
      <div className="w-2/5 p-4 space-y-3 overflow-y-auto border-r">
        {filteredQueries.length === 0 && (
          <p className="text-center text-gray-400">"No queries to show."</p>
        )}
        {filteredQueries.map((q) => (
          <div
            key={q._id}
            onClick={() => handleSelectQuery(q)}
            className={`rounded-lg shadow-sm cursor-pointer border-l-4 border-[#9b111e] transition-all duration-200 ${
              q.isRead 
                ? " bg-[#f5f3f1] hover:bg-[#f2f1ef] " 
                : " bg-[#eae5d9] hover:bg-[#ece8db]"
            }`}
          >
            <QueryCard
              icon={null}
              title={q.subject}
              desc={q.description}
              time={q.postDate}
              profilePicUrl={q.profilePicUrl}
            />
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      <div className="w-2/5 p-6">
        {selectedQuery ? (
          <>
            <button
              onClick={() => setSelectedQuery(null)}
              className="text-[#9b111e] flex items-center mb-4"
            >
              <AiOutlineArrowLeft className="mr-2" />
              Back
            </button>

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

            <h2 className="text-xl font-bold text-[#9d1623] mb-2">
              {selectedQuery.subject}
            </h2>

            <p className="text-gray-800">{selectedQuery.description}</p>
          </>
        ) : (
          <p className="text-gray-400 text-center mt-10">
            "Select a query card to view full details"
          </p>
        )}
      </div>
    </div>
  );
};

export default Queries;
