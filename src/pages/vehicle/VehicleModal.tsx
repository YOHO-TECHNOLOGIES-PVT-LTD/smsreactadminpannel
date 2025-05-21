import type { FC } from 'react';
import { Vehicle } from '../vehicle/VehicleData';

type Props = {
  vehicle: Vehicle;
  onClose: () => void;
  redirectPath: string;
};

const VehicleModal: FC<Props> = ({ vehicle, onClose, redirectPath }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 relative w-full max-w-4xl h-[85vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl font-bold transition-all"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Vehicle Image */}
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full max-h-80 object-contain rounded-lg mb-6 shadow-md bg-gray-100"
        />

        {/* Title & Basic Info */}
        <h2 className="text-3xl font-bold text-[#9b111e] mb-2">{vehicle.title}</h2>
        <p className="text-sm text-gray-600 mb-4">Listed on: {vehicle.listedDate}</p>
        <p className="text-base text-[#9b111e] font-semibold mb-4">
          {vehicle.kms} • {vehicle.fuel} • {vehicle.transmission}
        </p>

        {/* Grid Layout for Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          <div>
            <p><span className="font-semibold">Location:</span> {vehicle.location}</p>
            <p><span className="font-semibold">Owner:</span> {vehicle.owner}</p>
            <p><span className="font-semibold">Registered Year:</span> {vehicle.registeredYear}</p>
          </div>
          <div>
            <p><span className="font-semibold">Insurance:</span> {vehicle.insuranceStatus}</p>
            <p><span className="font-semibold">Availability:</span> {vehicle.availability}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {vehicle.rating}</p>
          </div>
        </div>

        {/* Job Card Link */}
        <div className="mt-8">
         <a
  href={redirectPath}
  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded transition"
  onClick={onClose}
>
  Job Card
</a>

        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
