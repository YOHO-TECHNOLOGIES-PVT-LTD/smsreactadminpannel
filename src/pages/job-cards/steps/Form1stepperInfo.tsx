import React, { useState } from "react";

interface JobCardFormData {
  customerName: string;
  telNumber: string;
  mobileNumber: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  registrationNumber: string;
  vin: string;
  engineNumber: string;
  chassisNumber: string;
  mileage: string;
  color: string;
  insuranceCompany: string;
  insuranceRenewalDate: string;
}

const Form1StepperInfo: React.FC = () => {
  const [formData, setFormData] = useState<JobCardFormData>({
    customerName: "",
    telNumber: "",
    mobileNumber: "",
    email: "",
    vehicleMake: "",
    vehicleModel: "",
    registrationNumber: "",
    vin: "",
    engineNumber: "",
    chassisNumber: "",
    mileage: "",
    color: "",
    insuranceCompany: "",
    insuranceRenewalDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-left">Job Card</h2>

        {/* Customer Info */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 text-left">
            Customer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="customerName"
              type="text"
              placeholder="Customer Name"
              className="border p-3 rounded w-full"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
            <input
              name="telNumber"
              type="text"
              placeholder="TEL No."
              className="border p-3 rounded w-full"
              value={formData.telNumber}
              onChange={handleChange}
              required
            />
            <input
              name="mobileNumber"
              type="text"
              placeholder="Mobile / Cell No."
              className="border p-3 rounded w-full"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="border p-3 rounded w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Vehicle Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700 text-left">
            Vehicle Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="vehicleMake"
              type="text"
              placeholder="Vehicle Make"
              className="border p-3 rounded w-full"
              value={formData.vehicleMake}
              onChange={handleChange}
              required
            />
            <input
              name="vehicleModel"
              type="text"
              placeholder="Vehicle Model"
              className="border p-3 rounded w-full"
              value={formData.vehicleModel}
              onChange={handleChange}
              required
            />
            <input
              name="registrationNumber"
              type="text"
              placeholder="Registration Number"
              className="border p-3 rounded w-full"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />
            <input
              name="vin"
              type="text"
              placeholder="VIN"
              className="border p-3 rounded w-full"
              value={formData.vin}
              onChange={handleChange}
              required
            />
            <input
              name="engineNumber"
              type="text"
              placeholder="Engine No."
              className="border p-3 rounded w-full"
              value={formData.engineNumber}
              onChange={handleChange}
              required
            />
            <input
              name="chassisNumber"
              type="text"
              placeholder="Chassis No."
              className="border p-3 rounded w-full"
              value={formData.chassisNumber}
              onChange={handleChange}
              required
            />
            <input
              name="mileage"
              type="text"
              placeholder="Mileage"
              className="border p-3 rounded w-full"
              value={formData.mileage}
              onChange={handleChange}
              required
            />
            <input
              name="color"
              type="text"
              placeholder="Color"
              className="border p-3 rounded w-full"
              value={formData.color}
              onChange={handleChange}
              required
            />
            <input
              name="insuranceCompany"
              type="text"
              placeholder="Ins. Company"
              className="border p-3 rounded w-full"
              value={formData.insuranceCompany}
              onChange={handleChange}
              required
            />
            <input
              name="insuranceRenewalDate"
              type="date"
              placeholder="Ins. Renewal Date"
              className="border p-3 rounded w-full"
              value={formData.insuranceRenewalDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form1StepperInfo;