

// const announcements = [
//   {
//     title: 'Holiday Discount',
//     price: '20% Off',
//     image: 'https://mensuas.typepad.com/.a/6a0120a6263b19970b017ee615fe72970d-600wi',
//   },
//   {
//     title: 'Free Car Wash',
//     price: 'On Orders 50+',
//     image: 'https://brooklynads.com/wp-content/uploads/2024/02/Benefits-of-Offering-a-Free-Car-Wash-Vacuum-at-Your-Wash.png',
//   },
//   {
//     title: 'Limited Time Offer',
//     price: 'Until May 30',
//     image: 'https://png.pngtree.com/png-clipart/20230323/original/pngtree-limited-time-offer-vector-design-png-image_9000472.png',
//   },
// ];

const AnnouncementList = ({ data }: { data: any }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
    <div className="relative">
      <img
        src={
          data.image ||
          'https://png.pngtree.com/png-clipart/20230323/original/pngtree-limited-time-offer-vector-design-png-image_9000472.png'
        }
        alt={data.title}
        className="w-full h-48 object-cover"
      />
    </div>

    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#9b111e] mb-2">{data.title}</h3>
      <p className="text-sm text-gray-800 mb-1">
        <span className="font-medium text-gray-600">Subject:</span> {data.subject}
      </p>
      <p className="text-sm text-gray-700 mb-2 line-clamp-3">
        <span className="font-medium text-gray-600">Description:</span> {data.description}
      </p>
      <div className="mt-auto pt-2 border-t text-sm text-gray-500">
        Category: <span className="italic">{data.category || 'General'}</span>
      </div>
    </div>
  </div>
);

export default AnnouncementList;



