import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type SOSRequest = {
  id: number;
  location: string;
  name: string;
  status: string;
  view: string;
};

type Service = {
  id: number;
  name: string;
  active: boolean;
};

const SosDashboard = () => {
  return (
    <div>SosDashboard</div>
  )
}

export default SosDashboard