import type { FC } from 'react';
import { FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { FONTS } from '../../../constants/uiConstants';

export type Vehicle = {
	vehicleInfo: {
		kms: string;
		fuel: string;
		transmission: string;
		location: string;
		registeredYear: string;
		registrationNumber: string;
		insuranceStatus: string;
		availability: string;
		currentFuelLevel?: 'Empty' | 'Quarter' | 'Half Tank' | 'Full';
	};
	// other nested fields omitted here for brevity
};

type Props = {
	vehicle: Vehicle;
	onViewDetails: (vehicle: Vehicle) => void;
};

const VehicleDetailCard: FC<Props> = ({ vehicle, onViewDetails }) => {
	const { kms, fuel, transmission, location } = vehicle?.vehicleInfo;
	const baseInfo = vehicle?.BasevehicleInfo;

	return (
		<div
			className='relative rounded-2xl p-5 '
			style={{
				height: '330px',
				background: 'linear-gradient(180deg, #fdefe9 0%, #fff 100%)',
				borderColor: '#E6A895',
				boxShadow:
					'0 8px 20px rgba(155, 17, 30, 0.15), 0 4px 8px rgba(230, 168, 149, 0.2)',
				...FONTS.header,
				transition: 'box-shadow 0.3s ease',
				overflow: 'hidden', // Prevent content from overflowing
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.boxShadow =
					'0 12px 30px rgba(155, 17, 30, 0.3), 0 6px 15px rgba(230, 168, 149, 0.3)';
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.boxShadow =
					'0 8px 20px rgba(155, 17, 30, 0.15), 0 4px 8px rgba(230, 168, 149, 0.2)';
			}}
		>
			{/* Vehicle Image */}
			<div
				className='w-full h-44 rounded-xl overflow-hidden mb-4'
				style={{ borderColor: '#E6A895', boxShadow: 'inset 0 0 10px #fdefe9' }}
			>
				<div className='flex w-full h-full round'>
					<img
						src={baseInfo.image}
						alt={baseInfo.title}
						className='w-full h-full object-cover '
						loading='lazy'
					/>
				</div>
			</div>

			{/* Title */}
			<h3
				className='text-xl font-extrabold mb-1'
				style={{ color: '#9b111e', ...FONTS.paragraph, fontWeight: 550 }}
			>
				{baseInfo.registrationNumber + ' - ' + baseInfo.title}
			</h3>

			{/* Specs */}
			<p className='text-sm text-[#9b111e] opacity-75 mb-2 tracking-wide'>
				{kms} <span className='mx-2'>•</span> {fuel}{' '}
				<span className='mx-2'>•</span> {transmission}
			</p>

			{/* Actions and Location */}
			<div
				className='mt-5 flex items-center justify-between text-sm font-medium'
				style={{ color: '#9b111e' }}
			>
				<button
					onClick={() => onViewDetails(vehicle)}
					className='bg-[#9b111e] text-white text-xs font-semibold py-2 px-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2'
				>
					<FaEye className='text-sm' /> View Details
				</button>
				<span
					className='flex items-center'
					style={{
						color: '#9b111e',
						opacity: 0.7,
						...FONTS.paragraph,
						fontSize: '12px',
					}}
				>
					<FaMapMarkerAlt className='mr-1' /> {location}
				</span>
			</div>
		</div>
	);
};

export default VehicleDetailCard;
