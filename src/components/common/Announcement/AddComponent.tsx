import React from 'react';

const AddComponent = () => {
  return (
    <form className="space-y-4">
      
      <div>
        <label className="block font-semibold mb-1">Heading</label>
        <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Enter heading" />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea className="w-full border px-3 py-2 rounded" rows={3} placeholder="Enter description"></textarea>
      </div>

      <div>
        <label className="block font-semibold mb-1">Image Upload</label>
        <input type="file" className="w-full" />
      </div>

      <div>
        <label className="block font-semibold mb-1">Offer Price</label>
        <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Enter price" />
      </div>

      <button
        type="submit"
        className="bg-[#9b111e] text-white px-4 py-2 rounded hover:bg-[#7c0d18]"
      >
        Save Offer
      </button>
    </form>
  );
};

export default AddComponent;
