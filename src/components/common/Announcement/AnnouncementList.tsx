const announcements = [
  {
    title: 'Holiday Discount',
    price: '20% Off',
    image: 'https://mensuas.typepad.com/.a/6a0120a6263b19970b017ee615fe72970d-600wi',
  },
  {
    title: 'Free Car Wash',
    price: 'On Orders 50+',
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
      <div
  key={index}
  className="flex flex-col hover:shadow-xl transform hover:scale-[1.02] p-2 transition-all duration-300 bg-white shadow-md rounded-lg mb-4 mx-6"
>
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-40 object-cover rounded-t-lg"
  />
  <div className="p-4 flex-1 flex flex-col justify-between">
    <div>
      <h3 className="text-base font-semibold">{item.title}</h3>
      <p className="text-[#9b111e] font-bold mt-2">{item.price}</p>
    </div>
  </div>
</div>

    ))}
  </>
);

export default AnnouncementList;
