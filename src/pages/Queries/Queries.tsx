import { useState } from "react";
import { QueryCard } from "../../components/common/dashboard/QueryCard/QueryCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import dummpypic from "../../assets/Dashboard/images.jpg";
import { useNavigate } from "react-router-dom";

// ✅ Define type for query
type Query = {
  title: string;
  desc: string;
  profilePicUrl: string;
};

// ✅ Strongly type the queries array
const queries: Query[] = [
  {
    title: "Break not fixed",
    desc: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl: dummpypic,
  },
  {
    title: "Glass work bending",
    desc: "I gave my car to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000",
  },
  {
    title: "Tyre puncture",
    desc: "I gave my bike to the shop some days ago but they didn't repair it in time and didn't fix it.",
    profilePicUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000",
  },
  {
    title: "Late pickup service",
    desc: "Scheduled pickup was delayed by 2 hours without any update or notice.",
    profilePicUrl:
      "https://t3.ftcdn.net/jpg/08/86/78/68/360_F_886786813_XhL8zD8rhZCW7F5HvJdOPvquFh3n23vd.jpg",
  },
  {
    title: "Billing mismatch",
    desc: "Was charged extra without prior intimation or explanation on final invoice.",
    profilePicUrl:
      "https://www.shutterstock.com/image-photo/happy-middle-aged-45-years-260nw-2516789519.jpg",
  },
];

const Queries = () => {
  const navigate = useNavigate();

  // ✅ Type the state properly
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      <button
        className="flex items-center text-gray-600 hover:text-red-600 mb-4"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft className="mr-2" /> Back
      </button>

      <h1 className="text-2xl font-semibold mb-6 text-primary">All Queries</h1>

      <div className="space-y-4">
        {queries.map((q, idx) => (
          <div key={idx} onClick={() => setSelectedQuery(q)}>
            <QueryCard
              icon={null}
              title={q.title}
              desc={q.desc}
              profilePicUrl={q.profilePicUrl}
            />
          </div>
        ))}
      </div>

      {/* Modal for selected query */}
      {selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl w-full max-w-xl p-6 relative">
            {/* Back button */}
            <button
              className="absolute top-2 left-3 w-8 h-8 flex items-center justify-center text-lg text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full"
              onClick={() => setSelectedQuery(null)}
            >
              <AiOutlineArrowLeft />
            </button>

            {/* Close button */}
            <button
              className="absolute top-2 right-3 w-8 h-8 flex items-center justify-center text-lg text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full"
              onClick={() => setSelectedQuery(null)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-primary">Query Detail</h2>

            <QueryCard
              icon={null}
              title={selectedQuery.title}
              desc={selectedQuery.desc}
              profilePicUrl={selectedQuery.profilePicUrl}
            />
            <p className="mt-4 text-gray-700">{selectedQuery.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Queries;
