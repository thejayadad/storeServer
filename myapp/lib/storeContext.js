'use client'
import { createContext, useContext } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children, storeId }) => {
  return (
    <StoreContext.Provider value={{ storeId }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
