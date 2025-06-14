import React, { useState } from 'react';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([
    {
      title: 'Holiday Discount',
      price: '20% Off',
      image: 'https://mensuas.typepad.com/.a/6a0120a6263b19970b017ee615fe72970d-600wi',
    },
    {
      title: 'Free Car Wash',
      price: 'On Orders 50+',
      image: 'https://brooklynads.com/wp-content/uploads/2024/02/Benefits-of-Offering-a-Free-Car-Wash-Vacuum-at-Your-Wash.png',
    },
    {
      title: 'Limited Time Offer',
      price: 'Until May 30',
      image: 'https://png.pngtree.com/png-clipart/20230323/original/pngtree-limited-time-offer-vector-design-png-image_9000472.png',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAnnouncement = {
      title: heading,
      price: price,
      image: image
        ? URL.createObjectURL(image)
        : 'https://via.placeholder.com/300x150?text=No+Image',
    };
    setAnnouncements([...announcements, newAnnouncement]);
    resetForm();
    setShowModal(false);
  };

  const resetForm = () => {
    setHeading('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    
    <div className="relative">
      {/* Add Announcement Button */}
      <div className="flex justify-between items-center px-6 mt-4 mb-6">
 
  <button
    className="flex items-center gap-2 font-bold px-4 py-2 rounded-lg text-white transition duration-200 active:scale-105 hover:bg-[#a00000]"
    style={{
      background: 'linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)',
    }}
    onClick={() => setShowModal(true)}
  >
    + Add Announcement
  </button>
</div>


      {/* ✅ Card Grid: This was missing */}
      <div className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col hover:shadow-xl transform hover:scale-[1.02] p-2 transition-all duration-300 bg-white shadow-md rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-[#9b111e] font-bold mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 text-2xl font-bold hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#9b111e]">
              Add New Announcement
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Heading"
                className="w-full p-2 border border-gray-300 rounded"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="cost difference"
                className="w-full p-2 border border-gray-300 rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                type="file"
                className="w-full"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowModal(false);
                  }}
                  className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#9b111e] text-white rounded hover:bg-[#7c0d18]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementList;
