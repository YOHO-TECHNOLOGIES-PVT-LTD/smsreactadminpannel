
import React, { useState } from 'react';
import Offer from '../../components/common/Announcement/Offer';
import AnnouncementList from '../../components/common/Announcement/AnnouncementList';
import Partner from '../../components/common/Announcement/Partner';

export const Announcement = () => {
  const [activeTab, setActiveTab] = useState<'offer' | 'announcement' | 'partner'>('offer');

  const renderComponent = () => {
    switch (activeTab) {
      case 'offer':
        return <Offer />;
      case 'announcement':
        return <AnnouncementList />;
      case 'partner':
        return <Partner />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4EC] p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {['offer', 'announcement', 'partner'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
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

      <div className="grid md:grid-cols-3 gap-4">{renderComponent()}</div>
    </div>
  );
};

export default Announcement;
