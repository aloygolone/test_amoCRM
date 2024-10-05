import { createContext, FC, PropsWithChildren, useState } from "react";
import { LeadsContextType, LeadType } from "../type";

export const LeadsContext = createContext<LeadsContextType | null>(null);

export const LeadsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [leads, setLeads] = useState<LeadType[]>([]);

  return (
    <LeadsContext.Provider value={{ leads, setLeads }}>
      {children}
    </LeadsContext.Provider>
  );
};
