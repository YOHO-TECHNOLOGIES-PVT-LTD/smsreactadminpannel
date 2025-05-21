
import React, { useState } from 'react';

interface CardData {
  title: string;
  price: string;
  image: string;
}

export const Announcement = () => {
  const [activeTab, setActiveTab] = useState<'offer' | 'announcement' | 'partner'>('offer');

  const offers: CardData[] = [
    {
      title: 'EXTERIOR WASH AND POLISH',
      price: '$30.00',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
    {
      title: 'INTERIOR DETAILING',
      price: '$35.00',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
    {
      title: 'CERAMIC COATING',
      price: '$40.00',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
  ];

  const announcements: CardData[] = [
    {
      title: 'Holiday Discount',
      price: '20% Off',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
    {
      title: 'Free Car Wash',
      price: 'On Orders $50+',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
    {
      title: 'Limited Time Offer',
      price: 'Until May 30',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
  ];

  const partners: CardData[] = [
    {
      title: 'XYZ Auto Parts',
      price: '10% Discount',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
    {
      title: 'Shine & Drive',
      price: 'Free Interior Detailing',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
    {
      title: 'Lubricants Inc.',
      price: 'Buy 1 Get 1',
      image: 'https://automechanica.com/uploads/service_gallery/image/35/shutterstock_1464298340.jpg',
    },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'offer':
        return offers;
      case 'announcement':
        return announcements;
      case 'partner':
        return partners;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4EC] p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {['offer', 'announcement', 'partner'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'offer' | 'announcement' | 'partner')}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? 'bg-[#9b111e] text-white'
                  : 'bg-white text-[#9b111e] border border-[#9b111e]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <button className="bg-[#9b111e] text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition">
          + Add
        </button>
      </div>

      <h1 className="text-2xl font-bold text-[#9b111e] mb-2">
        {activeTab === 'offer'
          ? 'Special Offers'
          : activeTab === 'announcement'
          ? 'Latest Announcements'
          : 'Our Partners'}
      </h1>
      <p className="text-gray-600 mb-6">
        {activeTab === 'offer'
          ? 'Experience the Art of Automotive Renewal'
          : activeTab === 'announcement'
          ? 'Stay up to date with our latest news'
          : 'Meet our trusted collaborators'}
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {getCurrentData().map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
                <p className="text-[#9b111e] font-bold mt-2">Start from {item.price}</p>
              </div>
              {activeTab === 'partner' && (
                <div className="mt-4 text-right">
                  <button className="text-sm px-3 py-1 bg-[#9b111e] text-white rounded-full hover:bg-red-700 transition">
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
