/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServiceCenterListPage } from "./ServiceCenterListPage";
import 'flowbite';
// import  "@preline/accordion"
import ServicesList from "./ServicesList";
import ServiceSpareParts from "./ServiceSpareParts";
import ServiceCenterProfileView from "./ServiceCenterprofileview";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getServiceCenter, getServices} from "../../features/ServiceCenter/Service";

export const ServiceManagementPage = () => {
const [activeStep, setActiveStep] = useState(0);
const navigate= useNavigate();
const [partner, setpartner] = useState<number>(0);
const [partnerId,setpartnerId] = useState<string>('')

const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const [Partner, setPartner] = useState<any[]>([]);

  console.log(partnerId,"partner",partner)

  useEffect(() => {
      const getPartner = async() => {
          
            try {
              const data:any = await getServiceCenter('');
              console.log('partner id: ',data)
              setPartner(data.data.data)
              setpartnerId(data.data.data._id)
              console.log("Id", data?.data?._id)
            } catch (error) {
              console.error('failed to get servicecenter:', error)
    
            }
          }
        getPartner()
   
  }, []);
  const [Services, setServices] = useState<any[]>([]);
  
  useEffect(()=>{
    const getService = async()=>{
      try{
        const data:any = await getServices('')
        setServices(data.data.data)
      } catch (error){
        console.error('failed to get services:',error)
      }

    }
    getService()
  },[]);

  // const [Spareparts, setSpareparts] = useState<any[]>([]);
  
  // useEffect(()=>{
  //   const getSparepart = async()=>{
  //     try{
  //       const data:any = await getSpareparts('')
  //       setSpareparts(data.data.data)
  //     } catch (error){
  //       console.error('failed to get spareparts:',error)
  //     }

  //   }
  //   getSparepart()
  // },[]);
    


  return (

    <div className=" min-h-screen">
      <div className="">
        {activeStep === 0 && (
          <ServiceCenterListPage partner={Partner} onView={() => setActiveStep(1)} setpartner={setpartner} handleBack={handleBack}/>
        )}
        {activeStep === 1 && (
          <ServiceCenterProfileView partner={Partner[partner]} onSpareParts={() => setActiveStep(3)} handleBack={handleBack}  setpartnerId={setpartnerId} onServices={() => setActiveStep(2)} />
        )}
        {activeStep === 2 && (
          <ServicesList partnerId={partnerId} onSpareParts={() => setActiveStep(3)} Services={Services}  handleBack={handleBack}/>
        )}
        {activeStep === 3 && <ServiceSpareParts partnerId={partnerId} handleBack={handleBack}/>}
      </div>
    </div>
    )
}
