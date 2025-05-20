import React from "react";
import { CiSearch } from "react-icons/ci";
import { FONTS } from "../../constants/uiConstants";
import { useNavigate } from "react-router-dom";

type Invoice = {
  id: string;
  name: string;
  invoiceDate: string;
  vehicle: string;
  plate: string;
  total: string;
  paidAmount?: string;
  BalanceDue: string;
  profile: string;
  jobStatus: string;
};

const invoices: Invoice[] = [
  {
    id: "INV001",
    name: "Sameena Khan",
    invoiceDate: "2025-05-18",
    vehicle: "Toyato",
    plate: "ABC-1234",
    total: "$2500.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "completed",
  },
  {
    id: "INV002",
    name: "John Doe",
    invoiceDate: "2025-05-17",
    vehicle: "Honda",
    plate: "XYZ-5678",
    total: "$1800.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "in progress",
  },
  {
    id: "INV003",
    name: "Jane Smith",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV005",
    name: "Smith",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$700.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV006",
    name: "Jane",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$900.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
];

export const JobCardsPage: React.FC = () => {
  const navigate = useNavigate();

import React from "react";
import { CiSearch } from "react-icons/ci";
import { FONTS } from "../../constants/uiConstants";


type Invoice = {
  id: string;
  name: string;
  invoiceDate: string;
  vehicle: string;
  plate: string;
  total: string;
  paidAmount?: string;
  BalanceDue: string;
  profile: string;
  jobStatus: string;
};

const invoices: Invoice[] = [
  {
    id: "INV001",
    name: "Sameena Khan",
    invoiceDate: "2025-05-18",
    vehicle: "Toyato",
    plate: "ABC-1234",
    total: "$2500.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "completed",
  },
  {
    id: "INV002",
    name: "John Doe",
    invoiceDate: "2025-05-17",
    vehicle: "Honda",
    plate: "XYZ-5678",
    total: "$1800.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "in progress",
  },
  {
    id: "INV003",
    name: "Jane Smith",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$500.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV005",
    name: "Smith",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$700.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
  {
    id: "INV006",
    name: "Jane",
    invoiceDate: "2025-05-16",
    vehicle: "Suzuki",
    plate: "LMN-9012",
    total: "$3000.00",
    paidAmount: "$900.00",
    BalanceDue: "100.00",
    profile: "150",
    jobStatus: "In Progress",
  },
];

export const JobCardsPage = () => {
  return (
    <div>JobCardsPage</div>
  )
}
//