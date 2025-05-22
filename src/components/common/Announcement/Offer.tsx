import React from 'react';

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

const Offer = () => (
  <>
    {offers.map((item, index) => (
      <div key={index} className="card">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="text-[#9b111e] font-bold mt-2">Start from {item.price}</p>
        </div>
      </div>
    ))}
  </>
);

export default Offer;
