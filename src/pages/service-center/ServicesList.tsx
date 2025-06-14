import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Search, Plus, Car, Wrench, X, Edit3, Trash2, List, Eye, EyeOff, Settings } from "lucide-react"

// Mock constants
const COLORS = {
  bgColor: "#f8fafc",
}

const FONTS = {
  header: { fontFamily: "Inter, system-ui, sans-serif" },
}

type ServiceCenterServicesProps = {
  onSpareParts: () => void
  handleBack: () => void
  partnerId: string
}

interface ServiceOption {
  id: string
  name: string
  price: string
  image: string | ArrayBuffer | null
  active: boolean
  description?: string
  duration?: string
}

interface ServiceCategory {
  id: string
  name: string
  icon: React.ReactElement
  isOpen: boolean
  color: string
  count: number
}

const ServicesList: React.FC<ServiceCenterServicesProps> = ({ onSpareParts, handleBack, partnerId }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
  const [activeServiceType, setActiveServiceType] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "table">("table")
  const [editingService, setEditingService] = useState<ServiceOption | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [categories, setCategories] = useState<ServiceCategory[]>([
    {
      id: "washing",
      name: "Car Washing",
      icon: <Car className="w-5 h-5" />,
      isOpen: true,
      color: "bg-blue-500",
      count: 4,
    },
    {
      id: "oil",
      name: "Oil Services",
      icon: <Wrench className="w-5 h-5" />,
      isOpen: true,
      color: "bg-orange-500",
      count: 4,
    },
  ])

  useEffect(() => {
    async function fetchdata() {
      try {
        console.log(`Fetching data for partner: ${partnerId}`)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchdata()
  }, [partnerId])

  const [newCategory, setNewCategory] = useState({
    name: "",
    icon: "",
    color: "bg-gray-500",
  })

  const [serviceOptions, setServiceOptions] = useState<Record<string, ServiceOption[]>>({
    washing: [
      {
        id: "1",
        name: "Premium Car Wash",
        price: "25",
        image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
        active: true,
        description: "Complete exterior wash premium soap",
        duration: "30 min",
      },
      {
        id: "2",
        name: "Interior Cleaning",
        price: "35",
        image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
        active: true,
        description: "Deep interior cleaning and vacuuming",
        duration: "45 min",
      },
      // {
      //   id: "3",
      //   name: "Wax & Polish",
      //   price: "45",
      //   image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
      //   active: true,
      //   description: "Professional waxing and polishing service",
      //   duration: "60 min",
      // },
      // {
      //   id: "4",
      //   name: "Tire Cleaning",
      //   price: "15",
      //   image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
      //   active: false,
      //   description: "Tire cleaning and shine treatment",
      //   duration: "15 min",
      // },
    ],
    oil: [
      {
        id: "5",
        name: "Oil Change Service",
        price: "50",
        image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
        active: true,
        description: "Standard oil change with filter",
        duration: "30 min",
      },
      {
        id: "6",
        name: "Filter Replacement",
        price: "25",
        image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
        active: true,
        description: "Air and oil filter replacement",
        duration: "20 min",
      },
      // {
      //   id: "7",
      //   name: "Premium Oil Package",
      //   price: "75",
      //   image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
      //   active: true,
      //   description: "Premium synthetic oil change",
      //   duration: "45 min",
      // },
      // {
      //   id: "8",
      //   name: "Engine Diagnostic",
      //   price: "40",
      //   image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg",
      //   active: true,
      //   description: "Complete engine diagnostic check",
      //   duration: "60 min",
      // },
    ],
  })

  const [newService, setNewService] = useState({
    name: "",
    price: "",
    description: "",
    duration: "",
    image: null as string | ArrayBuffer | null,
    active: true,
  })

  // Get all services for display
  const getAllServices = () => {
    const allServices: (ServiceOption & { categoryId: string; categoryName: string })[] = []
    categories.forEach((category) => {
      const services = serviceOptions[category.id] || []
      services.forEach((service) => {
        allServices.push({
          ...service,
          categoryId: category.id,
          categoryName: category.name,
        })
      })
    })
    return allServices
  }

  // Filter services based on search and category
  const getFilteredServices = () => {
    let services = getAllServices()

    if (selectedCategory !== "all") {
      services = services.filter((service) => service.categoryId === selectedCategory)
    }

    if (searchTerm) {
      services = services.filter(
        (service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return services
  }

  const handleAddCategory = () => {
    setShowAddCategoryForm(true)
  }

  const handleCancelAddCategory = () => {
    setShowAddCategoryForm(false)
    setNewCategory({ name: "", icon: "", color: "bg-gray-500" })
  }

  const handleCategoryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewCategory((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitCategory = (e: React.FormEvent) => {
    e.preventDefault()
    if (newCategory.name && newCategory.icon) {
      const iconComponent = getIconComponent(newCategory.icon)
      if (iconComponent) {
        const newCategoryItem = {
          id: newCategory.name.toLowerCase().replace(/\s+/g, "-"),
          name: newCategory.name,
          icon: iconComponent,
          isOpen: true,
          color: newCategory.color,
          count: 0,
        }

        setCategories([...categories, newCategoryItem])
        setServiceOptions({
          ...serviceOptions,
          [newCategoryItem.id]: [],
        })

        setNewCategory({ name: "", icon: "", color: "bg-gray-500" })
        setShowAddCategoryForm(false)
      }
    }
  }

  const getIconComponent = (iconName: string): React.ReactElement | null => {
    switch (iconName) {
      case "washing":
        return <Car className="w-5 h-5" />
      case "oil":
        return <Wrench className="w-5 h-5" />
      default:
        return null
    }
  }

  const handleAddService = (type?: string) => {
    setActiveServiceType(type || selectedCategory)
    setEditingService(null)
    setNewService({ name: "", price: "", description: "", duration: "", image: null, active: true })
    setShowAddForm(true)
  }

  const handleEditService = (service: ServiceOption & { categoryId: string }) => {
    setActiveServiceType(service.categoryId)
    setEditingService(service)
    setNewService({
      name: service.name,
      price: service.price,
      description: service.description || "",
      duration: service.duration || "",
      image: service.image,
      active: service.active,
    })
    setShowAddForm(true)
  }

  const handleCancelAdd = () => {
    setShowAddForm(false)
    setEditingService(null)
    setNewService({ name: "", price: "", description: "", duration: "", image: null, active: true })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setNewService((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewService((prev) => ({
          ...prev,
          image: reader.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleToggleActive = (serviceId: string, categoryId: string) => {
    const updatedOptions = serviceOptions[categoryId].map((service) =>
      service.id === serviceId ? { ...service, active: !service.active } : service,
    )
    setServiceOptions({
      ...serviceOptions,
      [categoryId]: updatedOptions,
    })
  }

  const handleDeleteService = (serviceId: string, categoryId: string) => {
    const updatedOptions = serviceOptions[categoryId].filter((service) => service.id !== serviceId)
    setServiceOptions({
      ...serviceOptions,
      [categoryId]: updatedOptions,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newService.name && newService.price && activeServiceType) {
      const serviceItem = {
        id: editingService?.id || `svc-${Date.now()}`,
        name: newService.name,
        price: newService.price,
        description: newService.description,
        duration: newService.duration,
        image: newService.image || "/placeholder.svg?height=100&width=150",
        active: newService.active,
      }

      if (editingService) {
        const updatedOptions = serviceOptions[activeServiceType].map((service) =>
          service.id === editingService.id ? serviceItem : service,
        )
        setServiceOptions({
          ...serviceOptions,
          [activeServiceType]: updatedOptions,
        })
      } else {
        setServiceOptions({
          ...serviceOptions,
          [activeServiceType]: [...serviceOptions[activeServiceType], serviceItem],
        })
      }

      setNewService({ name: "", price: "", description: "", duration: "", image: null, active: true })
      setShowAddForm(false)
      setEditingService(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const filteredServices = getFilteredServices()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-pink-50 shadow-lg border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Service Catalog</h1>
              <p className="text-sm text-gray-500">Manage services</p>
            </div>
          </div>

          <button
            onClick={handleAddCategory}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#800000] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex-1 p-4 space-y-2">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">CATEGORIES</h3>
          </div>

          <button
            onClick={() => setSelectedCategory("all")}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === "all"
                ? "bg-[#800000]/10 text-[#800000]"
                : "text-gray-700 hover:bg-[#800000]/10 hover:text-[#800000]"
            }`}
          >
            <div className="flex-1 text-left">
              <div className="font-medium">All Services</div>
              <div className="text-xs text-gray-500">{getAllServices().length} services</div>
            </div>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? "bg-[#800000]/10 text-[#800000]"
                  : "text-gray-700 hover:bg-[#800000]/10 hover:text-[#800000]"
              }`}
            >
              <div className="flex-1 text-left">
                <div className="font-medium">{category.name}</div>
                <div className="text-xs text-gray-500">{serviceOptions[category.id]?.length || 0} services</div>
              </div>
            </button>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onSpareParts}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Spare Parts</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-pink-50 shadow-sm border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "all" ? "All Services" : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-500">{filteredServices.length} services found</p>
            </div>

            <div className="flex items-center space-x-1">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg  focus:border-indigo-500"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                
              </div>

              {/* Add Service */}
              <button
                onClick={() => handleAddService()}
                className="flex items-center space-x-2 px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#800000] transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Service</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {viewMode === "grid" ? (
            /* Table View */
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Category</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Price</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Duration</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredServices.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <img
                            src={typeof service.image === "string" ? service.image : "/placeholder.svg"}
                            alt={service.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {service.categoryName}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-semibold text-gray-900">₹{service.price}</td>
                      <td className="py-4 px-6 text-gray-500">{service.duration}</td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleToggleActive(service.id, service.categoryId)}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            service.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {service.active ? "Active" : "Inactive"}
                        </button>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEditService(service)}
                            className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteService(service.id, service.categoryId)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
                  <p className="text-gray-500">Try adjusting your search or add a new service</p>
                </div>
              )}
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={typeof service.image === "string" ? service.image : "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() => handleToggleActive(service.id, service.categoryId)}
                        className={`p-1 rounded-full ${service.active ? "bg-green-500" : "bg-red-500"}`}
                      >
                        {service.active ? (
                          <Eye className="w-4 h-4 text-white" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-lg font-bold text-gray-900">₹{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{service.duration}</span>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleEditService(service)}
                          className="p-1 text-[#800000] hover:text-[#800000] transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id, service.categoryId)}
                          className="p-1 text-[#800000] hover:text-[#800000] transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredServices.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
                  <p className="text-gray-500">Try adjusting your search or add a new service</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Service Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingService ? "Edit Service" : "Add New Service"}
                </h3>
                <button onClick={handleCancelAdd} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newService.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg   focus:border-black"
                    placeholder="Enter service name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    value={newService.price}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                    placeholder="Enter price"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={newService.duration}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                    placeholder="e.g., 30 min"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    value={activeServiceType}
                    onChange={(e) => setActiveServiceType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={newService.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                  placeholder="Enter service description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Image</label>
                <div className="relative">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                  />
                  {newService.image && (
                    <div className="mt-3">
                      <img
                        src={typeof newService.image === "string" ? newService.image : ""}
                        alt="Preview"
                        className="h-32 w-48 object-cover rounded-lg shadow-sm"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="active"
                  checked={newService.active}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Activate service immediately</label>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancelAdd}
                  className="flex-1 px-4 py-3 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-[#800000] rounded-lg hover:bg-[#800000] transition-colors"
                >
                  {editingService ? "Update Service" : "Add Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddCategoryForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Add New Category</h3>
                <button
                  onClick={handleCancelAddCategory}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmitCategory} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name</label>
                <input
                  type="text"
                  name="name"
                  value={newCategory.name}
                  onChange={handleCategoryInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                  placeholder="Enter category name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category Icon</label>
                <select
                  name="icon"
                  value={newCategory.icon}
                  onChange={handleCategoryInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                  required
                >
                  <option value="">Select an icon</option>
                  <option value="washing">Car Washing Icon</option>
                  <option value="oil">Oil Services Icon</option>
                </select>
              </div>

              {/* <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Color Theme</label>
                <select
                  name="color"
                  value={newCategory.color}
                  onChange={handleCategoryInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg  focus:border-black"
                >
                  <option value="bg-blue-500">Blue</option>
                  <option value="bg-green-500">Green</option>
                  <option value="bg-purple-500">Purple</option>
                  <option value="bg-orange-500">Orange</option>
                  <option value="bg-pink-500">Pink</option>
                  <option value="bg-gray-500">Gray</option>
                </select>
              </div> */}

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancelAddCategory}
                  className="flex-1 px-4 py-3 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-[#800000] rounded-lg hover:bg-[#800000] transition-colors"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServicesList
