export type Vehicle = {
  baseVehicleInfo: {
    image: string;
    title: string;
    registrationNumber: string;
  };
  vehicleInfo: {
    kms: string;
    fuel: string;
    transmission: string;
    location: string;
    registeredYear: string;
    insuranceStatus: string;
    availability: string;
    currentFuelLevel?: "Empty" | "Quarter" | "Half Tank" | "Full";
  };
  partnerDetails: {
    partnerName: string;
    partnerPhone: string;
    partnerAddress: string;
  };
  customerDetails: {
    fullName: string;
  };
  carCondition: {
    fuelLevel: string;
    selectedItems: string[];
    images: string[];
  };
  checkInOutDates: {
    checkInDate: string;
    checkOutDate: string;
  };
};