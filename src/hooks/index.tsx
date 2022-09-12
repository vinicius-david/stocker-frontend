import React from 'react';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { StockProvider } from './StockContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <StockProvider>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </StockProvider>
  );
};

export default AppProvider;
