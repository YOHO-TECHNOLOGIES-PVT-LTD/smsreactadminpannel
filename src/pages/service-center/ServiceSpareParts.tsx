import { useState } from "react";
import { Search, ArrowLeft, ShoppingCart, Star, Package, Eye, Plus } from "lucide-react";

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

type ReactComponent = {
  handleBack: () => void;
}

const ServiceSpareParts: React.FC<ReactComponent> = ({ handleBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPart, setNewPart] = useState<Omit<SparePart, 'id' | 'inStock' | 'reviews' | 'rating'>>({
    name: "",
    image: "",
    price: 0,
    quantity: 0,
    category: "",
    brand: "",
    discount: 0
  });

  const filteredParts = spareParts.filter((part) =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    part.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    part.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleAddPart = () => {
    // In a real app, you would add the part to your database/state here
    console.log("Adding new part:", newPart);
    // Reset form and close modal
    setNewPart({
      name: "",
      image: "",
      price: 0,
      quantity: 0,
      category: "",
      brand: "",
      discount: 0
    });
    setShowAddModal(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="">
        <div className="p-5 flex items-center max-w-7xl mx-auto">
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
            
            <button
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              onClick={() => setShowAddModal(true)}
            >
              <Plus className="w-5 h-5" />
              <span>Add Spare Part</span>
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

      {/* Add Spare Part Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add New Spare Part</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Part Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={newPart.name}
                    onChange={(e) => setNewPart({...newPart, name: e.target.value})}
                    placeholder="Enter part name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={newPart.image}
                    onChange={(e) => setNewPart({...newPart, image: e.target.value})}
                    placeholder="Enter image URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={newPart.price}
                    onChange={(e) => setNewPart({...newPart, price: Number(e.target.value)})}
                    placeholder="Enter price"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={newPart.quantity}
                    onChange={(e) => setNewPart({...newPart, quantity: Number(e.target.value)})}
                    placeholder="Enter quantity"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={newPart.category}
                    onChange={(e) => setNewPart({...newPart, category: e.target.value})}
                    placeholder="Enter category"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={newPart.brand}
                    onChange={(e) => setNewPart({...newPart, brand: e.target.value})}
                    placeholder="Enter brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={newPart.discount || 0}
                    onChange={(e) => setNewPart({...newPart, discount: Number(e.target.value)})}
                    placeholder="Enter discount percentage"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPart}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium"
                >
                  Add Part
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSpareParts;