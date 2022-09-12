import React, { createContext, useCallback, useState, useContext } from 'react';

interface StockContextI {
  contextStock: string;
  setStock(stock: string): string;
}

const StockContext = createContext<StockContextI>({} as StockContextI);

export const StockProvider: React.FC = ({ children }) => {
  const [contextStock, setContextStock] = useState('AAPL');

  const setStock = useCallback((stock: string) => {
    setContextStock(stock);
    return stock;
  }, []);

  return (
    <StockContext.Provider value={{ contextStock, setStock }}>
      {children}
    </StockContext.Provider>
  );
};

export function useStock(): StockContextI {
  const context = useContext(StockContext);

  if (!context) {
    throw new Error('useStock must be used within an StockProvider.');
  }

  return context;
}
