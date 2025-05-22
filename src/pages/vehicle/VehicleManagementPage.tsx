import { useState } from 'react';
import vehicleData from '../vehicle/VehicleData';
import VehicleDetailCard, {
	type Vehicle,
} from '../../components/common/Card/VehicleDetailCard';
import VehicleModal from '../vehicle/VehicleModal';
import { FaSearch } from 'react-icons/fa';
import carDefaultlogo from '../../assets/INVALID CAR LOGO.png';
import { RiResetLeftFill } from 'react-icons/ri';

const VehicleManagementPage = () => {
	const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
	const [searchTerm, setSearchTerm] = useState('');

	// Car filter
	const carfiltereddata = vehicleData?.filter((vehicle) =>
		vehicle.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

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
						style={{ position: 'relative', left: '32px', top: '1px' }}
					/>
					<input
						type='text'
						placeholder='Search...'
						value={searchTerm}
						className='text-red-700 placeholder:text-red-400 border border-red-700 px-12 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 w-3/6'
						onChange={(m) => setSearchTerm(m.target.value)}
					/>

					{/*RESET ICON */}

					<RiResetLeftFill
						className=' text-red-700 cursor-pointer hover:text-red-400 '
						style={{ position: 'relative', left: '-30px', top: '15' }}
						onClick={handleReset}
					/>
				</div>
			</div>

			<div className='relative'>
				<div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{carfiltereddata.length > 0 ? (
						carfiltereddata?.map((vehicle, index) => (
							<VehicleDetailCard
								key={index}
								vehicle={vehicle}
								onViewDetails={setSelectedVehicle}
							/>
						))
					) : (
						<div
							className=' flex flex-col items-center justify-center h-[55.8vh] w-full overflow-y-hidden'
							style={{ position: 'relative', left: '350px' }}
						>
							<img
								src={carDefaultlogo}
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
						vehicle={selectedVehicle}
						onClose={() => setSelectedVehicle(null)}
					/>
				)}
			</div>
		</div>
	);
};

export default VehicleManagementPage;
