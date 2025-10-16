import { createContext, useContext } from "react";

const TooltipProviderContext = createContext({});

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProviderContext.Provider value={{}}>
      {children}
    </TooltipProviderContext.Provider>
  );
}