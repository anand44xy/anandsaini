import React, { useState } from "react";
import StepControlar from "./Components/StepControlar";
import Stepper from "./Components/Stepper";
import AddressInfo from "./Components/AddressInfo";
import Complete from "./Components/Complete";
import PersonalInfo from "./Components/PersonalInfo";
import { StepperProvider } from "./Context/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  const steps = [
    "Personal Information",
    "Address Information",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1: return <PersonalInfo userData={userData} setUserData={setUserData} errors={errors} setErrors={setErrors} />;
      case 2: return <AddressInfo userData={userData} setUserData={setUserData} errors={errors} setErrors={setErrors} />;
      case 3: return <Complete userData={userData} />;
      default: return null;
    }
  };

  const validatePersonalInfo = () => {
    const { name, email, phone } = userData;
    const newErrors = {};
    
    if (!name) newErrors.name = "Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAddressInfo = () => {
    const { addressLine1, city, state, zipCode } = userData;
    const newErrors = {};
    
    if (!addressLine1) newErrors.addressLine1 = "Address Line 1 is required.";
    if (!city) newErrors.city = "City is required.";
    if (!state) newErrors.state = "State is required.";
    if (!zipCode) {
      newErrors.zipCode = "Zip Code is required.";
    } else if (!/^\d{6}$/.test(zipCode)) {
      newErrors.zipCode = "Zip Code must be exactly 6 digits.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    if (direction === "next") {
      if (newStep === 1 && !validatePersonalInfo()) return;
      if (newStep === 2 && !validateAddressInfo()) return;
      newStep++;
    } else {
      if (newStep > 1) newStep--;
    }
    
    setCurrentStep(newStep);
  };

  return (
    <StepperProvider value={{ userData, setUserData }}>
      <div className="md:w-1/2 m-auto shadow-xl rounded-2xl pb-2 bg-white">
        <Stepper steps={steps} currentStep={currentStep} />
        <div>
          {displayStep(currentStep)}
        </div>
        <StepControlar handleClick={handleClick} currentStep={currentStep} steps={steps} />
      </div>
    </StepperProvider>
  );
}

export default App;
