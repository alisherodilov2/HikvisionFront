import React, { createContext, useState } from "react";

// Create the context
export const PaginationContext = createContext();

// Create a provider component
export const PaginationProvider = ({ children }) => {
  const [currectPage, setCurrectPage] = useState(0);
  const [paginationCount, setPaginationCount] = useState(0);

  return (
    <PaginationContext.Provider
      value={{ currectPage, setCurrectPage, paginationCount, setPaginationCount }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
