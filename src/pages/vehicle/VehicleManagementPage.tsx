import React, { useState } from 'react';
import vehicleData from '../vehicle/VehicleData';
import VehicleDetailCard, { Vehicle } from '../../components/common/Card/VehicleDetailCard';
import VehicleModal from '../vehicle/VehicleModal';

const VehicleManagementPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <div className="relative">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicleData.map((vehicle, index) => (
          <VehicleDetailCard
            key={index}
            vehicle={vehicle}
            onViewDetails={setSelectedVehicle}
          />
        ))}
      </div>

      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
};

export default VehicleManagementPage;
