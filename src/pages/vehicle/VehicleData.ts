import car1 from '../../assets/loginimg/cars-img-folder/car1.png';
import car2 from '../../assets/loginimg/cars-img-folder/car2.png';
import car3 from '../../assets/loginimg/cars-img-folder/car3.png';
import car4 from '../../assets/loginimg/cars-img-folder/car4.png';
import car5 from '../../assets/loginimg/cars-img-folder/car5 - Copy.png';

export interface Vehicle {
	BasevehicleInfo: {
		title: string;
		image: string;
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
		currentFuelLevel?: 'Empty' | 'Quarter' | 'Half Tank' | 'Full';
		rcAvailable?: boolean;
		pollutionCertificate?: string;
		lastServiceDate?: string;
		nextServiceDue?: string;
		warrantyStatus?: string;
	};

	carCondition?: {
		engine: string;
		battery: string;
		lights: string;
		tyres: string;
		brakes: string;
		ac: string;
		suspension: string;
		interior: string;
		exterior: string;
		infotainment: string;
	};

	customerDetails?: {
		fullName: string; // owner name
		email: string;
		phoneNumber: string;
		address: string;
		gender?: 'Male' | 'Female' | 'Other';
		membershipStatus?: 'Active' | 'Inactive' | 'Pending';
	};
}

const vehicleData: Vehicle[] = [
	{
		BasevehicleInfo: {
			title: '2019 Mahindra XUV500 W9',
			image: car5,
			registrationNumber: 'TN 07 AB 1234',
		},
		vehicleInfo: {
			kms: '50,000 Kms',
			fuel: 'Diesel',
			transmission: 'Manual',
			location: 'Perungudi, Chennai',
			registeredYear: '2019',
			insuranceStatus: 'Valid till Nov 2024',
			availability: 'Available',
			currentFuelLevel: 'Half Tank',
			rcAvailable: true,
			pollutionCertificate: 'Valid till Dec 2025',
			lastServiceDate: '2025-04-01',
			nextServiceDue: '2025-10-01',
			warrantyStatus: 'Expired',
		},
		carCondition: {
			engine: 'Good',
			battery: 'New',
			lights: 'Fully Functional',
			tyres: '70% tread left',
			brakes: 'Good condition',
			ac: 'Cooling well',
			suspension: 'Smooth ride',
			interior: 'Well maintained',
			exterior: 'Minor scratches',
			infotainment: 'Works perfectly',
		},
		customerDetails: {
			fullName: 'Suresh Kumar',
			email: 'suresh.kumar@example.com',
			phoneNumber: '+91 9876543210',
			address: '12, MG Road, Chennai, Tamil Nadu',
			gender: 'Male',
			membershipStatus: 'Active',
		},
	},
	{
		BasevehicleInfo: {
			title: '2020 Hyundai Creta SX',
			image: car1,
			registrationNumber: 'KA 03 XY 5678',
		},
		vehicleInfo: {
			kms: '30,000 Kms',
			fuel: 'Petrol',
			transmission: 'Automatic',
			location: 'Bangalore',
			registeredYear: '2020',
			insuranceStatus: 'Valid till Jan 2026',
			availability: 'Available',
			currentFuelLevel: 'Full',
			rcAvailable: true,
			pollutionCertificate: 'Valid till Jan 2026',
			lastServiceDate: '2025-03-15',
			nextServiceDue: '2025-09-15',
			warrantyStatus: 'Active',
		},
		carCondition: {
			engine: 'Excellent',
			battery: 'Good',
			lights: 'Fully Functional',
			tyres: 'New',
			brakes: 'Excellent',
			ac: 'Excellent cooling',
			suspension: 'No issues',
			interior: 'Like new',
			exterior: 'No scratches',
			infotainment: 'Updated system',
		},
		customerDetails: {
			fullName: 'Anita Sharma',
			email: 'anita.sharma@example.com',
			phoneNumber: '+91 8765432109',
			address: '45, MG Road, Bangalore, Karnataka',
			gender: 'Female',
			membershipStatus: 'Active',
		},
	},
	{
		BasevehicleInfo: {
			title: '2018 Tata Nexon XE',
			image: car2,
			registrationNumber: 'MH 12 CD 3456',
		},
		vehicleInfo: {
			kms: '75,000 Kms',
			fuel: 'Diesel',
			transmission: 'Manual',
			location: 'Mumbai',
			registeredYear: '2018',
			insuranceStatus: 'Expired',
			availability: 'Unavailable',
			currentFuelLevel: 'Quarter',
			rcAvailable: false,
			pollutionCertificate: 'Expired',
			lastServiceDate: '2024-12-01',
			nextServiceDue: '2025-06-01',
			warrantyStatus: 'Expired',
		},
		carCondition: {
			engine: 'Fair',
			battery: 'Needs replacement',
			lights: 'Some not working',
			tyres: '50% tread left',
			brakes: 'Needs servicing',
			ac: 'Cooling slowly',
			suspension: 'Needs check',
			interior: 'Moderate wear',
			exterior: 'Several scratches',
			infotainment: 'Basic system',
		},
		customerDetails: {
			fullName: 'Ravi Patel',
			email: 'ravi.patel@example.com',
			phoneNumber: '+91 9988776655',
			address: '78, Marine Drive, Mumbai, Maharashtra',
			gender: 'Male',
			membershipStatus: 'Inactive',
		},
	},
	{
		BasevehicleInfo: {
			title: '2021 Honda City ZX',
			image: car3,
			registrationNumber: 'DL 09 EF 7890',
		},
		vehicleInfo: {
			kms: '25,000 Kms',
			fuel: 'Petrol',
			transmission: 'Automatic',
			location: 'New Delhi',
			registeredYear: '2021',
			insuranceStatus: 'Valid till Dec 2025',
			availability: 'Available',
			currentFuelLevel: 'Full',
			rcAvailable: true,
			pollutionCertificate: 'Valid till Dec 2025',
			lastServiceDate: '2025-01-20',
			nextServiceDue: '2025-07-20',
			warrantyStatus: 'Active',
		},
		carCondition: {
			engine: 'Excellent',
			battery: 'New',
			lights: 'Fully Functional',
			tyres: 'New',
			brakes: 'Excellent',
			ac: 'Very good',
			suspension: 'Smooth',
			interior: 'Pristine',
			exterior: 'Like new',
			infotainment: 'Latest version',
		},
		customerDetails: {
			fullName: 'Neha Gupta',
			email: 'neha.gupta@example.com',
			phoneNumber: '+91 9123456780',
			address: '34, Connaught Place, New Delhi',
			gender: 'Female',
			membershipStatus: 'Active',
		},
	},
	{
		BasevehicleInfo: {
			title: '2017 Ford Ecosport Titanium',
			image: car4,
			registrationNumber: 'TN 10 GH 4321',
		},
		vehicleInfo: {
			kms: '90,000 Kms',
			fuel: 'Diesel',
			transmission: 'Manual',
			location: 'Chennai',
			registeredYear: '2017',
			insuranceStatus: 'Expired',
			availability: 'Unavailable',
			currentFuelLevel: 'Empty',
			rcAvailable: false,
			pollutionCertificate: 'Expired',
			lastServiceDate: '2024-10-10',
			nextServiceDue: '2025-04-10',
			warrantyStatus: 'Expired',
		},
		carCondition: {
			engine: 'Needs overhaul',
			battery: 'Old',
			lights: 'Some broken',
			tyres: 'Worn out',
			brakes: 'Needs replacement',
			ac: 'Not working',
			suspension: 'Noisy',
			interior: 'Worn',
			exterior: 'Dents and scratches',
			infotainment: 'Old system',
		},
		customerDetails: {
			fullName: 'Arjun Ramesh',
			email: 'arjun.ramesh@example.com',
			phoneNumber: '+91 9876501234',
			address: '56, Anna Nagar, Chennai, Tamil Nadu',
			gender: 'Male',
			membershipStatus: 'Pending',
		},
	},
];

export default vehicleData;
