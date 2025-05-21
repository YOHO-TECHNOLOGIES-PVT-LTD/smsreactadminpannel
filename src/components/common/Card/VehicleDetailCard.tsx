import type { FC } from 'react';
import { FaMapMarkerAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { FONTS } from '../../../constants/uiConstants';

export type Vehicle = {
  title: string;
  image: string;
  kms: string;
  fuel: string;
  transmission: string;
  price: string;
  location: string;
  isFavorite?: boolean;
};

type Props = {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
};

const VehicleDetailCard: FC<Props> = ({ vehicle, onViewDetails }) => {
  return (
    <div
      className="relative rounded-3xl p-5 border transform transition-transform duration-300 hover:scale-105"
      style={{
        background: 'linear-gradient(180deg, #fdefe9 0%, #fff 100%)',
        borderColor: '#E6A895',
        boxShadow:
          '0 8px 20px rgba(155, 17, 30, 0.15), 0 4px 8px rgba(230, 168, 149, 0.2)',
        fontFamily: FONTS.primary,
        transition: 'box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow =
          '0 12px 30px rgba(155, 17, 30, 0.3), 0 6px 15px rgba(230, 168, 149, 0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow =
          '0 8px 20px rgba(155, 17, 30, 0.15), 0 4px 8px rgba(230, 168, 149, 0.2)';
      }}
    >
      {/* Vehicle Image */}
      <div
        className="w-full h-44 rounded-xl overflow-hidden mb-4"
        style={{ borderColor: '#E6A895', boxShadow: 'inset 0 0 10px #fdefe9' }}
      >
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3
        className="text-xl font-extrabold mb-1"
        style={{ color: '#9b111e', fontFamily: FONTS.secondary }}
      >
        {vehicle.title}
      </h3>

      {/* Specs */}
      <p className="text-sm text-[#9b111e] opacity-75 mb-2 tracking-wide">
        {vehicle.kms} <span className="mx-2">•</span> {vehicle.fuel}{' '}
        <span className="mx-2">•</span> {vehicle.transmission}
      </p>

      {/* Actions and Location */}
      <div
        className="mt-5 flex items-center justify-between text-sm font-medium"
        style={{ color: '#9b111e' }}
      >
        <button
          onClick={() => onViewDetails(vehicle)}
          className="hover:underline"
          style={{ color: '#9b111e', transition: 'color 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#E6A895')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9b111e')}
        >
          View Details
        </button>
        <span
          className="flex items-center"
          style={{ color: '#9b111e', opacity: 0.7 }}
        >
          <FaMapMarkerAlt className="mr-2" /> {vehicle.location}
        </span>
      </div>
    </div> // ✅ This was missing
  );
};

export default VehicleDetailCard;
