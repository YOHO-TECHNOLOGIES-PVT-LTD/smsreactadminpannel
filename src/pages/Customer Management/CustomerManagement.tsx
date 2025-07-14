import  { useState,useEffect } from 'react';
import CustomerProfileDetails from './CustomerProfileDetails';
import CustomerDetails from './CustomerDetails';
import { getAllCustomer } from './Services';
import { useNavigate } from 'react-router-dom';


const CustomerManagement = () => {
	const [activeStep , setActiveStep] = useState (0);
  // const [customerData, setCustomerData] = useState<any[]>([]);
  const [CustomerId, setCustomerId] = useState('')
  const navigate= useNavigate();

  // useEffect(() => {
  //   const fetchCustomer = async () => {
  //     try {
  //       const response: any = await getAllCustomer("");
  //       console.log("Fetched customers", response.data.customer);
  //       setCustomerData(response.data.customer);
  //     } catch (error) {
  //       console.log("Error fetching customer", error);
  //     }
  //   };
  //   fetchCustomer();
  // }, []);



const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    } else {
      navigate(-1); 
    }
  };



	return <div>
		{activeStep === 0 && (
          <CustomerDetails onProfileView={() => setActiveStep(1)} setCustomerId={setCustomerId}/>
        )}
        {activeStep === 1 && (
          <CustomerProfileDetails CustomerId={CustomerId}  handleBack={handleBack}/>
        )}
	</div>;
};

export default CustomerManagement;
