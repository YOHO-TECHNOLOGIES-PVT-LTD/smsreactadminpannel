
import React from 'react';

const announcements = [
  {
    title: 'Holiday Discount',
    price: '20% Off',
    image: 'https://mensuas.typepad.com/.a/6a0120a6263b19970b017ee615fe72970d-600wi',
  },
  {
    title: 'Free Car Wash',
    price: 'On Orders $50+',
    image: 'https://brooklynads.com/wp-content/uploads/2024/02/Benefits-of-Offering-a-Free-Car-Wash-Vacuum-at-Your-Wash.png',
  },
  {
    title: 'Limited Time Offer',
    price: 'Until May 30',
    image: 'https://png.pngtree.com/png-clipart/20230323/original/pngtree-limited-time-offer-vector-design-png-image_9000472.png',
  },
];

const AnnouncementList = () => (
  <>
    {announcements.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="text-[#9b111e] font-bold mt-2">{item.price}</p>
        </div>
      </div>
    ))}
  </>
);

export default AnnouncementList;
