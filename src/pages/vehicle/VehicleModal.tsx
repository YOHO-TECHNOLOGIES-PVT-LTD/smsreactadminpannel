import type { FC } from 'react';
import type { Vehicle } from './VehicleData';
import { Link } from 'react-router-dom';

type Props = {
	vehicle: Vehicle;
	onClose: () => void;
	redirectPath: string;
};

const VehicleModal: FC<Props> = ({ vehicle, onClose, redirectPath }) => {
	const baseInfo = vehicle.BasevehicleInfo;

	// Prevent modal from closing when clicking inside the modal content
	const handleInnerClick = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	return (
		<div
			className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
			onClick={onClose}>
			<div
				className='bg-white rounded-xl p-6 relative w-full max-w-5xl h-[95vh] overflow-y-auto shadow-2xl'
				onClick={handleInnerClick}
				style={{
					background: 'linear-gradient(180deg, #fdefe9 0%, #fff 100%)',
					borderColor: '#E6A895',
					boxShadow:
						'0 8px 20px rgba(155, 17, 30, 0.15), 0 4px 8px rgba(230, 168, 149, 0.2)',
					transition: 'box-shadow 0.3s ease',
				}}
			>
				{/* Close Button */}
				<button
					className='absolute top-4 right-4 text-[#9b111e] hover:text-red-600 text-2xl font-bold transition-all'
					onClick={onClose}
					aria-label='Close modal'
				>
					✕
				</button>

				{/* Vehicle Image */}
				<div className='flex justify-center items-center w-full py-4'>
					<div className='w-[450px] h-64 bg-gray-100 rounded-lg overflow-hidden shadow'>
						<img
							src={baseInfo.image}
							alt={baseInfo.title}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				{/* Title & Basic Info */}
				<h5 className='text-3xl font-bold text-[#9b111e] mb-2'>
					{baseInfo.registrationNumber} - {baseInfo.title}
				</h5>

				{/* Customer Details (mapped) */}
				{vehicle.customerDetails && (
					<div className='mt-8'>
						<h3 className='text-2xl font-semibold text-[#9b111e] mb-4'>
							Owner Details
						</h3>
						<table className='w-full table-auto border-collapse border border-[#d7b9a3] text-[#3b2f2f]'>
							<tbody>
								{Object.entries(vehicle.customerDetails).map(([key, value]) => (
									<tr
										key={key}
										className='border border-[#d7b9a3] bg-transparent'
									>
										<td className='border border-[#d7b9a3] px-4 py-2 font-semibold capitalize bg-transparent w-1/2'>
											{key}
										</td>
										<td className='border border-[#d7b9a3] px-4 py-2 bg-transparent'>
											{value || 'N/A'}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{/*vehicleInfo */}
				{vehicle.vehicleInfo && (
					<div className='mt-8'>
						<h3 className='text-2xl font-semibold text-[#9b111e] mb-4'>
							Vehicle Details
						</h3>
						<table className='w-full table-auto border-collapse border border-[#d7b9a3] text-[#3b2f2f]'>
							<tbody>
								{Object.entries(vehicle.vehicleInfo).map(
									([part, condition]) => (
										<tr
											key={part}
											className='border border-[#d7b9a3] bg-transparent'
										>
											<td className='border border-[#d7b9a3] px-4 py-2 font-semibold capitalize bg-transparent w-1/2'>
												{part}
											</td>
											<td className='border border-[#d7b9a3] px-4 py-2 bg-transparent'>
												{condition || 'N/A'}
											</td>
										</tr>
									)
								)}
							</tbody>
						</table>
					</div>
				)}

				{/* Car Condition */}
				{vehicle.carCondition && (
					<div className='mt-8'>
						<h3 className='text-2xl font-semibold text-[#9b111e] mb-4'>
							Car Condition
						</h3>
						<table className='w-full table-auto border-collapse border border-[#d7b9a3] text-[#3b2f2f]'>
							<tbody>
								{Object.entries(vehicle.carCondition).map(
									([part, condition]) => (
										<tr
											key={part}
											className='border border-[#d7b9a3] bg-transparent'
										>
											<td className='border border-[#d7b9a3] px-4 py-2 font-semibold capitalize bg-transparent w-1/2'>
												{part}
											</td>
											<td className='border border-[#d7b9a3] px-4 py-2 bg-transparent'>
												{condition || 'N/A'}
											</td>
										</tr>
									)
								)}
							</tbody>
						</table>
					</div>
				)}

				<div className='flex justify-start items-center mt-4'>
					<Link
						to={redirectPath}
						onClick={onClose}
						className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out'
					>
						Job Card
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VehicleModal;