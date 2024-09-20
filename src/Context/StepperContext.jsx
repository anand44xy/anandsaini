import React, { createContext, useState } from 'react';

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [complete, setComplete] = useState([]);

  return (
    <StepperContext.Provider value={{ userData, setUserData, complete, setComplete }}>
      {children}
    </StepperContext.Provider>
  );
};
