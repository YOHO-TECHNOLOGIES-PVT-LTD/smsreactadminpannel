// Recharts wrapper to ensure React is available before loading charts
import '../../../react-shim'; // Ensure React shim is loaded first
import { ReactNode } from 'react';

interface RechartsWrapperProps {
  children: ReactNode;
}

export const RechartsWrapper = ({ children }: RechartsWrapperProps) => {
  return <>{children}</>;
};

// Re-export Recharts components with React shim loaded
export * from 'recharts';