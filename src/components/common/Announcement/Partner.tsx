import React from 'react';

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

const Partner = () => (
  <>
    {partners.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-[#9b111e] font-bold mt-2">{item.price}</p>
          </div>
          <div className="mt-4 text-right">
            <button className="text-sm px-3 py-1 bg-[#9b111e] text-white rounded-full hover:bg-red-700 transition">
              Share
            </button>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Partner;
