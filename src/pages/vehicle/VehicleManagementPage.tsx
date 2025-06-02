import { useState } from 'react';
import vehicleData, { type Vehicle } from '../vehicle/VehicleData'; // Import Vehicle type from VehicleData
import VehicleDetailCard, { 
	type Vehicle as CardVehicle, // Rename to avoid conflict
} from '../../components/common/Card/VehicleDetailCard';
import VehicleModal from '../vehicle/VehicleModal';
import { FaSearch } from 'react-icons/fa';
import carDefaultlogo from '../../assets/INVALID CAR LOGO.png';
import { RiResetLeftFill } from 'react-icons/ri';

const VehicleManagementPage = () => {
	const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null); // Use Vehicle type from VehicleData
	const [searchTerm, setSearchTerm] = useState('');

	// Car filter
	const carfiltereddata = vehicleData?.filter((vehicle) => {
		const search = searchTerm.toLowerCase();
		return (
			vehicle.BasevehicleInfo.title.toLowerCase().includes(search) ||
			vehicle.BasevehicleInfo.registrationNumber
				.toLowerCase()
				.includes(search) ||
			vehicle.vehicleInfo.location.toLowerCase().includes(search) ||
			vehicle.customerDetails?.fullName.toLowerCase().includes(search)
		);
	});

	// Transform vehicle data to match VehicleDetailCard expected interface
	const transformVehicle = (vehicle: Vehicle): CardVehicle => {
		// Map fuel level values to match CardVehicle interface
		const mapFuelLevel = (fuelLevel: Vehicle['vehicleInfo']['currentFuelLevel']): CardVehicle['vehicleInfo']['currentFuelLevel'] => {
			if (fuelLevel === 'Full Tank') return 'Full';
			return fuelLevel; // All other values should match
		};

		return {
			...vehicle,
			baseVehicleInfo: vehicle.BasevehicleInfo, // Map BasevehicleInfo to baseVehicleInfo
			vehicleInfo: {
				...vehicle.vehicleInfo,
				currentFuelLevel: mapFuelLevel(vehicle.vehicleInfo.currentFuelLevel)
			}
		};
	};

	const handleReset = () => {
		setSearchTerm(''); // Clear search input
	};

	return (
		<div>
			{/* TOP TEXT */}
			<div className='m-1 p-2'>
				<h1 className='text-3xl text-red-700 font-medium'>
					Vehicle Management
				</h1>
				<hr className='border-1 border-red-700 my-3' />
				<div className='flex mt-10 '>
					{/* SEARCH BAR ALONG WITH ICON */}
					<FaSearch
						className='text-red-700 mt-3 '
						style={{ position: 'relative', left: '32px', top: '5px' }}
						size={18}
					/>
					<input
						type='text'
						placeholder='Search...'
						value={searchTerm}
						className='text-red-700 placeholder:text-red-400 border border-red-700 px-12 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 w-3/6 h-[50px]'
						onChange={(m) => setSearchTerm(m.target.value)}
					/>

					{/*RESET ICON */}
					<RiResetLeftFill
						className=' text-red-700 cursor-pointer hover:text-red-400 '
						style={{ position: 'relative', left: '-30px', top: '18px' }}
						onClick={handleReset}
						size={18}
					/>
				</div>
			</div>

			<div className='relative'>
				<div className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
					{carfiltereddata.length > 0 ? (
						carfiltereddata?.map((vehicle, index) => (
							<VehicleDetailCard
								key={index}
								vehicle={transformVehicle(vehicle)} // Transform the vehicle data
								onViewDetails={() => setSelectedVehicle(vehicle)} // Pass original vehicle to modal
							/>
						))
					) : (
						<div
							className='flex flex-col items-center justify-center h-[56.7vh] w-full overflow-y-hidden'
							style={{ position: 'relative', left: '350px' }}
						>
							<img
								src={carDefaultlogo}
								alt="No cars"
								style={{ height: '255px', width: '255px' }}
							/>
							<div className='absolute top-2/3'>
								<p className='text-red-700 font-semibold'>
									No car available for this search
								</p>
							</div>
						</div>
					)}
				</div>

				{selectedVehicle && (
					<VehicleModal
						vehicle={selectedVehicle} // This now matches the expected Vehicle type
						onClose={() => setSelectedVehicle(null)}
						redirectPath='/job-cards'
					/>
				)}
			</div>
		</div>
	);
};

export default VehicleManagementPage;