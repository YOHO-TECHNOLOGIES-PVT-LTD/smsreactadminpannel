import type { FC } from 'react';
import{ Vehicle }   from '../vehicle/VehicleData';


type Props = {
  vehicle: Vehicle;
  onClose: () => void;
};

const VehicleModal: FC<Props> = ({ vehicle, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white rounded-xl p-6 relative overflow-y-auto w-full max-w-[960px] min-w-[300px] h-[100vh] box-border">
        <button
          className="absolute top-2 right-2 text-red-600 font-bold text-lg"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-[#9b111e] mb-2">{vehicle.title}</h2>
        <p className="text-sm mb-2">
          {vehicle.kms} • {vehicle.fuel} • {vehicle.transmission}
        </p>
        <p className="text-sm text-gray-700 mb-2">Location: {vehicle.location}</p>
        <p className="text-lg font-semibold text-[#9b111e]">Price: {vehicle.price}</p>
      </div>
    </div>
  );
};

export default VehicleModal;
