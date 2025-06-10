import { useState, useRef, useEffect } from "react";
import { COLORS, FONTS } from "../../constants/uiConstants";
import { RiCarWashingFill } from "react-icons/ri";
import { RiOilFill } from "react-icons/ri";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import Client from "../../api";

type ServiceCenterServicesProps = {
  onSpareParts: () => void;
  handleBack: () => void;
  partnerId:string;
};

interface ServiceOption {
  name: string;
  price: string;
  image: string | ArrayBuffer | null;
  active: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactElement; // Changed from JSX.Element to React.ReactElement
  isOpen: boolean;
}

const ServicesList: React.FC<ServiceCenterServicesProps> = ({ onSpareParts, handleBack,partnerId }) => {
  // Existing states
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [activeServiceType, setActiveServiceType] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const categoryIconRef = useRef<HTMLSelectElement>(null);

  // Categories state
  const [categories, setCategories] = useState<ServiceCategory[]>([
    { 
      id: 'washing',
      name: 'Washing',
      icon: <RiCarWashingFill />,
      isOpen: false
    },
    { 
      id: 'oil',
      name: 'Oil Services',
      icon: <RiOilFill />,
      isOpen: false
    }
  ]);

  useEffect(() => {
   async function fetchdata(){
      const response:any = await new Client().admin.servicecenter.getAllCat(partnerId)
      console.log(response.data.data)
    }
    fetchdata()
  }, []);

  // New category form state
  const [newCategory, setNewCategory] = useState({
    name: "",
    icon: ""
  });

  // Service options states
  const [serviceOptions, setServiceOptions] = useState<Record<string, ServiceOption[]>>({
    washing: [
      { name: "Tyre Change", price: "10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cfmoK1zcVVgHGzjXvy0T3YqtDrdMWgSzGw&s", active: true },
      { name: "Mirror change", price: "15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXdy7iuelJuLwHjgqX0mzEUKVDTQay83ylw&s", active: true },
      { name: "Bonnet", price: "20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbcTJZP0ofDRdbcBmbeXxBMK7f8S75TBEUA&s", active: true },
      { name: "Seat repair", price: "12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-x14GdoGRcfG_OngpmDolY7yRRH9bumCrLg&s", active: true },
      { name: "Paint check", price: "8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31Hsugf2yE-h8T-Zcn_wO5WNqKgSm3VrVbA&s", active: true },
    ],
    oil: [
      { name: "Oil service", price: "10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cfmoK1zcVVgHGzjXvy0T3YqtDrdMWgSzGw&s", active: true },
      { name: "Oil check", price: "15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXdy7iuelJuLwHjgqX0mzEUKVDTQay83ylw&s", active: true },
      { name: "Premium oil change", price: "20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbcTJZP0ofDRdbcBmbeXxBMK7f8S75TBEUA&s", active: true },
      { name: "Engine check", price: "12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-x14GdoGRcfG_OngpmDolY7yRRH9bumCrLg&s", active: true },
      { name: "All in one combo", price: "8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31Hsugf2yE-h8T-Zcn_wO5WNqKgSm3VrVbA&s", active: true },
    ]
  });

  const [newService, setNewService] = useState({
    name: "",
    price: "",
    image: null as string | ArrayBuffer | null,
    active: true
  });

  // Toggle category open/close
  const toggleCategory = (id: string) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, isOpen: !cat.isOpen } : cat
    ));
  };

  // Handle adding a new category
  const handleAddCategory = () => {
    setShowAddCategoryForm(true);
  };

  const handleCancelAddCategory = () => {
    setShowAddCategoryForm(false);
    setNewCategory({ name: "", icon: "" });
  };

  const handleCategoryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCategory(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.name && newCategory.icon) {
      const iconComponent = getIconComponent(newCategory.icon);
      if (iconComponent) {
        const newCategoryItem = {
          id: newCategory.name.toLowerCase().replace(/\s+/g, '-'),
          name: newCategory.name,
          icon: iconComponent,
          isOpen: false
        };
        
        setCategories([...categories, newCategoryItem]);
        setServiceOptions({
          ...serviceOptions,
          [newCategoryItem.id]: []
        });
        
        setNewCategory({ name: "", icon: "" });
        setShowAddCategoryForm(false);
      }
    }
  };

  // Helper function to get icon component
  const getIconComponent = (iconName: string): React.ReactElement | null => { // Changed return type
    switch(iconName) {
      case 'washing': return <RiCarWashingFill />;
      case 'oil': return <RiOilFill />;
      // Add more icons as needed
      default: return null;
    }
  };

  // Existing service functions (modified to work with dynamic categories)
  const handleAddService = (type: string) => {
    setActiveServiceType(type);
    setShowAddForm(true);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setNewService({ name: "", price: "", image: null, active: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewService(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewService(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleToggleActive = (index: number, type: string) => {
    const updatedOptions = [...serviceOptions[type]];
    updatedOptions[index].active = !updatedOptions[index].active;
    setServiceOptions({
      ...serviceOptions,
      [type]: updatedOptions
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newService.name && newService.price && activeServiceType) {
      const newServiceItem = {
        name: newService.name,
        price: `$${newService.price}`,
        image: newService.image || "https://via.placeholder.com/150",
        active: newService.active
      };

      setServiceOptions({
        ...serviceOptions,
        [activeServiceType]: [...serviceOptions[activeServiceType], newServiceItem]
      });

      setNewService({ name: "", price: "", image: null, active: true });
      setShowAddForm(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bgColor }}>
      {/* Back Button */}
      <div className="p-4">
        <button onClick={handleBack} className="">
          <MdOutlineKeyboardBackspace className="text-[#800000] text-3xl" />
        </button>
      </div>

      {/* Header Section */}
      <div className="flex p-4 sticky top-0 shadow-inner-top border-b-2 border-orange-700" style={{ backgroundColor: COLORS.bgColor }}>
        <div>
          <h1 className="font-bold text-3xl pt-2 pl-0" style={{ color: "#9b111e" }}>Service Catalog</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <button
            className="bg-[#fce8e8] text-gray-600 hover:text-[#9b111e] p-2 rounded-full transition"
            title="Search"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FiSearch size={22} className="text-[#800000]" />
          </button>

          {showSearch && (
            <input
              type="text"
              className="px-4 py-1.5 border border-[#800000] focus:border-[#800000] rounded-md shadow-sm focus:outline-none"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}

          <button
            className="text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
            style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
            onClick={onSpareParts}
          >
            Spares
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold" style={{ color: "#9b111e" }}></h2>
          <button
            onClick={handleAddCategory}
            className="flex items-center gap-2 text-white px-4 py-2 rounded-lg"
            style={{ background: "linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)" }}
          >
            <FaPlus /> Add Category
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-2xl mt-0 p-3" style={{ fontFamily: FONTS.header.fontFamily }}>
        {/* Dynamic Categories */}
        {categories.map((category) => (
          <div key={category.id}>
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
              <div className="flex items-center justify-between mb-4 cursor-pointer">
                <h5 className="text-2xl font-bold leading-none flex gap-2" style={{ color: "#9b111e" }}>
                  {category.icon} {category.name}
                </h5>
                <span
                  className="text-sm font-medium text-orange-800 hover:underline"
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.isOpen ? 'Hide' : 'View all'}
                </span>
              </div>

              {category.isOpen && (
                <div className="overflow-x-auto">
                  <button
                    type="button"
                    className="text-white font-medium rounded-lg text-sm px-3 py-1 mt-2 flex ml-auto me-2 mb-2 focus:outline-none"
                    style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
                    onClick={() => handleAddService(category.id)}
                  >
                    Add Service
                  </button>

                  <table className="min-w-full text-left text-sm font-light text-gray-900 ">
                    <thead className="border-b font-medium ">
                      <tr>
                        <th className="px-4 py-2 text-xl">Service</th>
                        <th className="px-4 py-2 text-xl">Service Name</th>
                        <th className="px-4 py-2 text-xl">Price</th>
                        <th className="px-4 py-2 text-xl">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceOptions[category.id]?.map((option, index) => (
                        <tr key={`${category.id}-${index}`} className="border-b ">
                          <td className="px-0 py-0 text-2xl font-normal">
                            {typeof option.image === 'string' ? (
                              <img src={option.image} alt="service" className="w-16 h-12 object-cover" />
                            ) : (
                              <div className="w-16 h-12 bg-gray-200 flex items-center justify-center">
                                No Image
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-2 font-normal">{option.name}</td>
                          <td className="px-4 py-2 font-normal"><span>&#8377;</span>{option.price}</td>
                          <td className="px-4 py-2">
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={option.active}
                                onChange={() => handleToggleActive(index, category.id)}
                                className="sr-only peer"
                              />
                              <div className={`relative w-9 h-5 rounded-full peer ${option.active ? 'bg-green-500' : 'bg-gray-200'}`}>
                                <div className={`absolute top-[2px] ${option.active ? 'left-[18px]' : 'left-[2px]'} bg-white rounded-full h-4 w-4 transition-all`}></div>
                              </div>
            
                            </label>
                          </td>
                           {/* <td className="px-4 py-2 flex gap-3 text-lg">
        <FiEdit
          className="text-blue-600 cursor-pointer hover:scale-110"
          onClick={() => handleEditService(option, category.id)}
        />
        <FiTrash2
          className="text-red-600 cursor-pointer hover:scale-110"
          onClick={() => handleDeleteClick(option._id, category.id)}
        />
      </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Service Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Add New {categories.find(c => c.id === activeServiceType)?.name || ''} Service
              </h3>
              <button
                onClick={handleCancelAdd}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                <input
                  type="text"
                  name="name"
                  value={newService.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (without $ sign)</label>
                <input
                  type="text"
                  name="price"
                  value={newService.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Image</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                {newService.image && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Preview:</p>
                    <img
                      src={typeof newService.image === 'string' ? newService.image : ''}
                      alt="Preview"
                      className="h-20 w-20 object-cover mt-1"
                    />
                  </div>
                )}
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  name="active"
                  checked={newService.active}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">Active Service</label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCancelAdd}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddCategoryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Add New Service Category</h3>
              <button
                onClick={handleCancelAddCategory}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmitCategory}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input
                  type="text"
                  name="name"
                  value={newCategory.name}
                  onChange={handleCategoryInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Icon</label>
                <select
                  name="icon"
                  value={newCategory.icon}
                  onChange={handleCategoryInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                  ref={categoryIconRef}
                >
                  <option value="">Select an icon</option>
                  <option value="washing">Washing Icon</option>
                  <option value="oil">Oil Services Icon</option>
                  {/* Add more icons as needed */}
                </select>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCancelAddCategory}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesList;