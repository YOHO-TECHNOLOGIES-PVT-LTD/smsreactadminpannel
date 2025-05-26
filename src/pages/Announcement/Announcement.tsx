import React, { useState } from 'react';
import Offer from '../../components/common/Announcement/Offer';
import AnnouncementList from '../../components/common/Announcement/AnnouncementList';
import Partner from '../../components/common/Announcement/Partner';

// Define the partner data type
type PartnerData = {
  title: string;
  description: string;
  price: string;
  image: string;
};

export const Announcement = () => {
  const [activeTab, setActiveTab] = useState<'offer' | 'announcement' | 'partner'>('offer');
  const [showModal, setShowModal] = useState(false);

  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);

  // Remove unused partnerData state to fix TypeScript warning
  // const [partnerData, setPartnerData] = useState<PartnerData[]>([]);

  const resetForm = () => {
    setHeading('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newData: PartnerData = {
      title: heading,
      description,
      price,
      image: image ? URL.createObjectURL(image) : '',
    };

    // Store data based on active tab
    if (activeTab === 'offer') {
      // Handle offer data submission
      console.log('Offer added:', newData);
    } else if (activeTab === 'announcement') {
      // Handle announcement data submission
      console.log('Announcement added:', newData);
    } else if (activeTab === 'partner') {
      // Handle partner data submission
      console.log('Partner added:', newData);
      // If Partner component has methods to add data, you could call them here
      // For example: PartnerService.addPartner(newData);
    }

    resetForm();
    setShowModal(false);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'offer':
        return (
          <Offer
            showModal={false}
            closeModal={() => {}}
          />
        );
      case 'announcement':
        return <AnnouncementList />;
      case 'partner':
        // Remove the data prop since Partner component doesn't accept it
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
        {(activeTab === 'offer' || activeTab === 'announcement' || activeTab === 'partner') && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#9b111e] text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            + Add
          </button>
        )}
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
              Add New {activeTab === 'offer' ? 'Offer' : activeTab === 'announcement' ? 'Announcement' : 'Partner'}
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

export default Announcement;