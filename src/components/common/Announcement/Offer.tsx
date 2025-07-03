import React, { useState } from 'react';
import { FONTS } from '../../../constants/uiConstants';
import dummyImg from '../../../assets/dummy/dummyimage.jpg'

const Offer = () => {
  const [offers, setOffers] = useState([
    {
      title: 'EXTERIOR WASH AND POLISH',
      price: '30.00',
      image: dummyImg,
    },
    {
      title: 'INTERIOR DETAILING',
      price: '35.00',
      image: dummyImg,
    },
    {
      title: 'CERAMIC COATING',
      price: '40.00',
      image: dummyImg,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOffer = {
      title: heading,
      price,
      image: image
        ? URL.createObjectURL(image)
        : 'https://via.placeholder.com/300x150?text=No+Image',
    };
    setOffers((prev) => [...prev, newOffer]);
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
  <div className="relative px-6 mt-4">
    <button
      className="flex items-center bg-[#9b111e] gap-2 font-bold px-4 py-2 rounded-lg !text-white transition duration-200 active:scale-105 hover:bg-[#a00000]"
      style={{ ...FONTS.paragraph
      }}
      onClick={() => setShowModal(true)}
    >
      + Add Offer
    </button>


    {/* Cards Grid */}
    <div className="grid grid-cols-3 gap-6 mt-6">

        {offers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col hover:shadow-xl transform hover:scale-[1.02] p-2 transition-all duration-300 bg-white shadow-md rounded-lg"
          >
            <img
              src={item.image || dummyImg}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-base !text-gray-900 font-semibold" style={{...FONTS.paragraph}}>{item.title}</h3>
              <p className="text-[#9b111e] !font-bold mt-2" style={{...FONTS.cardSubHeader}}>Start from {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-3xl w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
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
                  onClick={() => {
                    resetForm();
                    setShowModal(false);
                  }}
                  className="px-4 py-2 border border-gray-400 rounded-3xl hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#9b111e] text-white rounded-3xl hover:bg-[#7c0d18]"
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

export default Offer;
