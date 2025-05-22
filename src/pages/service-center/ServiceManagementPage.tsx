
import { ServiceCenterListPage } from "./ServiceCenterListPage";
import { Stepper, Step, StepLabel } from "@mui/material";
import 'flowbite';
import  "@preline/accordion"
import ServicesList from "./ServicesList";
import ServiceSpareParts from "./ServiceSpareParts";
import ServiceCenterProfileView from "./ServiceCenterprofileview";
import { useState } from "react";

const steps = ["Service Centers", "Profile", "Services", "Spare Parts"];

export const ServiceManagementPage = () => {
const [activeStep, setActiveStep] = useState(0);
  return (

    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mt-6">
        {activeStep === 0 && (
          <ServiceCenterListPage onView={() => setActiveStep(1)} />
        )}
        {activeStep === 1 && (
          <ServiceCenterProfileView onServices={() => setActiveStep(2)} />
        )}
        {activeStep === 2 && (
          <ServicesList onSpareParts={() => setActiveStep(3)} />
        )}
        {activeStep === 3 && <ServiceSpareParts />}
      </div>
    </div>
    )
}
