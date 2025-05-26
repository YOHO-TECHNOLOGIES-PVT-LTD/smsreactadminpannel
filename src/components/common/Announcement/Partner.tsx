import  { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const partners = [
  {
    title: 'XYZ Auto Parts',
    price: '10% Discount',
    image: 'https://www.xyz-racing.com/upload/gallery/m_483d8f9fd4de4c6e1f98d49a3da5ce50-u0bA.JPG',
  },
  {
    title: 'Shine & Drive',
    price: 'Free Interior Detailing',
    image: 'https://lirp.cdn-website.com/8bf226d6/dms3rep/multi/opt/stock-photo-a-man-cleaning-car-interior-car-detailing-or-valeting-concept-selective-focus-743191834-1920w.jpg',
  },
  {
    title: 'Lubricants Inc.',
    price: 'Buy 1 Get 1',
    image: 'https://th.bing.com/th/id/OIP.tyrB8f5W1qgQy4eViuZgcgHaD2?cb=iwp2&w=1200&h=624&rs=1&pid=ImgDetMain',
  },
];

const Partner = () => {
  const [showModal, setShowModal] = useState(false);
  // const [sharedWith, setSharedWith] = useState('');

  const handleShare = () => {
    // setSharedWith(title);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2500);
  };

  return (
    <>
      {partners.map((item, index) => (
        <div key={index} className="flex flex-col hover:shadow-xl transform hover:scale-[1.02] p-2 transition-all duration-300 bg-white shadow-md rounded-lg mb-4 mx-6">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-[#9b111e] font-bold mt-2">{item.price}</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => handleShare()}
                className="text-sm px-3 py-1 bg-[#9b111e] text-white rounded-full hover:bg-red-700 transition"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-md text-center w-[280px]">
            <CheckCircle className="text-green-600 w-10 h-10 mx-auto mb-2 animate-bounce" />
            <h3 className="text-lg font-semibold">Shared Successfully with partner</h3>
            {/* <p className="text-sm text-gray-600">with {sharedWith}</p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Partner;