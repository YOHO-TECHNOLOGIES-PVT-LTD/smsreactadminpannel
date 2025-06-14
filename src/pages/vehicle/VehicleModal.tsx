import type { FC } from "react";
import type { Vehicle } from "./VehicleData";
import { Link } from "react-router-dom";
import carDefaultlogo from "../../assets/INVALID CAR LOGO.png";

type Props = {
  vehicle: Vehicle;
  onClose: () => void;
  redirectPath: string;
};

const VehicleModal: FC<Props> = ({ vehicle, onClose, redirectPath }) => {
  const baseInfo = vehicle.baseVehicleInfo;

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 relative w-full max-w-5xl h-[95vh] overflow-y-auto shadow-2xl"
        onClick={handleInnerClick}
        style={{
          background: "linear-gradient(180deg, #fdefe9 0%, #fff 100%)",
          borderColor: "#E6A895",
          boxShadow:
            "0 8px 20px rgba(155, 17, 30, 0.15), 0 4px 8px rgba(230, 168, 149, 0.2)",
        }}
      >
        <button
          className="absolute top-4 right-4 text-[#9b111e] hover:text-red-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex justify-center items-center w-full py-4">
          <div className="w-[450px] h-64 bg-gray-100 rounded-lg overflow-hidden shadow">
			{/* this give default if the API give Image it Changes */}
            {baseInfo.image && baseInfo.image.trim() !== "" ? (
              <img
                src={baseInfo.image}
                alt={baseInfo.title || "vehicle image"}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = carDefaultlogo;
                }}
              />
            ) : (
              <img
                src={carDefaultlogo}
                alt="default vehicle image"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <h5 className="text-3xl font-bold text-[#9b111e] mb-2">
          {baseInfo.registrationNumber} - {baseInfo.title}
        </h5>

        {vehicle.customerDetails && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#9b111e] mb-4">
              Owner Details
            </h3>
            <table className="w-full table-auto border-collapse border border-[#d7b9a3] text-[#3b2f2f]">
              <tbody>
                {Object.entries(vehicle.customerDetails).map(([key, value]) => (
                  <tr key={key} className="border border-[#d7b9a3]">
                    <td className="border px-4 py-2 font-semibold capitalize w-1/2">
                      {key}
                    </td>
                    <td className="border px-4 py-2">{value || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {vehicle.vehicleInfo && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#9b111e] mb-4">
              Vehicle Details
            </h3>
            <table className="w-full table-auto border-collapse border border-[#d7b9a3] text-[#3b2f2f]">
              <tbody>
                {Object.entries(vehicle.vehicleInfo).map(([key, value]) => (
                  <tr key={key} className="border border-[#d7b9a3]">
                    <td className="border px-4 py-2 font-semibold capitalize w-1/2">
                      {key}
                    </td>
                    <td className="border px-4 py-2">{value || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {vehicle.carCondition && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#9b111e] mb-4">
              Car Condition
            </h3>
            <table className="w-full table-auto border-collapse border border-[#d7b9a3] text-[#3b2f2f]">
              <tbody>
                <tr className="border border-[#d7b9a3]">
                  <td className="border px-4 py-2 font-semibold capitalize w-1/2">
                    Fuel Level
                  </td>
                  <td className="border px-4 py-2">
                    {vehicle.carCondition.fuelLevel}
                  </td>
                </tr>
                <tr className="border border-[#d7b9a3]">
                  <td className="border px-4 py-2 font-semibold capitalize w-1/2">
                    Selected Items
                  </td>
                  <td className="border px-4 py-2">
                    {vehicle.carCondition.selectedItems.join(", ")}
                  </td>
                </tr>
                <tr className="border border-[#d7b9a3]">
                  <td className="border px-4 py-2 font-semibold capitalize w-1/2">
                    Images
                  </td>
                  <td className="border px-4 py-2 space-x-2">
                    {vehicle.carCondition.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`condition-img-${i}`}
                        className="inline-block w-20 h-16 object-cover rounded"
                      />
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-start items-center mt-4">
          <Link
            to={redirectPath}
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow-md transition"
          >
            Job Card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
