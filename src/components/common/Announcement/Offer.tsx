
import React, { useState } from 'react';

const offers = [
  {
    title: 'EXTERIOR WASH AND POLISH',
    price: '$30.00',
    image: 'https://londoncarwash.dk/wp-content/uploads/2020/10/blog_5.jpg',
  },
  {
    title: 'INTERIOR DETAILING',
    price: '$35.00',
    image: 'https://i.pinimg.com/originals/c2/fe/dc/c2fedcef65f8ceb8cf4937c6407e6792.jpg',
  },
  {
    title: 'CERAMIC COATING',
    price: '$40.00',
    image: 'https://th.bing.com/th/id/OIP.oHmubqo3ZmInulyncZmU_AHaE8?cb=iwp2&rs=1&pid=ImgDetMain',
  },
];

const Offer = ({
  showModal,
  closeModal,
}: {
  showModal: boolean;
  closeModal: () => void;
}) => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ heading, description, price, image });
    closeModal();
  };

  return (
    <>
      {offers.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-[#9b111e] font-bold mt-2">Start from {item.price}</p>
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 text-2xl font-bold hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#9b111e]">Add New Offer</h2>
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
                type="number"
                placeholder="Offer Price"
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
                  onClick={closeModal}
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
    </>
  );
};

export default Offer;
