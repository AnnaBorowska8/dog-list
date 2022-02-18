import React, { useState, useMemo, createContext } from 'react';

export const StoreContext = createContext({ chosenDog: null });
const StoreProvider = ({ children }) => {
  const [chosenDog, setChosenDog] = useState({});

  const value = useMemo(() => ({
    chosenDog: chosenDog,
    setChosenDog,
  }), [chosenDog]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export default StoreProvider;

