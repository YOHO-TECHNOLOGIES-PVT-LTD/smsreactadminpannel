import { useState, useRef } from "react";
import { COLORS, FONTS } from "../../constants/uiConstants";
import { RiCarWashingFill } from "react-icons/ri";
import { RiOilFill } from "react-icons/ri";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiSearch } from "react-icons/fi";


type ServiceCenterServicesProps = {
  onSpareParts: () => void;
  handleBack: () => void;
};

interface ServiceOption {
  name: string;
  price: string;
  image: string | ArrayBuffer | null;
  active: boolean;
}

const ServicesList: React.FC<ServiceCenterServicesProps> = ({ onSpareParts, handleBack }) => {
  const [isWashingOpen, setIsWashingOpen] = useState(false);
  const [isOilOpen, setIsOilOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeServiceType, setActiveServiceType] = useState<'washing' | 'oil'>('washing');
  const [newService, setNewService] = useState({
    name: "",
    price: "",
    image: null as string | ArrayBuffer | null,
    active: true
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [serviceOptions, setServiceOptions] = useState<ServiceOption[]>([
    { name: "Tyre Change", price: "$10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cfmoK1zcVVgHGzjXvy0T3YqtDrdMWgSzGw&s", active: true },
    { name: "Mirror change", price: "$15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXdy7iuelJuLwHjgqX0mzEUKVDTQay83ylw&s", active: true },
    { name: "Bonnet", price: "$20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbcTJZP0ofDRdbcBmbeXxBMK7f8S75TBEUA&s", active: true },
    { name: "Seat repair", price: "$12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-x14GdoGRcfG_OngpmDolY7yRRH9bumCrLg&s", active: true },
    { name: "Paint check", price: "$8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31Hsugf2yE-h8T-Zcn_wO5WNqKgSm3VrVbA&s", active: true },
  ]);

  const [oilServiceOptions, setOilServiceOptions] = useState<ServiceOption[]>([
    { name: "Oil service", price: "$10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cfmoK1zcVVgHGzjXvy0T3YqtDrdMWgSzGw&s", active: true },
    { name: "Oil check", price: "$15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXdy7iuelJuLwHjgqX0mzEUKVDTQay83ylw&s", active: true },
    { name: "Premium oil change", price: "$20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbcTJZP0ofDRdbcBmbeXxBMK7f8S75TBEUA&s", active: true },
    { name: "Engine check", price: "$12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-x14GdoGRcfG_OngpmDolY7yRRH9bumCrLg&s", active: true },
    { name: "All in one combo", price: "$8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31Hsugf2yE-h8T-Zcn_wO5WNqKgSm3VrVbA&s", active: true },
  ]);

  const handleAddService = (type: 'washing' | 'oil') => {
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

  const handleToggleActive = (index: number, type: 'washing' | 'oil') => {
    if (type === 'washing') {
      const updatedOptions = [...serviceOptions];
      updatedOptions[index].active = !updatedOptions[index].active;
      setServiceOptions(updatedOptions);
    } else {
      const updatedOptions = [...oilServiceOptions];
      updatedOptions[index].active = !updatedOptions[index].active;
      setOilServiceOptions(updatedOptions);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newService.name && newService.price) {
      const newServiceItem = {
        name: newService.name,
        price: `$${newService.price}`,
        image: newService.image || "https://via.placeholder.com/150",
        active: newService.active
      };

      if (activeServiceType === 'washing') {
        setServiceOptions(prev => [...prev, newServiceItem]);
      } else {
        setOilServiceOptions(prev => [...prev, newServiceItem]);
      }

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
          <h1 className="font-bold text-3xl pt-2 pl-0" style={{ color: "#9b111e" }}>Services Lists Management</h1>
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

      {/* Services Section */}
      <div className="grid grid-cols-2 gap-6 text-2xl mt-0 p-3" style={{ fontFamily: FONTS.header.fontFamily }}>
        {/* Washing Services Column */}
        <div>
          <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <h5 className="text-2xl font-bold leading-none flex gap-2" style={{ color: "#9b111e" }}>
                <RiCarWashingFill /> Washing
              </h5>
              <span
                className="text-sm font-medium text-orange-800 hover:underline dark:text-orange-800"
                onClick={() => setIsWashingOpen(!isWashingOpen)}
              >
                {isWashingOpen ? 'Hide' : 'View all'}
              </span>
            </div>

            {isWashingOpen && (
              <div className="overflow-x-auto">
                <button
                  type="button"
                  className="text-white font-medium rounded-lg text-sm px-3 py-1 mt-2 flex ml-auto me-2 mb-2 focus:outline-none"
                  style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
                  onClick={() => handleAddService('washing')}
                >
                  Add
                </button>

                <table className="min-w-full text-left text-sm font-light text-gray-900 dark:text-white">
                  <thead className="border-b font-medium dark:border-gray-700">
                    <tr>
                      <th className="px-4 py-2">Service</th>
                      <th className="px-4 py-2">Service Name</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceOptions.map((option, index) => (
                      <tr key={`washing-${index}`} className="border-b dark:border-gray-700">
                        <td className="px-0 py-0 text-2xl font-normal">
                          {typeof option.image === 'string' ? (
                            <img src={option.image} alt="service" className="w-16 h-12 object-cover" />
                          ) : (
                            <div className="w-16 h-12 bg-gray-200 flex items-center justify-center">
                              No Image
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-2 text-2xl font-normal">{option.name}</td>
                        <td className="px-4 py-2 text-2xl font-normal">{option.price}</td>
                        <td className="px-4 py-2">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={option.active}
                              onChange={() => handleToggleActive(index, 'washing')}
                              className="sr-only peer"
                            />
                            <div className={`relative w-9 h-5 rounded-full peer ${option.active ? 'bg-green-500' : 'bg-gray-200'}`}>
                              <div className={`absolute top-[2px] ${option.active ? 'left-[18px]' : 'left-[2px]'} bg-white rounded-full h-4 w-4 transition-all`}></div>
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              {option.active ? 'Active' : 'Inactive'}
                            </span>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Oil Services Column */}
        <div>
          <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <h5 className="text-2xl font-bold leading-none flex gap-2" style={{ color: "#9b111e" }}>
                <RiOilFill /> Oil Services
              </h5>
              <span
                className="text-sm font-medium text-orange-800 hover:underline dark:text-orange-800"
                onClick={() => setIsOilOpen(!isOilOpen)}
              >
                {isOilOpen ? 'Hide' : 'View all'}
              </span>
            </div>

            {isOilOpen && (
              <div className="overflow-x-auto">
                <button
                  type="button"
                  className="text-white font-medium rounded-lg text-sm px-3 py-1 mt-2 flex ml-auto me-2 mb-2 focus:outline-none"
                  style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
                  onClick={() => handleAddService('oil')}
                >
                  Add
                </button>

                <table className="min-w-full text-left text-sm font-light text-gray-900 dark:text-white">
                  <thead className="border-b font-medium dark:border-gray-700">
                    <tr>
                      <th className="px-4 py-2">Service</th>
                      <th className="px-4 py-2">Service Name</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oilServiceOptions.map((option, index) => (
                      <tr key={`oil-${index}`} className="border-b dark:border-gray-700">
                        <td className="px-0 py-0 text-2xl font-normal">
                          {typeof option.image === 'string' ? (
                            <img src={option.image} alt="service" className="w-16 h-12 object-cover" />
                          ) : (
                            <div className="w-16 h-12 bg-gray-200 flex items-center justify-center">
                              No Image
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-2 text-2xl font-normal">{option.name}</td>
                        <td className="px-4 py-2 text-2xl font-normal">{option.price}</td>
                        <td className="px-4 py-2">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={option.active}
                              onChange={() => handleToggleActive(index, 'oil')}
                              className="sr-only peer"
                            />
                            <div className={`relative w-9 h-5 rounded-full peer ${option.active ? 'bg-green-500' : 'bg-gray-200'}`}>
                              <div className={`absolute top-[2px] ${option.active ? 'left-[18px]' : 'left-[2px]'} bg-white rounded-full h-4 w-4 transition-all`}></div>
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              {option.active ? 'Active' : 'Inactive'}
                            </span>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Service Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Add New {activeServiceType === 'washing' ? 'Washing' : 'Oil'} Service</h3>
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
    </div>
  );
};

export default ServicesList;