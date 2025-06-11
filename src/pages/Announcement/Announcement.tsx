import React, { useEffect, useState } from 'react';
import AnnouncementList from '../../components/common/Announcement/AnnouncementList';
import { getAnnouncement, postAnnouncement } from './services';

type AnnouncementData = {
  id?: string;
  title: string;
  subject: string;
  description: string;
  category?: string;
  image?: string;
  type?: string;
};

export const Announcement = () => {
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const [announcements, setAnnouncements] = useState<AnnouncementData[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response: any = await getAnnouncement('');
        setAnnouncements(response.data.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  const resetForm = () => {
    setTitle('');
    setSubject('');
    setDescription('');
    setCategory('');
    setImage(null);
  };

  console.log(announcements)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subject', subject);
    formData.append('description', description);
    formData.append('category', category || 'general');
    formData.append('type', 'announcement');
    if (image) {
      formData.append('image', image);
    }

    try {
      const response:any = await postAnnouncement(formData);
      const responseData = response.data || {};

      const newItem: AnnouncementData = {
        title: responseData.title || title,
        subject,
        description,
        category: responseData.category || category || 'general',
        image: responseData.image || '',
        type: 'announcement',
      };

      setAnnouncements(prev => [...prev,newItem]);
      resetForm();
      setShowModal(false);
    } catch (error) {
      console.error('Failed to post announcement:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4EC] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#9b111e]">Latest Announcements</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#9b111e] text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
        >
          + Add
        </button>
      </div>

      <p className="text-gray-600 mb-6">Stay up to date with our latest news</p>

      <div className="grid md:grid-cols-3 gap-4">
        {announcements.map((data, index) => (
          <AnnouncementList key={index} data={data} />
        ))}
      </div>

  

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 text-2xl font-bold hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-5 text-[#9b111e]">Add New Announcement</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                placeholder="Category (optional)"
                className="w-full p-2 border border-gray-300 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
