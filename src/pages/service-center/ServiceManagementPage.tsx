import { ServiceCenterListPage } from "./ServiceCenterListPage";
import 'flowbite';
import  "@preline/accordion"
import ServicesList from "./ServicesList";
import ServiceSpareParts from "./ServiceSpareParts";
import ServiceCenterProfileView from "./ServiceCenterprofileview";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const ServiceManagementPage = () => {
const [activeStep, setActiveStep] = useState(0);
const navigate= useNavigate();

const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    } else {
      navigate(-1);
    }
  };

  return (

    <div className=" bg-gray-50 min-h-screen">
      <div className="">
        {activeStep === 0 && (
          <ServiceCenterListPage onView={() => setActiveStep(1)}  handleBack={handleBack}/>
        )}
        {activeStep === 1 && (
          <ServiceCenterProfileView onServices={() => setActiveStep(2)} handleBack={handleBack} />
        )}
        {activeStep === 2 && (
          <ServicesList onSpareParts={() => setActiveStep(3)} handleBack={handleBack}/>
        )}
        {activeStep === 3 && <ServiceSpareParts handleBack={handleBack}/>}
      </div>
    </div>
    )
}
