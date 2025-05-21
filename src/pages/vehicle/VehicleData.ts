import car1 from '../../assets/loginimg/cars-img-folder/car1.png';
import car2 from '../../assets/loginimg/cars-img-folder/car2.png';
import car3 from '../../assets/loginimg/cars-img-folder/car3.png';
import car4 from '../../assets/loginimg/cars-img-folder/car4.png';
import car5 from '../../assets/loginimg/cars-img-folder/car5.png';


export interface Vehicle {
  title: string;
  image: string;
  kms: string;
  fuel: string;
  transmission: string;
  price: string;
  location: string;
}

const vehicleData: Vehicle[] = [
  {
    title: "2020 Maruti Suzuki Swift VXI",
    image: car1,
    kms: "42,000 Kms",
    fuel: "Petrol",
    transmission: "Manual",
    price: "5,20,000",
    location: "Velachery, Chennai"
  },
  {
    title: "2018 Hyundai Creta SX Diesel",
    image: car2,
    kms: "76,500 Kms",
    fuel: "Diesel",
    transmission: "Manual",
    price: "8,90,000",
    location: "Anna Nagar, Chennai"
  },
  {
    title: "2021 Tata Nexon XZA Plus",
    image: car3,
    kms: "28,300 Kms",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "10,50,000",
    location: "OMR, Chennai"
  },
  {
    title: "2017 Honda City VX CVT",
    image: car4,
    kms: "64,000 Kms",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "7,40,000",
    location: "T. Nagar, Chennai"
  },
  {
    title: "2019 Mahindra XUV500 W9",
    image: car5,
    kms: "50,000 Kms",
    fuel: "Diesel",
    transmission: "Manual",
    price: "11,30,000",
    location: "Perungudi, Chennai"
  },
 
];

export default vehicleData;
