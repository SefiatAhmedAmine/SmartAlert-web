import React, { createContext, useContext, useState } from 'react';

const CarContext = createContext();

export const useCar = () => {
  return useContext(CarContext);
};

export const CarProvider = ({ children }) => {
  const [car, setCar] = useState(null);

  return (
    <CarContext.Provider value={{ car, setCar }}>
      {children}
    </CarContext.Provider>
  );
};
