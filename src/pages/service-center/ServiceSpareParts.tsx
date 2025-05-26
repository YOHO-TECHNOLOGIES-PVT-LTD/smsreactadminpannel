// import { COLORS } from "../../constants/uiConstants";
// import { useState } from "react";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { FiSearch } from "react-icons/fi";

// type ServiceCenterSpareParts = {
//   handleBack: () => void;
// };

// const spareParts = [
//   {
//     id: 1,
//     name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
//     price: 59900,
//     quantity: 5,
//   },
//   {
//     id: 2,
//     name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
//     price: 59900,
//     quantity: 5,
//   },
//   {
//     id: 3,
//     name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
//     price: 45000,
//     quantity: 2,
//   },
//   {
//     id: 4,
//     name: "Car Engine 5000cc - Boost Power- Silver Metals - Petrol Engine",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfVRLyYHmjawlYhhJkCemKDT9ZAZirPlUA&s",
//     price: 45000,
//     quantity: 2,
//   }
// ];

// const ServiceSpareParts: React.FC<ServiceCenterSpareParts> = ({ handleBack }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showSearch, setShowSearch] = useState(false);

//   const filteredParts = spareParts.filter((part) =>
//     part.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ background: COLORS.bgColor, minHeight: '100vh' }}>
//       <div className="p-4" style={{ background: COLORS.bgColor }}>
//         <button onClick={handleBack} className="">
//           <MdOutlineKeyboardBackspace className="text-[#800000] text-3xl" />
//         </button>
//       </div>
      
//       <div
//         className="flex p-4 pb-8 sticky top-0 rounded-t-xl shadow-inner-top border-b-2 border-orange-700"
//         style={{ backgroundColor: COLORS.bgColor }}
//       >
//         <h1 className="font-bold text-3xl pt-2" style={{ color: "#9b111e" }}>
//           Spare Parts Management System
//         </h1>
        
//         <div className="ml-auto flex items-center gap-4">
//           <button
//             className="bg-[#fce8e8] text-gray-600 hover:text-[#9b111e] p-2 rounded-full transition"
//             title="Search"
//             onClick={() => setShowSearch(!showSearch)}
//           >
//             <FiSearch size={22} className="text-[#800000]" />
//           </button>

//           {showSearch && (
//             <input
//               type="text"
//               className="px-4 py-1.5 border border-[#800000] focus:border-[#800000] rounded-md shadow-sm focus:outline-none"
//               placeholder="Search spare parts..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 mt-10">
//         {filteredParts.map((part) => (
//           <div key={part.id} className="flex justify-center">
//             <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow">
//               <img 
//                 className="p-8 rounded-t-lg w-full h-48 object-contain" 
//                 src={part.image} 
//                 alt={part.name} 
//               />
//               <div className="px-5 pb-5">
//                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
//                   {part.name}
//                 </h5>
//                 <div className="flex items-center mt-2.5 mb-5">
//                   <div className="flex items-center space-x-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className={`w-4 h-4 ${i < 4 ? "text-yellow-300" : "text-gray-200"}`}
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
//                     5.0
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                     Rs.{part.price.toLocaleString()}
//                   </span>
//                   <div className="bg-gray-100 rounded-lg px-3 py-1">
//                     <span className="text-sm">Quantity: </span>
//                     <span className="font-semibold">{part.quantity}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         {filteredParts.length === 0 && (
//           <div className="col-span-full text-center py-10">
//             <p className="text-xl font-semibold text-red-500">
//               No matching spare parts found.
//             </p>
//             {searchTerm && (
//               <button 
//                 className="mt-4 px-4 py-2 text-sm text-white rounded-md"
//                 style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
//                 onClick={() => setSearchTerm("")}
//               >
//                 Clear Search
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceSpareParts;
import { useState } from "react";
import { Search, ArrowLeft, ShoppingCart, Star, Package, Eye } from "lucide-react";

const COLORS = {
  bgColor: "#f8fafc",
  primary: "#9b111e",
  secondary: "#800000"
};

interface SparePart {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  discount?: number;
}

const spareParts: SparePart[] = [
  {
    id: 1,
    name: "Car Engine 5000cc - Boost Power - Silver Metals - Petrol Engine",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 59900,
    quantity: 5,
    category: "Engine",
    brand: "PowerMax",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    discount: 10
  },
  {
    id: 2,
    name: "Premium Brake Disc Set - High Performance - Carbon Fiber Enhanced",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 15900,
    quantity: 12,
    category: "Brakes",
    brand: "StopTech",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    discount: 15
  },
  {
    id: 3,
    name: "Turbo Charger Assembly - Variable Geometry - All Weather",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 45000,
    quantity: 2,
    category: "Engine",
    brand: "TurboMax",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    discount: 5
  },
  {
    id: 4,
    name: "Heavy Duty Suspension Kit - Adjustable Height - Sport Tuned",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 32000,
    quantity: 8,
    category: "Suspension",
    brand: "RideTech",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    discount: 20
  }
];

const ServiceSpareParts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredParts = spareParts.filter((part) =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    part.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    part.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBack = () => {
    console.log("Going back...");
  };

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount / 100);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
        )}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div style={{ background: COLORS.bgColor, minHeight: '80vh' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b pr-10">
        <div className="p-5 flex items-center gap-2 max-w-7xl mx-auto">
          <button 
            onClick={handleBack} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="text-red-800 w-6 h-6" />
          </button>
          
          <div className="flex-1">
            <h1 className="font-bold text-2xl text-red-800">
              Spare Parts Management
            </h1>
            
          </div>
          
          <div className="flex items-center gap-3">
            <button
              className="p-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-full transition-colors"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  className="w-64 px-5 py-2 pl-10 border border-red-200 focus:border-red-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-100 transition-all"
                  placeholder="Search parts, brands, categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                {searchTerm && (
                  <button
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-7xl mx-auto">
       

        {/* Parts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredCard(part.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Discount Badge */}
              {part.discount && part.discount > 0 && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                  -{part.discount}%
                </div>
              )}
              
              {/* Quick View Button */}
              <button 
                className={`absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200 ${
                  hoveredCard === part.id ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Quick view"
              >
                <Eye className="w-4 h-4 text-gray-600" />
              </button>

              {/* Image Container */}
              <div className="relative h-48 bg-gray-50 overflow-hidden">
                <img
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  src={part.image}
                  alt={part.name}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category & Brand */}
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                    {part.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{part.brand}</span>
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-700 transition-colors">
                  {part.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(part.rating)}
                  <span className="text-sm text-gray-600">
                    ({part.reviews} reviews)
                  </span>
                </div>

                {/* Price & Stock */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {part.discount && part.discount > 0 ? (
                      <>
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{calculateDiscountedPrice(part.price, part.discount).toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{part.price.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{part.price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        part.quantity > 5 ? 'bg-green-500' : 
                        part.quantity > 0 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-sm text-gray-600">
                        {part.quantity > 0 ? `${part.quantity} in stock` : 'Out of stock'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full mt-4 py-2.5 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    part.quantity > 0
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-sm hover:shadow-md'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={part.quantity === 0}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {part.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredParts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No spare parts found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm 
                ? `No results for "${searchTerm}"`
                : 'No parts available at the moment'}
            </p>
            {searchTerm && (
              <button
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSpareParts;